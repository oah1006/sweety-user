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
        .get('http://127.0.0.1:8000/public/stores?', config)
}