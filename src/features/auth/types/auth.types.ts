export interface Template3Settings {
  backgroundImage: string | null;
  logoImage: string | null;
  showGoogle: boolean;
  showApple: boolean;
  showTerms: boolean;
}

export interface AuthTemplate {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

export interface AuthControlsProps {
  template: string;
  onTemplateChange: (template: string) => void;
  template3Settings: Template3Settings;
  onTemplate3SettingsChange: (settings: Template3Settings) => void;
}