import { supabase } from '../lib/supabase';
import { servicesData as fallbackServicesData, slugAliases as fallbackSlugAliases } from '../data/servicesData';
import { resolveServiceImage } from '../utils/imageMapper';

/**
 * Normalizes a database service record into UI-ready shape
 */
function normalizeService(service, categoryName = null) {
  if (!service) return null;

  return {
    id: service.id,
    slug: service.slug,
    title: service.title,
    category: categoryName || service.categories?.name || service.category || 'General',
    categoryId: service.category_id,
    price: service.price_display || (service.base_price ? `From ₹${service.base_price}` : 'Custom Quote'),
    basePrice: service.base_price,
    shortDescription: service.short_description || service.shortDescription || '',
    fullDescription: service.full_description || service.fullDescription || '',
    heroImage: resolveServiceImage(service.hero_image_url || service.heroImage),
    heroImageUrl: service.hero_image_url || service.heroImage,
    isAvailable: Boolean(service.is_available ?? service.isAvailable),
    isFeatured: Boolean(service.is_featured ?? service.isFeatured),
    estimatedDurationMin: service.estimated_duration_min || 120,
    sortOrder: service.sort_order || 0,
    whatsIncluded: (service.service_inclusions || []).map((i) => i.inclusion_text),
    features: (service.service_features || []).map((f) => ({ title: f.title, desc: f.description })),
    faqs: (service.service_faqs || []).map((faq) => ({ question: faq.question, answer: faq.answer })),
    variants: (service.service_variants || []).map((v) => ({
      id: v.id,
      name: v.variant_name,
      unitDescriptor: v.unit_descriptor,
      price: v.price,
      durationMinutes: v.duration_minutes,
    })),
    addons: (service.service_addons || []).map((a) => ({
      id: a.id,
      name: a.name,
      description: a.description,
      price: a.price,
      durationMinutes: a.duration_minutes,
      iconUrl: a.icon_url,
    })),
  };
}

/**
 * Fetches all active categories from Supabase
 */
export async function fetchCategories() {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) {
      // Fallback categories from fallback data
      return [
        { id: '1', name: 'Home & Office', slug: 'home-office' },
        { id: '2', name: 'Vehicle', slug: 'vehicle' },
        { id: '3', name: 'Outdoor', slug: 'outdoor' },
        { id: '4', name: 'Bathroom', slug: 'bathroom' },
        { id: '5', name: 'Specialized', slug: 'specialized' },
      ];
    }

    return data;
  } catch (err) {
    console.warn('[servicesApi] fetchCategories fallback:', err);
    return [
      { id: '1', name: 'Home & Office', slug: 'home-office' },
      { id: '2', name: 'Vehicle', slug: 'vehicle' },
      { id: '3', name: 'Outdoor', slug: 'outdoor' },
      { id: '4', name: 'Bathroom', slug: 'bathroom' },
      { id: '5', name: 'Specialized', slug: 'specialized' },
    ];
  }
}

/**
 * Fetches all services from Supabase
 */
export async function fetchServices() {
  try {
    const { data, error } = await supabase
      .from('services')
      .select(`
        *,
        categories (
          id,
          name,
          slug
        )
      `)
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) {
      // Return normalized fallback
      return Object.values(fallbackServicesData).map((s) => ({
        ...s,
        heroImage: resolveServiceImage(s.heroImage),
        isAvailable: Boolean(s.isAvailable),
      }));
    }

    return data.map((s) => normalizeService(s));
  } catch (err) {
    console.warn('[servicesApi] fetchServices fallback:', err);
    return Object.values(fallbackServicesData).map((s) => ({
      ...s,
      heroImage: resolveServiceImage(s.heroImage),
      isAvailable: Boolean(s.isAvailable),
    }));
  }
}

/**
 * Fetches featured services for Home page showcase
 */
export async function fetchFeaturedServices() {
  try {
    const { data, error } = await supabase
      .from('services')
      .select(`
        *,
        categories (
          id,
          name,
          slug
        )
      `)
      .eq('is_featured', true)
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) {
      // Fallback: 4 featured services from static data
      const featuredSlugs = [
        'vehicle-foam-washing',
        'house-office-deep-cleaning',
        'bathroom-deep-cleaning',
        'interlock-cleaning',
      ];
      return featuredSlugs.map((slug) => {
        const item = fallbackServicesData[slug];
        return {
          ...item,
          heroImage: resolveServiceImage(item.heroImage),
          isAvailable: Boolean(item.isAvailable),
        };
      });
    }

    return data.map((s) => normalizeService(s));
  } catch (err) {
    console.warn('[servicesApi] fetchFeaturedServices fallback:', err);
    return Object.values(fallbackServicesData).slice(0, 4).map((s) => ({
      ...s,
      heroImage: resolveServiceImage(s.heroImage),
      isAvailable: Boolean(s.isAvailable),
    }));
  }
}

/**
 * Fetches a single service by slug (or alias), including inclusions, features, FAQs, and related services
 */
export async function fetchServiceBySlug(slug) {
  if (!slug) return null;

  try {
    // 1. Check if slug is an alias in service_slug_aliases
    let targetSlug = slug;
    const { data: aliasData } = await supabase
      .from('service_slug_aliases')
      .select('canonical_service_id, services(slug)')
      .eq('alias_slug', slug)
      .maybeSingle();

    if (aliasData?.services?.slug) {
      targetSlug = aliasData.services.slug;
    } else if (fallbackSlugAliases[slug]) {
      targetSlug = fallbackSlugAliases[slug];
    }

    // 2. Query service with nested inclusions, features, faqs, variants, and addons
    const { data, error } = await supabase
      .from('services')
      .select(`
        *,
        categories (
          id,
          name,
          slug
        ),
        service_inclusions (
          id,
          inclusion_text,
          sort_order
        ),
        service_features (
          id,
          title,
          description,
          sort_order
        ),
        service_faqs (
          id,
          question,
          answer,
          sort_order
        ),
        service_variants (
          id,
          variant_name,
          unit_descriptor,
          price,
          duration_minutes,
          sort_order
        ),
        service_addons (
          id,
          name,
          description,
          price,
          duration_minutes,
          icon_url,
          sort_order
        )
      `)
      .eq('slug', targetSlug)
      .maybeSingle();

    if (error || !data) {
      // Check fallback data
      const fallbackItem = fallbackServicesData[targetSlug] || fallbackServicesData[slug];
      if (!fallbackItem) return null;

      // Get 3 related services from fallback
      const related = Object.values(fallbackServicesData)
        .filter((s) => s.slug !== fallbackItem.slug)
        .slice(0, 3)
        .map((s) => ({
          ...s,
          heroImage: resolveServiceImage(s.heroImage),
          isAvailable: Boolean(s.isAvailable),
        }));

      return {
        service: {
          ...fallbackItem,
          heroImage: resolveServiceImage(fallbackItem.heroImage),
          isAvailable: Boolean(fallbackItem.isAvailable),
        },
        relatedServices: related,
      };
    }

    // Sort nested items
    if (data.service_inclusions) {
      data.service_inclusions.sort((a, b) => a.sort_order - b.sort_order);
    }
    if (data.service_features) {
      data.service_features.sort((a, b) => a.sort_order - b.sort_order);
    }
    if (data.service_faqs) {
      data.service_faqs.sort((a, b) => a.sort_order - b.sort_order);
    }

    const normalizedService = normalizeService(data);

    // 3. Fetch 3 related services
    const { data: relatedData } = await supabase
      .from('services')
      .select('*, categories(name)')
      .neq('id', data.id)
      .limit(3);

    const relatedServices = (relatedData || []).map((s) => normalizeService(s));

    return {
      service: normalizedService,
      relatedServices,
    };
  } catch (err) {
    console.warn('[servicesApi] fetchServiceBySlug fallback:', err);
    const fallbackItem = fallbackServicesData[slug] || fallbackServicesData[fallbackSlugAliases[slug]];
    if (!fallbackItem) return null;

    const related = Object.values(fallbackServicesData)
      .filter((s) => s.slug !== fallbackItem.slug)
      .slice(0, 3)
      .map((s) => ({
        ...s,
        heroImage: resolveServiceImage(s.heroImage),
        isAvailable: Boolean(s.isAvailable),
      }));

    return {
      service: {
        ...fallbackItem,
        heroImage: resolveServiceImage(fallbackItem.heroImage),
        isAvailable: Boolean(fallbackItem.isAvailable),
      },
      relatedServices: related,
    };
  }
}
