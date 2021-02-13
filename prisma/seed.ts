import { prisma } from '../lib/prisma';
import { users } from './seed-data/01-users';

const main = async () => {
    for (const user of users) {
        await prisma.users.create({
            data: user,
        });
    }
};

main()
    .catch((e) => {
        console.log('err', e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
