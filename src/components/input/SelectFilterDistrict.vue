<template>
  <select name="district" v-model="district.code"
          class="form-select left-0 top-10 mt-2 border border-zinc-300 w-full py-2 pl-4 text-slate-900">
    <option disabled value="">Vui lòng chọn dưới đây!</option>
    <option v-for="option in districts" :value="option.code" :key="option.code">{{ option.full_name }}</option>
  </select>
</template>

<script setup>
import {useIndexDistrictApi} from "@/repositories/delivery-address"

import {computed, ref, watch} from "vue";

const props = defineProps({
  modelDistrict: Object,
  modelProvince: String
})

const emits = defineEmits(['update:modelDistrict', 'update:modelCity'])

const district = computed({
  get: () => props.modelDistrict,

  set: (value) => emits('update:modelDistrict', value)
})

const provinceCode = computed({
  get: () => props.modelProvince,

  set: (value) => emits('update:modelProvince', value)
})

const districts = ref('')

function filterData() {
  if (provinceCode.value) {
    useIndexDistrictApi(provinceCode.value)
        .then((response) => {
          districts.value = response.data
        })
  }
}

watch(provinceCode, () => {
  filterData()
}, { immediate: true })



</script>