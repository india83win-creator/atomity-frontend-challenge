"use client";

import Link from "next/link";
import { Activity, Cpu, Server, Zap, ArrowLeft, Plus, Check } from "lucide-react";
import { useState } from "react";

export default function ProWorkspacePage() {
  const [toast, setToast] = useState({ show: false, message: "" });

  const triggerToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-bg-secondary text-text-primary p-6 md:p-12 overflow-x-hidden selection:bg-accent-warning/30 relative">
      {/* Background Effect */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-warning/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_15s_ease-in-out_infinite]"></div>
      </div>

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <Link href="/pricing" className="text-text-tertiary hover:text-text-primary flex items-center gap-2 mb-2 transition-colors text-sm font-medium">
            <ArrowLeft size={16} /> Back to Pricing
          </Link>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter">Pro Workspace</h1>
            <span className="bg-accent-warning/20 text-accent-warning border border-accent-warning/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              30-Day Trial Active
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 bg-bg-primary border border-border-primary rounded-lg px-4 py-2 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-accent-success animate-pulse"></div>
            <span className="text-sm font-medium text-text-secondary">AI Optimization Engine: Online</span>
          </div>
          <a href="https://aws.amazon.com/console/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-text-primary text-bg-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:scale-[1.02] transition-transform">
            <Plus size={18} /> Connect Cloud Account
          </a>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-accent-primary">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center">
              <Server size={20} />
            </div>
            <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Total</span>
          </div>
          <h3 className="text-3xl font-black mb-1">0</h3>
          <p className="text-text-secondary text-sm font-medium">Active Nodes Monitored</p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-accent-warning">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent-warning/10 text-accent-warning flex items-center justify-center">
              <Zap size={20} />
            </div>
            <span className="text-xs font-bold text-accent-success uppercase tracking-wider">+0%</span>
          </div>
          <h3 className="text-3xl font-black mb-1">0</h3>
          <p className="text-text-secondary text-sm font-medium">Nodes Auto-Scaled Today</p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-accent-success">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent-success/10 text-accent-success flex items-center justify-center">
              <Activity size={20} />
            </div>
            <span className="text-xs font-bold text-accent-success uppercase tracking-wider">Healthy</span>
          </div>
          <h3 className="text-3xl font-black mb-1">100%</h3>
          <p className="text-text-secondary text-sm font-medium">Uptime Guarantee</p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-text-primary">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-text-primary/10 text-text-primary flex items-center justify-center">
              <Cpu size={20} />
            </div>
            <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Est. Savings</span>
          </div>
          <h3 className="text-3xl font-black mb-1">$0.00</h3>
          <p className="text-text-secondary text-sm font-medium">Projected monthly savings</p>
        </div>

      </div>

      {/* Main Content Area */}
      <div className="glass-panel w-full min-h-[40vh] rounded-2xl flex flex-col items-center justify-center border border-border-primary border-dashed p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary/5 z-0"></div>
        <div className="z-10 flex flex-col items-center max-w-lg">
          <div className="w-20 h-20 rounded-2xl bg-bg-primary shadow-xl flex items-center justify-center mb-6">
            <Server size={32} className="text-text-tertiary" />
          </div>
          <h2 className="text-2xl font-bold mb-3">No infrastructure connected yet</h2>
          <p className="text-text-secondary mb-8 text-balance">
            Your Pro Trial is active! To start saving money and letting our AI auto-scale your infrastructure, you need to connect your first cloud provider.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://aws.amazon.com/console/" target="_blank" rel="noopener noreferrer" className="bg-bg-primary border border-border-primary hover:border-text-primary px-6 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
              Connect AWS
            </a>
            <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="bg-bg-primary border border-border-primary hover:border-text-primary px-6 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2" title="Connect Google Cloud">
              Connect Google Cloud
            </a>
          </div>
        </div>
      </div>

      {/* Global Toast Notification */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${toast.show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="glass-panel px-6 py-4 rounded-xl flex items-center gap-3 border-accent-success/30 shadow-[0_10px_40px_rgba(var(--color-accent-success),0.2)]">
          <div className="w-6 h-6 rounded-full bg-accent-success/20 flex items-center justify-center flex-shrink-0">
             <Check size={14} className="text-accent-success" />
          </div>
          <span className="font-semibold text-sm">{toast.message}</span>
        </div>
      </div>

    </main>
  );
}
