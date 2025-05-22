
import React from 'react';
import { useAppContext } from './contexts/AppContext.tsx';
import BottomNav from './components/BottomNav.tsx';
import SideNav from './components/SideNav.tsx';
import TodayPage from './pages/TodayPage.tsx';
import ActivityPage from './pages/ActivityPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import SettingsPage from './pages/SettingsPage.tsx';
import { AppPage } from './types';

const App: React.FC = () => {
  const { activePage, isLoading } = useAppContext();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'var(--bg-primary)'}}>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4" style={{ borderColor: 'var(--text-accent)' }}></div>
        <p className="ml-4 text-xl animate-fadeInUp" style={{ color: 'var(--text-secondary)' }}>Loading your awesome day...</p>
      </div>
    );
  }

  const renderPage = () => {
    switch (activePage) {
      case AppPage.Today:
        return <TodayPage />;
      case AppPage.Activity:
        return <ActivityPage />;
      case AppPage.Dashboard:
        return <DashboardPage />;
      case AppPage.Settings:
        return <SettingsPage />;
      default:
        return <TodayPage />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:p-4 md:gap-6">
      <SideNav />
      <main className="flex-1 pb-28 md:pb-0 overflow-y-auto"> {/* Increased pb for floating BottomNav */}
        {/* Removed inner max-w-5xl and p-4/p-8, page components will handle their own padding/max-width if needed for more flexibility */}
        {renderPage()}
      </main>
      <BottomNav />
    </div>
  );
};

export default App;