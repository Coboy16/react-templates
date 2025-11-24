import { Users, Lock, Mic, Calendar } from 'lucide-react';
import type { NavSection } from '../types/shared.types';

export const NAV_SECTIONS: NavSection[] = [
  { id: 'auth', icon: <Lock className="w-5 h-5" />, label: 'Auth' }, 
  { id: 'sponsors', icon: <Users className="w-5 h-5" />, label: 'Sponsors' },
  { id: 'speakers', icon: <Mic className="w-5 h-5" />, label: 'Speakers' },
  { id: 'agenda', icon: <Calendar className="w-5 h-5" />, label: 'Agenda' },
];

export const SECTION_TITLES: Record<string, { icon: React.ReactNode; title: string }> = {
  sponsors: { icon: <Users className="w-5 h-5" />, title: 'Configuración Sponsors' },
  auth: { icon: <Lock className="w-5 h-5" />, title: 'Configuración Auth' },
  speakers: { icon: <Mic className="w-5 h-5" />, title: 'Configuración Speakers' },
  agenda: { icon: <Calendar className="w-5 h-5" />, title: 'Configuración Agenda' },
};