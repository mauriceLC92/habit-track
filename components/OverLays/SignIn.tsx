import { FullPageOverlay } from './OverLay';
import { signIn } from 'next-auth/client';

export const SignInOverlay = () => {
    return (
        <FullPageOverlay>
            <div>
                <img
                    className="mx-auto h-16 mb-6 w-auto"
                    src="/monochrome.svg"
                    alt="Workflow"
                />
                <h2 className="mb-4 text-center text-3xl font-extrabold text-blue-400">
                    Sign in to your account
                </h2>
                <button
                    onClick={() => signIn()}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                            className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    Sign in
                </button>
            </div>
        </FullPageOverlay>
    );
};
