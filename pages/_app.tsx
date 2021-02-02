import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { NavigationBar } from '../components/NavigationBar';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Habit track</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <NavigationBar />
                <Component {...pageProps} />
            </>
        </>
    );
}

export default App;
