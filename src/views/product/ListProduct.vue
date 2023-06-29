<template>
  <Header></Header>
  <LayoutProduct v-if="!isLoadingPage" class="mt-14">
    <template #input-search>
      <InputSearch :isLoadingListProduct="isLoadingListProduct" @filter-data="filterData" v-model:modalSearch="search"></InputSearch>
    </template>
    <template #sidebar-menu>
      <div class="relative group z-10">
        <p class="block lg:hidden border border-zinc-400 px-2 py-2 w-44 rounded-lg mt-4 cursor-pointer">Danh mục sản phẩm</p>
        <div class="hidden lg:block group-hover:grid border border-zinc-300 lg:border-none px-4 lg:px-0 py-2 lg:py-0 mt-6 text-lg text-zinc-500 grid-cols-2 lg:grid-cols-none rounded-lg">
          <p @click="reset" :class="[isCategory == '' ? 'text-orange-500 !border-orange-500 underline' : '']" class="cursor-pointer">Tất cả</p>
          <div v-for="category in categories" :key="category.id">
            <p @click="filterData(category.id, currentSort.price_low_to_high, currentSort.price_high_to_low)" :class="[isCategory == category.id ? 'text-orange-500 !border-orange-500 underline' : '']" class="hover:text-orange-500 cursor-pointer lg:mt-3 mt-0">{{ category.name }}</p>
          </div>
        </div>
      </div>

    </template>
    <template #filter>
      <div class="w-1/3 grow relative select-none lg:mt-0 mt-3 md:mt-0 sm:mt-0">
        <div @click="showPopup" class="flex items-center flex-none cursor-pointer select-none">
          <div class="flex items-center flex-none ml-auto gap-4 border border-zinc-400 px-4 py-1 rounded-lg">
            <p class="text-md">{{ label }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
          </div>
        </div>
        <div v-if="isPopup" class="bg-white w-56 lg:w-full border border-zinc-400 absolute top-10 lg:right-10 z-50">
          <p @click="filterData(null, '', '')" class="hover:bg-orange-50 px-6 py-3 text-md cursor-pointer font-medium text-zinc-600">Không</p>
          <p @click="filterData(isCategory, 'price_low_to_high')" class="hover:bg-orange-50 px-6 py-3 text-md cursor-pointer font-medium text-zinc-600">Giá từ thấp đến cao</p>
          <p @click="filterData(isCategory, '', 'price_high_to_low')" class="hover:bg-orange-50 px-6 py-3 text-md cursor-pointer font-medium text-zinc-600">Giá từ cao đến thấp</p>
        </div>
      </div>
    </template>
    <template #list-products>
      <div class="sm:grid sm:grid-cols-2 sm:gap-3 md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-2 lg:gap-6 xl:grid xl:grid-cols-3 xl:gap-6 mt-6 flex flex-col" v-if="!isLoadingListProduct">
        <div v-for="product in products" :key="product.id" class="mx-auto">
          <LayoutListProduct :id="product.id" :product="product" :nameProduct="product.name" :price="product.price" :url="product.attachment[0]?.url">

          </LayoutListProduct>
        </div>
      </div>
      <LoadingListProduct v-else />
      <Pagination :total="pagination.total" :last-page="pagination.lastPage" v-model:modelValue="page"
                  v-model:modelBoolean="isLoadingListProduct" @get-data="getData" />
    </template>
  </LayoutProduct>
  <LoadingPage v-else></LoadingPage>
  <Footer />
</template>


<script setup>
import LayoutProduct from "@/components/layout/LayoutProduct.vue";
import InputSearch from "@/components/input/InputSearch.vue";
import Header from "@/components/home/Header.vue";
import LayoutListProduct from "@/components/layout/LayoutListProduct.vue";
import LoadingPage from "@/components/LoadingPage.vue";
import LoadingListProduct from "@/components/LoadingListProduct.vue";
import Footer from "@/components/home/Footer.vue";
import Pagination from "@/components/Pagination.vue";

import {useIndexProductApi} from "@/repositories/product";
import {onMounted, ref, watch} from "vue";
import { useIndexCategoryApi } from "@/repositories/category";


const categories = ref({})

const products = ref({})

const search = ref('')

const isLoadingPage = ref(true)
const isLoadingListProduct = ref(true)

const debounce = ref(0)

const isCategory = ref('')

const isPopup = ref(false)
const isPopupListCategory = ref(false)

const label = ref('Bộ lọc')

const currentSort = ref({
  price_low_to_high: '',
  price_high_to_low: ''
})

const page = ref(1);

const pagination = ref({
  total: null,
  lastPage: null
});


function showPopup() {
  isPopup.value = !isPopup.value
}

function showCategory() {
  isPopupListCategory.value = !isPopupListCategory.value
}

function getDataCategory() {
  useIndexCategoryApi()
      .then((response) => {
        categories.value = response.data.data
      })
}

function getData() {
    useIndexProductApi(page.value)
        .then((response) => {
          pagination.value.lastPage = response.data.data.last_page
          pagination.value.total = response.data.data.total

          products.value = response.data.data.data

          isLoadingPage.value = false
          isLoadingListProduct.value = false
        })
}

function filterData(id = null, price_low_to_high = '', price_high_to_low = '') {
  clearTimeout(debounce.value)

  isCategory.value = id

  if (price_low_to_high) {
    label.value = 'Giá từ thấp đến cao'
    isPopup.value = false
    currentSort.value.price_low_to_high = price_low_to_high
  } else if (price_high_to_low) {
    label.value = 'Giá từ cao đến thấp'
    isPopup.value = false
    currentSort.value.price_high_to_low =  price_high_to_low
  } else {
    label.value = 'Bộ lọc'
    isPopup.value = false
    currentSort.value.price_high_to_low = ''
    currentSort.value.price_low_to_high = ''
  }

  debounce.value = setTimeout(() => {
    isLoadingListProduct.value = true

    useIndexProductApi(page.value, search.value, id, currentSort.value.price_low_to_high ,currentSort.value.price_high_to_low)
        .then((response) => {
          products.value = response.data.data.data

          isLoadingListProduct.value = false
        })
  }, 400)
}

function reset() {
  isCategory.value = ''
  useIndexProductApi(page.value, search.value = '', '')
      .then((response) => {
        products.value = response.data.data.data
        isLoadingPage.value = false
      })
}


getData()
getDataCategory()



</script>