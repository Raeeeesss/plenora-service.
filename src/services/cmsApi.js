import { supabase } from '../lib/supabase';
import { resolveServiceImage } from '../utils/imageMapper';

export const fallbackBusinessSettings = {
  business_name: 'Plenora Service',
  primary_phone: '+91 8139895446',
  secondary_phone: '+91 9074810790',
  whatsapp_number: '918139895446',
  support_email: 'plenoraservice@gmail.com',
  operating_address: 'Kuttippuram, Malappuram District, Kerala, India',
  google_maps_embed_url:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31333.64923483984!2d76.01524388437502!3d10.838541249999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c4b4a3a60c6d%3A0xc395f87b649d28c3!2sKuttippuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  working_hours_display: 'Mon - Sun: 8AM - 8PM',
  sla_response_time: 'We reply within 30 minutes',
  facebook_url: 'https://facebook.com',
  instagram_url: 'https://instagram.com',
};

/**
 * Fetches global business settings (Phone numbers, WhatsApp, Email, Operating address, Map URL)
 */
export async function fetchBusinessSettings() {
  try {
    const { data, error } = await supabase
      .from('business_settings')
      .select('*')
      .eq('id', 1)
      .maybeSingle();

    if (error || !data) {
      return fallbackBusinessSettings;
    }

    return data;
  } catch (err) {
    console.warn('[cmsApi] fetchBusinessSettings fallback:', err);
    return fallbackBusinessSettings;
  }
}

/**
 * Fetches a specific CMS section by page_key and section_key
 */
export async function fetchCmsSection(pageKey, sectionKey) {
  try {
    const { data, error } = await supabase
      .from('cms_sections')
      .select(`
        *,
        cms_pages!inner (
          page_key
        )
      `)
      .eq('cms_pages.page_key', pageKey)
      .eq('section_key', sectionKey)
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    return {
      ...data,
      image_resolved: resolveServiceImage(data.image_url),
    };
  } catch (err) {
    console.warn(`[cmsApi] fetchCmsSection (${pageKey}.${sectionKey}) fallback:`, err);
    return null;
  }
}

/**
 * Fetches all CMS sections for a given page key (HOME, ABOUT_US, WHY_PLENORA, CONTACT)
 */
export async function fetchCmsPage(pageKey) {
  try {
    const { data, error } = await supabase
      .from('cms_pages')
      .select(`
        *,
        cms_sections (*)
      `)
      .eq('page_key', pageKey)
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    // Index sections by section_key for O(1) access
    const sectionsMap = {};
    (data.cms_sections || []).forEach((sec) => {
      sectionsMap[sec.section_key] = {
        ...sec,
        image_resolved: resolveServiceImage(sec.image_url),
      };
    });

    return {
      page: data,
      sections: sectionsMap,
    };
  } catch (err) {
    console.warn(`[cmsApi] fetchCmsPage (${pageKey}) fallback:`, err);
    return null;
  }
}
