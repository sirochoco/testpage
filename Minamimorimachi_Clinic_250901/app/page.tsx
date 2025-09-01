
'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import SymptomsSection from '../components/SymptomsSection';
import FeaturesSection from '../components/FeaturesSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <SymptomsSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
