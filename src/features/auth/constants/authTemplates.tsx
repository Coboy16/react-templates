import { Smartphone, Sparkles, Star } from 'lucide-react';
import type { AuthTemplate } from '../types/auth.types';

export const AUTH_TEMPLATES: AuthTemplate[] = [
  {
    id: 'template1',
    name: 'Clásico',
    description: 'Email/password + Social',
    color: '#2800C8',
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    id: 'template2',
    name: 'Minimalista',
    description: 'Logo superior + Card',
    color: '#6B21A8',
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    id: 'template3',
    name: 'Landing',
    description: 'Fondo personalizado',
    color: '#1D4ED8',
    icon: <Star className="w-8 h-8" />,
  },
];