import React, { useState, useMemo } from 'react';
import { EMERGENCY_DIRECTORY, NIGERIAN_STATES } from '../data/emergencyDirectory';
import { EmergencyCategoryType, EmergencyContact } from '../types/emergency';
import { 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Filter, 
  Copy, 
  Check, 
  Info,
  Shield,
  X
} from 'lucide-react';

interface DirectoryViewProps {
  initialStateFilter?: string;
  initialCategoryFilter?: EmergencyCategoryType | 'all';
}

export const DirectoryView: React.FC<DirectoryViewProps> = ({
  initialStateFilter = 'All States',
  initialCategoryFilter = 'all'
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState<string>(initialStateFilter);
  const [selectedCategory, setSelectedCategory] = useState<EmergencyCategoryType | 'all'>(initialCategoryFilter);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [detailContact, setDetailContact] = useState<EmergencyContact | null>(null);

  const categoryFilters: { id: EmergencyCategoryType | 'all'; label: string }[] = [
    { id: 'all', label: 'All Categories' },
    { id: 'security', label: 'Police & Security' },
    { id: 'medical', label: 'Medical & Ambulance' },
    { id: 'fire', label: 'Fire Service' },
    { id: 'accident', label: 'Road Safety & Rescue' },
    { id: 'flood', label: 'Disaster Management' },
    { id: 'other', label: 'Specialized Response' }
  ];

  const filteredContacts = useMemo(() => {
    return EMERGENCY_DIRECTORY.filter((contact) => {
      // Search term filter
      const matchesSearch =
        searchTerm.trim() === '' ||
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm) ||
        contact.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (contact.address && contact.address.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (contact.categoryLabel && contact.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()));

      // State filter
      const matchesState =
        selectedState === 'All States' ||
        contact.state === selectedState ||
        contact.state.includes('Federal Capital Territory') && selectedState.includes('Federal Capital Territory');

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || contact.category === selectedCategory;

      return matchesSearch && matchesState && matchesCategory;
    });
  }, [searchTerm, selectedState, selectedCategory]);

  const handleCopyPhone = (phone: string, id: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-[#f0edec] p-6 sm:p-8 rounded-3xl border border-[#e4beb9]/40 space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b7131a] bg-[#b7131a]/10 px-3 py-1 rounded-full uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          <span>Verified Nigerian Directory</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1c1b1b]">Emergency Services Directory</h1>
        <p className="text-sm text-[#5b403d] max-w-2xl leading-relaxed">
          Search official emergency hotlines, command control centers, and verified medical, fire, and police contact lines across Nigeria’s 36 states and the FCT.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#e4beb9]/40 shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Text Search Field */}
          <div className="md:col-span-7 relative">
            <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-[#5b403d]" />
            <input
              type="text"
              placeholder="Search by name, state (e.g. Lagos, Abuja), keyword, or number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#f6f3f2] border border-[#e4beb9]/40 text-sm text-[#1c1b1b] placeholder-[#5b403d]/60 focus:outline-none focus:ring-2 focus:ring-[#b7131a]/30 focus:border-[#b7131a] transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-3.5 text-xs text-[#5b403d] hover:text-[#b7131a] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* State Filter Selector */}
          <div className="md:col-span-5 relative">
            <MapPin className="w-5 h-5 absolute left-3.5 top-3.5 text-[#b7131a]" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full pl-11 pr-8 py-3 rounded-2xl bg-[#f6f3f2] border border-[#e4beb9]/40 text-sm font-semibold text-[#1c1b1b] focus:outline-none focus:ring-2 focus:ring-[#b7131a]/30 focus:border-[#b7131a] cursor-pointer transition-all appearance-none"
            >
              {NIGERIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <span className="text-xs font-bold text-[#5b403d] uppercase tracking-wider flex items-center gap-1 shrink-0 pr-2">
            <Filter className="w-3.5 h-3.5" />
            Category:
          </span>
          {categoryFilters.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#b7131a] text-white shadow-xs'
                    : 'bg-[#f6f3f2] text-[#5b403d] hover:bg-[#e5e2e1] hover:text-[#1c1b1b]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Directory Results Counter */}
      <div className="flex items-center justify-between text-xs text-[#5b403d] px-2">
        <p>
          Showing <strong className="text-[#1c1b1b]">{filteredContacts.length}</strong> verified emergency contact lines
          {selectedState !== 'All States' && <span> in <strong className="text-[#b7131a]">{selectedState}</strong></span>}
        </p>
        {(selectedState !== 'All States' || selectedCategory !== 'all' || searchTerm !== '') && (
          <button
            onClick={() => {
              setSelectedState('All States');
              setSelectedCategory('all');
              setSearchTerm('');
            }}
            className="text-[#b7131a] font-bold hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Directory Contact Cards Grid */}
      {filteredContacts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white p-6 rounded-3xl border border-[#e4beb9]/40 hover:border-[#b7131a] hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                
                {/* Card Header Tag */}
                <div className="flex items-start justify-between gap-2">
                  <span className="bg-[#f6f3f2] text-[#4c56af] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-[#e4beb9]/30">
                    {contact.categoryLabel}
                  </span>
                  {contact.verified && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#186a22] bg-[#186a22]/10 px-2 py-0.5 rounded-md shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="font-extrabold text-base text-[#1c1b1b] group-hover:text-[#b7131a] transition-colors leading-snug">
                  {contact.name}
                </h3>

                {/* Location & Operating Hours */}
                <div className="space-y-1.5 text-xs text-[#5b403d]">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#b7131a] shrink-0" />
                    <span className="font-semibold text-[#1c1b1b]">{contact.state}</span>
                  </p>
                  {contact.address && (
                    <p className="pl-5 text-[11px] line-clamp-1">{contact.address}</p>
                  )}
                  <p className="flex items-center gap-1.5 pl-0.5 text-[11px]">
                    <Clock className="w-3 h-3 text-[#186a22] shrink-0" />
                    <span>Operating Hours: <strong className="text-[#186a22]">{contact.operatingHours}</strong></span>
                  </p>
                </div>

                {contact.description && (
                  <p className="text-xs text-[#5b403d] line-clamp-2 pt-1 border-t border-[#e4beb9]/20">
                    {contact.description}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex-1 bg-[#b7131a] hover:bg-[#9c0e14] text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {contact.phone}</span>
                  </a>

                  <button
                    onClick={() => handleCopyPhone(contact.phone, contact.id)}
                    className="p-2.5 rounded-xl bg-[#f6f3f2] text-[#1c1b1b] hover:bg-[#e5e2e1] transition-colors cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedId === contact.id ? (
                      <Check className="w-4 h-4 text-[#186a22]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={() => setDetailContact(contact)}
                    className="p-2.5 rounded-xl bg-[#f6f3f2] text-[#1c1b1b] hover:bg-[#e5e2e1] transition-colors cursor-pointer"
                    title="View Contact Details"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {contact.secondaryPhone && (
                  <a
                    href={`tel:${contact.secondaryPhone}`}
                    className="w-full bg-[#f6f3f2] hover:bg-[#e5e2e1] text-[#1c1b1b] py-2 px-3 rounded-xl font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#4c56af]" />
                    <span>Alt Line: {contact.secondaryPhone}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-3xl border border-[#e4beb9]/40 text-center space-y-4">
          <div className="w-12 h-12 bg-[#f6f3f2] text-[#5b403d] rounded-full flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-[#1c1b1b]">No emergency services match your search</h3>
          <p className="text-xs text-[#5b403d] max-w-md mx-auto">
            Try adjusting your search terms or clearing state/category filters. For immediate emergency dispatch anywhere in Nigeria, call the universal 112 toll-free line.
          </p>
          <button
            onClick={() => {
              setSelectedState('All States');
              setSelectedCategory('all');
              setSearchTerm('');
            }}
            className="bg-[#b7131a] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#9c0e14] transition-colors cursor-pointer"
          >
            Reset All Search Filters
          </button>
        </div>
      )}

      {/* Contact Detail Modal */}
      {detailContact && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 relative border border-[#e4beb9]/40">
            <button
              onClick={() => setDetailContact(null)}
              className="absolute right-4 top-4 p-2 text-[#5b403d] hover:text-[#1c1b1b] hover:bg-[#f6f3f2] rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="bg-[#b7131a]/10 text-[#b7131a] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {detailContact.categoryLabel}
              </span>
              <h3 className="text-xl font-extrabold text-[#1c1b1b] pt-1">{detailContact.name}</h3>
            </div>

            <div className="space-y-3 text-xs text-[#1c1b1b] bg-[#f6f3f2] p-4 rounded-2xl border border-[#e4beb9]/30">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#b7131a] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Jurisdiction / State:</span>
                  <p className="text-[#5b403d]">{detailContact.state}</p>
                  {detailContact.address && <p className="text-[#5b403d] mt-0.5">{detailContact.address}</p>}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#e4beb9]/30">
                <Clock className="w-4 h-4 text-[#186a22] shrink-0" />
                <div>
                  <span className="font-bold">Operating Hours:</span>
                  <span className="ml-2 text-[#186a22] font-bold">{detailContact.operatingHours}</span>
                </div>
              </div>

              {detailContact.email && (
                <div className="flex items-center gap-2 pt-2 border-t border-[#e4beb9]/30">
                  <Mail className="w-4 h-4 text-[#4c56af] shrink-0" />
                  <div>
                    <span className="font-bold">Official Email:</span>
                    <a href={`mailto:${detailContact.email}`} className="ml-2 text-[#4c56af] hover:underline font-semibold">
                      {detailContact.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {detailContact.description && (
              <p className="text-xs text-[#5b403d] leading-relaxed">
                {detailContact.description}
              </p>
            )}

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${detailContact.phone}`}
                className="flex-1 bg-[#b7131a] hover:bg-[#9c0e14] text-white py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Primary Line ({detailContact.phone})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
