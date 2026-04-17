import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ValueProp } from "@/components/sections/ValueProp";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Community } from "@/components/sections/Community";
import { Innovation } from "@/components/sections/Innovation";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
      <Navigation />
      
      <Hero />
      <Services />
      <ValueProp />
      <Expertise />
      <Projects />
      <Community />
      <Innovation />
      <ContactForm />
      
      <Footer />
    </main>
  );
}
