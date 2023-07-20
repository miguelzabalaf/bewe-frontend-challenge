import { Link } from "../entities/link";

export interface AddLinkParams {
    name: Link['name'];
    url: Link['url'];
}

export interface DeleteLinkParams {
    id: Link['id'];
}

export interface LinkRepository {
    addLink(params: AddLinkParams): Promise<void>;
    getLinks(): Promise<Link[]>;
    deleteLink(params: DeleteLinkParams): Promise<void>;
}