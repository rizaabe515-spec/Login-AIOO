import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, Calendar, ChevronDown, Check } from 'lucide-react';
import { Language, Translations } from '../types';

interface LoginFormProps {
  t: Translations;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onLoginSuccess: (email: string) => void;
  onForgotPassword: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  t,
  currentLang,
  onLanguageChange,
  onLoginSuccess,
  onForgotPassword,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleQuickFill = () => {
    setEmail('admin@padelbeans.id');
    setPassword('padel2025');
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !password.trim()) {
      setErrorMessage(t.fillAllFields);
      return;
    }

    setIsLoading(true);

    // Smooth authentication transition
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(email);
    }, 1100);
  };

  return (
    <div className="relative w-full max-w-md mx-auto flex flex-col justify-between h-full text-white">
      {/* Top Bar: Date & Language Switcher */}
      <div className="flex items-center justify-end gap-3 text-xs text-sky-200/70 mb-8 sm:mb-12 font-medium">
        <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
          <Calendar size={14} className="text-sky-300" />
          <span>{t.date}</span>
        </div>

        <span className="text-sky-400/30 font-light">|</span>

        {/* Dynamic Language Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="flex items-center gap-1 text-sky-100 hover:text-white font-semibold px-2 py-1 rounded-lg hover:bg-sky-400/10 transition-colors cursor-pointer"
            aria-label="Pilih Bahasa"
          >
            <span>{currentLang}</span>
            <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangMenuOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-36 bg-[#071a38] border border-sky-400/25 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] py-1.5 z-30 animate-fade-in backdrop-blur-md">
              <button
                type="button"
                onClick={() => {
                  onLanguageChange('ID');
                  setIsLangMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                  currentLang === 'ID'
                    ? 'text-sky-300 font-bold bg-sky-500/15'
                    : 'text-sky-100 hover:bg-sky-500/10'
                }`}
              >
                <span>Bahasa Indonesia</span>
                {currentLang === 'ID' && <Check size={14} />}
              </button>
              <button
                type="button"
                onClick={() => {
                  onLanguageChange('EN');
                  setIsLangMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                  currentLang === 'EN'
                    ? 'text-sky-300 font-bold bg-sky-500/15'
                    : 'text-sky-100 hover:bg-sky-500/10'
                }`}
              >
                <span>English</span>
                {currentLang === 'EN' && <Check size={14} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Authentication Card Content */}
      <div className="w-full">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-1.5 drop-shadow-sm font-sans">
            {t.brandTitle}
          </h1>
          <p className="text-sm sm:text-base font-medium text-sky-200/90 tracking-wide mb-3">
            {t.brandSubtitle}
          </p>
          <p className="text-xs sm:text-sm text-sky-300/60 font-normal">
            {t.loginHeading}
          </p>
        </div>

        {/* Demo Quick Fill Helper */}
        <div className="mb-5 flex items-center justify-between px-3 py-2 rounded-xl bg-sky-500/10 border border-sky-400/20 text-[11px] text-sky-200/80">
          <span className="truncate mr-2 font-mono">{t.testCredentialsHint}</span>
          <button
            type="button"
            onClick={handleQuickFill}
            className="text-xs font-semibold text-sky-300 hover:text-white underline whitespace-nowrap cursor-pointer transition-colors"
          >
            Isi Cepat
          </button>
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="mb-5 p-3 rounded-xl bg-rose-500/15 border border-rose-400/30 text-xs text-rose-200 animate-shake">
            {errorMessage}
          </div>
        )}

        {/* Authentication Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email / Username Field */}
          <div>
            <label className="block text-[11px] font-semibold text-sky-200/80 tracking-wider uppercase mb-2">
              {t.emailLabel}
            </label>
            <div className="relative flex items-center group">
              <div className="absolute left-3.5 text-sky-300/50 group-focus-within:text-sky-300 transition-colors pointer-events-none">
                <Mail size={16} />
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="w-full bg-[#071a38]/90 border border-sky-400/20 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-sky-300/30 focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-400/25 transition-all duration-300 shadow-inner"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[11px] font-semibold text-sky-200/80 tracking-wider uppercase">
                {t.passwordLabel}
              </label>
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-xs text-sky-300/70 hover:text-white transition-colors cursor-pointer"
              >
                {t.forgotPassword}
              </button>
            </div>
            <div className="relative flex items-center group">
              <div className="absolute left-3.5 text-sky-300/50 group-focus-within:text-sky-300 transition-colors pointer-events-none">
                <Lock size={16} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.passwordPlaceholder}
                className="w-full bg-[#071a38]/90 border border-sky-400/20 rounded-xl pl-10 pr-11 py-3 text-sm text-white placeholder-sky-300/30 focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-400/25 transition-all duration-300 shadow-inner font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-sky-300/50 hover:text-sky-200 transition-colors cursor-pointer p-1"
                aria-label={showPassword ? 'Sembunyikan sandi' : 'Tampilkan sandi'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center pt-1">
            <label className="flex items-center gap-2.5 cursor-pointer text-xs text-sky-200/80 hover:text-white select-none transition-colors">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 rounded-md border transition-all duration-200 flex items-center justify-center ${
                    rememberMe
                      ? 'bg-sky-400 border-sky-300 text-[#05142b]'
                      : 'border-sky-400/30 bg-[#071a38]/70 hover:border-sky-400/60'
                  }`}
                >
                  {rememberMe && <Check size={11} strokeWidth={3.5} />}
                </div>
              </div>
              <span>{t.rememberMe}</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative group overflow-hidden rounded-full py-3.5 px-6 font-bold text-sm tracking-wide text-[#081f44] bg-white hover:bg-sky-50 shadow-[0_0_28px_rgba(255,255,255,0.45)] hover:shadow-[0_0_36px_rgba(255,255,255,0.65)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] disabled:opacity-75"
            >
              {/* Subtle light sweep shine */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />

              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin text-[#081f44]" />
                  <span>{t.signingIn}</span>
                </>
              ) : (
                <>
                  <span>{t.signInButton}</span>
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Subtle bottom spacing */}
      <div className="h-6" />
    </div>
  );
};
