<template>
  <input type="text" name="qty" v-model="qty"
         class="form-input w-7 px-1 py-0 text-center rounded-full">
</template>

<script setup>

import {computed} from "vue";

const props = defineProps({
  modelQty: String
})

const emits = defineEmits(['update:modelQty'])

const qty = computed({
  get: () => props.modelQty,

  set: (value) => emits('update:modelQty', value)
})

</script>