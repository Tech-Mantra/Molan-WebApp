/*
 * Molan: Molan WebApp - app/component/output_text
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
import { EXE_STAT } from "../../util/config";
import "./style.css";

class OutputText extends Component {
    constructor(props) {
        super(props);
        this.alertClassName = this.alertClassName.bind(this);
    }

    render() {
        return(
            <div className="card">
                <div className="card-body text-holder">
                    <span className={this.alertClassName(this.props.status)}>
                        <h5 className="card-title">{this.props.status}</h5>
                    </span>
                    <small className="align-right">{this.props.id}</small>
                    <h6 className="card-subtitle mb-2">Custom Input</h6>
                    <pre className="card-text d-flex p-2 border-text" id="inputText">{this.props.input || <i>No input given</i>}</pre>
                    <h6 className="card-subtitle mb-2">Custom Output</h6>
                    <pre className="card-text d-flex p-2 border-text" id="outputText">{this.props.output || <i>No output to show</i>}</pre>
                </div>
            </div>
        );
    }

    alertClassName(status) {
        let alertClass;
        switch (status) {
            case EXE_STAT.SUCCESS:
                alertClass = "badge badge-success";
                break;
            case EXE_STAT.RUNTIME_ERROR:
                alertClass = "badge badge-danger";
                break;
            case EXE_STAT.COMPILE_ERROR:
                alertClass = "badge badge-warning";
                break;
            default:
                alertClass = "badge badge-info";
        }
        return alertClass;
    }
}

OutputText.propTypes = {
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    input: PropTypes.string,
    output: PropTypes.string
};

export default OutputText;
