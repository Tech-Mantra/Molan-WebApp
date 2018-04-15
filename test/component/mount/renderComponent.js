/*
 * Molan: Molan WebApp - test/component/helper
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

import React from "react";
import { JSDOM } from "jsdom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { mount } from "enzyme";
import reducers from "../../../app/reducer";

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === "undefined")
        .reduce((result, prop) => (Object.assign({}, result, {
            [prop]: Object.getOwnPropertyDescriptor(src, prop)
        }), {}));
    Object.defineProperties(target, props);
}

const jsdom      = new JSDOM("<!DOCTYPE HTML><html><body></body></html>");
global.window    = jsdom.window;
global.document  = jsdom.window.document;
global.navigator = {
    userAgent: "node.js"
};
copyProps(jsdom.window, global);

const renderComponent = function (Component, props = {}, state = {}) {
    const createStoreWithMiddleware =
        applyMiddleware(promiseMiddleware)(createStore);
    const wrapper = mount(
        <Provider store={createStoreWithMiddleware(reducers, state)}>
            <div className="app_container">
                <Component {...props} />
            </div>
        </Provider>
    );

    return wrapper;
};

export default renderComponent;
