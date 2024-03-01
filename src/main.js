import { createApp } from 'vue';
import App from './App.vue'; // Assuming this is your root component
import { createRouter, createWebHistory } from 'vue-router';
import './assets/main.css';

// Import your components
import Home from './views/HomeView.vue';
import Admin from './views/AdminView.vue';
import About from './views/AboutView.vue';
import Menu from './views/MenuView.vue';
import History from './components/HistoryView.vue';
import Location from './components/LocationsView.vue';
import Delivery from './components/DeliveryView.vue';

// Create routes
const routes = [
  { path: '/',name: 'homeLink', components:{
    default: Home,
    history: History,
    location:Location,
  }  },
  { path: '/about', name: 'aboutLink', component: About, children:[
    {path:'history', name: 'historyLink', component:History},
    {path:'location', name: 'locationLink', component:Location},
    {path:'delivery', name: 'deliveryLink', component:Delivery},

  ]  },
  { path: '/admin', name: 'adminLink', component: Admin },
  { path: '/menu', name: 'menuLink', component: Menu }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Create and mount the app instance
createApp(App)
  .use(router) // Use the router instance
  .mount('#app');
