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
import styles from './ThirdpartyApiCall.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
var ThirdpartyApiCall = /** @class */ (function (_super) {
    __extends(ThirdpartyApiCall, _super);
    function ThirdpartyApiCall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThirdpartyApiCall.prototype.render = function () {
        var _a = this.props, description = _a.description, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        return (React.createElement("section", { className: styles.thirdpartyApiCall + " " + (hasTeamsContext ? styles.teams : '') },
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
                    "Joke from Rest API: ",
                    React.createElement("strong", null, this.props.JokeText))),
            React.createElement("div", null,
                React.createElement("h3", null, "Welcome to SharePoint Framework!"),
                React.createElement("p", null, "The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It's the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling."))));
    };
    return ThirdpartyApiCall;
}(React.Component));
export default ThirdpartyApiCall;
//# sourceMappingURL=ThirdpartyApiCall.js.map