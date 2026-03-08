import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Save, MapPin, Users, Utensils, Bell } from 'lucide-react';

const Setup = () => {
    const [activeTab, setActiveTab] = useState('General');

    const tabs = ['General', 'Menu Preferences', 'Notifications'];

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-default pb-6">
                <div>
                    <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
                        System Setup
                    </h1>
                    <p className="text-muted mt-2">Configure operational settings and AI learning parameters.</p>
                </div>

                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent-green text-[#0f2319] font-bold shadow-lg shadow-accent-green/20 hover:bg-[#00c968] hover:-translate-y-0.5 transition-all">
                    <Save size={18} /> Save Changes
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8">

                {/* Settings Nav */}
                <div className="w-full md:w-64 shrink-0 space-y-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === tab ? 'bg-surface border border-default text-primary' : 'text-muted hover:text-primary hover:bg-surface/50'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Settings Content Panels */}
                <div className="flex-1 bg-card border border-default rounded-2xl p-6 md:p-8">

                    {activeTab === 'General' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                <Settings size={20} className="text-muted" /> Facility Details
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-muted mb-2">Hostel/Mess Name</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                                        <input type="text" defaultValue="Block B Main Mess" className="w-full bg-surface border border-default text-primary rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-accent-green transition-colors" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-muted mb-2">Total Registered Students</label>
                                    <div className="relative">
                                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                                        <input type="number" defaultValue="850" className="w-full bg-surface border border-default text-primary rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-accent-green transition-colors" />
                                    </div>
                                    <p className="text-xs text-muted mt-2">Oracle AI uses this baseline capacity for waste predictions.</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'Menu Preferences' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                <Utensils size={20} className="text-muted" /> Menu Preferences
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="flex items-center justify-between mb-2">
                                        <span className="font-medium text-primary">Dynamic Menu Suggestions</span>
                                        <input type="checkbox" defaultChecked className="w-5 h-5 accent-accent-green bg-surface border-default rounded" />
                                    </label>
                                    <p className="text-sm text-muted">Allow Oracle AI to automatically suggest menu substitutions based on weather and historical waste trends.</p>
                                </div>
                                <hr className="border-default" />
                                <div>
                                    <label className="flex items-center justify-between mb-2">
                                        <span className="font-medium text-primary">Auto-scale Portions</span>
                                        <input type="checkbox" defaultChecked className="w-5 h-5 accent-accent-green bg-surface border-default rounded" />
                                    </label>
                                    <p className="text-sm text-muted">Automatically scale ingredient quantities in Inventory tracking when attendance predictions dip.</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'Notifications' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                <Bell size={20} className="text-muted" /> Alert Settings
                            </h2>

                            <div className="space-y-4">
                                <div className="p-4 bg-surface border border-default rounded-xl flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-primary">Low Inventory Alerts</h4>
                                        <p className="text-sm text-muted mt-1">Notify when ingredients drop below minimum stock.</p>
                                    </div>
                                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-accent-green bg-surface border-default rounded" />
                                </div>
                                <div className="p-4 bg-surface border border-default rounded-xl flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-primary">High Waste Spikes</h4>
                                        <p className="text-sm text-muted mt-1">Immediate alert if a meal generates >15% waste.</p>
                                    </div>
                                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-accent-green bg-surface border-default rounded" />
                                </div>
                            </div>
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Setup;
