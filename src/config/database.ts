import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    database: process.env.PGDATABASE,
});

export const createTables = async () => {
    // create products table
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                quantity INT NOT NULL
            );`
        );
        console.log('Products table created successfully!');
    } catch (error) {
        console.error('Error creating tables', error);
    }
};

export default pool;
