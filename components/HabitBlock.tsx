import { FC } from 'react';
import { useMutation } from 'react-query';
import { BadgeCheck, Pencil } from './Icons/Icons';
import axios from 'axios';
import { useUpdateHabit } from '../pages/habits/hooks/use-habits';

interface HabitBlock {
    id: string;
    date: string;
    complete?: boolean;
    note?: string;
    toggleModal: (id: string) => void;
    refetch: () => void;
}
export const HabitBlock: FC<HabitBlock> = ({
    date,
    complete,
    id,
    note,
    toggleModal,
    refetch,
}) => {
    if (!complete) {
        return <HabitBlockEmpty id={id} refetch={refetch} />;
    }
    return (
        <li onClick={() => toggleModal(id)} className="cursor-pointer">
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

export interface HabitDto {
    complete?: boolean;
    note?: string;
}

export const HabitBlockEmpty = ({ id, refetch }) => {
    const addHabitMutation = useMutation(
        async (newHabit: HabitDto) => {
            return axios.patch(
                `${
                    process.env.NEXT_PUBLIC_LOCAL_URL ||
                    process.env.NEXT_PUBLIC_DEV_URL
                }/habits/${id}`,
                newHabit
            );
        },
        {
            onSuccess: () => refetch(),
        }
    );
    return (
        <li className="hover:shadow-lg flex rounded-lg">
            <button
                onClick={async () =>
                    addHabitMutation.mutate({
                        complete: true,
                    })
                }
                className="hover:border-black hover:bg-gray-50 hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400 text-sm font-medium py-4"
            >
                {addHabitMutation.isLoading ? 'Adding habit...' : 'Tick me!'}
            </button>
        </li>
    );
};
