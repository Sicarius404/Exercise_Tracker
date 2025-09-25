import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  readonly id: number;
  readonly email: string;
}

interface AuthState {
  readonly user: User | null;
  readonly isAuthenticated: boolean;
  readonly setUser: (user: User | null) => void;
  readonly logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) =>
        set({
          user,
          isAuthenticated: user !== null,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);
