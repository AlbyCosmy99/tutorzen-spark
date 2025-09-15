import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedTeachers from "../components/FeaturedTeachers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedTeachers />
      </main>
    </div>
  );
};

export default Index;
