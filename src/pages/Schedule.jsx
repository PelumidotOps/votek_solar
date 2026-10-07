import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle2, ChevronLeft, ChevronRight, Globe, ArrowRight } from 'lucide-react';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(18);
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [bookingForm, setBookingForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    notes: '',
  });
  const [booked, setBooked] = useState(false);

  const times = [
    '09:00 AM',
    '10:30 AM',
    '11:45 AM',
    '01:30 PM',
    '02:45 PM',
    '04:15 PM',
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. HEADER SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 pt-12 md:pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#EAF4DE] text-[#76B521] text-xs font-bold uppercase tracking-wider">
              Online Booking
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#121212] tracking-tight">
              Schedule meeting at your own time.
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              Choose a date and time that fits your calendar. One of our senior solar consultants will review your roof and present a tailored feasibility plan.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md h-64 md:h-72 bg-gray-100">
            <img
              src="/images/schedule-hero.png"
              alt="Clean energy solar farm"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. CALENDAR & CONTACT FORM SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Calendar Widget Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EDEDED] p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#EAF4DE] text-[#76B521] flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#121212]">30 Minute Meeting</h3>
                <div className="text-xs text-gray-500 flex items-center gap-1.5">
                  <Globe size={12} /> Europe / London Time (GMT)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
              {/* Date Picker */}
              <div className="md:col-span-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-sm text-[#121212]">October 2026</span>
                  <div className="flex gap-1 text-gray-500">
                    <button type="button" className="p-1 hover:text-black rounded hover:bg-gray-100"><ChevronLeft size={18} /></button>
                    <button type="button" className="p-1 hover:text-black rounded hover:bg-gray-100"><ChevronRight size={18} /></button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-400 mb-2">
                  <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {[...Array(31)].map((_, i) => {
                    const day = i + 1;
                    const isSelected = selectedDay === day;
                    const isPast = day < 6;
                    return (
                      <button
                        key={day}
                        type="button"
                        disabled={isPast}
                        onClick={() => setSelectedDay(day)}
                        className={`h-9 w-9 rounded-full mx-auto flex items-center justify-center font-medium transition-all ${
                          isSelected
                            ? 'bg-[#76B521] text-white font-bold shadow-sm'
                            : isPast
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-[#EAF4DE] hover:text-[#76B521]'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="md:col-span-5 md:border-l md:border-gray-100 md:pl-6">
                <div className="font-bold text-xs text-gray-600 uppercase tracking-wider mb-3">
                  Available Slots: Day {selectedDay}
                </div>
                <div className="space-y-2">
                  {times.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border text-center ${
                          isSelected
                            ? 'bg-[#121212] text-white border-[#121212] shadow-sm'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-[#76B521]'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Intake Form */}
          <div className="lg:col-span-5 bg-[#FAFAF8] rounded-3xl border border-[#EDEDED] p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#121212] mb-1">Get in touch</h3>
            <p className="text-xs text-gray-500 mb-6">
              Selected: <span className="font-semibold text-[#76B521]">Oct {selectedDay}, 2026 at {selectedTime}</span>
            </p>

            {booked ? (
              <div className="bg-[#EAF4DE] border border-[#D5E8BA] p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 size={44} className="text-[#76B521] mx-auto" />
                <h4 className="text-lg font-bold text-[#0C2518]">Meeting Confirmed!</h4>
                <p className="text-xs text-gray-600">
                  A calendar invite and Zoom link has been sent to your email. We look forward to speaking with you!
                </p>
                <button
                  type="button"
                  onClick={() => setBooked(false)}
                  className="mt-4 px-6 py-2 bg-[#76B521] text-white rounded-full text-xs font-semibold"
                >
                  Book another slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">First name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      value={bookingForm.firstName}
                      onChange={(e) => setBookingForm({ ...bookingForm, firstName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#76B521] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Last name</label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={bookingForm.lastName}
                      onChange={(e) => setBookingForm({ ...bookingForm, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#76B521] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#76B521] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Describe your needs</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your property, approximate monthly bill, or any specific questions..."
                    value={bookingForm.notes}
                    onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#76B521] bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#121212] hover:bg-black text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Confirm meeting</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
