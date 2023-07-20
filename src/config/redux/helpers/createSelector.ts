import { createSelectorCreator, defaultMemoize } from "reselect";
import { isEqual } from "lodash";

const createSelector = createSelectorCreator(defaultMemoize, isEqual);

export default createSelector;
