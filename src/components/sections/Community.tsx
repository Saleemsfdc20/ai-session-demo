"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Users, BookOpen, Mic } from "lucide-react";

export function Community() {
  return (
    <Section id="community">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Giving back to the Ohana.</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Active contributor to the Salesforce ecosystem, sharing knowledge and helping the next generation of professionals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="h-full border-brand-salesforce/20 hover:border-brand-salesforce/50 transition-colors">
            <Mic className="w-8 h-8 text-brand-salesforce mb-6" />
            <h3 className="text-xl font-bold mb-3">Community Speaker</h3>
            <p className="text-neutral-400">Regularly presenting at local Salesforce Developer Groups and Dreamin&apos; events on topics like DevOps methodologies and Copado.</p>
          </Card>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Card className="h-full border-brand-salesforce/20 hover:border-brand-salesforce/50 transition-colors">
            <BookOpen className="w-8 h-8 text-brand-salesforce mb-6" />
            <h3 className="text-xl font-bold mb-3">Technical Blogger</h3>
            <p className="text-neutral-400">Authoring deep-dive technical articles on Salesforce administration, automated testing, and development best practices.</p>
          </Card>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Card className="h-full border-brand-salesforce/20 hover:border-brand-salesforce/50 transition-colors">
            <Users className="w-8 h-8 text-brand-salesforce mb-6" />
            <h3 className="text-xl font-bold mb-3">Ecosystem Helper</h3>
            <p className="text-neutral-400">Mentoring junior developers and actively answering complex architectural questions on the Salesforce Trailblazer Community.</p>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
