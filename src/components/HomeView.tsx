import React, { useState } from 'react';
import { ActiveTab, EmergencyCategoryType, UserLocationState } from '../types/emergency';
import { 
  Bell, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Navigation, 
  Flame, 
  Ambulance, 
  Car, 
  ShieldAlert, 
  CloudRain, 
  MoreHorizontal,
  CheckCircle2,
  ExternalLink,
  Shield,
  Clock
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onSelectCategory: (category: EmergencyCategoryType) => void;
  userLocation: UserLocationState;
  onRequestLocation: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onSelectCategory,
  userLocation,
  onRequestLocation
}) => {
  const [sosModalOpen, setSosModalOpen] = useState(false);
  const [sosCountdown, setSosCountdown] = useState(5);
  const [sosActive, setSosActive] = useState(false);

  const handleTriggerSos = () => {
    setSosModalOpen(true);
    setSosActive(true);
    setSosCountdown(5);
  };

  const handleCancelSos = () => {
    setSosModalOpen(false);
    setSosActive(false);
  };

  const categoryCards: { id: EmergencyCategoryType; name: string; icon: React.ReactNode; bgColor: string; iconColor: string }[] = [
    {
      id: 'medical',
      name: 'Medical',
      icon: <Ambulance className="w-8 h-8" />,
      bgColor: 'bg-rose-100',
      iconColor: 'text-[#b7131a]'
    },
    {
      id: 'fire',
      name: 'Fire',
      icon: <Flame className="w-8 h-8" />,
      bgColor: 'bg-amber-100',
      iconColor: 'text-amber-700'
    },
    {
      id: 'accident',
      name: 'Accident',
      icon: <Car className="w-8 h-8" />,
      bgColor: 'bg-indigo-100',
      iconColor: 'text-[#4c56af]'
    },
    {
      id: 'security',
      name: 'Security',
      icon: <ShieldAlert className="w-8 h-8" />,
      bgColor: 'bg-[#f0edec]',
      iconColor: 'text-[#1c1b1b]'
    },
    {
      id: 'flood',
      name: 'Flood',
      icon: <CloudRain className="w-8 h-8" />,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-700'
    },
    {
      id: 'other',
      name: 'Other',
      icon: <MoreHorizontal className="w-8 h-8" />,
      bgColor: 'bg-slate-100',
      iconColor: 'text-slate-700'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero & SOS Epicenter */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fcf9f8] to-[#f6f3f2] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#e4beb9]/30 shadow-xs">
        {/* Background decorative ambient glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#b7131a]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#4c56af]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Text & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#b7131a]/10 text-[#b7131a] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5" />
              <span>Emergency Response System</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c1b1b] tracking-tight leading-tight">
              Connecting you to emergency services in Nigeria, <span className="text-[#b7131a] italic">instantly.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5b403d] leading-relaxed max-w-xl">
              One-tap access to local authorities, medical teams, and first responders. We eliminate the friction of finding help when seconds count.
            </p>

            {/* GPS Precision Card */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-[#e4beb9]/50 shadow-xs flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#f6f3f2] text-[#b7131a]">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#5b403d] uppercase tracking-wider">Location Status</p>
                  <p className="text-sm font-bold text-[#1c1b1b] flex items-center gap-1.5">
                    {userLocation.status === 'granted' ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-[#186a22]"></span>
                        <span>GPS Locked: {userLocation.addressText || `${userLocation.state}, Nigeria`}</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>{userLocation.state}, Nigeria (Approx)</span>
                      </>
                    )}
                  </p>
                </div>
                <button
                  onClick={onRequestLocation}
                  className="ml-2 text-xs font-semibold text-[#b7131a] hover:underline bg-[#b7131a]/5 px-2.5 py-1 rounded-lg border border-[#b7131a]/20 cursor-pointer"
                >
                  {userLocation.status === 'granted' ? 'Refresh' : 'Enable GPS'}
                </button>
              </div>
            </div>
          </div>

          {/* Right SOS Main Action Trigger */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
            <button
              onClick={handleTriggerSos}
              className="group relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#b7131a] to-[#9c0e14] text-white shadow-[0_15px_40px_rgba(183,19,26,0.35)] hover:shadow-[0_20px_50px_rgba(183,19,26,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer animate-sos-pulse"
              id="sos-trigger"
              aria-label="Trigger Emergency SOS Signal"
            >
              <div className="relative z-10 flex flex-col items-center text-center gap-1">
                <Bell className="w-16 h-16 sm:w-20 sm:h-20 animate-bounce transition-transform group-hover:scale-110" />
                <span className="text-3xl sm:text-4xl font-black tracking-tighter uppercase">SOS</span>
                <span className="text-xs font-bold opacity-90 uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full">
                  TAP TO DISPATCH
                </span>
              </div>
            </button>
            <p className="text-xs font-semibold text-[#5b403d] mt-4 text-center">
              Direct connection to 112 National Command Center
            </p>
          </div>

        </div>
      </section>

      {/* Categorized Specific Emergencies */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#e4beb9]/30 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#1c1b1b]">Specific Emergencies</h2>
            <p className="text-sm text-[#5b403d]">Categorizing your request directs you to specialized emergency protocols & dispatch units instantly.</p>
          </div>
          <button
            onClick={() => setActiveTab('protocols')}
            className="text-xs font-bold text-[#b7131a] hover:underline flex items-center gap-1 cursor-pointer w-fit"
          >
            <span>View All Safety Protocols</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryCards.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-[#e4beb9]/40 hover:border-[#b7131a] hover:shadow-md transition-all group cursor-pointer text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.bgColor} ${cat.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <span className="font-bold text-sm text-[#1c1b1b] uppercase tracking-wide">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Nearest Command Post & Quick Directory Links */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Nearest Police / Emergency Command Hub Card */}
        <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-[#e4beb9]/40 shadow-xs flex flex-col justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e4beb9]/30 pb-4">
            <div className="space-y-1">
              <span className="bg-[#4c56af]/10 text-[#4c56af] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Nearest Command Post
              </span>
              <h3 className="text-xl font-bold text-[#1c1b1b] pt-1">
                {userLocation.state === 'Lagos' ? 'Ikeja Central Police Division & LASEMA Hub' : `${userLocation.state} Central Emergency Command`}
              </h3>
              <p className="text-xs text-[#5b403d] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#b7131a]" />
                <span>1.2km away • Estimated Response Dispatch: ~6-8 mins</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="tel:112"
                className="bg-[#b7131a] hover:bg-[#9c0e14] text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Direct (112)</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Mockup */}
          <div className="relative h-48 bg-[#f6f3f2] rounded-2xl overflow-hidden border border-[#e4beb9]/30 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-amber-900/10 to-red-900/10 opacity-70"></div>
            {/* Stylized grid pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#b7131a_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 text-center space-y-2 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60 max-w-sm shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#b7131a] text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-bold text-xs text-[#1c1b1b]">
                GPS Location: {userLocation.addressText || `${userLocation.state}, Nigeria`}
              </p>
              <p className="text-[11px] text-[#5b403d]">
                Nearest verified responders matched to your current jurisdiction.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-[#5b403d] bg-[#f0edec] p-3 rounded-xl gap-2">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#186a22]" />
              Data Verified: NPF, FRSC, LASEMA, NEMA Official Hotlines
            </span>
            <button
              onClick={() => setActiveTab('directory')}
              className="font-bold text-[#b7131a] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Full Directory</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Emergency Directory Links Quick Widget */}
        <div className="lg:col-span-4 bg-[#f0edec] p-6 rounded-3xl border border-[#e4beb9]/40 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-[#e4beb9]/50 pb-3">
            <h3 className="font-bold text-base text-[#1c1b1b]">Quick Hotlines</h3>
            <button
              onClick={() => setActiveTab('directory')}
              className="text-xs font-bold text-[#b7131a] hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>See All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5">
            <a
              href="tel:112"
              className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#e4beb9]/30 hover:border-[#b7131a] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-[#186a22] flex items-center justify-center font-bold">
                  112
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1c1b1b]">National Emergency</p>
                  <p className="text-[11px] text-[#5b403d]">Police, Medical & Fire (Toll-Free)</p>
                </div>
              </div>
              <Phone className="w-4 h-4 text-[#5b403d] group-hover:text-[#b7131a]" />
            </a>

            <a
              href="tel:122"
              className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#e4beb9]/30 hover:border-[#b7131a] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  122
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1c1b1b]">FRSC Road Safety</p>
                  <p className="text-[11px] text-[#5b403d]">Highway Crash & Rescue</p>
                </div>
              </div>
              <Phone className="w-4 h-4 text-[#5b403d] group-hover:text-[#b7131a]" />
            </a>

            <a
              href="tel:767"
              className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#e4beb9]/30 hover:border-[#b7131a] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-100 text-[#b7131a] flex items-center justify-center font-bold">
                  767
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1c1b1b]">LASEMA Emergency</p>
                  <p className="text-[11px] text-[#5b403d]">Lagos Command Center</p>
                </div>
              </div>
              <Phone className="w-4 h-4 text-[#5b403d] group-hover:text-[#b7131a]" />
            </a>

            <a
              href="tel:080022556362"
              className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#e4beb9]/30 hover:border-[#b7131a] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  NEMA
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1c1b1b]">NEMA Disaster HQ</p>
                  <p className="text-[11px] text-[#5b403d]">Flood & Rescue Command</p>
                </div>
              </div>
              <Phone className="w-4 h-4 text-[#5b403d] group-hover:text-[#b7131a]" />
            </a>
          </div>

          <div className="bg-[#1c1b1b] text-white p-3.5 rounded-2xl flex items-center gap-3 mt-2">
            <Shield className="w-5 h-5 text-[#b7131a] shrink-0" />
            <p className="text-[11px] leading-tight text-gray-300">
              Your location coordinates are shared only with official responder dispatch systems during active distress calls.
            </p>
          </div>
        </div>

      </section>

      {/* SOS Distress Overlay Modal */}
      {sosModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center space-y-6 relative border border-[#b7131a]/30">
            
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#b7131a]/20 rounded-full animate-ping"></div>
              <div className="relative z-10 w-full h-full bg-[#b7131a] text-white rounded-full flex items-center justify-center shadow-lg">
                <Bell className="w-12 h-12 animate-bounce" />
              </div>
            </div>

            <div className="space-y-2">
              <span className="bg-[#b7131a]/10 text-[#b7131a] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Active Distress Signal
              </span>
              <h2 className="text-2xl font-extrabold text-[#1c1b1b]">Distress Signal Dispatched</h2>
              <p className="text-xs text-[#5b403d] leading-relaxed">
                Transmitting GPS coordinates to the nearest Nigerian Command & Control Center ({userLocation.state}, Nigeria).
              </p>
            </div>

            {/* Direct Dial Options */}
            <div className="w-full bg-[#f6f3f2] p-4 rounded-2xl space-y-3 border border-[#e4beb9]/30">
              <p className="text-xs font-bold text-[#1c1b1b] uppercase tracking-wider">Connect Directly via Phone:</p>
              <a
                href="tel:112"
                className="w-full bg-[#b7131a] hover:bg-[#9c0e14] text-white py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call 112 Emergency Dispatch Now</span>
              </a>
              {userLocation.state === 'Lagos' && (
                <a
                  href="tel:767"
                  className="w-full bg-[#4c56af] hover:bg-[#343d96] text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 767 LASEMA Hotline</span>
                </a>
              )}
            </div>

            <button
              onClick={handleCancelSos}
              className="w-full py-3 text-xs font-bold text-[#b7131a] uppercase tracking-wider border border-[#b7131a]/30 rounded-xl hover:bg-[#b7131a]/5 transition-colors cursor-pointer"
            >
              Cancel Signal (I'm Safe)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
