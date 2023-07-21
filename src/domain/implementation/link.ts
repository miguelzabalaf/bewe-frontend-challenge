import { LinkRepository, AddLinkParams, DeleteLinkParams } from '../reposiories/link';
import { addLinkService, deleteLinkService, getLinksService } from '../services/link';
import { LinkCreated, LinkDeleted, LinksLoaded } from '../models/link';

export function linkImplementation(): LinkRepository {
    return {
        addLink(params: AddLinkParams): Promise<LinkCreated> {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await addLinkService(params);
                    resolve(response.data);
                } catch (error) {
                    reject(error);
                }
            });
        },
        getLinks(): Promise<LinksLoaded> {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await getLinksService();
                    resolve(response.data);
                } catch (error) {
                    reject(error);
                }
            });
        },
        deleteLink(params: DeleteLinkParams): Promise<LinkDeleted> {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await deleteLinkService(params);
                    resolve(response.data);
                } catch (error) {
                    reject(error);
                }
            });
        }

    };
}