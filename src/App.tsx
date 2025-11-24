import { useState, useEffect, useRef } from 'react';
import DashboardLayout from './features/shared/layouts/DashboardLayout';
import LoadingSpinner from './features/shared/components/LoadingSpinner';
import SponsorsControls from './features/sponsors/components/SponsorsControls';
import AuthControls from './features/auth/components/AuthControls';
import SpeakersControls from './features/speakers/components/SpeakersControls';
import AgendaControls from './features/agenda/components/AgendaControls';
import { FlutterNavigator } from './controllers/flutterNavigator';
import { useAuthTemplate } from './features/auth/hooks/useAuthTemplate';
import { useSponsorsSettings } from './features/sponsors/hooks/useSponsorsSettings';
import { FlutterBridge } from './utils/flutterBridge';
import { Logger } from './utils/logger';


function App() {
  const [currentSection, setCurrentSection] = useState('auth'); 
  const [flutterReady, setFlutterReady] = useState(false);
  const isInitialMount = useRef(true);

  const authHook = useAuthTemplate(flutterReady, currentSection);
  const sponsorsHook = useSponsorsSettings(flutterReady, currentSection);

  // Verificar cuando Flutter esté listo
  useEffect(() => {
    const checkFlutterReady = setInterval(() => {
      const status = FlutterBridge.getStatus();
      
      // Solo requiere flutterControls para estar listo
      if (status.flutterControls) {
        Logger.success('Flutter listo para navegación');
        setFlutterReady(true);
        clearInterval(checkFlutterReady);
        
        // Log de controles disponibles
        if (status.authControls) {
          Logger.success('authControls disponible');
        } else {
          Logger.warn('authControls no disponible');
        }
        
        if (status.sponsorsControls) {
          Logger.success('sponsorsControls disponible');
        }
      }
    }, 500);

    setTimeout(() => {
      clearInterval(checkFlutterReady);
      if (!flutterReady) {
        Logger.warn('Flutter no se inicializó completamente');
        setFlutterReady(true); 
      }
    }, 10000);

    return () => clearInterval(checkFlutterReady);
  }, [flutterReady]);

  const handleNavigate = (section: string) => {
    Logger.info(`Navegando a: ${section}`);
    setCurrentSection(section);
    
    if (flutterReady && FlutterNavigator.isAvailable()) {
      FlutterNavigator.navigateTo(section);
    } else {
      Logger.warn('FlutterNavigator no disponible');
    }
  };

  // Navegación inicial cuando Flutter esté listo
  useEffect(() => {
    if (flutterReady && isInitialMount.current) {
      Logger.info('Navegación inicial a auth');
      setTimeout(() => {
        handleNavigate('auth');
        isInitialMount.current = false;
      }, 500);
    }
  }, [flutterReady]);

  const renderContent = () => {
    if (!flutterReady) {
      return <LoadingSpinner message="Cargando Flutter..." />;
    }

    switch (currentSection) {
      case 'sponsors':
        return (
          <SponsorsControls
            settings={sponsorsHook.settings}
            onSettingsChange={sponsorsHook.setSettings}
          />
        );
      case 'auth':
        return (
          <AuthControls
            template={authHook.template}
            onTemplateChange={authHook.setTemplate}
            template3Settings={authHook.template3Settings}
            onTemplate3SettingsChange={authHook.setTemplate3Settings}
          />
        );
      case 'speakers':
        return <SpeakersControls />;
      case 'agenda':
        return <AgendaControls />;
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-6xl mb-4">🚧</div>
            <p className="text-gray-600 font-medium">Sección en desarrollo</p>
            <p className="text-sm text-gray-500 mt-1">Próximamente disponible</p>
          </div>
        );
    }
  };

  return (
    <DashboardLayout
      currentSection={currentSection}
      onNavigate={handleNavigate}
      flutterReady={flutterReady}
    >
      {renderContent()}
    </DashboardLayout>
  );
}

export default App;