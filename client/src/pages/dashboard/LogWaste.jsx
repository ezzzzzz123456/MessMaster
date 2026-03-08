import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Scale, Trash2, Plus } from 'lucide-react';
import Badge from '../../../components/ui/Badge';

const LogWaste = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [mealType, setMealType] = useState('Breakfast');

    // Dummy local state for waste entries
    const [entries, setEntries] = useState([
        { id: 1, name: 'Masala Dosa', prepared: 20, wasted: 1.5 },
        { id: 2, name: 'Sambar', prepared: 30, wasted: 4.0 },
        { id: 3, name: 'Coconut Chutney', prepared: 10, wasted: 0.8 },
    ]);

    const handleWasteChange = (id, newWasted) => {
        setEntries(entries.map(e => e.id === id ? { ...e, wasted: Number(newWasted) } : e));
    };

    const calculateWastePercentage = (wasted, prepared) => {
        if (!prepared || prepared === 0) return 0;
        return ((wasted / prepared) * 100).toFixed(1);
    };

    const getWasteBadgeColor = (percentage) => {
        if (percentage < 5) return 'green';
        if (percentage < 15) return 'yellow';
        return 'red';
    };

    return (
        <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-default pb-6">
                <div>
                    <h1 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
                        Log Daily Waste
                    </h1>
                    <p className="text-muted mt-2">Record prepared vs wasted quantities to improve accurate predictions.</p>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 bg-card border border-default p-4 rounded-2xl">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-muted mb-2">Select Date</label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-surface border border-default text-primary rounded-xl px-4 py-3 outline-none focus:border-accent-green transition-colors"
                        title="Date"
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium text-muted mb-2">Meal Session</label>
                    <div className="flex gap-2">
                        {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                            <button
                                key={meal}
                                onClick={() => setMealType(meal)}
                                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${mealType === meal ? 'bg-accent-green text-[#0f2319] shadow-lg shadow-accent-green/20' : 'bg-surface border border-default text-muted hover:border-accent-green/50'}`}
                            >
                                {meal}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Entry List */}
            <div className="bg-card border border-default rounded-2xl overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-default bg-surface/50 text-sm font-semibold text-muted">
                    <div className="col-span-5">Menu Item</div>
                    <div className="col-span-3 text-right">Prepared (kg)</div>
                    <div className="col-span-3 text-right">Wasted (kg)</div>
                    <div className="col-span-1"></div>
                </div>

                <div className="divide-y divide-default">
                    {entries.map((entry) => {
                        const p = calculateWastePercentage(entry.wasted, entry.prepared);
                        return (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                key={entry.id}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center hover:bg-surface/30 transition-colors"
                            >
                                <div className="col-span-1 md:col-span-5">
                                    <span className="font-medium text-primary block mb-2 md:mb-0">{entry.name}</span>
                                </div>

                                <div className="col-span-1 md:col-span-3 flex justify-between items-center md:justify-end">
                                    <span className="text-muted md:hidden text-sm">Prepared (kg): </span>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={entry.prepared}
                                            readOnly
                                            className="w-24 bg-surface/50 border border-default text-muted rounded-lg px-3 py-2 text-right opacity-70 cursor-not-allowed"
                                            title={`Prepared quantity for ${entry.name}`}
                                        />
                                    </div>
                                </div>

                                <div className="col-span-1 md:col-span-3 flex justify-between items-center md:justify-end">
                                    <span className="text-muted md:hidden text-sm">Wasted (kg): </span>
                                    <div className="relative flex items-center gap-3">
                                        <div className="flex flex-col items-end">
                                            <Badge color={getWasteBadgeColor(p)} className="mb-1 hidden md:flex">
                                                {p}% waste
                                            </Badge>
                                        </div>
                                        <input
                                            type="number"
                                            value={entry.wasted}
                                            min="0"
                                            step="0.1"
                                            onChange={(e) => handleWasteChange(entry.id, e.target.value)}
                                            className="w-24 bg-surface border border-default text-primary font-bold rounded-lg px-3 py-2 text-right focus:border-accent-green focus:ring-1 focus:ring-accent-green outline-none transition-colors"
                                            title={`Lost/wasted quantity for ${entry.name}`}
                                        />
                                    </div>
                                </div>

                                <div className="col-span-1 flex justify-end">
                                    <button className="p-2 text-muted hover:text-accent-red hover:bg-[#ff3d5a1a] rounded-lg transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="p-4 border-t border-default bg-surface/30 flex justify-between items-center">
                    <button className="flex items-center gap-2 text-sm font-semibold text-accent-green hover:text-accent-green/80 transition-colors">
                        <Plus size={16} /> Add Missing Item
                    </button>
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-4">
                <button className="px-6 py-3 rounded-xl border border-default text-muted hover:text-primary hover:border-primary transition-colors font-bold">
                    Reset
                </button>
                <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-accent-green text-[#0f2319] font-bold shadow-lg shadow-accent-green/20 hover:bg-[#00c968] hover:-translate-y-0.5 transition-all">
                    <Save size={18} /> Save Log
                </button>
            </div>

        </div>
    );
};

export default LogWaste;
