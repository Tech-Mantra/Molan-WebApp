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
import checkStatus from "../../action/statusAction";
import checkInfo from "../../action/infoAction";
import "./style.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.status = "Loading";
        this.info = "No information available";
        this.reloadStatus = this.reloadStatus.bind(this);
    }

    componentWillMount() {
        this.props.checkStatus();
        this.props.checkInfo();
    }

    render() {
        if (typeof this.props.status !== "undefined" && this.props.status !== null) {
            this.status = this.props.status;
        }
        if (typeof this.props.info !== "undefined" && this.props.info !== null) {
            this.info = this.props.info;
        }
        return(
            <footer className="mastfoot mt-auto">
                <div className="inner footer-bottom">
                    <p>
                        <label>&copy;</label> All rights reserved by <a href="https://github.com/Tech-Mantra" target="_blank">Tech-Mantra</a>&nbsp;&bull;&nbsp;
                        <span className="mb-2 bg-light text-dark round-border no-padding-right" data-toggle="tooltip" data-placement="top" title={this.info}>API <label className={this.status === "Good" ? "mb-2 bg-success text-white round-border" : "mb-2 bg-danger text-white round-border"} onClick={this.reloadStatus}> {this.status}</label></span>
                    </p>
                </div>
            </footer>
        );
    }

    reloadStatus(event) {
        this.status = "Loading";
        this.props.checkStatus();
        this.props.checkInfo();
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.statusReducer.status,
        info: state.infoReducer.info
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkStatus: () => dispatch(checkStatus()),
        checkInfo: () => dispatch(checkInfo())
    };
};

const VisibleFooter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default VisibleFooter;
