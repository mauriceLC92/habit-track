import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import prisma from '../../../lib/prisma';

// See here for defining custom properties on the req and res: https://www.npmjs.com/package/next-connect#typescript
const handler = nc<NextApiRequest, NextApiResponse>();

const defaultUserId = 1;

handler.get(async (req, res) => {
    const userId = defaultUserId;
    //todo -  need to get userId off the request
    const habits = await prisma.habit.findMany({
        where: {
            userId: 6,
        },
        orderBy: {
            day: 'asc',
        },
    });
    // if (habits.length === 0) {
    //     res.status(404).json({
    //         error: `No habits found for user with ID: ${userId}`,
    //     });
    //     res.end();
    // }
    res.json(habits);
});

handler.post(async (req, res) => {
    const habits = await prisma.habit.createMany({
        data: req.body,
    });
    res.json(habits);
});

handler.patch(async (req, res) => {
    // todo - validate the incoming body object
    const updatedHabits = await prisma.habit.updateMany({
        where: {
            userId: defaultUserId,
        },
        data: {
            ...req.body,
        },
    });

    res.json(updatedHabits);
});

export default handler;
