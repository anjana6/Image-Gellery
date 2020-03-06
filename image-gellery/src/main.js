import Vue from 'vue';
import VueRouter from 'vue-router';
import SuiVue from 'semantic-ui-vue';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadImage from './components/UploadImage';

Vue.use(SuiVue);
Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {path:'/',component: AuthHandler},
        {path:'/image', component: ImageList},
        {path:'/upload', component:UploadImage}
    ]
})

new Vue({
    router,
    store,
    render:h => h(App)
}).$mount('#app');