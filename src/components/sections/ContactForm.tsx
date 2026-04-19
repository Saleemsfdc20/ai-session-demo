"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { WebToLeadForm } from "./WebToLeadForm";

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
          className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-salesforce/5 rounded-full blur-[100px] pointer-events-none" />

          <WebToLeadForm />
        </motion.div>
      </div>
    </Section>
  );
}
