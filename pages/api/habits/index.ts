import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { habits } from '../data/data';

// See here for defining custom properties on the req and res: https://www.npmjs.com/package/next-connect#typescript
const handler = nc<NextApiRequest, NextApiResponse>();
handler.get((req, res) => {
    res.json({ data: habits });
});
handler.post((req, res) => {
    const id = Date.now();
    const habit = { ...JSON.parse(req.body), id };
    habits.push(habit);
    res.json({ data: habit });
});
export default handler;
