import { createApp, h } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import App from './App.vue';
import InboxItemComponent from "./components/InboxItem.vue";
import SentMailComponent from "./components/SentMail.vue";
import TrashItemComponent from "./components/TrashItem.vue";
import SpamItemComponent from "./components/SpamItem.vue";

const routes = [
    { path: "", redirect: "/inbox-item" },
    { path: "/inbox-item", component: InboxItemComponent },
    { path: "/sent-mail", component: SentMailComponent },
    { path: "/trash-item", component: TrashItemComponent },
    { path: "/spam-item", component: SpamItemComponent }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app  = createApp({
    render: ()=>h(App)
});

app.use(router);

app.mount('#app');
