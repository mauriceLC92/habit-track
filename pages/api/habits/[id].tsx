import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '../../../lib/prisma';

const getHabit = async (id: string) =>
    await prisma.habits.findUnique({
        where: {
            id,
        },
    });

const handler = nc<NextApiRequest, NextApiResponse>()
    // .get((req, res) => {
    //     const habit = getHabit(req.query.id as string);

    //     if (!habit) {
    //         res.status(404);
    //         res.end();
    //         return;
    //     }

    //     res.json({ data: habit });
    // })
    .patch(async (req, res) => {
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
                ...req.body,
            },
        });
        res.json(updatedHabit);
    });
// .delete((req, res) => {
//     const habit = getHabit(req.query.id as string);

//     if (!habit) {
//         res.status(404);
//         res.end();
//         return;
//     }
//     const i = habits.findIndex((n) => n.id === req.query.id);

//     habits.splice(i, 1);

//     res.json({ data: req.query.id });
// });

export default handler;
