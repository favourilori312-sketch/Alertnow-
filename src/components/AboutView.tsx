import React from 'react';
import { ActiveTab } from '../types/emergency';
import { 
  Shield, 
  HelpCircle, 
  PhoneCall, 
  CheckCircle2, 
  AlertOctagon, 
  Search, 
  BookOpen, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface AboutViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab }) => {
  const faqs = [
    {
      q: 'What is AlertNow?',
      a: 'AlertNow is an emergency response connection and directory platform built specifically for Nigeria. It helps individuals quickly identify emergency types (Medical, Fire, Crime, Accident, Flood), locate verified emergency service hotlines in their state, and view predefined life-safety protocols.'
    },
    {
      q: 'Can I call 112 from any phone network in Nigeria?',
      a: 'Yes! 112 is the National Universal Emergency Toll-Free shortcode managed by the Nigerian Communications Commission (NCC). It works 24/7 across all telecommunication networks in Nigeria, even without active airtime balance or subscription.'
    },
    {
      q: 'Can users create or edit emergency protocols?',
      a: 'No. To ensure public safety and prevent misinformation during crises, all life-safety protocols are strictly controlled by the application and based on verified emergency medical, fire, and police procedures.'
    },
    {
      q: 'Does AlertNow track my location continuously?',
      a: 'No. AlertNow respects your privacy completely. Browser location permissions are requested solely to detect your current state and LGA to show nearest command posts. Your location is never stored on external servers.'
    },
    {
      q: 'What should I do if an official emergency line does not connect?',
      a: 'Always try the universal 112 shortcode first. If unavailable in your area, use the secondary state police control room or FRSC hotline listed in the Emergency Directory tab.'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <div className="bg-[#f0edec] p-6 sm:p-10 rounded-3xl border border-[#e4beb9]/40 space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b7131a] bg-[#b7131a]/10 px-3 py-1 rounded-full uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          <span>Platform Overview & Mission</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1c1b1b]">About ALERTNOW Nigeria</h1>
        <p className="text-base text-[#5b403d] max-w-3xl leading-relaxed">
          AlertNow is an emergency-response and verified connection platform engineered to eliminate friction when seconds count. We bridge the gap between distressed citizens and verified first responders across Nigeria’s 36 states and the Federal Capital Territory.
        </p>
      </div>

      {/* Official Disclaimer Callout */}
      <div className="bg-rose-50 p-6 sm:p-8 rounded-3xl border-2 border-[#b7131a] shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-[#b7131a] font-extrabold text-sm uppercase tracking-wider">
          <AlertOctagon className="w-5 h-5 shrink-0" />
          <span>Official Public Disclaimer</span>
        </div>
        <p className="text-xs sm:text-sm text-rose-950 font-medium leading-relaxed">
          ALERTNOW is an emergency information, location verification, and direct connection routing platform. ALERTNOW is NOT a replacement for official 112 national emergency dispatchers, hospital trauma care, or law enforcement officers. In any life-threatening emergency, dial 112 or local emergency responders immediately.
        </p>
      </div>

      {/* Core How It Works Modules */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#1c1b1b]">How AlertNow Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Module 1 */}
          <div className="bg-white p-6 rounded-3xl border border-[#e4beb9]/40 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#b7131a] flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#1c1b1b]">1. Emergency Selection</h3>
            <p className="text-xs text-[#5b403d] leading-relaxed">
              Users select an emergency category (Medical, Fire, Accident, Crime, Flood). The system immediately matches the category to targeted response steps and relevant dispatch hotlines.
            </p>
          </div>

          {/* Module 2 */}
          <div className="bg-white p-6 rounded-3xl border border-[#e4beb9]/40 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-[#4c56af] flex items-center justify-center font-bold">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#1c1b1b]">2. Verified Directory</h3>
            <p className="text-xs text-[#5b403d] leading-relaxed">
              Our directory contains audited contact lines for Police Control Rooms, Fire Services, FRSC rescue units, Teaching Hospitals, and NEMA across all 36 states and FCT.
            </p>
          </div>

          {/* Module 3 */}
          <div className="bg-white p-6 rounded-3xl border border-[#e4beb9]/40 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#186a22] flex items-center justify-center font-bold">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#1c1b1b]">3. Controlled Protocols</h3>
            <p className="text-xs text-[#5b403d] leading-relaxed">
              Predefined safety instructions guide users on immediate life-saving actions while waiting for paramedics, fire units, or armed police response teams to arrive.
            </p>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white p-6 sm:p-10 rounded-3xl border border-[#e4beb9]/40 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-[#e4beb9]/30 pb-4">
          <HelpCircle className="w-6 h-6 text-[#b7131a]" />
          <h2 className="text-xl font-bold text-[#1c1b1b]">Frequently Asked Questions (FAQs)</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#f6f3f2] border border-[#e4beb9]/30 space-y-1.5">
              <h3 className="text-sm font-extrabold text-[#1c1b1b] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#186a22] shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-[#5b403d] pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-[#1c1b1b] text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-extrabold">Need Emergency Help Right Now?</h3>
          <p className="text-xs text-gray-400">Tap below to access the universal national emergency dispatch line.</p>
        </div>
        <a
          href="tel:112"
          className="bg-[#b7131a] hover:bg-[#9c0e14] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-lg transition-all shrink-0"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call 112 (Toll Free)</span>
        </a>
      </div>
    </div>
  );
};
