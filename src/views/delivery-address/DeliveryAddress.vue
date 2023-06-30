<template>
  <div v-if="!isLoadingPage">
    <Header />
    <LayoutProfile>
      <template #sidebar>
        <SidebarProfile />
      </template>
      <template #information>
        <LayoutDeliveryAddress>
          <template #delivery-address>
            <div v-if="delivery_addresses.length > 0">
              <div v-for="delivery_address in delivery_addresses" :key="delivery_address?.id">
                <BoxDeliveryAddress  @use-click-redirect-update="useClickRedirectUpdate"
                                    :street="delivery_address?.street" :street_number="delivery_address?.street_number"
                                    :ward="delivery_address?.ward.full_name" :district="delivery_address?.district.full_name"
                                    :province="delivery_address?.province?.full_name" :phone_number="delivery_address?.phone_number"
                                    :id="delivery_address?.id" :name="delivery_address?.name" @show-modal="showModal">
                </BoxDeliveryAddress>
              </div>
            </div>
            <div class="flex items-center justify-center w-full mt-16" v-else>
              <div class="flex flex-col items-center justify-center w-1/2 gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-zinc-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <p class="text-center text-zinc-600">Hiện tại bạn vẫn chưa có địa chỉ nào. Bạn hãy tạo địa chỉ để Sweety có thể giao hàng cho bạn nhé!</p>
              </div>
            </div>
          </template>
          <template #modal-delete>
            <ModalDelete v-if="isModal" @close="isModal = false" :itemId="idDeliveryAddress" @delete-delivery-address="deleteDeliveryAddress"></ModalDelete>
          </template>
        </LayoutDeliveryAddress>
      </template>
    </LayoutProfile>
  </div>
  <LoadingPage v-else />
  <Footer />
</template>

<script setup>

import Header from '@/components/home/Header.vue'
import LayoutProfile from "@/components/layout/LayoutProfile.vue";
import SidebarProfile from "@/components/home/SidebarProfile.vue";
import LayoutDeliveryAddress from "@/components/layout/LayoutDeliveryAddress.vue";
import BoxDeliveryAddress from "@/components/delivery_address/BoxDeliveryAddress.vue";
import LoadingPage from "@/components/LoadingPage.vue"
import ModalDelete from "@/components/ModalDelete.vue";
import Footer from "@/components/home/Footer.vue";

import {
  useDeleteDeliveryAddressApi,
  useIndexDeliveryAddressApi
} from "@/repositories/delivery-address";
import { ref } from "vue";
import {useToastStore} from "@/stores/toast";
import {useRouter} from "vue-router";



const delivery_addresses = ref();

const router = useRouter()

const isModal = ref(false)
const idDeliveryAddress = ref(null)
const isLoadingPage = ref(true)

function getData() {
  useIndexDeliveryAddressApi()
      .then((response) => {
        console.log(delivery_addresses.value)
        delivery_addresses.value = response.data.data

        isLoadingPage.value = false
      })
}

getData();

function useClickRedirectUpdate(id) {
  router.push({
    name: 'update-delivery-address',
    params: {
      id: id
    }
  })
}

function deleteDeliveryAddress(id) {
  useDeleteDeliveryAddressApi(id)
      .then((response) => {
        useToastStore().success('Xóa thành công', 3000)
        getData()
      })
}

function showModal(id) {
  isModal.value = true
  idDeliveryAddress.value = id
}

</script>