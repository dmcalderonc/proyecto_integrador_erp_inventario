import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuditoriaModule } from './auditoria/auditoria.module';
import { AuthModule } from './auth/auth.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { InventarioModule } from './inventario/inventario.module';
import { CategoriasModule } from './categorias/categorias.module';
import { MaterialesModule } from './materiales/materiales.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { BodegasModule } from './bodegas/bodegas.module';
import { MovimientosModule } from './movimientos/movimientos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true, 
        synchronize: true, 
      }),
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),

    UsersModule,
    AuditoriaModule,
    AuthModule,
    CategoriasModule,
    MaterialesModule,
    ProyectosModule,
    BodegasModule,
    InventarioModule,
    MovimientosModule,
  ],
})
export class AppModule {}