import { ACTION_CHANGE_NAVIGATION_VISIBILITY } from "../globalVariables";

function setVisibility(visibility) {
  return {
    type: ACTION_CHANGE_NAVIGATION_VISIBILITY,
    visibility: !visibility,
  };
}

export { setVisibility };
