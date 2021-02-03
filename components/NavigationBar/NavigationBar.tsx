import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NotificationButton } from './NotificationButton';
import { ProfileDropdown } from './ProfileDropdown';

export const NavigationBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const router = useRouter();
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
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
                                <Link href="/habits">
                                    <a className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        Habits
                                    </a>
                                </Link>
                                <a
                                    href="#"
                                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Team
                                </a>
                                <a
                                    href="#"
                                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#"
                                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Calendar
                                </a>
                            </div>
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
                <div className="pt-2 pb-4 space-y-1">
                    {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
                    <a
                        href="#"
                        className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                        Habits
                    </a>
                    <a
                        href="#"
                        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                        Team
                    </a>
                    <a
                        href="#"
                        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                        Projects
                    </a>
                    <a
                        href="#"
                        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                        Calendar
                    </a>
                </div>
            </div>
        </nav>
    );
};

const NavItems = () => {};

const MobileMenuButton = ({ mobileMenuOpen, toggleMobileMenu }) => {
    return (
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                    <svg
                        className={
                            mobileMenuOpen ? 'block h-6 w-6' : 'hidden h-6 w-6'
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                ) : (
                    <svg
                        className={
                            mobileMenuOpen ? 'hidden h-6 w-6' : 'block h-6 w-6'
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                )}
            </button>
        </div>
    );
};
