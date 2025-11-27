import { Calendar, User, FileText } from 'lucide-react';
import type { LoginPage } from '../types/login.types';

export const LOGIN_PAGES: LoginPage[] = [
  {
    id: 'select_event',
    name: 'Seleccionar Evento',
    description: 'Vista de eventos disponibles',
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    id: 'profile_info',
    name: 'Información de Perfil',
    description: 'Datos básicos del usuario',
    icon: <User className="w-8 h-8" />,
  },
  {
    id: 'profile_details',
    name: 'Detalles de Perfil',
    description: 'Información adicional',
    icon: <FileText className="w-8 h-8" />,
  },
];