"use client";

import { useState } from "react";
import { Button } from "../ui/Button";

const projectTypes = ["Admin Support", "Implementation", "DevOps / Copado", "Integration", "AI / Agentforce", "Managed Services", "Other"];
const budgetRanges = ["Below 50K", "50K–1L", "1L–5L", "5L+", "Not Sure"];
const channels = ["Email", "Phone", "WhatsApp", "Google Meet"];

export function WebToLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form 
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgK00000KnrZ7" 
      method="POST" 
      onSubmit={() => setIsSubmitting(true)}
      className="relative z-10 space-y-6"
    >
      <input type="hidden" name="oid" defaultValue="00DgK00000KnrZ7" />
      <input type="hidden" name="retURL" defaultValue="https://ai-session-demo.vercel.app/thank-you" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">First Name</label>
          <input name="first_name" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600 hover:bg-white/10" placeholder="John" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Last Name *</label>
          <input required name="last_name" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600 hover:bg-white/10" placeholder="Doe" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Company</label>
          <input name="company" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600 hover:bg-white/10" placeholder="Acme Inc." />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Email Address</label>
          <input name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600 hover:bg-white/10" placeholder="john@acme.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Phone</label>
          <input name="phone" type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600 hover:bg-white/10" placeholder="+1 (555) 000-0000" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Preferred Response Channel</label>
          <select name="00NgK00003n6DzJ" defaultValue="" className="w-full border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all appearance-none bg-black/50 hover:bg-white/10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}>
            <option value="" disabled className="bg-neutral-900 text-neutral-500">Select...</option>
            {channels.map(opt => <option key={opt} value={opt} className="bg-neutral-900">{opt}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Project Type</label>
          <select name="00NgK00003n25PJ" defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all appearance-none hover:bg-white/10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}>
            <option value="" disabled className="bg-neutral-900 text-neutral-500">Select...</option>
            {projectTypes.map(opt => <option key={opt} value={opt} className="bg-neutral-900">{opt}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Budget Range</label>
          <select name="00NgK00003n2jvm" defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all appearance-none hover:bg-white/10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}>
            <option value="" disabled className="bg-neutral-900 text-neutral-500">Select...</option>
            {budgetRanges.map(opt => <option key={opt} value={opt} className="bg-neutral-900">{opt}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end relative">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Desired Go Live</label>
          <input name="00NgK00003n56U3" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600 hover:bg-white/10" placeholder="e.g. Q3 2024 or ASAP" />
        </div>
        <div className="flex items-center gap-3 h-full pt-4 md:pt-0">
          <input name="00NgK00003n48m2" value="1" type="checkbox" id="urgent" className="w-5 h-5 rounded border-white/20 bg-white/5 text-brand-salesforce focus:ring-brand-salesforce/50 accent-brand-salesforce hover:scale-105 transition-transform cursor-pointer" />
          <label htmlFor="urgent" className="text-sm font-medium text-neutral-300 cursor-pointer hover:text-white transition-colors">This is an Urgent Request</label>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-300">Requirement Details</label>
        <textarea name="00NgK00003n65or" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-salesforce/50 transition-all placeholder:text-neutral-600 resize-y hover:bg-white/10" placeholder="Briefly describe your Salesforce challenges, goals, and current setup..."></textarea>
      </div>

      <div className="pt-4 flex justify-end">
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full md:w-auto min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? "Submitting..." : "Submit Project Inquiry"}
        </Button>
      </div>
    </form>
  );
}
