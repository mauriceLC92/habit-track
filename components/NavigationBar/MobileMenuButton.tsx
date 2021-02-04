export const MobileMenuButton = ({ mobileMenuOpen, toggleMobileMenu }) => {
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                )}
            </button>
        </div>
    );
};
