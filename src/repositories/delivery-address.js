import axios from "axios"
import {useRoute} from "vue-router";

export function useStoreDeliveryAddressApi(full_name, phone_number, street_number, street, ward_code,
                                    district_code, province_code, long, lat) {
    const delivery_address = {
        name: full_name,
        phone_number: phone_number,
        street_number: street_number,
        street: street,
        ward_code: ward_code,
        district_code: district_code,
        province_code: province_code,
        long: long,
        lat: lat,
    }

    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    }

    return axios
        .post(process.env.VUE_APP_ENV_VARIABLE + '/public/delivery-addresses', delivery_address, config)
}

export function useUpdateDeliveryAddressApi(name, phone_number, street_number, street, ward_code,
                                           district_code, province_code, long, lat, id) {
    const delivery_address = {
        name: name,
        phone_number: phone_number,
        street_number: street_number,
        street: street,
        ward_code: ward_code,
        district_code: district_code,
        province_code: province_code,
        long: long,
        lat: lat,
    }

    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    }

    return axios
        .put(process.env.VUE_APP_ENV_VARIABLE + '/public/delivery-addresses/' + id, delivery_address, config)
}

export function useIndexDeliveryAddressApi() {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .get(process.env.VUE_APP_ENV_VARIABLE + '/public/delivery-addresses', config)
}

export function useDeleteDeliveryAddressApi(id) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    }

    return axios
        .delete(process.env.VUE_APP_ENV_VARIABLE + '/public/delivery-addresses/' + id, config)
}

export function useGetDeliveryAddressInformationApi() {
    const token = $cookies.get('token')

    const route = useRoute();
    const id = route.params.id

    console.log(id)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .get(process.env.VUE_APP_ENV_VARIABLE + '/public/delivery-addresses/' + id, config)
}

export function useChangeIsDefaultDeliveryAddressApi(id) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .put(process.env.VUE_APP_ENV_VARIABLE + '/public/delivery-addresses/change-is-default/' + id, {}, config)
}

export function useIndexProvinceApi() {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .get(process.env.VUE_APP_ENV_VARIABLE + '/public/provinces', config)
}

export function useIndexDistrictApi(provinceCode) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .get(process.env.VUE_APP_ENV_VARIABLE + '/public/districts/' + provinceCode, config)
}

export function useIndexWardApi(districtCode) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .get(process.env.VUE_APP_ENV_VARIABLE + '/public/wards/' + districtCode, config)
}

export function useChooseMyDeliveryAddressOrder(address_id) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .post(process.env.VUE_APP_ENV_VARIABLE + '/public/delivery-address/choose-my-delivery-address/' + address_id, {}, config)
}