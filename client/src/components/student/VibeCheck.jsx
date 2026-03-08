const VibeCheck = () => {
    return (
        <div className="w-full bg-gradient-to-r from-primary/10 to-transparent rounded-3xl p-6 md:p-8 border border-primary/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent-yellow">sentiment_satisfied</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mess Vibe Check</h3>
                    </div>
                    <p className="text-slate-500 dark:text-[#8eccae] text-sm">See how others are feeling about today's food!</p>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                    <div className="flex flex-col items-center gap-1 cursor-pointer group">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#214a36] flex items-center justify-center text-2xl shadow-sm border border-transparent group-hover:border-primary group-hover:-translate-y-1 transition-all relative">
                            🔥
                            <span className="absolute -top-2 -right-2 bg-primary text-[#0f2319] text-[10px] font-bold px-1.5 py-0.5 rounded-full">124</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Lit</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer group">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#214a36] flex items-center justify-center text-2xl shadow-sm border border-transparent group-hover:border-primary group-hover:-translate-y-1 transition-all relative">
                            🤤
                            <span className="absolute -top-2 -right-2 bg-slate-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">85</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Yum</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer group">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#214a36] flex items-center justify-center text-2xl shadow-sm border border-transparent group-hover:border-primary group-hover:-translate-y-1 transition-all relative">
                            🥦
                            <span className="absolute -top-2 -right-2 bg-slate-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">42</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Healthy</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer group">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#214a36] flex items-center justify-center text-2xl shadow-sm border border-transparent group-hover:border-primary group-hover:-translate-y-1 transition-all relative">
                            😴
                            <span className="absolute -top-2 -right-2 bg-slate-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">12</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Mid</span>
                    </div>

                    <div className="w-px h-12 bg-slate-300 dark:bg-[#2e5c45] mx-2 hidden sm:block"></div>
                    <button className="h-12 px-4 rounded-xl border border-dashed border-slate-400 dark:border-[#8eccae] text-slate-500 dark:text-[#8eccae] text-xs font-bold hover:bg-slate-100 dark:hover:bg-[#214a36] transition-colors">
                        + Add Your Vibe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VibeCheck;
