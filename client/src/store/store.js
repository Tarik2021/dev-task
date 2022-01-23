import { createSlice, configureStore } from "@reduxjs/toolkit";
import { MOVIES } from "../constants/constants";

const slice = createSlice({
   name: "slice",
   initialState: {
      user: {},
      data: [],
      tab: MOVIES,
      search: "",
   },
   reducers: {
      loginUser(state, { payload }) {
         state.user = payload.user;
         state.user.token = payload.token;
      },
      setMyRatings(state, { payload }) {
         state.user.movies = payload.movies;
         state.user.shows = payload.shows;
      },
      logoutUser(state) {
         state.user = {};
         state.tab = MOVIES;
      },
      setData(state, { payload }) {
         state.data = payload;
      },
      setTab(state, { payload }) {
         state.tab = payload;
      },
      setSearch(state, { payload }) {
         state.search = payload;
      },
   },
});

export const store = configureStore({ reducer: { store: slice.reducer } });

export const actions = slice.actions;
