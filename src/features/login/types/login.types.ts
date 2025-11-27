export interface LoginPage {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}


export interface ProfileInfoSettings {
  showName: boolean;
  showCountry: boolean;
  showEmail: boolean;
  canEditPhoto: boolean;
}

export interface ProfileDetailsSettings {
  showPosition: boolean;
  showLinkedin: boolean;
  showAbout: boolean;
  canEditPosition: boolean;
  linkedinRequired: boolean;
  aboutRequired: boolean;
}

export interface LoginControlsProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  profileInfoSettings: ProfileInfoSettings;
  onProfileInfoSettingsChange: (settings: ProfileInfoSettings) => void;
  profileDetailsSettings: ProfileDetailsSettings;
  onProfileDetailsSettingsChange: (settings: ProfileDetailsSettings) => void;
}