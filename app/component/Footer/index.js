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
import PropTypes from "prop-types";
import { noop } from "lodash";
import { connect } from "react-redux";
import { INFO_ERROR } from "../../action/actionTypes";
import checkStatus from "../../action/statusAction";
import checkInfo from "../../action/infoAction";
import "./style.css";

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.reloadStatus = this.reloadStatus.bind(this);
    }

    componentWillMount() {
        this.props.checkStatus();
        this.props.checkInfo();
    }

    render() {
        const labelClass = this.props.status === "Good" ?
                           "mb-2 bg-success text-white round-border" :
                           "mb-2 bg-danger text-white round-border";
        return(
            <footer className="mastfoot mt-auto">
                <div className="inner footer-bottom">
                    <p>
                        <label>&copy;</label> All rights reserved by
                        <a href="https://github.com/Tech-Mantra"
                         target="_blank"
                         rel="noopener noreferrer">
                            Tech-Mantra</a>&nbsp;&bull;&nbsp;
                        <span className="mb-2 bg-light text-dark round-border no-padding-right"
                         data-toggle="tooltip"
                         data-placement="top"
                         title={this.props.info}>
                            API
                            <label
                             className={labelClass}
                             onClick={this.reloadStatus}>
                                {this.props.status}
                            </label>
                        </span>
                    </p>
                </div>
            </footer>
        );
    }

    reloadStatus() {
        this.props.checkStatus();
        this.props.checkInfo();
    }
}

Footer.propTypes = {
    status:      PropTypes.string.isRequired,
    info:        PropTypes.string.isRequired,
    checkStatus: PropTypes.func.isRequired,
    checkInfo:   PropTypes.func.isRequired
};

Footer.defaultProps = {
    status:      "Loading",
    info:        INFO_ERROR,
    checkStatus: noop,
    checkInfo:   noop
};

const mapStateToProps = function (state) {
    return {
        status: state.statusReducer.status,
        info:   state.infoReducer.info
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        checkStatus: () => dispatch(checkStatus()),
        checkInfo:   () => dispatch(checkInfo())
    };
};

const VisibleFooter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default VisibleFooter;
