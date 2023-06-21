<template>
  <Header />
  <LayoutProfile>
    <template #sidebar>
      <SidebarProfile />
    </template>
    <template #information>
      <LayoutInformation @submit.prevent="submit" :isLoadingButton="isLoadingButton">
        <template #box-input>
          <InputBox name="Địa chỉ e-mail" padding="py-6" position="relative" group="group">
            <template #input>
              <InputEmail disabled v-model:modelEmail="customer.email"/>
            </template>
            <template #tag>
              <TagNotification text="Vô hiệu hóa" />
            </template>
          </InputBox>
          <InputBox name="Họ và tên"  padding="pb-6">
            <template #input>
              <InputName v-model:modelFullName="customer.full_name" />
            </template>
          </InputBox>
        </template>
        <template #gender>
          <InputGender v-model:modelGender="customer.gender" />
        </template>
      </LayoutInformation>
    </template>
  </LayoutProfile>
  <Footer />
</template>

<script setup>

import SidebarProfile from '@/components/home/SidebarProfile.vue'
import LayoutProfile from "@/components/layout/LayoutProfile.vue";
import Header from "@/components/home/Header.vue";
import LayoutInformation from "@/components/layout/LayoutInformation.vue";
import InputBox from "@/components/input/InputBox.vue";
import InputName from "@/components/input/InputName.vue";
import InputEmail from "@/components/input/InputEmail.vue";
import TagNotification from "@/components/TagNotification.vue";
import InputGender from "@/components/input/InputGender.vue";
import Footer from "@/components/home/Footer.vue"

import {useUpdateProfileApi} from "@/repositories/auth";
import {ref} from "vue";
import { useProfileStore } from "@/stores/getMyProfile";
import {useToastStore} from "@/stores/toast";



const isLoadingButton = ref(false)

const profileStore = useProfileStore()

const customer = ref({
  full_name: profileStore.profile.profile?.full_name,
  email: profileStore.profile.email,
  gender: profileStore.profile.profile?.gender
})

async function submit() {
  isLoadingButton.value = true

  setTimeout(() => {
    useUpdateProfileApi(customer.value)
        .then((response) => {
          profileStore.getMyProfile()
          useToastStore().success('Cập nhật thông tin thành công', 3000)
          isLoadingButton.value = false
        })
  }, 1000)
}



</script>