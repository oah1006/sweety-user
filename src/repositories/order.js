import axios from "axios";
import {useRoute} from "vue-router";

export function useIndexOrderApi(page = null, status = '') {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            page,
            status
        }
    }

    return axios
        .get(process.env.VUE_APP_ENV_VARIABLE + '/public/orders?', config)
}

export function useDetailOrderApi(id) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .get(process.env.VUE_APP_ENV_VARIABLE + '/public/orders/' + id, config)
}

export function useUpdateStatusCanceledOrderApi(id) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .put(process.env.VUE_APP_ENV_VARIABLE + '/public/orders/update-status-canceled/' + id, {}, config)
}

export function useStoreOrderApi() {

    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    }

    return axios
        .post(process.env.VUE_APP_ENV_VARIABLE + '/public/orders', {}, config)
}
