<template>
  <div :class="`${props.padding} ${props.flex} ${props.border} ${props.margin} ${position} ${group}`">
    <p :class="`${props.width}`">{{ props.name }}</p>
    <slot name="input"></slot>
    <slot name="tag"></slot>
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
  position: String,
  group: String,
})

</script>