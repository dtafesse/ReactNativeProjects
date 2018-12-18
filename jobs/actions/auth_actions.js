import { AsyncStorage } from "react-native";
import { Facebook } from "expo";
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem("fb_token");
  if (token) {
    dispatch({
      type: FACEBOOK_LOGIN_SUCCESS,
      payload: token
    });
  } else {
    // helper func for this action creator
    doFaceBookLogin(dispatch);
  }
};

const doFaceBookLogin = async dispatch => {
  try {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
      "2206476529590136",
      {
        permissions: ["public_profile"]
      }
    );

    if (type === "cancel") {
      return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }
    await AsyncStorage.setItem("fb_token", token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } catch (err) {
    console.log(err);
  }
};
