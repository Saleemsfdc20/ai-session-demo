import type { Metadata } from "next";
import { ThankYouContent } from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | Saleem Shaikh",
  description: "Your request has been submitted successfully. I'll get back to you shortly.",
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
