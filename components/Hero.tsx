import React from 'react';
import { AssetState, GeneratedAsset } from '../types';
import christmas from './assets/img/deer-mug.png';
import hatStand from './assets/img/christmas-mug.png';
import skull from './assets/img/santa-mug.png';

interface HeroProps {
  assetState: AssetState;
  updateAsset: (key: string, data: Partial<GeneratedAsset>) => void;
}

const lordicons = [
  'https://cdn.lordicon.com/hxhedyir.json',
  'https://cdn.lordicon.com/hqwrfgja.json',
  'https://cdn.lordicon.com/sukpkdnq.json',
];

// Random positions for icons to appear around buttons
const iconPositions = [
  { top: '-40%', left: '-40%', rotation: '-15deg' },      // Top-left
  { top: '-40%', right: '-40%', rotation: '15deg' },      // Top-right
  { bottom: '-40%', left: '-40%', rotation: '15deg' },    // Bottom-left
  { bottom: '-40%', right: '-40%', rotation: '-15deg' },  // Bottom-right
  { top: '-50%', left: '50%', transform: 'translateX(-50%)', rotation: '0deg' },    // Top-center
  { bottom: '-50%', left: '50%', transform: 'translateX(-50%)', rotation: '0deg' }, // Bottom-center
];

const Tag: React.FC<{ text: string; iconSrc: string; positionIndex: number }> = ({ text, iconSrc, positionIndex }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const position = iconPositions[positionIndex];

  return (
    <button
      className="group relative px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-christmas-accent/20 hover:border-christmas-accent/30 text-xs text-gray-300 hover:text-white transition-all backdrop-blur-sm h-16 overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute pointer-events-none transition-all duration-500 ease-out z-20 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        style={{
          ...position,
          rotate: position.rotation,
        }}
      >
        <lord-icon
          src={iconSrc}
          trigger="hover"
          style={{ width: '70px', height: '70px' }}
        />
      </div>
      <span className={`relative flex items-center justify-center h-full transition-all duration-300`}>
        {text}
      </span>
    </button>
  );
};

export const Hero: React.FC<HeroProps> = ({ assetState, updateAsset }) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto min-h-[600px] bg-christmas-card/50 backdrop-blur-xl rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12">

      {/* Decorative Corner: Top Right - Giant Snowflake/Star */}
      <div className="absolute -top-16 -right-16 text-white/5 pointer-events-none rotate-12">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" opacity="0.5" />
          <circle cx="12" cy="12" r="3" opacity="0.3" />
          <path d="M12 2l2 2-2 2-2-2 2-2zM12 22l2-2-2-2-2 2 2 2zM2 12l2 2 2-2-2-2-2 2zM22 12l-2 2-2-2 2-2 2 2z" opacity="0.4" />
        </svg>
      </div>

      {/* Decorative Corner: Bottom Left - Holly/Mistletoe Shape */}
      <div className="absolute -bottom-10 -left-10 text-white/5 pointer-events-none -rotate-12">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M12 21c-4-4.5-5-9-2-12 1.5-1.5 4.5-1.5 6 0 3 3 2 7.5-2 12Z" />
          <path d="M12 21c4-4.5 5-9 2-12-1.5-1.5-4.5-1.5-6 0-3 3-2 7.5 2 12Z" transform="rotate(-45 12 21)" />
          <path d="M12 21c-4-4.5-5-9-2-12 1.5-1.5 4.5-1.5 6 0 3 3 2 7.5-2 12Z" transform="rotate(45 12 21)" />
          <circle cx="12" cy="19" r="1.5" fill="currentColor" opacity="0.2" />
          <circle cx="14" cy="18" r="1.5" fill="currentColor" opacity="0.2" />
          <circle cx="10" cy="18" r="1.5" fill="currentColor" opacity="0.2" />
        </svg>
      </div>

      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
          Sip the Joy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-christmas-red to-christmas-gold drop-shadow-lg">Christmas!</span>
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
          Warm up your holidays with our festive Christmas mugs! From cheerful designs to cozy classics, find the perfect mug to make every sip magical.
        </p>

        <div className="flex items-center gap-6 mb-16">
          <button className="group flex items-center gap-3 bg-christmas-accent hover:bg-christmas-softgree text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-christmas-accent/25">
            <span className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            </span>
            Shop Mugs
          </button>
          <a href="#" className="text-gray-400 hover:text-white underline decoration-gray-600 hover:decoration-white transition-all underline-offset-4 font-semibold">
            More Details
          </a>
        </div>

        {/* Small Products Grid */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-md">
          <img src={skull} alt="" />
          <img src={hatStand} alt="" />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-between relative z-10">

        {/* Main Hero Image */}
        <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square mb-8">
          <div className="absolute inset-0 bg-christmas-softgreen/20 blur-[100px] rounded-full pointer-events-none transform translate-y-10 -z-10"></div>
          <img src={christmas} alt="" />
        </div>

        {/* Tags */}
        <div className="grid grid-cols-3 gap-3 self-end mt-auto relative overflow-visible">
          <Tag text="Santa Mugs" iconSrc={lordicons[0]} positionIndex={0} />
          <Tag text="Reindeer Mugs" iconSrc={lordicons[1]} positionIndex={1} />
          <Tag text="Snowman Mugs" iconSrc={lordicons[2]} positionIndex={2} />
          <Tag text="Tree Mugs" iconSrc={lordicons[0]} positionIndex={3} />
          <Tag text="Elf Mugs" iconSrc={lordicons[1]} positionIndex={4} />
          <Tag text="Gift Mugs" iconSrc={lordicons[2]} positionIndex={5} />
        </div>

      </div>
    </div>
  );
};