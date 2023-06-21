<template>
    <div class="px-5 rounded-lg border border-zinc-300 py-5">
      <div class="flex gap-4 w-full items-center">
        <p @click="useClickRedirectDetail(props.orderId)" class="text-lg font-medium text-red-500 hover:underline cursor-pointer">{{ props.code }}</p>
        <PendingStatus v-if="props.status == 'pending'"></PendingStatus>
        <AcceptedStatus v-else-if="props.status == 'accepted'"></AcceptedStatus>
        <CanceledStatus v-else-if="props.status == 'canceled'"></CanceledStatus>
        <PreparingStatus v-else-if="props.status == 'preparing'"></PreparingStatus>
        <PreparedStatus v-else-if="props.status == 'prepared'"></PreparedStatus>
        <DeliveringStatus v-else-if="props.status == 'delivering'"></DeliveringStatus>
        <SuccessStatus v-else-if="props.status == 'succeed'"></SuccessStatus>
        <FailedStatus v-else></FailedStatus>
      </div>
      <div>
        <p class="mt-2 text-md">{{ props.createdDate }}</p>
        <div class="flex items-center justify-between">
          <div>
            <p v-for="item in items" :key="item.id" class="text-zinc-500 text-lg">{{ item.product.name }}</p>
          </div>
          <p class="font-medium">{{ props.subTotal }} đồng</p>
        </div>
      </div>
      <div class="flex items-center mt-3" v-if="props.status == 'pending'">
        <button @click="useClickChangeCanceledStatusOrder(props.orderId)" class="px-3 py-1 text-center bg-zinc-200 rounded-lg hover:bg-zinc-400">Hủy đơn</button>
      </div>
    </div>
</template>

<script setup>

import PendingStatus from "@/components/status/PendingStatus.vue";
import CanceledStatus from "@/components/status/CanceledStatus.vue";
import AcceptedStatus from "@/components/status/AcceptedStatus.vue";
import DeliveringStatus from "@/components/status/DeliveringStatus.vue";
import SuccessStatus from "@/components/status/SuccessStatus.vue";
import PreparingStatus from "@/components/status/PreparingStatus.vue";
import PreparedStatus from "@/components/status/PreparedStatus.vue";
import FailedStatus from "@/components/status/FailedStatus.vue";

const props = defineProps({
  code: String,
  status: String,
  createdDate: String,
  subTotal: String,
  items: String,
  orderId: String,
})

const emits = defineEmits(['use-click-change-canceled-status-order', 'use-click-redirect-detail'])

function useClickChangeCanceledStatusOrder(id) {
  emits('use-click-change-canceled-status-order', id)
}

function useClickRedirectDetail(id) {
  emits('use-click-redirect-detail', id)
}



</script>