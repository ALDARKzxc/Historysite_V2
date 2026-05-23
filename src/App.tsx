import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/LanguageContext";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
import GamificationHUD, { GamificationSidebar } from "@/components/GamificationHUD";
import LevelUpAnimation from "@/components/LevelUpAnimation";
import HomePage from "@/pages/HomePage";
import EpochsPage from "@/pages/EpochsPage";
import EpochDetailPage from "@/pages/EpochDetailPage";
import ArticlePage from "@/pages/ArticlePage";
import TimelinePage from "@/pages/TimelinePage";
import LeaderboardPage from "@/pages/LeaderboardPage";
import AboutPage from "@/pages/AboutPage";
import LanguageLabPage from "@/pages/LanguageLabPage";

function AppContent() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navbar />
      <AuthModal />
      <LevelUpAnimation />
      <GamificationHUD />
      <GamificationSidebar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#2F5D9F]/20 border-t-[#2F5D9F] rounded-full animate-spin" />
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/epochs" element={<EpochsPage />} />
          <Route path="/epochs/:epochId" element={<EpochDetailPage />} />
          <Route path="/article/:topicId" element={<ArticlePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/language-lab" element={<LanguageLabPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </LanguageProvider>
  );
}

export default App;
