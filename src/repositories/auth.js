import axios from "axios"

export async function useRegisterApi(customer) {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    return axios
        .post(process.env.VUE_APP_ENV_VARIABLE + '/public/auth/register', customer, config)
}

export async function useLoginApi(customer) {
    return axios
        .post(process.env.VUE_APP_ENV_VARIABLE + '/public/auth/login', customer)
}

export async function useLogoutApi() {
    const token = await $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    }

    return axios
        .post(process.env.VUE_APP_ENV_VARIABLE + '/public/auth/logout', {}, config)
}

export function useUpdateProfileApi(customer) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    }

    return axios
        .put(process.env.VUE_APP_ENV_VARIABLE + '/public/auth/profile', customer, config)
}

export function useForgotPasswordApi(formForgotPassword, tokenOtp) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            token: tokenOtp,
            Accept: 'application/json',
        },
    }

    return axios
        .post(process.env.VUE_APP_ENV_VARIABLE + '/public/auth/forgot-password', formForgotPassword, config)
}