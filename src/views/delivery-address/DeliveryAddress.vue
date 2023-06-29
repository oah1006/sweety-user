<template>
  <div v-if="!isLoadingPage">
    <Header />
    <LayoutProfile>
      <template #sidebar>
        <SidebarProfile />
      </template>
      <template #information>
        <LayoutDeliveryAddress >
          <template #delivery-address>
            <div v-for="delivery_address in delivery_addresses" :key="delivery_address?.id">
              <BoxDeliveryAddress v-if="delivery_address" @use-click-redirect-update="useClickRedirectUpdate"
                                  :street="delivery_address?.street" :street_number="delivery_address?.street_number"
                                  :ward="delivery_address?.ward.full_name" :district="delivery_address?.district.full_name"
                                  :province="delivery_address?.province?.full_name" :phone_number="delivery_address?.phone_number"
                                  :isDefault="delivery_address?.is_default" @change-is-default="changeIsDefault"
                                  :id="delivery_address?.id"
                                  :name="delivery_address?.name" @show-modal="showModal">

              </BoxDeliveryAddress>
              <p v-else>Hết hàng</p>
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
  useChangeIsDefaultDeliveryAddressApi,
  useDeleteDeliveryAddressApi,
  useIndexDeliveryAddressApi
} from "@/repositories/delivery-address";
import { ref, watch } from "vue";
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
        delivery_addresses.value = response.data.data

        isLoadingPage.value = false
      })
}


function changeIsDefault(id) {
  useChangeIsDefaultDeliveryAddressApi(id)
      .then((response) => {
        useToastStore().success('Cập nhật địa chỉ mặc định thành công', 3000)
        getData()
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