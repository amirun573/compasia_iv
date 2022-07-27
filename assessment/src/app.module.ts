import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

//Setup Connection to Postgres DB
@Module({
  imports: [ 
     
    TypeOrmModule.forRootAsync({
     useFactory: () => ({
       type: 'postgres',
     host: "satao.db.elephantsql.com",
     port: 5432,
     username: "sonfswua",
     password: "0e5hqErktzVrAcSPQybV1QtYaCfUpJ1l",
     database: "sonfswua",
     synchronize: true,
     autoLoadEntities : true,
     }),
     
 
   }),
     UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
