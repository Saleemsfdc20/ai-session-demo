"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Sparkles, Code2, Cpu } from "lucide-react";

export function Innovation() {
  return (
    <Section id="innovation" className="bg-black/20 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-salesforce/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-salesforce/10 text-brand-salesforce border border-brand-salesforce/20 mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold tracking-wide uppercase">Looking Forward</span>
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">AI & Innovation</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Passionate about the intersection of AI and Salesforce. Constantly exploring Agentforce, vibe coding, and prototype generation to bring tomorrow&apos;s capabilities to today&apos;s cloud.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex gap-4 p-6 glass-card group"
        >
          <div className="p-4 rounded-xl bg-white/5 shrink-0 group-hover:bg-brand-salesforce/20 transition-colors">
             <Cpu className="w-8 h-8 text-neutral-300 group-hover:text-brand-salesforce" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Agentforce Prototypes</h3>
            <p className="text-neutral-400 leading-relaxed">
              Building autonomous agents within Salesforce to radically improve user productivity. Testing cutting edge prompts and action frameworks.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex gap-4 p-6 glass-card group"
        >
          <div className="p-4 rounded-xl bg-white/5 shrink-0 group-hover:bg-purple-500/20 transition-colors">
             <Code2 className="w-8 h-8 text-neutral-300 group-hover:text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Vibe Coding & Next-Gen Dev</h3>
            <p className="text-neutral-400 leading-relaxed">
              Experimenting with AI-assisted development tools to accelerate delivery, exploring the latest in tech stacks and web-scale UI to bring premium consumer-level design to enterprise software.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
