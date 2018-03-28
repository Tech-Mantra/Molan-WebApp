/*
 * Molan: Molan WebApp - app/component/theme
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
import "./style.css";

class Theme extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form>
              <div className="form-row align-items-center">
                <div className="col-auto my-1 align-right">
                  <label className="mr-sm-2" htmlFor="SelectTheme">Theme</label>
                  <select className="custom-select mr-sm-2" id="SelectTheme" onChange={this.props.onThemeSelect} defaultValue={this.props.defaultValue}>
                    <option value="vs-light">Light</option>
                    <option value="vs-dark">Dark</option>
                  </select>
                </div>
              </div>
            </form>
        );
    }
}

Theme.propTypes = {
    defaultValue:  PropTypes.string.isRequired,
    onThemeSelect: PropTypes.func.isRequired
};

export default Theme;
