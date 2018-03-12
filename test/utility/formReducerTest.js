/*
 * Molan: Molan WebApp - test/utility/form_reducer
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
import { FORM_SUBMISSION, SUBMISSION_FAILED } from "../../app/action/actionTypes";
import formReducer from "../../app/reducer/formReducer";

const RANDOM_ACTION = "Random_Action",
      RANDOM_DATA   = "Random_Data";

const formReducerTest = describe("Checking form reducer", function () {
    context("Other than form submission", function () {
        it("should not mutate for other action", function () {
            const randomAction = {
                type: RANDOM_ACTION,
                payload: {
                    data: RANDOM_DATA
                }
            };
            let state = new Object();
            let newState = formReducer(state, randomAction);
            assert(state, newState);
        });
    });
    context("Form submission", function () {
        const action = {
            type: FORM_SUBMISSION,
            payload: {}
        };
        it("should update for form submission", function () {
            let state = new Object();
            let newState = formReducer(state, action);
            assert(state !== newState);
        });
        it("should hold error message in case of empty value", function () {
            let state = new Object();
            let newState = formReducer(state, action);
            assert(newState.status, SUBMISSION_FAILED);
        });
        it("should update data property if value exists", function () {
            const action2 = Object.assign({}, action);
            action2.payload.data = { id: RANDOM_DATA };
            let state = new Object();
            let newState = formReducer(state, action2);
            assert(newState.id, RANDOM_DATA);
        });
    });
});

export default formReducerTest;
