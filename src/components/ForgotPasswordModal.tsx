import React, { useState } from 'react';
import { X, Mail, CheckCircle2 } from 'lucide-react';
import { Translations } from '../types';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
  initialEmail?: string;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onClose,
  t,
  initialEmail = '',
}) => {
  const [email, setEmail] = useState(initialEmail);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-[#091e3e] border border-sky-400/25 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-white">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-sky-200/50 hover:text-white transition-colors p-1 rounded-lg hover:bg-sky-500/10"
          aria-label="Tutup modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-5 text-sky-300">
              <Mail size={22} />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {t.resetModalTitle}
            </h3>
            <p className="text-sm text-sky-200/70 mb-6 leading-relaxed">
              {t.resetModalDesc}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-sky-200/80 tracking-wider uppercase mb-2">
                  {t.resetEmailLabel}
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3.5 text-sky-300/40 pointer-events-none">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full bg-[#051329]/90 border border-sky-400/25 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-sky-300/30 focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl text-xs font-medium text-sky-200/70 hover:text-white hover:bg-sky-500/10 transition-colors"
                >
                  {t.cancelButton}
                </button>
                <button
                  type="submit"
                  disabled={isSending}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#05142b] bg-white hover:bg-sky-50 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSending ? 'Mengirim...' : t.resetButton}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Email Terkirim
            </h3>
            <p className="text-sm text-sky-200/80 mb-6 leading-relaxed">
              {t.resetLinkSent}
            </p>
            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl text-xs font-bold text-[#05142b] bg-white hover:bg-sky-50 shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all"
            >
              Kembali ke Halaman Masuk
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
