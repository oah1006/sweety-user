<template>
  <Header></Header>
  <LayoutDetailProduct :nameProduct="product.name" v-if="!isLoadingPage" class="mt-14">
    <template #image>
      <div>
        <img :src="url" class="lg:w-full lg:h-[550px] md:w-96 md:h-96 object-cover rounded-lg" />
      </div>
    </template>
    <template #information>
      <div>
        <p class="lg:text-4xl text-2xl font-bold text-zinc-600 lg:mt-0 mt-4">{{ product.name }}</p>
        <p class="text-red-500 text-2xl mt-3 font-bold">{{ formatPrice(product.price) }} đồng</p>
      </div>
      <div class="mt-6">
        <p class="text-xl">Chọn size</p>
        <div class="flex items-center gap-2 mt-2">
          <div v-for="size in product.product_variants" :key="size">
            <a @click="addVariantObject(size.id, size.unit_price)" :class="[size.id == cart.product_variant_id ? 'bg-orange-500' : '']"  class="lg:px-8 px-6 py-2 border border-zinc-300 rounded-lg flex items-center gap-2 text-zinc-600">
              <svg :class="[size.id == cart.product_variant_id ? '!text-white' : '']" class="text-zinc-500" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M17.883 2a2 2 0 0 1 1.988 2.22l-1.778 16A2 2 0 0 1 16.105 22h-8.21a2 2 0 0 1-1.988-1.78l-1.777-16A2 2 0 0 1 6.117 2h11.766ZM13 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-3-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm7.883-8H6.117l.425 3.823l.187-.033c.26-.044.561-.08.9-.1c1.128-.067 2.663.057 4.43.753l.335.138c1.492.64 2.765.772 3.681.741l1.224-.068L17.883 4Z"/></g></svg>
              <p :class="[size.id == cart.product_variant_id ? '!text-white' : '']">{{ size.size }}</p>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <p class="text-xl">Topping</p>
        <div v-for="topping in toppings" :key="topping.id">
          <form class="w-full relative mt-2">
            <div :class="[topping.qty > 0 ? 'bg-orange-100' : '']" class="w-full text-orange-900 rounded-lg border border-orange-300 py-2 flex items-center gap-2 grow px-4">
              <div>
                <svg v-if="topping.qty > 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 bg-white text-orange-500 rounded-full">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="lg:flex lg:items-center lg:gap-2 w-full">
                <div class="flex items-center gap-2 w-full select-none">
                  <p class="text-lg">{{ topping.name }}</p>
                  <p class="text-lg">+ {{ formatPrice(topping.price) }} đồng</p>
                </div>
                <div class="flex items-center gap-3">
                  <svg @click="minusToppingQty(topping.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-500 cursor-pointer">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <span class="select-none">{{ topping.qty }}</span>
                  </div>
                  <svg @click="addToppingQty(topping.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-500 cursor-pointer">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
        <button v-if="!isModalRequireLogin" @click="addToCart" class="px-4 py-3 bg-cyan-500 rounded-lg text-white mt-14 w-full flex items-center gap-4 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <p class="text-lg font-bold">Thêm vào giỏ hàng</p>
        </button>
        <ModalRequireLogin v-else @close="isModalRequireLogin = true"/>
      </div>
    </template>
    <template #description>
      <div class="border-y border-zinc-300 py-6 lg:px-0 px-4">
        <div>
          <p class="text-2xl text-zinc-800 font-bold">Mô tả sản phẩm</p>
          <p class="mt-2 text-zinc-600">{{ product.description }}</p>
        </div>
      </div>
    </template>
    <template #related-product>
      <div class="py-6 lg:px-0 px-4">
        <p class="text-2xl text-zinc-800 font-bold">Sản phẩm liên quan</p>
        <div class="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 mt-4 lg:justify-center flex flex-col lg:flex-none">
          <div @click="useClickRedirectDetail(product.id)" v-for="product in relatedProduct" :key="product.id" class="cursor-pointer mx-auto flex flex-col items-center lg:items-start lg:flex-none">
            <img :src="product.attachment[0]?.url" class="w-64 h-64 object-cover rounded-lg" />
            <p class="font-medium lg:text-2xl mt-3 font-bold w-56 text-center lg:text-left">{{ product.name }}</p>
            <p class="text-red-600 font-medium text-lg font-bold">{{ formatPrice(product.price) }} đồng</p>
          </div>
        </div>
      </div>
    </template>
  </LayoutDetailProduct>
  <LoadingPage v-else />
  <Footer />
</template>

<script setup>

import Header from "@/components/home/Header.vue";
import LayoutDetailProduct from "@/components/layout/LayoutDetailProduct.vue";
import {useGetProductInformation, useGetRelatedProduct} from "@/repositories/product";
import { ref } from "vue";
import { useIndexToppingApi } from "@/repositories/topping";
import { useAddToCartApi } from "@/repositories/cart";
import {useRoute, useRouter} from "vue-router";
import LoadingPage from "@/components/LoadingPage.vue";
import ModalRequireLogin from "@/components/ModalRequireLogin.vue";
import Footer from "@/components/home/Footer.vue";


const router = useRouter();

const product = ref({})

const relatedProductId = ref(0)
const relatedProduct = ref({})

const url = ref('')

const isLoadingPage = ref(true)

const toppings  = ref({})
const pricePrimal = ref('')
const unitPrice = ref('')

const token = $cookies.get('token')

const isModalRequireLogin = ref(false)

const cart = ref({
  product_variant_id: '',
})

function getToppings() {
  useIndexToppingApi()
      .then((response) => {
        toppings.value = response.data.data.map(function(item) {
          item.qty = 0
          return item
        })
      })
}

getToppings()

function getDetailProduct() {
  useGetProductInformation()
      .then((response) => {
        cart.value.product_variant_id = response.data.data.product_variants[0]?.id

        product.value = response.data.data
        pricePrimal.value = response.data.data.price

        relatedProductId.value = response.data.data.category_id

        getRelatedProduct();

        isLoadingPage.value = false

        if (response.data.data.attachment.length > 0) {
          const attachments = response.data.data.attachment

          const thumbnail = attachments.find(image => image['type'] === 'thumbnails')

          url.value = thumbnail.url
        }
      })
}

function formatPrice(price) {
  return price?.toLocaleString("vi-VN")
}

getDetailProduct()

function addVariantObject(product_variant_id, unit_price) {
  cart.value.product_variant_id = product_variant_id
  unitPrice.value = unit_price

  const topping = toppings.value.filter(function(item) {
    return item.qty > 0
  })

  const totalTopping = topping.reduce((accumulator, currentProduct) => {
    return accumulator + (currentProduct.price * currentProduct.qty);
  }, 0);

  product.value.price = (totalTopping + unit_price)
}

function addToppingQty(topping_id) {
  toppings.value.find(function(item) {
    return item.id == topping_id
  }).qty += 1

  product.value.price += toppings.value.find(function(item) {
    return item.id == topping_id
  }).price
}

function minusToppingQty(topping_id) {
  if (pricePrimal.value != product.value.price && unitPrice.value != product.value.price) {
    product.value.price -= toppings.value.find(function(item) {
      return item.id == topping_id
    }).price
  }

  const topping = toppings.value.find(function(item) {
    return item.id == topping_id
  })

  if (topping.qty == 0) {
    return
  }

  toppings.value.find(function(item) {
    return item.id == topping_id
  }).qty -= 1
}

function addToCart() {
  const cartItemOptions = toppings.value.filter(function(item) {
    return item.qty > 0
  }).map(function (item) {
    return {
      'topping_id': item.id,
      'qty': item.qty
    }
  })

  useAddToCartApi(cart.value.product_variant_id, cartItemOptions)
      .then((response) => {
        router.push({ name: 'checkout' })
        isLoadingPage.value = false
      })
      .catch((error) => {
        console.log(error.response.data)
      })
}

const route = useRoute();
const id = route.params.id

function getRelatedProduct() {
  useGetRelatedProduct(relatedProductId.value, id)
      .then((response) => {
        relatedProduct.value = response.data.data
      })
}

function useClickRedirectDetail(id) {
  router.push({
    name: 'detail-product',
    params: {
      id: id
    },
    replace: true
  },)
}


</script>