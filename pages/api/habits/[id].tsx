import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { habits } from '../data/data';

const getHabit = (id: string) => habits.find((habit) => habit.id === id);

const handler = nc<NextApiRequest, NextApiResponse>()
    .get((req, res) => {
        const habit = getHabit(req.query.id as string);

        if (!habit) {
            res.status(404);
            res.end();
            return;
        }

        res.json({ data: habit });
    })
    .patch((req, res) => {
        const habit = getHabit(req.query.id as string);

        if (!habit) {
            res.status(404);
            res.end();
            return;
        }

        const i = habits.findIndex((n) => n.id === req.query.id);
        const updated = { ...habit, ...req.body };

        habits[i] = updated;
        res.json({ data: updated });
    })
    .delete((req, res) => {
        const habit = getHabit(req.query.id as string);

        if (!habit) {
            res.status(404);
            res.end();
            return;
        }
        const i = habits.findIndex((n) => n.id === req.query.id);

        habits.splice(i, 1);

        res.json({ data: req.query.id });
    });

export default handler;
