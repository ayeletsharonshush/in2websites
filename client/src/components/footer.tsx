export default function Footer() {
  return (
    <footer className="text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2e44, #2a5068, #1a2e44)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-1 flex flex-col sm:flex-row items-center justify-between gap-0">
        <div className="flex items-center gap-2" data-testid="img-footer-logo">
          <img src="/images/in2websites-logo.png" alt="In2Websites" className="w-full max-w-sm object-contain -my-10" style={{ mixBlendMode: 'lighten' }} />
        </div>
        <p className="text-xs text-white/80" data-testid="text-copyright">
          2020 in2websites. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
