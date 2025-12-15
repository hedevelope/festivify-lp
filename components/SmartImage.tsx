import React, { useCallback } from 'react';
import { generateImage } from '../services/geminiService';
import { GeneratedAsset } from '../types';

interface SmartImageProps {
  assetKey: string;
  prompt: string;
  assetState: GeneratedAsset;
  onUpdate: (key: string, data: Partial<GeneratedAsset>) => void;
  className?: string;
  placeholderColor?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  assetKey,
  prompt,
  assetState,
  onUpdate,
  className = "",
  placeholderColor = "bg-gray-800"
}) => {
  const handleGenerate = useCallback(async () => {
    onUpdate(assetKey, { loading: true });
    try {
      const base64Data = await generateImage(prompt);
      if (base64Data) {
        onUpdate(assetKey, { data: base64Data, loading: false });
      } else {
        onUpdate(assetKey, { loading: false });
        alert("Failed to generate image. Please check API key/quota.");
      }
    } catch (e) {
      console.error(e);
      onUpdate(assetKey, { loading: false });
    }
  }, [assetKey, prompt, onUpdate]);

  if (assetState.loading) {
    return (
      <div className={`flex flex-col items-center justify-center animate-pulse ${placeholderColor} ${className} rounded-2xl`}>
        <svg className="w-10 h-10 text-white/50 animate-spin mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-xs text-white/50 font-bold tracking-wider">GENERATING...</span>
      </div>
    );
  }

  if (assetState.data) {
    return (
      <div className={`relative overflow-visible rounded-2xl ${className}`}>
        <img 
          src={`data:image/png;base64,${assetState.data}`} 
          alt="Generated Asset" 
          className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105 animate-magical"
        />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden ${placeholderColor} ${className} rounded-2xl border-2 border-dashed border-white/10 hover:border-christmas-red/50 transition-colors`}>
      <button 
        onClick={handleGenerate}
        className="z-10 bg-christmas-red/90 hover:bg-christmas-red text-white px-6 py-2 rounded-full font-bold shadow-lg transform transition-all hover:scale-105 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
        Generate Asset
      </button>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 pointer-events-none" />
      <p className="absolute bottom-4 text-xs text-white/40 text-center px-4">
        {prompt.slice(0, 40)}...
      </p>
    </div>
  );
};