import { UUID } from '../../lib/uuid';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import { format } from 'date-fns';
import { DbHabit, Month } from '../../pages/api/habits/domain/habits';

// This array is actually of type DbHabit[] but we only add the ID once it has been created in the database as an actual user
export const habits = new Array(getDaysInMonth(new Date(2021, 1)))
    .fill(1)
    .map((_, index) => {
        return {
            year: 2021,
            month: Month.february,
            day: index + 1,
            date: format(new Date(2021, 1, index + 1), 'dd/MM/yyyy'),
            habit: 'running',
            complete: false,
        };
    });
