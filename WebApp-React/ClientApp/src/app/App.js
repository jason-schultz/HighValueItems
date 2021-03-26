"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var React = require("react");
var Container_1 = require("../components/Container");
var Header_1 = require("../components/Header");
require("./App.css");
function App() {
    return (React.createElement(react_1.Box, { maxW: "xl", maxH: "xl" },
        React.createElement(Header_1.default, null),
        React.createElement("div", { style: {
                position: 'absolute', left: '50%', transform: 'translate(-50%)'
            } },
            React.createElement(Container_1.default, null))));
}
exports.default = App;
//# sourceMappingURL=App.js.map