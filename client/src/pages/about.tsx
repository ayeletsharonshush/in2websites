import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Palette, TrendingUp, Heart, Users, Award, Clock, Star, Search, Wrench, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};


const stats = [
  { icon: Clock, value: "1 Week", label: "Avg. Turnaround" },
  { icon: Users, value: "150+", label: "Clients Served" },
  { icon: Heart, value: "+50%", label: "Calls/Emails From Site" },
  { icon: Award, value: "100%", label: "Satisfaction Rate" },
];

function NeonText({ children, className = "" }: { children: string; className?: string }) {
  const baseClass = `absolute inset-0 text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black leading-none tracking-tight select-none ${className}`;
  return (
    <div className="relative inline-block">
      <span
        className={baseClass}
        style={{
          WebkitTextStroke: "8px rgba(45,212,191,0.15)",
          color: "transparent",
          filter: "blur(15px)",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className={baseClass}
        style={{
          WebkitTextStroke: "6px rgba(45,212,191,0.3)",
          color: "transparent",
          filter: "blur(8px)",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className={baseClass}
        style={{
          WebkitTextStroke: "4px rgba(45,212,191,0.5)",
          color: "transparent",
          filter: "blur(3px)",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className={baseClass}
        style={{
          WebkitTextStroke: "3px rgba(45,212,191,0.8)",
          color: "transparent",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className={baseClass}
        style={{
          WebkitTextStroke: "1.5px rgba(200,245,240,0.95)",
          color: "transparent",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className={`text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black leading-none tracking-tight select-none invisible ${className}`}
      >
        {children}
      </span>
    </div>
  );
}

function PriceShowcase() {
  const [phase, setPhase] = useState<"off" | "flickering" | "on">("off");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("flickering"), 400);
    const t2 = setTimeout(() => setPhase("on"), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const pinkFull = "0 0 5px rgba(236,72,153,0.4), 0 0 15px rgba(236,72,153,0.25), 0 0 30px rgba(236,72,153,0.15)";
  const pinkBright = "0 0 8px rgba(236,72,153,0.5), 0 0 20px rgba(236,72,153,0.35), 0 0 40px rgba(236,72,153,0.2)";

  return (
    <div
      className="relative py-16 sm:py-20 flex flex-col items-center justify-center overflow-hidden"
      data-testid="section-price-showcase"
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #1a2e44 0%, #245060 50%, #1a2e44 100%)' }} />

      <div className="relative z-10 w-full flex flex-col items-center mb-6">
        <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.4em] uppercase text-teal-400" style={{ fontFamily: "'Space Grotesk', sans-serif", textShadow: '0 0 10px rgba(45,212,191,0.3)' }}>website remodeling</span>
      </div>

      <div className="relative z-10 flex flex-col items-start">
        <span
          className="text-white/70 text-lg sm:text-xl md:text-2xl font-light italic mb-1"
        >
          starting:
        </span>

        <motion.div
          className="relative"
          initial={{ opacity: 0.2 }}
          animate={
            phase === "off"
              ? { opacity: 0.2 }
              : phase === "flickering"
              ? { opacity: [0.2, 0.9, 0.1, 1, 0.1, 0.7, 0.05, 1, 0.2, 1] }
              : { opacity: [1, 0.85, 1] }
          }
          transition={
            phase === "flickering"
              ? { duration: 1.8, ease: "linear", times: [0, 0.1, 0.15, 0.25, 0.35, 0.5, 0.6, 0.75, 0.85, 1] }
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <NeonText>$399</NeonText>

          <motion.div
            className="absolute inset-0 -z-10"
            animate={
              phase === "on"
                ? { opacity: [0.3, 0.5, 0.3] }
                : { opacity: 0 }
            }
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "radial-gradient(ellipse at center, rgba(45,212,191,0.2) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        <motion.span
          className="text-3xl sm:text-4xl md:text-5xl -mt-2 sm:-mt-3 self-end mr-2 sm:mr-4 select-none"
          initial={{ opacity: 0 }}
          animate={
            phase === "on"
              ? { opacity: 1, textShadow: [pinkFull, pinkBright, pinkFull] }
              : { opacity: 0 }
          }
          transition={
            phase === "on"
              ? { opacity: { duration: 0.6 }, textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } }
              : { duration: 0.3 }
          }
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: "rgba(236,72,153,0.85)",
            WebkitTextStroke: "0.5px rgba(236,72,153,0.7)",
            textShadow: pinkFull,
          }}
        >
          paid once
        </motion.span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen">
      <PriceShowcase />

      <section className="relative pt-10 pb-12 px-6 overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #1a2e44, #2a5068, #1e3850)' }}>
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[250px] bg-teal-400/6 rounded-full blur-[80px]" />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-5"
            data-testid="text-hero-title"
          >
            We turn standard sites into a{" "}
            <span className="text-teal-400 font-extrabold">premium digital showcase</span>{" "}
            of your business.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed"
            data-testid="text-hero-description"
          >
            Your craftsmanship is high-caliber; your business deserves a digital presence to match. We turn "just okay" sites into lead-generating, premium assets that do your work justice, ensuring that when a client visits, they're impressed enough to call you immediately.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-lg px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white border-0 text-sm font-semibold gap-2" data-testid="button-lets-talk">
                Get a Quote
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" className="rounded-lg px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white border-0 text-sm font-semibold gap-2" data-testid="button-view-work">
                Our Work
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-10 px-6 text-white" style={{ background: 'linear-gradient(135deg, #1e3850, #2a5a6e, #224a5c)' }}>
        <motion.div
          className="max-w-5xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4" data-testid="text-services-title">
              The Transformation
            </h2>
            <p className="text-white/70 max-w-lg mx-auto">
              We treat your website like a high-stakes renovation, taking the "bones" you already have and giving them a premium, lead-generating finish.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-2xl mx-auto mb-12 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-sm" data-testid="table-before-after">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/50 font-medium">The "Before" (Standard)</th>
                  <th className="text-left p-4 text-teal-400 font-medium">The "After" (Premium)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-white/60">Slow-loading, cluttered pages.</td>
                  <td className="p-4 text-white/90">Lightning-fast, high-performance design.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-white/60">Buried project photos.</td>
                  <td className="p-4 text-white/90">High-definition galleries that sell your craft.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-white/60">Hard to find the "Call" button.</td>
                  <td className="p-4 text-white/90">One-tap calling and instant lead forms.</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Looks "just okay" on a phone.</td>
                  <td className="p-4 text-white/90">Perfectly mobile-responsive for clients on the go.</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4" data-testid="text-process-title">
              Rapid Refresh Process
            </h2>
            <p className="text-white/70 max-w-lg mx-auto">
              We know you're busy, our process is designed to be low-friction and high-speed:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: "The Digital Walkthrough",
                desc: "We review your current site and identify exactly what needs a \"high-end finish.\"",
              },
              {
                icon: Wrench,
                title: "The Premium Build",
                desc: "We overhaul your layout, optimize your photos, and install lead-generation tools.",
              },
              {
                icon: Rocket,
                title: "The Final Reveal",
                desc: "Your site goes live in days, not weeks ready to impress every client who visits.",
              },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="h-full hover-elevate group bg-white/5 border-white/10" data-testid={`step-${i}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-teal-500/15 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                        <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-10 text-center max-w-lg mx-auto p-5 rounded-xl bg-white/5 border border-white/10" data-testid="card-help-cta-home">
            <p className="text-sm text-white/85 leading-relaxed italic">
              No website? No domain? No worries. We specialize in total setups for new businesses. Contact us today and we'll get your digital presence built right the first time.
            </p>
            <div className="mt-3">
              <Link href="/contact">
                <Button size="sm" className="bg-teal-600 hover:bg-teal-500 text-white border-0 gap-2" data-testid="button-help-contact-home">
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-14 px-6 text-white" style={{ background: 'linear-gradient(135deg, #1a2e44, #2a5068, #1a2e44)' }}>
        <motion.div
          className="max-w-5xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="text-center"
                data-testid={`stat-${i}`}
              >
                <div className="w-10 h-10 rounded-md bg-teal-500/15 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-teal-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1 text-white">{stat.value}</div>
                <div className="text-sm text-white/85">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto text-center mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight mb-4" data-testid="text-cta-title">
            Ready to transform your website?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 mb-8 max-w-lg mx-auto">
            Let's discuss how we can take your online presence from forgettable to unforgettable.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/contact">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-500 text-white border-0" data-testid="button-cta-contact">
                Start Your Transformation
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 max-w-lg mx-auto p-5 rounded-xl bg-white/5 border border-white/10" data-testid="card-customer-reference-home">
            <div className="flex items-center gap-1 justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-white/85 leading-relaxed italic text-center mb-3">
              "Letting In2Websites remodel our website was an easy decision. In less then a week, our boring old website turned into slick and professional representation of the services we provides. New customers always comment on how great the website looks saying it was one of the main reasons they reached out."
            </p>
            <p className="text-xs text-white/70 text-center font-medium">
              — Sharon Stuhl, Owner, Stuhl Services LLC
            </p>
            <a href="https://www.stuhlservices.com" target="_blank" rel="noopener noreferrer" className="block text-center mt-3 text-xs text-teal-400 hover:text-teal-300 transition-colors" data-testid="link-stuhl-reference">
              www.stuhlservices.com
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
