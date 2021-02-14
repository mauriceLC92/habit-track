import { useQuery } from 'react-query';
import { Habit } from '../../api/habits/domain/habits';

// Make a hook like this to fetch any data and also handle the error
export const usePosts = () => {
    return useQuery('posts', async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
            throw new Error('Unable to fetch habits');
        }
        const { data } = await res.json();
        return data;
    });
};

export const fetchHabits = async (): Promise<Habit[]> => {
    const res = await fetch(
        `${
            process.env.NEXT_PUBLIC_LOCAL_URL || process.env.NEXT_PUBLIC_DEV_URL
        }/habits`
    );
    if (!res.ok) {
        throw new Error('Unable to fetch habits');
    }
    const habits = await res.json();
    return habits;
};
