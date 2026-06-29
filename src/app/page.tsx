import { FeatureSection } from "@/components/FeatureSection";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden pt-20 pb-10">
      {/* Header/Nav placeholder to show context */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-border-primary bg-bg-primary/80 backdrop-blur-md z-50 flex items-center justify-between px-6 md:px-12">
        <div className="font-bold text-xl tracking-tight text-text-primary">
          ATOMITY.
        </div>
        <ThemeToggle />
      </header>
      
      {/* Scroll buffer to allow user to scroll into the section naturally */}
      <div className="h-[20vh] w-full flex items-center justify-center border-b border-border-primary border-dashed opacity-50">
        <span className="text-text-tertiary text-sm tracking-widest uppercase">Scroll Down</span>
      </div>

      <FeatureSection />

      <div className="h-[20vh] w-full mt-24 flex items-center justify-center border-t border-border-primary border-dashed opacity-50">
        <span className="text-text-tertiary text-sm tracking-widest uppercase">Continue Scrolling</span>
      </div>
    </main>
  );
}
