import { Link } from "../entities/link";
import { LinkCreated, LinkDeleted, LinkRegistered, LinksLoaded } from "../models/link";

export interface AddLinkParams {
    name: Link['name'];
    url: Link['url'];
}

export interface DeleteLinkParams {
    id: Link['id'];
}

export interface LinkRepository {
    addLink(params: AddLinkParams): Promise<LinkCreated>;
    getLinks(): Promise<LinksLoaded>;
    deleteLink(params: DeleteLinkParams): Promise<LinkDeleted>;
}