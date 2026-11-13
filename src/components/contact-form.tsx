"use client";

import { useState } from "react";
import { MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (emailStr: string) => {
    return /\S+@\S+\.\S+/.test(emailStr);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      // NOTE: Replace these with your actual EmailJS credentials
      await emailjs.send(
        "service_cfjui5l",
        "template_ea62yxb",
        {
          name: name,
          email: email,
          message: message,
        },
        "HvpiHgUVxq6-DHpvL"
      );

      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-3xl p-8 shadow-xl shadow-blue-500/5 text-center space-y-4">
        <div className="mx-auto w-12 h-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">Message Sent!</h3>
        <p className="text-muted-foreground text-sm">
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          className="mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-3xl p-8 shadow-xl shadow-blue-500/5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-blue-500/50 outline-none transition-all ${errors.name ? "border-red-500 focus:ring-red-500/50" : "border-border"
              }`}
            placeholder="Jane Doe"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-blue-500/50 outline-none transition-all ${errors.email ? "border-red-500 focus:ring-red-500/50" : "border-border"
              }`}
            placeholder="jane@example.com"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-blue-500/50 outline-none transition-all resize-y ${errors.message ? "border-red-500 focus:ring-red-500/50" : "border-border"
              }`}
            placeholder="How can we help you?"
          />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer rounded-xl py-6 text-base font-medium shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white border-0"
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Send Message
        </Button>
      </form>
    </div>
  );
}
