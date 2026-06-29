"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Video, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function DemoPage() {
  const today = new Date();
  
  // State for the currently displayed month in the calendar view
  const [displayDate, setDisplayDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const displayYear = displayDate.getFullYear();
  const displayMonth = displayDate.getMonth();
  
  // Calculate max date (3 months from today)
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());
  const maxMonth = maxDate.getMonth();
  const maxYear = maxDate.getFullYear();

  const handleNextMonth = () => {
    setDisplayDate(new Date(displayYear, displayMonth + 1, 1));
  };
  
  const handlePrevMonth = () => {
    setDisplayDate(new Date(displayYear, displayMonth - 1, 1));
  };
  
  const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(displayYear, displayMonth, 1).getDay();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const blanks = Array.from({ length: firstDayOfMonth }, () => null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const calendarGrid = [...blanks, ...days];

  const availableTimes = ["10:00 AM IST", "11:30 AM IST", "02:00 PM IST", "04:30 PM IST", "06:00 PM IST"];

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      setIsConfirmed(true);
    }
  };

  const isCurrentMonth = displayYear === today.getFullYear() && displayMonth === today.getMonth();
  const isMaxMonth = displayYear === maxYear && displayMonth === maxMonth;
  const todayNormalized = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden relative selection:bg-accent-primary/30 pb-24">
      {/* Liquid animated blobs for Glassmorphism background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent-primary/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-accent-success/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-[pulse_12s_ease-in-out_infinite_2s]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-border-primary/20 glass-panel z-50 flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="font-black text-2xl tracking-tighter text-text-primary flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-primary to-accent-success shadow-lg shadow-accent-primary/20"></div>
          ATOMITY
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 rounded-full bg-text-primary text-bg-primary px-5 py-2 text-sm font-semibold transition-transform hover:scale-105 active:scale-95">
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
        </div>
      </header>
      
      <section className="w-full max-w-5xl mx-auto pt-32 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Book a Demo</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See how Atomity can cut your cloud costs and automate your infrastructure. Pick a time that works for you.
          </p>
        </div>
        
        <div className="glass-card p-8 md:p-12 rounded-[var(--radius-lg)] flex flex-col md:flex-row gap-12">
          {/* Info Side */}
          <div className="flex-1 border-r border-border-primary/50 pr-8">
            <h3 className="text-xl font-bold mb-6">What to expect:</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Video className="text-accent-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Live Product Tour</h4>
                  <p className="text-sm text-text-secondary">A personalized walkthrough of the Atomity dashboard and optimization engine.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Calendar className="text-accent-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Cost Analysis</h4>
                  <p className="text-sm text-text-secondary">We'll review your current architecture and estimate your potential savings.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="text-accent-primary flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">30-Minute Session</h4>
                  <p className="text-sm text-text-secondary">Quick, actionable, and tailored strictly to your infrastructure needs.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Form / Calendar Side */}
          <div className="flex-1 flex flex-col justify-center">
            {isConfirmed ? (
              <div className="glass-panel p-8 rounded-xl text-center border-accent-success/30 flex flex-col items-center animate-fade-in-up">
                <div className="w-16 h-16 bg-accent-success/20 text-accent-success rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                <h4 className="font-bold text-2xl mb-2">Demo Confirmed!</h4>
                <p className="text-text-secondary mb-6 text-balance">
                  You are scheduled for <span className="font-bold text-text-primary">{monthNames[selectedDate?.getMonth() || 0]} {selectedDate?.getDate()}, {selectedDate?.getFullYear()}</span> at <span className="font-bold text-text-primary">{selectedTime}</span>.
                </p>
                <p className="text-sm text-text-tertiary mb-8">A calendar invitation with the Google Meet link has been sent to your email.</p>
                <Link href="/" className="w-full py-3 rounded-full bg-text-primary text-bg-primary font-bold hover:scale-[1.02] transition-transform inline-block">
                  Return to Dashboard
                </Link>
              </div>
            ) : (
              <div className="glass-panel p-6 rounded-xl border-accent-primary/20">
                 <div className="flex items-center justify-between mb-6">
                   <h4 className="font-bold">Select Date & Time</h4>
                   <div className="flex items-center gap-3">
                     <button 
                       onClick={handlePrevMonth} 
                       disabled={isCurrentMonth}
                       className={`p-1 rounded-full transition-colors ${isCurrentMonth ? 'opacity-30 cursor-not-allowed' : 'hover:bg-bg-secondary text-accent-primary'}`}
                     >
                       <ChevronLeft size={20} />
                     </button>
                     <span className="text-sm font-medium text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full min-w-[120px] text-center">
                       {monthNames[displayMonth]} {displayYear}
                     </span>
                     <button 
                       onClick={handleNextMonth} 
                       disabled={isMaxMonth}
                       className={`p-1 rounded-full transition-colors ${isMaxMonth ? 'opacity-30 cursor-not-allowed' : 'hover:bg-bg-secondary text-accent-primary'}`}
                     >
                       <ChevronRight size={20} />
                     </button>
                   </div>
                 </div>
                 
                 {/* Calendar Grid */}
                 <div className="grid grid-cols-7 gap-2 mb-6">
                   {['Su','Mo','Tu','We','Th','Fr','Sa'].map((day, i) => (
                     <div key={i} className="text-xs font-bold text-text-tertiary text-center mb-2">{day}</div>
                   ))}
                   {calendarGrid.map((day, i) => {
                     const isBlank = day === null;
                     const currentObj = !isBlank ? new Date(displayYear, displayMonth, day) : null;
                     
                     const isPast = currentObj ? currentObj < todayNormalized : false;
                     const isTooFar = currentObj ? currentObj > maxDate : false;
                     const isDisabled = isBlank || isPast || isTooFar;
                     
                     const isSelected = selectedDate && currentObj 
                       ? selectedDate.getTime() === currentObj.getTime()
                       : false;

                     return (
                       <button 
                         key={i} 
                         onClick={() => !isDisabled && currentObj ? setSelectedDate(currentObj) : null}
                         disabled={isDisabled}
                         className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all mx-auto
                           ${isBlank ? 'invisible' : ''}
                           ${!isBlank && isDisabled ? 'opacity-30 cursor-not-allowed' : ''}
                           ${!isBlank && !isDisabled && !isSelected ? 'hover:bg-bg-secondary hover:text-accent-primary cursor-pointer bg-bg-secondary/30' : ''}
                           ${isSelected ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/30 scale-110' : ''}
                         `}
                       >
                         {day}
                       </button>
                     )
                   })}
                 </div>

                 {/* Time Slots (Shows only if date is selected) */}
                 <div className={`transition-all duration-300 overflow-hidden ${selectedDate ? 'max-h-64 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
                   <h5 className="text-sm font-semibold mb-3 text-text-secondary">Available Times (IST)</h5>
                   <div className="grid grid-cols-2 gap-2">
                     {availableTimes.map((time) => (
                       <button
                         key={time}
                         onClick={() => setSelectedTime(time)}
                         className={`py-2 px-3 rounded-lg text-sm font-medium transition-all border
                           ${selectedTime === time ? 'bg-accent-primary border-accent-primary text-white shadow-md' : 'bg-transparent border-border-primary hover:border-accent-primary/50 hover:bg-accent-primary/5 text-text-primary'}
                         `}
                       >
                         {time}
                       </button>
                     ))}
                   </div>
                 </div>
                 
                 <button 
                   onClick={handleConfirm}
                   disabled={!selectedDate || !selectedTime}
                   className={`w-full py-3 rounded-full font-bold transition-all
                     ${selectedDate && selectedTime ? 'bg-text-primary text-bg-primary hover:scale-[1.02] cursor-pointer' : 'bg-bg-secondary text-text-tertiary cursor-not-allowed'}
                   `}
                 >
                   {selectedDate && selectedTime ? `Confirm ${selectedTime}` : 'Select Date & Time'}
                 </button>
              </div>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
