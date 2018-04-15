/*
 * Molan: Molan WebApp - test/utility/info_action
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
import { API_INFO } from "../../app/action/actionTypes";
import checkInfo from "../../app/action/statusAction";

const infoActionTest = describe("Checking API Info", function () {
    context("API is functioning properly", function () {
        it("should have valid checkInfo action", function () {
            assert(typeof checkInfo, "function");
        });
        const action = checkInfo();
        it("should call checkInfo action", function () {
            assert(typeof action, "object");
            assert(action.type, API_INFO);
        });
        it("should return a Promise Object", function () {
            assert(typeof action.payload, "object");
            assert(typeof action.payload.then, "function");
        });
        it("should resolve 200 OK", function (done) {
            action.payload.then(function (res) {
                done(assert(res.status, 200));
            }).catch(function (err) {
                done(err);
            });
        });
    });
});

export default infoActionTest;
