/*
 * Molan: Molan WebApp - test/utility/submit_action
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
import { FORM_SUBMISSION } from "../../app/action/actionTypes";
import submitAction from "../../app/action/submitAction";

let randomString = "Hello World";
const submitObject = {
    id: "Test Object",
    language: "c",
    source:
`#include <stdio.h>
int main(void) {
    printf("${randomString}");
    return 0;
}`,
    haveInput: false
};

const submitActionTest = describe("Checking form submission", function () {
    context("Form submission is working properly", function () {
        it("should have valid submit action", function () {
            assert(typeof submitAction, "function");
        });
        const action = submitAction(submitObject);
        it("should call submit action", function () {
            assert(typeof action, "object");
            assert(action.type, FORM_SUBMISSION);
        });
        it("should return a Promise Object", function () {
            assert(typeof action.payload, "object");
            assert(typeof action.payload.then, "function");
        });
        it("should return same id as sent", function (done) {
            action.payload.then(function (data) {
                done(data.id === submitObject.id);
            }).catch(function (err) {
                done(err);
            });
        });
        it(`should print '${randomString}' in output`, function (done) {
            action.payload.then(function (data) {
                done(data.output === randomString);
            }).catch(function (err) {
                done(err);
            });
        });
    });
});

export default submitActionTest;
