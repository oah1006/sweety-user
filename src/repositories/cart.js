import axios from "axios";

export function useAddToCartApi(product_variant_id, cartItemOptions) {
    const token = $cookies.get('token')

    const cart = {
        'product_variant_id': product_variant_id,
        'options': cartItemOptions
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    }

    return axios
        .post('http://127.0.0.1:8000/public/carts', cart, config)
}

export function useIndexAddToCartApi() {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    return axios
        .get('http://127.0.0.1:8000/public/carts?', config)
}

export function useMinusCartItemApi(id) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    }

    return axios
        .delete('http://127.0.0.1:8000/public/cart-items/' + id, config)
}

export function useAddCartItemApi(id) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    }

    return axios
        .put('http://127.0.0.1:8000/public/cart-items/' + id, {}, config)
}