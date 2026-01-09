'use client';

import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { PainPoints } from '@/components/landing/PainPoints';
import { GameMechanics } from '@/components/landing/GameMechanics';
import { FeatureGrid } from '@/components/landing/FeatureGrid';
import { EditorShowcase } from '@/components/landing/EditorShowcase';
import { Transformation } from '@/components/landing/Transformation';
import { LeaderboardPreview } from '@/components/landing/LeaderboardPreview';
import { FAQ } from '@/components/landing/FAQ';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
import { ParallaxSection } from '@/components/ui/ParallaxSection';
import { ScrollAnimation } from '@/components/ui/ScrollAnimation';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { Preloader } from '@/components/ui/Preloader';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-hidden">

      <Preloader />
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 flex flex-col gap-0">
        <Hero />

        <div id="features" className="relative z-20 bg-background/50 backdrop-blur-sm border-t border-white/5">
          {/* Added ID 'features' for Smooth Scroll Nav */}
          <ParallaxSection offset={30} className="py-10">
            <ScrollAnimation preset="slide-up">
              <PainPoints />
            </ScrollAnimation>
          </ParallaxSection>
        </div>

        <ParallaxSection offset={50} className="py-10">
          <ScrollAnimation delay={0.2} preset="zoom-in">
            <GameMechanics />
          </ScrollAnimation>
        </ParallaxSection>

        <div className="relative z-20 bg-background border-y border-white/5">
          <ParallaxSection offset={20}>
            <ScrollAnimation preset="blur" duration={1}>
              <Transformation />
            </ScrollAnimation>
          </ParallaxSection>
        </div>

        {/* Modules Section - Fixed visibility by removing heavy negative parallax */}
        <section id="modules" className="py-24 bg-[#050508] relative z-10 overflow-hidden">
          {/* Reduced parallax offset to prevent cutting off */}
          <ParallaxSection offset={0}>
            <ScrollAnimation preset="rotate-up">
              <div className="text-center mb-16 px-6">
                <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-6">Mission Select</h2>
                <p className="text-muted-foreground">Select your simulation environment.</p>
              </div>
              <FeatureGrid />
            </ScrollAnimation>
          </ParallaxSection>
        </section>

        <ParallaxSection offset={40}>
          <ScrollAnimation preset="slide-left">
            <EditorShowcase />
          </ScrollAnimation>
        </ParallaxSection>

        <div id="leaderboard" className="bg-black/80 backdrop-blur-xl relative z-20">
          {/* Added ID 'leaderboard' for Smooth Scroll Nav */}
          <ParallaxSection offset={20}>
            <ScrollAnimation delay={0.1} preset="zoom-out">
              <LeaderboardPreview />
            </ScrollAnimation>
          </ParallaxSection>
        </div>

        <ParallaxSection offset={-20}>
          <div id="faq">
            {/* Added ID 'faq' for Smooth Scroll Nav */}
            <ScrollAnimation preset="fade" duration={1.5}>
              <FAQ />
            </ScrollAnimation>
          </div>
        </ParallaxSection>

        <ParallaxSection offset={60}>
          <ScrollAnimation preset="blur" duration={1.2}>
            <FinalCTA />
          </ScrollAnimation>
        </ParallaxSection>
      </main>

      <Footer />
    </div>
  );
}
