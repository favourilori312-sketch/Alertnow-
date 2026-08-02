export type EmergencyCategoryType = 
  | 'medical'
  | 'fire'
  | 'accident'
  | 'security'
  | 'flood'
  | 'other';

export interface EmergencyContact {
  id: string;
  name: string;
  category: EmergencyCategoryType;
  categoryLabel: string;
  phone: string;
  secondaryPhone?: string;
  email?: string;
  state: string;
  lga?: string;
  address?: string;
  verified: boolean;
  operatingHours: string;
  description?: string;
}

export interface ProtocolStep {
  stepNumber: number;
  iconName: string;
  title: string;
  description: string;
  isCritical?: boolean;
}

export interface EmergencyProtocol {
  id: EmergencyCategoryType;
  title: string;
  categoryName: string;
  caption: string;
  estimatedEmsTime: string;
  localAuthority: string;
  criticalNotice: string;
  steps: ProtocolStep[];
  primaryHotline: string;
  recommendedServiceIds: string[];
}

export interface UserLocationState {
  state: string;
  lga?: string;
  latitude?: number;
  longitude?: number;
  accuracy?: number;
  status: 'idle' | 'locating' | 'granted' | 'denied' | 'fallback';
  addressText?: string;
}

export type ActiveTab = 'home' | 'directory' | 'protocols' | 'statistics' | 'about';
