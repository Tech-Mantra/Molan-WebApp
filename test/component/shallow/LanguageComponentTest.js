/*
 * Molan: Molan WebApp - test/component/language
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
import React from "react";
import { shallow } from "enzyme";
import { spy } from "sinon";
import Language from "../../../app/component/Language";

const fakeCallback = spy();

const LanguageComponentTest = describe("Testing Language component", function () {
    const LanguageElement = shallow(<Language onLanguageSelect={fakeCallback} defaultValue="c"/>);
    it("should render a dropdown list of options", function () {
        assert(LanguageElement.find("select").length, 1);
    });
    it("should select defaultValue when mounted", function () {
        console.log("No test provided...");
    });
    it("should call the change handler when selected a value", function () {
        let event = { target: { value: "cpp" }};
        LanguageElement.find("select").simulate("change", event);
        assert(fakeCallback.calledWith(event), true);
    });
});

export default LanguageComponentTest;
