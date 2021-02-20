import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '../../../lib/prisma';
import { getHabit } from './actions/get-habit-by-id';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
    const habitId = req.query.id as string;
    const habit = await getHabit(habitId);

    if (!habit) {
        res.status(400).json({
            error: `No habit found with ID: ${habitId}`,
        });
        res.end();
    }
    return res.json(habit);
});

handler.patch(async (req, res) => {
    const habitId = req.query.id as string;
    const habit = getHabit(habitId);
    if (!habit) {
        res.status(404);
        res.end();
        return;
    }
    const updatedHabit = await prisma.habits.update({
        where: {
            id: habitId,
        },
        data: {
            updatedAt: new Date(),
            ...req.body,
        },
    });
    res.json(updatedHabit);
});

export default handler;
