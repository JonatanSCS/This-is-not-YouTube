import { fromJS } from "immutable";

import { UPDATE_USER_DATA } from "./constants";

export const initalState = fromJS({
  user: {}
});

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return state.set("user", fromJS({ ...action.user }));
    default:
      return state;
  }
}
