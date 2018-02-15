/*
 * Molan: Molan WebApp - app/component/header
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

class Navlink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <a className={this.props.selectedTab === this.props.currentTabID ? "nav-link active" : "nav-link"} href="#" onClick={(e)=>{this.props.updateTab(this.props.currentTabID)}}>{this.props.currentTabName}</a>
        );
    }
}

export default Navlink;
