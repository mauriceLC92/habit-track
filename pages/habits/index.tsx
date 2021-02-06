import { useQuery } from 'react-query';
import { HabitBlock, HabitBlockEmpty } from '../../components/HabitBlock';
import { Header } from '../../components/Header';
import { PageLoad } from '../../components/Loading/PageLoad';
import { SearchBar } from '../../components/SearchBar';
import { Habit } from '../api/data/data';

const Habits = () => {
    const { isError, isLoading, data: habitsData, error, refetch } = useQuery(
        'fetchHabits',
        fetchHabits
    );
    if (isError) {
        return `Error returning data, ${error}`;
    }
    if (isLoading) {
        return <PageLoad />;
    }
    return (
        <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <Header />
            <SearchBar />
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-8 gap-4">
                {habitsData.map((habit) => {
                    return <HabitBlock key={habit.id} {...habit} />;
                })}
                <HabitBlockEmpty refetch={refetch} />
            </ul>
        </section>
    );
};

// Make a hook like this to fetch any data and also handle the error
function usePosts() {
    return useQuery('posts', async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
            throw new Error('Unable to fetch habits');
        }
        const { data } = await res.json();
        return data;
    });
}

const fetchHabits = async (): Promise<Habit[]> => {
    const res = await fetch(`http://localhost:3002/api/habits/`);
    if (!res.ok) {
        throw new Error('Unable to fetch habits');
    }
    const { data } = await res.json();
    return data;
};

export default Habits;
