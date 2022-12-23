import  Vue from 'vue'
import  VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from '../assets/js/views/App'
import Hello from '../assets/js/views/Hello'
import Home from '../assets/js/views/Home'
import blog from "../assets/js/views/blog";
import UserIndex from "../assets/js/views/UserIndex";
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/blog',
            name: 'blog',
            component: blog,
        },
        {
            path: '/user',
            name: 'user.index',
            component: UserIndex,
        },
    ]

});
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
