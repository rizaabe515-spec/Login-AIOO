import React from 'react';
import { ArrowLeft, TrendingUp, DollarSign, CalendarCheck, FileCheck2, Coffee, ShieldCheck, Activity } from 'lucide-react';
import { Translations, Transaction } from '../types';
import { sampleTransactions } from '../data/translations';

interface DashboardPreviewProps {
  t: Translations;
  onLogout: () => void;
  userEmail: string;
}

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  t,
  onLogout,
  userEmail,
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in text-white">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sky-400/15">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-sky-400 bg-sky-950/60 border border-sky-400/30 px-2.5 py-0.5 rounded-md">
              {t.dashboardBadge}
            </span>
            <span className="text-xs text-sky-200/50 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.liveStatus}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {t.dashboardGreeting}
          </h1>
          <p className="text-xs sm:text-sm text-sky-200/70 mt-0.5">
            {t.dashboardSubtitle} • <span className="text-sky-300 font-mono">{userEmail || 'admin@padelbeans.id'}</span>
          </p>
        </div>

        <button
          onClick={onLogout}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-sky-950/80 border border-sky-400/30 hover:bg-sky-900/60 transition-all duration-200 hover:scale-[1.02] shadow-sm self-start sm:self-auto"
        >
          <ArrowLeft size={14} />
          {t.logoutButton}
        </button>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {/* Total Revenue */}
        <div className="bg-[#0b244d]/70 border border-sky-400/20 rounded-2xl p-5 backdrop-blur-md relative overflow-hidden group hover:border-sky-400/40 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-sky-200/70">{t.totalRevenue}</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <TrendingUp size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold text-white tracking-tight font-mono tabular-nums">
            Rp 148.520.000
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-[11px] text-emerald-400 font-medium">
            <span>+18.4%</span>
            <span className="text-sky-200/50 font-normal">vs bulan lalu</span>
          </div>
        </div>

        {/* Court Bookings */}
        <div className="bg-[#0b244d]/70 border border-sky-400/20 rounded-2xl p-5 backdrop-blur-md relative overflow-hidden group hover:border-sky-400/40 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-sky-200/70">{t.courtBookings}</span>
            <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-300">
              <CalendarCheck size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold text-white tracking-tight font-mono tabular-nums">
            Rp 92.400.000
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-[11px] text-sky-300 font-medium">
            <span>{t.activeCourts}</span>
            <span className="text-sky-200/50 font-normal">• 94% okupansi</span>
          </div>
        </div>

        {/* Beans Coffee Bar */}
        <div className="bg-[#0b244d]/70 border border-sky-400/20 rounded-2xl p-5 backdrop-blur-md relative overflow-hidden group hover:border-sky-400/40 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-sky-200/70">{t.cafeRevenue}</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
              <Coffee size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold text-white tracking-tight font-mono tabular-nums">
            Rp 56.120.000
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-[11px] text-amber-300 font-medium">
            <span>1.840 cups</span>
            <span className="text-sky-200/50 font-normal">• Specialty Roast</span>
          </div>
        </div>

        {/* Tax & PPN */}
        <div className="bg-[#0b244d]/70 border border-sky-400/20 rounded-2xl p-5 backdrop-blur-md relative overflow-hidden group hover:border-sky-400/40 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-sky-200/70">{t.taxStatus}</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
              <ShieldCheck size={16} />
            </div>
          </div>
          <div className="text-base font-bold text-emerald-400 tracking-tight flex items-center gap-1">
            <FileCheck2 size={18} />
            <span>Terlapor & Sah</span>
          </div>
          <div className="mt-2 text-[11px] text-sky-200/70">
            {t.taxCompliant}
          </div>
        </div>
      </div>

      {/* Recent Ledger Activity Table */}
      <div className="bg-[#0b244d]/60 border border-sky-400/20 rounded-2xl p-5 sm:p-6 backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity size={18} className="text-sky-400" />
            <h2 className="text-sm sm:text-base font-bold text-white">
              {t.recentTransactions}
            </h2>
          </div>
          <span className="text-xs text-sky-300/70 font-medium cursor-pointer hover:text-white transition-colors">
            {t.viewAll} →
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-sky-400/15 text-sky-200/50 uppercase tracking-wider text-[10px]">
                <th className="py-3 px-3 font-medium">Ref ID</th>
                <th className="py-3 px-3 font-medium">Keterangan</th>
                <th className="py-3 px-3 font-medium">Kategori</th>
                <th className="py-3 px-3 font-medium">Waktu Transaksi</th>
                <th className="py-3 px-3 font-medium text-right">Nominal</th>
                <th className="py-3 px-3 font-medium text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sky-400/10">
              {sampleTransactions.map((tx: Transaction) => (
                <tr
                  key={tx.id}
                  className="hover:bg-sky-500/5 transition-colors font-medium text-sky-100"
                >
                  <td className="py-3.5 px-3 font-mono text-sky-300/80">
                    {tx.id}
                  </td>
                  <td className="py-3.5 px-3 text-white font-semibold">
                    {tx.title}
                  </td>
                  <td className="py-3.5 px-3 text-sky-200/70">
                    {tx.category}
                  </td>
                  <td className="py-3.5 px-3 text-sky-200/60 font-mono">
                    {tx.date}
                  </td>
                  <td
                    className={`py-3.5 px-3 text-right font-mono font-bold tabular-nums ${
                      tx.isCredit ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {tx.amount}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        tx.status === 'completed'
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/30'
                          : 'bg-amber-500/15 text-amber-300 border border-amber-400/30'
                      }`}
                    >
                      {tx.status === 'completed' ? 'Selesai' : 'Diproses'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
