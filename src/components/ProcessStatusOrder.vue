<template>
  <div class="mt-10 flex items-center lg:flex-none">
    <div class="mx-auto lg:flex lg:items-center">
      <div class="relative">
        <span v-if="props.orderTrackings?.length == 1" class="flex absolute h-4 w-4 top-0 right-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-600 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-cyan-600"></span>
        </span>
        <div :class="[props.orderTrackings?.length == 1 ? '!border-cyan-400 bg-cyan-400' : '']" class="w-20 h-20 border-2 border-zinc-300 rounded-full flex items-center justify-between">
          <svg :class="[props.orderTrackings?.length == 1 ? '!text-white' : '']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-zinc-300 mx-auto">
            <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="absolute -left-5 top-24 w-32">
          <p class="text-center">Đã đặt hàng</p>
          <p class="text-sm text-zinc-500 text-center">04/04/2023 12:00</p>
        </div>
      </div>
      <div class="border-b border-zinc-300 w-24 hidden lg:block"></div>
      <div class="relative mt-20 lg:mt-0">
        <span v-if="props.orderTrackings?.length == 2 || props.orderTrackings?.length == 3" class="flex absolute h-4 w-4 top-0 right-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-600 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-cyan-600"></span>
        </span>
        <div :class="[props.orderTrackings?.length == 2 || props.orderTrackings?.length == 3 ? '!border-cyan-500 bg-cyan-500' : '']" class="w-20 h-20 border-2 border-zinc-300 rounded-full flex items-center justify-between">
          <svg :class="[props.orderTrackings?.length == 2 || props.orderTrackings?.length == 3 ? '!text-white' : '']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-zinc-300 mx-auto">
            <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="absolute -left-5 top-24 w-32">
          <p class="text-center">Đã xác nhận</p>
          <p class="text-sm text-zinc-500 text-center">04/04/2023 12:00</p>
        </div>
      </div>
      <div class="border-b border-zinc-300 w-24 hidden lg:block"></div>
      <div class="relative mt-20 lg:mt-0">
        <span v-if="props.orderTrackings?.length == 4" class="flex absolute h-4 w-4 top-0 right-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-600 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-cyan-600"></span>
        </span>
        <div :class="[props.orderTrackings?.length == 4 ? '!border-cyan-500 bg-cyan-500' : '']" class="w-20 h-20 border-2 border-zinc-300 rounded-full flex items-center justify-between">
          <svg :class="[props.orderTrackings?.length == 4 ? '!text-white' : '']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-zinc-300 mx-auto">
            <path fill-rule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clip-rule="evenodd" />
          </svg>

        </div>
        <div class="absolute -left-5 top-24 w-32">
          <p class="text-center">Chuẩn bị xong</p>
          <p class="text-sm text-zinc-500 text-center">04/04/2023 12:00</p>
        </div>
      </div>
      <div class="border-b border-zinc-300 w-24 hidden lg:block"></div>
      <div class="relative mt-20 lg:mt-0">
        <span v-if="props.orderTrackings?.length == 5" class="flex absolute h-4 w-4 top-0 right-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-600 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-cyan-600"></span>
        </span>
        <div :class="[props.orderTrackings?.length == 5 ? '!border-cyan-500 bg-cyan-500' : '']" class="w-20 h-20 border-2 border-zinc-300 rounded-full flex items-center justify-between">
          <svg :class="[props.orderTrackings?.length == 5 ? '!text-white' : '']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-zinc-300 mx-auto">
            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
            <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
            <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
          </svg>

        </div>
        <div class="absolute -left-5 top-24 w-32">
          <p class="text-center">Đang vận chuyển</p>
          <p class="text-sm text-zinc-500 text-center">04/04/2023 12:00</p>
        </div>
      </div>
      <div class="border-b border-zinc-300 w-24 hidden lg:block"></div>
      <div class="relative mt-20 lg:mt-0">
        <span v-if="props.orderTrackings?.length == 6" class="flex absolute h-4 w-4 top-0 right-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-600 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-cyan-600"></span>
        </span>
        <div :class="[props.orderTrackings?.length == 6 ? '!border-cyan-500 bg-cyan-500' : '']" class="w-20 h-20 border-2 border-zinc-300 rounded-full flex items-center justify-between">
          <svg :class="[props.orderTrackings?.length == 6 ? '!text-white' : '']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-zinc-300 mx-auto">
            <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="absolute -left-5 top-24 w-32">
          <p class="text-center">Thành công</p>
          <p class="text-sm text-zinc-500 text-center">04/04/2023 12:00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {database, onValueFireBase, refFireBase} from "@/stores/firebase";

const props = defineProps({
  status: String,
  orderTrackings: Array
})

const emits = defineEmits(['getData'])

function getData() {
  emits('getData')
}

const statusRef = refFireBase(database, 'order_checking/');
onValueFireBase(statusRef, (snapshot) => {
  getData()
});

</script>