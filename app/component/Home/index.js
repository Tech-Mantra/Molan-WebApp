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
import MonacoEditor from "react-monaco-editor";
import Language from "../Language";
import Checkbox from "../Checkbox";
import InputText from "../InputText";
import SubmitBtn from "../SubmitBtn";
import init_code from "../../util/init_code";
import "./style.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCheck: false,
            language: "c"
        };
        this.code = [];
        this.input = null;
        this.onChange = this.onChange.bind(this);
        this.onLanguageSelect = this.onLanguageSelect.bind(this);
        this.onCustomInputChecked = this.onCustomInputChecked.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    editorDidMount(editor, monaco) {
        // console.log("editorDidMount", editor);
        editor.focus();
    }

    onChange(newValue, event) {
        const language = this.state.language;
        const snippet = this.code.find(e => e.language === language);
        snippet.code = newValue;
    }

    render() {
        console.log("Home:", this.state);
        const language = this.state.language;
        let code = null;
        const snippet = this.code.find(e => e.language === language);
        if (typeof snippet === "undefined" || snippet === null) {
            code = init_code(language);
            this.code.push({
                language: language,
                code: code
            });
        } else {
            code = snippet.code;
        }
        const options = {
            selectOnLineNumbers: true
        };
        return(
            <main role="main" className="inner" style={{textAlign: "justify"}}>
                <div className="row align-items-start">
                    <div className="col align-self-start">
                        <Language defaultValue={this.state.language} onLanguageSelect={this.onLanguageSelect}/>
                    </div>
                </div>
                <div className="row align-items-center editor_row">
                    <div className="col align-self-start">
                        <MonacoEditor
                            height="800"
                            language={language}
                            theme={this.state.theme}
                            value={code}
                            options={options}
                            onChange={this.onChange}
                            editorDidMount={this.editorDidMount}
                        />
                    </div>
                </div>
                <div className="row align-items-end btn_space">
                    <div className="col align-self-start">
                        <Checkbox inputCheck={this.state.inputCheck} onCustomInputChecked={this.onCustomInputChecked}/>
                    </div>
                    <div className="col align-self-end" style={{textAlign: "right"}}>
                        <SubmitBtn onSubmit={this.onSubmit}/>
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

    onSubmit(event) {
        const language = this.state.language;
        const code = this.code.find(e => e.language === language).code;
        const submitObject = {
            id: Date.now(),
            language: language,
            source: code,
            haveInput: this.state.inputCheck === true,
            input: this.input
        };
        console.log("Submission: ", submitObject);
    }
}

export default Home;
