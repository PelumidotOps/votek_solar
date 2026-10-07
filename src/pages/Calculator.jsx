import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Home, Building, CheckCircle2 } from 'lucide-react';

export default function Calculator() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    homeType: 'Detached',
    homeOwner: 'Yes',
    postcode: 'SW1A 1AA',
    address: '10 Downing St, Westminster, London',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const homeTypes = [
    'Detached',
    'Semi-detached',
    'Mid terrace',
    'End terrace',
    'Flat',
    'Bungalow',
  ];

  // Dynamic calculations based on chosen property
  const getCalculations = () => {
    switch (formData.homeType) {
      case 'Detached':
        return { size: '350 Kw', panels: '14', offset: '15%', bill: '$42', annualSavings: '£1,420' };
      case 'Semi-detached':
        return { size: '250 Kw', panels: '10', offset: '12%', bill: '$53', annualSavings: '£1,150' };
      case 'Bungalow':
        return { size: '300 Kw', panels: '12', offset: '14%', bill: '$48', annualSavings: '£1,280' };
      case 'Mid terrace':
      case 'End terrace':
        return { size: '200 Kw', panels: '8', offset: '10%', bill: '$58', annualSavings: '£950' };
      case 'Flat':
        return { size: '150 Kw', panels: '6', offset: '8%', bill: '$64', annualSavings: '£720' };
      default:
        return { size: '250 Kw', panels: '10', offset: '12%', bill: '$53', annualSavings: '£1,150' };
    }
  };

  const results = getCalculations();

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setStep(5);
  };

  return (
    <div className="w-full bg-white min-h-[calc(100vh-80px)] flex flex-col justify-between">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-12 md:py-16 w-full">
        {/* Step Indicator */}
        <div className="max-w-xl mx-auto mb-8 flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              onClick={() => s <= step && setStep(s)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                s === step
                  ? 'w-10 bg-[#76B521]'
                  : s < step
                  ? 'w-6 bg-[#D5E8BA]'
                  : 'w-6 bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Global Page Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#121212]">
            Let’s calculate your potential savings
          </h1>
        </div>

        {/* ============================================================ */}
        {/* STEP 1: WHAT KIND OF HOME DO YOU LIVE IN? */}
        {/* ============================================================ */}
        {step === 1 && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-[#EDEDED] shadow-sm">
            <h2 className="text-2xl font-semibold text-center text-[#121212] mb-8">
              What kind of home do you live in?
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {homeTypes.map((type) => {
                const isSelected = formData.homeType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, homeType: type })}
                    className={`py-4 px-3 rounded-full text-sm font-medium transition-all text-center border ${
                      isSelected
                        ? 'bg-[#EAF4DE] border-[#76B521] text-[#76B521] font-semibold shadow-sm'
                        : 'bg-white border-[#EDEDED] text-[#434242] hover:border-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 rounded-full bg-[#76B521] hover:bg-[#68a01c] text-white font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* STEP 2: DO YOU OWN YOUR HOME? */}
        {/* ============================================================ */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-[#EDEDED] shadow-sm">
            <h2 className="text-2xl font-semibold text-center text-[#121212] mb-8">
              Do you own your home?
            </h2>

            <div className="flex justify-center gap-6 mb-10">
              {['Yes', 'No'].map((choice) => {
                const isSelected = formData.homeOwner === choice;
                return (
                  <button
                    key={choice}
                    type="button"
                    onClick={() => setFormData({ ...formData, homeOwner: choice })}
                    className={`w-36 py-4 rounded-full text-base font-medium transition-all text-center border ${
                      isSelected
                        ? 'bg-[#EAF4DE] border-[#76B521] text-[#76B521] font-semibold shadow-sm'
                        : 'bg-white border-[#EDEDED] text-[#434242] hover:border-gray-300'
                    }`}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium text-sm transition-all"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 rounded-full bg-[#76B521] hover:bg-[#68a01c] text-white font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* STEP 3: WHERE WOULD YOU LIKE SOLAR PANELS TO GO? */}
        {/* ============================================================ */}
        {step === 3 && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-[#EDEDED] shadow-sm">
            <h2 className="text-2xl font-semibold text-center text-[#121212] mb-3">
              Tell us where you'd like the solar panels to go
            </h2>
            <p className="text-sm text-gray-500 text-center mb-8 max-w-md mx-auto">
              Enter your postcode and select your address from the dropdown below (please note: you may need to scroll down to find your address).
            </p>

            <div className="space-y-4 mb-10 max-w-md mx-auto">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Postcode</label>
                <input
                  type="text"
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  placeholder="e.g. SW1A 1AA"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#76B521]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Address</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#76B521]"
                  />
                  <button
                    type="button"
                    className="px-4 py-3 rounded-xl bg-[#121212] text-white text-xs font-semibold hover:bg-black shrink-0"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium text-sm transition-all"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 rounded-full bg-[#76B521] hover:bg-[#68a01c] text-white font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* STEP 4: TELL US ABOUT YOURSELF */}
        {/* ============================================================ */}
        {step === 4 && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-[#EDEDED] shadow-sm">
            <h2 className="text-2xl font-semibold text-center text-[#121212] mb-3">
              Tell us about yourself
            </h2>
            <p className="text-sm text-gray-500 text-center mb-8 max-w-md mx-auto">
              Almost there! Just fill in your details below and we'll let you know how much you could save.
            </p>

            <form onSubmit={handleCalculate} className="space-y-4 max-w-md mx-auto mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">First name</label>
                  <input
                    type="text"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#76B521]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Last name</label>
                  <input
                    type="text"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#76B521]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email address</label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#76B521]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone number</label>
                <input
                  type="tel"
                  required
                  placeholder="+44 7123 456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#76B521]"
                />
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium text-sm transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#121212] hover:bg-black text-white font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Calculate savings</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ============================================================ */}
        {/* STEP 5: RESULTS SCREEN */}
        {/* ============================================================ */}
        {step === 5 && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-[#EDEDED] shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#121212] mb-2">Results</h2>
              <p className="text-sm text-gray-500">
                Don't worry, you can change your mind later.
              </p>
            </div>

            {/* Figma Result Card */}
            <div className="rounded-2xl border border-[#EDEDED] overflow-hidden mb-8 shadow-sm">
              <div className="bg-[#D5E8BA] px-6 py-4 text-center font-bold text-[#121212] text-lg border-b border-[#c2d7a5]">
                Votek Plus
              </div>
              <div className="divide-y divide-[#EDEDED] text-sm">
                <div className="flex justify-between px-6 py-3.5 bg-white">
                  <span className="text-gray-600">Property Type:</span>
                  <span className="font-semibold text-gray-900">{formData.homeType}</span>
                </div>
                <div className="flex justify-between px-6 py-3.5 bg-gray-50/50">
                  <span className="text-gray-600">System Size</span>
                  <span className="font-semibold text-gray-900">{results.size}</span>
                </div>
                <div className="flex justify-between px-6 py-3.5 bg-white">
                  <span className="text-gray-600">Solar Panels Number</span>
                  <span className="font-semibold text-gray-900">{results.panels}</span>
                </div>
                <div className="flex justify-between px-6 py-3.5 bg-gray-50/50">
                  <span className="text-gray-600">Monthly Savings (Bill Offset)</span>
                  <span className="font-semibold text-[#76B521]">{results.offset}</span>
                </div>
                <div className="flex justify-between px-6 py-3.5 bg-white">
                  <span className="text-gray-600">Monthly Bill After Solar</span>
                  <span className="font-semibold text-gray-900">{results.bill}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium text-sm transition-all"
              >
                Recalculate
              </button>
              <Link
                to="/schedule"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#121212] hover:bg-black text-white font-medium text-sm transition-all text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Schedule a meeting</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
