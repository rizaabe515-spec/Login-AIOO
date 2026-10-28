export type Language = 'ID' | 'EN';

export interface Translations {
  date: string;
  langLabel: string;
  slogan: string;
  brandTitle: string;
  brandSubtitle: string;
  loginHeading: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  forgotPassword: string;
  rememberMe: string;
  signInButton: string;
  signingIn: string;
  loginSuccess: string;
  testCredentialsHint: string;
  invalidCredentials: string;
  fillAllFields: string;
  
  // Forgot Password Modal
  resetModalTitle: string;
  resetModalDesc: string;
  resetEmailLabel: string;
  resetButton: string;
  cancelButton: string;
  resetLinkSent: string;

  // Dashboard preview
  dashboardBadge: string;
  dashboardGreeting: string;
  dashboardSubtitle: string;
  logoutButton: string;
  totalRevenue: string;
  courtBookings: string;
  cafeRevenue: string;
  taxStatus: string;
  taxCompliant: string;
  recentTransactions: string;
  allTransactions: string;
  viewAll: string;
  activeCourts: string;
  liveStatus: string;
}

export interface Transaction {
  id: string;
  title: string;
  category: string;
  date: string;
  amount: string;
  isCredit: boolean;
  status: 'completed' | 'processing';
}
