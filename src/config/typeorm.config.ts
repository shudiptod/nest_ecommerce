import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Category } from '../categories/entities/categories.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432, // Ensure your database is running on this port
  username: 'ecommerce_user',
  password: 'ecommerce_user',
  database: 'ecommerce_app',
  entities: [Category], // Add other entities here
  synchronize: true, // Auto-sync schema (use false in production)
};
