/*
 * Molan: Molan WebApp - test/component/header
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
import HeaderComponent from "../../app/component/Header";

const fakeCallback = spy();

if (typeof Object.prototype.values !== "function") {
    Object.prototype.values = function(item, cb) {
        return Object.keys(item).map(function (x) {
            if (typeof cb === "function") {
                cb(item[x]);
            }
            return item[x];
        });
    };
}

const HeaderComponentTest = describe("Testing Header component", function () {
    const HeaderElement = shallow(<HeaderComponent selectedTab={0} updateTab={fakeCallback}/>);
    it("should render three 'Navlink' element", function () {
        assert(HeaderElement.find("Navlink").length, 3);
    });
    it("should call the handler when clicked", function () {
        HeaderElement.find("Navlink")[0].simulate("click");
        assert(fakeCallback.calledOnce, true);
    });
});

export default HeaderComponentTest;
