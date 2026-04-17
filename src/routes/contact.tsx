import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tarkshy Acoustic" },
      { name: "description", content: "Get in touch with our acoustic engineers for consultation, quotes and bulk orders." },
      { property: "og:title", content: "Contact Tarkshy Acoustic" },
      { property: "og:description", content: "Discuss your acoustic project with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Thanks — we'll be in touch within one business day.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container-page py-14 md:py-20">
      <div className="max-w-2xl">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-2 text-3xl font-bold text-ink md:text-5xl">Let's design your space.</h1>
        <p className="mt-3 text-ink-soft">
          Tell us about your project and an acoustic specialist will respond within one business day.
        </p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_360px]">
        <form onSubmit={submit} className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">Name</label>
            <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">Email</label>
            <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">Message</label>
            <Textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your room, goals, and budget…" />
          </div>
          <Button type="submit" size="lg" className="w-full md:w-auto">Send Message</Button>
        </form>

        <aside className="space-y-5">
          {[
            { icon: Phone, label: "Phone", value: "+91 98765 43210" },
            { icon: Mail, label: "Email", value: "contact@tarkshyacoustic.com" },
            { icon: MapPin, label: "Office", value: "GIFT City, Gandhinagar" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 rounded-xl border border-border bg-surface p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <c.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{c.label}</p>
                <p className="mt-1 text-sm font-medium text-ink">{c.value}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
