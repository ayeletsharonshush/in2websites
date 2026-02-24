import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowRight, ExternalLink, Mail, Phone, ChevronLeft, ChevronRight, Star } from "lucide-react";
import img1 from "@assets/IMG_6438_1771951452148.PNG";
import img2 from "@assets/IMG_6442_1771963707319.PNG";
import img3 from "@assets/IMG_6440_1771951452147.PNG";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const moreProjects = [
  {
    id: 2,
    name: "Bloom & Grow Bakery",
    category: "Food & Beverage",
    description: "Replaced a cluttered template with a warm, inviting storefront featuring online ordering and beautiful food photography.",
    tags: ["E-Commerce", "Branding", "Photography"],
  },
  {
    id: 3,
    name: "TechPulse SaaS",
    category: "Technology",
    description: "Modernized a dated SaaS landing page into a conversion-optimized, visually striking product showcase.",
    tags: ["SaaS", "Conversion", "Animation"],
  },
  {
    id: 4,
    name: "Serenity Wellness Spa",
    category: "Health & Wellness",
    description: "Created a calming, elegant website replacing the chaotic original, with integrated booking and service menus.",
    tags: ["Booking", "UX Design", "Mobile-First"],
  },
  {
    id: 5,
    name: "Urban Edge Realty",
    category: "Real Estate",
    description: "Rebuilt a generic property listing site into a premium real estate platform with advanced search and virtual tours.",
    tags: ["Real Estate", "Search", "Interactive"],
  },
  {
    id: 6,
    name: "FitForge Gym",
    category: "Fitness",
    description: "Energized a bland gym website with bold visuals, class schedules, and member portal integration.",
    tags: ["Fitness", "Portal", "Scheduling"],
  },
];

const carouselImages = [
  { src: img1, alt: "Stuhl Services - Home Page" },
  { src: img2, alt: "Stuhl Services - Expert Service Local Trust" },
  { src: img3, alt: "Stuhl Services - Entertainment Hub" },
];


function CaseStudyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = carouselImages.length;

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const sideOffset = isMobile ? 40 : 80;

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) {
      return {
        zIndex: 30,
        scale: 1,
        x: 0,
        opacity: 1,
        rotateY: 0,
      };
    } else if (diff === 1) {
      return {
        zIndex: 20,
        scale: 0.88,
        x: sideOffset,
        opacity: 0.7,
        rotateY: -8,
      };
    } else {
      return {
        zIndex: 10,
        scale: 0.88,
        x: -sideOffset,
        opacity: 0.7,
        rotateY: 8,
      };
    }
  };

  return (
    <div data-testid="card-project-featured">
      <h3 className="text-sm md:text-base font-medium text-white/80 text-center mb-3 uppercase tracking-wider">Home Remodeling Company</h3>
      <div className="relative flex items-center justify-center h-[320px] sm:h-[420px] md:h-[520px]" style={{ perspective: "1200px" }}>
        <button
          onClick={prev}
          className="absolute left-2 sm:left-0 z-40 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          data-testid="button-carousel-prev"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="relative w-full max-w-[220px] sm:max-w-xs md:max-w-sm h-[280px] sm:h-[380px] md:h-[480px]">
          {carouselImages.map((image, index) => {
            const style = getCardStyle(index);
            return (
              <motion.div
                key={index}
                className="absolute inset-0 cursor-pointer"
                animate={{
                  scale: style.scale,
                  x: style.x,
                  opacity: style.opacity,
                  rotateY: style.rotateY,
                  zIndex: style.zIndex,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => {
                  if (index !== activeIndex) {
                    setActiveIndex(index);
                  }
                }}
                style={{ transformStyle: "preserve-3d" }}
                data-testid={`carousel-card-${index}`}
              >
                {index === activeIndex ? (
                  <a href="https://stuhlservices.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                      />
                    </div>
                  </a>
                ) : (
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-top"
                      draggable={false}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="absolute right-2 sm:right-0 z-40 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          data-testid="button-carousel-next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-teal-400 w-6" : "bg-white/30"
            }`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>

      <div className="text-center mt-3">
        <a href="https://stuhlservices.com" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="rounded-full px-6 bg-white/30 border border-white/50 text-white hover:bg-white/40 uppercase text-xs tracking-wider font-medium gap-2"
            data-testid="button-visit-site"
          >
            See Reference Site
            <ExternalLink className="w-4 h-4" />
          </Button>
        </a>
      </div>

      <div className="mt-6 text-center max-w-lg mx-auto" data-testid="text-stuhl-description">
        <h3 className="text-xl font-bold text-white mb-2">Stuhl Services</h3>
        <p className="text-sm text-white/85 leading-relaxed">
          A complete website transformation — modernizing their online presence to better showcase their professional services and drive customer engagement.
        </p>
      </div>

      <div className="mt-6 max-w-lg mx-auto p-5 rounded-xl bg-white/5 border border-white/10" data-testid="card-customer-reference">
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
      </div>

      <div className="mt-8 text-center max-w-lg mx-auto p-5 rounded-xl bg-white/5 border border-white/10" data-testid="card-help-cta">
        <p className="text-sm text-white/85 leading-relaxed italic">
          Don't have a website, don't have a domain, not sure...? Contact us — we are happy to help set it all up for you!
        </p>
        <div className="mt-3">
          <Link href="/contact">
            <Button size="sm" className="bg-teal-600 hover:bg-teal-500 text-white border-0 gap-2" data-testid="button-help-contact">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MorePortfolio({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleComplete = async (code: string) => {
    setLoading(true);
    setError(false);
    try {
      const res = await apiRequest("POST", "/api/portfolio/verify", { code });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Access granted", description: "Welcome to our full portfolio." });
        onUnlock();
      } else {
        setError(true);
        setValue("");
        toast({ title: "Incorrect code", description: "Please try again.", variant: "destructive" });
      }
    } catch {
      setError(true);
      setValue("");
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div variants={fadeUp} className="mt-8">
      <Card className="bg-white/5 border-white/10 p-6 text-center" data-testid="card-see-more">
        <div className="w-12 h-12 rounded-2xl bg-teal-500/15 flex items-center justify-center mx-auto mb-4">
          <Lock className="w-6 h-6 text-teal-400" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">Want to See More?</h2>
        <p className="text-white/85 text-sm mb-5 max-w-md mx-auto">
          To see more please reach out
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
          <a href="mailto:in2websites@gmail.com" data-testid="button-email-contact">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2">
              <Mail className="w-4 h-4" />
              Email Us
            </Button>
          </a>
          <a href="tel:+15551234567" data-testid="button-phone-contact">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2">
              <Phone className="w-4 h-4" />
              Call Us
            </Button>
          </a>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-white/80 text-xs uppercase tracking-wider mb-4">Or enter your access PIN</p>
          <div className="flex justify-center mb-4">
            <InputOTP
              maxLength={4}
              value={value}
              onChange={(val) => {
                setValue(val);
                setError(false);
              }}
              onComplete={handleComplete}
              disabled={loading}
              data-testid="input-portfolio-code"
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className={`bg-white/10 border-white/20 text-white ${error ? "border-red-400" : ""}`} data-testid="input-otp-0" />
                <InputOTPSlot index={1} className={`bg-white/10 border-white/20 text-white ${error ? "border-red-400" : ""}`} data-testid="input-otp-1" />
                <InputOTPSlot index={2} className={`bg-white/10 border-white/20 text-white ${error ? "border-red-400" : ""}`} data-testid="input-otp-2" />
                <InputOTPSlot index={3} className={`bg-white/10 border-white/20 text-white ${error ? "border-red-400" : ""}`} data-testid="input-otp-3" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-400"
              data-testid="text-error-message"
            >
              Incorrect code. Please try again.
            </motion.p>
          )}

          {loading && (
            <p className="text-sm text-white/85" data-testid="text-verifying">Verifying...</p>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

function FullPortfolio() {
  return (
    <motion.div variants={fadeUp} className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">More Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {moreProjects.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <Card className="group hover-elevate h-full bg-white/5 border-white/10" data-testid={`card-project-${project.id}`}>
              <CardContent className="p-0">
                <div className="relative h-48 rounded-t-md flex items-end overflow-visible">
                  <div className="absolute inset-0 bg-teal-900/30 rounded-t-md" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent rounded-t-md" />
                  <div className="relative p-6 w-full">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div>
                        <p className="text-xs text-white/80 font-medium uppercase tracking-wider mb-1">
                          {project.category}
                        </p>
                        <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      </div>
                      <ExternalLink className="w-4 h-4 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-2">
                  <p className="text-sm text-white/85 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-white/8 text-xs font-medium text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-14 pb-12 px-6 text-white" style={{ background: 'linear-gradient(135deg, #1e3850, #2a5a6e, #224a5c)' }}>
      <motion.div
        className="max-w-5xl mx-auto"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-8">
          <p className="text-white max-w-lg mx-auto text-2xl md:text-3xl font-semibold" data-testid="text-portfolio-title">
            See how we transform websites into powerful business tools.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <CaseStudyCarousel />
        </motion.div>

        <AnimatePresence mode="wait">
          {unlocked ? (
            <motion.div
              key="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <FullPortfolio />
            </motion.div>
          ) : (
            <motion.div
              key="gate"
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <MorePortfolio onUnlock={() => setUnlocked(true)} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div variants={fadeUp} className="text-center mt-8">
          <p className="text-white/85 mb-4">
            Want your website to be our next success story?
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-500 text-white border-0" data-testid="button-portfolio-contact">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
