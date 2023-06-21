<template>
  <div>
    <div class="flex items-center gap-8 border border-orange-500 rounded-lg px-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-20 h-20 text-orange-400">
        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
        <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
      </svg>
      <div>
        <p class="text-md font-medium">78/18a Hồ Bá Phấn, Phước Long A, quận 9, TPHCM</p>
        <p class="text-cyan-500 underline">Thay đổi</p>
      </div>
    </div>
    <div class="mt-1 border border-zinc-300 rounded-lg">
      <div v-for="delivery_address in props.delivery_addresses" :key="delivery_address.id">
        <div :class="[isCheckDeliveryAddress && delivery_address.is_default == 1 ? 'bg-orange-500' : '']" class="flex items-center gap-3 py-3 px-5">
          <svg v-if="isCheckDeliveryAddress && delivery_address.is_default == 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <p :class="[isCheckDeliveryAddress && delivery_address.is_default == 1 ? 'text-white' : '']" class="text-sm">{{ delivery_address.street_number }}
            {{ delivery_address.street }}, {{ delivery_address.ward?.name }}, {{ delivery_address.district?.name }},
            {{ delivery_address.province?.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  delivery_addresses: String,
  isCheckDeliveryAddress: Boolean,
  deliveryAddressDefault: String
})



</script>