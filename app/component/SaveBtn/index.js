/*
 * Molan: Molan WebApp - app/component/save_btn
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
import saveAs from "save-as";
import lang_ext from "../../util/lang_ext";

class SaveBtn extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return(
            <button type="button" className="btn btn-outline-light btn-sm small-btn" data-toggle="tooltip" data-placement="top" title="Save to file" onClick={this.onClick}>
                <i className="far fa-save"></i>
            </button>
        );
    }

    onClick(event) {
        const blob = new Blob([this.props.code], {type: "text/plain;charset=utf-8"});
        const fileName = `molan${lang_ext(this.props.language)}`;
        saveAs(blob, fileName);
    }
}

export default SaveBtn;
