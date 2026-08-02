import React, { useState } from 'react';
import { UserLocationState } from '../types/emergency';
import { X, Shield, MapPin, Volume2, Lock, Check, Info } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userLocation: UserLocationState;
  onRequestLocation: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  userLocation,
  onRequestLocation
}) => {
  const [audioSignalEnabled, setAudioSignalEnabled] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 relative border border-[#e4beb9]/40">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e4beb9]/30 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#b7131a] text-white flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-[#1c1b1b]">Application Settings</h3>
              <p className="text-[11px] text-[#5b403d]">ALERTNOW Emergency Platform v4.2</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5b403d] hover:text-[#1c1b1b] hover:bg-[#f6f3f2] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          
          {/* Location Settings */}
          <div className="p-4 rounded-2xl bg-[#f6f3f2] border border-[#e4beb9]/30 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#b7131a]" />
                <span className="text-xs font-extrabold text-[#1c1b1b]">Location Detection</span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                userLocation.status === 'granted' ? 'bg-[#186a22]/10 text-[#186a22]' : 'bg-amber-100 text-amber-800'
              }`}>
                {userLocation.status === 'granted' ? 'Active' : 'Fallback / Manual'}
              </span>
            </div>
            <p className="text-[11px] text-[#5b403d]">
              Current jurisdiction: <strong className="text-[#1c1b1b]">{userLocation.addressText || userLocation.state}</strong>
            </p>
            <button
              onClick={onRequestLocation}
              className="w-full py-2 bg-white hover:bg-[#f0edec] border border-[#e4beb9]/40 text-[#1c1b1b] font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Request Browser Location Permission
            </button>
          </div>

          {/* Sound Feedback Toggle */}
          <div className="p-4 rounded-2xl bg-[#f6f3f2] border border-[#e4beb9]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-[#4c56af]" />
              <div>
                <p className="text-xs font-extrabold text-[#1c1b1b]">Audio Feedback</p>
                <p className="text-[11px] text-[#5b403d]">Sound confirmation when triggering SOS</p>
              </div>
            </div>
            <button
              onClick={() => setAudioSignalEnabled(!audioSignalEnabled)}
              className={`w-12 h-6 rounded-full transition-colors p-1 cursor-pointer ${
                audioSignalEnabled ? 'bg-[#b7131a]' : 'bg-gray-300'
              }`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                audioSignalEnabled ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Privacy & Safety Statement */}
          <div className="p-4 rounded-2xl bg-[#f0edec] border border-[#e4beb9]/30 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#1c1b1b]">
              <Lock className="w-4 h-4 text-[#186a22]" />
              <span>Data Privacy & Safety Guarantee</span>
            </div>
            <p className="text-[11px] text-[#5b403d] leading-relaxed">
              No personal identity or biometric data is harvested. Geolocation is used locally strictly to pinpoint relevant Nigerian emergency hotlines and nearby command posts.
            </p>
          </div>

        </div>

        <div className="pt-2 border-t border-[#e4beb9]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#b7131a] hover:bg-[#9c0e14] text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Save & Close
          </button>
        </div>

      </div>
    </div>
  );
};
