import { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart as PieChartIcon, BarChart2, Calendar as CalendarIcon, Filter, Layers } from 'lucide-react';

const MenuAnalysis = () => {

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-default pb-6">
                <div>
                    <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
                        Menu Analysis
                    </h1>
                    <p className="text-muted mt-2">Historical performance and waste analytics by dish and category.</p>
                </div>

                <div className="flex bg-surface border border-default rounded-xl p-1">
                    <button className="px-4 py-1.5 rounded-lg text-sm font-medium bg-card text-primary shadow">Trends</button>
                    <button className="px-4 py-1.5 rounded-lg text-sm font-medium text-muted hover:text-primary transition-colors">Compare</button>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card p-4 rounded-2xl border border-default">
                <div className="flex gap-4 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                    <select className="bg-surface border border-default text-primary rounded-xl px-4 py-2 outline-none focus:border-accent-blue text-sm cursor-pointer min-w-[140px]" title="Timeframe">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>This Semester</option>
                    </select>

                    <select className="bg-surface border border-default text-primary rounded-xl px-4 py-2 outline-none focus:border-accent-blue text-sm cursor-pointer min-w-[140px]" title="Category">
                        <option>All Categories</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                    </select>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-default text-muted hover:text-primary transition-colors w-full sm:w-auto justify-center text-sm">
                    <Filter size={16} /> Advanced Filter
                </button>
            </div>

            {/* Main Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Top Wasted Items */}
                <div className="bg-card border border-default rounded-2xl p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-primary flex items-center gap-2">
                            <BarChart2 size={18} className="text-accent-red" />
                            Highest Waste Generating Items
                        </h3>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center text-center py-12 border border-dashed border-default rounded-xl bg-surface/30">
                        <span className="material-symbols-outlined text-muted text-5xl mb-3">bar_chart</span>
                        <p className="text-muted font-medium mb-1">Chart Visualization Pending</p>
                        <p className="text-xs text-muted max-w-xs">Data exists, but the rendering library (e.g. Recharts or Chart.js) needs to be integrated.</p>
                    </div>
                </div>

                {/* Category Breakdown */}
                <div className="bg-card border border-default rounded-2xl p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-primary flex items-center gap-2">
                            <PieChartIcon size={18} className="text-accent-blue" />
                            Waste by Category
                        </h3>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center text-center py-12 border border-dashed border-default rounded-xl bg-surface/30">
                        <span className="material-symbols-outlined text-muted text-5xl mb-3">pie_chart</span>
                        <p className="text-muted font-medium mb-1">Chart Visualization Pending</p>
                        <p className="text-xs text-muted max-w-xs">Component requires a charting library to draw the distribution rings.</p>
                    </div>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-card border border-default rounded-2xl overflow-hidden mt-6">
                <div className="p-4 border-b border-default bg-surface/50">
                    <h3 className="font-bold text-primary">Dish Performance Matrix</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-surface/30 border-b border-default text-xs text-muted uppercase tracking-wider">
                                <th className="p-4 font-medium">Dish Name</th>
                                <th className="p-4 font-medium">Times Served</th>
                                <th className="p-4 font-medium text-right">Avg Waste %</th>
                                <th className="p-4 font-medium text-right">Avg Rating</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-default text-sm">
                            <tr className="hover:bg-surface/30 transition-colors">
                                <td className="p-4 font-bold text-primary text-base">Aloo Gobi</td>
                                <td className="p-4 text-muted">12</td>
                                <td className="p-4 text-right text-accent-red font-medium">18.4%</td>
                                <td className="p-4 text-right text-muted">2.9/5</td>
                            </tr>
                            <tr className="hover:bg-surface/30 transition-colors">
                                <td className="p-4 font-bold text-primary text-base">Palak Paneer</td>
                                <td className="p-4 text-muted">8</td>
                                <td className="p-4 text-right text-accent-green font-medium">4.2%</td>
                                <td className="p-4 text-right text-primary font-bold">4.8/5</td>
                            </tr>
                            <tr className="hover:bg-surface/30 transition-colors">
                                <td className="p-4 font-bold text-primary text-base">White Rice</td>
                                <td className="p-4 text-muted">45</td>
                                <td className="p-4 text-right text-accent-yellow font-medium">12.1%</td>
                                <td className="p-4 text-right text-muted">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MenuAnalysis;
