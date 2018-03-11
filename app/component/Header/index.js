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
import PropTypes from "prop-types";
import { TAB_ID } from "../../util/config";
import Navlink from "./Navlink";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header className="masthead mb-auto">
                <div className="inner">
                    <button type="button" className="btn btn-dark masthead-brand" data-toggle="tooltip" data-placement="top" title="Next Generation IDE">
                        <h3>Molan</h3>
                    </button>
                    <nav className="nav nav-masthead justify-content-center">
                        <Navlink selectedTab={this.props.selectedTab} currentTabID={TAB_ID.HOME} currentTabName="Home" updateTab={this.props.updateTab}/>
                        <Navlink selectedTab={this.props.selectedTab} currentTabID={TAB_ID.FEATURES} currentTabName="Features" updateTab={this.props.updateTab}/>
                        <Navlink selectedTab={this.props.selectedTab} currentTabID={TAB_ID.CONTACT} currentTabName="Contact" updateTab={this.props.updateTab}/>
                    </nav>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    selectedTab: PropTypes.number,
    updateTab: PropTypes.func
};

export default Header;
