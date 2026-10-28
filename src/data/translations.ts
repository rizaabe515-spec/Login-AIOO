import { Language, Translations, Transaction } from '../types';

export const translations: Record<Language, Translations> = {
  ID: {
    date: 'Senin, 24 Februari 2025',
    langLabel: 'ID',
    slogan: 'SERVE • SIP • REPEAT',
    brandTitle: 'AIOO',
    brandSubtitle: 'Finance. Accounting. Tax',
    loginHeading: 'Masuk ke akun Anda.',
    emailLabel: 'EMAIL ATAU NAMA PENGGUNA',
    emailPlaceholder: 'nama@email.com',
    passwordLabel: 'KATA SANDI',
    passwordPlaceholder: '••••••••••••',
    forgotPassword: 'Lupa Kata Sandi?',
    rememberMe: 'Ingat saya di perangkat ini',
    signInButton: 'MASUK SEKARANG',
    signingIn: 'MEMVERIFIKASI...',
    loginSuccess: 'Autentikasi berhasil! Mengalihkan ke dashboard...',
    testCredentialsHint: 'Kredensial Demo: admin@padelbeans.id / padel2025',
    invalidCredentials: 'Email atau kata sandi tidak sesuai.',
    fillAllFields: 'Harap isi email dan kata sandi Anda.',

    resetModalTitle: 'Atur Ulang Kata Sandi',
    resetModalDesc: 'Masukkan alamat email Anda yang terdaftar. Kami akan mengirimkan tautan verifikasi pemulihan sandi.',
    resetEmailLabel: 'ALAMAT EMAIL RESMI',
    resetButton: 'Kirim Tautan Pemulihan',
    cancelButton: 'Batal',
    resetLinkSent: 'Tautan pemulihan telah dikirim ke email Anda!',

    dashboardBadge: 'PORTAL KEUANGAN AIOO',
    dashboardGreeting: 'Selamat Datang, Finance Manager Padel Beans',
    dashboardSubtitle: 'Ringkasan Laporan Finansial, Pembukuan & Kepatuhan Pajak (AIOO Cloud)',
    logoutButton: 'Keluar / Kembali',
    totalRevenue: 'Total Pendapatan (Bulan Ini)',
    courtBookings: 'Reservasi Lapangan Padel',
    cafeRevenue: 'Beans Specialty Coffee Bar',
    taxStatus: 'Kepatuhan Pajak (PPN 11%)',
    taxCompliant: 'Lapor SPT Tepat Waktu • Terverifikasi',
    recentTransactions: 'Catatan Transaksi & Pembukuan Terkini',
    allTransactions: 'Semua Transaksi',
    viewAll: 'Lihat Semua Laporan',
    activeCourts: '4 Lapangan Aktif',
    liveStatus: 'Sistem Tersinkronisasi'
  },
  EN: {
    date: 'Monday, 24 February 2025',
    langLabel: 'EN',
    slogan: 'SERVE • SIP • REPEAT',
    brandTitle: 'AIOO',
    brandSubtitle: 'Finance. Accounting. Tax',
    loginHeading: 'Sign in to your account.',
    emailLabel: 'EMAIL OR USERNAME',
    emailPlaceholder: 'name@email.com',
    passwordLabel: 'PASSWORD',
    passwordPlaceholder: '••••••••••••',
    forgotPassword: 'Forgot Password?',
    rememberMe: 'Remember me on this device',
    signInButton: 'SIGN IN NOW',
    signingIn: 'AUTHENTICATING...',
    loginSuccess: 'Authentication successful! Redirecting to dashboard...',
    testCredentialsHint: 'Demo credentials: admin@padelbeans.id / padel2025',
    invalidCredentials: 'Invalid email or password combination.',
    fillAllFields: 'Please fill in both email and password fields.',

    resetModalTitle: 'Reset Your Password',
    resetModalDesc: 'Enter your registered work email. We will send a secure recovery link to reset your account password.',
    resetEmailLabel: 'REGISTERED WORK EMAIL',
    resetButton: 'Send Recovery Link',
    cancelButton: 'Cancel',
    resetLinkSent: 'Password recovery instructions have been dispatched!',

    dashboardBadge: 'AIOO FINANCIAL PORTAL',
    dashboardGreeting: 'Welcome back, Padel Beans Finance Manager',
    dashboardSubtitle: 'Financial Ledgers, Accounting Reports & Tax Compliance (AIOO Cloud)',
    logoutButton: 'Log Out / Back',
    totalRevenue: 'Total Revenue (This Month)',
    courtBookings: 'Padel Court Bookings',
    cafeRevenue: 'Beans Specialty Coffee Bar',
    taxStatus: 'Tax Compliance (VAT 11%)',
    taxCompliant: 'On-time Filing • Verified by Tax Auth',
    recentTransactions: 'Recent Transactions & Ledger Activity',
    allTransactions: 'All Activity',
    viewAll: 'View Full Reports',
    activeCourts: '4 Courts Active',
    liveStatus: 'System Synchronized'
  }
};

export const sampleTransactions: Transaction[] = [
  {
    id: 'TXN-9021',
    title: 'Court #1 & #2 Night Session Booking',
    category: 'Court Reservation',
    date: '24 Feb 2025, 19:30',
    amount: '+Rp 1.450.000',
    isCredit: true,
    status: 'completed'
  },
  {
    id: 'TXN-9020',
    title: 'Arabica Specialty Beans & Oat Milk Supply',
    category: 'F&B Inventory',
    date: '24 Feb 2025, 15:10',
    amount: '-Rp 3.820.000',
    isCredit: false,
    status: 'completed'
  },
  {
    id: 'TXN-9019',
    title: 'Pro Bullpadel Racket Rentals (Weekend)',
    category: 'Pro Shop & Rental',
    date: '24 Feb 2025, 11:45',
    amount: '+Rp 780.000',
    isCredit: true,
    status: 'completed'
  },
  {
    id: 'TXN-9018',
    title: 'PPN 11% Tax Pre-settlement AIOO e-Faktur',
    category: 'Tax Remittance',
    date: '23 Feb 2025, 16:00',
    amount: '-Rp 4.150.000',
    isCredit: false,
    status: 'processing'
  }
];
