/*
 * Molan: Molan WebApp - test/utility/index
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

import formReducerTest from "./formReducerTest";
import infoActionTest from "./infoActionTest";
import infoReducerTest from "./infoReducerTest";
import loginActionTest from "./loginActionTest";
import loginReducerTest from "./loginReducerTest";
import statusActionTest from "./statusActionTest";
import statusReducerTest from "./statusReducerTest";
import submitActionTest from "./submitActionTest";

const combinedUtilTest = {
    formReducerTest:   formReducerTest,
    infoActionTest:    infoActionTest,
    infoReducerTest:   infoReducerTest,
    loginActionTest:   loginActionTest,
    loginReducerTest:  loginReducerTest,
    statusActionTest:  statusActionTest,
    statusReducerTest: statusReducerTest,
    submitActionTest:  submitActionTest
};

export default combinedUtilTest;
