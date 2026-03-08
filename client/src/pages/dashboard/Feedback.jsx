import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Star, TrendingUp, Calendar, ChevronDown } from 'lucide-react';

const Feedback = () => {
    const [filter, setFilter] = useState('All');

    // Dummy feedback data
    const feedbackData = [
        { id: 1, dish: 'Masala Dosa', type: 'Breakfast', date: 'Oct 24, 2023', author: 'Unknown Student', rating: 5, vibe: '🔥', comment: "Crispiest dosa I've had all semester. Chutney was fresh too!" },
        { id: 2, dish: 'Rajma Chawal', type: 'Lunch', date: 'Oct 23, 2023', author: 'Hostel Block B Student', rating: 3, vibe: '😴', comment: "Rice was a bit undercooked today." },
        { id: 3, dish: 'Paneer Butter Masala', type: 'Dinner', date: 'Oct 23, 2023', author: 'Unknown Student', rating: 4, vibe: '🤤', comment: "Gravy was excellent, but portion size could be bigger." },
        { id: 4, dish: 'Aloo Paratha', type: 'Breakfast', date: 'Oct 22, 2023', author: 'Student Rep', rating: 5, vibe: '🔥', comment: "Perfect breakfast to start the day. Thanks!" },
        { id: 5, dish: 'Mixed Veg Curry', type: 'Lunch', date: 'Oct 22, 2023', author: 'Unknown Student', rating: 2, vibe: '🥦', comment: "Too much oil in the curry today. Trying to eat healthy." },
    ];

    const filteredFeedback = filter === 'All' ? feedbackData : feedbackData.filter(item => item.vibe === filter);

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-default pb-6">
                <div>
                    <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
                        Student Feedback
                    </h1>
                    <p className="text-muted mt-2">Aggregated sentiments and reviews from the student body.</p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted">Weekly Score:</span>
                    <div className="flex items-center gap-1 bg-surface border border-default px-3 py-1.5 rounded-lg">
                        <Star className="text-accent-yellow fill-accent-yellow" size={16} />
                        <span className="font-bold text-primary">4.2</span>
                        <TrendingUp className="text-accent-green ml-2" size={16} />
                    </div>
                </div>
            </div>

            {/* Vibe Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
                {['All', '🔥', '🤤', '🥦', '😴'].map((vibeTab) => (
                    <button
                        key={vibeTab}
                        onClick={() => setFilter(vibeTab)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${filter === vibeTab
                                ? 'bg-accent-teal text-[#0f2319] shadow-lg shadow-accent-teal/20 hover:bg-[#20c2b0]'
                                : 'bg-surface border border-default text-muted hover:text-primary hover:border-accent-teal/50'
                            }`}
                    >
                        {vibeTab === 'All' ? 'All Reviews' : `${vibeTab} Only`}
                    </button>
                ))}
            </div>

            {/* Stats Summary (Mini) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-card border border-default rounded-xl p-4 text-center group hover:border-[#ff6b2b] transition-colors">
                    <span className="text-3xl block mb-1">🔥</span>
                    <div className="text-2xl font-bold text-primary group-hover:text-accent-orange transition-colors">68%</div>
                    <div className="text-xs text-muted font-medium uppercase tracking-wider">Lit</div>
                </div>
                <div className="bg-card border border-default rounded-xl p-4 text-center group hover:border-[#fbbf24] transition-colors">
                    <span className="text-3xl block mb-1">🤤</span>
                    <div className="text-2xl font-bold text-primary group-hover:text-accent-yellow transition-colors">15%</div>
                    <div className="text-xs text-muted font-medium uppercase tracking-wider">Yum</div>
                </div>
                <div className="bg-card border border-default rounded-xl p-4 text-center group hover:border-[#00e676] transition-colors">
                    <span className="text-3xl block mb-1">🥦</span>
                    <div className="text-2xl font-bold text-primary group-hover:text-accent-green transition-colors">12%</div>
                    <div className="text-xs text-muted font-medium uppercase tracking-wider">Healthy</div>
                </div>
                <div className="bg-card border border-default rounded-xl p-4 text-center group hover:border-[#4a5f7a] transition-colors">
                    <span className="text-3xl block mb-1">😴</span>
                    <div className="text-2xl font-bold text-primary transition-colors">5%</div>
                    <div className="text-xs text-muted font-medium uppercase tracking-wider">Mid</div>
                </div>
            </div>

            {/* Feebdack Stream */}
            <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                    {filteredFeedback.map((feedback, index) => (
                        <motion.div
                            key={feedback.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            className="bg-card border border-default rounded-2xl p-5 hover:border-default/80 transition-colors"
                        >
                            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-surface border border-default flex items-center justify-center text-2xl shrink-0">
                                        {feedback.vibe}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">{feedback.dish}</h3>
                                        <div className="flex items-center gap-2 text-xs text-muted mt-1">
                                            <span className="bg-surface px-2 py-0.5 rounded border border-default">{feedback.type}</span>
                                            <span className="flex items-center gap-1"><Calendar size={12} /> {feedback.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 bg-surface border border-default px-2 py-1 rounded-lg self-start">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={14}
                                            className={star <= feedback.rating ? "text-accent-yellow fill-accent-yellow" : "text-muted"}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="pl-0 sm:pl-15">
                                <div className="bg-surface/50 border-l-4 border-accent-teal/50 rounded-r-xl p-4 text-primary leading-relaxed">
                                    "{feedback.comment}"
                                </div>
                                <div className="text-xs text-muted font-medium mt-3 flex justify-end">
                                    — {feedback.author}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {filteredFeedback.length === 0 && (
                    <div className="bg-card border border-default border-dashed rounded-2xl p-12 text-center text-muted">
                        <div className="text-4xl mb-4">📭</div>
                        <p>No feedback found matching the current filter.</p>
                    </div>
                )}
            </div>

            <div className="flex justify-center pt-4">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-surface border border-default text-muted hover:text-primary transition-colors">
                    <ChevronDown size={18} /> Load More Feedback
                </button>
            </div>

        </div>
    );
};

export default Feedback;
