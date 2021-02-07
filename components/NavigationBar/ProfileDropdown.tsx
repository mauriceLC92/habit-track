import { Transition } from '@headlessui/react';
import { FC } from 'react';

interface ProfileDropdown {
    isOpen: boolean;
    toggleProfileMenu: () => void;
}

export const ProfileDropdown: FC<ProfileDropdown> = ({
    isOpen,
    toggleProfileMenu,
}) => {
    return (
        <div className="ml-3 relative">
            <div>
                <button
                    onClick={toggleProfileMenu}
                    className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="user-menu"
                    aria-haspopup="true"
                >
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="h-8 w-8 rounded-full"
                        src="https://avatars.githubusercontent.com/u/29854288?s=460&u=aa9dab1a122a66833d2f5f1410b88deb7815e99e&v=4"
                        alt=""
                    />
                </button>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    className="z-20 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                >
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                    >
                        Your Profile
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                    >
                        Settings
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                    >
                        Sign out
                    </a>
                </div>
            </Transition>
        </div>
    );
};
