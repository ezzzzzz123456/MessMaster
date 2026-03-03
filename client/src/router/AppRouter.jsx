import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

// Lazy load pages for better performance (import actual files when created)
import Landing from '../pages/Landing';
import StaffLogin from '../pages/StaffLogin';
import StudentLogin from '../pages/StudentLogin';
// ... Dashboard and Student imports will go here

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, role } = useAuthStore();

  if (!user) return <Navigate to="/" replace />;
  if (allowedRole && role !== allowedRole) {
    return role === 'staff' ? <Navigate to="/dashboard/overview" replace /> : <Navigate to="/student/feedback" replace />;
  }
  return children;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login/staff" element={<StaffLogin />} />
        <Route path="/login/student" element={<StudentLogin />} />

        {/* Staff Routes */}
        <Route path="/setup" element={
          <ProtectedRoute allowedRole="staff">
            <div>Setup Wizard Placeholder</div>
          </ProtectedRoute>
        } />
        
        <Route path="/dashboard/*" element={
          <ProtectedRoute allowedRole="staff">
            <div>Dashboard Wrapper Placeholder</div>
          </ProtectedRoute>
        } />

        {/* Student Routes */}
        <Route path="/student/feedback" element={
          <ProtectedRoute allowedRole="student">
            <div>Student Portal Placeholder</div>
          </ProtectedRoute>
        } />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;