<template>
  <Header />
  <LayoutProfile>
    <template #sidebar>
      <SidebarProfile />
    </template>
    <template #information>
      <LayoutOrder>
        <template #navbar-status-order>
          <div class="mt-10">
            <ul class="flex items-center font-medium text-md text-zinc-600">
              <li @click="getData" :class="[isActiveClass == 'all' ? 'text-orange-500 !border-orange-500' : '']" class="border-b border-zinc-300 px-8 py-3 cursor-pointer">Tất cả</li>
              <li @click="filterStatusProcessing" :class="[isActiveClass == 'processing' ? 'text-orange-500 !border-orange-500' : '']" class="py-3 px-8 cursor-pointer border-b border-zinc-300">Đang thực hiện</li>
              <li @click="filterStatusDelivering" :class="[isActiveClass == 'delivering' ? 'text-orange-500 !border-orange-500' : '']" class="border-b cursor-pointer border-zinc-300 px-8 py-3 cursor-pointer">Đang vận chuyển</li>
              <li @click="filterStatusSucceed" :class="[isActiveClass == 'succeed' ? 'text-orange-500 !border-orange-500' : '']" class="border-b cursor-pointer border-zinc-300 px-8 py-3">Đã hoàn tất</li>
              <li @click="filterStatusFailed" :class="[isActiveClass == 'failed' ? 'text-orange-500 !border-orange-500' : '']" class="border-b cursor-pointer border-zinc-300 px-8 py-3">Đã hủy</li>
            </ul>
          </div>
        </template>
        <template #box-order>
          <div class="mt-4" v-for="order in orders" :key="order.id">
            <LayoutBoxOrder @use-click-redirect-detail="useClickRedirectDetail" :code="order.code" :status="order.status"
                            :createdDate="order.created_at" :orderId="order.id" :subTotal="formatPrice(order.sub_total)"
                            :items="order.items" @use-click-change-canceled-status-order="useClickChangeCanceledStatusOrder"
            ></LayoutBoxOrder>
          </div>
        </template>
      </LayoutOrder>
    </template>
  </LayoutProfile>
</template>

<script setup>

import SidebarProfile from '@/components/home/SidebarProfile.vue'
import LayoutProfile from "@/components/layout/LayoutProfile.vue";
import Header from "@/components/home/Header.vue";
import LayoutOrder from "@/components/layout/LayoutOrder.vue";
import LayoutBoxOrder from "@/components/layout/LayoutBoxOrder.vue";

import {useIndexOrderApi, useUpdateStatusCanceledOrderApi} from "@/repositories/order";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { database, refFireBase, setFireBase, onValueFireBase } from "@/stores/firebase";

const orders = ref({});

const router = useRouter()

const status = ref('');

const isActiveClass = ref('');

function getData() {
  useIndexOrderApi()
      .then((response) => {
        isActiveClass.value = 'all'
        console.log(response.data.data)

        orders.value = response.data.data.data
      })
}

const statusRef = refFireBase(database, 'order_checking/');
onValueFireBase(statusRef, (snapshot) => {
  getData()
});

function useClickRedirectDetail(id) {
  router.push({
    name: 'detail-order',
    params: {
      id: id
    }
  })
}

function useClickChangeCanceledStatusOrder(id) {
  useUpdateStatusCanceledOrderApi(id)
      .then((response) => {
        setFireBase(refFireBase(database, 'order_checking/' + id), {
          canceled: response.data.data
        });
      })
}

function formatPrice(price) {
  return price.toLocaleString("vi-VN")
}

function filterStatusDelivering() {
  isActiveClass.value = 'delivering';
  status.value = 'delivering'
  useIndexOrderApi(status.value)
      .then((response) => {
        orders.value = response.data.data.data
      })
}

function filterStatusProcessing() {
  isActiveClass.value = 'processing';
  status.value = 'processing'
  useIndexOrderApi(status.value)
      .then((response) => {
        orders.value = response.data.data.data
      })
}

function filterStatusFailed() {
  isActiveClass.value = 'failed';
  status.value = 'failed'
  useIndexOrderApi(status.value)
      .then((response) => {
        orders.value = response.data.data.data
      })
}

function filterStatusSucceed() {
  isActiveClass.value = 'succeed';
  status.value = 'succeed'
  useIndexOrderApi(status.value)
      .then((response) => {
        orders.value = response.data.data.data
      })
}



</script>