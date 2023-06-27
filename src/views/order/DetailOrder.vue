<template>
  <div v-if="!isLoadingPage">
    <Header />
    <LayoutProfile>
      <template #sidebar>
        <SidebarProfile />
      </template>
      <template #information>
        <LayoutOrderDetail :status="order.status" :code="order.code" :createdAt="order.created_at">
          <template #process-status-order>
            <ProcessStatusOrder @getData="getData" :orderTrackings="order.order_trackings"></ProcessStatusOrder>
          </template>
          <template #box-information-order>
            <LayoutBoxInformationOrder :name="order.address?.name" :phoneNumber="order.address?.phone_number"
                                       :streetNumber="order.address?.street_number" :street="order.address?.street"
                                       :ward="order.address?.ward.full_name" :district="order.address?.district.full_name"
                                       :province="order.address?.province.full_name" :nameDeliveryStaff="order.delivery_staff?.full_name"
                                       :phoneNumberDeliveryStaff="order.delivery_staff?.phone_number"
            ></LayoutBoxInformationOrder>
          </template>
          <template #table-order>
            <div v-for="item in order.items" :key="item.id">
              <LayoutTableOrder :nameProduct="item.product?.name" :nameSizeProduct="item.product_variant?.size"
                                :unitPriceSizeProduct="item.product_variant?.unit_price"
                                :qty="item.qty" :unitPrice="item.unit_price" :item="item"
              ></LayoutTableOrder>
            </div>
          </template>
          <template #summary-order>
            <LayoutSummaryOrder v-if="order" :createdAt="order.created_at" :total="order?.total" :subTotal="order?.sub_total"
                                :shippingFee="order?.shipping_fee" :coupon="order.coupon?.is_percent_value"
            >

            </LayoutSummaryOrder>
          </template>
        </LayoutOrderDetail>
      </template>
    </LayoutProfile>
  </div>
  <LoadingPage v-else />
  <Footer />
</template>

<script setup>

import Header from '@/components/home/Header.vue'
import SidebarProfile from "@/components/home/SidebarProfile.vue";
import LayoutProfile from "@/components/layout/LayoutProfile.vue";
import LayoutOrderDetail from "@/components/layout/LayoutOrderDetail.vue";
import ProcessStatusOrder from "@/components/ProcessStatusOrder.vue";
import LayoutTableOrder from "@/components/layout/LayoutTableOrder.vue";
import LayoutSummaryOrder from "@/components/layout/LayoutSummaryOrder.vue";
import LayoutBoxInformationOrder from "@/components/layout/LayoutBoxInformationOrder.vue";

import {useDetailOrderApi} from "@/repositories/order";
import {ref} from "vue";
import Footer from "@/components/home/Footer.vue";
import LoadingPage from "@/components/LoadingPage.vue";
import {useRoute, useRouter} from "vue-router";


const order = ref({});

const isLoadingPage = ref(true)

const route = useRoute()

const id = route.params.id

function getData() {
  useDetailOrderApi(id)
      .then((response) => {
        order.value = response.data.data

        console.log(order.value)

        const totalObject = order.value.items.map(item => {
          const optionsPrice = item.order_item_options.reduce((acc, option) => acc + (option.topping.price * option.qty), 0);
          const totalPrice = optionsPrice + item.product_variant.unit_price;
          return {...item, totalPrice}
        });

        order.value.items = totalObject

        isLoadingPage.value = false
      })
}

getData()



</script>