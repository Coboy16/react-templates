export interface SponsorsSettings {
  viewMode: 'card' | 'list' | 'grid';
  showImage: boolean;
  showTitle: boolean;
  showLinkedin: boolean;
  showDescription: boolean;
}

export interface SponsorsControlsProps {
  settings: SponsorsSettings;
  onSettingsChange: (settings: SponsorsSettings) => void;
}

export interface ViewMode {
  value: 'card' | 'list' | 'grid';
  label: string;
  icon: React.ReactNode;
}

export interface VisibilityOption {
  key: keyof SponsorsSettings;
  label: string;
  icon: React.ReactNode;
}