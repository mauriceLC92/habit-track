import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'next-auth/client';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import '../styles/global.css';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider session={pageProps.session}>
                <Head>
                    <title>Habit track</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <>
                    <NavigationBar />
                    <Component {...pageProps} />
                </>
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
