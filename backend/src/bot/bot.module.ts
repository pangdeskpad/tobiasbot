import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';
import { ChatSchema } from './schemas/chat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Chat', schema: ChatSchema }
  	])
  ],
  providers: [BotService],
  exports: [BotService],
  controllers: [BotController],
})
export class BotModule {}
