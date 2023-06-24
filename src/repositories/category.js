import axios from "axios";

export function useIndexCategoryApi() {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    return axios
        .get(process.env.VUE_APP_ENV_VARIABLE + '/public/categories?', config)
}