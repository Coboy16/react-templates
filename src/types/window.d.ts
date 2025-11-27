declare global {
  interface Window {
    _flutter?: {
      loader: {
        loadEntrypoint: (config: {
          entrypointUrl: string;
          onEntrypointLoaded: (engineInitializer: unknown) => Promise<void>;
        }) => Promise<void>;
      };
    };
    flutterControls?: {
      navigateTo: (route: string) => void;
    };
    sponsorsControls?: {
      updateSettings: (
        viewMode: string,
        showImage: boolean,
        showTitle: boolean,
        showLinkedin: boolean,
        showDescription: boolean
      ) => void;
    };
    authControls?: {
      updateAuthTemplate: (template: string) => void;
      updateTemplate3Settings: (
        showGoogle: boolean,
        showApple: boolean,
        showTerms: boolean,
        backgroundImage: string | null,
        logoImage: string | null
      ) => void;
    };
    loginControls?: {
      navigateToPage: (page: string) => void;
      updateProfileInfoSettings: (
        showName: boolean,
        showCountry: boolean,
        showEmail: boolean,
        canEditPhoto: boolean
      ) => void;
      updateProfileDetailsSettings: (
        showPosition: boolean,
        showLinkedin: boolean,
        showAbout: boolean,
        canEditPosition: boolean,
        linkedinRequired: boolean,
        aboutRequired: boolean
      ) => void;
    };
    reactCallbacks?: {
      onLoginPageChange?: (page: string) => void;
    };
  }
}

export {};