import Vue from 'vue';
import VueRouter from 'vue-router';
import AlbumList from '../components/albumList.vue';
Vue.use(VueRouter)

const routes = [{ path: '/album/:id', name:'AlbumId', component: { AlbumList } }];

const router = new VueRouter({
	mode: 'history', 
	routes,
});

export default router;
