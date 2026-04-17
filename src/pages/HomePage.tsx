import HeroSection from '@/components/HeroSection';
import Timeline from '@/components/Timeline';
import EpochGrid from '@/components/EpochGrid';
import FeaturedTopics from '@/components/FeaturedTopics';
import GamificationFeatures from '@/components/GamificationFeatures';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Timeline />
      <EpochGrid />
      <FeaturedTopics />
      <GamificationFeatures />
    </main>
  );
}
