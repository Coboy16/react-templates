import { useState, useEffect } from 'react';
import type { SponsorsSettings } from '../types/sponsors.types';
import { SponsorsController } from '../../../controllers/sponsorsController';

export const useSponsorsSettings = (isReady: boolean, currentSection: string) => {
  const [settings, setSettings] = useState<SponsorsSettings>({
    viewMode: 'card',
    showImage: true,
    showTitle: true,
    showLinkedin: true,
    showDescription: true,
  });

  useEffect(() => {
    if (isReady && currentSection === 'sponsors') {
      SponsorsController.updateSettings(settings);
    }
  }, [settings, currentSection, isReady]);

  return {
    settings,
    setSettings,
  };
};