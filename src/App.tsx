import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TopicsSection from './components/TopicsSection';
import EditorsPicksSection from './components/EditorsPicksSection';
import TagsSection from './components/TagsSection';
import RecentPostsSection from './components/RecentPostsSection';
import PopularPostsSection from './components/PopularPostsSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white min-h-screen font-body">
      <Navbar />
      <HeroSection />
      <TopicsSection />
      <EditorsPicksSection />
      <TagsSection />
      <RecentPostsSection />
      <PopularPostsSection />
      <TestimonialsSection />
      <GallerySection />
      <Footer />
    </div>
  );
}
