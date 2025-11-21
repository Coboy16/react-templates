import React, { type ReactNode } from 'react';
import { Smartphone } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import FlutterHost from '../components/FlutterHost';
import { SECTION_TITLES } from '../constants/navigation';

interface DashboardLayoutProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  flutterReady: boolean;
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  currentSection,
  onNavigate,
  flutterReady,
  children,
}) => {
  const sectionInfo = SECTION_TITLES[currentSection] || {
    icon: null,
    title: 'Controles',
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar currentSection={currentSection} onNavigate={onNavigate} />

      <div className="flex-1 flex gap-6 p-6 overflow-hidden">
        {/* Controls Panel */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                {sectionInfo.icon}
                {sectionInfo.title}
              </h2>
              <span className="px-4 py-2 bg-[#2800C8] text-white text-xs font-semibold rounded-full uppercase">
                {currentSection}
              </span>
            </div>
          </div>

          <div className="p-6">{children}</div>
        </div>

        {/* Preview Panel */}
        <div className="w-96 bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col p-6">
          <div className="flex items-center justify-between mb-5">
            <span className="text-base font-semibold text-gray-900 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Vista Previa
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                flutterReady ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {flutterReady ? 'Live' : 'Cargando...'}
            </span>
          </div>

          <div className="flex-1 max-w-[340px] mx-auto aspect-[9/19.5] bg-gray-900 rounded-[40px] p-3 shadow-2xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10" />
            <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
              <FlutterHost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;