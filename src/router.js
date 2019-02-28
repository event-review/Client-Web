import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Detail from './views/EventDetail.vue'
import UserLogin from './views/UserLogin.vue'
import PromotorLogin from './views/PromotorLogin.vue'
import UserRegister from './views/UserRegister.vue'
import PromotorRegister from './views/PromotorRegister.vue'
import UserDashboard from './views/UserDashboard.vue'
import PromotorDashboard from './views/PromotorDashboard.vue'
import EventReport from './views/EventReport.vue'
import ConnectCam from './views/ConnectCam.vue'
import EditEvent from './views/EditEvent.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/user/signin',
      name: 'usersignin',
      component: UserLogin
    },
    {
      path: '/promotor/signin',
      name: 'promotorsignin',
      component: PromotorLogin
    },
    {
      path: '/user/signup',
      name: 'usersignup',
      component: UserRegister
    },
    {
      path: '/promotor/signup',
      name: 'promotorsignup',
      component: PromotorRegister
    },
    {
      path: '/user/dashboard',
      name: 'userdashboard',
      component: UserDashboard
    },
    {
      path: '/promotor/dashboard',
      name: 'promotordashboard',
      component: PromotorDashboard
    },
    {
      path: '/event/report/:id',
      name: 'eventreport',
      component: EventReport
    },
    {
      path: '/event/edit/:id',
      name: 'eventreport',
      component: EditEvent
    },
    {
      path: '/event/:id',
      name: 'eventdetail',
      component: Detail
    },
    {
      path: '/event/:id/connectcam',
      name: 'connectcam',
      component: ConnectCam
    }
  ]
})
