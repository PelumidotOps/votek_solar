import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Sun, 
  Zap, 
  Calculator,
  CalendarCheck
} from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [quoteForm, setQuoteForm] = useState({ name: '', email: '', phone: '' });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const faqs = [
    {
      q: 'How much money can I really save with Votek solar?',
      a: 'The exact amount depends on your roof size, your current electricity consumption, and local sunshine hours. On average, our residential customers save between £800 and £1,400 every year, offsetting up to 70% of their utility expenses.'
    },
    {
      q: "What happens if the sun isn't shining?",
      a: 'Solar panels still generate electricity on cloudy or overcast days using diffuse daylight. Any extra power produced during peak daylight can be stored in an optional battery or fed back into the national grid for credits.'
    },
    {
      q: 'How long does installation take?',
      a: 'Most standard residential rooftop installations are completed in just 1 to 2 days with certified Votek engineers, keeping disruption to your home at an absolute minimum.'
    },
    {
      q: 'Do solar panels need a lot of maintenance?',
      a: 'Very little! Because solar panels have no moving parts, regular rain keeps them naturally clear of debris. Our 25-year manufacturer warranty and active monitoring app ensure peace of mind.'
    }
  ];

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => setQuoteSubmitted(false), 5000);
    setQuoteForm({ name: '', email: '', phone: '' });
  };

  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 pt-12 md:pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#121212] leading-[1.15] tracking-tight">
              Cut Your Energy Bills with <span className="text-[#76B521]">Clean Solar Power.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#555555] font-normal leading-relaxed">
              Discover your lifetime savings in just 60 seconds with our smart estimation tool.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/calculator"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#76B521] hover:bg-[#68a01c] text-white rounded-full font-medium text-[15px] shadow-sm hover:shadow transition-all"
              >
                <span>Get a quote</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#D9D9D9] hover:border-[#76B521] text-[#121212] hover:text-[#76B521] rounded-full font-medium text-[15px] transition-all"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[580px] rounded-3xl overflow-hidden shadow-xl bg-gray-100 aspect-[4/3]">
              <img
                src="/images/hero-installer.png"
                alt="Solar technician installing panels"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500 font-medium">Average Annual Savings</div>
                  <div className="text-xl font-bold text-[#76B521]">£1,250 / year</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#EAF4DE] flex items-center justify-center text-[#76B521]">
                  <Zap size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BACKED BY INDUSTRY STANDARDS */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-8">
        <div className="bg-[#76B521] rounded-2xl md:rounded-3xl p-8 md:p-10 text-white shadow-md">
          <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">
            Backed by industry standards and trusted installers.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-95">
            <div className="flex items-center gap-2 text-lg font-bold tracking-wider">
              <ShieldCheck size={26} />
              <span>Envision</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-bold tracking-wider">
              <Award size={26} />
              <span>Anthesis</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-bold tracking-wider">
              <CheckCircle2 size={26} />
              <span>AAPM</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-bold tracking-wider">
              <Sun size={26} />
              <span>NextEra</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-bold tracking-wider">
              <Zap size={26} />
              <span>ProSolar</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. YOUR SOLAR JOURNEY (4 STEPS) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#EAF4DE] text-[#76B521] text-sm font-semibold tracking-wide">
            Reason to choose us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#121212]">
            Your Solar Journey, Made Simple, Smart, and Sustainable
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-[#F8F9FA] border border-[#EDEDED] rounded-2xl p-6 hover:shadow-md transition-shadow relative">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#EDEDED] flex items-center justify-center text-[#76B521] font-bold text-lg mb-4 shadow-sm">
              01
            </div>
            <h3 className="font-semibold text-lg text-[#121212] mb-2">
              We check your roof & bill
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Assessment of your energy needs, orientation, and layout with zero commitment.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F8F9FA] border border-[#EDEDED] rounded-2xl p-6 hover:shadow-md transition-shadow relative">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#EDEDED] flex items-center justify-center text-[#76B521] font-bold text-lg mb-4 shadow-sm">
              02
            </div>
            <h3 className="font-semibold text-lg text-[#121212] mb-2">
              Free savings report
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Show ROI clearly with personalized estimates of monthly cost deductions.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F8F9FA] border border-[#EDEDED] rounded-2xl p-6 hover:shadow-md transition-shadow relative">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#EDEDED] flex items-center justify-center text-[#76B521] font-bold text-lg mb-4 shadow-sm">
              03
            </div>
            <h3 className="font-semibold text-lg text-[#121212] mb-2">
              We install your system
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Quick & safe installation conducted by MCS-certified solar engineers.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-[#F8F9FA] border border-[#EDEDED] rounded-2xl p-6 hover:shadow-md transition-shadow relative">
            <div className="w-12 h-12 rounded-xl bg-[#76B521] text-white flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
              04
            </div>
            <h3 className="font-semibold text-lg text-[#121212] mb-2">
              You save every month
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Watch bills go down immediately and enjoy decades of clean solar power.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HOW WE DO SOLAR DIFFERENTLY */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121212]">
            How We Do Solar Differently
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl border border-[#EDEDED] overflow-hidden bg-white hover:shadow-lg transition-all group flex flex-col">
            <div className="h-64 overflow-hidden bg-gray-100">
              <img
                src="/images/how-solar-1.png"
                alt="Installer on roof"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#121212] mb-3">
                  Simple, stress-free process
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  Our customers make informed decisions without high-pressure sales tactics. We provide upfront, transparent pricing and clear timelines from first survey to turn-on.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-[#EDEDED] overflow-hidden bg-white hover:shadow-lg transition-all group flex flex-col">
            <div className="h-64 overflow-hidden bg-gray-100">
              <img
                src="/images/how-solar-2.png"
                alt="Smiling homeowner looking at savings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#121212] mb-3">
                  Savings You Can See
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  We don't make exaggerated promises. Our proprietary algorithms evaluate your actual electricity tariff and roof irradiation to produce reliable financial projections.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-[#EDEDED] overflow-hidden bg-white hover:shadow-lg transition-all group flex flex-col">
            <div className="h-64 overflow-hidden bg-gray-100">
              <img
                src="/images/how-solar-3.png"
                alt="High efficiency solar array"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#121212] mb-3">
                  Built for Long-Term Reliability
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  Engineered with premium tier-1 mono and polycrystalline components. Backed by full 25-year performance warranties built to withstand harsh weather conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-10 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  openFaq === idx
                    ? 'border-[#76B521] bg-[#F7FAF3] shadow-sm'
                    : 'border-[#EDEDED] bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className={`text-[16px] md:text-[17px] font-semibold ${
                    openFaq === idx ? 'text-[#76B521]' : 'text-[#121212]'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    openFaq === idx ? 'bg-[#76B521] text-white' : 'bg-[#EAF4DE] text-[#76B521]'
                  }`}>
                    {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm md:text-base text-[#555555] leading-relaxed border-t border-[#76B521]/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-3">
            What Our Happy User Says
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Trusted by hundreds of homeowners across the nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Review 1 */}
          <div className="bg-[#F8F9FA] border border-[#EDEDED] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-[#76B521] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#76B521" />
                ))}
              </div>
              <p className="text-sm text-[#434242] leading-relaxed mb-6 italic">
                "Switching to Votek solar was the best decision for my home. I save money every month and can track everything through the app."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/images/avatar-1.png"
                alt="James D."
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-bold text-[#121212]">James D.</div>
                <div className="text-xs text-gray-500">Verified Homeowner</div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-[#F8F9FA] border border-[#EDEDED] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-[#76B521] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#76B521" />
                ))}
              </div>
              <p className="text-sm text-[#434242] leading-relaxed mb-6 italic">
                "From the initial roof inspection to the final meter setup, the whole process took under two weeks. Professional, polite, and honest."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/images/avatar-2.png"
                alt="Sarah Jenkins"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-bold text-[#121212]">Sarah Jenkins</div>
                <div className="text-xs text-gray-500">London, UK</div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-[#F8F9FA] border border-[#EDEDED] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-[#76B521] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#76B521" />
                ))}
              </div>
              <p className="text-sm text-[#434242] leading-relaxed mb-6 italic">
                "Our electricity bills were soaring until we installed Votek's 10-panel system. Our monthly bill dropped by 65%!"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/images/avatar-3.png"
                alt="Michael T."
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-bold text-[#121212]">Michael T.</div>
                <div className="text-xs text-gray-500">Bristol, UK</div>
              </div>
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-[#F8F9FA] border border-[#EDEDED] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-[#76B521] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#76B521" />
                ))}
              </div>
              <p className="text-sm text-[#434242] leading-relaxed mb-6 italic">
                "Clean installation, polite crew, and fantastic customer service. Highly recommend Votek to anyone considering going solar."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/images/avatar-4.png"
                alt="Emma Watson"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-bold text-[#121212]">Emma Watson</div>
                <div className="text-xs text-gray-500">Manchester, UK</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT US BANNER */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-12">
        <div className="bg-[#0C2518] rounded-3xl p-8 md:p-14 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-white/10 rounded-md text-[#76B521] text-xs font-semibold tracking-wider uppercase">
                REQUEST A QUOTE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Save More, Spend Less.<br />
                <span className="text-[#76B521]">Go Votek And Cut Your Monthly Bills For Good.</span>
              </h2>
              <p className="text-sm md:text-base text-gray-300 max-w-xl leading-relaxed">
                Lower your bills and take control of your carbon footprint with investment-free solar solutions.
              </p>

              {/* Direct Contacts */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs md:text-sm">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Phone size={18} className="text-[#76B521] shrink-0" />
                  <div>
                    <div className="text-gray-400 text-[11px]">Call us</div>
                    <div className="font-semibold">0800 123 4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Mail size={18} className="text-[#76B521] shrink-0" />
                  <div>
                    <div className="text-gray-400 text-[11px]">Email</div>
                    <div className="font-semibold">info@votek.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <MapPin size={18} className="text-[#76B521] shrink-0" />
                  <div>
                    <div className="text-gray-400 text-[11px]">Location</div>
                    <div className="font-semibold">England, UK</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Fast Form */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 md:p-8 text-[#121212] shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-[#121212]">Quick Quote Request</h3>
              {quoteSubmitted ? (
                <div className="p-6 bg-[#EAF4DE] text-[#0C2518] rounded-xl text-center space-y-2">
                  <CheckCircle2 size={36} className="text-[#76B521] mx-auto" />
                  <div className="font-bold text-lg">Thank You!</div>
                  <div className="text-sm">We've received your inquiry and our solar engineer will contact you shortly.</div>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#76B521]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#76B521]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7123 456789"
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#76B521]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#76B521] hover:bg-[#68a01c] text-white rounded-xl font-semibold text-sm transition-all shadow-md"
                  >
                    Send quote request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
