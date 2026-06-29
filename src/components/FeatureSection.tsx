"use client";

import { motion } from "framer-motion";
import { useCloudData } from "@/hooks/useApiData";
import { AnimatedCard } from "./AnimatedCard";
import { Badge } from "./Badge";
import { MetricCounter } from "./MetricCounter";
import { Server, Cpu, HardDrive, Activity } from "lucide-react";

export function FeatureSection() {
  const { data, isLoading, error } = useCloudData();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center max-w-3xl mx-auto"
      >
        <Badge variant="success" className="mb-6 px-4 py-1.5 text-sm">
          Infrastructure Optimization
        </Badge>
        <h2 className="fluid-heading font-bold text-balance mb-6 bg-gradient-to-br from-text-primary to-text-tertiary bg-clip-text text-transparent">
          Real-time Cloud Node Monitoring
        </h2>
        <p className="fluid-subheading text-text-secondary text-balance">
          Watch as our platform automatically provisions, scales, and optimizes your cloud infrastructure in real-time, reducing costs by up to 40%.
        </p>
      </motion.div>

      {isLoading ? (
        <div className="grid grid-cols-1 @container md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 rounded-[var(--radius-lg)] bg-bg-secondary" />
          ))}
        </div>
      ) : error ? (
        <div className="text-center p-8 rounded-[var(--radius-lg)] bg-accent-error/10 text-accent-error">
          Failed to load infrastructure data. Please try again.
        </div>
      ) : (
        <div className="grid grid-cols-1 @container md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Highlight KPI Card */}
          <AnimatedCard className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-accent-primary/10 to-transparent border-accent-primary/20 flex flex-col md:flex-row items-center justify-between p-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Total Compute Savings</h3>
              <p className="text-text-secondary">Across all active regions this month</p>
            </div>
            <div className="text-5xl md:text-6xl font-black text-accent-primary flex items-baseline">
              $<MetricCounter value={12450} format={(v) => v.toLocaleString(undefined, { maximumFractionDigits: 0 })} />
              <span className="text-xl ml-2 text-text-tertiary font-medium">/mo</span>
            </div>
          </AnimatedCard>

          {/* Dynamic Data Cards */}
          {data?.slice(0, 6).map((node, i) => (
            <AnimatedCard key={node.id} delay={0.1 * i} className="flex flex-col h-full group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-bg-secondary">
                <div 
                  className={`h-full ${node.status === "active" ? "bg-accent-success" : node.status === "inactive" ? "bg-accent-error" : "bg-accent-warning"}`} 
                  style={{ width: `${node.uptime}%` }} 
                />
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-bg-secondary text-text-primary group-hover:bg-accent-primary/10 group-hover:text-accent-primary transition-colors">
                    <Server size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{node.name}</h4>
                    <p className="text-xs text-text-tertiary">Uptime: {node.uptime}%</p>
                  </div>
                </div>
                <Badge 
                  variant={node.status === "active" ? "success" : node.status === "inactive" ? "error" : "warning"}
                >
                  {node.status}
                </Badge>
              </div>

              <div className="mt-auto grid grid-cols-2 gap-4">
                <div className="glass-panel p-3 rounded-[var(--radius-md)] flex items-center gap-3">
                  <Cpu size={16} className="text-text-tertiary" />
                  <div>
                    <p className="text-xs text-text-tertiary mb-1">CPU Load</p>
                    <p className="font-medium"><MetricCounter value={node.cpu} duration={1.5} />%</p>
                  </div>
                </div>
                <div className="glass-panel p-3 rounded-[var(--radius-md)] flex items-center gap-3">
                  <HardDrive size={16} className="text-text-tertiary" />
                  <div>
                    <p className="text-xs text-text-tertiary mb-1">Memory</p>
                    <p className="font-medium"><MetricCounter value={node.memory} duration={1.5} />%</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      )}
    </section>
  );
}
