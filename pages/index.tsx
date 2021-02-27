import { HabitFeed } from '../components/HabitFeed';
import { ProfileCard } from '../components/ProfileCard';
import { signIn, signOut, useSession } from 'next-auth/client';
import { getSession } from 'next-auth/client';
import { SignInOverlay } from '../components/OverLays/SignIn';
import { PageLoad } from '../components/OverLays/PageLoad';

export default function Home() {
    const [session, loading] = useSession();

    if (loading) {
        return <PageLoad />;
    }

    if (!session) {
        return <SignInOverlay />;
    }
    return (
        <>
            <main>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
                    <ProfileCard />
                    <HabitFeed />
                </div>
            </main>
        </>
    );
}
