/*
 * Molan: Molan WebApp - test/component/content
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
import {
    PAGE_TITLE, TAB_LIST, CONTENT_ERROR
} from "../../../app/util/config";
import Content from "../../../app/component/Content";

const ContentTest = describe("Testing Content Management component",
    function () {

    it("should display 'Home' page as default", function () {
        const ContentEl_1 = renderComponent(Content);
        assert(ContentEl_1.find("Home").length, 1);
        assert(document.title, TAB_LIST.HOME.NAME + " • " + PAGE_TITLE);
    });
    it("should change content according to props", function () {
        const ContentEl_2 = renderComponent(Content, {
            selectedTab: TAB_LIST.FEATURES.ID
        });
        assert(ContentEl_2.find("Home").length === 0);
        assert(document.title, TAB_LIST.FEATURES.NAME + " • " + PAGE_TITLE);
    });
    it("should give error message for invalid props", function () {
        const ContentEl_3 = renderComponent(Content, {
            selectedTab: -1
        });
        assert(ContentEl_3.find("h3").first().props().children,
            CONTENT_ERROR);
        assert(document.title, "Error • " + PAGE_TITLE);
    });
});

export default ContentTest;
