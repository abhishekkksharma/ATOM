import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Load cached user immediately for better UX
    const cached = localStorage.getItem('cachedUser');
    return cached ? JSON.parse(cached) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (!mounted) return;
      if (error) console.error('Error loading session:', error);
      const currentUser = data?.session?.user ?? null;
      setUser(currentUser);
      if (currentUser) localStorage.setItem('cachedUser', JSON.stringify(currentUser));
      else localStorage.removeItem('cachedUser');
      setLoading(false);
    };
    loadSession();

    // Listen for auth state changes
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      const nextUser = session?.user ?? null;
      if (!mounted) return;
      setUser(nextUser);
      if (nextUser) localStorage.setItem('cachedUser', JSON.stringify(nextUser));
      else localStorage.removeItem('cachedUser');
    });

    return () => {
      mounted = false;
      subscription?.subscription?.unsubscribe?.();
    };
  }, []);

  const signUp = ({ email, password, metadata }) =>
    supabase.auth.signUp({ email, password, options: { data: metadata } });

  const signIn = ({ email, password }) =>
    supabase.auth.signInWithPassword({ email, password });

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (err) {
      console.error('Sign-out error:', err);
    } finally {
      // Ensure full cleanup even if Supabase signOut fails
      setUser(null);
      localStorage.removeItem('cachedUser');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
