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
import { LOGIN_ACTION, LOGOUT_ACTION, SIGNUP_ACTION, SAVE_TEMPLATE } from "./actionTypes";

const LOCAL_KEY = "MOLAN_USER_AUTH";

function userAuth(event, object) {
    if (typeof object !== "undefined" && object !== null) {
        switch (event) {
            case LOGIN_ACTION: {
                if (typeof localStorage !== "undefined") {
                    localStorage.setItem(LOCAL_KEY, object);
                }
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

function loginAction(data) {
    const auth = new Buffer(`${data.username}:${data.password}`);
    const request = axios.post(API_PATH + "/login", null, { headers: { Authorization: `Basic ${auth.toString("base64")}` }});
    return {
        type: LOGIN_ACTION,
        payload: request
    };
}

export function reloginAction() {
    if (typeof localStorage !== "undefined") {
        const data = localStorage.getItem(LOCAL_KEY);
        if (typeof data !== "undefined" && data !== null) {
            loginAction(data);
        }
    }
}

function logoutAction(data) {
    const request = axios.post(API_PATH + "/logout", data);
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

export function saveTemplate(user, code) {
    console.log(SAVE_TEMPLATE, user, code);
}

export default userAuth;
