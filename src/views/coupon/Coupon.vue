<template>
  <Header />
  <LayoutProfile>
    <template #sidebar>
      <SidebarProfile></SidebarProfile>
    </template>
    <template #information>
      <LayoutCoupon>
        <template #list-coupon>
          <div class="mt-10" v-for="coupon in coupons" :key="coupon.id">
            <LayoutBoxCoupon :nameCoupon="coupon.name" :descriptionCoupon="coupon.description"></LayoutBoxCoupon>
          </div>
        </template>
      </LayoutCoupon>
    </template>
  </LayoutProfile>
</template>
<script setup>
import Header from "@/components/home/Header.vue";
import LayoutProfile from "@/components/layout/LayoutProfile.vue";
import SidebarProfile from "@/components/home/SidebarProfile.vue";
import LayoutCoupon from "@/components/layout/LayoutCoupon.vue";
import LayoutBoxCoupon from "@/components/layout/LayoutBoxCoupon.vue";

import { useIndexCouponApi } from "@/repositories/coupon";
import { ref } from "vue";

const coupons = ref({})

function getData() {
  useIndexCouponApi()
      .then((response) => {
        coupons.value = response.data.data
      })
}

getData();

</script>