import { StoreState } from "../controllers/useStoreConfig";
import createSelector from "../helpers/createSelector";

export function profileSelectors() {
    return {
        getUser: function () {
            return createSelector(
                (state: StoreState) => state.profile,
                (profile) => profile.user
            );
        },
        getToken: function () {
            return createSelector(
                (state: StoreState) => state.profile,
                (profile) => profile.auth.token
            );
        },
        isAuthenticated: function () {
            return createSelector(
                (state: StoreState) => state.profile,
                (profile) => !!profile.auth.token
            );
        }
    };
}