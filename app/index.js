/*
 * Molan: Molan WebApp - app/index
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
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
import reducer from "./reducer";
import { TAB_LIST } from "./util/config";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: TAB_LIST.HOME.ID
        };
        this.updateTab = this.updateTab.bind(this);
    }

    render() {
        console.log("App/index.js:", this.state);
        return(
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <Header selectedTab={this.state.selectedTab} updateTab={this.updateTab}/>
                <Content selectedTab={this.state.selectedTab}/>
                <Footer/>
            </div>
        );
    }

    updateTab(newTab) {
        let newState = Object.assign({}, this.state, { selectedTab: newTab });
        this.setState(newState);
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.querySelector(".app_container"));
