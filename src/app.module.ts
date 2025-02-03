import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ✅ Makes environment variables available globally
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_EXTERNAL,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false, // Required for Render
      },
    }),
    UsersModule,
    ProductsModule,
    CategoriesModule,
    CartModule,
    AuthModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
