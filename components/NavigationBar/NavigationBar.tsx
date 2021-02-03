import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NotificationButton } from './NotificationButton';
import { ProfileDropdown } from './ProfileDropdown';
import { MobileMenuButton } from './MobileMenuButton';

interface NavItems {
    title: string;
    path: string;
}

const navigationHeadings: NavItems[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Habits',
        path: '/habits',
    },
    {
        title: 'Profile',
        path: '/profile',
    },
];

export const NavigationBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (
        <nav className="bg-light-blue-100 shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between h-16">
                        <MobileMenuButton
                            toggleMobileMenu={toggleMobileMenu}
                            mobileMenuOpen={mobileMenuOpen}
                        />
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="block lg:hidden h-48 w-auto"
                                    src="/default.svg"
                                    alt="Workflow"
                                />
                                <img
                                    className="hidden lg:block h-48 w-auto"
                                    src="/default.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <NavItems
                                isMobile={false}
                                navigationHeadings={navigationHeadings}
                            />
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <NotificationButton />
                            <ProfileDropdown />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={
                    mobileMenuOpen ? 'block sm:block' : 'hidden sm:hidden'
                }
            >
                <NavItems isMobile navigationHeadings={navigationHeadings} />
            </div>
        </nav>
    );
};

const NavItems = ({ navigationHeadings, isMobile }) => {
    const router = useRouter();
    const getMobileStyle = (path: string) => {
        if (router.route === path) {
            return 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium';
        }
        return 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium';
    };
    const getDesktopStyle = (path: string) => {
        if (router.route === path) {
            return 'border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium';
        }
        return 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium';
    };
    return (
        <div
            className={
                isMobile
                    ? 'pt-2 pb-4 space-y-1'
                    : 'hidden sm:ml-6 sm:flex sm:space-x-8'
            }
        >
            {navigationHeadings.map((navItem) => {
                return (
                    <Link href={`${navItem.path}`}>
                        <a
                            className={
                                isMobile
                                    ? getMobileStyle(navItem.path)
                                    : getDesktopStyle(navItem.path)
                            }
                        >
                            {navItem.title}
                        </a>
                    </Link>
                );
            })}
        </div>
    );
};
