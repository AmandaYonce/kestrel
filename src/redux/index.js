import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducers as authReducers } from "./auth";
import { likeReducers } from "./messages/likeUnlike";
import * as userInfo from "./stateReducers/account";
import { editReducers } from "./account/edituser";
import { editPassReducer } from "./account/editPassword";
import { editPhotoReducer } from "./account/editPhoto";
import { newMessageReducer } from "../redux/messages/newMessages";
import { messageReducers } from "./messages/getMessages";
import { deleteMessageReducer } from "./messages/deleteMessage";
import { reducers as register } from "./stateReducers/registrationForm/registrationForm";
import { reducers as deleteUser } from "./account/deleteUser";
import {modalReducer} from "./welcomeModal/welcomeModal"
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import{randomQuoteReducer} from "../redux/randomQuote/randomQuote"
import{friendInfoReducer} from "../redux/account/userInfo"
import {userMessagesReducers} from "../redux/messages/userMessages"
import {googleReducer} from "./account/googleTracker"
import {failedRegisterReducer} from "../redux/stateReducers/registrationForm/failedRegisterModal"
import {failedLoginReducer} from "../redux/stateReducers/registrationForm/failedLoginModal"
JavascriptTimeAgo.locale(en)


export * from "./auth";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    auth: combineReducers(authReducers),
    likeReducers: combineReducers(likeReducers),
    userInfo: combineReducers(userInfo),
    editUser: combineReducers(editReducers),
    editPassword: combineReducers(editPassReducer),
    editPhoto: combineReducers(editPhotoReducer),
    newMessage: combineReducers(newMessageReducer),
    deleteMessage: combineReducers(deleteMessageReducer),
    register: combineReducers(register),
    deleteUser: combineReducers(deleteUser),
    welcomeModal: combineReducers(modalReducer),
    randomQuote: combineReducers(randomQuoteReducer),
    friendInfo: combineReducers(friendInfoReducer),
    userMessages: combineReducers(userMessagesReducers),
    google: combineReducers(googleReducer),
    messages: combineReducers(messageReducers),
    registerModal: combineReducers(failedRegisterReducer),
    loginModal: combineReducers(failedLoginReducer)
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production"
});

store.subscribe(() => {
  localStorage.setItem("login", JSON.stringify(store.getState().auth.login));
});
