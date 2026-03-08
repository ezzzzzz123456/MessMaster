import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, ChevronDown, Sparkles, Star } from 'lucide-react';
import Badge from '../../../components/ui/Badge';
import api from '../../../api/axios';
import { useQuery } from '@tanstack/react-query';

const CookReviews = () => {
  const [expandedCook, setExpandedCook] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Fetch reviews for the selected date
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ['cookReviews', selectedDate],
    queryFn: async () => {
      // In a real scenario, this calls GET /api/v1/cook-reviews/:date
      // The backend handles calling Gemini if not cached
      const res = await api.get(`/cook-reviews/${selectedDate}`);
      return res.data;
    },
    // Mocking data for UI building purposes if API fails
    initialData: [
      {
        staffId: '1', name: 'Ravi Kumar', role: 'Head Cook',
        compositeScore: 9.2, grade: 'A+', wasteRatio: 0.04, avgRating: 4.8,
        aiReviewText: "Ravi demonstrated exceptional performance today. His Chole Bhature had a remarkably low waste ratio of 4%, and student ratings averaged an impressive 4.8. His timing and portion control are setting a benchmark for the kitchen.",
        dishes: [{ name: 'Chole Bhature', preparedKg: 45, wastedKg: 1.8, studentRating: 4.8, onTime: true }]
      },
      {
        staffId: '2', name: 'Amit Singh', role: 'Cook',
        compositeScore: 6.8, grade: 'B', wasteRatio: 0.15, avgRating: 3.5,
        aiReviewText: "Amit had a challenging service. The Rajma Rice saw a 15% waste ratio, indicating significant over-preparation or portioning issues. While dishes were on time, the student rating of 3.5 suggests room for taste improvement.",
        dishes: [{ name: 'Rajma Rice', preparedKg: 30, wastedKg: 4.5, studentRating: 3.5, onTime: true }]
      }
    ]
  });

  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'green';
    if (grade === 'B+') return 'blue';
    if (grade === 'B') return 'orange';
    return 'red';
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-end mb-8 border-b border-default pb-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
            Cook Performance <Sparkles className="text-accent-purple" size={24} />
          </h1>
          <p className="text-muted mt-2">AI-generated evaluations based on daily waste and student feedback.</p>
        </div>
        <div>
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-surface border border-default text-primary rounded-lg px-4 py-2 outline-none focus:border-accent-purple"
          />
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.staffId} className="bg-card border border-default rounded-xl overflow-hidden transition-colors hover:border-default/80">
            {/* Header / Accordion Trigger */}
            <div 
              onClick={() => setExpandedCook(expandedCook === review.staffId ? null : review.staffId)}
              className="p-6 cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="bg-surface p-3 rounded-full border border-default">
                  <ChefHat className="text-muted" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-display text-primary font-semibold">{review.name}</h3>
                  <p className="text-sm text-muted">{review.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="w-48 hidden md:block">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted">Composite Score</span>
                    <span className="text-primary font-bold">{review.compositeScore}/10</span>
                  </div>
                  <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(review.compositeScore / 10) * 100}%` }}
                      transition={{ duration: 1 }}
                      className={`h-full ${review.compositeScore >= 8 ? 'bg-accent-green' : review.compositeScore >= 6 ? 'bg-accent-orange' : 'bg-accent-red'}`}
                    />
                  </div>
                </div>
                
                <Badge color={getGradeColor(review.grade)} className="text-sm px-3 py-1">
                  Grade {review.grade}
                </Badge>
                
                <motion.div animate={{ rotate: expandedCook === review.staffId ? 180 : 0 }}>
                  <ChevronDown className="text-muted" />
                </motion.div>
              </div>
            </div>

            {/* Expandable Body */}
            <AnimatePresence>
              {expandedCook === review.staffId && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-t border-default bg-surface/30"
                >
                  <div className="p-6">
                    <div className="flex gap-4 mb-6 bg-[#a78