import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { PadelBeansLogo } from './components/PadelBeansLogo';
import { SocialLinks } from './components/SocialLinks';
import { LoginForm } from './components/LoginForm';
import { DashboardPreview } from './components/DashboardPreview';
import { ForgotPasswordModal } from './components/ForgotPasswordModal';
import { Language } from './types';
import { translations } from './data/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ID');
  const [currentView, setCurrentView] = useState<'login' | 'dashboard'>('login');
  const [loggedInEmail, setLoggedInEmail] = useState('');
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const t = translations[currentLang];

  const handleLoginSuccess = (email: string) => {
    setLoggedInEmail(email);
    setToastMessage(t.loginSuccess);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      setCurrentView('dashboard');
    }, 900);
  };

  const handleLogout = () => {
    setCurrentView('login');
    setToastMessage('Anda telah keluar dari sesi.');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#040d1c] flex items-center justify-center p-3 sm:p-6 lg:p-10 font-sans selection:bg-sky-400 selection:text-slate-950 overflow-x-hidden">
      {/* Background Star & Glow Simulation */}
      <ParticleBackground />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-[#082046] border border-sky-400/40 text-white px-5 py-3 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-center gap-3 animate-fade-in backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <p className="text-xs sm:text-sm font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Main Luxury Container */}
      <main className="relative z-10 w-full max-w-[1240px] my-auto">
        {currentView === 'login' ? (
          /* Luxury Rounded Card (Matching screenshot) */
          <div className="relative w-full rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#0b244d] via-[#091f42] to-[#071938] border border-sky-400/20 shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_90px_rgba(14,116,144,0.18)] p-6 sm:p-8 lg:p-12 overflow-hidden backdrop-blur-md">
            
            {/* Ambient Inner Highlights */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-sky-400/5 blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-600/5 blur-[90px] pointer-events-none" />

            {/* Layout Grid: Left (Visual & Padel Beans Logo) + Right (AIOO Auth Form) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 min-h-[580px] lg:min-h-[640px] items-stretch">
              
              {/* LEFT COLUMN: Padel Beans Visual Experience */}
              <div className="lg:col-span-7 relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-sky-400/10 pb-8 lg:pb-0 lg:pr-8">
                
                {/* Top Row: Mini Racket & Bean Brand Icon */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-sky-500/15 border border-sky-400/25 flex items-center justify-center text-white shadow-sm hover:scale-105 transition-transform overflow-hidden p-1.5">
                      {/* Authentic mini icon from original asset */}
                      <img
                        src="/assets/aistudio/mini_icon.png"
                        alt="Padel Beans Icon"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain mix-blend-screen scale-110"
                      />
                    </div>
                  </div>
                </div>

                {/* Left Margin Slogan: SERVE • SIP • REPEAT */}
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 pointer-events-none select-none z-10">
                  <span
                    className="text-[10px] font-bold text-sky-200/35 tracking-[0.32em] uppercase font-mono block transform -rotate-90 origin-center whitespace-nowrap"
                    style={{ textShadow: '0 0 8px rgba(186, 230, 253, 0.15)' }}
                  >
                    {t.slogan}
                  </span>
                </div>

                {/* Central Orbit & Padel Beans Logo */}
                <div className="my-auto py-4">
                  <PadelBeansLogo />
                </div>

                {/* Bottom Row: Social Links */}
                <div className="flex items-center justify-between pt-4 z-10">
                  <SocialLinks />
                  <span className="text-[11px] text-sky-300/40 font-mono tracking-wider">
                    v2.5 • AIOO Cloud
                  </span>
                </div>
              </div>

              {/* RIGHT COLUMN: AIOO Authentication Form */}
              <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4">
                <LoginForm
                  t={t}
                  currentLang={currentLang}
                  onLanguageChange={setCurrentLang}
                  onLoginSuccess={handleLoginSuccess}
                  onForgotPassword={() => setIsForgotModalOpen(true)}
                />
              </div>

            </div>
          </div>
        ) : (
          /* Dashboard Preview Card (Smooth view transition) */
          <div className="relative w-full rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#091f42] via-[#071938] to-[#040f22] border border-sky-400/20 shadow-[0_25px_80px_rgba(0,0,0,0.85)] p-4 sm:p-8 overflow-hidden backdrop-blur-md">
            <DashboardPreview
              t={t}
              userEmail={loggedInEmail}
              onLogout={handleLogout}
            />
          </div>
        )}
      </main>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
        t={t}
        initialEmail={loggedInEmail}
      />
    </div>
  );
}
