import { Module } from '@nestjs/common';
import RedisClient from './clients/redis.client';
import TaskController from './tasks.controller';
import TaskService from './tasks.service';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService, RedisClient],
})
export class AppModule {}
