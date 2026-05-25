import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Send,
  HelpCircle,
  Smartphone,
  CheckCircle2
} from "lucide-react";

const WhatsAppIcon = ({ className = "w-4.5 h-4.5" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.536-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Premium Wet Wash",
    message: "",
  });

  const [isInquirySubmitted, setIsInquirySubmitted] = useState(false);

  const servicesList = [
    "Premium Wet Wash",
    "Express Dry Cleaning",
    "Steam Ironing",
    "Fabric Conditioning",
    "Commercial Laundry Contracts",
    "Residential Laundry Service",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in all the required fields.");
      return;
    }
    setIsInquirySubmitted(true);
  };

  const triggerInquiryWhatsApp = () => {
    const msg = `Hi Pinkcollars Laundry! I've sent an inquiry via your Contact Form:%0A%0A👤 *Name*: ${formData.name}%0A✉️ *Email*: ${formData.email || "N/A"}%0A📞 *Phone*: ${formData.phone}%0A🧺 *Interest*: ${formData.service}%0A📝 *Message*: ${formData.message}`;
    window.open(`https://wa.me/919300119933?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 relative overflow-hidden">
      {/* Decorative premium soft ambient glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-primary-pink/5 to-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[5%] left-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-indigo-500/5 to-primary-pink/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content with premium startup styling */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-pink/10 border border-primary-pink/15 text-primary-pink text-[10px] font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary-pink" />
            <span>Support Center</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-deep-navy tracking-tight leading-tight mb-4">
            We're Always Listening
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed leading-normal">
            Visit our state-of-the-art Patna processing studio or reach out with your questions. Our dedicated customer team is ready to assist you.
          </p>
        </div>

        {/* Balanced 2-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          
          {/* Column 1: Contact details & Map inside a beautiful flex column */}
          <div className="flex flex-col justify-between gap-8 h-full">
            
            {/* 2x2 Bento-Grid Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Visit Our Location */}
              <div className="bg-white/75 backdrop-blur-md p-5 rounded-2xl border border-slate-200/50 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 text-primary-pink flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xs text-deep-navy tracking-wider uppercase">Visit Our Location</h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    North Patel Nagar, Patna, Bihar 800024
                  </p>
                  <a
                    href="https://maps.google.com/?q=North+Patel+Nagar,+Keshri+Nagar,+Patna,+Bihar+800024"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] uppercase font-bold text-primary-pink hover:text-pink-600 transition-colors tracking-wider inline-flex items-center gap-1 mt-1"
                  >
                    View Directions
                  </a>
                </div>
              </div>

              {/* Call Or WhatsApp */}
              <div className="bg-white/75 backdrop-blur-md p-5 rounded-2xl border border-slate-200/50 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 text-indigo-500 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xs text-deep-navy tracking-wider uppercase">Call Or WhatsApp</h4>
                  <p className="font-mono text-xs text-slate-600 font-semibold tracking-tight">
                    +91 93001 19933
                  </p>
                  <p className="text-[10px] text-emerald-500 font-sans font-medium">
                    Support is online 24/7
                  </p>
                </div>
              </div>

              {/* Email Support */}
              <div className="bg-white/75 backdrop-blur-md p-5 rounded-2xl border border-slate-200/50 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 text-purple-500 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xs text-deep-navy tracking-wider uppercase">Email Support</h4>
                  <p className="font-mono text-xs text-slate-600 font-semibold tracking-tight">
                    pinkcollars@yahoo.com
                  </p>
                  <p className="text-[10px] text-slate-400 font-sans">
                    Expect reply in 3 hours
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/75 backdrop-blur-md p-5 rounded-2xl border border-slate-200/50 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 text-orange-500 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xs text-deep-navy tracking-wider uppercase">Open 24/7 Across Patna</h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    Open 24 Hours / 7 Days
                  </p>
                  <p className="text-[10px] text-primary-pink font-sans font-semibold">
                    Live Dispatch Operational
                  </p>
                </div>
              </div>

            </div>

            {/* Google map preview card with Premium overlay integration */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 h-64 sm:h-72 shadow-lg group">
              
              {/* Premium Glassmorphism Overlay */}
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md shadow-[0_8px_32px_rgba(15,23,42,0.1)] border border-white/40 px-3 py-2 rounded-xl flex items-center gap-2.5 transition-all duration-300 group-hover:shadow-[0_12px_40px_rgba(15,23,42,0.15)] group-hover:scale-[1.01]">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <MapPin className="w-3.5 h-3.5 text-primary-pink" />
                  <span className="font-display font-bold text-[10px] tracking-wider uppercase text-deep-navy">Pickup Available Across Patna</span>
                </div>
              </div>

              <iframe
                title="Pinkcollars Laundry Patna Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.55832729355!2d85.1017409!3d25.6195568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a70cc31190dd%3A0xe67efb5a87ceb9af!2sNorth+Patel+Nagar%2C+Patna%2C+Bihar+800024!5e0!3m2!1sen!2sin!4v1716613300000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] contrast-[110%] group-hover:scale-[1.03] transition-transform duration-500"
              ></iframe>
            </div>
          </div>

          {/* Column 2: Interactive Contact Inquiry Form  */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/70 shadow-[0_10px_40px_rgba(15,23,42,0.06)] relative overflow-hidden h-full flex flex-col justify-between">
              
              {/* Premium Gradient Top Border */}
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary-pink to-indigo-500" />
              
              <AnimatePresence mode="wait">
                {!isInquirySubmitted ? (
                  <motion.div
                    key="inquiry-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div className="mb-6">
                      <h3 className="font-display font-black text-xl sm:text-2xl text-deep-navy tracking-tight mb-1.5">
                        Submit An Inquiry
                      </h3>
                      <p className="font-sans text-xs text-slate-400">
                        Have specific corporate volume demands or laundry contracts? Leave us a line and we'll connect shortly.
                      </p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      
                      {/* Name fields */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-deep-navy tracking-wider uppercase block">
                          Your Name <span className="text-primary-pink">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Priyanshu Ranjan"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200/70 text-deep-navy text-xs font-semibold placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-primary-pink/5 focus:border-primary-pink focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Phone & Email (Responsive Grid) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-deep-navy tracking-wider uppercase block flex items-center gap-1">
                            <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                            Phone Number <span className="text-primary-pink">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="e.g. +91 91234 56789"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200/70 text-deep-navy text-xs font-semibold placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-primary-pink/5 focus:border-primary-pink focus:outline-none transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-deep-navy tracking-wider uppercase block">
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="e.g. user@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200/70 text-deep-navy text-xs font-semibold placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-primary-pink/5 focus:border-primary-pink focus:outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Dropdown service selector */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-deep-navy tracking-wider uppercase block">
                          Core Service of Interest
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200/70 text-deep-navy text-xs font-semibold focus:bg-white focus:ring-4 focus:ring-primary-pink/5 focus:border-primary-pink focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                          >
                            {servicesList.map((srv) => (
                              <option key={srv} value={srv}>
                                {srv}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Message body */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-deep-navy tracking-wider uppercase block">
                          Explain your inquiry <span className="text-primary-pink">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your requirements of wet wash, contracts, etc..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200/70 text-deep-navy text-xs font-semibold placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-primary-pink/5 focus:border-primary-pink focus:outline-none transition-all duration-300 resize-none"
                        />
                      </div>

                      {/* Submit form line with luxury design */}
                      <button
                        type="submit"
                        className="w-full px-6 py-3.5 rounded-xl bg-deep-navy text-white font-bold text-xs uppercase tracking-widest hover:bg-gradient-to-r hover:from-primary-pink hover:to-indigo-500 hover:shadow-lg hover:shadow-primary-pink/15 hover:scale-[1.01] active:scale-99 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer self-start"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Send Inquiry
                      </button>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="inquiry-success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-10 flex flex-col justify-center items-center h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 text-emerald-500 border border-emerald-500/10 flex items-center justify-center mb-6 shadow-inner animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-display font-black text-2xl text-deep-navy tracking-tight mb-2">
                      Inquiry Logged!
                    </h3>
                    <p className="font-sans text-xs text-slate-500 max-w-sm mx-auto mb-8">
                      Thank you for contacting us. We have cached your dispatch request, <strong className="text-deep-navy font-semibold">{formData.name}</strong>. Our team will review your message immediately.
                    </p>

                    <div className="space-y-3.5 w-full max-w-xs mx-auto">
                      <button
                        onClick={triggerInquiryWhatsApp}
                        className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.45)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4.5 h-4.5 text-white animate-pulse" />
                        Send copy via WhatsApp
                      </button>
                      <button
                        onClick={() => {
                          setIsInquirySubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            service: "Premium Wet Wash",
                            message: "",
                          });
                        }}
                        className="text-xs font-bold text-primary-pink hover:text-pink-600 tracking-wider uppercase transition-colors inline-block py-2 cursor-pointer"
                      >
                        Send another inquiry
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
