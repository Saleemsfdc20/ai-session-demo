import Link from "next/link";
import { Cloud, Mail } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black/60 border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group w-fit mb-4">
              <div className="bg-brand-salesforce/20 p-2 rounded-lg">
                <Cloud className="w-5 h-5 text-brand-salesforce" />
              </div>
              <span className="text-xl font-bold tracking-tight">Saleem<span className="text-brand-salesforce">.Cloud</span></span>
            </Link>
            <p className="text-neutral-400 max-w-sm mb-6">
              Premium Salesforce consulting, DevOps architecture, and AI-driven workflow solutions for modern enterprises.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-brand-salesforce transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-brand-salesforce transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-brand-salesforce transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-neutral-400 hover:text-white transition-colors">Salesforce Admin</Link></li>
              <li><Link href="#services" className="text-neutral-400 hover:text-white transition-colors">Copado DevOps</Link></li>
              <li><Link href="#services" className="text-neutral-400 hover:text-white transition-colors">Agentforce & AI</Link></li>
              <li><Link href="#services" className="text-neutral-400 hover:text-white transition-colors">Managed Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#expertise" className="text-neutral-400 hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="#projects" className="text-neutral-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="mailto:hello@saleem.cloud" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"><Mail className="w-4 h-4"/> Email Me</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Saleem Cloud Consulting. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
