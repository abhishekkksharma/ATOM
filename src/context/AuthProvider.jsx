// ...existing code...
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setUser(data?.session?.user ?? null);
      setLoading(false);
    });

    const { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setUser(session?.user ?? null);
    });

    return () => {
      mounted = false;
      subscription?.unsubscribe?.();
    };
  }, []);

  const signUp = ({ email, password, metadata }) =>
    supabase.auth.signUp({ email, password, options: { data: metadata } });

  const signIn = ({ email, password }) =>
    supabase.auth.signInWithPassword({ email, password });

  // make sure signOut returns the supabase result and clears local state
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    // clear UI state immediately
    setUser(null);
    return { error };
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
// ...existing code...