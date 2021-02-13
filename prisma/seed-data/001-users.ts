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
        id: '0d6b8829-3a67-4532-ad4c-d11469cd2033',
        email: 'mauricelecordier@gmail.com',
        password: '1234567890',
        name: 'Maurice',
        surname: 'Le Cordier',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];
