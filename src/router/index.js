import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
	{
		path: '/',
		name: 'HomeView',
		component: HomeView
	},

	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound
	},
	{
		path: '/counter',
		name: 'counter',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Counter.vue')
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
