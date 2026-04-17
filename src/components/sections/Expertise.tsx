"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";

const skills = [
  { category: "Salesforce Admin", items: ["Flow Builder", "Security Model", "Data Modeling", "Reports & Dashboards"] },
  { category: "DevOps & Copado", items: ["CI/CD Pipelines", "Branching Strategy", "Automated Testing", "Environment Management"] },
  { category: "Development", items: ["Apex", "LWC", "SOQL", "REST APIs"] },
  { category: "AI & Future tech", items: ["Agentforce", "Einstein Analytics", "Prompt Engineering", "OpenAI Integrations"] },
];

export function Expertise() {
  return (
    <Section id="expertise" className="bg-black/40">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Deep technical expertise.</h2>
          <p className="text-neutral-400 text-lg">Mastery across the complete Salesforce ecosystem. From complex backend architecture to sleek frontend components and cutting-edge DevOps automation.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="border-t border-white/10 pt-6"
          >
            <h3 className="text-xl font-bold mb-6 text-white">{skillGroup.category}</h3>
            <ul className="space-y-3">
              {skillGroup.items.map((item, itemIdx) => (
                <li key={itemIdx} className="text-neutral-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-salesforce" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
