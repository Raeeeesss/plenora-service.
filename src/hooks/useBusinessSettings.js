import { useState, useEffect } from 'react';
import { fetchBusinessSettings, fallbackBusinessSettings } from '../services/cmsApi';

export function useBusinessSettings() {
  const [settings, setSettings] = useState(fallbackBusinessSettings);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function loadSettings() {
      try {
        const data = await fetchBusinessSettings();
        if (isMounted && data) {
          setSettings(data);
        }
      } catch (err) {
        console.error('[useBusinessSettings] Error fetching settings:', err);
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadSettings();
    return () => {
      isMounted = false;
    };
  }, []);

  return { settings, loading, error };
}
