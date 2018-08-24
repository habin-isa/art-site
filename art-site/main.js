import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './app';
import store from './store';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    store, 
    template: '<App/>',
    components: { App },
});