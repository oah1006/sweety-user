<template>
  <div class="mx-32 py-6">
    <div class="border-b border-zinc-300">
      <p class="text-lg text-zinc-500 font-bold">Menu / Sản phẩm / <span class="text-2xl text-black font-bold text-zinc-700">Trà sữa hạt nhân</span> </p>
    </div>
    <div class="flex gap-14 px-4 py-10">
      <div class="flex-none w-1/2">
        <slot name="image"></slot>
      </div>
      <div class="grow w-1/2">
        <slot name="information"></slot>
      </div>
    </div>
    <div>
      <slot name="description"></slot>
    </div>
    <div>
      <slot name="related-product">

      </slot>
    </div>
    <slot name="loading"></slot>
  </div>
</template>