"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { CheckCircle2 } from "lucide-react";

const valueProps = [
  "Boutique level attention with enterprise-grade delivery.",
  "100% focused on maximizing your Salesforce ROI.",
  "Streamlined communication, no middle-management bloat.",
  "Agile execution with transparent project tracking.",
  "Future-proof architecture tailored to your unique business logic."
];

export function ValueProp() {
  return (
    <Section id="why-me">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Why partner with a <span className="text-gradient">Boutique Consultant?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 mb-8"
          >
            Skip the massive agency overhead and slow turnaround times. You get direct access to a seasoned Salesforce architect who treats your business logic like their own.
          </motion.p>
          
          <ul className="space-y-4">
            {valueProps.map((prop, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-salesforce shrink-0" />
                <span className="text-neutral-200">{prop}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="lg:w-1/2 w-full relative">
          <div className="absolute inset-0 bg-brand-salesforce/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="aspect-square rounded-3xl bg-gradient-to-tr from-white/5 to-white/10 border border-white/20 p-2 relative z-10 glass shadow-2xl">
            <div className="w-full h-full rounded-2xl bg-black/50 overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-salesforce/20 to-transparent opacity-50" />
              {/* Optional: Add a stylized graphic, chart, or code snippet visual here */}
              <div className="text-center p-8">
                <div className="text-6xl font-black text-white mb-4">100%</div>
                <div className="text-xl text-brand-salesforce font-medium">Project Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
