"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Global Enterprise Org Merge",
    role: "Lead Architect",
    outcome: "Successfully consolidated 3 legacy Salesforce instances into a single, unified Lightning experience for 2,000+ users. Reduced tech debt by 40%.",
    tech: ["Data Migration", "Lightning Transition", "Apex"],
  },
  {
    title: "Automated Release Pipeline",
    role: "DevOps Engineer",
    outcome: "Implemented Copado for a financial services client, reducing deployment errors by 90% and cutting release cycles from weeks to hours.",
    tech: ["Copado", "Salesforce DX", "CI/CD"],
  },
  {
    title: "Agentforce Customer Service",
    role: "AI Consultant",
    outcome: "Deployed Agentforce and Einstein Bots for a retail brand, automating 35% of tier-1 support queries within the first month of go-live.",
    tech: ["Agentforce", "Einstein Bots", "Service Cloud"],
  }
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Proven impact.</h2>
          <p className="text-neutral-400 text-lg">Real-world case studies demonstrating how structured architecture and automation lead to measurable business growth.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full flex flex-col group relative overflow-hidden p-0 border-white/10 hover:border-brand-salesforce/50">
              <div className="h-48 bg-gradient-to-br from-neutral-900 to-black relative">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-salesforce to-transparent"></div>
                 {/* Placeholder for project mockups/images */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 font-bold text-2xl uppercase tracking-widest">{project.role}</span>
                 </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-salesforce transition-colors">{project.title}</h3>
                <p className="text-neutral-400 mb-6 flex-grow">{project.outcome}</p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-neutral-500">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 rounded-md bg-white/5">{tech}</span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
