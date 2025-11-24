/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useEffect, useRef } from 'react';

declare global {
  interface Window {
    _flutter?: {
      loader: {
        loadEntrypoint: (config: {
          entrypointUrl: string;
          onEntrypointLoaded: (engineInitializer: unknown) => Promise<void>;
        }) => Promise<void>;
      };
    };
    flutterControls?: {
      navigateTo: (route: string) => void;
    };
    sponsorsControls?: {
      updateSettings: (
        viewMode: string,
        showImage: boolean,
        showTitle: boolean,
        showLinkedin: boolean,
        showDescription: boolean
      ) => void;
    };
    authControls?: {
      updateAuthTemplate: (template: string) => void;
      updateTemplate3Settings: (
        showGoogle: boolean,
        showApple: boolean,
        showTerms: boolean,
        backgroundImage: string | null,
        logoImage: string | null
      ) => void;
    };
  }
}

function FlutterHost() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLoadedRef = useRef(false);
  
  useEffect(() => {
    const loadFlutter = async () => {
      if (!containerRef.current || isLoadedRef.current) return;
      
      console.log('🚀 Iniciando carga de Flutter...');
      
      // Esperar a que el loader de Flutter esté disponible
      let attempts = 0;
      while (!window._flutter && attempts < 50) {
        console.log(`⏳ Esperando Flutter loader... (${attempts + 1}/50)`);
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }

      if (!window._flutter) {
        console.error('❌ Flutter loader no disponible después de 5 segundos');
        return;
      }

      try {
        console.log('✅ Flutter loader encontrado, inicializando...');
        
        await window._flutter.loader.loadEntrypoint({
          entrypointUrl: "/flutter_app/main.dart.js",
          onEntrypointLoaded: async function (engineInitializer: any) {
            console.log('🔧 Inicializando engine de Flutter...');
            
            const appRunner = await engineInitializer.initializeEngine({
              hostElement: containerRef.current,
              assetBase: "/flutter_app/",
              renderer: "canvaskit", // Cambiado a canvaskit para mejor rendimiento
            });
            
            console.log('🎯 Ejecutando app de Flutter...');
            await appRunner.runApp();
            console.log('✅ Flutter cargado exitosamente');
            
            isLoadedRef.current = true;
            
            // Verificar que los controles estén disponibles
            setTimeout(() => {
              if (window.flutterControls) {
                console.log('✅ flutterControls disponible');
              } else {
                console.warn('⚠️ flutterControls no disponible aún');
              }
              
              if (window.authControls) {
                console.log('✅ authControls disponible');
              } else {
                console.warn('⚠️ authControls no disponible aún');
              }
              
              if (window.sponsorsControls) {
                console.log('✅ sponsorsControls disponible');
              } else {
                console.warn('⚠️ sponsorsControls no disponible aún');
              }
            }, 2000);
          },
        });
      } catch (error) {
        console.error('❌ Error al cargar Flutter:', error);
      }
    };

    loadFlutter();

    // Cleanup
    return () => {
      console.log('🧹 Limpiando FlutterHost...');
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{ 
        height: '100%', 
        width: '100%',
        minHeight: '400px',
        minWidth: '300px',
        position: 'relative',
        overflow: 'hidden',
        display: 'block',
        backgroundColor: '#f9fafb',
      }} 
    />
  );
}

export default FlutterHost;