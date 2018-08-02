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
import { noop } from "lodash";
import { TAB_LIST } from "../../util/config";
import Navlink from "./Navlink";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { selectedTab, updateTab } = this.props;
        return(
            <header className="masthead mb-auto">
                <div className="inner">
                    <button type="button"
                     className="btn btn-dark masthead-brand"
                     data-toggle="tooltip"
                     data-placement="top"
                     title="Next Generation IDE">
                        <h3>Molan</h3>
                    </button>
                    <nav className="nav nav-masthead justify-content-center">
                    {
                        function () {
                            const NavlinkArray = [];
                            Object.values(TAB_LIST).forEach(function (item) {
                                NavlinkArray.push(
                                    <Navlink key={item.ID}
                                     selectedTab={selectedTab}
                                     currentTabID={item.ID}
                                     currentTabName={item.NAME}
                                     updateTab={updateTab}/>);
                            });
                            return NavlinkArray;
                        }()
                    }
                    </nav>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    selectedTab: PropTypes.number.isRequired,
    updateTab:   PropTypes.func.isRequired
};

Header.defaultProps = {
    selectedTab: 0,
    updateTab:   noop
};

export default Header;
