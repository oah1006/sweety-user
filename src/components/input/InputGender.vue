<template>
  <div>
    <p>Giới tính</p>
    <div class="flex gap-1">
      <div>
        <label for="male" class="flex items-center w-full px-4 py-1 border border-gray-400 rounded-lg cursor-pointer hover:text-orange-500 hover:bg-orange-100">
          <img src="./public/images/male.png" class="w-12 h-12 object-cover mr-4" />
          <input type="radio" id="male" v-model="gender" value="1" name="gender" class="mr-1"/>
          <p>Nam</p>
        </label>
      </div>
      <div>
        <label for="female" class="flex items-center w-full px-4 py-1 border border-gray-400 rounded-lg cursor-pointer hover:text-orange-500 hover:bg-orange-100">
          <img src="./public/images/female.png" class="w-12 h-12 object-cover mr-4" />
          <input type="radio" id="female" v-model="gender" value="2" name="gender" class="mr-1"/>
          <p>Nữ</p>
        </label>
      </div>
      <div>
        <label for="others" class="flex items-center w-full px-4 py-1 border border-gray-400 rounded-lg cursor-pointer hover:text-orange-500 hover:bg-orange-100">
          <img src="./public/images/other.png" class="w-12 h-12 object-cover mr-4"/>
          <input type="radio" id="other" v-model="gender" value="0" name="gender" class="mr-1"/>
          <p>Khác</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>

import {computed, watch} from "vue";

const props = defineProps({
  modelGender: String
})

const emits = defineEmits(['update:modelGender'])

const gender = computed({
  get: () => props.modelGender,

  set: (value) => emits('update:modelGender', value)
})


</script>