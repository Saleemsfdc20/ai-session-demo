"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import Link from "next/link";
import { ArrowRight, CloudLightning } from "lucide-react";
import { openSalesforceChat } from "@/lib/utils";

export function Hero() {
  return (
    <Section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-salesforce/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white mb-8 glass"
        >
          <CloudLightning className="w-4 h-4 text-brand-salesforce" />
          <span className="text-sm font-medium">Salesforce Solutions & Copado DevOps</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          Build, Automate, and Optimize your{" "}
          <span className="text-gradient">Salesforce Future.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Premium consulting for modern enterprises. From expert Administration to Copado DevOps and complete Agentforce automation. We build scalable solutions that convert.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={openSalesforceChat}>
            Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <Link href="#services">Explore Services</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
