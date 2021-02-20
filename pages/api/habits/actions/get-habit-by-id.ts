import { prisma } from '../../../../lib/prisma';

export const getHabit = async (id: string) =>
    await prisma.habits.findUnique({
        where: {
            id,
        },
    });
