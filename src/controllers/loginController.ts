import type {
  ProfileInfoSettings,
  ProfileDetailsSettings,
} from '../features/login/types/login.types';
import { Logger } from '../utils/logger';

export class LoginController {
  static navigateToPage(page: string): void {
    if (!window.loginControls?.navigateToPage) {
      Logger.warn('loginControls.navigateToPage no está disponible');
      return;
    }

    try {
      window.loginControls.navigateToPage(page);
      Logger.success(`Login page actualizado: ${page}`);
    } catch (error) {
      Logger.error('Error al navegar a login page', error);
    }
  }

  static updateProfileInfoSettings(settings: ProfileInfoSettings): void {
    if (!window.loginControls?.updateProfileInfoSettings) {
      Logger.warn(
        'loginControls.updateProfileInfoSettings no está disponible'
      );
      return;
    }

    try {
      window.loginControls.updateProfileInfoSettings(
        settings.showName,
        settings.showCountry,
        settings.showEmail,
        settings.canEditPhoto
      );
      Logger.success('Profile Info settings actualizados');
    } catch (error) {
      Logger.error('Error al actualizar Profile Info settings', error);
    }
  }

  static updateProfileDetailsSettings(settings: ProfileDetailsSettings): void {
    if (!window.loginControls?.updateProfileDetailsSettings) {
      Logger.warn(
        'loginControls.updateProfileDetailsSettings no está disponible'
      );
      return;
    }

    try {
      window.loginControls.updateProfileDetailsSettings(
        settings.showPosition,
        settings.showLinkedin,
        settings.showAbout,
        settings.canEditPosition,
        settings.linkedinRequired,
        settings.aboutRequired
      );
      Logger.success('Profile Details settings actualizados');
    } catch (error) {
      Logger.error('Error al actualizar Profile Details settings', error);
    }
  }

  static isAvailable(): boolean {
    return !!window.loginControls?.navigateToPage;
  }
}