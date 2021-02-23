import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import prisma from '../../../lib/prisma';

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
    secret: process.env.SECRET,
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, options);

export default Auth;
