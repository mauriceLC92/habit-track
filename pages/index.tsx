import { ProfileCard } from '../components/ProfileCard';

export default function Home() {
    return (
        <>
            <main>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
                    <ProfileCard />
                </div>
            </main>
        </>
    );
}
