import { Phone, Mail, Clock, MapPin, Heart, Star } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-deep-navy text-slate-400 py-16 sm:py-20 border-t border-slate-800 relative overflow-hidden">
      
      {/* Accent back-glow lights */}
      <div className="absolute bottom-0 right-[10%] w-80 h-80 rounded-full bg-primary-pink/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-8 lg:gap-12 mb-16">
          
          {/* Logo brand intro (4 columns) - Center aligned on mobile, left aligned on desktop */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <a href="#home" className="flex items-center gap-3 group justify-center lg:justify-start">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-950 p-[1px] shadow-lg shadow-black/20 transition-all duration-300">
                <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900 transition-all duration-300">
                  {/* Custom Elegant Hanger + Flowing Fabric Wave + Monogram P SVG */}
                  <svg
                    className="w-5.5 h-5.5 text-white group-hover:text-primary-pink transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Coat Hanger hook flowing from top-center */}
                    <path d="M12 6c0-1.8 1.5-2.5 2.5-1.5s-1.5 2.5-2.5 3" />
                    {/* Monogram P outer structure */}
                    <path d="M8 20V8a3 3 0 0 1 3-3h1.5a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H8" />
                    {/* Flowing silk/water wave layer flowing out from the center */}
                    <path d="M11 12c1.8 0 2.5 2 4.5 2s3-2 4.5-2" strokeWidth="1.3" className="text-primary-pink" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-lg tracking-tight text-white leading-none">
                  Pink<span className="text-primary-pink font-medium">collars</span>
                </span>
                <span className="text-[9px] font-mono tracking-[0.14em] font-extrabold text-primary-pink uppercase mt-1 leading-none">
                  Premium Fabric Care
                </span>
              </div>
            </a>
            
            {/* Left aligned paragraph under centered/left brand */}
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm text-left w-full">
              We are a modern, high-grade technology startup brand reinventing dry cleaning and laundry in Patna. Backed by organic chemicals and premium sorting protocols.
            </p>

            {/* Centered on mobile, left on desktop */}
            <div className="flex items-center justify-center lg:justify-start gap-1 w-full">
              <span className="text-xs text-slate-300 font-sans font-bold">Google Rating: </span>
              <div className="flex gap-0.5 items-center ml-1">
                <span className="text-xs font-mono font-bold text-amber-400 mr-1">4.5</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? "text-amber-500 fill-amber-500" : "text-slate-600 fill-slate-600"}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Quick links: Services (3 columns) - Left Aligned */}
          <div className="lg:col-span-3 text-left w-full text-slate-405">
            <h4 className="font-display font-semibold text-sm sm:text-base text-white tracking-wide mb-5">
              Our Services
            </h4>
            <ul className="space-y-3.5 text-xs text-left">
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Premium Wet Wash
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Express Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Steam Ironing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Fabric Conditioning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Commercial Laundry Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-pink transition-colors">
                  Residential Bundle Schemes
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links: Core Facilities (2 columns) - Left Aligned */}
          <div className="lg:col-span-2 text-left w-full">
            <h4 className="font-display font-semibold text-sm sm:text-base text-white tracking-wide mb-5">
              Why Choose Pinkcollars
            </h4>
            <ul className="space-y-3.5 text-xs text-left">
              <li className="flex items-center gap-2 justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-pink shrink-0" />
                <span>24/7 Operations</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-pink shrink-0" />
                <span>Doorstep Pickup</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-pink shrink-0" />
                <span>Fabric Sorting</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-pink shrink-0" />
                <span>Stain Spotting</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-pink shrink-0" />
                <span>Bio-detergents Only</span>
              </li>
            </ul>
          </div>

          {/* Patna coordinates (3 columns) - Left Aligned */}
          <div className="lg:col-span-3 space-y-4 text-left w-full">
            <h4 className="font-display font-semibold text-sm sm:text-base text-white tracking-wide mb-5">
              Contact Information
            </h4>
            <div className="space-y-4 text-xs text-slate-350 text-left">
              <div className="flex items-start gap-2.5 justify-start">
                <MapPin className="w-4 h-4 text-primary-pink shrink-0 mt-0.5" />
                <span>North Patel Nagar, Keshri Nagar, Patna, Bihar 800024</span>
              </div>
              <div className="flex items-center gap-2.5 justify-start">
                <Phone className="w-4 h-4 text-primary-pink shrink-0" />
                <span className="font-mono">+91 93001 19933</span>
              </div>
              <div className="flex items-center gap-2.5 justify-start">
                <Mail className="w-4 h-4 text-primary-pink shrink-0" />
                <span className="font-mono">pinkcollars@yahoo.com</span>
              </div>
              <div className="flex items-center gap-2.5 justify-start">
                <Clock className="w-4 h-4 text-primary-pink shrink-0" />
                <span>Open 24 Hours / 7 Days</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer legalities row - Centered on mobile */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <p>© {currentYear} Pinkcollars Laundry. All rights reserved across Patna, Bihar.</p>
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-sans">
            <span>Made with precision for luxury garments</span>
            <Heart className="w-3.5 h-3.5 text-primary-pink fill-primary-pink" />
            <span>in Patna.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
