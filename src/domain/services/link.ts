import axios from "axios";
import { AddLinkParams, DeleteLinkParams } from "../reposiories/link";
import { endpoints } from "../constants/endpoints";
import { trackPromise } from "react-promise-tracker";

export function addLinkService(params: AddLinkParams) {
    const request = axios.post(endpoints.links.add, { data: { ...params } });
    return trackPromise(request);
}

export function getLinksService() {
    const request = axios.get(endpoints.links.getAll);
    return trackPromise(request);
}

export function deleteLinkService(params: DeleteLinkParams) {
    const request = axios.delete(endpoints.links.delete, { data: { ...params } });
    return trackPromise(request);
}