/*
 * Molan: Molan WebApp - app/component/language
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

class Language extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form>
              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <label className="mr-sm-2" htmlFor="SelectLang">Language</label>
                  <select className="custom-select mr-sm-2" id="SelectLang" onChange={this.props.onLanguageSelect} defaultValue="">
                    <option value="" disabled={true} hidden={true}>Choose a language</option>
                    <option value="c">C (STD C 99)</option>
                    <option value="cpp">C++ (STD C++ 99)</option>
                    <option value="javascript">Javascript (Node 8.9.4)</option>
                  </select>
                </div>
              </div>
            </form>
        );
    }
}

export default Language;
