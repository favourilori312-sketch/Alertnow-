import React, { useState } from 'react';
import { ActiveTab, UserLocationState } from '../types/emergency';
import { Shield, Settings, Menu, X, Radio, MapPin } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  userLocation: UserLocationState;
  onOpenSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  userLocation,
  onOpenSettings
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'directory', label: 'Emergency Directory' },
    { id: 'protocols', label: 'Protocols' },
    { id: 'statistics', label: 'Statistics' },
    { id: 'about', label: 'About' }
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fcf9f8]/95 backdrop-blur-md border-b border-[#e4beb9]/40 shadow-xs">
      {/* Top micro-status bar */}
      <div className="bg-[#f6f3f2] border-b border-[#e4beb9]/30 px-4 py-1.5 text-xs text-[#5b403d]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#186a22] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#186a22]"></span>
              </span>
              <span className="uppercase tracking-wider font-semibold text-[#186a22]">System Status: Active</span>
            </div>
            <span className="hidden sm:inline text-gray-300">|</span>
            <div className="flex items-center gap-1 text-[#1c1b1b] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#b7131a]" />
              <span>{userLocation.addressText || `${userLocation.state}, Nigeria`}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs">
            <span className="text-[#5b403d]">Avg Connect Latency: <strong className="text-[#186a22]">4.2 mins</strong></span>
            <span className="bg-[#b7131a]/10 text-[#b7131a] px-2 py-0.5 rounded font-semibold text-[11px] uppercase tracking-wide">
              Nigeria Dispatch
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-2 focus:ring-[#b7131a]/30 rounded-lg p-1 transition-all"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#b7131a] to-[#8d0f15] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-[#1c1b1b] leading-none uppercase">
              ALERT<span className="text-[#b7131a]">NOW</span>
            </span>
            <span className="text-[10px] font-semibold text-[#5b403d] tracking-widest uppercase mt-0.5">
              Emergency Response
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#b7131a] bg-[#b7131a]/10 border-b-2 border-[#b7131a]'
                    : 'text-[#5b403d] hover:text-[#b7131a] hover:bg-[#f6f3f2]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-xl text-[#5b403d] hover:text-[#b7131a] hover:bg-[#f6f3f2] transition-colors cursor-pointer"
            title="Settings & Privacy Info"
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#1c1b1b] hover:bg-[#f6f3f2] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f8] border-b border-[#e4beb9]/50 px-4 pt-2 pb-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'text-[#b7131a] bg-[#b7131a]/10 border-l-4 border-[#b7131a]'
                      : 'text-[#1c1b1b] hover:bg-[#f6f3f2]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
