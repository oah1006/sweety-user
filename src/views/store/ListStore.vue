<template>
  <div v-if="!isLoadingPage">
    <Header />
    <div class="z-20 bg-[url('./images/coffee-shop-6.jpg')] grayscale bg-cover bg-right w-full h-72 mt-20 flex items-center justify-center">
      <p class="text-white text-5xl font-bold z-30">Chi nhánh cửa hàng</p>
    </div>
    <div class="lg:flex lg:px-20 px-6 my-10">
      <div class="lg:w-1/4">
        <p class="lg:text-lg text-2xl font-bold text-zinc-800">Theo khu vực</p>
        <div class="lg:mt-4 mt-2 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
          <p @click="filterData(79)" :class="[provinceId === 79 ? '!text-orange-500' : '']" class="text-zinc-600 text-lg lg:text-base cursor-pointer">Hồ Chí Minh</p>
          <p @click="filterData(1)" :class="[provinceId === 1 ? '!text-orange-500' : '']" class="text-zinc-600 text-lg lg:text-base lg:mt-2 cursor-pointer">Hà Nội</p>
        </div>
      </div>
      <div v-if="!isLoadingListProduct" class="grow lg:w-3/4 lg:mt-0 mt-4">
        <p class="lg:text-lg text-2xl font-bold text-zinc-800">Các cửa hàng</p>
        <InputSearch class="mt-4" :isLoadingListProduct="isLoadingListProduct" @filter-data="filterData" v-model:modalSearch="search" />
        <div class="lg:grid lg:grid-cols-2 lg:gap-10 mt-5">
          <div v-for="store in stores" :key="store" class="lg:mt-0 mt-10">
            <SwiperMultipleStore class="h-72 rounded-xl" :attachments="store.attachment"></SwiperMultipleStore>
            <p class="font-bold text-lg border-b py-2 border-zinc-300">{{ store.store_name }}</p>
            <p class="mt-2 text-zinc-700">{{ store.address?.street_number }} {{ store.address?.street }}, {{ store.address?.ward.full_name }}, {{ store.address?.district.full_name }}, {{ store.address?.province.full_name }}</p>
            <p class="mt-2 text-zinc-700">Thời gian mở cửa: {{ format(store.open_store) }}: {{ format(store.close_store) }}</p>
            <div class="grid grid-cols-2 text-zinc-600">
              <div class="flex items-center gap-3 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                <p>Giao hàng nhanh</p>
              </div>
              <div class="flex items-center gap-3 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <p>Dịch vụ tốt</p>
              </div>
              <div class="flex items-center gap-3 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p>Mua mang đi</p>
              </div>
              <div class="flex items-center gap-3 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
                <p>Phục vụ tại chổ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoadingListProduct v-else />
    </div>
    <Footer />
  </div>
  <LoadingPage v-else></LoadingPage>
</template>

<script setup>
import Header from "@/components/home/Header.vue";
import InputSearch from "@/components/input/InputSearch.vue";
import Footer from "@/components/home/Footer.vue";
import LoadingPage from "@/components/LoadingPage.vue";
import LoadingListProduct from "@/components/LoadingListProduct.vue"

import { useIndexStoreApi } from "@/repositories/store";
import { ref } from "vue";
import SwiperMultipleStore from "@/components/swiper/SwiperMultipleStore.vue";


const stores = ref({})

const search = ref('')

const debounce = ref(0)

const isLoadingPage = ref(true)
const isLoadingListProduct = ref(true)
const provinceId = ref(null)

function getDataStores() {
  useIndexStoreApi()
      .then((response) => {
        stores.value = response.data.data
        isLoadingPage.value = false
        isLoadingListProduct.value = false
      })
}

getDataStores();

function format(time) {
  const [hours, minutes] = time.split(':').slice(0, 2);
  return `${hours}:${minutes}`;
}

function filterData(province_id = null) {
  clearTimeout(debounce.value)

  provinceId.value = province_id

  console.log(provinceId.value)

  debounce.value = setTimeout(() => {
    isLoadingListProduct.value = true

    useIndexStoreApi(search.value, province_id)
        .then((response) => {
          stores.value = response.data.data
          isLoadingListProduct.value = false
        })
  }, 400)
}


</script>