import { FullPageOverlay } from './OverLay';
import styles from './PageLoad.module.css';

export const PageLoad = () => {
    return (
        <FullPageOverlay>
            <div
                className={`${styles.loader} ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4`}
            ></div>
            <h2 className="text-center text-white text-xl font-semibold">
                Loading...
            </h2>
            <p className="w-1/3 text-center text-white">
                This may take a few seconds, please don't close this page.
            </p>
        </FullPageOverlay>
    );
};
