import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',              // MySQL host (localhost if local)
    port: 3306,                     // MySQL default port
    username: 'root',               // MySQL username
    password: 'Hiru@12345',      // MySQL password
    database: 'wickrama_enterprises',      // Database name
    entities: [Product], // Path to entity files
    synchronize: true,  // Set to false in production, use migrations instead
    
  }),
  ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})



export class AppModule {}
