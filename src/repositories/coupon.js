import axios from "axios";

export function useIndexCouponApi() {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    return axios
        .get(process.env.VUE_APP_ENV_VARIABLE + '/public/coupons?', config)
}

export function useApplyCouponApi(coupon_id) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    return axios
        .post(process.env.VUE_APP_ENV_VARIABLE + '/public/coupons/apply-coupon/' + coupon_id, {}, config)
}

export function useRemoveCouponApi() {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    return axios
        .post(process.env.VUE_APP_ENV_VARIABLE + '/public/coupons/remove-coupon', {}, config)
}