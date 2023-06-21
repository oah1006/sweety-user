<template>
  <div>
    <Header />
    <div>
      <div class="z-20 bg-[url('./public/images/store-5.jpg')] bg-cover bg-right w-full h-72 mt-20 flex items-center justify-center">
        <p class="text-white text-5xl font-bold z-30">Về chúng tôi</p>
      </div>
      <div class="my-20">
        <div class="flex items-center px-20">
          <div class="w-1/2">
            <p class="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black">Câu chuyện về thương hiệu</p>
            <p class="mt-5 text-zinc-600 text-justify">Chủ cửa hàng trà sữa đặt tên cho tiệm mình là "Sweety" -
              một từ tiếng Anh mang ý nghĩa ngọt ngào và đáng yêu. Ý nghĩa của cái tên muốn mọi người cảm nhận được
              niềm vui và sự hài lòng khi thưởng thức trà sữa tại Sweety. Tên "Sweety" cũng gợi lên những hình ảnh của
              niềm vui tuổi thơ và những kỷ niệm ngọt ngào trong cuộc sống.</p>
            <p class="mt-2 text-zinc-600 text-justify">
              Sweety không chỉ dừng lại ở cái tên ngọt ngào mà nó mang trong mình, mà còn được thể hiện qua mọi khía cạnh
              của thương hiệu. Hương vị trà sữa tại Sweety được tạo ra với tình yêu và tâm huyết. Cửa hàng luôn chọn những
              nguyên liệu tươi ngon và chất lượng cao nhất để đảm bảo hương vị tuyệt hảo. Sự kết hợp hoàn hảo giữa trà tươi,
              sữa tươi và các thành phần tự nhiên tạo ra những ly trà sữa thơm ngon và mát lạnh.
            </p>
          </div>
          <div class="ml-44">
            <div class="w-96 h-96 flex items-center rounded-full bg-gradient-to-r from-orange-400 to-red-700">
              <img src="../images/logo-1.png" class="mx-auto w-56 h-56" />
            </div>
          </div>
        </div>
        <div class="flex items-center mt-20 px-20 gap-10">
          <div class="w-1/2 grow flex">
            <img src="../images/store-1.jpg" class="rounded-2xl" />
          </div>
          <div class="w-1/2">
            <p class="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black">Trà sữa Sweety</p>
            <p class="mt-5 text-zinc-600 text-justify">Thương hiệu Sweety chính thức đưa vào hoạt động từ ngày 11/10/2021.
              Trải qua hơn nhiều năm hoạt động, trà sữa Sweety, đã đưa thương hiệu phát triển nhanh chóng và trở thành một
              trong những điểm đến thân thuộc của các bạn trẻ yêu thích văn hóa trà sữa và mong muốn trải nghiệm sản phẩm
              trà uy tín chất lượng với nguồn gốc xuất xứ rõ ràng.</p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Header from "@/components/home/Header.vue";
import Footer from "@/components/home/Footer.vue";
</script>