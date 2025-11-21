import { LayoutGrid, List, Grid3x3, ImageIcon, Eye, Users } from 'lucide-react';
import type { ViewMode, VisibilityOption } from '../types/sponsors.types';

export const VIEW_MODES: ViewMode[] = [
  { value: 'card', label: 'Tarjetas', icon: <LayoutGrid className="w-4 h-4" /> },
  { value: 'list', label: 'Lista', icon: <List className="w-4 h-4" /> },
  { value: 'grid', label: 'Cuadrícula', icon: <Grid3x3 className="w-4 h-4" /> },
];

export const VISIBILITY_OPTIONS: VisibilityOption[] = [
  { key: 'showImage', label: 'Mostrar Imagen', icon: <ImageIcon className="w-4 h-4" /> },
  { key: 'showTitle', label: 'Mostrar Título', icon: <Eye className="w-4 h-4" /> },
  { key: 'showLinkedin', label: 'Mostrar LinkedIn', icon: <Users className="w-4 h-4" /> },
  { key: 'showDescription', label: 'Mostrar Descripción', icon: <Eye className="w-4 h-4" /> },
];