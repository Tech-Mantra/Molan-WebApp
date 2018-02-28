/*
 * Molan: Molan WebApp - app/component/editor
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
import MonacoEditor from 'react-monaco-editor';
import "./style.css";

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: null
        };
    }

    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
    }

    onChange(newValue, e) {
        console.log('onChange', newValue, e);
    }

    render() {
        if (this.props.selectedLanguage === null) {
            return(
                <textarea className="form-control" placeholder="Please select a language first." rows="10" readOnly={true} disabled={true}></textarea>
            );
        }
        let defaultText = `// Please enter some ${this.props.selectedLanguage} code`;
        /*
        return(
            <textarea className="form-control" placeholder={defaultText} rows="10"></textarea>
        );
        */
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <MonacoEditor
                height="800"
                language={this.props.selectedLanguage}
                theme="vs-light"
                value={code || defaultText}
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
            />
        );
    }
}

export default Editor;
