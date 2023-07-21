import { Link } from "../entities/link";

export interface LinkRegistered extends Link {
    user_id: number;
}
export interface LinksLoaded {
    message: string;
    data: LinkRegistered[];
}

export interface LinkCreated {
    message: string;
    data: Pick<LinkRegistered, 'name' | 'url' | 'user_id'>;
}

export interface LinkDeleted {
    message: string;
}