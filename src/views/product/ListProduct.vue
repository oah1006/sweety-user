<template>
  <Header></Header>
  <LayoutProduct>
    <template #input-search>
      <InputSearch :isLoadingPage="isLoadingPage" @filter-data="filterData" v-model:modalSearch="search"></InputSearch>
    </template>
    <template #sidebar-menu>
      <div class="mt-6 text-lg text-zinc-500">
        <p @click="reset" :class="[isCategory == '' ? 'text-orange-500 !border-orange-500 underline' : '']" class="cursor-pointer">Tất cả</p>
        <div v-for="category in categories" :key="category.id">
          <p @click="filterData(category.id)" :class="[isCategory == category.id ? 'text-orange-500 !border-orange-500 underline' : '']" class="hover:text-orange-500 cursor-pointer mt-3">{{ category.name }}</p>
        </div>
      </div>
    </template>
    <template #filter>
      <div class="w-1/3 grow relative select-none">
        <div @click="showPopup" class="flex items-center flex-none cursor-pointer select-none">
          <div class="flex items-center flex-none ml-auto gap-4 border border-zinc-400 px-4 py-1 rounded-lg">
            <p class="text-md">{{ label }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
          </div>
        </div>
        <div v-if="isPopup" class="bg-white border border-zinc-400 absolute top-10 right-0">
          <p @click="filterData('', '', '')" class="hover:bg-orange-50 px-6 py-3 text-md cursor-pointer font-medium text-zinc-600">Không</p>
          <p @click="filterData('', 'price_low_to_high', '')" class="hover:bg-orange-50 px-6 py-3 text-md cursor-pointer font-medium text-zinc-600">Giá từ thấp đến cao</p>
          <p @click="filterData('', '', 'price_high_to_low')" class="hover:bg-orange-50 px-6 py-3 text-md cursor-pointer font-medium text-zinc-600">Giá từ cao đến thấp</p>
        </div>
      </div>
    </template>
    <template #list-products>
      <div class="grid grid-cols-3 gap-6 mt-6" v-if="!isLoadingPage">
        <div v-for="product in products" :key="product.id">
          <LayoutListProduct :nameProduct="product.name" :price="product.price" :url="product.attachment[0]?.url">

          </LayoutListProduct>
        </div>
      </div>
      <LoadingPage v-else></LoadingPage>
    </template>
  </LayoutProduct>
</template>
<script setup>
import LayoutProduct from "@/components/layout/LayoutProduct.vue";
import InputSearch from "@/components/input/InputSearch.vue";
import Header from "@/components/home/Header.vue";
import LayoutListProduct from "@/components/layout/LayoutListProduct.vue";

import {useIndexProductApi} from "@/repositories/product";
import { ref } from "vue";
import LoadingPage from "@/components/LoadingPage.vue";
import { useIndexCategoryApi } from "@/repositories/category";
import InputFilterPrice from "@/components/input/InputFilterPrice.vue";


const categories = ref({})

const products = ref({})

const search = ref('')

const isLoadingPage = ref(false)

const debounce = ref(0)

const isCategory = ref('')

const isPopup = ref(false)

const label = ref('Bộ lọc')

function showPopup() {
  isPopup.value = !isPopup.value
}

function getDataCategory() {
  useIndexCategoryApi()
      .then((response) => {
        categories.value = response.data.data
      })
}

getDataCategory()

function getData() {
    useIndexProductApi()
        .then((response) => {
          console.log(response.data.data.data)
          products.value = response.data.data.data
        })
}

getData()

function filterData(id = '', price_low_to_high = '', price_high_to_low = '') {
  clearTimeout(debounce.value)

  isCategory.value = id

  if (price_low_to_high == 'price_low_to_high') {
    label.value = 'Giá từ thấp đến cao'
    isPopup.value = false
  } else if (price_high_to_low == 'price_high_to_low') {
    label.value = 'Giá từ cao đến thấp'
    isPopup.value = false
  } else if (price_low_to_high == '' && price_high_to_low == '') {
    label.value = 'Bộ lọc'
    isPopup.value = false
  }

  debounce.value = setTimeout(() => {
    isLoadingPage.value = true

    useIndexProductApi(search.value, id, price_low_to_high, price_high_to_low)
        .then((response) => {
          products.value = response.data.data.data
          isLoadingPage.value = false
        })
  }, 400)
}

function reset() {
  isCategory.value = ''
  useIndexProductApi(search.value = '', '')
      .then((response) => {
        products.value = response.data.data.data
        isLoadingPage.value = false
      })
}

function priceHighToLow() {

}


</script>