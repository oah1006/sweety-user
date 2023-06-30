<template>
    <div v-if="!isLoadingPage">
      <Header />
      <LayoutProfile>
        <template #sidebar>
          <SidebarProfile />
        </template>
        <template #information>
          <LayoutOrder>
            <template #navbar-status-order>
              <div class="mt-10">
                <ul class="flex items-center font-medium text-zinc-600">
                  <li @click="getData" :class="[isActiveClass == 'all' ? 'text-orange-500 !border-orange-500' : '']" class="border-b border-zinc-300 lg:px-8 px-2 py-3 cursor-pointer text-sm">Tất cả</li>
                  <li @click="filterStatusProcessing" :class="[isActiveClass == 'processing' ? 'text-orange-500 !border-orange-500' : '']" class="py-3 lg:px-8 px-2 cursor-pointer border-b border-zinc-300 text-sm">Đang thực hiện</li>
                  <li @click="filterStatusDelivering" :class="[isActiveClass == 'delivering' ? 'text-orange-500 !border-orange-500' : '']" class="border-b cursor-pointer border-zinc-300 lg:px-8 px-2 py-3 cursor-pointer text-sm">Đang vận chuyển</li>
                  <li @click="filterStatusSucceed" :class="[isActiveClass == 'succeed' ? 'text-orange-500 !border-orange-500' : '']" class="border-b cursor-pointer border-zinc-300 lg:px-8 px-2 py-3 text-sm">Đã hoàn tất</li>
                  <li @click="filterStatusFailed" :class="[isActiveClass == 'canceled' ? 'text-orange-500 !border-orange-500' : '']" class="border-b cursor-pointer border-zinc-300 lg:px-8 px-2 py-3 text-sm">Đã hủy</li>
                </ul>
              </div>
            </template>
            <template #box-order>
              <div v-if="orders.length > 0">
                <div class="mt-4" v-for="order in orders" :key="order.id" v-if="!isLoadingListProduct">
                  <LayoutBoxOrder @use-click-redirect-detail="useClickRedirectDetail" :code="order.code" :status="order.status"
                                  :createdDate="order.created_at" :orderId="order.id" :subTotal="formatPrice(order.sub_total)"
                                  :items="order.items" @use-click-change-canceled-status-order="useClickChangeCanceledStatusOrder"
                  ></LayoutBoxOrder>
                </div>
                <LoadingListProduct v-else />
              </div>
              <div class="flex items-center justify-center w-full mt-16" v-else>
                <div class="flex flex-col items-center justify-center w-1/2 gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-zinc-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                  </svg>
                  <p class="text-center text-zinc-600">Hiện tại chưa có hóa đơn nào đang ở trạng thái này!</p>
                </div>
              </div>
              <Pagination class="mt-4" :total="pagination.total" :last-page="pagination.lastPage" v-model:modelValue="page"
                          v-model:modelBoolean="isLoadingListProduct" @get-data="getData"/>
            </template>
          </LayoutOrder>
        </template>
      </LayoutProfile>
    </div>
  <LoadingPage v-else />
  <Footer />
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
import Footer from "@/components/home/Footer.vue";
import LoadingPage from "@/components/LoadingPage.vue";
import Pagination from "@/components/Pagination.vue";
import LoadingListProduct from "@/components/LoadingListProduct.vue"

const orders = ref({});

const router = useRouter()

const status = ref('');

const isActiveClass = ref('');
const isLoadingPage = ref(true)
const isLoadingListProduct = ref(true)

const page = ref(1);
const debounce = ref(0)

const pagination = ref({
  total: null,
  lastPage: null
});

function getData() {
  clearTimeout(debounce.value)

  debounce.value = setTimeout(() => {
    isLoadingListProduct.value = true

    useIndexOrderApi(page.value)
        .then((response) => {
          pagination.value.lastPage = response.data.data.last_page
          pagination.value.total = response.data.data.total

          isActiveClass.value = 'all'
          orders.value = response.data.data.data

          isLoadingPage.value = false
          isLoadingListProduct.value = false
        })
  }, 400)
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
  page.value = 1
  clearTimeout(debounce.value)

  isActiveClass.value = 'delivering';
  status.value = 'delivering'

  debounce.value = setTimeout(() => {
    isLoadingListProduct.value = true

    useIndexOrderApi(page.value, status.value)
        .then((response) => {
          pagination.value.lastPage = response.data.data.last_page
          pagination.value.total = response.data.data.total

          orders.value = response.data.data.data
          isLoadingListProduct.value = false
        })
  }, 400)
}

function filterStatusProcessing() {
  page.value = 1
  clearTimeout(debounce.value)

  isActiveClass.value = 'processing';
  status.value = 'processing'

  debounce.value = setTimeout(() => {
    isLoadingListProduct.value = true

    useIndexOrderApi(page.value, status.value)
        .then((response) => {
          pagination.value.lastPage = response.data.data.last_page
          pagination.value.total = response.data.data.total

          orders.value = response.data.data.data
          isLoadingListProduct.value = false
        })
  }, 400)
}

function filterStatusFailed() {
  page.value = 1
  clearTimeout(debounce.value)

  isActiveClass.value = 'canceled';
  status.value = 'canceled'

  debounce.value = setTimeout(() => {
    isLoadingListProduct.value = true

    useIndexOrderApi(page.value, status.value)
        .then((response) => {
          pagination.value.lastPage = response.data.data.last_page
          pagination.value.total = response.data.data.total

          orders.value = response.data.data.data
          isLoadingListProduct.value = false
        })
  }, 400)
}

function filterStatusSucceed() {
  page.value = 1
  clearTimeout(debounce.value)

  isActiveClass.value = 'succeed';
  status.value = 'succeed'

  debounce.value = setTimeout(() => {
    isLoadingListProduct.value = true

    useIndexOrderApi(page.value, status.value)
        .then((response) => {
          pagination.value.lastPage = response.data.data.last_page
          pagination.value.total = response.data.data.total

          orders.value = response.data.data.data
          isLoadingListProduct.value = false
        })
  }, 400)
}

getData()

</script>