import { useState, useEffect } from 'react';
import { fetchCmsSection, fetchCmsPage } from '../services/cmsApi';

export function useCmsSection(pageKey, sectionKey) {
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const data = await fetchCmsSection(pageKey, sectionKey);
        if (isMounted) setSection(data);
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, [pageKey, sectionKey]);

  return { section, loading, error };
}

export function useCmsPage(pageKey) {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const data = await fetchCmsPage(pageKey);
        if (isMounted) setPageData(data);
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, [pageKey]);

  return {
    page: pageData?.page,
    sections: pageData?.sections || {},
    loading,
    error,
  };
}
