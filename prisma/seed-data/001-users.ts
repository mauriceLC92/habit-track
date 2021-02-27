interface DbUser {
    email: string;
    password: string;
    name: string;
    surname: string;
}

export const users: DbUser[] = [
    {
        email: 'mauricelecordier@gmail.com',
        password: '1234567890',
        name: 'Maurice',
        surname: 'Le Cordier',
    },
];
