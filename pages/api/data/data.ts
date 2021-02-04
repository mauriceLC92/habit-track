import { format } from 'date-fns';
export interface Habit {
    id: string; // may make this a UUID
    date: string;
    complete: boolean;
    note: string;
}

export const habits: Habit[] = new Array(15).fill(1).map((_, i) => ({
    id: (Date.now() + i).toString(),
    date: format(new Date(), 'yyyy-MM-dd'),
    complete: false,
    note: '',
}));
