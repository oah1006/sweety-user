<template>
  <Header></Header>
  <div>
    <LayoutCheckout v-if="!isLoadingPage">
      <template #address-customer>
        <div>
          <div class="flex items-center gap-8 border border-orange-500 rounded-lg px-4 py-2">
            <div class="w-1/5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16 text-orange-400">
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
              </svg>
            </div>
            <div>
              <p v-if="deliveryAddressDefault" class="text-sm font-medium">{{ deliveryAddressDefault?.street_number }} {{ deliveryAddressDefault?.street }}
                phường {{ deliveryAddressDefault?.ward?.name }}, {{ deliveryAddressDefault?.district?.name }},
                {{ deliveryAddressDefault?.province?.name }}</p>
              <p v-else>Hãy chọn địa chỉ</p>
              <a @click="showDeliveryAddressModal" class="text-cyan-500 underline cursor-pointer">Chọn địa chỉ</a>
            </div>
          </div>
          <div v-if="isDeliveryAddressModal" class="mt-1 border border-zinc-300 rounded-lg">
            <div v-for="delivery_address in delivery_addresses" :key="delivery_address.id">
              <div @click="chooseMyDeliveryAddressOrder(delivery_address.id, delivery_address)" :class="[deliveryAddressDefault.id == delivery_address.id ? 'bg-orange-500' : '']"
                   class="flex items-center gap-3 py-3 px-5 cursor-pointer">
                <div class="w-1/12">
                  <svg v-if="deliveryAddressDefault.id == delivery_address.id" xmlns="http://www.w3.org/2000/svg"
                       fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <p :class="[deliveryAddressDefault.id == delivery_address.id ? 'text-white' : '']"
                   class="text-sm">
                  {{ delivery_address.street_number }} {{ delivery_address.street }}, {{ delivery_address.ward?.name }},
                  {{ delivery_address.district?.name }}, {{ delivery_address.province?.name }}</p>
              </div>
            </div>
          </div>
          <div v-if="deliveryAddressDefault" class="mt-4">
            <div class="flex items-center">
              <p class="text-zinc-600">Họ tên </p>
              <p class="ml-auto font-medium">{{ deliveryAddressDefault.name }}</p>
            </div>
            <div class="flex items-center mt-2">
              <p class="text-zinc-600">Số điện thoại </p>
              <p class="ml-auto font-medium">{{ deliveryAddressDefault.phone_number }}</p>
            </div>
          </div>
        </div>
        <div class="mt-10 border-t border-sold border-zinc-300">
          <p class="text-lg mt-3 text-red-600 font-bold">Thông tin cửa hàng</p>
          <p class="mb-4 text-zinc-500 text-sm">Hệ thống sẽ tự động cập nhật cửa hàng gần với địa chỉ của bạn nhất</p>
          <div class="flex items-center gap-8 border border-red-500 rounded-lg px-4">
            <div class="w-1/5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16 text-red-500">
                <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z" clip-rule="evenodd" />
              </svg>
            </div>
            <div v-if="addressStore">
              <p class="text-sm font-medium">{{ addressStore?.address.street_number }} {{ addressStore?.address.street }}
                phường {{ addressStore?.address.ward.full_name }}, {{ addressStore?.address.district.full_name }},
                {{ addressStore?.address.province.full_name }}</p>
            </div>
            <div v-else>
              <p class="text-sm text-red-500">Khi bạn chọn địa chỉ để giao hàng, hệ thống sẽ giúp bạn chọn cửa hàng gần nhất</p>
            </div>
          </div>

        </div>
      </template>
      <template #list-product-order>
        <div class="flex items-center py-1">
          <p>Các món đã chọn</p>
          <a @click="redirectListProduct" class="ml-auto text-orange-500 underline cursor-pointer">Chọn món khác</a>
        </div>
        <div>
          <div class="border border-zinc-200 rounded-lg">
            <div v-for="item in productCarts.cart_items">
              <div>
                <div class="flex justify-between items-center py-4 lg:px-4 px-2">
                  <div class="flex gap-3">
                    <img :src="item.product?.attachment[0]?.url" class="lg:w-20 lg:h-20 w-10 h-10 object-cover" />
                    <div>
                      <p class="lg:text-lg md:text-lg text-base font-medium">{{ item.product?.name }}</p>
                      <p class="text-zinc-500 text-sm">{{ item.product_variant?.size }}</p>
                      <div v-for="item_topping in item.cart_item_options">
                        <p class="text-sm text-zinc-500">{{ item_topping.topping?.name }} x {{ item_topping?.qty }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg @click="minusToppingQty(item?.id, item?.product_id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-500 cursor-pointer">
                      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
                    </svg>
                    <div>
                      <input type="text" class="form-input w-7 px-1 py-0 text-center" v-model="item.qty" ref="input" />
                    </div>
                    <svg @click="addToppingQty(item?.id, item?.product_id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-500 cursor-pointer">
                      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="">
                    <p>{{ formatPrice(item?.totalPrice * item?.qty) }} đồng</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-4">
              <p class="text-lg font-medium">Chi tiết</p>
              <div class="flex items-center mt-3">
                <p>Thành tiền</p>
                <p class="ml-auto">{{ formatPrice(productCarts?.sub_total) }} đồng</p>
              </div>
              <div class="flex items-center mt-3">
                <p>Phí giao hàng</p>
                <p class="ml-auto">{{ formatPrice(productCarts?.shipping_fee) }} đồng</p>
              </div>
              <div class="flex items-center mt-4">
                <p>Áp dụng mã khuyến mãi</p>
                <div @click="removeCoupon()" v-if="productCarts?.coupon_id" class="ml-auto flex items-center gap-3">
                  <p @click="showModal" class="text-orange-500 underline cursor-pointer border-r border-zinc-300 pr-3">{{ productCarts.coupon.name }}</p>
                  <div class="px-2 py-1 rounded-lg border border-zinc-600 hover:bg-zinc-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <p v-else @click="showModal" class="ml-auto text-cyan-500 underline cursor-pointer">Mã khuyến mãi</p>
              </div>
              <div class="flex items-center mt-4 border-t border-zinc-300 pt-3 font-bold text-lg">
                <p>Tổng tiền</p>
                <p class="ml-auto">{{ formatPrice(productCarts?.total) }} đồng</p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #button-accept>
        <button @click="submit" class="mt-10 py-3 bg-cyan-500 rounded-lg w-full text-white font-bold">Xác nhận</button>
      </template>
      <template #modal-coupon>
        <ModalCoupon v-if="isModal" @close="isModal = false" class="z-50">
          <template #box-coupon>
            <div v-for="coupon in coupons" :key="coupon.id">
              <LayoutBoxCoupon :productCarts="productCarts"  @applyCoupon="applyCoupon" :coupon="coupon" />
            </div>
          </template>
        </ModalCoupon>
      </template>
    </LayoutCheckout>
    <LoadingPage v-else />
  </div>
  <Footer />
</template>

<script setup>
import Header from "@/components/home/Header.vue";
import LayoutCheckout from "@/components/layout/LayoutCheckout.vue";
import LoadingPage from "@/components/LoadingPage.vue";
import ModalCoupon from "@/components/ModalCoupon.vue";
import LayoutBoxCoupon from "@/components/layout/LayoutBoxCoupon.vue";

import { useAddCartItemApi, useIndexAddToCartApi, useMinusCartItemApi } from "@/repositories/cart";
import {useApplyCouponApi, useIndexCouponApi, useRemoveCouponApi} from "@/repositories/coupon";
import { useChooseMyDeliveryAddressOrder, useIndexDeliveryAddressApi} from "@/repositories/delivery-address";
import {useStoreOrderApi} from "@/repositories/order";

import {useRouter} from "vue-router";
import {ref} from "vue";
import Footer from "@/components/home/Footer.vue";
import {useToastStore} from "@/stores/toast";

const router = useRouter()

const productCarts = ref({})
const coupons = ref({})
const delivery_addresses = ref([])

const isModal = ref(false)
const isDeliveryAddressModal = ref(false)
const deliveryAddressDefault = ref([])
const selectedDeliveryAddressId = ref(null)
const addressStore = ref([])


const isLoadingPage = ref(true)

function showModal() {
  isModal.value = true
}

function showDeliveryAddressModal() {
  isDeliveryAddressModal.value = true
}

function getIndexAddToCart() {
  useIndexAddToCartApi()
      .then((response) => {
        if (response.data.data) {
          productCarts.value = response.data.data

          console.log(productCarts.value)

          if (response.data.data.address) {
            deliveryAddressDefault.value = response.data.data.address
          } else {
            deliveryAddressDefault.value = ''
          }

          if (response.data.data.store) {
            addressStore.value = response.data.data.store
          } else {
            addressStore.value = ''
          }

          const totalObject = productCarts.value.cart_items.map(item => {
            const optionsPrice = item.cart_item_options.reduce((acc, option) => acc + (option.topping.price * option.qty), 0);
            const totalPrice = optionsPrice + item.product_variant.unit_price;
            return {...item, totalPrice}
          });

          productCarts.value.cart_items = totalObject

          if (productCarts.value.cart_items.length == 0) {
            useToastStore().success('Chưa có sản phẩm nào trong giỏ hàng của bạn', 3000)
            router.push({ name: 'list-product' })
          }

          isLoadingPage.value = false
        } else {
          router.push({
            name: 'list-product'
          })
        }
      })
}


function addToppingQty(item_id, product_id) {
  productCarts.value.cart_items.find(function(item) {
    return item.id == item_id
  }).qty += 1

  useAddCartItemApi(item_id)
      .then((response) => {
        productCarts.value = response.data.data

        const totalObject = productCarts.value.cart_items.map(item => {
          const optionsPrice = item.cart_item_options.reduce((acc, option) => acc + (option.topping.price * option.qty), 0);
          const totalPrice = optionsPrice + item.product_variant.unit_price;
          return {...item, totalPrice}
        });

        productCarts.value.cart_items = totalObject
      })

}

function minusToppingQty(item_id) {
  productCarts.value.cart_items.find(function(item) {
    return item.id == item_id
  }).qty -= 1

  useMinusCartItemApi(item_id)
      .then((response) => {
        productCarts.value = response.data.data

        console.log(productCarts.value)

        const totalObject = productCarts.value.cart_items.map(item => {
          const optionsPrice = item.cart_item_options.reduce((acc, option) => acc + (option.topping.price * option.qty), 0);
          const totalPrice = optionsPrice + item.product_variant.unit_price;
          return {...item, totalPrice}
        });

        productCarts.value.cart_items = totalObject

        if(productCarts.value.cart_items.length < 1) {
          router.push({
            name: 'list-product'
          })
        }
      })
}

function getCoupon() {
  useIndexCouponApi()
      .then((response) => {
        coupons.value = response.data.data
      })
}

getIndexAddToCart()

getCoupon()

function formatPrice(price) {
  return price?.toLocaleString("vi-VN")
}

function applyCoupon(coupon_id) {
  isModal.value = false

  useApplyCouponApi(coupon_id)
      .then((response) => {
        getIndexAddToCart()
      })
}

function removeCoupon() {
  useRemoveCouponApi()
      .then((response) => {
        getIndexAddToCart()
      })
}

function getMyDeliveryAddress() {
  useIndexDeliveryAddressApi()
      .then((response) => {
        delivery_addresses.value = response.data.data
      })
}

getMyDeliveryAddress()

function chooseMyDeliveryAddressOrder(address_id, address) {
  selectedDeliveryAddressId.value = address_id
  deliveryAddressDefault.value = address

  isDeliveryAddressModal.value = false

  useChooseMyDeliveryAddressOrder(address_id)
      .then((response) => {
        getIndexAddToCart()
      })
}


function submit() {
  useStoreOrderApi()
      .then((response) => {
        router.push({
          name: 'order'
        })
      })
}

function redirectListProduct() {
  router.push({
    name: 'list-product'
  })
}



</script>