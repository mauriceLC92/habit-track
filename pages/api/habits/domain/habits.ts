export enum Month {
    january = 'january',
    february = 'february',
    march = 'march',
    april = 'april',
    may = 'may',
    june = 'june',
    july = 'july',
    august = 'august',
    september = 'september',
    october = 'october',
    november = 'november',
    december = 'december',
}

export interface DbHabit {
    id: string;
    year: number;
    month: Month;
    date: string;
    day: number;
    habit: string;
    note?: string;
    complete: boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}

export interface Habit {
    id: string;
    year: number;
    month: Month;
    date: string;
    day: number;
    habit: string;
    note?: string;
    complete: boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}
