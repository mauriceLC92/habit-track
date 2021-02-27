import { HabitFeed } from '../components/HabitFeed';
import { ProfileCard } from '../components/ProfileCard';
import { signIn, signOut, useSession } from 'next-auth/client';
import { getSession } from 'next-auth/client';

export default function Home() {
    const [session, loading] = useSession();

    if (!session) {
        return <button onClick={() => signIn()}>Sign in</button>;
    }
    return (
        <>
            <main>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
                    <ProfileCard />
                    <HabitFeed />
                    Signed in as {session.user.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            </main>
        </>
    );
}
