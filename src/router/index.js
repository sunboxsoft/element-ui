import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CollapseT from '@/components/CollapseT'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/collapset',
            name: 'CollapseT',
            component: CollapseT
        }
    ]
})