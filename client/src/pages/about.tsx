import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Palette, TrendingUp, Heart, Users, Award, Clock, Star } from "lucide-react";
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

const services = [
  {
    icon: Palette,
    title: "Visual Redesign",
    description: "We transform outdated layouts into modern, eye-catching designs that showcase your products and services.",
  },
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Un-proffesional and slow sites turn customers away. We optimize everything for lightning-fast load times and smooth interactions.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Focus",
    description: "Beautiful is not enough. Every element is strategically placed to drive your customers to contact you.",
  },
];

const stats = [
  { icon: Clock, value: "1 Week", label: "Avg. Turnaround" },
  { icon: Users, value: "150+", label: "Clients Served" },
  { icon: Heart, value: "50%", label: "Calls/Emails From Site" },
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
            <span className="bg-gradient-to-r from-red-600 via-pink-500 to-cyan-400 bg-clip-text text-transparent">premium digital showcase</span>{" "}
            of your business.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed"
            data-testid="text-hero-description"
          >
            Your website is your first impression. We specialize in taking outdated, 
            uninspiring websites and transforming them into engaging, modern experiences 
            that your visitors will love.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-6 bg-transparent border border-white/20 text-white hover:bg-white/10 uppercase text-xs tracking-wider font-medium" data-testid="button-lets-talk">
                Get a Quote
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" className="rounded-full px-6 bg-transparent border border-white/20 text-white hover:bg-white/10 uppercase text-xs tracking-wider font-medium" data-testid="button-view-work">
                Our Work
                <ArrowUpRight className="w-4 h-4 ml-2" />
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
              What We Do
            </h2>
            <p className="text-white/70 max-w-lg mx-auto">
              A complete website transformation, from visual design to performance optimization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Card className="h-full hover-elevate group bg-white/5 border-white/10" data-testid={`card-service-${i}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-teal-500/15 flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Our Process
            </h2>
            <p className="text-white/70 max-w-lg mx-auto">
              Simple, transparent, and effective. Here's how we bring your website back to life.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Discover",
                desc: "We analyze your current site, understand your brand, goals, and audience.",
              },
              {
                step: "02",
                title: "Design & Build",
                desc: "Our team crafts a stunning new design and builds it with modern technology for speed and reliability.",
              },
              {
                step: "03",
                title: "Hosting & Domain",
                desc: "We focus on efficiency so reducing your hosting and domain costs is what we do best.",
              },
              {
                step: "04",
                title: "Launch & Grow",
                desc: "We deploy your new site and provide ongoing support to ensure it continues to perform beautifully.",
              },
            ].map((item, i) => (
              <motion.div key={item.step} variants={fadeUp} className="flex items-start gap-4" data-testid={`step-${i}`}>
                <span className="text-4xl font-bold bg-gradient-to-b from-teal-400 to-teal-400/20 bg-clip-text text-transparent select-none shrink-0 w-12">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-10 text-center max-w-lg mx-auto p-5 rounded-xl bg-white/5 border border-white/10" data-testid="card-help-cta-home">
            <p className="text-sm text-white/85 leading-relaxed italic">
              Don't have a website, don't have a domain, not sure...? Contact us — we are happy to help set it all up for you!
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
