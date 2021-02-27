import prisma from '../../../../lib/prisma';

export const getHabit = async (id: number) =>
    await prisma.habit.findUnique({
        where: {
            id,
        },
    });
