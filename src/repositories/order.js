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
        .get('http://127.0.0.1:8000/public/orders?', config)
}

export function useDetailOrderApi(id) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .get('http://127.0.0.1:8000/public/orders/' + id, config)
}

export function useUpdateStatusCanceledOrderApi(id) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .put('http://127.0.0.1:8000/public/orders/update-status-canceled/' + id, {}, config)
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
        .post('http://127.0.0.1:8000/public/orders', {}, config)
}
