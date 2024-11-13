// Simple in-memory auth storage
let isAuthenticated = false;
const validCredentials = {
  email: "test@bulltechgroup.co.za",
  password: "tPA%G%5FZap^V&p$"
};

export const authenticate = (email: string, password: string) => {
  if (email === validCredentials.email && password === validCredentials.password) {
    isAuthenticated = true;
    return true;
  }
  return false;
};

export const logout = () => {
  isAuthenticated = false;
};

export const checkAuth = () => isAuthenticated;