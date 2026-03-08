import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Eye, EyeOff, ChefHat } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../api/axios';
import useAuthStore from '../store/useAuthStore';
import PageWrapper from '../components/layout/PageWrapper';

const StaffLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const loginMutation = useMutation({
    mutationFn: async (credentials) => {
      const response = await api.post('/auth/login', { ...credentials, role: 'staff' });
      return response.data;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
      toast.success('Welcome back!');
      // Redirect based on setup completion
      if (!data.user.isSetupComplete) {
        navigate('/setup');
      } else {
        navigate('/dashboard/overview');
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Login failed. Please try again.');
    }
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  const loadDemoCredentials = () => {
    setValue('email', 'ravi@mess.edu');
    setValue('password', 'staff123');
  };

  return (
    <PageWrapper className="flex items-center justify-center p-6">
      <div className="bg-card border border-default rounded-2xl w-full max-w-md p-8 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-[#00e6761a] p-4 rounded-full mb-4">
            <ChefHat className="w-10 h-10 text-accent-green" />
          </div>
          <h2 className="text-2xl font-display font-semibold text-primary">Staff Portal</h2>
          <p className="text-muted text-sm mt-1">Sign in to manage your mess</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-muted text-sm mb-1">Email Address</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className={`w-full bg-surface border ${errors.email ? 'border-accent-red' : 'border-default'} rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:border-accent-green transition-colors`}
            />
            {errors.email && <span className="text-accent-red text-xs mt-1">{errors.email.message}</span>}
          </div>

          <div className="relative">
            <label className="block text-muted text-sm mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              className={`w-full bg-surface border ${errors.password ? 'border-accent-red' : 'border-default'} rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:border-accent-green transition-colors`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-muted hover:text-primary transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.password && <span className="text-accent-red text-xs mt-1">{errors.password.message}</span>}
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full bg-accent-green hover:bg-[#00c853] text-[#06080e] font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-50"
          >
            {loginMutation.isPending ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-default text-center">
          <p className="text-muted text-sm mb-3">Hackathon Judging?</p>
          <button
            onClick={loadDemoCredentials}
            type="button"
            className="text-sm text-accent-green hover:underline"
          >
            Load Demo Credentials
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default StaffLogin;