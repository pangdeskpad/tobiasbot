import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat } from './interfaces/chat.interface';
import { CreateChatDTO } from './dto/create-chat.dto';
import axios from 'axios';

@Injectable()
export class BotService {
  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = "12a6bbb6b3cb4a6595fd95ed51713384";

  constructor(@InjectModel('Chat') private readonly chatModel: Model<Chat>) { }

  async sendDialogue(createChatDTO: CreateChatDTO) {
  	const newChat = new this.chatModel(createChatDTO);
    newChat.save();

    let data = {
        query : newChat.message,
        lang: 'en',
        sessionId: '123456789!@#$%'
    }
    axios.post(`${this.baseURL}`, data, {headers: { Authorization: `Bearer ${this.token}` }})
    .then( response => {
        this.postToPusher(response.data.result.fulfillment.speech, data.query);
  	});
  }

  postToPusher(speech, query) {
    const Pusher = require('pusher');

    var pusher = new Pusher({
      appId: '986704',
      key: '58a4198819b613674f9e',
      secret: '5ff5ec8855f2bb2b7fca',
      cluster: 'eu',
      useTLS: true
    });
    const response = {
      query: query,
      speech: speech
    }

    pusher.trigger('bot', 'bot-response', response);
  }
}
