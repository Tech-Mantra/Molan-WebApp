/*
 * Molan: Molan WebApp - app/action/submit_form
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

import axios from "axios";
import { API_PATH } from "../util/config";
import { FORM_SUBMISSION } from "./actionTypes";

function submitAction(formObject) {
    if (typeof formObject !== "undefined" && formObject !== null) {
        const request = axios.post(API_PATH + "/submit", formObject);
        return {
            type: FORM_SUBMISSION,
            payload: request
        };
    }
}

export default submitAction;
