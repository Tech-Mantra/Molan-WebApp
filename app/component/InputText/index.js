/*
 * Molan: Molan WebApp - app/component/input_text
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

class InputText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row align-items-center">
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputField">Enter your input here</label>
                            <textarea className="form-control" id="inputField" rows="2" onChange={this.props.onCustomInput}>{this.props.defaultValue}</textarea>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

InputText.propTypes = {
    defaultValue: PropTypes.string,
    onCustomInput: PropTypes.func.isRequired
};

export default InputText;
