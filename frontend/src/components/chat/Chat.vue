<template>
  <div>
    <div class="col-md-12 pageWrapper">
      <div class="row">
        <div class=" chat-wrapper">
          <div v-for="chat in chats" v-bind:key="chat.id" class="chat-holder">
            <div class="active-user message message-to">
              <span> {{ chat.query }} </span>
              <img src="../../assets/user.png" class="avatar" alt="Active user avatar">
            </div>

            <div class="bot message message-from">
              <img src="../../assets/bot.png" class="avatar" alt="Bot avatar">
              <span> {{ chat.speech }} </span>
            </div>
          </div>

        </div>

        <div class="form-group box">
          <input type="text" placeholder="Enter your message and press enter!" @keyup.enter="sendChat" class="form-control">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "../../helper";
export default {
  data() {
    return {
      chats: []
    };
  },
  created() {
    var channel = this.$pusher.subscribe('bot');
 
    channel.bind('bot-response', data => {
      const response = {
        speech: data.speech,
        query: data.query
      }
      this.chats.push(response);
    });
  },
  methods: {
    sendChat(event) {
      const chatMessage = event.target.value;

      if(event.keyCode === 13 && !event.shiftKey) {
        const chat = {
          user_id: '5ea0d01882f9995d27c65e17',
          message: chatMessage
        };

        event.target.value = "";

        axios.post(`${server.baseURL}/bot/chat`, chat)
        .then( data => {
          console.log(data);
        });
      }
    }
  }
};
</script>