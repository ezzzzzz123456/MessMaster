import PageWrapper from '../../components/layout/PageWrapper';
import StudentNavbar from '../../components/layout/StudentNavbar';
import HeroSection from '../../components/student/HeroSection';
import MealSection from '../../components/student/MealSection';
import UpcomingMeals from '../../components/student/UpcomingMeals';
import VibeCheck from '../../components/student/VibeCheck';

const StudentPortal = () => {
    return (
        <PageWrapper className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col overflow-x-hidden text-slate-900 dark:text-slate-100">
            <div className="layout-container flex h-full grow flex-col">
                <StudentNavbar />

                <main className="flex-1 flex flex-col items-center px-4 md:px-10 py-8 w-full max-w-[1400px] mx-auto">
                    <HeroSection />
                    <MealSection />
                    <UpcomingMeals />
                    <VibeCheck />
                </main>

                <footer className="mt-auto border-t border-slate-200 dark:border-[#214a36] bg-white dark:bg-[#0f2319] py-8">
                    <div className="px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-slate-500 dark:text-slate-400 text-sm">© 2023 MessMaster. Made for hungry students.</p>
                        <div className="flex gap-6">
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Privacy Policy</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Terms of Service</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Support</a>
                        </div>
                    </div>
                </footer>
            </div>
        </PageWrapper>
    );
};

export default StudentPortal;
