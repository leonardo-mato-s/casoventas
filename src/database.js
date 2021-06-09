import { Pool } from 'pg'

export const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'root',
    database:'casoventas',
    port:5432,

});

