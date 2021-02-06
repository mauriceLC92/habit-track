import { FC } from 'react';
import { format } from 'date-fns';
import { useMutation } from 'react-query';
import { Habit } from '../pages/api/data/data';
import { BadgeCheck, Pencil } from './Icons/index';

export const HabitBlock: FC<Habit> = ({ date, complete, note }) => {
    return (
        <li className="cursor-pointer">
            <a className="hover:bg-green-200 bg-green-100 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
                <div className="flex flex-col items-center space-y-2">
                    <BadgeCheck className="text-green-600 w-12 h-12" />

                    <div className="flex space-x-6 items-center">
                        <p>{date}</p>
                        <Pencil className="w-8 h-8" />
                    </div>
                </div>
            </a>
        </li>
    );
};

interface HabitBlockEmpty {
    refetch: () => void;
}

export const HabitBlockEmpty = ({ refetch }) => {
    const addHabit = useMutation(
        async (newHabit: Habit) => {
            return await fetch('http://localhost:3002/api/habits', {
                method: 'post',
                body: JSON.stringify(newHabit),
            });
        },
        {
            onSuccess: () => refetch(),
        }
    );
    return (
        <li className="hover:shadow-lg flex rounded-lg">
            <button
                onClick={() =>
                    addHabit.mutate({
                        id: Date.now().toString(),
                        date: format(new Date(), 'yyyy-MM-dd'),
                        complete: true,
                    })
                }
                className="hover:border-black hover:bg-gray-50 hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400 text-sm font-medium py-4"
            >
                {addHabit.isLoading ? 'Adding habit...' : 'Tick me!'}
            </button>
        </li>
    );
};
