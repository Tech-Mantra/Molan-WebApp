/*
 * Molan: Molan WebApp - test/component/checkbox
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
import Checkbox from "../../../app/component/Checkbox";

const fakeCallback = spy();

const CheckboxTest = describe("Testing Checkbox component", function () {
    const CheckboxElement = shallow(<Checkbox inputCheck={true}
        onCustomInputChecked={fakeCallback}/>);
    it("should render a checkbox for custom input", function () {
        assert(CheckboxElement.find("input [type=\"checkbox\"]").length, 1);
    });
    it("should call the change handler when checked", function () {
        let event = { target: { value: true }};
        CheckboxElement.find("input [type=\"checkbox\"]")
            .simulate("change", event);
        assert(fakeCallback.calledWith(event), true);
    });
});

export default CheckboxTest;
