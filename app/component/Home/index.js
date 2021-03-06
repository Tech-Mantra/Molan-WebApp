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
import PropTypes from "prop-types";
import MonacoEditor from "react-monaco-editor";
import { connect } from "react-redux";
import submitAction from "../../action/submitAction";
import Language from "../Language";
import Checkbox from "../Checkbox";
import InputText from "../InputText";
import OutputText from "../OutputText";
import EmailBtn from "../EmailBtn";
import ReloadBtn from "../ReloadBtn";
import SaveBtn from "../SaveBtn";
import FileBtn from "../FileBtn";
import SubmitBtn from "../SubmitBtn";
import cache, { LOCALKEY } from "../../util/cache";
import init_code from "../../util/init_code";
import "./style.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.code  = cache();
        this.state = {
            inputCheck: false,
            input:      "",
            language:   this.code.length > 0 ?
                        this.code[0].language :
                        "c"
        };
        this.id                   = null;
        this.input                = "";
        this.onChange             = this.onChange.bind(this);
        this.onLanguageSelect     = this.onLanguageSelect.bind(this);
        this.onFileUpload         = this.onFileUpload.bind(this);
        this.onReload             = this.onReload.bind(this);
        this.onCustomInputChecked = this.onCustomInputChecked.bind(this);
        this.onCustomInput        = this.onCustomInput.bind(this);
        this.onSubmit             = this.onSubmit.bind(this);
    }

    editorDidMount(editor, monaco) {
        console.log("editorDidMount: ", editor, monaco);
        // editor.focus();
    }

    onChange(newValue) {
        const language = this.state.language;
        const snippet = this.code.find(e => e.language === language);
        snippet.code = newValue;
        snippet.timestamp = Date.now();
        cache(this.code);
    }

    render() {
        const language = this.state.language;
        let code = null;
        const snippet = this.code.find(e => e.language === language);
        if (typeof snippet === "undefined" || snippet === null) {
            code = init_code(language);
            this.code.push({
                language: language,
                code: code,
                timestamp: 0
            });
        } else {
            code = snippet.code;
        }
        const options = {
            selectOnLineNumbers: true
        };
        return(
            <main className="inner"
            role="main"
             style={{textAlign: "justify"}}>
                <div className="row align-items-start">
                    <div className="col align-self-start">
                        <Language
                         defaultValue={this.state.language}
                         onLanguageSelect={this.onLanguageSelect}/>
                    </div>
                    <div className="col align-self-end"
                     style={{ textAlign: "right" }}>
                        {
                            this.props.login &&
                            <EmailBtn email={this.props.user}/>
                        }
                        <FileBtn onChange={this.onFileUpload}/>
                        <ReloadBtn onReload={this.onReload}/>
                        <SaveBtn code={code} language={language}/>
                    </div>
                </div>
                <div className="row align-items-center editor-row">
                    <div className="col align-self-start">
                        <MonacoEditor height="300"
                         language={language}
                         theme="vs-light"
                         value={code}
                         options={options}
                         onChange={this.onChange}
                         editorDidMount={this.editorDidMount}
                        />
                    </div>
                </div>
                <div className="row align-items-end btn-space">
                    <div className="col align-self-middle">
                        <Checkbox
                         inputCheck={this.state.inputCheck}
                         onCustomInputChecked={this.onCustomInputChecked}/>
                    </div>
                    <div className="col align-self-start"
                     style={{textAlign: "right"}}>
                        <SubmitBtn onSubmit={this.onSubmit}/>
                    </div>
                </div>
                <div className="row align-items-start">
                {
                    this.state.inputCheck &&
                    <div className="col align-self-middle">
                        <InputText
                         value={this.state.input}
                         onCustomInput={this.onCustomInput}/>
                    </div>
                }
                {
                    this.id === this.props.id  &&
                    <div className="col align-self-middle">
                        <OutputText
                         id={this.props.id}
                         status={this.props.status}
                         input={this.props.input}
                         output={this.props.output}/>
                    </div>
                }
                </div>
            </main>
        );
    }

    onLanguageSelect(event) {
        let newState = Object.assign({}, this.state, {
            language: event.target.value
        });
        this.setState(newState);
    }

    onFileUpload(value) {
        this.onChange(value);
        cache(value);
        this.forceUpdate();
    }

    onReload() {
        if (typeof localStorage !== "undefined") {
            localStorage.removeItem(LOCALKEY);
        }
        this.code = [];
        this.forceUpdate();
    }

    onCustomInputChecked() {
        let newState = Object.assign({}, this.state, {
            inputCheck: ! this.state.inputCheck
        });
        this.setState(newState);
    }

    onCustomInput(event) {
        let newState = Object.assign({}, this.state, {
            input: event.target.value
        });
        this.setState(newState);
    }

    onSubmit() {
        const { language } = this.state;
        const code = this.code.find(e => e.language === language).code;
        this.id = Date.now();
        const submitObject = {
            id:        this.id,
            language:  language,
            source:    code,
            haveInput: this.state.inputCheck,
            input:     this.state.input
        };
        if (typeof this.props.user === "string") {
            submitObject.username = this.props.user;
        }
        this.props.submitAction(submitObject);
        this.setState({ inputCheck: false });
    }
}

Home.propTypes = {
    login:        PropTypes.bool,
    user:         PropTypes.string,
    id:           PropTypes.number,
    status:       PropTypes.string,
    input:        PropTypes.string,
    output:       PropTypes.string,
    submitAction: PropTypes.func
};

const mapStateToProps = function (state) {
    return {
        login:  state.loginReducer.loggedIn,
        user:   state.loginReducer.username,
        id:     state.formReducer.id,
        status: state.formReducer.status,
        input:  state.formReducer.input,
        output: state.formReducer.output
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        submitAction: data => dispatch(submitAction(data))
    };
};

const VisibleHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default VisibleHome;
