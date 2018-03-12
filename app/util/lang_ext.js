/*
 * Molan: Molan WebApp - app/util/lang_ext
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

const lang_ext = function (language) {
    switch (language) {
        case "c": case "C":
            return ".c";
        case "cpp": case "CPP": case "C++":
            return ".cpp";
        case "java": case "Java":
            return ".java";
        case "python": case "Python":
            return ".py";
        case "js": case "javascript": case "Javascript":
            return ".js";
        default:
            return ".txt";
    }
};

export default lang_ext;
