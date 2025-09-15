import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedTeachers from "../components/FeaturedTeachers";
import WhyChooseUs from "../components/WhyChooseUs";
import MobileAppBanner from "../components/MobileAppBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedTeachers />
        <WhyChooseUs />
        <MobileAppBanner />
      </main>
    </div>
  );
};

export default Index;
