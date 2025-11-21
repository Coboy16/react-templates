import React, { useRef } from 'react';
import { Sparkles, Star, ImageIcon, Upload, Trash2, Lock } from 'lucide-react';
import type { AuthControlsProps } from '../types/auth.types';
import { AUTH_TEMPLATES } from '../constants/authTemplates';

const AuthControls: React.FC<AuthControlsProps> = ({
  template,
  onTemplateChange,
  template3Settings,
  onTemplate3SettingsChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onTemplate3SettingsChange({
          ...template3Settings,
          backgroundImage: event.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Selección de Template */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#2800C8]" />
          Selecciona Template
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AUTH_TEMPLATES.map((t) => (
            <button
              key={t.id}
              onClick={() => onTemplateChange(t.id)}
              className={`relative p-6 rounded-xl border-2 transition-all text-center ${
                template === t.id
                  ? 'border-[#2800C8] bg-purple-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
              style={
                template === t.id
                  ? {
                      borderColor: t.color,
                      backgroundColor: `${t.color}08`,
                    }
                  : {}
              }
            >
              <div
                className="flex justify-center mb-3"
                style={{ color: t.color }}
              >
                {t.icon}
              </div>
              <div className="font-semibold text-gray-900 mb-1">{t.name}</div>
              <div className="text-sm text-gray-600">{t.description}</div>
              {template === t.id && (
                <div
                  className="absolute top-2 right-2 px-3 py-1 rounded-full text-white text-xs font-semibold"
                  style={{ backgroundColor: t.color }}
                >
                  ✓ Activo
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Configuración Template 3 */}
      {template === 'template3' && (
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-[#2800C8]" />
            Configuración Template 3
          </h3>

          <div className="space-y-4">
            {/* Upload de Imagen */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                Fondo Personalizado
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full p-4 border-2 border-dashed border-[#2800C8] rounded-lg bg-white hover:bg-purple-50 text-[#2800C8] font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Upload className="w-5 h-5" />
                {template3Settings.backgroundImage
                  ? '✓ Imagen cargada'
                  : 'Subir imagen'}
              </button>
              {template3Settings.backgroundImage && (
                <button
                  onClick={() =>
                    onTemplate3SettingsChange({
                      ...template3Settings,
                      backgroundImage: null,
                    })
                  }
                  className="w-full mt-2 p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Eliminar
                </button>
              )}
            </div>

            {/* Opciones de Login */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Opciones de Login
              </label>
              <div className="space-y-2">
                {[
                  { key: 'showGoogle', label: 'Google Sign-In' },
                  { key: 'showApple', label: 'Apple Sign-In' },
                  { key: 'showTerms', label: 'Términos y Condiciones' },
                ].map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={
                        template3Settings[
                          key as keyof typeof template3Settings
                        ] as boolean
                      }
                      onChange={(e) =>
                        onTemplate3SettingsChange({
                          ...template3Settings,
                          [key]: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-[#2800C8] rounded focus:ring-[#2800C8]"
                    />
                    <span className="font-medium text-gray-900">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthControls;