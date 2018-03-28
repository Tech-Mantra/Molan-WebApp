/*
 * Molan: Molan WebApp - test/component/file_btn
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
import FileBtn from "../../../app/component/FileBtn";

const fakeCallback = spy(),
      clickHandler = spy(FileBtn.prototype, "onClick");

const FileBtnTest = describe("Testing File Button component", function () {
    const FileBtnElement = shallow(<FileBtn onChange={fakeCallback}/>);
    it("should render a button for file upload", function () {
        assert(FileBtnElement.find("button").length, 1);
    });
    context("File upload button responsiveness", function () {
        FileBtnElement.find("button").simulate("click");
        it("should trigger file input when clicked", function () {
            assert(clickHandler.calledOnce, true);
        });
        it("should call the upload handler when clicked", function () {
            assert(fakeCallback.calledOnce, true);
        });
    });
});

export default FileBtnTest;
