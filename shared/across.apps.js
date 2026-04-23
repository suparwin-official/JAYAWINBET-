/**
 * Shared configuration & helpers
 * Used across: frontend, admin-panel, backend services
 */

const ENV = process.env.NODE_ENV || 'development';

const isProd = ENV === 'production';
const isDev = ENV === 'development';

const APP = {
  NAME: 'JAYAWINBET',
  VERSION: '1.0.0',
};

/**
 * Domain & Service URLs
 * Change only here → reflected everywhere
 */
const DOMAINS = {
  SITE: isProd ? 'https://site.com' : 'http://localhost:3000',
  ADMIN: isProd ? 'https://admin.site.com' : 'http://localhost:3001',
  API: isProd ? 'https://api.site.com' : 'http://localhost:4000',
  WS: isProd ? 'wss://ws.site.com' : 'ws://localhost:5000',
};

/**
 * API Endpoints
 */
const API_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
  },
  WALLET: {
    BALANCE: '/wallet/balance',
    DEPOSIT: '/wallet/deposit',
    WITHDRAW: '/wallet/withdraw',
  },
  GAME: {
    LIST: '/games',
    BET: '/game/bet',
    HISTORY: '/game/history',
  },
};

/**
 * JWT / Security
 */
const SECURITY = {
  TOKEN_KEY: 'jayawinbet_token',
  REFRESH_KEY: 'jayawinbet_refresh',
  TOKEN_EXPIRE_MIN: 15,
};

/**
 * Casino / Betting Constants
 */
const CASINO = {
  MIN_BET: 10,
  MAX_BET: 100000,
  CURRENCY: 'BDT',
  RTP: 0.97,
};

/**
 * Utilities
 */
const formatMoney = (amount) => {
  return Number(amount || 0).toLocaleString('en-US', {
    minimumFractionDigits: 2,
  });
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

module.exports = {
  ENV,
  isProd,
  isDev,
  APP,
  DOMAINS,
  API_ROUTES,
  SECURITY,
  CASINO,
  formatMoney,
  sleep,
};
