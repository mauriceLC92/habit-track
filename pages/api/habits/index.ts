import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '../../../lib/prisma';

// See here for defining custom properties on the req and res: https://www.npmjs.com/package/next-connect#typescript
const handler = nc<NextApiRequest, NextApiResponse>();
handler.get(async (req, res) => {
    const habits = await prisma.habits.findFirst({
        where: {
            userId: '0d6b8829-3a67-4532-ad4c-d11469cd2033',
            year: 2021,
        },
    });
    res.json({ data: habits });
});
// handler.post((req, res) => {
//     const id = Date.now();
//     const habit = { ...JSON.parse(req.body), id };
//     habits.push(habit);
//     res.json({ data: habit });
// });
export default handler;
