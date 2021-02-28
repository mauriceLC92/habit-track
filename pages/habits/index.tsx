import { useSession } from 'next-auth/client';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { CreateHabitBlock, IUser } from '../../components/CreateHabitBlock';
import { HabitBlock } from '../../components/HabitBlock';
import { HabitModal } from '../../components/HabitModal';
import { Header } from '../../components/Header';
import { PageLoad } from '../../components/OverLays/PageLoad';
import { SearchBar } from '../../components/SearchBar';
import { fetchHabits } from '../../hooks/use-habits';
import { Habit } from '../api/habits/domain/habits';

const getHabitNote = (habitsData: Habit[], id: number) => {
    return habitsData.find((habit) => habit.id === id).note;
};

const Habits = () => {
    const [session] = useSession();
    const userId = (session.user as IUser).id;
    const [modalOpen, setModalOpen] = useState(false);
    const [habitId, setHabitId] = useState(null);
    const [habitNote, setHabitNote] = useState('');
    const { isError, isLoading, data: habitsData, error, refetch } = useQuery(
        ['fetchHabits', userId],
        () => fetchHabits(userId)
    );
    const toggleModal = (id: number) => {
        if (!modalOpen) {
            setHabitId(() => id);
            setHabitNote(() => getHabitNote(habitsData, id));
        }
        setModalOpen(!modalOpen);
    };
    if (isError) {
        return `Error returning data, ${error}`;
    }
    if (isLoading) {
        return <PageLoad />;
    }
    const hashabits = habitsData && habitsData.length > 0;
    return (
        <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <Header />
            <SearchBar />
            {hashabits ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-8 gap-4">
                    {habitsData.map((habit: Habit) => {
                        return (
                            <HabitBlock
                                {...habit}
                                key={habit.id}
                                toggleModal={toggleModal}
                                refetch={refetch}
                            />
                        );
                    })}
                </ul>
            ) : (
                <CreateHabitBlock refetch={refetch} />
            )}
            <HabitModal
                habitNote={habitNote}
                habitId={habitId}
                refetch={refetch}
                modalOpen={modalOpen}
                toggleModal={toggleModal}
            />
        </section>
    );
};

export default Habits;
