import { StoreState } from "../controllers/useStoreConfig";
import createSelector from "../helpers/createSelector";

export function profileSelectors() {
    return {
        getProfile: function () {
            return createSelector(
                (state: StoreState) => state.profile,
                (profile) => profile
            );
        }
    };
}