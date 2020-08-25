import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import MyHeader from "./components/MyHeader.vue"
import MyFooter from "./components/MyFooter.vue"
import Index from "./views/Index.vue"
import Carousel from "./components/Carousel.vue"
import Login from "./components/Login.vue"
import Reg from "./components/Reg.vue"
import Cart from "./components/Cart.vue"
import Product from "./components/Product.vue"
import Detail from "./components/Detail.vue"
import Order from './components/Order.vue'
import Confirm from './components/Confirm.vue'
import Test from './components/Test.vue'

Vue.use(Router)
const routes = [
  {path:'/Test',component:Test},
    {
      path:'/Confirm/:lid',
      props:true,
      name:'Confirm',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Confirm" */ './components/Confirm.vue')},
    {path:'/Order',component:Order},
    {path:'/MyFooter',component:MyFooter},
    {
      path:'/detail/:lid',
      props:true,
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "details" */ './components/Detail.vue')
    },
    {path:'/Cart',component:Cart},
    {path:'/Product',component:Product},
    {path:'/Carousel',component:Carousel},
    {path:'/Index',component:Index},
    {path:'/MyHeader',component:MyHeader},
    {path:'/Login',component:Login},
    {path:'/Reg',component:Reg},
    {path:'/',component:Index}
  ]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
