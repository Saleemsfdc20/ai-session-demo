"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Cloud, GitMerge, Bot, Shield, Workflow, Server } from "lucide-react";

const services = [
  {
    title: "Salesforce Admin",
    description: "Expert configuration, user management, and platform optimization to keep your org running flawlessly.",
    icon: Cloud,
    tags: ["Configuration", "Security", "Data Management"],
  },
  {
    title: "Copado & DevOps",
    description: "End-to-end release management and CI/CD pipelines. Eliminate deployment bottlenecks with zero downtime.",
    icon: GitMerge,
    tags: ["CI/CD", "Release Management", "Version Control"],
  },
  {
    title: "Agentforce & AI",
    description: "Implement cutting-edge AI workflows, Einstein insights, and predictive models into your business process.",
    icon: Bot,
    tags: ["Einstein", "Prompts", "Agentforce"],
  },
  {
    title: "Integration Solutions",
    description: "Seamlessly connect Salesforce with your external ERPs, marketing tools, and custom applications.",
    icon: Server,
    tags: ["APIs", "MuleSoft", "Webhooks"],
  },
  {
    title: "Salesforce Automation",
    description: "Complex Flow-building, Approval Processes, and custom logic to automate away repetitive tasks.",
    icon: Workflow,
    tags: ["Flows", "Process Builder", "Optimization"],
  },
  {
    title: "Managed Support",
    description: "Dedicated scalable support for bug fixes, feature enhancements, and overall org health management.",
    icon: Shield,
    tags: ["Support", "Enhancement", "Health Check"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <Section id="services" className="bg-black/20">
      <div className="text-center md:text-left mb-16 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise built for scale.</h2>
        <p className="text-neutral-400 text-lg">Delivering end-to-end solutions that transform Salesforce from a simple CRM into a revenue-driving powerhouse.</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <Card className="h-full flex flex-col group">
              <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-brand-salesforce/20 group-hover:scale-110 transition-all">
                <service.icon className="w-6 h-6 text-brand-salesforce" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-400 mb-6 flex-grow">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, tagIdx) => (
                  <Badge key={tagIdx} variant="outline" className="border-white/10">{tag}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
