/*
 * Molan: Molan WebApp - app/component/reload_btn
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

class ReloadBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button type="button"
             className="btn btn-outline-light btn-sm small-btn"
             data-toggle="tooltip"
             data-placement="top"
             title="Reload initial code"
             onClick={this.props.onReload}>
                <i className="fas fa-sync-alt"></i>
            </button>
        );
    }
}

ReloadBtn.propTypes = {
    onReload: PropTypes.func.isRequired
};

ReloadBtn.defaultProps = {
    onReload: noop
};

export default ReloadBtn;
