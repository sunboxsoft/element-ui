import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CollapseT from '@/components/CollapseT'
import vuedraggableT from '@/components/vuedraggableT'
import VFormT from '@/components/VFormT'
import FatherT from '@/components/FatherT'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/collapset',
            name: 'CollapseT',
            component: CollapseT
        },
        //vuedraggableT
        {
            path: '/vuedraggablet',
            name: 'vuedraggableT',
            component: vuedraggableT
        },
        {
            path: '/',
            name: 'VFormT',
            component: VFormT
        },
        {
            path: '/FatherT',
            name: 'FatherT',
            component: FatherT
        }
    ]
})