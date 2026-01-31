import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySidebar from "@/components/CategorySidebar";
import MusicianGrid from "@/components/MusicianGrid";
import MusicianCTA from "@/components/MusicianCTA";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("soloists");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Main Content: Sidebar + Grid */}
        <section id="categorias" className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <CategorySidebar
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                onSelectCategory={setSelectedCategory}
                onSelectSubcategory={setSelectedSubcategory}
              />
              
              {/* Musician Grid */}
              <MusicianGrid selectedSubcategory={selectedSubcategory} />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />
        
        {/* CTA for Musicians */}
        <MusicianCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
