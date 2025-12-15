import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-8 relative z-20">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-display font-bold text-christmas-red tracking-wide">
          Festivify
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-300">
        <a href="#" className="relative group hover:text-white transition-colors">
          About Us
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-christmas-accent to-christmas-softgreen group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <a href="#" className="relative group hover:text-white transition-colors">
          Mug Collection
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-christmas-accent to-christmas-softgreen group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <a href="#" className="relative group hover:text-white transition-colors">
          Discounts
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-christmas-accent to-christmas-softgreen group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <a href="#" className="relative group hover:text-white transition-colors">
          Contact Us
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-christmas-accent to-christmas-softgreen group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-white/10 text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        </button>
        <button className="p-2 rounded-full bg-christmas-accent hover:bg-christmas-softgreen text-white transition-colors shadow-lg shadow-christmas-accent/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
        </button>
      </div>
    </nav>
  );
};