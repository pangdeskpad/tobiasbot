import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
  	MongooseModule.forRoot('mongodb://localhost:27017/chatbot', { useNewUrlParser: true, useUnifiedTopology: true }),
  	AuthModule,
  	UsersModule,
  	BotModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
