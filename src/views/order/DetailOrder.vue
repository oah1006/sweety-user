<template>
  <Header />
  <LayoutProfile>
    <template #sidebar>
      <SidebarProfile />
    </template>
    <template #information>
      <LayoutOrderDetail :status="order.status" :createdAt="order.created_at">
        <template #process-status-order>
          <ProcessStatusOrder :status="order.status"></ProcessStatusOrder>
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
            <LayoutTableOrder :nameProduct="item.product?.name" :quantity="item.quantity" :unitPrice="item.unit_price"
            ></LayoutTableOrder>
          </div>
        </template>
        <template #summary-order>
          <LayoutSummaryOrder v-if="order" :createdAt="order.created_at" :total="order?.total" :subTotal="order?.sub_total"
                              :shippingFee="order?.shipping_fee" :coupon="order.coupon?.is_percent_value"
          ></LayoutSummaryOrder>
        </template>
      </LayoutOrderDetail>
    </template>
  </LayoutProfile>
</template>

<script setup>

import Header from '@/components/home/Header.vue'
import SidebarProfile from "@/components/home/SidebarProfile.vue";
import LayoutProfile from "@/components/layout/LayoutProfile.vue";
import LayoutOrderDetail from "@/components/layout/LayoutOrderDetail.vue";
import ProcessStatusOrder from "@/components/ProcessStatusOrder.vue";
import LayoutInformation from "@/components/layout/LayoutInformation.vue";
import LayoutTableOrder from "@/components/layout/LayoutTableOrder.vue";
import LayoutSummaryOrder from "@/components/layout/LayoutSummaryOrder.vue";
import LayoutBoxInformationOrder from "@/components/layout/LayoutBoxInformationOrder.vue";
import {useDetailOrderApi} from "@/repositories/order";
import {ref} from "vue";

const order = ref({});

function getData() {
  useDetailOrderApi()
      .then((response) => {
        console.log(response.data.data)
        order.value = response.data.data
      })
}

getData()


</script>