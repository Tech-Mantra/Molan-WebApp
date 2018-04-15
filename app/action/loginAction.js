/*
 * Molan: Molan WebApp - app/action/login
 * Author: Progyan Bhattacharya <progyanb@acm.org>
 *
 * Copyright 2018 Tech-Mantra, All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 */

import axios from "axios";
import { API_PATH } from "../util/config";
import {
    LOGIN_ACTION, LOGOUT_ACTION, SIGNUP_ACTION, LOGIN_TOKEN, FAKE_ACTION
} from "./actionTypes";

function userAuth(event, object) {
    if (typeof object !== "undefined" && object !== null) {
        switch (event) {
            case LOGIN_ACTION: {
                return loginAction(object);
            }
            case SIGNUP_ACTION: {
                return signupAction(object);
            }
            case LOGOUT_ACTION: {
                return logoutAction(object);
            }
            default:
                throw new Error("action/loginAction: Invalid action received at userAuth");
        }
    }
}

function loginHelper(auth) {
    const request = axios.post(API_PATH + "/login", null, {
        headers: {
            Authorization: "Basic " + auth
        }});
    return {
        type: LOGIN_ACTION,
        payload: request
    };
}

function loginAction(data) {
    const buffer = new Buffer(`${data.username}:${data.password}`);
    const auth   = buffer.toString("base64");
    if (typeof localStorage !== "undefined") {
        localStorage.setItem(LOGIN_TOKEN, auth);
    }
    return loginHelper(auth);
}

export function reloginAction() {
    if (typeof localStorage !== "undefined") {
        const auth = localStorage.getItem(LOGIN_TOKEN);
        if (typeof auth !== "undefined" && auth !== null) {
            return loginHelper(auth);
        }
    }
    return {
        type: FAKE_ACTION
    };
}

function logoutAction(data) {
    const request = axios.post(API_PATH + "/logout", data);
    if (typeof localStorage !== "undefined") {
        localStorage.removeItem(LOGIN_TOKEN);
    }
    return {
        type: LOGOUT_ACTION,
        payload: request
    };
}

function signupAction(data) {
    const request = axios.post(API_PATH + "/signup", data);
    return {
        type: SIGNUP_ACTION,
        payload: request
    };
}

export default userAuth;
