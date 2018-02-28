/*
 * Molan: Molan WebApp - app/util/init_code
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


const ctemp =
`#include <stdio.h>

int main(void) {
    // You codes here
    return 0;
}`,
      cpptemp =
`#include <iostream>
using namespace std;

int main() {
    // You codes here
    return 0;
}`,
      javatemp =
`import java.io.*;
import java.util.*;

public class Molan {
    public static void main(String[] args) {
        // Your codes here
    }
}`,
       pytemp =
`# Cook your codes here
`,
       jstemp =
`// Enter your codes here
`;

function init_code(language) {
    switch (language) {
        case "c": case "C":
            return ctemp;
        case "cpp": case "CPP": case "C++":
            return cpptemp;
        case "java": case "Java":
            return javatemp;
        case "python":
            return pytemp;
        case "javascript":
            return jstemp;
        default:
            return null;
    }
}

export default init_code;
