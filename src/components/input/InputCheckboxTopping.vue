<template>

</template>


<script setup>

import {computed, watch} from "vue";

const props = defineProps({
  name: String,
  price: Number,
  modalTopping: Array,
  idTopping: String,
  cartOptions: Array
})


const emits = defineEmits(['update:modalTopping', 'minus-qty', 'add-qty'])

const checkNames = computed({
  get: () => props.modalTopping,

  set: (value) => emits('update:modalTopping', value)
})

watch(checkNames, () => {

})

function addQty() {
  emits('add-qty')
}

function minusQty() {
  emits('minus-qty')
}





</script>