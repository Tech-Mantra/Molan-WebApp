/*
 * Molan: Molan WebApp - app/component/content
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
import { PAGE_TITLE, TAB_LIST } from "../../util/config";
import Home from "../Home";

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.selectedTab) {
            case TAB_LIST.HOME.ID:
                document.title = TAB_LIST.HOME.NAME + " • " + PAGE_TITLE;
                return(
                    <Home/>
                );
            case TAB_LIST.FEATURES.ID:
                document.title = TAB_LIST.FEATURES.NAME + " • " + PAGE_TITLE;
                return(
                    <h3>Features Available</h3>
                );
            case TAB_LIST.CONTACT.ID:
                document.title = TAB_LIST.CONTACT.NAME + " • " + PAGE_TITLE;
                return(
                    <h3>Contact Information</h3>
                );
            default:
                document.title = "Error • " + PAGE_TITLE;
                return(
                    <h3>Oops! Some error occured, please reload this page.</h3>
                );
        }
    }
}

Content.propTypes = {
    selectedTab: PropTypes.number.isRequired
};

export default Content;
