import axios from "axios";

export function useIndexCategoryApi() {
    const token = $cookies.get('token')

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    return axios
        .get('http://127.0.0.1:8000/public/categories?', config)
}