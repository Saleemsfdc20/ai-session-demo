"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ThankYouContent() {
  return (
    <main className="flex-grow flex items-center justify-center flex-col relative px-4 py-20 min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl text-center z-10"
      >
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-salesforce/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="w-20 h-20 mx-auto bg-brand-salesforce/20 rounded-full flex items-center justify-center mb-8 border border-brand-salesforce/30 shadow-[0_0_30px_rgba(3,45,96,0.3)]"
        >
          <svg
            className="w-10 h-10 text-brand-salesforce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          🚀 Thank You!
        </h1>
        <p className="text-neutral-300 text-lg mb-3">
          Your request has been submitted successfully. I’ll get back to you shortly.
        </p>
        <p className="text-neutral-500 text-sm mb-10">
          You can explore my projects while I review your request.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild variant="glass" size="lg" className="w-full sm:w-auto min-w-[160px]">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="primary" size="lg" className="w-full sm:w-auto min-w-[160px]">
            <Link href="/#projects">View Projects</Link>
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
