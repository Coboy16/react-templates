import type { SponsorsSettings } from '../features/sponsors/types/sponsors.types';

export class SponsorsController {
  static updateSettings(settings: SponsorsSettings): void {
    if (window.sponsorsControls?.updateSettings) {
      try {
        window.sponsorsControls.updateSettings(
          settings.viewMode,
          settings.showImage,
          settings.showTitle,
          settings.showLinkedin,
          settings.showDescription
        );
        console.log('📋 Sponsors settings actualizados:', settings);
      } catch (error) {
        console.error('❌ Error al actualizar Sponsors settings:', error);
      }
    } else {
      console.warn('⚠️ sponsorsControls.updateSettings no está disponible');
    }
  }

  static isAvailable(): boolean {
    return !!window.sponsorsControls?.updateSettings;
  }
}