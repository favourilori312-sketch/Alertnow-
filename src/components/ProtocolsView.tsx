import React, { useState } from 'react';
import { EMERGENCY_PROTOCOLS } from '../data/protocolsData';
import { EmergencyCategoryType } from '../types/emergency';
import { 
  AlertTriangle, 
  PhoneCall, 
  Share2, 
  Printer, 
  Clock, 
  Building2, 
  Shield, 
  Flame, 
  Ambulance, 
  Car, 
  ShieldAlert, 
  CloudRain, 
  Radio,
  CheckCircle2,
  Lock,
  VolumeX,
  EyeOff,
  UserCheck,
  TrendingUp,
  PowerOff,
  MapPin,
  HeartPulse,
  Activity,
  LogOut,
  Building,
  KeyRound,
  ShieldCheck,
  Bandage,
  DoorClosed,
  Users
} from 'lucide-react';

interface ProtocolsViewProps {
  initialCategory?: EmergencyCategoryType;
}

export const ProtocolsView: React.FC<ProtocolsViewProps> = ({
  initialCategory = 'medical'
}) => {
  const [selectedProtocolId, setSelectedProtocolId] = useState<EmergencyCategoryType>(initialCategory);
  const [shareNotice, setShareNotice] = useState(false);

  const activeProtocol = EMERGENCY_PROTOCOLS[selectedProtocolId] || EMERGENCY_PROTOCOLS.medical;

  const protocolTabs: { id: EmergencyCategoryType; label: string; icon: React.ReactNode }[] = [
    { id: 'medical', label: 'Medical', icon: <Ambulance className="w-5 h-5" /> },
    { id: 'fire', label: 'Fire', icon: <Flame className="w-5 h-5" /> },
    { id: 'accident', label: 'Accident', icon: <Car className="w-5 h-5" /> },
    { id: 'security', label: 'Security', icon: <ShieldAlert className="w-5 h-5" /> },
    { id: 'flood', label: 'Disaster', icon: <CloudRain className="w-5 h-5" /> },
    { id: 'other', label: 'General', icon: <Radio className="w-5 h-5" /> }
  ];

  // Icon map lookup helper
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#186a22]" />;
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-[#b7131a]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#4c56af]" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-[#b7131a]" />;
      case 'Bandage': return <Bandage className="w-6 h-6 text-amber-700" />;
      case 'LogOut': return <LogOut className="w-6 h-6 text-amber-700" />;
      case 'Building': return <Building className="w-6 h-6 text-[#4c56af]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#b7131a]" />;
      case 'DoorClosed': return <DoorClosed className="w-6 h-6 text-[#1c1b1b]" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6 text-amber-700" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-[#4c56af]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#186a22]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#b7131a]" />;
      case 'Lock': return <Lock className="w-6 h-6 text-[#b7131a]" />;
      case 'VolumeX': return <VolumeX className="w-6 h-6 text-[#4c56af]" />;
      case 'EyeOff': return <EyeOff className="w-6 h-6 text-[#1c1b1b]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-blue-700" />;
      case 'PowerOff': return <PowerOff className="w-6 h-6 text-amber-700" />;
      case 'Car': return <Car className="w-6 h-6 text-[#b7131a]" />;
      case 'Radio': return <Radio className="w-6 h-6 text-[#186a22]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#b7131a]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#4c56af]" />;
      default: return <Shield className="w-6 h-6 text-[#b7131a]" />;
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `ALERTNOW Safety Protocol: ${activeProtocol.title}`,
        text: `Predefined safety instructions for ${activeProtocol.categoryName}: Call ${activeProtocol.primaryHotline} in Nigeria.`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareNotice(true);
      setTimeout(() => setShareNotice(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-10">
      {/* Header & Critical Notice Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end bg-[#f0edec] p-6 sm:p-8 rounded-3xl border border-[#e4beb9]/40">
        <div className="lg:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b7131a] bg-[#b7131a]/10 px-3 py-1 rounded-full uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Predefined Safety System Protocols v4.2</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1c1b1b] leading-tight">
            Emergency <span className="text-[#b7131a] italic">Procedures</span> & Life-Safety Actions
          </h1>
          <p className="text-sm text-[#5b403d] max-w-2xl leading-relaxed">
            Authorized rapid-response guidelines for immediate threat mitigation. Select a category below to access prioritized safety steps. Protocols are standardized by application safety rules.
          </p>
        </div>

        <div className="lg:col-span-4 bg-rose-50 border-l-4 border-[#b7131a] p-4 rounded-2xl border border-rose-200 shadow-xs space-y-1.5">
          <div className="flex items-center gap-2 text-[#b7131a] font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Critical Notice</span>
          </div>
          <p className="text-xs text-rose-900 leading-relaxed font-medium">
            {activeProtocol.criticalNotice}
          </p>
        </div>
      </div>

      {/* Protocol Switcher Bar (Bento style) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 bg-[#f0edec] p-2 rounded-2xl border border-[#e4beb9]/40 shadow-xs">
        {protocolTabs.map((tab) => {
          const isSelected = selectedProtocolId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedProtocolId(tab.id)}
              className={`flex flex-col items-center justify-center p-3.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white text-[#b7131a] shadow-sm border border-[#e4beb9]/40 scale-102'
                  : 'text-[#5b403d] hover:bg-white/60 hover:text-[#1c1b1b]'
              }`}
            >
              <div className="mb-1.5">{tab.icon}</div>
              <span className="uppercase tracking-wider text-[11px]">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Protocol Display Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Metadata & Key Metrics Card */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          <div className="bg-white p-6 rounded-3xl border border-[#e4beb9]/40 shadow-xs space-y-6">
            <div className="space-y-2 border-b border-[#e4beb9]/30 pb-4">
              <span className="text-[11px] font-bold text-[#b7131a] uppercase tracking-wider">
                Active Category: {activeProtocol.categoryName}
              </span>
              <h2 className="text-xl font-extrabold text-[#1c1b1b]">{activeProtocol.title}</h2>
              <p className="text-xs text-[#5b403d]">{activeProtocol.caption}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#f6f3f2] p-3.5 rounded-2xl border border-[#e4beb9]/30">
                <p className="text-[10px] font-bold text-[#5b403d] uppercase tracking-wider flex items-center gap-1 mb-1">
                  <Clock className="w-3 h-3 text-[#4c56af]" />
                  Est. EMS Time
                </p>
                <p className="text-sm font-extrabold text-[#4c56af]">{activeProtocol.estimatedEmsTime}</p>
              </div>

              <div className="bg-[#f6f3f2] p-3.5 rounded-2xl border border-[#e4beb9]/30">
                <p className="text-[10px] font-bold text-[#5b403d] uppercase tracking-wider flex items-center gap-1 mb-1">
                  <Building2 className="w-3 h-3 text-[#186a22]" />
                  Primary Agency
                </p>
                <p className="text-xs font-bold text-[#186a22] line-clamp-1">{activeProtocol.localAuthority}</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={`tel:${activeProtocol.primaryHotline}`}
                className="w-full bg-[#b7131a] hover:bg-[#9c0e14] text-white py-3.5 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all uppercase tracking-wider"
              >
                <PhoneCall className="w-4 h-4" />
                <span>ACTIVATE EMERGENCY CALL ({activeProtocol.primaryHotline})</span>
              </a>

              <div className="flex gap-2">
                <button
                  onClick={handleShare}
                  className="flex-1 py-2.5 px-3 bg-[#f6f3f2] hover:bg-[#e5e2e1] text-[#1c1b1b] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Protocol</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="py-2.5 px-3 bg-[#f6f3f2] hover:bg-[#e5e2e1] text-[#1c1b1b] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  title="Print Guidelines"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
              </div>
              {shareNotice && (
                <p className="text-[11px] font-bold text-[#186a22] text-center">Link copied to clipboard!</p>
              )}
            </div>
          </div>
        </div>

        {/* Right: Step-by-Step Instructions */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-[#e4beb9]/40 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#e4beb9]/30 pb-4">
            <h3 className="text-lg font-bold text-[#1c1b1b]">Step-by-Step Safety Guidelines</h3>
            <span className="text-xs text-[#5b403d] font-semibold">{activeProtocol.steps.length} Sequenced Actions</span>
          </div>

          <div className="space-y-6">
            {activeProtocol.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="flex gap-4 p-4 rounded-2xl bg-[#f6f3f2] border border-[#e4beb9]/30 hover:border-[#b7131a]/40 transition-all"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#e4beb9]/50 flex items-center justify-center shadow-xs">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="text-[10px] font-extrabold text-[#5b403d] mt-1 uppercase">
                    Step {step.stepNumber}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-extrabold text-[#1c1b1b]">{step.title}</h4>
                    {step.isCritical && (
                      <span className="text-[10px] font-bold bg-[#b7131a] text-white px-2 py-0.5 rounded uppercase tracking-wide">
                        CRITICAL
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#5b403d] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#f0edec] border border-[#e4beb9]/30 flex items-center justify-between gap-4 text-xs">
            <span className="text-[#5b403d] font-medium">
              Protocols are standardized across Nigerian emergency agencies and cannot be user-modified.
            </span>
            <span className="font-bold text-[#186a22] shrink-0 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              Verified Standard
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
