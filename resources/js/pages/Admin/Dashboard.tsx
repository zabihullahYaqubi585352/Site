import { router } from '@inertiajs/react';
import { Menu, X } from 'lucide-react'; // optional icons
import { useState } from 'react';
import DashboardContent from './DashboardContent';
import Members from './Members';
import Projects from './Project';

const Dashboard = () => {
    const [activeView, setActiveView] = useState('dashboard');
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleLogout = () => {
        router.post('/admin/logout');
    };

    const renderContent = () => {
        switch (activeView) {
            case 'projects':
                return <Projects />;
            case 'members':
                return <Members />;
            default:
                return <DashboardContent />;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-200">
            {/* Sidebar */}
            <aside
                className={`flex flex-col bg-gray-300 text-white shadow-md transition-all duration-300 ${isCollapsed ? 'items-center' : ''} ${isCollapsed ? 'w-16' : 'w-64'} px-4 py-6`}
            >
                {/* Collapse Button */}
                <button onClick={() => setIsCollapsed(!isCollapsed)} className="mb-6 self-end text-white hover:text-gray-300">
                    {isCollapsed ? <Menu size={20} color="black" /> : <X size={20} color="black" />}
                </button>

                {/* Logo or Title */}
                {!isCollapsed && <h2 className="mb-8 text-center text-2xl font-bold text-black">Admin Panel </h2>}

                {/* Navigation */}
                <nav className="flex flex-col space-y-4">
                    <button
                        onClick={() => setActiveView('dashboard')}
                        className={`rounded px-2 py-2 text-left text-black transition hover:bg-gray-400 ${activeView === 'dashboard' ? 'bg-indigo-300' : ''}`}
                    >
                        {!isCollapsed && 'Dashboard'}
                        {isCollapsed && '🏠'}
                    </button>
                    <button
                        onClick={() => setActiveView('projects')}
                        className={`rounded px-2 py-2 text-left text-black transition hover:bg-gray-400 ${activeView === 'projects' ? 'bg-indigo-300' : ''}`}
                    >
                        {!isCollapsed && 'Projects'}
                        {isCollapsed && '📁'}
                    </button>
                    <button
                        onClick={() => setActiveView('members')}
                        className={`rounded px-2 py-2 text-left text-black transition hover:bg-gray-400 ${activeView === 'members' ? 'bg-indigo-300' : ''}`}
                    >
                        {!isCollapsed && 'Members'}
                        {isCollapsed && '👥'}
                    </button>
                </nav>

                {/* Logout */}
                <div className="mt-auto border-t border-gray-400 pt-6 text-black">
                    <button onClick={handleLogout} className="-500 w-full rounded bg-indigo-500 px-4 py-2 hover:bg-indigo-800">
                        {!isCollapsed ? 'Exit' : '🚪'}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">{renderContent()}</main>
        </div>
    );
};

export default Dashboard;
