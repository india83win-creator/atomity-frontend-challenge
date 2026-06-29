import Link from "next/link";
import { ArrowLeft, Cpu, Activity, Zap, Layers, Network, Lock, Sparkles, Server } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function PlatformPage() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden relative selection:bg-accent-primary/30 pb-24">
      {/* Liquid animated blobs for Glassmorphism background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent-primary/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent-success/15 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_12s_ease-in-out_infinite_2s]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-border-primary/20 glass-panel z-50 flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="font-black text-2xl tracking-tighter text-text-primary flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-primary to-accent-success shadow-lg shadow-accent-primary/20"></div>
          ATOMITY
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <Link href="/platform" className="text-accent-primary transition-colors">Platform</Link>
          <Link href="/solutions" className="hover:text-text-primary transition-colors">Solutions</Link>
          <Link href="/pricing" className="hover:text-text-primary transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden md:flex items-center justify-center rounded-full bg-text-primary text-bg-primary px-5 py-2 text-sm font-semibold transition-transform hover:scale-105 active:scale-95">
            Back to Dashboard
          </Link>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-10">
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-accent-primary/30 text-accent-primary text-sm font-medium mb-6 animate-fade-in-up">
            <Cpu size={16} />
            <span>The Engine of Efficiency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-balance mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Unleash the full potential of your <span className="bg-gradient-to-r from-accent-primary to-accent-success bg-clip-text text-transparent">Infrastructure.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary text-balance max-w-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Atomity's platform connects directly to your cloud providers, instantly analyzing millions of data points to scale resources up or down with zero configuration.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Highlight Card */}
        <div className="lg:col-span-2 glass-card p-8 rounded-[var(--radius-lg)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-accent-primary transition-transform group-hover:scale-110">
            <Activity size={120} />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-primary mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI-Driven Auto Scaling</h3>
              <p className="text-text-secondary max-w-md">
                Our predictive AI models analyze your traffic patterns in real-time. We anticipate spikes and scale your nodes proactively, preventing downtime before it happens.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="glass-panel p-4 rounded-md flex-1 border-accent-primary/20">
                <p className="text-xs text-text-tertiary mb-1">Response Time</p>
                <p className="text-xl font-bold text-accent-success">12ms</p>
              </div>
              <div className="glass-panel p-4 rounded-md flex-1 border-accent-primary/20">
                <p className="text-xs text-text-tertiary mb-1">Prediction Accuracy</p>
                <p className="text-xl font-bold text-accent-primary">99.9%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Standard Card 1 */}
        <div className="glass-card p-8 rounded-[var(--radius-lg)] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-accent-success/20 flex items-center justify-center text-accent-success mb-6">
              <Network size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-Time Node Mapping</h3>
            <p className="text-text-secondary text-sm">
              Visualize your entire cloud architecture in a single pane of glass. Identify bottlenecks and zombie instances instantly.
            </p>
          </div>
        </div>

        {/* Standard Card 2 */}
        <div className="glass-card p-8 rounded-[var(--radius-lg)] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-accent-warning/20 flex items-center justify-center text-accent-warning mb-6">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Zero-Downtime Deployments</h3>
            <p className="text-text-secondary text-sm">
              Seamlessly deploy across clusters with our automated blue-green strategy integrated directly into the optimization pipeline.
            </p>
          </div>
        </div>

        {/* Standard Card 3 */}
        <div className="glass-card p-8 rounded-[var(--radius-lg)] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-text-primary/10 flex items-center justify-center text-text-primary mb-6">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Automated Compliance</h3>
            <p className="text-text-secondary text-sm">
              Ensure your resources are spun up in compliant regions. SOC2, HIPAA, and GDPR rules are enforced natively.
            </p>
          </div>
        </div>

        {/* Standard Card 4 */}
        <div className="glass-card p-8 rounded-[var(--radius-lg)] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-primary mb-6">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Multi-Cloud Ready</h3>
            <p className="text-text-secondary text-sm">
              AWS, GCP, or Azure. We abstract the complexity so you can optimize workloads regardless of where they live.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="w-full max-w-7xl px-6 md:px-12 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-text-secondary">Three simple steps to absolute efficiency.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="glass-card p-6 rounded-xl flex-1 text-center w-full relative">
            <div className="w-16 h-16 mx-auto bg-bg-secondary rounded-full flex items-center justify-center mb-4 border border-border-primary text-xl font-bold">1</div>
            <h4 className="font-bold mb-2">Connect</h4>
            <p className="text-sm text-text-secondary">Authenticate your cloud provider via read-only IAM roles.</p>
          </div>
          <ArrowLeft className="hidden md:block rotate-180 text-text-tertiary" size={24} />
          <div className="glass-card p-6 rounded-xl flex-1 text-center w-full border-accent-primary/50 relative shadow-[0_0_30px_rgba(var(--color-accent-primary),0.1)]">
            <div className="absolute -top-3 -right-3 bg-accent-primary text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <Sparkles size={10} /> Magic
            </div>
            <div className="w-16 h-16 mx-auto bg-accent-primary/20 text-accent-primary rounded-full flex items-center justify-center mb-4 border border-accent-primary/30 text-xl font-bold">2</div>
            <h4 className="font-bold mb-2">Analyze & Optimize</h4>
            <p className="text-sm text-text-secondary">Atomity's engine identifies waste and maps an optimized layout.</p>
          </div>
          <ArrowLeft className="hidden md:block rotate-180 text-text-tertiary" size={24} />
          <div className="glass-card p-6 rounded-xl flex-1 text-center w-full relative">
            <div className="w-16 h-16 mx-auto bg-accent-success/20 text-accent-success rounded-full flex items-center justify-center mb-4 border border-accent-success/30 text-xl font-bold">3</div>
            <h4 className="font-bold mb-2">Execute</h4>
            <p className="text-sm text-text-secondary">Approve the plan and let our agents scale your infrastructure.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
