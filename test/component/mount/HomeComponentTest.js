/*
 * Molan: Molan WebApp - test/component/home
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
import renderComponent from "./renderComponent";
import HomeComponent from "../../../app/component/Home";

const HomeComponentTest = describe("Testing Home component", function () {
    const HomeElement = renderComponent(HomeComponent);
    it("should render a Language component", function () {
        assert(HomeElement.find("Language").length, 1);
    });
    it("should render three operating buttons", function () {
        assert(HomeElement.find("FileBtn").length, 1);
        assert(HomeElement.find("ReloadBtn").length, 1);
        assert(HomeElement.find("SaveBtn").length, 1);
    });
    it("should render the text editor", function () {
        assert(HomeElement.find("MonacoEditor").length, 1);
    });
    it("should render a Checkbox component", function () {
        assert(HomeElement.find("Checkbox").length, 1);
    });
    it("should render a EmailBtn if user logged in", function () {
        const wrapperElem = renderComponent(HomeComponent, {}, {
            loginReducer: {
                loggedIn: true,
                username: "test"
            }
        });
        assert(wrapperElem.find("EmailBtn").length, 1);
    });
});

export default HomeComponentTest;
