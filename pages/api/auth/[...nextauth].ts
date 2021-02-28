import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import prisma from '../../../lib/prisma';
import { Session } from 'next-auth/client';

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
    secret: process.env.SECRET,
    callbacks: {
        async signIn(user, account, profile) {
            return true;
        },
        async redirect(url, baseUrl) {
            return baseUrl;
        },
        async session(session: Session, user) {
            const userSession = {
                ...session,
                user,
            };
            // console.log('userSession', userSession);
            return userSession;
        },
        async jwt(token, user, account, profile, isNewUser) {
            return token;
        },
    },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, options);

export default Auth;
