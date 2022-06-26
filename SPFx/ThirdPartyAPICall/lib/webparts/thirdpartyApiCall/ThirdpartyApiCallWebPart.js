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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'ThirdpartyApiCallWebPartStrings';
import ThirdpartyApiCall from './components/ThirdpartyApiCall';
import { HttpClient } from '@microsoft/sp-http';
var ThirdpartyApiCallWebPart = /** @class */ (function (_super) {
    __extends(ThirdpartyApiCallWebPart, _super);
    function ThirdpartyApiCallWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = '';
        return _this;
    }
    ThirdpartyApiCallWebPart.prototype.onInit = function () {
        this._environmentMessage = this._getEnvironmentMessage();
        return _super.prototype.onInit.call(this);
    };
    ThirdpartyApiCallWebPart.prototype.render = function () {
        var _this = this;
        if (!this.renderedOnce) {
            this._getJoke().then(function (response) {
                var element = React.createElement(ThirdpartyApiCall, {
                    description: _this.properties.description,
                    isDarkTheme: _this._isDarkTheme,
                    environmentMessage: _this._environmentMessage,
                    hasTeamsContext: !!_this.context.sdks.microsoftTeams,
                    userDisplayName: _this.context.pageContext.user.displayName,
                    JokeText: response
                });
                ReactDom.render(element, _this.domElement);
            });
        }
    };
    ThirdpartyApiCallWebPart.prototype._getJoke = function () {
        return this.context.httpClient.get("https://geek-jokes.sameerkumar.website/api", HttpClient.configurations.v1)
            .then(function (response) {
            return response.text();
        })
            .then(function (textResponse) {
            return textResponse;
        });
    };
    ThirdpartyApiCallWebPart.prototype._getEnvironmentMessage = function () {
        if (!!this.context.sdks.microsoftTeams) { // running in Teams
            return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
        }
        return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
    };
    ThirdpartyApiCallWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
        this.domElement.style.setProperty('--link', semanticColors.link);
        this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);
    };
    ThirdpartyApiCallWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(ThirdpartyApiCallWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    ThirdpartyApiCallWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ThirdpartyApiCallWebPart;
}(BaseClientSideWebPart));
export default ThirdpartyApiCallWebPart;
//# sourceMappingURL=ThirdpartyApiCallWebPart.js.map