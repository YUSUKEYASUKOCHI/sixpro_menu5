import React, { useState, useEffect } from 'react';
import WeeklyMenu from './components/WeeklyMenu';
import Navigation from './components/Navigation';
import ShoppingListTab from './components/ShoppingListTab';
import FavoritesTab from './components/FavoritesTab';
import UserGuide from './components/UserGuide';
import BottomNavigation from './components/BottomNavigation';
import { useScrollPosition } from './hooks/useScrollPosition';
import type { UserData, UserProfileFormData } from './types';
import { calculateDailyPFC } from './utils/nutritionCalculator';
import { saveUserNutrition, getUserNutrition, getMenuType } from './utils/storage';
import UserProfilePanel from './components/UserProfilePanel';
import InitialSetupModal from './components/profile/InitialSetupModal';
import { Settings, BookOpen } from 'lucide-react';

function App() {
  const [currentTab, setCurrentTab] = useState('menu');
  const [isEditMode, setIsEditMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [userData, setUserData] = useState<UserData | null>(() => getUserNutrition());
  const [selectedPattern, setSelectedPattern] = useState(() => getMenuType());
  const [animationKey, setAnimationKey] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  const { scrollPosition } = useScrollPosition();
  const dailyPFC = userData ? calculateDailyPFC(userData) : null;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleUserDataSubmit = (data: UserData | UserProfileFormData, selectedPattern?: number) => {
    setUserData(data);
    saveUserNutrition(data);
    if (typeof selectedPattern === 'number') {
      setSelectedPattern(selectedPattern);
    }
  };

  const handleShoppingListUpdate = () => {
    setAnimationKey(prev => prev + 1);
  };

  const renderContent = () => {
    if (!userData) {
      return <InitialSetupModal onSubmit={handleUserDataSubmit} />;
    }

    switch (currentTab) {
      case 'menu':
        return (
          <>
            {dailyPFC && (
              <WeeklyMenu 
                userPFC={dailyPFC} 
                selectedPattern={selectedPattern}
                onShoppingListUpdate={handleShoppingListUpdate}
                userData={userData}
                onPatternSelect={setSelectedPattern}
              />
            )}
          </>
        );
      case 'shopping':
        return <ShoppingListTab onEditModeChange={setIsEditMode} />;
      case 'favorites':
        return <FavoritesTab />;
      case 'settings':
        return (
          <UserProfilePanel 
            onSubmit={handleUserDataSubmit} 
            initialData={userData}
            selectedPattern={selectedPattern}
            onPatternSelect={setSelectedPattern}
          />
        );
      default:
        return null;
    }
  };

  if (!userData) {
    return renderContent();
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src="https://utagesystem.s3.ap-northeast-1.amazonaws.com/XMGCtz22Dugu/DFV4ooetZWQj2hKkHXy4lAgxHft5rBsoK07DLMDv.png" 
                  alt="SIXPRO" 
                  className="h-12 w-auto transform transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="leading-tight">
                <h1 className="text-[16px] font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  パーソナル栄養管理メニュー
                </h1>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium text-gray-600">
                    プランニングシステム
                  </h2>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowGuide(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0066CC] transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">使い方</span>
            </button>
          </div>
        </div>
      </header>

      {!isMobile && (
        <Navigation 
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />
      )}

      <main className={`max-w-5xl mx-auto px-6 py-4 space-y-6 ${isMobile ? 'pb-24 mt-[72px]' : 'mt-[144px]'}`}>
        {renderContent()}
      </main>

      {isMobile && (
        <BottomNavigation
          currentTab={currentTab}
          onTabChange={setCurrentTab}
          animationKey={animationKey}
        />
      )}

      <UserGuide isOpen={showGuide} onClose={() => setShowGuide(false)} />
    </div>
  );
}

export default App;