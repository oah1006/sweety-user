<template>
  <div class="mx-32 py-6 mb-44">
    <div class="border-b border-zinc-300 ">
      <p class="text-2xl font-bold">Hồ sơ cá nhân</p>
    </div>
    <div class="flex gap-56">
      <div class="flex-none">
        <slot name="sidebar"></slot>
      </div>
      <div class="grow">
        <slot name="information"></slot>
      </div>
    </div>
  </div>
</template>