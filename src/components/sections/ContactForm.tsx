"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { AgentChat } from "./AgentChat";

export function ContactForm() {
  return (
    <Section id="contact" className="bg-black/50 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start your project.</h2>
          <p className="text-neutral-400 text-lg">Leave your details below and our team will respond rapidly to discuss your Salesforce requirements.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <AgentChat />
        </motion.div>
      </div>
    </Section>
  );
}
