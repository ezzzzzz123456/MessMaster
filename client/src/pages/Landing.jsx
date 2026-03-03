import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChefHat, GraduationCap, Leaf } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';

const Landing = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <PageWrapper className="flex flex-col items-center justify-center p-6">
      
      {/* Animated Logo & Tagline */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Leaf className="w-12 h-12 text-accent-green" />
          <h1 className="text-5xl font-display font-bold text-primary tracking-wide">
            MessTrack
          </h1>
        </div>
        <p className="text-muted text-lg font-body max-w-md">
          Hostel Mess Food Wastage Tracking, Analytics & Intelligence Platform
        </p>
      </motion.div>

      {/* Role Chooser Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
      >
        {/* Mess Staff Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4, boxShadow: '0 10px 40px -10px rgba(0, 230, 118, 0.3)' }}
          onClick={() => navigate('/login/staff')}
          className="bg-card border border-default rounded-2xl p-10 cursor-pointer flex flex-col items-center text-center transition-colors hover:border-accent-green group"
        >
          <div className="bg-surface p-6 rounded-full mb-6 group-hover:bg-[#00e6761a] transition-colors">
            <ChefHat className="w-16 h-16 text-accent-green" />
          </div>
          <h2 className="text-3xl font-display font-semibold text-primary mb-3">Mess Staff</h2>
          <p className="text-muted font-body">
            Administer menus, log daily waste, and view AI predictive analytics.
          </p>
        </motion.div>

        {/* Student Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4, boxShadow: '0 10px 40px -10px rgba(45, 212, 191, 0.3)' }}
          onClick={() => navigate('/login/student')}
          className="bg-card border border-default rounded-2xl p-10 cursor-pointer flex flex-col items-center text-center transition-colors hover:border-accent-teal group"
        >
          <div className="bg-surface p-6 rounded-full mb-6 group-hover:bg-[#2dd4bf1a] transition-colors">
            <GraduationCap className="w-16 h-16 text-accent-teal" />
          </div>
          <h2 className="text-3xl font-display font-semibold text-primary mb-3">Student</h2>
          <p className="text-muted font-body">
            View today's menu and submit anonymous feedback on food quality.
          </p>
        </motion.div>

      </motion.div>
    </PageWrapper>
  );
};

export default Landing;