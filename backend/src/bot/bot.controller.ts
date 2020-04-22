import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { BotService } from './bot.service';
import { CreateChatDTO } from './dto/create-chat.dto';

@Controller('bot')
export class BotController {
  constructor(private botService: BotService) { }

  @Post('/chat')
  async chat(@Res() res, @Body() createChatDTO: CreateChatDTO) {
    const chat = await this.botService.sendDialogue(createChatDTO);
    return res.status(HttpStatus.OK).json({
      message: "Chat has been created successfully",
      chat
    })
  }
}
