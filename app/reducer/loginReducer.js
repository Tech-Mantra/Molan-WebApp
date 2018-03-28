/*
 * Molan: Molan WebApp - app/reducer/login
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

import { LOGIN_ACTION, LOGIN_FAILURE, LOGOUT_ACTION, LOGOUT_FAILURE, SIGNUP_ACTION } from "../action/actionTypes";

const loginReducer = function (state = {}, action) {
    switch (action.type) {
        case LOGIN_ACTION:
        case SIGNUP_ACTION: {
            console.log("loginReducer: ", action);
            const data = action.payload.data || { loggedIn: false, error: LOGIN_FAILURE, cache: [] };
            return Object.assign({}, state, { cache: data.cache, error: data.error, loggedIn: data.loggedIn, username: data.username });
        }
        case LOGOUT_ACTION: {
            console.log("logoutReducer: ", action);
            const data = action.payload.data || { loggedIn: true, error: LOGOUT_FAILURE };
            return Object.assign({}, state, { error: data.error, loggedIn: data.loggedIn });
        }
        default:
            return state;
    }
};

export default loginReducer;
