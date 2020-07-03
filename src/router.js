import Vue from 'vue'
import Router from 'vue-router'
import index from './view/index'
import regist from './view/regist'
import login from './view/login'
import detail from './view/detail'
import menulist from './components/menulist'

Vue.use(Router);//使用路由

export default new Router({
    routes:[
        {path:'/',
            component:index
        },
        {
            path:'/regist',
            component:regist
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/detail',
            component:detail
        },
        {
            path:'/menulist',
            component:menulist
        }
        ]
})
