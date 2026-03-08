const HeroSection = () => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-accent-yellow/20 text-accent-yellow text-xs font-bold rounded-full uppercase tracking-wider border border-accent-yellow/20">Today's Special</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">October 24, 2023</span>
                </div>
                <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Fuel Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">Daily Fuel</span></h1>
                <p className="text-slate-500 dark:text-[#8eccae] text-lg max-w-xl">Gourmet nutrition for the modern student. Experience chef-curated meals designed to power your academic performance.</p>
            </div>

            {/* Quick Meal Filters */}
            <div className="flex gap-3 flex-wrap justify-end">
                <button className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-[#0f2319] font-bold shadow-lg shadow-primary/25 hover:scale-105 transition-all">
                    <span className="material-symbols-outlined text-[20px]">wb_twilight</span>
                    Breakfast
                </button>
                <button className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#214a36] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold border border-slate-200 dark:border-[#2e5c45] hover:border-slate-300 dark:hover:border-[#3e755a] transition-all">
                    <span className="material-symbols-outlined text-[20px] group-hover:text-accent-yellow transition-colors">sunny</span>
                    Lunch
                </button>
                <button className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#214a36] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold border border-slate-200 dark:border-[#2e5c45] hover:border-slate-300 dark:hover:border-[#3e755a] transition-all">
                    <span className="material-symbols-outlined text-[20px] group-hover:text-accent-blue transition-colors">dark_mode</span>
                    Dinner
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
