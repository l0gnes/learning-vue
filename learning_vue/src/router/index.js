import Vue from 'vue';
import VueRouter from 'vue-router';
import Hometown from '@/views/Hometown.vue';
import Audio from '@/views/MusicPlayer.vue';
import UserList from '@/views/UserList.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/hometown',
		name: 'Hometown',
		component: Hometown
	},
	{
		path: '/audio',
		name: 'Audio',
		component: Audio
	},
	{
		path: '/users',
		name: 'Users',
		component: UserList
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
