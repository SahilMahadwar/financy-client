import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '../config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  // useEffect(() => checkUserLoggedIn(), []);

  // Register User
  const register = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    console.log(data);

    if (res.ok) {
      setUser(data.user);
      router.push('/home');
    } else {
      setError(data.message);
      setError(null);
    }
  };

  //Login
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    console.log(data);

    if (res.ok) {
      setUser(data.user);
      router.push('/home');
    } else {
      setError(data.message);
      setError(null);
    }
  };

  // logoout
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/auth/logout`, {
      method: 'POST',
    });

    if (res.ok) {
      setUser(null);
      router.push('/auth/login');
    }
  };

  // check if logged in
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/auth/user`);

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      router.push('/auth/login');
      setError(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, register, login, logout, checkUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
