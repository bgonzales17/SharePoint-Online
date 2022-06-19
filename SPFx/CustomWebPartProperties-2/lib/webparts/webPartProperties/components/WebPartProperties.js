var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './WebPartProperties.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
var WebPartProperties = /** @class */ (function (_super) {
    __extends(WebPartProperties, _super);
    function WebPartProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebPartProperties.prototype.render = function () {
        var _a = this.props, description = _a.description, myDropdown = _a.myDropdown, myMultiline = _a.myMultiline, myCheckbox = _a.myCheckbox, myToggle = _a.myToggle, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        return (React.createElement("section", { className: styles.webPartProperties + " " + (hasTeamsContext ? styles.teams : '') },
            React.createElement("div", { className: styles.welcome },
                React.createElement("img", { alt: "", src: isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png'), className: styles.welcomeImage }),
                React.createElement("h2", null,
                    "Well done, ",
                    escape(userDisplayName),
                    "!"),
                React.createElement("div", null, environmentMessage),
                React.createElement("div", null,
                    "Web part property value: ",
                    React.createElement("strong", null, escape(description))),
                React.createElement("div", null,
                    "myMultiline value: ",
                    React.createElement("strong", null, escape(myMultiline))),
                React.createElement("div", null,
                    "Selected myDropdown value: ",
                    React.createElement("strong", null, escape(myDropdown))),
                "if(myToggle.selected)",
                React.createElement("div", null, " Toggle value selected is yes"),
                "else",
                React.createElement("div", null, " Toggle value selected is yes")),
            React.createElement("div", null,
                React.createElement("h3", null, "Welcome to SharePoint Framework!"),
                React.createElement("p", null, "The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It's the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling."))));
    };
    return WebPartProperties;
}(React.Component));
export default WebPartProperties;
//# sourceMappingURL=WebPartProperties.js.map