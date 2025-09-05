import { create } from 'zustand';
import { supabase, User } from '../lib/supabase';

interface AuthState {
  user: User | null;
  loading: boolean;
  tempPhone: string;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setTempPhone: (phone: string) => void;
  signOut: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,
  tempPhone: '',
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  setTempPhone: (phone) => set({ tempPhone: phone }),
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
  checkAuth: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { data: userData } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();
        
        if (userData) {
          set({ user: userData });
        }
      }
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      set({ loading: false });
    }
  },
}));