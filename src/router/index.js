import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import page1 from '@/components/page1'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/page1',
        name: 'page1',
        component: page1
    }]
})