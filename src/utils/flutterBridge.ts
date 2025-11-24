export class FlutterBridge {
  static isFlutterReady(): boolean {
    return !!(
      window.flutterControls &&
      window.authControls &&
      window.sponsorsControls
    );
  }

  static async waitForFlutter(timeout = 10000): Promise<boolean> {
    const startTime = Date.now();
    
    while (!this.isFlutterReady()) {
      if (Date.now() - startTime > timeout) {
        console.warn('Flutter timeout exceeded');
        return false;
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log('Flutter ready');
    return true;
  }

  static getStatus() {
    return {
      flutterControls: !!window.flutterControls,
      authControls: !!window.authControls,
      sponsorsControls: !!window.sponsorsControls,
    };
  }
}