<template>
  <div class="lg:mx-32 mx-6 py-6 mt-16">
    <div class="border-b border-zinc-300 ">
      <p class="text-2xl font-bold">Xác nhận đơn hàng</p>
    </div>
    <div class="mt-4 lg:flex md:flex gap-4">
      <div class="flex-none lg:w-2/5 md:w-2/5 lg:sticky lg:top-20 lg:h-full lg:bg-white">
        <p class="text-lg py-2 text-orange-600 font-bold">Thông tin giao hàng</p>
        <slot name="address-customer"></slot>
        <slot name="information-customer-order"></slot>
      </div>
      <div class="lg:w-3/5">
        <slot name="list-product-order"></slot>
        <slot name="button-accept"></slot>
        <p class="mt-20 text-zinc-600 border-t border-zinc-300 py-3">Hiện tại cửa hàng chỉ có phương thức thanh toán là trả tiền mặt sau khi nhận hàng, mong quý khách thông cảm và trải nghiệm dịch vụ thật tốt của chúng tôi</p>
      </div>
    </div>
    <slot name="modal-coupon"></slot>
  </div>
</template>