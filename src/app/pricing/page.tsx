"use client";

import Link from "next/link";
import { Check, X as CloseIcon, CreditCard, HelpCircle, ArrowRight, CheckCircle, Smartphone, Building, User, Mail, MessageSquare, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const router = useRouter();
  const [activeModal, setActiveModal] = useState<"starter" | "pro" | "enterprise" | null>(null);
  
  // Pro Checkout State
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi">("card");
  const [checkoutStep, setCheckoutStep] = useState<"form" | "success">("form");
  const [proError, setProError] = useState<string | null>(null);
  
  // Enterprise Form State
  const [enterpriseStep, setEnterpriseStep] = useState<"form" | "success">("form");
  const [enterpriseError, setEnterpriseError] = useState<string | null>(null);

  const closeModal = () => {
    setActiveModal(null);
    setTimeout(() => {
      setCheckoutStep("form");
      setEnterpriseStep("form");
      setPaymentMethod("card");
      setProError(null);
      setEnterpriseError(null);
    }, 300); // Reset after animation
  };

  const handleProSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProError(null);
    
    const formData = new FormData(e.currentTarget);
    
    if (paymentMethod === "card") {
      const card = formData.get("card") as string;
      const expiry = formData.get("expiry") as string;
      const cvc = formData.get("cvc") as string;
      
      const cleanCard = card.replace(/\s+/g, '');
      if (!/^\d{16}$/.test(cleanCard)) {
        setProError("Card number must be exactly 16 digits.");
        return;
      }
      
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        setProError("Expiry must be in MM/YY format (e.g., 12/25).");
        return;
      }
      
      if (!/^\d{3,4}$/.test(cvc)) {
        setProError("CVC must be 3 or 4 digits.");
        return;
      }
    } else {
      const upi = formData.get("upi") as string;
      if (!/^[\w.-]+@[\w.-]+$/.test(upi)) {
        setProError("Please enter a valid UPI ID (e.g., example@upi).");
        return;
      }
    }
    
    // Simulate processing payment
    setCheckoutStep("success");
  };

  const handleEnterpriseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnterpriseError(null);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    
    const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'protonmail.com'];
    const domain = email.split('@')[1]?.toLowerCase();
    
    if (domain && personalDomains.includes(domain)) {
      setEnterpriseError(`Please use a valid work email address. Personal domains like @${domain} are not accepted.`);
      return;
    }
    
    // Simulate submitting lead form
    setEnterpriseStep("success");
  };

  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden relative selection:bg-accent-warning/30 pb-24">
      {/* Liquid animated blobs for Glassmorphism background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent-warning/15 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-primary/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_14s_ease-in-out_infinite_2s]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-border-primary/20 glass-panel z-50 flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="font-black text-2xl tracking-tighter text-text-primary flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-primary to-accent-success shadow-lg shadow-accent-warning/20"></div>
          ATOMITY
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <Link href="/platform" className="hover:text-text-primary transition-colors">Platform</Link>
          <Link href="/solutions" className="hover:text-text-primary transition-colors">Solutions</Link>
          <Link href="/pricing" className="text-accent-warning transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden md:flex items-center justify-center rounded-full bg-text-primary text-bg-primary px-5 py-2 text-sm font-semibold transition-transform hover:scale-105 active:scale-95">
            Back to Dashboard
          </Link>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="w-full min-h-[40vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-10">
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-accent-warning/30 text-accent-warning text-sm font-medium mb-6 animate-fade-in-up">
            <CreditCard size={16} />
            <span>Transparent Pricing, Infinite Scale</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-balance mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Pay only for what you <span className="bg-gradient-to-r from-accent-warning to-accent-primary bg-clip-text text-transparent">save.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary text-balance max-w-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Our pricing is designed to ensure you always come out on top. If Atomity doesn't save you money, you don't pay us a dime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-stretch">
        
        {/* Starter Tier */}
        <div className="glass-card p-8 rounded-[var(--radius-lg)] flex flex-col justify-between animate-fade-in-up h-full" style={{ animationDelay: "100ms" }}>
          <div>
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-text-secondary text-sm mb-6">For indie hackers and small projects</p>
            <div className="mb-8">
              <span className="text-5xl font-black">$0</span>
              <span className="text-text-secondary">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Check size={18} className="text-accent-success flex-shrink-0" />
                Up to 5 nodes monitored
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Check size={18} className="text-accent-success flex-shrink-0" />
                Manual optimization execution
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Check size={18} className="text-accent-success flex-shrink-0" />
                Community Support
              </li>
              <li className="flex items-center gap-3 text-sm text-text-tertiary">
                <CloseIcon size={18} className="flex-shrink-0" />
                No auto-scaling AI
              </li>
              <li className="flex items-center gap-3 text-sm text-text-tertiary">
                <CloseIcon size={18} className="flex-shrink-0" />
                No compliance reports
              </li>
            </ul>
          </div>
          <button onClick={() => setActiveModal("starter")} className="w-full py-3 rounded-full border border-border-primary hover:bg-bg-secondary/50 font-semibold transition-all mt-8">
            Get Started
          </button>
        </div>

        {/* Pro Tier - Highlighted */}
        <div className="glass-card p-8 rounded-[var(--radius-lg)] flex flex-col justify-between border border-accent-warning shadow-[0_0_40px_rgba(var(--color-accent-warning),0.15)] relative transform md:scale-105 z-10 animate-fade-in-up h-full" style={{ animationDelay: "200ms" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent-warning to-accent-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            Most Popular
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-text-secondary text-sm mb-6">For growing businesses and startups</p>
            <div className="mb-8">
              <span className="text-5xl font-black">$49</span>
              <span className="text-text-secondary">/mo per node</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-text-primary font-medium">
                <Check size={18} className="text-accent-warning flex-shrink-0" />
                Unlimited nodes monitored
              </li>
              <li className="flex items-center gap-3 text-sm text-text-primary font-medium">
                <Check size={18} className="text-accent-warning flex-shrink-0" />
                Fully automated AI scaling
              </li>
              <li className="flex items-center gap-3 text-sm text-text-primary font-medium">
                <Check size={18} className="text-accent-warning flex-shrink-0" />
                Predictive load balancing
              </li>
              <li className="flex items-center gap-3 text-sm text-text-primary font-medium">
                <Check size={18} className="text-accent-warning flex-shrink-0" />
                Slack & PagerDuty alerts
              </li>
              <li className="flex items-center gap-3 text-sm text-text-primary font-medium">
                <Check size={18} className="text-accent-warning flex-shrink-0" />
                Priority Email Support
              </li>
            </ul>
          </div>
          <button onClick={() => setActiveModal("pro")} className="w-full py-3 rounded-full bg-accent-warning text-bg-primary hover:bg-accent-warning/90 hover:shadow-lg hover:shadow-accent-warning/20 font-bold transition-all flex justify-center items-center gap-2 mt-8">
            Start Free Trial <ArrowRight size={18} />
          </button>
        </div>

        {/* Enterprise Tier */}
        <div className="glass-card p-8 rounded-[var(--radius-lg)] flex flex-col justify-between animate-fade-in-up h-full" style={{ animationDelay: "300ms" }}>
          <div>
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-text-secondary text-sm mb-6">For absolute control and scale</p>
            <div className="mb-8">
              <span className="text-5xl font-black tracking-tight">Custom</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Check size={18} className="text-text-primary flex-shrink-0" />
                Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Check size={18} className="text-text-primary flex-shrink-0" />
                Multi-cloud support (AWS, Azure, GCP)
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Check size={18} className="text-text-primary flex-shrink-0" />
                SAML SSO & Advanced RBAC
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Check size={18} className="text-text-primary flex-shrink-0" />
                SOC2 / HIPAA Compliance Enforcement
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Check size={18} className="text-text-primary flex-shrink-0" />
                Dedicated Success Manager
              </li>
            </ul>
          </div>
          <button onClick={() => setActiveModal("enterprise")} className="w-full py-3 rounded-full glass-panel hover:bg-bg-secondary/50 font-semibold transition-all">
            Contact Sales
          </button>
        </div>

      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-3xl px-6 mx-auto mt-24">
        <div className="text-center mb-12">
          <HelpCircle size={48} className="mx-auto text-text-tertiary mb-4 opacity-50" />
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          <div className="glass-panel p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-2">How do you calculate node pricing?</h4>
            <p className="text-text-secondary text-sm">You are only charged for nodes that are actively being optimized by our AI engine. Nodes that are monitored but managed manually fall under the free tier allocation.</p>
          </div>
          <div className="glass-panel p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-2">Do you have access to our proprietary code?</h4>
            <p className="text-text-secondary text-sm">No. Atomity connects to your cloud provider via read-only IAM roles that only expose infrastructure metrics (CPU, RAM, Network). We never see your application code or customer databases.</p>
          </div>
          <div className="glass-panel p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-2">What happens if Atomity doesn't save me money?</h4>
            <p className="text-text-secondary text-sm">We offer an absolute ROI guarantee. If the amount of money you save on compute costs during a billing cycle is less than your Atomity invoice, we waive our fee for that month.</p>
          </div>
        </div>
      </section>

      {/* OVERLAYS / MODALS */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          
          {/* STARTER MODAL */}
          {activeModal === "starter" && (
            <div className="glass-card w-full max-w-md p-8 rounded-2xl relative shadow-2xl shadow-accent-primary/20 animate-scale-in">
              <button onClick={closeModal} className="absolute top-4 right-4 p-2 rounded-full hover:bg-bg-secondary transition-colors text-text-secondary hover:text-text-primary">
                <CloseIcon size={20} />
              </button>
              
              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-accent-success/20 text-accent-success rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Free Subscription Active</h3>
                <p className="text-text-secondary mb-8">
                  You are currently on the Starter tier. You can monitor up to 5 nodes entirely for free, forever.
                </p>
                <Link href="/" className="w-full py-3 rounded-full bg-text-primary text-bg-primary font-bold hover:scale-[1.02] transition-transform inline-block">
                  Go to Dashboard
                </Link>
              </div>
            </div>
          )}

          {/* PRO CHECKOUT MODAL */}
          {activeModal === "pro" && (
            <div className="glass-card w-full max-w-2xl overflow-hidden rounded-2xl relative shadow-2xl shadow-accent-warning/20 animate-scale-in flex flex-col md:flex-row">
              <button onClick={closeModal} className="absolute top-4 right-4 p-2 rounded-full hover:bg-bg-secondary transition-colors text-text-secondary hover:text-text-primary z-10">
                <CloseIcon size={20} />
              </button>
              
              {checkoutStep === "success" ? (
                <div className="w-full p-12 text-center flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-accent-warning/20 text-accent-warning rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Pro Trial Activated!</h3>
                  <p className="text-text-secondary mb-2 text-balance max-w-sm mx-auto">
                    Your 30-day free trial has officially started.
                  </p>
                  <p className="text-sm text-text-tertiary mb-8 text-balance max-w-sm mx-auto">
                    Your payment method will not be charged until the trial ends. Your subscription will automatically activate on day 31.
                  </p>
                  <Link href="/pro-workspace" className="px-8 py-3 rounded-full bg-accent-warning text-bg-primary font-bold hover:scale-[1.02] transition-transform inline-block">
                    Enter Pro Workspace
                  </Link>
                </div>
              ) : (
                <>
                  {/* Order Summary Side */}
                  <div className="bg-bg-secondary/50 p-8 w-full md:w-1/3 border-r border-border-primary/50 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-lg mb-6">Order Summary</h4>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-medium text-text-secondary">Pro Plan</span>
                        <span className="font-bold">$49/mo</span>
                      </div>
                      <div className="flex justify-between items-center mb-4 pb-4 border-b border-border-primary/50">
                        <span className="font-medium text-text-secondary">Trial Discount</span>
                        <span className="font-bold text-accent-warning">-$49</span>
                      </div>
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-bold">Due Today</span>
                        <span className="font-black">$0.00</span>
                      </div>
                    </div>
                    <div className="mt-8 text-xs text-text-tertiary">
                      <p>You are starting a 30-day free trial. Your subscription will automatically activate and you will be charged $49/mo per node after the trial period ends.</p>
                    </div>
                  </div>

                  {/* Payment Details Side */}
                  <div className="p-8 w-full md:w-2/3">
                    <h3 className="text-2xl font-bold mb-6">Payment Details</h3>
                    
                    {/* Tabs */}
                    <div className="flex gap-2 mb-8 bg-bg-secondary p-1 rounded-lg">
                      <button 
                        type="button"
                        onClick={() => { setPaymentMethod("card"); setProError(null); }}
                        className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all flex items-center justify-center gap-2 ${paymentMethod === "card" ? "bg-bg-primary shadow-sm text-text-primary" : "text-text-tertiary hover:text-text-secondary"}`}
                      >
                        <CreditCard size={16} /> Credit/Debit Card
                      </button>
                      <button 
                        type="button"
                        onClick={() => { setPaymentMethod("upi"); setProError(null); }}
                        className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all flex items-center justify-center gap-2 ${paymentMethod === "upi" ? "bg-bg-primary shadow-sm text-text-primary" : "text-text-tertiary hover:text-text-secondary"}`}
                      >
                        <Smartphone size={16} /> UPI
                      </button>
                    </div>

                    <form onSubmit={handleProSubmit} className="space-y-4" noValidate>
                      {paymentMethod === "card" ? (
                        <>
                          <div>
                            <label className="block text-xs font-semibold text-text-secondary mb-1 uppercase tracking-wider">Card Number</label>
                            <input name="card" required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-bg-secondary border border-border-primary rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-warning transition-colors" />
                          </div>
                          <div className="flex gap-4">
                            <div className="flex-1">
                              <label className="block text-xs font-semibold text-text-secondary mb-1 uppercase tracking-wider">Expiry</label>
                              <input name="expiry" required type="text" placeholder="MM/YY" className="w-full bg-bg-secondary border border-border-primary rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-warning transition-colors" />
                            </div>
                            <div className="flex-1">
                              <label className="block text-xs font-semibold text-text-secondary mb-1 uppercase tracking-wider">CVC</label>
                              <input name="cvc" required type="text" placeholder="123" className="w-full bg-bg-secondary border border-border-primary rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-warning transition-colors" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-text-secondary mb-1 uppercase tracking-wider">Name on Card</label>
                            <input name="name" required type="text" placeholder="John Doe" className="w-full bg-bg-secondary border border-border-primary rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-warning transition-colors" />
                          </div>
                        </>
                      ) : (
                        <div>
                          <label className="block text-xs font-semibold text-text-secondary mb-1 uppercase tracking-wider">UPI ID</label>
                          <input name="upi" required type="text" placeholder="example@upi" className="w-full bg-bg-secondary border border-border-primary rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-warning transition-colors mb-4" />
                          <div className="p-4 rounded-lg bg-accent-warning/10 border border-accent-warning/30 text-sm text-text-secondary">
                            A payment mandate request will be sent to your UPI app. Approve it to start your 30-day free trial.
                          </div>
                        </div>
                      )}

                      {proError && (
                        <div className="flex items-center gap-2 text-accent-error text-sm mt-2 font-medium bg-accent-error/10 p-3 rounded-lg border border-accent-error/20 animate-scale-in">
                          <AlertCircle size={16} className="flex-shrink-0" />
                          <span>{proError}</span>
                        </div>
                      )}

                      <button type="submit" className="w-full mt-6 py-4 rounded-full bg-accent-warning text-bg-primary font-bold text-lg hover:shadow-lg hover:shadow-accent-warning/20 transition-all flex justify-center items-center gap-2">
                        Start 30-Day Free Trial
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          )}

          {/* ENTERPRISE CONTACT MODAL */}
          {activeModal === "enterprise" && (
            <div className="glass-card w-full max-w-lg p-8 md:p-10 rounded-2xl relative shadow-2xl animate-scale-in">
              <button onClick={closeModal} className="absolute top-4 right-4 p-2 rounded-full hover:bg-bg-secondary transition-colors text-text-secondary hover:text-text-primary">
                <CloseIcon size={20} />
              </button>
              
              {enterpriseStep === "success" ? (
                <div className="text-center flex flex-col items-center py-8">
                  <div className="w-20 h-20 bg-text-primary/10 text-text-primary rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Request Received</h3>
                  <p className="text-text-secondary mb-8 text-balance max-w-sm mx-auto">
                    Thank you for your interest. An Enterprise Success Manager will be in touch with you within 24 hours to discuss your multi-cloud architecture.
                  </p>
                  <button onClick={closeModal} className="w-full py-3 rounded-full bg-text-primary text-bg-primary font-bold hover:scale-[1.02] transition-transform inline-block">
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-2">Contact Sales</h3>
                    <p className="text-text-secondary">Scale your infrastructure securely with our enterprise solutions.</p>
                  </div>
                  
                  <form onSubmit={handleEnterpriseSubmit} className="space-y-4" noValidate>
                    <div className="flex gap-4">
                      <div className="flex-1 relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
                           <User size={18} />
                        </div>
                        <input name="firstName" required type="text" placeholder="First Name" className="w-full bg-bg-secondary border border-border-primary rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-text-primary transition-colors" />
                      </div>
                      <div className="flex-1">
                        <input name="lastName" required type="text" placeholder="Last Name" className="w-full bg-bg-secondary border border-border-primary rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-text-primary transition-colors" />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
                         <Mail size={18} />
                      </div>
                      <input name="email" required type="email" placeholder="Work Email" className="w-full bg-bg-secondary border border-border-primary rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-text-primary transition-colors" />
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
                         <Building size={18} />
                      </div>
                      <input name="company" required type="text" placeholder="Company Name" className="w-full bg-bg-secondary border border-border-primary rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-text-primary transition-colors" />
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-3 top-4 text-text-tertiary">
                         <MessageSquare size={18} />
                      </div>
                      <textarea name="message" required placeholder="How can we help your infrastructure?" rows={3} className="w-full bg-bg-secondary border border-border-primary rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-text-primary transition-colors resize-none"></textarea>
                    </div>

                    {enterpriseError && (
                      <div className="flex items-center gap-2 text-accent-error text-sm mt-2 font-medium bg-accent-error/10 p-3 rounded-lg border border-accent-error/20 animate-scale-in">
                        <AlertCircle size={16} className="flex-shrink-0" />
                        <span>{enterpriseError}</span>
                      </div>
                    )}

                    <button type="submit" className="w-full mt-4 py-4 rounded-full bg-text-primary text-bg-primary font-bold text-lg hover:scale-[1.02] transition-transform">
                      Submit Request
                    </button>
                  </form>
                </>
              )}
            </div>
          )}

        </div>
      )}

    </main>
  );
}
