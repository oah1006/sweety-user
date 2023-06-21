<template>
    <input v-model="search" type="text" placeholder="Tra cứu ..."
           class="form-input border border-zinc-300 w-full py-1 rounded-2xl pl-4 text-slate-900" />
</template>

<script setup>

import {computed, watch} from "vue";

const props = defineProps({
  modalSearch: String,
  isLoadingListProduct: Boolean,
})

const emits = defineEmits(['update:modalSearch', 'filter-data'])

const search = computed({
  get: () => props.modalSearch,

  set: (value) => emits('update:modalSearch', value)
})

function filterData() {
  emits('filter-data')
}

watch(search, () => {
  props.isLoadingListProduct = true

  filterData()
})


</script>