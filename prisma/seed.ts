import { prisma } from '../lib/prisma';
import { users } from './seed-data/001-users';
import { habits } from './seed-data/002-habits';

const main = async () => {
    await prisma.$queryRaw(`
    DELETE FROM users;
    `);
    await prisma.$queryRaw(`
    DELETE FROM habits;
    `);

    for (const user of users) {
        await prisma.users.create({
            data: user,
        });
    }

    for (const habit of habits) {
        await prisma.habits.create({
            // @ts-ignore
            data: habit,
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
