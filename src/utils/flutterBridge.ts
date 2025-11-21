/**
 * Utility functions for Flutter bridge communication
 */

export class FlutterBridge {
  /**
   * Check if Flutter is ready
   */
  static isFlutterReady(): boolean {
    return !!(
      window.flutterControls &&
      window.authControls &&
      window.sponsorsControls
    );
  }

  /**
   * Wait for Flutter to be ready
   */
  static async waitForFlutter(timeout = 10000): Promise<boolean> {
    const startTime = Date.now();
    
    while (!this.isFlutterReady()) {
      if (Date.now() - startTime > timeout) {
        console.warn('⚠️ Flutter timeout exceeded');
        return false;
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log('✅ Flutter ready');
    return true;
  }

  /**
   * Get Flutter status
   */
  static getStatus() {
    return {
      flutterControls: !!window.flutterControls,
      authControls: !!window.authControls,
      sponsorsControls: !!window.sponsorsControls,
    };
  }
}