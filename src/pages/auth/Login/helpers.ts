import axios from "axios";

export function setDefaultToken(token: string) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
}