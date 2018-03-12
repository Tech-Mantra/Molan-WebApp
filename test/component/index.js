/*
 * Molan: Molan WebApp - test/component/index
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

import CheckBoxTest from "./shallow/CheckBoxTest";
// import HeaderComponentTest from "./mount/HeaderComponentTest";
// import FileBtnTest from "./mount/FileBtnTest";
import InputComponentTest from "./shallow/InputComponentTest";
import LanguageComponentTest from "./shallow/LanguageComponentTest";
import ReloadBtnTest from "./shallow/ReloadBtnTest";
import SubmitBtnTest from "./shallow/SubmitBtnTest";

const combinedComponentTest = {
    CheckBoxTest:          CheckBoxTest,
    InputComponentTest:    InputComponentTest,
    LanguageComponentTest: LanguageComponentTest,
    ReloadBtnTest:         ReloadBtnTest,
    SubmitBtnTest:         SubmitBtnTest
};

export default combinedComponentTest;
