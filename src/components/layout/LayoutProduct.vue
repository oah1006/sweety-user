<template>
  <div class="mx-10 lg:mx-32 py-6">
    <div class="border-b border-zinc-300 lg:flex md:flex sm:flex sm:items-center md:items-center lg:items-center sm:gap-4 md:gap-4 lg:gap-4 py-4">
      <p class="text-2xl font-bold lg:w-1/3 flex-none">Thực đơn</p>
      <div class="lg:w-1/3 flex-none lg:mt-0 mt-3 md:mt-0 sm:mt-0">
        <slot name="input-search"></slot>
      </div>
      <slot name="filter"></slot>
    </div>
    <div class="lg:flex lg:gap-56">
      <div class="flex-none">
        <slot name="sidebar-menu"></slot>
      </div>
      <div class="grow">
        <slot name="list-products"></slot>
      </div>
    </div>
    <slot name="loading"></slot>
  </div>
</template>