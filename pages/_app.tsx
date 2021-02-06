import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import '../styles/global.css';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <title>Habit track</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <NavigationBar />
                <Component {...pageProps} />
            </>
        </QueryClientProvider>
    );
}

export default App;
