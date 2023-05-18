import axios from "axios"

export function useSendOtpApi(email) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    return axios
        .post('http://127.0.0.1:8000/public/auth/send-otp', { email } , config)
}

export function useVerifyOtpApi(formVerifyOtp) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    return axios
        .post('http://127.0.0.1:8000/public/auth/verify-otp', formVerifyOtp, config)
}