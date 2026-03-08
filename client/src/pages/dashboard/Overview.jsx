import { motion } from 'framer-motion';
import { TrendingDown, Users, AlertTriangle, Scale, CheckCircle2 } from 'lucide-react';
import Badge from '../../../components/ui/Badge';

const Overview = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-default pb-6">
                <div>
                    <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
                        Dashboard Overview
                    </h1>
                    <p className="text-muted mt-2">Real-time metrics and insights for Mess operations.</p>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-accent-yellow/20 text-accent-yellow text-xs font-bold rounded-full uppercase tracking-wider border border-accent-yellow/20">Today's Data</span>
                </div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {/* KPI 1: Total Waste */}
                <motion.div variants={itemVariants} className="bg-card border border-default rounded-2xl p-6 hover:border-accent-green/50 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-surface p-3 rounded-full group-hover:bg-[#00e6761a] transition-colors">
                            <Scale className="text-accent-green" size={24} />
                        </div>
                        <Badge color="green" className="flex items-center gap-1">
                            <TrendingDown size={14} /> -4%
                        </Badge>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-primary mb-1">42.5 <span className="text-lg text-muted font-normal">kg</span></h3>
                        <p className="text-sm font-medium text-muted">Total Food Wasted Today</p>
                    </div>
                </motion.div>

                {/* KPI 2: Active Diners */}
                <motion.div variants={itemVariants} className="bg-card border border-default rounded-2xl p-6 hover:border-accent-blue/50 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-surface p-3 rounded-full group-hover:bg-[#38bdf81a] transition-colors">
                            <Users className="text-accent-blue" size={24} />
                        </div>
                        <Badge color="blue" className="flex items-center gap-1">
                            Live
                        </Badge>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-primary mb-1">845</h3>
                        <p className="text-sm font-medium text-muted">Students Served (Breakfast)</p>
                    </div>
                </motion.div>

                {/* KPI 3: Vibe Score */}
                <motion.div variants={itemVariants} className="bg-card border border-default rounded-2xl p-6 hover:border-accent-yellow/50 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-surface p-3 rounded-full group-hover:bg-[#fbbf241a] transition-colors">
                            <CheckCircle2 className="text-accent-yellow" size={24} />
                        </div>
                        <Badge color="yellow" className="flex items-center gap-1">
                            Great
                        </Badge>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-primary mb-1">4.6<span className="text-lg text-muted font-normal">/5</span></h3>
                        <p className="text-sm font-medium text-muted">Average Student Rating</p>
                    </div>
                </motion.div>

                {/* KPI 4: Alerts */}
                <motion.div variants={itemVariants} className="bg-card border border-default rounded-2xl p-6 hover:border-accent-red/50 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-surface p-3 rounded-full group-hover:bg-[#ff3d5a1a] transition-colors">
                            <AlertTriangle className="text-accent-red" size={24} />
                        </div>
                        <Badge color="red" className="flex items-center gap-1">
                            Action Needed
                        </Badge>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-primary mb-1">2</h3>
                        <p className="text-sm font-medium text-muted">Low Inventory Alerts</p>
                    </div>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart Area (Placeholder) */}
                <div className="lg:col-span-2 bg-card border border-default rounded-2xl p-6 min-h-[400px] flex flex-col justify-center items-center text-center">
                    <div className="bg-surface p-4 rounded-full mb-4">
                        <span className="material-symbols-outlined text-muted text-4xl">bar_chart</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Detailed Analytics Locked</h3>
                    <p className="text-muted max-w-sm">Waste trend visualization over time will appear here when enough historical data is collected.</p>
                </div>

                {/* Recent Feedback Feed */}
                <div className="bg-card border border-default rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center justify-between">
                        Live Vibe Check <span className="text-accent-teal text-sm bg-[#2dd4bf1a] px-2 py-0.5 rounded-full">+12 new</span>
                    </h3>

                    <div className="space-y-4">
                        {/* Feedback Item 1 */}
                        <div className="p-4 bg-surface rounded-xl border border-default/50 hover:border-default transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-lg">🔥 Lit</span>
                                <span className="text-xs text-muted">2 mins ago</span>
                            </div>
                            <p className="text-sm inline-block px-2 py-1 bg-card rounded-md font-medium text-primary">Masala Dosa</p>
                            <p className="text-xs text-muted mt-2">"Crispiest one this week, loved the sambar!"</p>
                        </div>

                        {/* Feedback Item 2 */}
                        <div className="p-4 bg-surface rounded-xl border border-default/50 hover:border-default transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-lg">🤤 Yum</span>
                                <span className="text-xs text-muted">15 mins ago</span>
                            </div>
                            <p className="text-sm inline-block px-2 py-1 bg-card rounded-md font-medium text-primary">Filter Coffee</p>
                        </div>

                        {/* Feedback Item 3 */}
                        <div className="p-4 bg-surface rounded-xl border border-default/50 hover:border-default transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-lg">😴 Mid</span>
                                <span className="text-xs text-muted">1 hour ago</span>
                            </div>
                            <p className="text-sm inline-block px-2 py-1 bg-card rounded-md font-medium text-primary">Idli</p>
                            <p className="text-xs text-muted mt-2">"A bit dry today."</p>
                        </div>
                    </div>

                    <button className="w-full mt-4 text-sm font-semibold text-accent-teal hover:text-accent-teal/80 transition-colors">
                        View All Feedback →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Overview;
