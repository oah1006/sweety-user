import axios from "axios";
import {useRoute} from "vue-router";

export function useIndexOrderApi(status = '') {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            status
        }
    }

    return axios
        .get('http://127.0.0.1:8000/public/orders?', config)
}

export function useDetailOrderApi() {
    const token = $cookies.get('token')

    const route = useRoute();
    const id = route.params.id

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