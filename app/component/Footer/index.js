/*
 * Molan: Molan WebApp - app/component/footer
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
import { connect } from "react-redux";
import { checkStatus } from "../../action/statusAction";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.status = "Loading";
    }

    render() {
        if (typeof this.props.status !== "undefined" && this.props.status !== null) {
            this.status = this.props.status;
        }
        return(
            <footer className="mastfoot mt-auto">
                <div className="inner">
                    <p><label>&copy;</label> All rights reserved by <a href="https://github.com/Tech-Mantra" target="_blank">Tech-Mantra</a></p>
                    <p>API Status {this.status}</p>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.statusReducer.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkStatus: dispatch(checkStatus())
    };
};

const VisibleFooter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default VisibleFooter;
