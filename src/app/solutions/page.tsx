import Link from "next/link";
import { Building, Rocket, Shield, Globe, Terminal, ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden relative selection:bg-accent-success/30 pb-24">
      {/* Liquid animated blobs for Glassmorphism background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent-success/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-accent-primary/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_14s_ease-in-out_infinite_1s]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-border-primary/20 glass-panel z-50 flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="font-black text-2xl tracking-tighter text-text-primary flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-primary to-accent-success shadow-lg shadow-accent-success/20"></div>
          ATOMITY
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <Link href="/platform" className="hover:text-text-primary transition-colors">Platform</Link>
          <Link href="/solutions" className="text-accent-success transition-colors">Solutions</Link>
          <Link href="/pricing" className="hover:text-text-primary transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden md:flex items-center justify-center rounded-full bg-text-primary text-bg-primary px-5 py-2 text-sm font-semibold transition-transform hover:scale-105 active:scale-95">
            Back to Dashboard
          </Link>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="w-full min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-10">
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-accent-success/30 text-accent-success text-sm font-medium mb-6 animate-fade-in-up">
            <Globe size={16} />
            <span>Built for Every Scale</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-balance mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Solve your hardest <span className="bg-gradient-to-r from-accent-success to-accent-primary bg-clip-text text-transparent">challenges.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary text-balance max-w-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Whether you are a hyper-growth startup stretching runway or an established enterprise seeking compliance, Atomity adapts to your unique cloud needs.
          </p>
        </div>
      </section>

      {/* Solutions / Use Cases */}
      <section className="w-full max-w-6xl px-6 md:px-12 flex flex-col gap-16 mt-12">
        
        {/* Solution 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-center glass-card p-8 md:p-12 rounded-[var(--radius-lg)] border-l-4 border-l-accent-primary">
          <div className="flex-1">
            <div className="w-14 h-14 rounded-xl bg-accent-primary/20 flex items-center justify-center text-accent-primary mb-6">
              <Rocket size={28} />
            </div>
            <h3 className="text-3xl font-bold mb-4">For Startups</h3>
            <p className="text-text-secondary text-lg mb-6">
              Extend your runway by up to 12 months. Atomity shuts down idle dev environments automatically and scales your production servers only when traffic demands it. Stop burning VC money on unused compute.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-text-secondary"><div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div> Zero-config integration</li>
              <li className="flex items-center gap-3 text-sm text-text-secondary"><div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div> Sleep mode for staging environments</li>
              <li className="flex items-center gap-3 text-sm text-text-secondary"><div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div> Transparent billing analytics</li>
            </ul>
            <button className="flex items-center gap-2 text-accent-primary font-semibold hover:gap-3 transition-all">
              See Startup Case Study <ArrowRight size={16} />
            </button>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-transparent blur-3xl -z-10 rounded-full"></div>
            <div className="glass-panel p-6 rounded-xl border border-accent-primary/30 shadow-2xl relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-border-primary/50 pb-4 mb-4">
                <span className="font-semibold">Runway Extended</span>
                <span className="text-accent-primary font-bold bg-accent-primary/10 px-2 py-1 rounded">+8 Months</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-text-secondary mb-1">
                    <span>AWS Bill (Before)</span>
                    <span>$12,500/mo</span>
                  </div>
                  <div className="w-full h-2 bg-bg-secondary rounded-full overflow-hidden">
                    <div className="w-full h-full bg-text-tertiary"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-text-secondary mb-1">
                    <span>AWS Bill (With Atomity)</span>
                    <span className="text-accent-primary font-bold">$4,200/mo</span>
                  </div>
                  <div className="w-full h-2 bg-bg-secondary rounded-full overflow-hidden">
                    <div className="w-[33%] h-full bg-accent-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center glass-card p-8 md:p-12 rounded-[var(--radius-lg)] border-l-4 border-l-accent-success">
          <div className="flex-1">
            <div className="w-14 h-14 rounded-xl bg-accent-success/20 flex items-center justify-center text-accent-success mb-6">
              <Terminal size={28} />
            </div>
            <h3 className="text-3xl font-bold mb-4">For DevOps Teams</h3>
            <p className="text-text-secondary text-lg mb-6">
              End pager fatigue. Our self-healing engine automatically redirects traffic away from failing nodes and replaces them in seconds without human intervention.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-text-secondary"><div className="w-1.5 h-1.5 rounded-full bg-accent-success"></div> Automated Node Replacement</li>
              <li className="flex items-center gap-3 text-sm text-text-secondary"><div className="w-1.5 h-1.5 rounded-full bg-accent-success"></div> Blue/Green Native Support</li>
              <li className="flex items-center gap-3 text-sm text-text-secondary"><div className="w-1.5 h-1.5 rounded-full bg-accent-success"></div> PagerDuty & Slack Integrations</li>
            </ul>
          </div>
          <div className="flex-1 w-full text-center p-8 bg-bg-secondary/50 rounded-xl border border-border-primary/50 relative">
             <h4 className="text-6xl font-black text-accent-success mb-2">99.999%</h4>
             <p className="text-text-secondary font-medium tracking-wide uppercase text-sm">Guaranteed Uptime</p>
             <div className="absolute top-4 right-4 animate-pulse w-3 h-3 bg-accent-success rounded-full shadow-[0_0_10px_rgba(var(--color-accent-success),0.8)]"></div>
          </div>
        </div>

        {/* Solution 3 */}
        <div className="flex flex-col md:flex-row gap-8 items-center glass-card p-8 md:p-12 rounded-[var(--radius-lg)] border-l-4 border-l-accent-warning">
          <div className="flex-1">
            <div className="w-14 h-14 rounded-xl bg-accent-warning/20 flex items-center justify-center text-accent-warning mb-6">
              <Building size={28} />
            </div>
            <h3 className="text-3xl font-bold mb-4">For Enterprises</h3>
            <p className="text-text-secondary text-lg mb-6">
              Unify your multi-cloud strategy. We provide absolute visibility across all your cloud providers, ensuring strict compliance and identifying massive billing inefficiencies.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-text-secondary"><div className="w-1.5 h-1.5 rounded-full bg-accent-warning"></div> Multi-Cloud (AWS, GCP, Azure)</li>
              <li className="flex items-center gap-3 text-sm text-text-secondary"><div className="w-1.5 h-1.5 rounded-full bg-accent-warning"></div> RBAC & SAML SSO</li>
              <li className="flex items-center gap-3 text-sm text-text-secondary"><div className="w-1.5 h-1.5 rounded-full bg-accent-warning"></div> SOC2 & HIPAA Compliant Mapping</li>
            </ul>
          </div>
          <div className="flex-1 w-full relative">
            <div className="glass-panel p-6 rounded-xl border border-accent-warning/30 flex items-center gap-6 justify-center">
               <Shield size={48} className="text-accent-warning" />
               <div className="text-left">
                 <p className="font-bold text-lg mb-1">Enterprise Grade Security</p>
                 <p className="text-sm text-text-secondary">Read-only IAM access ensures we never touch your proprietary code or customer data.</p>
               </div>
            </div>
          </div>
        </div>

      </section>

      {/* Impact Metric Banner */}
      <section className="w-full max-w-7xl mx-auto mt-24 px-6 md:px-12">
        <div className="rounded-[var(--radius-lg)] bg-gradient-to-r from-accent-primary to-accent-success p-1">
          <div className="glass-card bg-bg-primary/90 w-full h-full rounded-[calc(var(--radius-lg)-4px)] p-12 text-center">
            <p className="text-sm uppercase tracking-widest font-bold text-text-secondary mb-4">Cumulative Impact</p>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-accent-primary to-accent-success bg-clip-text text-transparent mb-4">
              $142,000,000+
            </h2>
            <p className="text-xl text-text-primary font-medium">In wasted compute saved for our clients in 2026.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
