import { useState, useEffect } from 'react';
import type {
  ProfileInfoSettings,
  ProfileDetailsSettings,
} from '../types/login.types';
import { LoginController } from '../../../controllers/loginController';
import { Logger } from '../../../utils/logger';

export const useLoginSettings = (isReady: boolean, currentSection: string) => {
  const [currentPage, setCurrentPage] = useState('select_event');
  
  const [profileInfoSettings, setProfileInfoSettings] =
    useState<ProfileInfoSettings>({
      showName: true,
      showCountry: true,
      showEmail: true,
      canEditPhoto: true,
    });

  const [profileDetailsSettings, setProfileDetailsSettings] =
    useState<ProfileDetailsSettings>({
      showPosition: true,
      showLinkedin: true,
      showAbout: true,
      canEditPosition: false,
      linkedinRequired: true,
      aboutRequired: false,
    });

  // Setup callback for Flutter to notify React of page changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Crear el objeto reactCallbacks si no existe
      if (!window.reactCallbacks) {
        window.reactCallbacks = {};
      }
      
      // Registrar el callback para cambios de página desde Flutter
      window.reactCallbacks.onLoginPageChange = (page: string) => {
        Logger.info(`Flutter notificó cambio de página a: ${page}`);
        setCurrentPage(page);
      };
      
      Logger.success('Callback onLoginPageChange registrado');
    }

    return () => {
      // Cleanup
      if (window.reactCallbacks) {
        delete window.reactCallbacks.onLoginPageChange;
      }
    };
  }, []);

  // Navegar a la página cuando cambie
  useEffect(() => {
    if (
      isReady &&
      currentSection === 'login' &&
      LoginController.isAvailable()
    ) {
      LoginController.navigateToPage(currentPage);
    } else if (currentSection === 'login' && !LoginController.isAvailable()) {
      Logger.warn('Esperando que loginControls esté disponible...');
    }
  }, [currentPage, currentSection, isReady]);

  // Actualizar settings de Profile Info
  useEffect(() => {
    if (
      isReady &&
      currentSection === 'login' &&
      currentPage === 'profile_info' &&
      LoginController.isAvailable()
    ) {
      LoginController.updateProfileInfoSettings(profileInfoSettings);
    }
  }, [profileInfoSettings, currentSection, currentPage, isReady]);

  // Actualizar settings de Profile Details
  useEffect(() => {
    if (
      isReady &&
      currentSection === 'login' &&
      currentPage === 'profile_details' &&
      LoginController.isAvailable()
    ) {
      LoginController.updateProfileDetailsSettings(profileDetailsSettings);
    }
  }, [profileDetailsSettings, currentSection, currentPage, isReady]);

  return {
    currentPage,
    setCurrentPage,
    profileInfoSettings,
    setProfileInfoSettings,
    profileDetailsSettings,
    setProfileDetailsSettings,
  };
};