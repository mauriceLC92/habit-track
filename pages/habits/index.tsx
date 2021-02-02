import { HabitBlock, HabitBlockEmpty } from '../../components/HabitBlock';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';

const Habits = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <Header />
            <SearchBar />
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-8 gap-4">
                {new Array(1).fill(1).map(() => {
                    return <HabitBlock />;
                })}
                <HabitBlockEmpty />
            </ul>
        </section>
    );
};

export default Habits;
