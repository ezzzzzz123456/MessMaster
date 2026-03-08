import { Link } from 'react-router-dom';

const StudentNavbar = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#214a36] bg-white/80 dark:bg-[#0f2319]/90 backdrop-blur-md px-6 py-4 lg:px-10">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 text-primary">
                    <div className="size-8 flex items-center justify-center bg-primary/20 rounded-lg">
                        <span className="material-symbols-outlined text-primary text-2xl">restaurant_menu</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-xl font-extrabold leading-tight tracking-tight">MessMaster</h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" to="/student/menu">Menu</Link>
                    <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" to="/student/schedule">Schedule</Link>
                    <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" to="/student/feedback">Feedback</Link>
                    <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" to="/student/profile">Profile</Link>
                </nav>
            </div>
            <div className="flex items-center gap-4 lg:gap-8">
                <div className="hidden sm:flex items-center bg-slate-100 dark:bg-[#214a36] rounded-xl px-3 py-2 w-64 border border-transparent focus-within:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-slate-400 dark:text-[#8eccae]">search</span>
                    <input className="bg-transparent border-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#8eccae] focus:ring-0 w-full ml-2 outline-none focus:outline-none" placeholder="Search for dishes..." type="text" />
                </div>
                <button className="hidden lg:flex cursor-pointer items-center justify-center rounded-xl h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-[#0f2319] text-sm font-bold shadow-lg shadow-primary/20">
                    <span>Sign Out</span>
                </button>
                <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary cursor-pointer hover:scale-105 transition-transform" aria-label="User profile picture showing a smiling student" style={{ backgroundImage: 'url("/assets/images/profile.jpg")' }}></div>
            </div>
        </header>
    );
};

export default StudentNavbar;
