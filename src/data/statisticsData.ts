export interface MetricCardData {
  id: string;
  label: string;
  value: string;
  subtext: string;
  trend?: string;
  icon: string;
  color: string;
}

export interface StateCoverageData {
  state: string;
  servicesCount: number;
  dispatchHubs: number;
  avgResponseMins: number;
}

export const PLATFORM_STATISTICS = {
  summaryMetrics: [
    {
      id: 'hotlines',
      label: 'Verified Hotlines',
      value: '140+',
      subtext: 'Official emergency lines across 36 States & FCT',
      trend: 'Fully audited 2026',
      icon: 'ShieldCheck',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 'response-time',
      label: 'Average Dispatch Route',
      value: '4.2 min',
      subtext: 'Time to connect user to closest command room',
      trend: '-18% response latency',
      icon: 'Clock',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      id: 'states-covered',
      label: 'Geographic Coverage',
      value: '37 / 37',
      subtext: '36 Nigerian States + Federal Capital Territory',
      trend: '100% Regional coverage',
      icon: 'MapPin',
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: 'system-uptime',
      label: 'Platform Availability',
      value: '99.98%',
      subtext: 'High-reliability routing without login friction',
      trend: '24/7 Active status',
      icon: 'CheckCircle2',
      color: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  ],
  categoryBreakdown: [
    { category: 'Police & Security', percentage: 36, count: 52, color: '#4c56af' },
    { category: 'Medical & Ambulance', percentage: 28, count: 40, color: '#186a22' },
    { category: 'Fire & Rescue Service', percentage: 18, count: 26, color: '#b7131a' },
    { category: 'Road Safety & Crash (FRSC/TRACE)', percentage: 12, count: 17, color: '#d97706' },
    { category: 'Disaster Management (NEMA/SEMA)', percentage: 6, count: 9, color: '#2563eb' }
  ],
  topStateHubs: [
    { state: 'Lagos State', servicesCount: 28, dispatchHubs: 14, avgResponseMins: 3.8 },
    { state: 'Abuja (FCT)', servicesCount: 22, dispatchHubs: 11, avgResponseMins: 4.0 },
    { state: 'Rivers State', servicesCount: 16, dispatchHubs: 8, avgResponseMins: 4.5 },
    { state: 'Oyo State', servicesCount: 15, dispatchHubs: 7, avgResponseMins: 4.2 },
    { state: 'Kano State', servicesCount: 14, dispatchHubs: 7, avgResponseMins: 4.8 },
    { state: 'Kaduna State', servicesCount: 12, dispatchHubs: 6, avgResponseMins: 5.1 },
    { state: 'Enugu State', servicesCount: 11, dispatchHubs: 5, avgResponseMins: 4.6 },
    { state: 'Ogun State', servicesCount: 12, dispatchHubs: 6, avgResponseMins: 4.3 }
  ],
  serviceTypeRatios: [
    { title: 'Toll-Free Emergency Shortcodes (112, 122, 767, 615)', ratio: '24/7 Universal Access' },
    { title: 'State Police Control Rooms', ratio: 'Direct Local Command' },
    { title: 'Tertiary Hospital Trauma Centers', ratio: 'Level 1 Emergency Wards' },
    { title: 'Disaster & Search-and-Rescue Teams', ratio: 'NEMA/LASEMA Rapid Response' }
  ]
};
