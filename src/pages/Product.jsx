import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, Shield, Sun } from 'lucide-react';

export default function Product() {
  const products = [
    {
      name: 'Polycrystalline',
      kwp: '350.43',
      unit: 'KWP SYSTEM',
      img: '/images/product-polycrystalline.png',
      desc: 'Proven blue silicon wafer technology delivering cost-effective solar generation for larger residential rooftops.',
      efficiency: '17 - 19%',
      warranty: '25 Years'
    },
    {
      name: 'Monocrystalline',
      kwp: '400.53',
      unit: 'KWP SYSTEM',
      img: '/images/product-monocrystalline.png',
      desc: 'Premium single-crystal black wafers delivering industry-leading energy density and high output in low-light conditions.',
      efficiency: '21 - 23%',
      warranty: '25 Years'
    },
    {
      name: 'Thin-film',
      kwp: '250.10',
      unit: 'KWP SYSTEM',
      img: '/images/product-thinfilm.png',
      desc: 'Ultra-lightweight flexible photovoltaic layers ideal for structures with strict weight load limitations.',
      efficiency: '14 - 16%',
      warranty: '20 Years'
    },
    {
      name: 'Transparent',
      kwp: '600.53',
      unit: 'KWP SYSTEM',
      img: '/images/product-transparent.png',
      desc: 'Architectural building-integrated photovoltaics (BIPV) providing daylight penetration alongside clean electricity.',
      efficiency: '15 - 18%',
      warranty: '25 Years'
    },
    {
      name: 'Solar Tiles',
      kwp: '700.33',
      unit: 'KWP SYSTEM',
      img: '/images/product-solartiles.png',
      desc: 'Seamless solar roof slates designed to blend invisibly into traditional roof architecture with robust durability.',
      efficiency: '19 - 21%',
      warranty: '30 Years'
    },
    {
      name: 'Perovskite',
      kwp: '790.49',
      unit: 'KWP SYSTEM',
      img: '/images/product-perovskite.png',
      desc: 'Next-generation tandem solar cells engineered for maximum solar spectrum harvesting and peak power output.',
      efficiency: '24 - 28%',
      warranty: '25 Years'
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. HERO HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 pt-12 md:pt-16 pb-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#EAF4DE] text-[#76B521] text-xs font-bold uppercase tracking-wider">
            Our product.
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#121212] tracking-tight leading-tight">
            Smart solar solutions designed to cut costs clean energy to your home or business.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            High performance solar modules engineered to convert maximum sunlight into clean, actionable savings.
          </p>
        </div>

        {/* Gallery Preview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
          <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-md h-[320px] md:h-[400px] bg-gray-100">
            <img
              src="/images/solar-field-wide.png"
              alt="High capacity solar panels in sun"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-md h-[320px] md:h-[400px] bg-gray-100">
            <img
              src="/images/solar-panels-roof.png"
              alt="Residential rooftop solar installation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. CATALOG: ENERGY MADE SIMPLE */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212]">
              Energy Made Simple
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Select the system tier that best suits your roof layout and household energy demand.
            </p>
          </div>
          <Link
            to="/calculator"
            className="inline-flex items-center gap-2 text-[#76B521] font-semibold text-sm hover:underline"
          >
            Calculate matching system size <ArrowRight size={16} />
          </Link>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#EDEDED] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              {/* Product Photo */}
              <div className="h-64 overflow-hidden bg-gray-100 relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#121212] shadow-sm">
                  {item.warranty}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-[#121212] mb-2">{item.name}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-[#76B521]">{item.kwp}</span>
                    <span className="text-xs font-semibold text-gray-500">{item.unit}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 flex justify-between">
                    <span>Module Efficiency:</span>
                    <span className="font-semibold text-gray-800">{item.efficiency}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/schedule"
                  className="w-full py-3 px-4 rounded-xl border border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-white font-medium text-sm text-center transition-all inline-block mt-4"
                >
                  Book a call
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GUARANTEE STRIP */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-12">
        <div className="bg-[#EAF4DE] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#0C2518]">Not sure which panel is right for your roof?</h3>
            <p className="text-sm text-gray-700">Our clean energy advisors will inspect your aerial roof data and generate a 100% free customized report.</p>
          </div>
          <Link
            to="/schedule"
            className="shrink-0 px-8 py-3.5 bg-[#76B521] hover:bg-[#68a01c] text-white rounded-full font-semibold text-sm shadow-md transition-all"
          >
            Speak with an advisor
          </Link>
        </div>
      </section>
    </div>
  );
}
