import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './component/authentication/Login.vue'
import Register from './component/authentication/Register.vue'
import All from './component/All.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	
	routes: [
		{
			path: "/login",
			component: Login,
			meta: {
				forVisitors: true
			}
		},
		{
			path: "/register",
			component: Register,
			meta: {
				forVisitors: true
			}
		},
		{
			path: "/all",
			component: All,
			meta: {
				forAuth: true
			}
		}
	],
	LinkActiveClass: 'active',
	mode: 'history'
})

export default router