import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { EASE } from "@/lib/animations";
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
import GamePage from "@/pages/GamePage";

function AppContent() {
  const location = useLocation();

  // Always start a new page at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 18, scale: 0.992 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/epochs" element={<EpochsPage />} />
            <Route path="/epochs/:epochId" element={<EpochDetailPage />} />
            <Route path="/article/:topicId" element={<ArticlePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </motion.div>
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
