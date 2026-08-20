import { useState, useEffect, useCallback } from 'react';
import { fetchServiceBySlug } from '../services/servicesApi';

export function useServiceDetail(slug) {
  const [service, setService] = useState(null);
  const [relatedServices, setRelatedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const loadService = useCallback(async () => {
    if (!slug) {
      setLoading(false);
      setNotFound(true);
      return;
    }

    setLoading(true);
    setError(null);
    setNotFound(false);

    try {
      const result = await fetchServiceBySlug(slug);
      if (!result || !result.service) {
        setService(null);
        setRelatedServices([]);
        setNotFound(true);
      } else {
        setService(result.service);
        setRelatedServices(result.relatedServices || []);
        setNotFound(false);
      }
    } catch (err) {
      console.error(`[useServiceDetail] Error fetching service (${slug}):`, err);
      setError(err.message || 'Failed to load service details.');
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    loadService();
  }, [loadService]);

  return {
    service,
    relatedServices,
    loading,
    error,
    notFound,
    refetch: loadService,
  };
}
