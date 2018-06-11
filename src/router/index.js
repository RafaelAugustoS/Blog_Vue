import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Details from '@/pages/Details'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
    	{
      		path: '/',
      		name: 'Home',
      		component: Home
    	},
    	{
    		path: '/detalhes/:slug',
    		name: 'Detalhes',
    		component: Details
    	}
  	]
})
