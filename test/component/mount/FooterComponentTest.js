/*
 * Molan: Molan WebApp - test/component/footer
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
import { spy } from "sinon";
import renderComponent from "./renderComponent";
import { INFO_ERROR } from "../../../app/action/actionTypes";
import { Footer as FooterComponent } from "../../../app/component/Footer";

const RANDOM_STATUS = "Good";

const checkStatusSpy = spy(),
      checkInfoSpy   = spy();

const FooterComponentTest = describe("Testing Footer component",
    function () {

    const FooterElement = renderComponent(FooterComponent, {
        status:      RANDOM_STATUS,
        checkStatus: checkStatusSpy,
        checkInfo:   checkInfoSpy
    });
    it("should check for API status", function () {
        assert(checkStatusSpy.calledOnce, true);
    });
    it("should render label with API status", function () {
        const labelClass = RANDOM_STATUS === "Good" ?
                           ".mb-2 .bg-success .text-white .round-border" :
                           ".mb-2 .bg-danger .text-white .round-border";
        assert(FooterElement.find(labelClass).length, 1);
    });
    it("should check for API info", function () {
        assert(checkInfoSpy.calledOnce, true);
    });
    it("should render span element with API info on it", function () {
        assert(FooterElement.find(`span[title="${INFO_ERROR}"]`).length,
            1);
    });
});

export default FooterComponentTest;
