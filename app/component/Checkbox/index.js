/*
 * Molan: Molan WebApp - app/component/checkbox
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

class Checkbox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="form-check">
                <input type="checkbox"
                 className="form-check-input"
                 checked={this.props.inputCheck}
                 onChange={this.props.onCustomInputChecked}
                 id="inputCheck"/>
                <label className="form-check-label" htmlFor="inputCheck">
                    Custom Input
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    inputCheck:           PropTypes.bool.isRequired,
    onCustomInputChecked: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
    inputCheck:           false,
    onCustomInputChecked: noop
};

export default Checkbox;
