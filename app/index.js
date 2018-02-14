/*
 * Molan: Molan WebApp - index.js
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
import Header from "./component/header";
import Content from "./component/content";
import Footer from "./component/footer";

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.querySelector(".app_container"));
