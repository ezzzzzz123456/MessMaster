import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Eye, EyeOff, GraduationCap } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../api/axios';
import useAuthStore from '../store/useAuthStore';
import PageWrapper from '../components/layout/PageWrapper';

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const loginMutation = useMutation({
    mutationFn: async (credentials) => {
      const response = await api.post('/auth/login', { ...credentials, role: 'student' });
      return response.data;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
      toast.success('Login successful!');
      navigate('/student/feedback');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Login failed.');
    }
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  const loadDemoCredentials = () => {
    setValue('email', 'arjun@student.edu');
    setValue('password', 'stu123');
  };

  return (
    <PageWrapper className="flex items-center justify-center p-6">
      <div className="bg-card border border-default rounded-2xl w-full max-w-md p-8 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-[#2dd4bf1a] p-4 rounded-full mb-4">
            <GraduationCap className="w-10 h-10 text-accent-teal" />
          </div>
          <h2 className="text-2xl font-display font-semibold text-primary">Student Feedback</h2>
          <p className="text-muted text-sm mt-1">Sign in to rate today's meals</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-muted text-sm mb-1">Student Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className={`w-full bg-surface border ${errors.email ? 'border-accent-red' : 'border-default'} rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:border-accent-teal transition-colors`}
            />
          </div>

          <div className="relative">
            <label className="block text-muted text-sm mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              className={`w-full bg-surface border ${errors.password ? 'border-accent-red' : 'border-default'} rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:border-accent-teal transition-colors`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-muted hover:text-primary transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full bg-accent-teal hover:bg-[#14b8a6] text-[#06080e] font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-50"
          >
            {loginMutation.isPending ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-default text-center">
          <button onClick={loadDemoCredentials} type="button" className="text-sm text-accent-teal hover:underline">
            Load Demo Account
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default StudentLogin;