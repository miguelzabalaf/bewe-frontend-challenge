import { AddLinkParams, LinkRepository, DeleteLinkParams } from '../reposiories/link';

export function linkUseCases(repository: LinkRepository) {
    return {
        async addLink(params: AddLinkParams) {
            return repository.addLink(params);
        },
        async getLinks() {
            return repository.getLinks();
        },
        async deleteLink(params: DeleteLinkParams) {
            return repository.deleteLink(params);
        }
    };
}