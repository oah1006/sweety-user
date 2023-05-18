<template>
  <Header></Header>
  <LayoutDetailProduct>
    <template #image>
      <div>
        <img src="images/product-4.jpg" class="w-full h-[550px] object-cover rounded-lg" />
      </div>
    </template>
    <template #information>
      <div>
        <p class="text-4xl font-bold text-zinc-600">Trà sữa hạt nhân</p>
        <p class="text-red-500 text-2xl mt-3 font-bold">56.000 đồng</p>
      </div>
      <div class="mt-6">
        <p class="text-xl">Chọn size</p>
        <div class="flex items-center gap-2 mt-2">
          <div class="px-8 py-2 bg-orange-500 rounded-lg flex items-center gap-2">
            <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M17.883 2a2 2 0 0 1 1.988 2.22l-1.778 16A2 2 0 0 1 16.105 22h-8.21a2 2 0 0 1-1.988-1.78l-1.777-16A2 2 0 0 1 6.117 2h11.766ZM13 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-3-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm7.883-8H6.117l.425 3.823l.187-.033c.26-.044.561-.08.9-.1c1.128-.067 2.663.057 4.43.753l.335.138c1.492.64 2.765.772 3.681.741l1.224-.068L17.883 4Z"/></g></svg>
            <p class="text-white">Size S</p>
          </div>
          <div class="px-8 py-2 border border-zinc-300 rounded-lg flex items-center gap-2 text-zinc-600">
            <svg class="text-zinc-500" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M17.883 2a2 2 0 0 1 1.988 2.22l-1.778 16A2 2 0 0 1 16.105 22h-8.21a2 2 0 0 1-1.988-1.78l-1.777-16A2 2 0 0 1 6.117 2h11.766ZM13 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-3-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm7.883-8H6.117l.425 3.823l.187-.033c.26-.044.561-.08.9-.1c1.128-.067 2.663.057 4.43.753l.335.138c1.492.64 2.765.772 3.681.741l1.224-.068L17.883 4Z"/></g></svg>
            <p>Size M</p>
          </div>
          <div class="px-8 py-2 border border-zinc-300 rounded-lg flex items-center gap-2 text-zinc-600">
            <svg class="text-zinc-500" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M17.883 2a2 2 0 0 1 1.988 2.22l-1.778 16A2 2 0 0 1 16.105 22h-8.21a2 2 0 0 1-1.988-1.78l-1.777-16A2 2 0 0 1 6.117 2h11.766ZM13 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-3-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm7.883-8H6.117l.425 3.823l.187-.033c.26-.044.561-.08.9-.1c1.128-.067 2.663.057 4.43.753l.335.138c1.492.64 2.765.772 3.681.741l1.224-.068L17.883 4Z"/></g></svg>
            <p>Size L</p>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <p class="text-xl">Topping</p>
        <div class="mt-2">
          <div class="w-full relative">
            <div class=" w-full text-orange-900 rounded-lg border border-orange-300 bg-orange-50 py-2 flex items-center gap-2 grow px-4">
              <input type="checkbox" class="absolute top-0 left-0 opacity-0 h-full form-checkbox rounded-full w-5 h-5 !w-full" checked>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 bg-white text-orange-500 rounded-full">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <p class="text-md text-center flex-none">Trân châu trắng</p>
              <p class="text-right text-lg ml-auto flex-none">+ 4.000 đồng</p>
            </div>
          </div>
          <div class="w-full relative mt-2">
            <div class="w-full text-orange-900 rounded-lg border border-orange-300 bg-orange-50 py-2 flex items-center gap-2 grow px-4">
              <input type="checkbox" class="absolute top-0 left-0 opacity-0 h-full form-checkbox rounded-full w-5 h-5 !w-full" checked>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 bg-white text-orange-500 rounded-full">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <p class="text-md text-center flex-none">Trân châu trắng</p>
              <p class="text-right text-lg ml-auto flex-none">+ 4.000 đồng</p>
            </div>
          </div>
          <div class="w-full relative mt-2">
            <div class=" w-full rounded-lg border border-orange-300 bg-white py-2 flex items-center gap-4 grow px-4">
              <input type="checkbox" class="absolute top-0 left-0 opacity-0 h-full form-checkbox rounded-full w-5 h-5 !w-full" checked>
              <p class="text-md text-center flex-none">Kem Macchiato</p>
              <p class="text-right text-lg ml-auto flex-none">+ 10.000 đồng</p>
            </div>
          </div>
          <div class="w-full relative mt-2">
            <div class=" w-full rounded-lg border border-orange-300 bg-white py-2 flex items-center gap-4 grow px-4">
              <input type="checkbox" class="absolute top-0 left-0 opacity-0 h-full form-checkbox rounded-full w-5 h-5 !w-full" checked>
              <p class="text-md text-center flex-none">Kem phô mai</p>
              <p class="text-right text-lg ml-auto flex-none">+ 10.000 đồng</p>
            </div>
          </div>
        </div>
        <button class="px-4 py-3 bg-cyan-500 rounded-lg text-white mt-14 w-full flex items-center gap-4 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <p class="text-lg font-bold">Thêm vào giỏ hàng</p>
        </button>
      </div>
    </template>
    <template #description>
      <div class="border-y border-zinc-300 py-6">
        <div>
          <p class="text-2xl text-zinc-800 font-bold">Mô tả sản phẩm</p>
          <p class="mt-2 text-zinc-600">Vị đắng nhẹ từ cà phê phin truyền thống kết hợp Espresso Ý, lẫn chút ngọt ngào của kem sữa và lớp foam trứng cacao, nhấn thêm hạnh nhân nướng thơm bùi, kèm topping thạch cà phê dai giòn mê ly. Tất cả cùng quyện hoà trong một thức uống làm vị giác "thức giấc", thơm ngon hết nấc.</p>
        </div>
      </div>
    </template>
    <template #related-product>
      <div class="py-6">
        <p class="text-2xl text-zinc-800 font-bold">Sản phẩm liên quan</p>
        <div class="grid grid-cols-4 mt-4 justify-center">
          <div>
            <img src="images/product-4.jpg" class="w-64 h-64 object-cover rounded-lg" />
            <p class="font-medium text-2xl mt-3 font-bold">Trà sữa ô long</p>
            <p class="text-red-600 font-medium text-lg font-bold">56.000 đồng</p>
          </div>
          <div>
            <img src="images/product-4.jpg" class="w-64 h-64 object-cover rounded-lg" />
            <p class="font-medium text-2xl mt-3 font-bold">Trà sữa ô long</p>
            <p class="text-red-600 font-medium text-lg font-bold">56.000 đồng</p>
          </div>
          <div>
            <img src="images/product-4.jpg" class="w-64 h-64 object-cover rounded-lg" />
            <p class="font-medium text-2xl mt-3 font-bold">Trà sữa ô long</p>
            <p class="text-red-600 font-medium text-lg font-bold">56.000 đồng</p>
          </div>
          <div>
            <img src="images/product-4.jpg" class="w-64 h-64 object-cover rounded-lg" />
            <p class="font-medium text-2xl mt-3 font-bold">Trà sữa ô long</p>
            <p class="text-red-600 font-medium text-lg font-bold">56.000 đồng</p>
          </div>
        </div>
      </div>
    </template>
  </LayoutDetailProduct>
</template>

<script setup>
import Header from "@/components/home/Header.vue";
import LayoutDetailProduct from "@/components/layout/LayoutDetailProduct.vue";
</script>