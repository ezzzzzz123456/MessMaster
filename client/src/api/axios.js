import axios from 'axios';
import useAuthStore from '../store/useAuthStore';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
    withCredentials: true, // Important for sending httpOnly refresh cookies
});

// Request Interceptor: Attach Bearer Token
api.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().accessToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor: Handle 401 Auto-Refresh
api.interceptors.response.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) { {
            originalRequest._retry = true;
            try {
                // Assume backend relies on httpOnly cookie for the refresh token
                const res = await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, {}, { withCredentials: true }
                );

                const { accessToken } = res.data;
                useAuthStore.getState().setAccessToken(accessToken);

                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                useAuthStore.getState().logout();
                window.location.href = '/';
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);   
    }           
    });

export default api;