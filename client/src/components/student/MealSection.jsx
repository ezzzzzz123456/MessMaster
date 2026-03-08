const MealSection = () => {
    return (
        <div className="w-full mb-12">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                        <span className="material-symbols-outlined">wb_twilight</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Breakfast</h2>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-200 dark:bg-[#214a36] text-slate-600 dark:text-slate-300">7:30 AM - 9:30 AM</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-sm font-medium text-primary">Serving Now</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Main Featured Dish */}
                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-[#2e5c45] glow-card transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-accent-yellow text-[#0f2319] text-xs font-bold rounded-full shadow-lg">Crowd Favorite</span>
                    </div>
                    <div className="w-full h-64 overflow-hidden">
                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" aria-label="Close up of a crispy Masala Dosa served with sambar and chutney" style={{ backgroundImage: 'url("/assets/images/dosa.jpg")' }}></div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Masala Dosa with Sambar</h3>
                            <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#214a36] px-2 py-1 rounded-lg">
                                <span className="text-accent-yellow material-symbols-outlined text-[18px]">star</span>
                                <span className="text-sm font-bold dark:text-white">4.8</span>
                            </div>
                        </div>
                        <p className="text-slate-500 dark:text-[#8eccae] text-sm mb-4 line-clamp-2">
                            Crispy golden crepe made from fermented rice and lentil batter, stuffed with spiced potato filling. Served with vegetable stew and coconut chutney.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
                                350 kcal
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-accent-blue text-[18px]">fitness_center</span>
                                8g Protein
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-accent-red text-[18px]">no_meals</span>
                                Gluten Free
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="flex-1 bg-primary hover:bg-primary-dark text-[#0f2319] font-bold py-2.5 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">thumb_up</span>
                                Rate Meal
                            </button>
                            <button className="bg-slate-100 dark:bg-[#214a36] hover:bg-slate-200 dark:hover:bg-[#2e5c45] text-slate-700 dark:text-slate-200 p-2.5 rounded-xl transition-colors">
                                <span className="material-symbols-outlined">share</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Secondary Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Side Dish 1 */}
                    <div className="group flex flex-col rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-[#2e5c45] hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 h-full">
                        <div className="h-40 overflow-hidden rounded-t-2xl relative">
                            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-white text-[10px] font-bold uppercase tracking-wide">Vegan</div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" aria-label="Bowl of fresh fruit salad with mint garnish" style={{ backgroundImage: 'url("/assets/images/fruit_bowl.jpg")' }}></div>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Fresh Fruit Bowl</h4>
                            <p className="text-xs text-slate-500 dark:text-[#8eccae] mb-3 flex-1">Seasonal cut fruits with a hint of chaat masala.</p>
                            <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-[#214a36]">
                                <span className="text-xs font-semibold text-slate-400">120 kcal</span>
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full border-2 border-white dark:border-card-dark bg-yellow-400 flex items-center justify-center text-[10px]">😋</div>
                                    <div className="w-6 h-6 rounded-full border-2 border-white dark:border-card-dark bg-green-400 flex items-center justify-center text-[10px]">🍎</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Dish 2 */}
                    <div className="group flex flex-col rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-[#2e5c45] hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 h-full">
                        <div className="h-40 overflow-hidden rounded-t-2xl relative">
                            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-white text-[10px] font-bold uppercase tracking-wide">Beverage</div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" aria-label="Cup of steaming hot masala chai" style={{ backgroundImage: 'url("/assets/images/chai.jpg")' }}></div>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Masala Chai</h4>
                            <p className="text-xs text-slate-500 dark:text-[#8eccae] mb-3 flex-1">Strong tea brewed with ginger, cardamom, and milk.</p>
                            <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-[#214a36]">
                                <span className="text-xs font-semibold text-slate-400">80 kcal</span>
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full border-2 border-white dark:border-card-dark bg-orange-400 flex items-center justify-center text-[10px]">🔥</div>
                                    <div className="w-6 h-6 rounded-full border-2 border-white dark:border-card-dark bg-red-400 flex items-center justify-center text-[10px]">❤️</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealSection;
