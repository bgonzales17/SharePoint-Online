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
import { HttpClient } from '@microsoft/sp-http';
var ThirdpartyApiCall = /** @class */ (function (_super) {
    __extends(ThirdpartyApiCall, _super);
    function ThirdpartyApiCall(props, state) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            id: null,
            name: null,
            username: null,
            email: null,
            address: null,
            phone: null,
            website: null,
            company: null
        };
        return _this;
    }
    ThirdpartyApiCall.prototype.componentDidMount = function () {
        this.InvokeAPIAndSetDataIntoState();
    };
    ThirdpartyApiCall.prototype.componentDidUpdate = function (prevProps, prevState, prevContext) {
        this.InvokeAPIAndSetDataIntoState();
    };
    ThirdpartyApiCall.prototype.getUserDetails = function () {
        var url = this.props.apiURL + "/" + this.props.userID;
        return this.props.context.httpClient.get(url, HttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (jsonResponse) {
            return jsonResponse;
        });
    };
    ThirdpartyApiCall.prototype.InvokeAPIAndSetDataIntoState = function () {
        var _this = this;
        this.getUserDetails().then(function (response) {
            _this.setState({
                id: response.id,
                name: response.name,
                username: response.username,
                email: response.email,
                address: 'Street: ' + response.address.street + ' Suite: ' + response.address.suite + ' City' + response.address.city + ' Zip Code:' + response.address.zipcode,
                phone: response.phone,
                website: response.website,
                company: response.company.name
            });
        });
    };
    ThirdpartyApiCall.prototype.render = function () {
        var _a = this.props, description = _a.description, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        return (React.createElement("section", { className: styles.thirdpartyApiCall + " " + (hasTeamsContext ? styles.teams : '') },
            React.createElement("div", { className: styles.welcome },
                React.createElement("h2", null,
                    "Hi, ",
                    escape(userDisplayName),
                    "!"),
                React.createElement("div", null,
                    "Web part description: ",
                    React.createElement("strong", null, escape(description)))),
            React.createElement("div", null,
                React.createElement("span", null,
                    React.createElement("strong", null, "User Details:")),
                React.createElement("hr", null),
                React.createElement("div", null,
                    React.createElement("strong", null, "ID: "),
                    this.state.id),
                React.createElement("br", null),
                React.createElement("div", null,
                    React.createElement("strong", null, "User Name: "),
                    this.state.username),
                React.createElement("br", null),
                React.createElement("div", null,
                    React.createElement("strong", null, "Name: "),
                    this.state.name),
                React.createElement("br", null),
                React.createElement("div", null,
                    React.createElement("strong", null, "Address: "),
                    this.state.address),
                React.createElement("br", null),
                React.createElement("div", null,
                    React.createElement("strong", null, "Email: "),
                    this.state.email),
                React.createElement("br", null),
                React.createElement("div", null,
                    React.createElement("strong", null, "Phone: "),
                    this.state.phone),
                React.createElement("br", null),
                React.createElement("div", null,
                    React.createElement("strong", null, "Web site: "),
                    this.state.website),
                React.createElement("br", null),
                React.createElement("div", null,
                    React.createElement("strong", null, "Company: "),
                    this.state.company),
                React.createElement("br", null))));
    };
    return ThirdpartyApiCall;
}(React.Component));
export default ThirdpartyApiCall;
//# sourceMappingURL=ThirdpartyApiCall.js.map