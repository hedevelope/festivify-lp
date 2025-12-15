import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AssetState, GeneratedAsset } from './types';

function App() {
  const [assetState, setAssetState] = useState<AssetState>({
    main: { key: 'main', data: null, loading: false, prompt: '' },
    sub1: { key: 'sub1', data: null, loading: false, prompt: '' },
    sub2: { key: 'sub2', data: null, loading: false, prompt: '' },
  });

  const updateAsset = (key: string, data: Partial<GeneratedAsset>) => {
    setAssetState(prev => ({
      ...prev,
      [key]: { ...prev[key], ...data }
    }));
  };

  return (
    <div className="min-h-screen bg-christmas-dark text-white font-body selection:bg-christmas-red selection:text-white overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-christmas-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-christmas-softgreen/5 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Navbar />
        <main className="mt-8">
          <Hero assetState={assetState} updateAsset={updateAsset} />
        </main>
      </div>
    </div>
  );
}

export default App;