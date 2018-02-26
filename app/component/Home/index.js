/*
 * Molan: Molan WebApp - app/component/home
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
import Language from "../Language";
import Editor from "../Editor";
import Checkbox from "../Checkbox";
import InputText from "../InputText";
import SubmitBtn from "../SubmitBtn";
import "./style.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCheck: false,
            language: null
        };
        this.onLanguageSelect = this.onLanguageSelect.bind(this);
        this.onCustomInputChecked = this.onCustomInputChecked.bind(this);
    }

    render() {
        console.log("Home:", this.state);
        return(
            <main role="main" className="inner" style={{textAlign: "justify"}}>
                <div className="row align-items-start">
                    <div className="col align-self-start">
                        <Language onLanguageSelect={this.onLanguageSelect}/>
                    </div>
                </div>
                <div className="row align-items-center editor_row">
                    <div className="col align-self-start">
                        <Editor selectedLanguage={this.state.language}/>
                    </div>
                    <div className="w-100"></div>
                </div>
                <div className="row align-items-end">
                    <div className="col align-self-start">
                        <Checkbox inputCheck={this.state.inputCheck} onCustomInputChecked={this.onCustomInputChecked}/>
                    </div>
                    <div className="col align-self-end" style={{textAlign: "right"}}>
                        <SubmitBtn/>
                    </div>
                </div>
                {
                    this.state.inputCheck &&
                    <InputText show={this.state.inputCheck}/>
                }
            </main>
        );
    }

    onLanguageSelect(event) {
        let newState = Object.assign({}, this.state, { language: event.target.value });
        this.setState(newState);
    }

    onCustomInputChecked(event) {
        let newState = Object.assign({}, this.state, { inputCheck: !this.state.inputCheck });
        this.setState(newState);
    }
}

export default Home;
