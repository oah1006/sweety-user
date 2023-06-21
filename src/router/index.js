import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/views/home/Home.vue"

import Login from "@/views/auth/Login.vue"
import Register from "@/views/auth/Register.vue";
import Profile from "@/views/profile/Profile.vue";
import SendOtp from "@/views/auth/otp/SendOtp.vue";
import VerifyOtp from "@/views/auth/otp/VerifyOtp.vue";
import FogotPassword from "@/views/auth/FogotPassword.vue";

import DeliveryAddress from "@/views/delivery-address/DeliveryAddress.vue";
import CreateDeliveryAddress from "@/views/delivery-address/CreateDeliveryAddress.vue";
import UpdateDeliveryAddress from "@/views/delivery-address/UpdateDeliveryAddress.vue";

import Order from "@/views/order/Order.vue";
import DetailOrder from "@/views/order/DetailOrder.vue";

import ListProduct from "@/views/product/ListProduct.vue";
import DetailProduct from "@/views/product/DetailProduct.vue";

import Checkout from "@/views/checkout/Checkout.vue";

import ListStore from "@/views/store/ListStore.vue";

import {useProfileStore} from "@/stores/getMyProfile";
import AboutUs from "@/views/AboutUs.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
        guest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/send-otp',
      name: 'send-otp',
      component: SendOtp
    },
    {
      path: '/verify-otp',
      name: 'verifyOtp',
      component: VerifyOtp,
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: FogotPassword,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/delivery-address',
      name: 'delivery-address',
      component: DeliveryAddress,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/create-delivery-address',
      name: 'create-delivery-address',
      component: CreateDeliveryAddress,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/update-delivery-address/:id',
      name: 'update-delivery-address',
      component: UpdateDeliveryAddress,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/detail-order/:id',
      name: 'detail-order',
      component: DetailOrder,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/list-product',
      name: 'list-product',
      component: ListProduct,
    },
    {
      path: '/detail-product/:id',
      name: 'detail-product',
      component: DetailProduct,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/stores',
      name: 'stores',
      component: ListStore,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs,
      meta: {
        requiresAuth: true
      }
    }
  ],
})

router.beforeEach(async(to, from, next) => {
  const token = $cookies.get('token')

  if (to.meta.requiresAuth) {
    if (token) {
      await useProfileStore().getMyProfile().catch(() => {
        $cookies.remove('token')
        next({
          name: 'login'
        })
      })

      await useProfileStore().getMyProfile()
    }
    next();
  }
  else if (to.meta.guest) {
    if (token) {
      await useProfileStore().getMyProfile()
    } else {
      next();
    }
  } else {
    next()
  }
})



export default router
