/*
 * Molan: Molan WebApp - app/component/submit_btn
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

class SubmitBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button type="button"
             className="btn btn-light custom-btn"
             onClick={this.props.onSubmit}>
                Submit
            </button>
        );
    }
}

SubmitBtn.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

SubmitBtn.defaultProps = {
    onSubmit: noop
};

export default SubmitBtn;
