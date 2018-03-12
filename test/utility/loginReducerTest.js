/*
 * Molan: Molan WebApp - test/utility/login_reducer
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

import assert from "assert";
import { LOGIN_ACTION, LOGIN_FAILURE, LOGOUT_ACTION, LOGOUT_FAILURE } from "../../app/action/actionTypes";
import loginReducer from "../../app/reducer/loginReducer";

const RANDOM_ACTION = "Random_Action",
      RANDOM_DATA   = "Random_Data";

const loginReducerTest = describe("Checking login reducer", function () {
    context("Other than login/signup action", function () {
        it("should not mutate for other actions", function () {
            const randomAction = {
                type: RANDOM_ACTION,
                payload: {
                    data: RANDOM_DATA
                }
            };
            let state = new Object();
            let newState = loginReducer(state, randomAction);
            assert(state, newState);
        });
    });
    context("Login/Signup action", function () {
        const action = {
            type: LOGIN_ACTION,
            payload: {}
        };
        it("should update for login", function () {
            let state = new Object();
            let newState = loginReducer(state, action);
            assert(state !== newState);
        });
        it("should hold error message in case of empty value", function () {
            let state = new Object();
            let newState = loginReducer(state, action);
            assert(newState.error, LOGIN_FAILURE);
        });
        it("should update user information if value exists", function () {
            const action2 = Object.assign({}, action);
            action2.payload.data = { username: RANDOM_DATA };
            let state = new Object();
            let newState = loginReducer(state, action2);
            assert(newState.username, RANDOM_DATA);
        });
    });
    context("Logout action", function () {
        const action = {
            type: LOGOUT_ACTION,
            payload: {}
        };
        it("should update for logout", function () {
            let state = new Object();
            let newState = loginReducer(state, action);
            assert(state !== newState);
        });
        it("should hold error message in case of empty value", function () {
            let state = new Object();
            let newState = loginReducer(state, action);
            assert(newState.error, LOGOUT_FAILURE);
        });
        it("should logout user information if response exists", function () {
            const action2 = Object.assign({}, action);
            action2.payload.data = { loggedIn: false };
            let state = new Object();
            let newState = loginReducer(state, action2);
            assert(newState.loggedIn === false);
        });
    });
});

export default loginReducerTest;
