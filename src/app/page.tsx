import { FeatureSection } from "@/components/FeatureSection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden relative selection:bg-accent-primary/30">
      {/* Liquid animated blobs for Glassmorphism background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent-primary/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent-success/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_12s_ease-in-out_infinite_2s]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-accent-warning/15 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_14s_ease-in-out_infinite_1s]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-border-primary/20 glass-panel z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300">
        <div className="font-black text-2xl tracking-tighter text-text-primary flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-primary to-accent-success shadow-lg shadow-accent-primary/20"></div>
          ATOMITY
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <a href="#" className="hover:text-text-primary transition-colors">Platform</a>
          <a href="#" className="hover:text-text-primary transition-colors">Solutions</a>
          <a href="#" className="hover:text-text-primary transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="hidden md:flex items-center justify-center rounded-full bg-text-primary text-bg-primary px-5 py-2 text-sm font-semibold transition-transform hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-accent-primary/30 text-accent-primary text-sm font-medium mb-8 animate-fade-in-up">
          <Sparkles size={16} />
          <span>Atomity 2.0 is now live</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-balance max-w-5xl mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          Cloud optimization that feels like <span className="bg-gradient-to-r from-accent-primary to-accent-success bg-clip-text text-transparent">magic.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary text-balance max-w-2xl mb-12 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          Autopilot your infrastructure. Stop overpaying for idle resources and let our intelligent engine map, scale, and optimize your cloud in real-time.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <button className="flex items-center gap-2 rounded-full bg-accent-primary text-white px-8 py-4 text-base font-semibold shadow-lg shadow-accent-primary/25 transition-all hover:shadow-xl hover:shadow-accent-primary/40 hover:-translate-y-1">
            Start Free Trial <ArrowRight size={18} />
          </button>
          <button className="flex items-center gap-2 rounded-full glass-card px-8 py-4 text-base font-semibold transition-all hover:bg-bg-secondary/50">
            Book a Demo
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-text-primary to-transparent"></div>
        </div>
      </section>

      {/* The Scroll-Triggered Feature Section */}
      <FeatureSection />

      {/* Footer Buffer */}
      <footer className="w-full mt-32 border-t border-border-primary/20 py-12 text-center text-text-tertiary text-sm">
        <p>&copy; {new Date().getFullYear()} Atomity Inc. All rights reserved.</p>
      </footer>
    </main>
  );
}
