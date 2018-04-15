/*
 * Molan: Molan WebApp - test/component/output_text
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
import { EXE_STAT, DEFAULT_TEXT } from "../../../app/util/config";
import OutputText from "../../../app/component/OutputText";

const RANDOM_ID = 12345,
      RANDOM_ST = EXE_STAT.SUCCESS,
      RANDOM_IP = "Random Input",
      RANDOM_OP = "Random Output";

const classMethodSpy = spy(OutputText.prototype, "alertClassName");

const OutputTextTest = describe("Testing Result Output component",
    function () {

    const InputTextElement = shallow(<OutputText status={RANDOM_ST}
        id={RANDOM_ID}
        input={RANDOM_IP}
        output={RANDOM_OP}/>);
    it("should render a card div for output", function () {
        assert(InputTextElement.find(".card").length, 1);
    });
    it("should show the output status in badge", function () {
        assert(classMethodSpy.calledOnce, true);
    });
    it("should display the status in card title", function () {
        assert(InputTextElement.find(".card-title").innerText, RANDOM_ST);
    });
    it("should show the custom input inside card text", function () {
        assert(InputTextElement.find("#input").innerText, RANDOM_IP);
    });
    it("should show the result output inside card text", function () {
        assert(InputTextElement.find("#output").innerText, RANDOM_OP);
    });
    const InputTextElement2 = shallow(<OutputText status={RANDOM_ST}
        id={RANDOM_ID}/>);
    it("should show default value in case of empty input", function () {
        assert(InputTextElement2.find("#input").innerText,
            DEFAULT_TEXT.INPUT);
    });
    it("should show default value in case of empty output", function () {
        assert(InputTextElement2.find("#output").innerText,
            DEFAULT_TEXT.OUTPUT);
    });
});

export default OutputTextTest;
