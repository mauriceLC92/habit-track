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
    year: number;
    month: Month;
    date: string;
    day: number;
    habit: string;
    note?: string;
    complete: boolean;
    userId: number;
}

export interface Habit {
    id: number;
    year: number;
    month: Month;
    date: string;
    day: number;
    habit: string;
    note?: string;
    complete: boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}
