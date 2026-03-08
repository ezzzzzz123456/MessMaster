import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: null,
    accessToken: null,
    role: null, // 'staff' | 'student'
    isSidebarOpen: true,

    setAuth: (user, accessToken) => set({
        user,
        accessToken,
        role: user ? user.role : null
    }),

    setAccessToken: (token) => set({ accessToken: token }),

    logout: () => set({ user: null, accessToken: null, role: null }),

    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useAuthStore;