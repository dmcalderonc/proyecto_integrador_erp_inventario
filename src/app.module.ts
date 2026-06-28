import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuditoriaModule } from './auditoria/auditoria.module';
import { AuthModule } from './auth/auth.module';
import { CategoriasModule } from './categorias/categorias.module';
import { MaterialesModule } from './materiales/materiales.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { BodegasModule } from './bodegas/bodegas.module';

@Module({
  imports: [
    // Configuración global de variables de entorno (.env)
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Conexión Relacional Dual: PostgreSQL con TypeORM
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
        autoLoadEntities: true, // Carga automáticamente las entidades registradas en forFeature
        synchronize: true,     // Mantenlo en true solo para desarrollo/sprint local
      }),
    }),


    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),

    // Módulos del Sistema Core e Infraestructura
    UsersModule,
    AuditoriaModule,
    AuthModule,
    
    // Módulos del Catálogo de Inventario y Core Logístico
    CategoriasModule,
    MaterialesModule,
    ProyectosModule,
    BodegasModule,
  ],
})
export class AppModule {}