import React from 'react';
import { Shield, PhoneCall, AlertCircle } from 'lucide-react';
import { ActiveTab } from '../types/emergency';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#f0edec] border-t border-[#e4beb9]/50 text-[#1c1b1b] pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-[#e4beb9]/40">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#b7131a] text-white flex items-center justify-center">
                <Shield className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[#1c1b1b] uppercase">
                ALERT<span className="text-[#b7131a]">NOW</span>
              </span>
            </div>
            <p className="text-xs text-[#5b403d] leading-relaxed">
              Nigeria’s unified emergency response & verified directory platform. Eliminating delay when seconds count.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#186a22] bg-[#186a22]/10 px-2.5 py-1 rounded-md w-fit">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>National Toll Free: 112</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#5b403d]">Platform Navigation</h4>
            <ul className="space-y-2 text-sm text-[#1c1b1b]">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-[#b7131a] transition-colors cursor-pointer">
                  Emergency Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('directory')} className="hover:text-[#b7131a] transition-colors cursor-pointer">
                  Search Emergency Directory
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('protocols')} className="hover:text-[#b7131a] transition-colors cursor-pointer">
                  Safety Protocols & Guidance
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('statistics')} className="hover:text-[#b7131a] transition-colors cursor-pointer">
                  System Statistics & Coverage
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-[#b7131a] transition-colors cursor-pointer">
                  About AlertNow Platform
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency Dispatch Hotline Quick-Look */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#5b403d]">National Direct Hotlines</h4>
            <ul className="space-y-2 text-xs text-[#1c1b1b]">
              <li className="flex justify-between items-center py-1 border-b border-[#e4beb9]/20">
                <span className="font-medium">National Emergency (All):</span>
                <a href="tel:112" className="font-bold text-[#b7131a] hover:underline">112</a>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-[#e4beb9]/20">
                <span className="font-medium">Road Safety (FRSC):</span>
                <a href="tel:122" className="font-bold text-[#b7131a] hover:underline">122</a>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-[#e4beb9]/20">
                <span className="font-medium">Lagos Emergency Line:</span>
                <a href="tel:767" className="font-bold text-[#b7131a] hover:underline">767</a>
              </li>
              <li className="flex justify-between items-center py-1">
                <span className="font-medium">NEMA Disaster HQ:</span>
                <a href="tel:080022556362" className="font-bold text-[#b7131a] hover:underline">0800 2255 6362</a>
              </li>
            </ul>
          </div>

          {/* Official Disclaimer */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#b7131a] flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              Official Disclaimer
            </h4>
            <p className="text-xs text-[#5b403d] leading-relaxed bg-[#ffffff] p-3 rounded-xl border border-[#e4beb9]/40">
              AlertNow is an emergency information, location verification, and direct connection routing platform. It connects users directly to official emergency service lines across Nigeria and does not replace official 112 dispatchers or direct emergency medical responders.
            </p>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#5b403d]">
          <p>© {new Date().getFullYear()} ALERTNOW Systems Nigeria. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Verified Emergency Data Infrastructure</span>
            <span>•</span>
            <span className="text-[#186a22] font-semibold">Active Status</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
