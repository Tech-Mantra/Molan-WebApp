/*
 * Molan: Molan WebApp - test/utility/status_reducer
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
import { API_STATUS, API_GOOD, API_BAD } from "../../app/action/actionTypes";
import statusReducer from "../../app/reducer/statusReducer";

const RANDOM_ACTION = "Random_Action",
      RANDOM_DATA   = "Random_Data";

const statusReducerTest = describe("Checking status reducer", function () {
    context("Other than status check action", function () {
        it("should not mutate for other actions", function () {
            const randomAction = {
                type: RANDOM_ACTION,
                payload: {
                    data: RANDOM_DATA
                }
            };
            let state = new Object();
            let newState = statusReducer(state, randomAction);
            assert(state, newState);
        });
    });
    context("Status check action", function () {
        const action = {
            type: API_STATUS,
            payload: {}
        };
        it("should update for status check action", function () {
            let state = new Object();
            let newState = statusReducer(state, action);
            assert(state !== newState);
        });
        it("should hold error message in case of empty value", function () {
            let state = new Object();
            let newState = statusReducer(state, action);
            assert(newState.status, API_BAD);
        });
        it("should update status if response is 200 OK", function () {
            const action2 = Object.assign({}, action);
            action2.payload.data = 200;
            let state = new Object();
            let newState = statusReducer(state, action2);
            assert(newState.status, API_GOOD);
        });
    });
});

export default statusReducerTest;
