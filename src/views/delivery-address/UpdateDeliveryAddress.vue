<template>
  <Header />
  <LayoutProfile v-if="!isLoadingPage">
    <template #sidebar>
      <SidebarProfile />
    </template>
    <template #information>
      <LayoutCreateDeliveryAddress text="Cập nhật" @submit.prevent="submit">
        <template #box-delivery-address-layout>
          <BoxInputAddressLayout>
            <template #address>
              <BoxInputInformationCustomer name="Họ và tên" namePhoneNumber="Số điện thoại" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input-name>
                  <InputName v-model:modelFullName="delivery_address.name"></InputName>
                </template>
                <template #input-phone-number>
                  <InputPhoneNumber v-model:modelPhoneNumber="delivery_address.phone_number"></InputPhoneNumber>
                </template>
              </BoxInputInformationCustomer>
              <BoxInputDeliveryAddress name="Thành phố" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input>
                  <SelectFilterProvince v-model:modelProvince="delivery_address.province" placeholder="Thành phố" />
                </template>
              </BoxInputDeliveryAddress>
              <BoxInputDeliveryAddress name="Tên Quận" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input>
                  <SelectFilterDistrict v-model:modelDistrict="delivery_address.district" v-model:modelProvince="delivery_address.province.code" placeholder="Quận" />
                </template>
              </BoxInputDeliveryAddress>
              <BoxInputDeliveryAddress name="Tên Phường" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input>
                  <SelectFilterWard v-model:modelWard="delivery_address.ward" v-model:modelDistrict="delivery_address.district.code" placeholder="Phường" />
                </template>
              </BoxInputDeliveryAddress>
              <BoxInputDeliveryAddress name="Đường" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input>
                  <InputAddress v-model:modelAddress="delivery_address.street" placeholder="Đường" />
                </template>
              </BoxInputDeliveryAddress>
              <BoxInputDeliveryAddress name="Số nhà" border="border-b border-gray-100 border-solid" padding="py-3">
                <template #input>
                  <InputAddress v-model:modelAddress="delivery_address.street_number" placeholder="Số nhà" />
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
            </template>
          </BoxInputAddressLayout>
        </template>
      </LayoutCreateDeliveryAddress>
    </template>
  </LayoutProfile>
  <LoadingPage v-else />
  <Footer />
</template>

<script setup>

import Header from "@/components/home/Header.vue"
import LayoutProfile from "@/components/layout/LayoutProfile.vue";
import LayoutCreateDeliveryAddress from "@/components/layout/LayoutFormDeliveryAddress.vue";
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
import LoadingPage from "@/components/LoadingPage.vue"

import {ref} from "vue";
import {useGetDeliveryAddressInformationApi, useUpdateDeliveryAddressApi} from "@/repositories/delivery-address";
import BoxGetCoordinates from "@/components/delivery_address/BoxGetCoordinates.vue";
import InputLong from "@/components/input/InputLong.vue";
import InputLat from "@/components/input/InputLat.vue";
import {useRoute, useRouter} from "vue-router";
import {useIndexGetCoodinatesApi} from "@/repositories/get-coordinates";
import {useToastStore} from "@/stores/toast";
import Footer from "@/components/home/Footer.vue";
import ButtonLoadCoordinates from "@/components/button/ButtonLoadCoordinates.vue";

const router = useRouter();
const route = useRoute();

const isLoadingPage = ref(true)

const delivery_address = ref({
  name: '',
  phone_number: '',
  street_number: '',
  street: '',
  ward: {
    code: '',
    full_name: ''
  },
  district: {
    code: '',
    full_name: ''
  },
  province: {
    code: '',
    full_name: ''
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

const id = route.params.id

function submit() {
  useUpdateDeliveryAddressApi(delivery_address.value.name, delivery_address.value.phone_number,
      delivery_address.value.street_number, delivery_address.value.street, delivery_address.value.ward.code,
      delivery_address.value.district.code, delivery_address.value.province.code,
      delivery_address.value.long, delivery_address.value.lat, id)
      .then((response) => {
        useToastStore().success('cập nhật thành công', 3000)
        router.push({ name: 'delivery-address' })
      })
}

function getDeliveryAddressInformationApi() {
  useGetDeliveryAddressInformationApi()
      .then((response) => {
        delivery_address.value.name = response.data.data.name
        delivery_address.value.phone_number = response.data.data.phone_number

        delivery_address.value.street_number = response.data.data.street_number
        delivery_address.value.street = response.data.data.street

        delivery_address.value.ward.full_name = response.data.data.ward.full_name
        delivery_address.value.ward.code = response.data.data.ward.code

        delivery_address.value.district.full_name = response.data.data.district.full_name
        delivery_address.value.district.code = response.data.data.district.code

        delivery_address.value.province.full_name = response.data.data.province.full_name
        delivery_address.value.province.code = response.data.data.province.code

        delivery_address.value.long = response.data.data.long
        delivery_address.value.lat = response.data.data.lat

        isLoadingPage.value = false
      })
}

getDeliveryAddressInformationApi()


</script>