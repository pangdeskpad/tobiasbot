import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import CreateComponent from '@/components/customer/Create';
import ChatComponent from '@/components/chat/Chat';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'register' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/register', name: 'register', component: CreateComponent },
    { path: '/chat', name: 'chat', component: ChatComponent },
  ]
});