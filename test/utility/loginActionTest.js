/*
 * Molan: Molan WebApp - test/utility/login_action
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
import {
    LOGIN_ACTION, LOGOUT_ACTION, SIGNUP_ACTION
} from "../../app/action/actionTypes";
import userAuth from "../../app/action/loginAction";

const userInfo = {
    username: "abc@cba.com",
    password: "1234"
};

const loginActionTest = describe("Checking user authentication", function () {
    context("Creating a new user", function () {
        it("should have a valid userAuth function", function () {
            assert(typeof userAuth, "function");
        });
        const action = userAuth(SIGNUP_ACTION, userInfo);
        it("should call login action", function () {
            assert(typeof action, "object");
            assert(action.type, SIGNUP_ACTION);
        });
        it("should return a Promise Object", function () {
            assert(typeof action.payload, "object");
            assert(typeof action.payload.then, "function");
        });
        it("should log in the current user", function (done) {
            action.payload.then(function (res) {
                done(assert(res.data.loggedIn, true));
            }).catch(function (err) {
                done(err);
            });
        });
    });
    context("Logging out current user", function () {
        const action = userAuth(LOGOUT_ACTION, { username: userInfo.username });
        it("should call logout action", function () {
            assert(typeof action, "object");
            assert(action.type, LOGOUT_ACTION);
        });
        it("should return a Promise Object", function () {
            assert(typeof action.payload, "object");
            assert(typeof action.payload.then, "function");
        });
        it("should log out the current user", function (done) {
            action.payload.then(function (res) {
                done(assert(res.data.loggedIn === false, true));
            }).catch(function (err) {
                done(err);
            });
        });
    });
    context("Logging in a valid user", function () {
        const action = userAuth(LOGIN_ACTION, userInfo);
        it("should call login action", function () {
            assert(typeof action, "object");
            assert(action.type, LOGIN_ACTION);
        });
        it("should return a Promise Object", function () {
            assert(typeof action.payload, "object");
            assert(typeof action.payload.then, "function");
        });
        it("should log in the current user", function (done) {
            action.payload.then(function (res) {
                done(assert(res.data.username, userInfo.username));
            }).catch(function (err) {
                done(err);
            });
        });
    });
});

export default loginActionTest;
