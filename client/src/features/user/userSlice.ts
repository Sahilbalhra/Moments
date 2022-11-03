import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

type UserState = {
  user: any | null;
  token: string | null;
};

const slice = createSlice({
  name: "user",
  initialState: { user: null, token: null } as UserState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: any; token: string }>
    ) => {
      console.log("in reducer:", { user, token });
      localStorage.setItem("user",  JSON.stringify(user));
      state.user = user;
      state.token = token;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.user.user;
