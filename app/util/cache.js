/*
 * Molan: Molan WebApp - app/util/cache
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

export const LOCALKEY = "molan";

function cache(code) {
    if (typeof localStorage.molan === "undefined" || localStorage.molan === null) {
        const set = [];
        localStorage.setItem(LOCALKEY, JSON.stringify(set));
        return set;
    }
    if (typeof code !== "undefined" && code !== null) {
        localStorage.setItem(LOCALKEY, JSON.stringify(code));
        return code;
    }
    return JSON.parse(localStorage.getItem(LOCALKEY));
}

export default cache;
