import { UUID } from '../../lib/uuid';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import { DbHabit, Month } from '../../pages/api/habits/domain/habits';
import { format } from 'date-fns';

export const habits: DbHabit[] = new Array(getDaysInMonth(new Date(2021, 1)))
    .fill(1)
    .map((_, index) => {
        return {
            id: new UUID().toString(),
            year: 2021,
            month: Month.february,
            day: index + 1,
            date: format(new Date(2021, 1, index + 1), 'dd/MM/yyyy'),
            habit: 'running',
            complete: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: '0d6b8829-3a67-4532-ad4c-d11469cd2033',
        };
    });
