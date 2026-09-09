import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Achievements } from '@/components/Achievements';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#07090e] text-zinc-100 overflow-x-hidden">
      {/* Dynamic Cosmic Background */}
      <BackgroundEffects />

      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1 relative z-10">
        <Hero />
        <Achievements />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Modern Dark Footer */}
      <Footer />
    </div>
  );
}
