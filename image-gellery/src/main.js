import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import App from './App';
import store from './store';

Vue.use(SuiVue);

new Vue({
    store,
    render:h => h(App)
}).$mount('#app');