import React, { useState, useEffect } from 'react';
import { ActiveTab, EmergencyCategoryType, UserLocationState } from './types/emergency';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { DirectoryView } from './components/DirectoryView';
import { ProtocolsView } from './components/ProtocolsView';
import { StatisticsView } from './components/StatisticsView';
import { AboutView } from './components/AboutView';
import { SettingsModal } from './components/SettingsModal';
import { EmergencyActionModal } from './components/EmergencyActionModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedCategory, setSelectedCategory] = useState<EmergencyCategoryType | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [protocolCategory, setProtocolCategory] = useState<EmergencyCategoryType>('medical');

  const [userLocation, setUserLocation] = useState<UserLocationState>({
    state: 'Lagos',
    lga: 'Ikeja',
    status: 'idle',
    addressText: 'Lagos, Nigeria'
  });

  // Geolocation Permission Handler
  const handleRequestLocation = () => {
    setUserLocation((prev) => ({ ...prev, status: 'locating' }));

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const accuracy = Math.round(position.coords.accuracy);

          // Simple approximate state detection for Nigeria coordinates
          let detectedState = 'Lagos';
          if (lat >= 8.9 && lat <= 9.2 && lng >= 7.2 && lng <= 7.6) {
            detectedState = 'Federal Capital Territory (Abuja)';
          } else if (lat >= 4.7 && lat <= 5.0 && lng >= 6.8 && lng <= 7.1) {
            detectedState = 'Rivers';
          } else if (lat >= 7.3 && lat <= 7.6 && lng >= 3.8 && lng <= 4.1) {
            detectedState = 'Oyo';
          } else if (lat >= 11.8 && lat <= 12.2 && lng >= 8.4 && lng <= 8.8) {
            detectedState = 'Kano';
          }

          setUserLocation({
            state: detectedState,
            latitude: lat,
            longitude: lng,
            accuracy,
            status: 'granted',
            addressText: `${detectedState}, Nigeria (±${accuracy}m GPS)`
          });
        },
        (error) => {
          console.warn('Geolocation access declined or unavailable:', error.message);
          setUserLocation({
            state: 'Lagos',
            lga: 'Ikeja',
            status: 'denied',
            addressText: 'Lagos, Nigeria (Default)'
          });
        },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
      );
    } else {
      setUserLocation({
        state: 'Lagos',
        status: 'fallback',
        addressText: 'Lagos, Nigeria'
      });
    }
  };

  useEffect(() => {
    // Attempt non-blocking location request on mount
    handleRequestLocation();
  }, []);

  const handleSelectCategory = (cat: EmergencyCategoryType) => {
    setSelectedCategory(cat);
  };

  const handleGoToProtocols = (cat: EmergencyCategoryType) => {
    setProtocolCategory(cat);
    setActiveTab('protocols');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] flex flex-col font-['Inter',sans-serif] selection:bg-[#b7131a] selection:text-white">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userLocation={userLocation}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            onSelectCategory={handleSelectCategory}
            userLocation={userLocation}
            onRequestLocation={handleRequestLocation}
          />
        )}

        {activeTab === 'directory' && (
          <DirectoryView initialStateFilter={userLocation.state || 'All States'} />
        )}

        {activeTab === 'protocols' && (
          <ProtocolsView initialCategory={protocolCategory} />
        )}

        {activeTab === 'statistics' && (
          <StatisticsView setActiveTab={setActiveTab} />
        )}

        {activeTab === 'about' && (
          <AboutView setActiveTab={setActiveTab} />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Modals */}
      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        userLocation={userLocation}
        onRequestLocation={handleRequestLocation}
      />

      <EmergencyActionModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onGoToProtocols={handleGoToProtocols}
        userLocation={userLocation}
      />
    </div>
  );
}
