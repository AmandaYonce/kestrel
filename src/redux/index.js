import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducers as authReducers } from "./auth";
<<<<<<< HEAD
//import * as messages from "./stateReducers/messages"
import { likeReducers } from "./messages/likeUnlike"
import * as userInfo from "./stateReducers/account"
import {editReducers} from "./account/edituser"
import {editPassReducer} from "./account/editPassword"
import {editPhotoReducer} from "./account/editPhoto"
import { newMessageReducer } from "../redux/messages/newMessages";
import {messageReducers} from "./messages/getMessages"
import {deleteMessageReducer} from "./messages/deleteMessage"

=======
import * as messages from "./stateReducers/messages";
import { reducers as register } from "./stateReducers/registrationForm/registrationForm";
//import {likeUnlike} from "./stateReducers/messages"
>>>>>>> Userregistration

export * from "./auth";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    auth: combineReducers(authReducers),
<<<<<<< HEAD
    messages: combineReducers(messageReducers),
    likeReducers: combineReducers(likeReducers),
    userInfo: combineReducers(userInfo),
    editUser: combineReducers(editReducers),
    editPassword: combineReducers(editPassReducer),
    editPhoto: combineReducers(editPhotoReducer),
    newMessage: combineReducers(newMessageReducer),
    deleteMessage: combineReducers(deleteMessageReducer)
=======
    messages: combineReducers(messages),
    register: combineReducers(register)
    //likeUnlike: combineReducers(likeUnlike)
>>>>>>> Userregistration
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production"
});

store.subscribe(() => {
  localStorage.setItem("login", JSON.stringify(store.getState().auth.login));
});
