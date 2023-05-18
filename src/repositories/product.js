import axios from "axios";

export function useIndexProductApi(keywords = '', category_id = '', price_low_to_high = '', price_high_to_low = '') {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            keywords,
            category_id,
            price_high_to_low,
            price_low_to_high
        }
    }

    return axios
        .get('http://127.0.0.1:8000/public/products?', config)
}