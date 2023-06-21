import axios from "axios";
import {useRoute} from "vue-router";

export function useIndexProductApi(page = 0 ,keywords = '', category_id = null, price_low_to_high = '', price_high_to_low = '') {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            page,
            keywords,
            category_id,
            price_high_to_low,
            price_low_to_high
        }
    }

    return axios
        .get('http://127.0.0.1:8000/public/products?', config)
}

export function useGetProductInformation() {
    const token = $cookies.get('token')

    const route = useRoute();
    const id = route.params.id

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .get('http://127.0.0.1:8000/public/products/' + id, config)
}


export function useGetRelatedProduct(categoryId, id) {
    const token = $cookies.get('token')



    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .get('http://127.0.0.1:8000/public/products/index-related-product/' + categoryId + '/' + id, config)
}

export function useGetBestSellerProduct() {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return axios
        .get('http://127.0.0.1:8000/public/products/index-best-seller', config)
}