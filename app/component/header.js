/*
 * Molan: Molan WebApp - header.js
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

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header class="masthead mb-auto">
                <div class="inner">
                    <button type="button" class="btn btn-dark masthead-brand" data-toggle="tooltip" data-placement="top" title="Next Generation IDE">
                        <h3>Molan</h3>
                    </button>
                    <nav class="nav nav-masthead justify-content-center">
                        <a class="nav-link active" href="#">Home</a>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Contact</a>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
