"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

const projectTypes = ["Admin Support", "Implementation", "DevOps / Copado", "Integration", "AI / Agentforce", "Managed Services", "Other"];
const budgetRanges = ["Below 50K", "50K–1L", "1L–5L", "5L+", "Not Sure"];
const channels = ["Email", "Phone", "WhatsApp", "Google Meet"];

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // In the future this will be the action endpoint for Salesforce Web-to-Lead
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for now before redirecting to the thank you page
    setTimeout(() => {
      router.push("/thank-you");
    }, 1000);
  };

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

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">First Name *</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Last Name *</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600" placeholder="Doe" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Company *</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600" placeholder="Acme Inc." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Email Address *</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600" placeholder="john@acme.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Phone</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Preferred Response Channel</label>
                <select className="w-full bg-[#0m0b14] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all appearance-none bg-black/50" style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}>
                  {channels.map(opt => <option key={opt} value={opt} className="bg-neutral-900">{opt}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Project Type *</label>
                <select required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all appearance-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}>
                  <option value="" disabled selected className="bg-neutral-900 text-neutral-500">Select...</option>
                  {projectTypes.map(opt => <option key={opt} value={opt} className="bg-neutral-900">{opt}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Budget Range</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all appearance-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}>
                  <option value="" disabled selected className="bg-neutral-900 text-neutral-500">Select...</option>
                  {budgetRanges.map(opt => <option key={opt} value={opt} className="bg-neutral-900">{opt}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end relative">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Desired Go Live</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600" placeholder="e.g. Q3 2024 or ASAP" />
              </div>
              <div className="flex items-center gap-3 h-full pt-4 md:pt-0">
                <input type="checkbox" id="urgent" className="w-5 h-5 rounded border-white/20 bg-white/5 text-brand-salesforce focus:ring-brand-salesforce/50 accent-brand-salesforce" />
                <label htmlFor="urgent" className="text-sm font-medium text-neutral-300 cursor-pointer">This is an Urgent Request</label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300">Requirement Details *</label>
              <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600 resize-y" placeholder="Briefly describe your Salesforce challenges, goals, and current setup..."></textarea>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full md:w-auto min-w-[200px]">
                {isSubmitting ? "Sending Request..." : "Submit Project Inquiry"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
