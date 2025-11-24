export class FlutterNavigator {
  static navigateTo(route: string): void {
    if (window.flutterControls?.navigateTo) {
      try {
        const formattedRoute = route.startsWith('/') ? route : `/${route}`;
        
        console.log(`Navegando a: ${formattedRoute}`);
        window.flutterControls.navigateTo(formattedRoute);
      } catch (error) {
        console.error('Error al navegar:', error);
      }
    } else {
      console.warn('flutterControls.navigateTo no está disponible');
    }
  }

  static isAvailable(): boolean {
    return !!window.flutterControls?.navigateTo;
  }
}