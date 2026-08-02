import React from 'react';
import { PLATFORM_STATISTICS } from '../data/statisticsData';
import { ActiveTab } from '../types/emergency';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  BarChart3, 
  Layers, 
  Radio, 
  ExternalLink,
  Shield
} from 'lucide-react';

interface StatisticsViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const StatisticsView: React.FC<StatisticsViewProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <div className="bg-[#f0edec] p-6 sm:p-8 rounded-3xl border border-[#e4beb9]/40 space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b7131a] bg-[#b7131a]/10 px-3 py-1 rounded-full uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          <span>Platform Metrics & Infrastructure</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1c1b1b]">Emergency System Statistics</h1>
        <p className="text-sm text-[#5b403d] max-w-2xl leading-relaxed">
          Real-time summary of verified directory contacts, state dispatch readiness, and average connection speeds across Nigeria.
        </p>
      </div>

      {/* Top 4 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PLATFORM_STATISTICS.summaryMetrics.map((metric) => (
          <div
            key={metric.id}
            className={`p-6 rounded-3xl border shadow-xs space-y-3 bg-white ${metric.color}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5b403d]">{metric.label}</span>
              {metric.id === 'hotlines' && <ShieldCheck className="w-5 h-5 text-emerald-600" />}
              {metric.id === 'response-time' && <Clock className="w-5 h-5 text-indigo-600" />}
              {metric.id === 'states-covered' && <MapPin className="w-5 h-5 text-amber-600" />}
              {metric.id === 'system-uptime' && <CheckCircle2 className="w-5 h-5 text-rose-600" />}
            </div>

            <p className="text-3xl font-black tracking-tight text-[#1c1b1b]">{metric.value}</p>

            <div className="space-y-1 pt-1 border-t border-[#e4beb9]/20">
              <p className="text-xs font-medium text-[#5b403d]">{metric.subtext}</p>
              {metric.trend && (
                <span className="inline-block text-[10px] font-extrabold text-[#186a22] bg-[#186a22]/10 px-2 py-0.5 rounded">
                  {metric.trend}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Category Distribution Breakdown & State Coverage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Category Distribution Bars */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#e4beb9]/40 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#e4beb9]/30 pb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#b7131a]" />
              <h3 className="font-extrabold text-lg text-[#1c1b1b]">Directory Service Breakdown</h3>
            </div>
            <span className="text-xs font-bold text-[#5b403d]">140+ Contacts</span>
          </div>

          <div className="space-y-5">
            {PLATFORM_STATISTICS.categoryBreakdown.map((cat) => (
              <div key={cat.category} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold text-[#1c1b1b]">
                  <span>{cat.category}</span>
                  <span>{cat.count} lines ({cat.percentage}%)</span>
                </div>
                <div className="w-full h-3 bg-[#f6f3f2] rounded-full overflow-hidden border border-[#e4beb9]/20">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${cat.percentage}%`,
                      backgroundColor: cat.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#f0edec] text-xs text-[#5b403d] leading-relaxed flex items-center justify-between gap-4">
            <span>Every category is linked to official Nigerian federal or state command control centers.</span>
            <button
              onClick={() => setActiveTab('directory')}
              className="text-[#b7131a] font-bold hover:underline shrink-0 cursor-pointer flex items-center gap-1"
            >
              <span>Explore Directory</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Regional State Hub Metrics */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#e4beb9]/40 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#e4beb9]/30 pb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#4c56af]" />
              <h3 className="font-extrabold text-lg text-[#1c1b1b]">Top Regional Dispatch Hubs</h3>
            </div>
          </div>

          <div className="space-y-3">
            {PLATFORM_STATISTICS.topStateHubs.map((hub) => (
              <div
                key={hub.state}
                className="flex items-center justify-between p-3 rounded-2xl bg-[#f6f3f2] border border-[#e4beb9]/30 text-xs"
              >
                <div>
                  <p className="font-extrabold text-[#1c1b1b]">{hub.state}</p>
                  <p className="text-[11px] text-[#5b403d]">{hub.dispatchHubs} Command Control Posts</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#b7131a]">{hub.servicesCount} Lines</span>
                  <p className="text-[10px] text-[#186a22] font-semibold">~{hub.avgResponseMins} min connection</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Access Service Standards */}
      <div className="bg-[#f0edec] p-6 sm:p-8 rounded-3xl border border-[#e4beb9]/40 space-y-4">
        <div className="flex items-center gap-2 text-[#186a22] font-bold text-xs uppercase tracking-wider">
          <Radio className="w-4 h-4" />
          <span>Verified Access Infrastructure</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLATFORM_STATISTICS.serviceTypeRatios.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-[#e4beb9]/30 space-y-1">
              <p className="text-xs font-extrabold text-[#1c1b1b]">{item.title}</p>
              <p className="text-[11px] font-bold text-[#186a22]">{item.ratio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
