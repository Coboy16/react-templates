import type { Template3Settings, AuthTemplate } from '../features/auth/types/auth.types';
import { AUTH_TEMPLATES } from '../features/auth/constants/authTemplates';

import { Logger } from '../utils/logger';

export class AuthController {
  static updateTemplate(template: string): void {
    if (!window.authControls?.updateAuthTemplate) {
      Logger.warn('authControls.updateAuthTemplate no está disponible');
      return;
    }

    try {
      window.authControls.updateAuthTemplate(template);
      Logger.success(`Auth template actualizado: ${template}`);
    } catch (error) {
      Logger.error('Error al actualizar Auth template', error);
    }
  }

  static updateTemplate3Settings(settings: Template3Settings): void {
    if (!window.authControls?.updateTemplate3Settings) {
      Logger.warn('authControls.updateTemplate3Settings no está disponible');
      return;
    }

    try {
      window.authControls.updateTemplate3Settings(
        settings.showGoogle,
        settings.showApple,
        settings.showTerms,
        settings.backgroundImage
      );
      Logger.success('Template 3 settings actualizados');
    } catch (error) {
      Logger.error('Error al actualizar Template 3 settings', error);
    }
  }

  static isAvailable(): boolean {
    return !!window.authControls?.updateAuthTemplate;
  }

  static getAvailableTemplates(): AuthTemplate[] {
    return AUTH_TEMPLATES;
  }
}