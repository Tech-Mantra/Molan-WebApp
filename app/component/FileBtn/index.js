/*
 * Molan: Molan WebApp - app/component/file_btn
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

class FileBtn extends Component {
    constructor(props) {
        super(props);
        this.fileBtn = null;
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return(
            <button type="button" className="btn btn-outline-light btn-sm small-btn" data-toggle="tooltip" data-placement="top" title="Upload a file" onClick={this.onClick}>
                <i className="fas fa-upload"></i>
                <input type="file" accepts=".c,.cpp,.java,.js,.py" style={{ display: "none" }} ref={input => this.fileBtn = input} onChange={this.onChange}/>
            </button>
        );
    }

    onClick(event) {
        this.fileBtn.click();
    }

    onChange(event) {
        const file = event.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = function(event) {
            this.props.onChange(event.target.result, event);
        }.bind(this);
        fileReader.readAsText(file, "utf-8");
    }
}

export default FileBtn;
