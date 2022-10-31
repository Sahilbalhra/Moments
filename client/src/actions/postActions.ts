// import { AnyAction } from "redux";
import * as API from "../api/index";
import {
  CREATE_POST,
  END_LOADING,
  START_LOADING,
} from "../constants/actionTypes";

export const createPost = (post:any) => async (dispatch:any) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await API.createPost(post);
    console.log("Data in createPost action:", data);
    dispatch({ type: CREATE_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log("Error creating post:", error);
  }
};
