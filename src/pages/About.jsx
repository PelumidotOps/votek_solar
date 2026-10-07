import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Calculator, Users, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Amanda Fisher',
      role: 'Head of Operations',
      img: '/images/team-1.png',
    },
    {
      name: 'Alex Ross',
      role: 'Lead Solar Engineer',
      img: '/images/team-2.png',
    },
    {
      name: 'Mike Carson',
      role: 'Project Director',
      img: '/images/team-3.png',
    },
    {
      name: 'Erika Sallas',
      role: 'Customer Experience Lead',
      img: '/images/team-4.png',
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. HERO HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 pt-12 md:pt-16 pb-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#EAF4DE] text-[#76B521] text-xs font-bold uppercase tracking-wider">
            Who we are
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#121212] tracking-tight">
            Building a Brighter Tomorrow.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Votek, we believe clean energy should be accessible, transparent, and completely worry-free for every household and business.
          </p>
        </div>

        {/* Dual Hero Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
          <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-md h-[340px] md:h-[420px] bg-gray-100">
            <img
              src="/images/solar-field-wide.png"
              alt="Panoramic clean energy solar facility"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-md h-[340px] md:h-[420px] bg-gray-100">
            <img
              src="/images/solar-panels-roof.png"
              alt="Solar panels on rooftop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. WHAT WORKING WITH US FEELS LIKE */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 bg-[#FAFAF8] rounded-3xl my-8">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212]">
            What Working With Us Feels Like
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-[#EDEDED] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[#EAF4DE] text-[#76B521] flex items-center justify-center mb-6">
              <PhoneCall size={26} />
            </div>
            <h3 className="text-xl font-bold text-[#121212] mb-3">
              Book a call with us.
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We provide clear, practical, and affordable ecological solutions that help people reduce costs, protect the planet, and build a brighter future together.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-[#EDEDED] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[#EAF4DE] text-[#76B521] flex items-center justify-center mb-6">
              <Calculator size={26} />
            </div>
            <h3 className="text-xl font-bold text-[#121212] mb-3">
              Estimate the calculations.
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Quickly see how much you can save with solar with no hassle, zero hidden fees, and just completely transparent numbers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-[#EDEDED] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[#EAF4DE] text-[#76B521] flex items-center justify-center mb-6">
              <Users size={26} />
            </div>
            <h3 className="text-xl font-bold text-[#121212] mb-3">
              Let’s Build Together
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Shaping a brighter future, hand in hand. From planning to final grid connection, we are with you every step of the journey.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MEET OUR TEAM */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212]">
            Meet our team
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            The passionate engineers and consultants behind Votek's clean energy revolution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white border border-[#EDEDED] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-72 overflow-hidden bg-gray-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base font-bold text-[#121212]">{member.name}</h3>
                <p className="text-xs text-gray-500 mb-4">{member.role}</p>
                <div className="flex items-center justify-center gap-3 text-gray-400">
                  <span className="hover:text-[#76B521] cursor-pointer"><Facebook size={16} /></span>
                  <span className="hover:text-[#76B521] cursor-pointer"><Twitter size={16} /></span>
                  <span className="hover:text-[#76B521] cursor-pointer"><Instagram size={16} /></span>
                  <span className="hover:text-[#76B521] cursor-pointer"><Linkedin size={16} /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photos */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md h-80 bg-gray-100">
              <img
                src="/images/mission-1.png"
                alt="Solar technician engineer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md h-80 bg-gray-100">
              <img
                src="/images/mission-2.png"
                alt="Solar engineering in action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Manifesto */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-bold text-[#76B521] uppercase tracking-wider mb-2">Our Mission</div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                True success comes from proactive teamwork, dedication, and working together in a professional and ethical way that builds trust and lasting results. We believe success grows from collaboration, integrity, and dedication. By focusing on safety, quality, and careful use of resources, we deliver solutions that benefit everyone from our team to our partners and customers.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="text-xs font-bold text-[#76B521] uppercase tracking-wider mb-2">Common Vision</div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We aim to lead Votek solar transition by delivering projects on time, with precision and care. Our vision is to meet and exceed customer expectations through reliable, high-quality solar solutions that power homes, businesses, and communities sustainably.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/calculator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#76B521] hover:bg-[#68a01c] text-white rounded-full text-sm font-semibold transition-all shadow-sm"
              >
                <span>Calculate Your Savings</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
