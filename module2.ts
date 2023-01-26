import axios from "axios";
export async function httpGet(url) {
    return (await axios.get(url)).data;
}