<template>
  <Header />
  <LayoutProfile>
    <template #sidebar>
      <SidebarProfile />
    </template>
    <template #information>
      <LayoutFormDeliveryAddress text="Tạo" @submit.prevent="submit" :isLoadingButton="isLoadingButton">
        <template #box-delivery-address-layout>
          <BoxInputAddressLayout>
            <template #address>
              <BoxInputInformationCustomer name="Họ và tên" namePhoneNumber="Số điện thoại" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input-name>
                  <InputName v-model:modelFullName="delivery_address.name"></InputName>
                  <div class="text-red-900 mt-2 text-md px-4 py-2 bg-red-100 rounded-md h-26" v-if="errors?.errors?.name">
                    <p v-if="errors?.errors?.name">{{ errors?.errors?.name[0] }}</p>
                  </div>
                </template>
                <template #input-phone-number>
                  <InputPhoneNumber v-model:modelPhoneNumber="delivery_address.phone_number"></InputPhoneNumber>
                  <div class="text-red-900 mt-2 text-md px-4 py-2 bg-red-100 rounded-md h-26" v-if="errors?.errors?.phone_number">
                    <p v-if="errors?.errors?.phone_number">{{ errors?.errors?.phone_number[0] }}</p>
                  </div>
                </template>
              </BoxInputInformationCustomer>
              <BoxInputDeliveryAddress name="Thành phố" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input>
                  <SelectFilterProvince v-model:modelProvince="delivery_address.province" placeholder="Thành phố" />
                  <div class="text-red-900 mt-2 text-md px-4 py-2 bg-red-100 rounded-md h-26" v-if="errors?.errors?.province_code">
                    <p v-if="errors?.errors?.province_code">{{ errors?.errors?.province_code[0] }}</p>
                  </div>
                </template>
              </BoxInputDeliveryAddress>
              <BoxInputDeliveryAddress name="Tên Quận" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input>
                  <SelectFilterDistrict v-model:modelDistrict="delivery_address.district" v-model:modelProvince="delivery_address.province.code" placeholder="Quận" />
                  <div class="text-red-900 mt-2 text-md px-4 py-2 bg-red-100 rounded-md h-26" v-if="errors?.errors?.district_code">
                    <p v-if="errors?.errors?.district_code">{{ errors?.errors?.district_code[0] }}</p>
                  </div>
                </template>
              </BoxInputDeliveryAddress>
              <BoxInputDeliveryAddress name="Tên Phường" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input>
                  <SelectFilterWard v-model:modelWard="delivery_address.ward" v-model:modelDistrict="delivery_address.district.code" placeholder="Phường" />
                  <div class="text-red-900 mt-2 text-md px-4 py-2 bg-red-100 rounded-md h-26" v-if="errors?.errors?.ward_code">
                    <p v-if="errors?.errors?.ward_code">{{ errors?.errors?.ward_code[0] }}</p>
                  </div>
                </template>
              </BoxInputDeliveryAddress>
              <BoxInputDeliveryAddress name="Đường" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input>
                  <InputAddress v-model:modelAddress="delivery_address.street" placeholder="Đường" />
                  <div class="text-red-900 mt-2 text-md px-4 py-2 bg-red-100 rounded-md h-26" v-if="errors?.errors?.street">
                    <p v-if="errors?.errors?.street">{{ errors?.errors?.street[0] }}</p>
                  </div>
                </template>
              </BoxInputDeliveryAddress>
              <BoxInputDeliveryAddress name="Số nhà" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input>
                  <InputAddress v-model:modelAddress="delivery_address.street_number" placeholder="Số nhà" />
                  <div class="text-red-900 mt-2 text-md px-4 py-2 bg-red-100 rounded-md h-26" v-if="errors?.errors?.street_number">
                    <p v-if="errors?.errors?.street_number">{{ errors?.errors?.street_number[0] }}</p>
                  </div>
                </template>
              </BoxInputDeliveryAddress>
            </template>
            <template #get-coordinates>
              <BoxGetCoordinates name="Tính tọa độ" padding="py-3">
                <template #input-lat>
                  <InputLat placeholder="Vĩ độ" :placeholder="delivery_address.lat" v-model:modelLat="delivery_address.lat"/>
                </template>
                <template #input-long>
                  <InputLong placeholder="Kinh độ" :placeholder="delivery_address.long" v-model:modelLong="delivery_address.long" />
                </template>
                <template #button-coordinates>
                  <ButtonLoadCoordinates @load-coordinates="loadCoordinates" />
                </template>
              </BoxGetCoordinates>
              <div class="text-red-900 my-2 text-md px-4 py-2 bg-red-100 rounded-md h-26" v-if="errors?.errors?.meta">
                <p v-if="errors?.errors?.meta">{{ errors?.errors?.meta[0] }}</p>
              </div>
            </template>
          </BoxInputAddressLayout>

        </template>
      </LayoutFormDeliveryAddress>
    </template>
  </LayoutProfile>
  <Footer />
</template>

<script setup>

import Header from "@/components/home/Header.vue"
import LayoutProfile from "@/components/layout/LayoutProfile.vue";
import LayoutFormDeliveryAddress from "@/components/layout/LayoutFormDeliveryAddress.vue";
import SidebarProfile from "@/components/home/SidebarProfile.vue";
import BoxInputAddressLayout from "@/components/delivery_address/BoxInputAddressLayout.vue";
import BoxInputDeliveryAddress from "@/components/delivery_address/BoxInputDeliveryAddress.vue";
import SelectFilterProvince from "@/components/input/SelectFilterProvince.vue";
import SelectFilterDistrict from "@/components/input/SelectFilterDistrict.vue";
import SelectFilterWard from "@/components/input/SelectFilterWard.vue";
import InputAddress from "@/components/input/InputAddress.vue";
import BoxInputInformationCustomer from "@/components/delivery_address/BoxInputInformationCustomer.vue";
import InputName from "@/components/input/InputName.vue";
import InputPhoneNumber from "@/components/input/InputPhoneNumber.vue";

import {useStoreDeliveryAddressApi} from "@/repositories/delivery-address";

import {ref} from "vue";
import { useToastStore } from "@/stores/toast";
import { useRouter } from 'vue-router'
import BoxGetCoordinates from "@/components/delivery_address/BoxGetCoordinates.vue";
import InputLong from "@/components/input/InputLong.vue";
import InputLat from "@/components/input/InputLat.vue";
import {useIndexGetCoodinatesApi} from "@/repositories/get-coordinates";
import ButtonLoadCoordinates from "@/components/button/ButtonLoadCoordinates.vue";
import Footer from "@/components/home/Footer.vue";

const router = useRouter();

const errors = ref({})

const debounce = ref(0)

const isLoadingButton = ref(false)

const delivery_address = ref({
  name: '',
  phone_number: '',
  street_number: '',
  street: '',
  ward: {
    code: '',
  },
  district: {
    code: '',
  },
  province: {
    code: '',
  },
  long: '',
  lat: ''
})

function loadCoordinates() {
  useIndexGetCoodinatesApi(delivery_address.value.street_number, delivery_address.value.street,
      delivery_address.value.district.code, delivery_address.value.province.code)
      .then((response) => {
        delivery_address.value.lat = response.data.results[0].position.lat
        delivery_address.value.long = response.data.results[0].position.lon
      })
}

async function submit() {
  isLoadingButton.value = true

  useStoreDeliveryAddressApi(delivery_address.value.name, delivery_address.value.phone_number,
      delivery_address.value.street_number, delivery_address.value.street, delivery_address.value.ward.code,
      delivery_address.value.district.code, delivery_address.value.province.code, delivery_address.value.long,
      delivery_address.value.lat)
      .then((response) => {
        useToastStore().success('Tạo thành công', 3000)
        router.push({ name: 'delivery-address' })
        isLoadingButton.value = false
        errors.value = null
      })
      .catch((error) => {
        clearTimeout(debounce.value)
        errors.value = error.response.data
        isLoadingButton.value = false
        console.log(errors.value.message)

        if (errors.value.message == 'Hệ thống chỉ cho phép tạo 5 địa chỉ. Vui lòng cập nhật hoặc xóa địa chỉ!') {
          useToastStore().error('Bạn không được tạo vượt quá 5 địa chỉ, mời bạn quay lại danh sách địa chỉ', 3000)
          debounce.value = setTimeout(() => {
            router.push({ name: 'delivery-address' })
          }, 4000)
        }
      })
}


</script>