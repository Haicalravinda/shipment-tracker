import { createRouter, createWebHistory } from 'vue-router'
import ShipmentList from '../views/ShipmentList.vue'
import ShipmentDetail from '../views/ShipmentDetail.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: ShipmentList,
        },
        {
            path: '/shipment/:id',
            name: 'detail',
            component: ShipmentDetail,
            props: true, // Memungkinkan akses ID via props
        },
    ],
})

export default router