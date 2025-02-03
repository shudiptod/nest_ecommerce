import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432, // Change this if needed
  username: 'ecommerce_user',
  password: 'ecommerce_user',
  database: 'ecommerce_app',
  entities: ['./src/**/*.entity.ts'], // Add all your entities here
  migrations: ['./src/migrations/*.ts'],
  synchronize: true, // Set to false for migrations
});
