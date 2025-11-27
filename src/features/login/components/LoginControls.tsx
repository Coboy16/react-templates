import React from 'react';
import { Sparkles, User, FileText, Lock, CheckCircle } from 'lucide-react';
import type { LoginControlsProps, ProfileDetailsSettings, ProfileInfoSettings } from '../types/login.types';
import { LOGIN_PAGES } from '../constants/loginPages';

const LoginControls: React.FC<LoginControlsProps> = ({
  currentPage,
  onPageChange,
  profileInfoSettings,
  onProfileInfoSettingsChange,
  profileDetailsSettings,
  onProfileDetailsSettingsChange,
}) => {
  return (
    <div className="space-y-6">
      {/* Selección de Página */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#2800C8]" />
          Selecciona Página
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {LOGIN_PAGES.map((page) => (
            <button
              key={page.id}
              onClick={() => onPageChange(page.id)}
              className={`relative p-6 rounded-xl border-2 transition-all text-center ${
                currentPage === page.id
                  ? 'border-[#2800C8] bg-purple-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div
                className={`flex justify-center mb-3 ${
                  currentPage === page.id ? 'text-[#2800C8]' : 'text-gray-600'
                }`}
              >
                {page.icon}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {page.name}
              </div>
              <div className="text-sm text-gray-600">{page.description}</div>
              {currentPage === page.id && (
                <div className="absolute top-2 right-2 px-3 py-1 rounded-full bg-[#2800C8] text-white text-xs font-semibold">
                  ✓ Activo
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Configuración Profile Info Page */}
      {currentPage === 'profile_info' && (
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-[#2800C8]" />
            Configuración Información de Perfil
          </h3>

          <div className="space-y-4">
            {/* Campos Visibles */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Campos Visibles
              </label>
              <div className="space-y-2">
                {[
                  { key: 'showName', label: 'Mostrar Nombre' },
                  { key: 'showCountry', label: 'Mostrar País' },
                  { key: 'showEmail', label: 'Mostrar Email' },
                ].map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={
                        profileInfoSettings[
                          key as keyof ProfileInfoSettings
                        ] as boolean
                      }
                      onChange={(e) =>
                        onProfileInfoSettingsChange({
                          ...profileInfoSettings,
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

            {/* Permisos de Edición */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Permisos de Edición
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={profileInfoSettings.canEditPhoto}
                    onChange={(e) =>
                      onProfileInfoSettingsChange({
                        ...profileInfoSettings,
                        canEditPhoto: e.target.checked,
                      })
                    }
                    className="w-5 h-5 text-[#2800C8] rounded focus:ring-[#2800C8]"
                  />
                  <span className="font-medium text-gray-900">
                    Puede editar foto de perfil
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Configuración Profile Details Page */}
      {currentPage === 'profile_details' && (
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#2800C8]" />
            Configuración Detalles de Perfil
          </h3>

          <div className="space-y-4">
            {/* Campos Visibles */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Campos Visibles
              </label>
              <div className="space-y-2">
                {[
                  { key: 'showPosition', label: 'Mostrar Puesto' },
                  { key: 'showLinkedin', label: 'Mostrar LinkedIn' },
                  { key: 'showAbout', label: 'Mostrar About You' },
                ].map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={
                        profileDetailsSettings[
                          key as keyof ProfileDetailsSettings
                        ] as boolean
                      }
                      onChange={(e) =>
                        onProfileDetailsSettingsChange({
                          ...profileDetailsSettings,
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

            {/* Permisos de Edición */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Permisos de Edición
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={profileDetailsSettings.canEditPosition}
                    onChange={(e) =>
                      onProfileDetailsSettingsChange({
                        ...profileDetailsSettings,
                        canEditPosition: e.target.checked,
                      })
                    }
                    className="w-5 h-5 text-[#2800C8] rounded focus:ring-[#2800C8]"
                  />
                  <span className="font-medium text-gray-900">
                    Puede editar puesto
                  </span>
                </label>
              </div>
            </div>

            {/* Validaciones de Campos Requeridos */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500" />
                Campos Requeridos
              </label>
              <div className="space-y-2">
                {[
                  { key: 'linkedinRequired', label: 'LinkedIn es requerido' },
                  { key: 'aboutRequired', label: 'About You es requerido' },
                ].map(({ key, label }) => (
                  <label
                    key={key}
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={
                        profileDetailsSettings[
                          key as keyof ProfileDetailsSettings
                        ] as boolean
                      }
                      onChange={(e) =>
                        onProfileDetailsSettingsChange({
                          ...profileDetailsSettings,
                          [key]: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-red-500 rounded focus:ring-red-500"
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

export default LoginControls;