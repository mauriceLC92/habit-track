import { UUID } from '../../lib/uuid';

interface DbUser {
    id: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    createdAt: Date;
    updatedAt: Date;
}

export const users: DbUser[] = [
    {
        id: new UUID().toString(),
        email: 'mauricelecordier@gmail.com',
        password: '1234567890',
        name: 'Maurice',
        surname: 'Le Cordier',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];
