import React from 'react';
import { Zap, LayoutDashboard } from 'lucide-react';
import { NAV_SECTIONS } from '../constants/navigation';

interface SidebarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, onNavigate }) => {
  return (
    <div className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Header */}
      <div className="p-8 border-b border-gray-200">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2800C8] to-[#1a0080] flex items-center justify-center mb-4 shadow-lg">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Control Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {NAV_SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
              currentSection === section.id
                ? 'bg-[#2800C8] text-white shadow-lg shadow-[#2800C8]/30'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {section.icon}
            <span>{section.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-center gap-2 text-[#2800C8] font-semibold mb-1">
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-sm">Sistema Activo</span>
          </div>
          <p className="text-xs text-gray-600">Todas las funciones operativas</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;