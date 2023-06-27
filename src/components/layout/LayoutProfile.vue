<template>
  <div class="lg:mx-32 md:mx-4 mx-10 py-6 mb-44">
    <div class="border-b border-zinc-300 ">
      <p class="text-2xl font-bold">Hồ sơ cá nhân</p>
    </div>
    <div class="lg:flex md:flex md:gap-10 lg:gap-36 xl:gap-56">
      <div class="flex-none">
        <slot name="sidebar"></slot>
      </div>
      <div class="grow">
        <slot name="information"></slot>
      </div>
    </div>
  </div>
</template>