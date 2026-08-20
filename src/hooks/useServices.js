import { useState, useEffect, useCallback } from 'react';
import { fetchServices, fetchFeaturedServices, fetchCategories } from '../services/servicesApi';

export function useServices() {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [servicesRes, categoriesRes] = await Promise.all([
        fetchServices(),
        fetchCategories(),
      ]);
      setServices(servicesRes);
      setCategories(categoriesRes);
    } catch (err) {
      console.error('[useServices] Error fetching services:', err);
      setError(err.message || 'Failed to load services.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    services,
    categories,
    loading,
    error,
    refetch: loadData,
  };
}

export function useFeaturedServices() {
  const [featuredServices, setFeaturedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchFeaturedServices();
      setFeaturedServices(res);
    } catch (err) {
      console.error('[useFeaturedServices] Error fetching featured services:', err);
      setError(err.message || 'Failed to load featured services.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    featuredServices,
    loading,
    error,
    refetch: loadData,
  };
}
