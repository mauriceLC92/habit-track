import { useRouter } from 'next/router';

const Habit = () => {
    const router = useRouter();
    const { id } = router.query;
    return <>Habit {id}</>;
};

export default Habit;
