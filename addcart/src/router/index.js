import Vue from 'vue'
import Router from 'vue-router'
import more from './../components/more'
import Myorders from './../components/Myorders'
import Orders from './../components/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/more',
    	component: more
    },
    {
    	path: '/Myorders',
    	component: Myorders
    },
    {
    	path: '/Orders',
    	component: Orders
    },
    {
        path:'/',
        redirect:'Orders'
    }
  ]
})
