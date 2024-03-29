export const site = {
    phone: '+7 996 342 8027',
    email: 'likechoco@mail.ru',
}

export const port = 3005;
export const protocol = 'http';
export const baseUrl = 'localhost';
export const apiUrl = 'http://localhost:3005';
export const siteName = 'Likechoco';

export const mysql = {
    "client": "mysql",
    "connection": {
        "host": "localhost",
        "user": "root",
        "password": "",
        "database": "like_choko"
    },
    "pool": { "min": 0, "max": 7 },
    "migrations": {
        "tableName": "knex_migrations",
        "directory": "./src/Infrastructure/SQL/Migrations"
    },
    "acquireConnectionTimeout": 60000
}

export interface ConfI {
    site: {
        phone: string;
        email: string;
    }

    port: number;
    protocol: string;
    baseUrl: string;
    apiUrl: string;

    mysql: any;
}
