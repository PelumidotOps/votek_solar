import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full max-w-[1168px] mx-auto px-4 sm:px-6 my-10 md:my-12">
      <div className="bg-[#76B521] text-white rounded-2xl md:rounded-[20px] p-6 md:p-8 shadow-md relative overflow-hidden">
        {/* Top Row: Newsletter Subscription */}
        <div className="flex flex-col sm:flex-row items-center justify-end mb-8">
          <form
            onSubmit={handleSubscribe}
            className="w-full sm:w-auto flex items-center bg-white/20 backdrop-blur-sm rounded-full p-1 border border-white/30 max-w-sm"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your E-mail"
              required
              className="bg-transparent text-white placeholder-white/80 px-3.5 py-1.5 outline-none w-full text-xs md:text-sm font-medium"
            />
            <button
              type="submit"
              className="bg-[#121212] hover:bg-black text-white text-xs font-medium px-4 py-2 rounded-full transition-all shrink-0 flex items-center gap-1"
            >
              {subscribed ? (
                <>
                  <Check size={12} className="text-[#76B521]" /> Subscribed!
                </>
              ) : (
                'subcribe now!'
              )}
            </button>
          </form>
        </div>

        {/* Middle Grid: Artwork & Compact Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-white/20 pb-8">
          {/* Left Visual Artwork */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="w-[180px] h-[120px] md:w-[220px] md:h-[140px] overflow-hidden rounded-xl shadow-md bg-white/10 relative">
              <img
                src="/images/footer-ribbon.png"
                alt="Votek clean energy ribbon artwork"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-3 gap-4 text-xs md:text-sm font-medium text-white/95">
            {/* Column 1 */}
            <div className="space-y-2.5">
              <div>
                <a href="#partnership" className="hover:text-black transition-colors">partnership</a>
              </div>
              <div>
                <a href="#website" className="hover:text-black transition-colors">website</a>
              </div>
              <div>
                <a href="#social" className="hover:text-black transition-colors">Social media</a>
              </div>
              <div>
                <Link to="/calculator" className="hover:text-black transition-colors font-semibold">
                  Energy calculator
                </Link>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-2.5">
              <div>
                <Link to="/about" className="hover:text-black transition-colors">About</Link>
              </div>
              <div>
                <Link to="/product" className="hover:text-black transition-colors">Our project</Link>
              </div>
              <div>
                <a href="#careers" className="hover:text-black transition-colors">Carrers</a>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-2.5">
              <div>
                <a href="#support" className="hover:text-black transition-colors">Support</a>
              </div>
              <div>
                <a href="#request" className="hover:text-black transition-colors">Support request</a>
              </div>
              <div>
                <Link to="/schedule" className="hover:text-black transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/90">
          <div>
            All Rights Reserved 2025
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Twitter size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
