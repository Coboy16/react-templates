import React from 'react';
import { LayoutGrid, Eye } from 'lucide-react';
import type { SponsorsControlsProps } from '../types/sponsors.types';
import { VIEW_MODES, VISIBILITY_OPTIONS } from '../constants/sponsorsOptions';

const SponsorsControls: React.FC<SponsorsControlsProps> = ({
  settings,
  onSettingsChange,
}) => {
  return (
    <div className="space-y-6">
      {/* Tipo de Vista */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-[#2800C8]" />
          Tipo de Vista
        </h3>
        <div className="space-y-2">
          {VIEW_MODES.map((mode) => (
            <label
              key={mode.value}
              className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                settings.viewMode === mode.value
                  ? 'border-[#2800C8] bg-purple-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="viewMode"
                value={mode.value}
                checked={settings.viewMode === mode.value}
                onChange={(e) =>
                  onSettingsChange({
                    ...settings,
                    viewMode: e.target.value as never,
                  })
                }
                className="w-4 h-4 text-[#2800C8] focus:ring-[#2800C8]"
              />
              <div className="flex items-center gap-2">
                {mode.icon}
                <span className="font-medium text-gray-900">{mode.label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Visibilidad */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5 text-[#2800C8]" />
          Visibilidad
        </h3>
        <div className="space-y-2">
          {VISIBILITY_OPTIONS.map(({ key, label, icon }) => (
            <label
              key={key}
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 cursor-pointer transition-all"
            >
              <input
                type="checkbox"
                checked={settings[key] as boolean}
                onChange={() =>
                  onSettingsChange({
                    ...settings,
                    [key]: !settings[key],
                  })
                }
                className="w-5 h-5 text-[#2800C8] rounded focus:ring-[#2800C8]"
              />
              <div className="flex items-center gap-2">
                {icon}
                <span className="font-medium text-gray-900">{label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsControls;