import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-slate-200/20 relative" style={{ background: 'linear-gradient(135deg, rgba(26,46,68,0.95), rgba(42,80,104,0.95), rgba(26,46,68,0.95))' }}>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center cursor-pointer">
            <img src="/images/in2websites-logo.png" alt="In2Websites" className="h-32 object-contain" style={{ mixBlendMode: 'lighten' }} data-testid="img-logo" />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                className={cn(
                  "relative px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors",
                  location === item.path
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
                {location === item.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-white/10 rounded-md -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button size="sm" className="bg-teal-600 hover:bg-teal-500 text-white border-0" data-testid="button-get-started">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-1">
          {location !== "/" && (
            <Link href="/">
              <button
                className="w-8 h-8 rounded-full bg-transparent hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                data-testid="button-home-icon"
              >
                <Home className="w-4 h-4" />
              </button>
            </Link>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200/10 backdrop-blur-xl" style={{ background: 'linear-gradient(135deg, rgba(26,46,68,0.97), rgba(42,80,104,0.97))' }}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div
                    onClick={() => setMobileOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                    className={cn(
                      "px-4 py-3 rounded-md text-sm font-medium cursor-pointer transition-colors",
                      location === item.path
                        ? "bg-white/10 text-white"
                        : "text-white/80"
                    )}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              <Link href="/contact">
                <Button className="w-full mt-2 bg-teal-600 text-white border-0" onClick={() => setMobileOpen(false)} data-testid="button-mobile-get-started">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
