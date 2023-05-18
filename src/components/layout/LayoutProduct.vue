<template>
  <div class="mx-32 py-6">
    <div class="border-b border-zinc-300 flex items-center py-4">
      <p class="text-2xl font-bold w-1/3 flex-none">Thực đơn</p>
      <div class="w-1/3 flex-none">
        <slot name="input-search"></slot>
      </div>
      <slot name="filter"></slot>
    </div>
    <div class="flex gap-56">
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