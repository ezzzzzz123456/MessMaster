const UpcomingMeals = () => {
    return (
        <div className="w-full mb-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pl-1">Coming Up Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Lunch Card */}
                <div className="relative group rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-[#2e5c45] overflow-hidden hover:border-slate-300 dark:hover:border-[#3e755a] transition-all">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <div className="h-48 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" aria-label="Plate of vegetable biryani with raita" style={{ backgroundImage: 'url("/assets/images/biryani.jpg")' }}></div>
                    <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                        <div className="flex justify-between items-end mb-1">
                            <h4 className="text-lg font-bold text-white">Vegetable Biryani</h4>
                            <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs font-bold">Lunch</span>
                        </div>
                        <p className="text-slate-300 text-xs mb-3 truncate">Aromatic basmati rice cooked with mixed vegetables and exotic spices.</p>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-slate-300 text-xs">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                12:30 PM
                            </div>
                            <div className="flex items-center gap-1 text-slate-300 text-xs">
                                <span className="material-symbols-outlined text-sm">local_fire_department</span>
                                420 kcal
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dinner Card */}
                <div className="relative group rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-[#2e5c45] overflow-hidden hover:border-slate-300 dark:hover:border-[#3e755a] transition-all">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <div className="h-48 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" aria-label="Bowl of creamy paneer butter masala curry" style={{ backgroundImage: 'url("/assets/images/paneer.jpg")' }}></div>
                    <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                        <div className="flex justify-between items-end mb-1">
                            <h4 className="text-lg font-bold text-white">Paneer Butter Masala</h4>
                            <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs font-bold">Dinner</span>
                        </div>
                        <p className="text-slate-300 text-xs mb-3 truncate">Soft paneer cubes simmered in a rich, creamy tomato gravy.</p>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-slate-300 text-xs">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                7:30 PM
                            </div>
                            <div className="flex items-center gap-1 text-slate-300 text-xs">
                                <span className="material-symbols-outlined text-sm">local_fire_department</span>
                                380 kcal
                            </div>
                        </div>
                    </div>
                </div>

                {/* Weekly Menu Teaser */}
                <div className="relative group rounded-2xl bg-[#0f2319] dark:bg-[#122b1f] border border-dashed border-primary/30 flex flex-col items-center justify-center p-6 text-center hover:bg-[#153024] transition-colors cursor-pointer">
                    <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-3xl">calendar_month</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">View Full Week</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-[200px]">Plan ahead! Check out the menu for the rest of the week.</p>
                </div>

            </div>
        </div>
    );
};

export default UpcomingMeals;
