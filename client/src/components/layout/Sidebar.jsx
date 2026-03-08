import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PieChart, 
  Sparkles, 
  Scale, 
  MessageSquare, 
  Star, 
  PackageSearch, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Leaf
} from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useAuthStore();

  const navItems = [
    { name: 'Overview', path: '/dashboard/overview', icon: LayoutDashboard },
    { name: 'Menu Analysis', path: '/dashboard/menu-analysis', icon: PieChart },
    { name: 'Oracle AI', path: '/dashboard/oracle', icon: Sparkles },
    { name: 'Log Waste', path: '/dashboard/log-waste', icon: Scale },
    { name: 'Feedback', path: '/dashboard/feedback', icon: MessageSquare },
    { name: 'Cook Reviews', path: '/dashboard/cook-reviews', icon: Star },
    { name: 'Inventory', path: '/dashboard/inventory', icon: PackageSearch },
    { name: 'Setup', path: '/dashboard/setup', icon: Settings },
  ];

  return (
    <aside 
      className={`bg-surface border-r border-default h-screen sticky top-0 transition-all duration-300 flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}
    >
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-default shrink-0">
        {isSidebarOpen ? (
          <div className="flex items-center gap-2 text-accent-green">
            <Leaf size={24} />
            <span className="font-display font-bold text-xl tracking-wide text-primary">MessTrack</span>
          </div>
        ) : (
          <Leaf size={24} className="text-accent-green mx-auto" />
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-hide">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-body text-sm
                ${isActive 
                  ? 'bg-[#00e6761a] text-accent-green font-medium' 
                  : 'text-muted hover:bg-card hover:text-primary'}
                ${!isSidebarOpen && 'justify-center'}
              `}
              title={!isSidebarOpen ? item.name : undefined}
            >
              <Icon size={20} className="shrink-0" />
              {isSidebarOpen && <span>{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Toggle Button */}
      <div className="p-4 border-t border-default shrink-0">
        <button 
          onClick={toggleSidebar}
          className="w-full flex items-center justify-center p-2 rounded-lg text-muted hover:bg-card hover:text-primary transition-colors border border-default"
        >
          {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;