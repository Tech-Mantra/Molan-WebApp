/*
 * Molan: Molan WebApp - app/reducer/info
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

import { API_INFO } from "../action/actionTypes";

const infoReducer = (state = {}, action) => {
    switch(action.type) {
        case API_INFO:
            console.log("infoReducer: ", action);
            return Object.assign({}, state, action.payload.data);
        default:
            return state;
    }
}

export default infoReducer;
