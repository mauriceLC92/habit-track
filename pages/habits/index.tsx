import { useState } from 'react';
import { useQuery } from 'react-query';
import { HabitBlock } from '../../components/HabitBlock';
import { HabitModal } from '../../components/HabitModal';
import { Header } from '../../components/Header';
import { PageLoad } from '../../components/Loading/PageLoad';
import { SearchBar } from '../../components/SearchBar';
import { fetchHabits } from './hooks/use-habits';

const Habits = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
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
                    return (
                        <HabitBlock
                            id={habit.id}
                            key={habit.id}
                            date={habit.date}
                            complete={habit.complete}
                            toggleModal={toggleModal}
                            refetch={refetch}
                        />
                    );
                })}
            </ul>
            <HabitModal modalOpen={modalOpen} toggleModal={toggleModal} />
        </section>
    );
};

export default Habits;
