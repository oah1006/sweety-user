import axios from "axios";

export function useIndexStoreApi(keywords = '', province_code = null) {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            keywords,
            province_code
        }
    }

    return axios
        .get(process.env.VUE_APP_ENV_VARIABLE + '/public/stores?', config)
}