const SnakeNamingStrategy = require('typeorm-naming-strategies')
    .SnakeNamingStrategy;

module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 9002,
    username: 'postgres',
    password: 'pass',
    database: 'development',
    synchronize: true,
    logging: false,
    entities: ['database/entity/**/*.ts'],
    migrations: ['database/migration/**/*.ts'],
    subscribers: ['database/subscriber/**/*.ts'],
    namingStrategy: new SnakeNamingStrategy(),
};
