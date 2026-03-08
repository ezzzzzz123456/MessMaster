import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';
import PageWrapper from '../../components/layout/PageWrapper';

// Lazy load pages for better performance 
import Overview from './Overview';
import LogWaste from './LogWaste';
import Inventory from './Inventory';
import Feedback from './Feedback';
import CookReviews from './CookReviews';
import Oracle from './Oracle';
import MenuAnalysis from './MenuAnalysis';
import Setup from './Setup';

const DashboardLayout = () => {
    return (
        <PageWrapper className="flex h-screen bg-app text-primary overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                <main className="flex-1 overflow-y-auto w-full scrollbar-hide bg-surface/30">
                    <Routes>
                        <Route path="overview" element={<Overview />} />
                        <Route path="log-waste" element={<LogWaste />} />
                        <Route path="inventory" element={<Inventory />} />
                        <Route path="feedback" element={<Feedback />} />
                        <Route path="cook-reviews" element={<CookReviews />} />
                        <Route path="oracle" element={<Oracle />} />
                        <Route path="menu-analysis" element={<MenuAnalysis />} />
                        <Route path="setup" element={<Setup />} />

                        {/* Default redirect to overview */}
                        <Route path="*" element={<Navigate to="overview" replace />} />
                    </Routes>
                </main>
            </div>
        </PageWrapper>
    );
};

export default DashboardLayout;
