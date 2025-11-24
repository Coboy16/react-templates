import { useState, useEffect } from 'react';
import type { Template3Settings } from '../types/auth.types';
import { AuthController } from '../../../controllers/authController';
import { Logger } from '../../../utils/logger';

export const useAuthTemplate = (isReady: boolean, currentSection: string) => {
  const [template, setTemplate] = useState('template1');
  const [template3Settings, setTemplate3Settings] = useState<Template3Settings>({
    backgroundImage: null,
    logoImage: null,
    showGoogle: true,
    showApple: true,
    showTerms: true,
  });

  useEffect(() => {
    if (isReady && currentSection === 'auth' && AuthController.isAvailable()) {
      AuthController.updateTemplate(template);
    } else if (currentSection === 'auth' && !AuthController.isAvailable()) {
      Logger.warn('Esperando que authControls esté disponible...');
    }
  }, [template, currentSection, isReady]);

  useEffect(() => {
    if (isReady && currentSection === 'auth' && template === 'template3' && AuthController.isAvailable()) {
      AuthController.updateTemplate3Settings(template3Settings);
    }
  }, [template3Settings, currentSection, template, isReady]);

  return {
    template,
    setTemplate,
    template3Settings,
    setTemplate3Settings,
  };
};