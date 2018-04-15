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

class Navlink extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        const { selectedTab, currentTabID, currentTabName } = this.props;
        const anchorClass = selectedTab === currentTabID ?
                            "nav-link active" :
                            "nav-link";
        return(
            <a className={anchorClass}
             href="#"
             onClick={this.onClick}>
                {currentTabName}
            </a>
        );
    }

    onClick() {
        this.props.updateTab(this.props.currentTabID);
    }
}

Navlink.propTypes = {
    selectedTab:    PropTypes.number.isRequired,
    currentTabID:   PropTypes.number.isRequired,
    currentTabName: PropTypes.string.isRequired,
    updateTab:      PropTypes.func.isRequired
};

Navlink.defaultProps = {
    selectedTab: 0,
    updateTab:   noop
};

export default Navlink;
