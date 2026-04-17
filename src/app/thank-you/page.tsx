"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ThankYou() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background relative overflow-hidden p-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-salesforce/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card max-w-lg w-full p-8 md:p-12 text-center relative z-10"
      >
        <div className="mx-auto w-20 h-20 bg-brand-salesforce/20 rounded-full flex items-center justify-center mb-8">
          <CheckCircle className="w-10 h-10 text-brand-salesforce" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Request Received.</h1>
        <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
          Thank you for reaching out. We have successfully received your project inquiry and our team will review the details. We'll be in touch shortly via your preferred channel.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return Home
            </Link>
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
