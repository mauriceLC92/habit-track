import prisma from '../lib/prisma';
import { DbHabit } from '../pages/api/habits/domain/habits';
import { users } from './seed-data/001-users';
import { habits } from './seed-data/002-habits';

// @ts-ignore
const tables: string[] = Object.keys(prisma._dmmf.mappingsMap).map(
    (modelName) => `${modelName.toLowerCase()}s`
);
const main = async () => {
    for (const table of tables) {
        await prisma.$queryRaw(`
            DELETE FROM ${table};
        `);
    }
    // await prisma.$queryRaw(`
    // DELETE FROM users;
    // `);
    // await prisma.$queryRaw(`
    // DELETE FROM habits;
    // `);

    // for (const user of users) {
    //     await prisma.user.create({
    //         data: user,
    //     });
    // }
    const userData = {
        email: 'mauricelecordier@gmail.com',
        password: '1234567890',
        name: 'Maurice',
        surname: 'Le Cordier',
    };

    const newUser = await prisma.user.create({
        data: userData,
    });

    for (const habit of habits) {
        await prisma.habit.create({
            data: {
                userId: newUser.id,
                ...habit,
            },
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
