import Vue from 'vue';
import App from './App.vue';
import router from './router';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../css/reset.scss'

Vue.config.productionTip = false;

Vue.use(MintUI)

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});
/* eslint-enable no-new */
