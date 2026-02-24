import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Please fill out all required fields.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      await apiRequest("POST", "/api/contact", form);
      setSubmitted(true);
      toast({ title: "Message sent", description: "We'll get back to you soon!" });
    } catch {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 text-white" style={{ background: 'linear-gradient(135deg, #1a2e44, #2a5068, #1a2e44)' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-2xl bg-green-500/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-white" data-testid="text-success-title">Message Received!</h2>
          <p className="text-white/70 mb-6" data-testid="text-success-message">
            Thank you for reaching out. We'll review your message and get back to you within 24 hours.
          </p>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", message: "" }); }} data-testid="button-send-another">
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 text-white" style={{ background: 'linear-gradient(135deg, #1e3850, #2a5a6e, #224a5c)' }}>
      <motion.div
        className="max-w-5xl mx-auto"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-testid="text-contact-title">
            Let's Build Something Great
          </h1>
          <p className="text-white/70 max-w-lg mx-auto">
            Tell us about your project and we'll show you what's possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/70">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-white/10 border-white/15 text-white placeholder:text-white/70"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/70">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className="bg-white/10 border-white/15 text-white placeholder:text-white/70"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white/70">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="bg-white/10 border-white/15 text-white placeholder:text-white/70"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      data-testid="input-company"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/70">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project and what you'd like to achieve..."
                      className="min-h-[140px] resize-none bg-white/10 border-white/15 text-white placeholder:text-white/70"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      data-testid="input-message"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-500 text-white border-0" disabled={loading} data-testid="button-submit-contact">
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
            <div data-testid="info-email">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-md bg-teal-500/15 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-teal-400" />
                </div>
                <h3 className="font-semibold text-white">Email Us</h3>
              </div>
              <p className="text-sm text-white/70 pl-12">
                in2websites@gmail.com
              </p>
            </div>

            <div data-testid="info-location">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-md bg-teal-500/15 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <h3 className="font-semibold text-white">Location</h3>
              </div>
              <p className="text-sm text-white/70 pl-12">
                New Jersey, USA
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-sm text-white/80 leading-relaxed">
                We typically respond within 24 hours. For urgent inquiries, 
                mention "urgent" in your message and we'll prioritize your request.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
