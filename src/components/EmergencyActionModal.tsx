import React from 'react';
import { EMERGENCY_PROTOCOLS } from '../data/protocolsData';
import { EmergencyCategoryType, UserLocationState } from '../types/emergency';
import { 
  X, 
  Phone, 
  ShieldAlert, 
  CheckCircle2, 
  ChevronRight, 
  AlertTriangle,
  Flame,
  Ambulance,
  Car,
  CloudRain,
  Radio
} from 'lucide-react';

interface EmergencyActionModalProps {
  category: EmergencyCategoryType | null;
  onClose: () => void;
  onGoToProtocols: (cat: EmergencyCategoryType) => void;
  userLocation: UserLocationState;
}

export const EmergencyActionModal: React.FC<EmergencyActionModalProps> = ({
  category,
  onClose,
  onGoToProtocols,
  userLocation
}) => {
  if (!category) return null;

  const protocol = EMERGENCY_PROTOCOLS[category] || EMERGENCY_PROTOCOLS.medical;

  const getCategoryHeaderIcon = (cat: EmergencyCategoryType) => {
    switch (cat) {
      case 'medical': return <Ambulance className="w-6 h-6 text-[#b7131a]" />;
      case 'fire': return <Flame className="w-6 h-6 text-amber-700" />;
      case 'accident': return <Car className="w-6 h-6 text-[#4c56af]" />;
      case 'security': return <ShieldAlert className="w-6 h-6 text-[#1c1b1b]" />;
      case 'flood': return <CloudRain className="w-6 h-6 text-blue-700" />;
      default: return <Radio className="w-6 h-6 text-[#186a22]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 relative border-2 border-[#b7131a]/40 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-[#5b403d] hover:text-[#1c1b1b] hover:bg-[#f6f3f2] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-2xl bg-[#f6f3f2] border border-[#e4beb9]/40">
              {getCategoryHeaderIcon(category)}
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#b7131a] uppercase tracking-wider">
                Emergency Response Dispatch
              </span>
              <h2 className="text-xl font-extrabold text-[#1c1b1b]">{protocol.categoryName}</h2>
            </div>
          </div>
          <p className="text-xs text-[#5b403d] leading-relaxed">
            {protocol.caption}
          </p>
        </div>

        {/* Quick Phone Call Action Box */}
        <div className="bg-gradient-to-br from-[#b7131a] to-[#9c0e14] text-white p-5 rounded-2xl shadow-md space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-rose-100 flex items-center gap-1.5">
            <Phone className="w-4 h-4" />
            Connect to Verified Emergency Dispatch Line
          </p>
          <a
            href={`tel:${protocol.primaryHotline}`}
            className="w-full bg-white text-[#b7131a] hover:bg-rose-50 py-3.5 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm transition-all uppercase tracking-wide"
          >
            <Phone className="w-4 h-4 fill-[#b7131a]" />
            <span>Call Hotline ({protocol.primaryHotline})</span>
          </a>
          <p className="text-[11px] text-rose-100 text-center">
            Matched to jurisdiction: <strong>{userLocation.state}, Nigeria</strong>
          </p>
        </div>

        {/* Immediate Top 3 Critical Safety Actions */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold text-[#1c1b1b] uppercase tracking-wider flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5 text-[#b7131a]" />
            Immediate Life-Safety Actions
          </h3>

          <div className="space-y-2">
            {protocol.steps.slice(0, 3).map((step) => (
              <div
                key={step.stepNumber}
                className="p-3 rounded-xl bg-[#f6f3f2] border border-[#e4beb9]/30 text-xs space-y-0.5"
              >
                <div className="flex items-center gap-2 font-bold text-[#1c1b1b]">
                  <span className="w-5 h-5 rounded-full bg-white border border-[#e4beb9]/40 flex items-center justify-center text-[10px] text-[#b7131a] font-extrabold shrink-0">
                    {step.stepNumber}
                  </span>
                  <span>{step.title}</span>
                </div>
                <p className="text-[#5b403d] pl-7 text-[11px] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-2 border-t border-[#e4beb9]/30 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onGoToProtocols(category);
            }}
            className="w-full sm:flex-1 py-3 px-4 bg-[#4c56af] hover:bg-[#343d96] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>View Complete Step-by-Step Protocol</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-4 bg-[#f6f3f2] hover:bg-[#e5e2e1] text-[#1c1b1b] font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
