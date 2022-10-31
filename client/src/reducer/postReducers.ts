import { CREATE_POST } from "../constants/actionTypes";
import {
  FETCH_ALL_POSTS,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export const postReducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case FETCH_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
