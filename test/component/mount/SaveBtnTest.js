/*
 * Molan: Molan WebApp - test/component/save_btn
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
// import { spy } from "sinon";
import renderComponent from "./renderComponent";
import SaveBtn from "../../../app/component/SaveBtn";

// const onClickSpy = spy(SaveBtn.prototype, "onClick");

const SaveBtnTest = describe("Testing Save Button component", function () {
    const SaveBtnElement = renderComponent(SaveBtn);
    it("should render a button for save", function () {
        assert(SaveBtnElement.find("button").length, 1);
    });
    /*
    it("should call the save file handler when clicked", function () {
        SaveBtnElement.find("button").simulate("click");
        assert(onClickSpy.calledOnce, true);
    });
    */
});

export default SaveBtnTest;
