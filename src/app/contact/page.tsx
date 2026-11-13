import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | TextTools Support & Feedback",
  description: "Get in touch with the TextTools team for support, bug reports, feature requests, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(240,248,255,1)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(20,20,25,1)_0%,rgba(10,10,15,1)_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-[100%] bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-pink-500/10 blur-[120px] -z-10 opacity-80" />

        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Get in <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Have a question, feature request, or found a bug? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Reach Out Directly</h2>
                <p className="text-muted-foreground mb-6">
                  We are always looking for ways to improve TextTools. If you have an idea for a new tool that would make your life easier, drop us a line!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email Us</h3>
                    <p className="text-muted-foreground">gohilkrishna612@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />

          </div>
        </div>
      </section>
    </div>
  );
}
