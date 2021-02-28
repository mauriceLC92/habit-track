import axios from 'axios';
import { format, getDaysInMonth, getMonth, getYear } from 'date-fns';
import { useSession } from 'next-auth/client';
import { useState } from 'react';
import { useMutation } from 'react-query';

interface ICreateHabitBlock {
    refetch: () => void;
}

export interface IUser {
    id: number;
    [key: string]: any;
}

export const CreateHabitBlock = ({ refetch }: ICreateHabitBlock) => {
    const [session] = useSession();
    const [habit, setHabit] = useState('');
    const userId = (session.user as IUser).id;
    const handleHabitChange = (e: React.FormEvent) => {
        e.preventDefault();
        const element = e.target as HTMLTextAreaElement;
        setHabit(element.value);
    };
    const addHabits = useMutation(
        async (newHabits: any[]) => {
            console.log('newHabits', newHabits);
            return axios.post(
                `${
                    process.env.NEXT_PUBLIC_LOCAL_URL ||
                    process.env.NEXT_PUBLIC_DEV_URL
                }/habits`,
                newHabits
            );
        },
        {
            onSuccess: () => refetch(),
        }
    );
    return (
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg
                        className="h-6 w-6 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                    >
                        Create a new habit to track
                    </h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            What will you be turning into a habit?
                        </p>
                        <div>
                            <label
                                htmlFor="habit"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Habit
                            </label>
                            <input
                                onChange={(e) => handleHabitChange(e)}
                                type="text"
                                name="habit"
                                id="habit"
                                placeholder="running"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-6">
                <button
                    onClick={async () =>
                        addHabits.mutate(newHabits(habit, userId))
                    }
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                    Create habit
                </button>
            </div>
        </div>
    );
};

const getMonthAsWord = () => format(new Date(), 'MMMM').toLowerCase();
const getDisplayDate = (index: number) => {
    const today = new Date();
    const year = getYear(today);
    const month = getMonth(today);
    return format(new Date(year, month, index + 1), 'dd/MM/yyyy');
};

export const newHabits = (habit: string, userId: number) => {
    return new Array(getDaysInMonth(new Date())).fill(1).map((_, index) => {
        return {
            year: 2021,
            month: getMonthAsWord(),
            day: index + 1,
            date: getDisplayDate(index),
            habit,
            complete: false,
            userId,
        };
    });
};
