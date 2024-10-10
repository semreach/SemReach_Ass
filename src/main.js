import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Page/Home.vue';
import About from '@/Page/About.vue';
import Service from '@/Page/Service.vue';
import Mywork from '@/Page/Mywork.vue';
import Contact from '@/Page/Contact.vue';
import API from '@/Page/API.vue';

import i18n from '@/i18m/index.js'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Service },
    { path: '/mywork', component: Mywork },
    { path: '/contact', component: Contact },
    { path: '/api', component: API },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
