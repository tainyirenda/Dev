import Header from "../components/header";
import HeroSection from "../components/hero-section";
import Footer from "../components/footer";
import VideoLanding from "../video-landing";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoLanding />
      {/* Add more sections here */}
      <Footer />
    </div>
  );
}
