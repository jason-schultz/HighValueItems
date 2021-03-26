"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
//import './styles/index.css';
var App_1 = require("./app/App");
var reportWebVitals_1 = require("./reportWebVitals");
var react_1 = require("@chakra-ui/react");
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(react_1.ChakraProvider, null,
        React.createElement(App_1.default, null))), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1.default();
//# sourceMappingURL=index.js.map