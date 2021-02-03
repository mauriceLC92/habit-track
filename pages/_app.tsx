import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Head>
                <title>Habit track</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <NavigationBar />
                <Component {...pageProps} />
            </>
        </div>
    );
}

export default App;
