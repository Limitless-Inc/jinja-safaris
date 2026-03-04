export const formatCurrency = (amount: number, currency: 'USD' | 'UGX' = 'USD') => {
  if (currency === 'UGX') {
    return `UGX ${(amount * 3700).toLocaleString()}`;
  }
  return `$${amount.toLocaleString()}`;
};

export const calculateDeposit = (total: number) => {
  return total * 0.3;
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhone = (phone: string) => {
  return /^[\d\s\-\+\(\)]+$/.test(phone);
};
