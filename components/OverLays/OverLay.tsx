interface IFullPageOverlay {
    children: React.ReactNode;
    className?: string;
}
export const FullPageOverlay = ({ children, className }: IFullPageOverlay) => {
    return (
        <div
            className={`${className} fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center`}
        >
            {children}
        </div>
    );
};
