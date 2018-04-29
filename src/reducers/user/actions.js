import { UPDATE_USER_DATA } from "./constants";

export const updateUserData = user => {
  let _user = {};
  if (!!user.googleId) {
    _user = {
      id: user.googleId,
      name: user.name,
      givenName: user.givenName,
      familyName: user.familyName,
      imageUrl: user.imageUrl,
      email: user.email
    };
  } else {
    _user = {
      id: user.getId(),
      name: user.getName(),
      givenName: user.getGivenName(),
      familyName: user.getFamilyName(),
      imageUrl: user.getImageUrl(),
      email: user.getEmail()
    };
  }
  return {
    type: UPDATE_USER_DATA,
    user: _user
  };
};
