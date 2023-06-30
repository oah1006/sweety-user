<template>
  <div :class="`${props.padding} ${props.flex} ${props.border} ${props.margin}`">

    <div class="flex gap-4">
      <div class="w-1/2">
        <p :class="`${props.width}`">{{ props.name }}</p>
        <slot name="input-name"></slot>
      </div>
      <div class="w-1/2">
        <p :class="`${props.width}`">{{ props.namePhoneNumber }}</p>
        <slot name="input-phone-number"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  name: String,
  border: String,
  padding: String,
  flex: String,
  width: String,
  margin: String,
  namePhoneNumber: String,
})

</script>