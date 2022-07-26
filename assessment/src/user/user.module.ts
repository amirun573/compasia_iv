import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPostEntity } from './models/post.entity';
import { UserController } from './controllers/user.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserPostEntity])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
