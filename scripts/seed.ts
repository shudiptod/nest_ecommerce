import { createConnection } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

async function seedDatabase() {
    const connection = await createConnection();

    const sql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf-8');

    await connection.query(sql);
    console.log('Database seeded successfully');
}

seedDatabase().catch((error) => {
    console.error('Error seeding database:', error);
});



// run this file using ->> ts-node src/scripts/seed.ts
