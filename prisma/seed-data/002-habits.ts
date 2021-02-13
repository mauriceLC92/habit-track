import { UUID } from '../../lib/uuid';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import { format } from 'date-fns';

interface HabitDate {
    complete: boolean;
    note: string;
    date: string;
    id: number;
}

interface DbHabit {
    id: string;
    habit: string;
    year: number;
    createdAt: Date;
    updatedAt: Date;
    january?: HabitDate[];
    february?: HabitDate[];
    march?: HabitDate[];
    april?: HabitDate[];
    may?: HabitDate[];
    june?: HabitDate[];
    july?: HabitDate[];
    august?: HabitDate[];
    september?: HabitDate[];
    october?: HabitDate[];
    november?: HabitDate[];
    december?: HabitDate[];
    userId: string;
}

const febData: HabitDate[] = new Array(getDaysInMonth(new Date(2021, 1)))
    .fill(1)
    .map((_, index) => {
        return {
            id: index,
            complete: false,
            note: '',
            date: format(new Date(2021, 1, index + 1), 'dd/MM/yyyy'),
        };
    });

const febDbData: string[] = new Array(getDaysInMonth(new Date(2021, 1)))
    .fill(1)
    .map((_, index) => {
        return JSON.stringify({
            [index]: {
                complete: false,
                note: 'Epic start to the month',
            },
        });
    });

export const habits: DbHabit[] = [
    {
        id: new UUID().toString(),
        userId: '0d6b8829-3a67-4532-ad4c-d11469cd2033',
        year: 2021,
        habit: 'running',
        createdAt: new Date(),
        updatedAt: new Date(),
        january: undefined,
        february: febData,
        march: undefined,
        april: undefined,
        may: undefined,
        june: undefined,
        july: undefined,
        august: undefined,
        september: undefined,
        october: undefined,
        november: undefined,
        december: undefined,
    },
];
