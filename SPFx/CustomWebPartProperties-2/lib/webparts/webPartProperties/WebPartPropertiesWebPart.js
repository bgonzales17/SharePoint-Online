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
import { PropertyPaneTextField, PropertyPaneDropdown, PropertyPaneCheckbox, PropertyPaneToggle } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'WebPartPropertiesWebPartStrings';
import WebPartProperties from './components/WebPartProperties';
var WebPartPropertiesWebPart = /** @class */ (function (_super) {
    __extends(WebPartPropertiesWebPart, _super);
    function WebPartPropertiesWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = '';
        return _this;
    }
    WebPartPropertiesWebPart.prototype.onInit = function () {
        this._environmentMessage = this._getEnvironmentMessage();
        return _super.prototype.onInit.call(this);
    };
    WebPartPropertiesWebPart.prototype.render = function () {
        var element = React.createElement(WebPartProperties, {
            description: this.properties.description,
            myDropdown: this.properties.myDropdown,
            myMultiline: this.properties.myMultiline,
            myCheckbox: this.properties.myCheckbox,
            myToggle: this.properties.myToggle,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName
        });
        ReactDom.render(element, this.domElement);
    };
    WebPartPropertiesWebPart.prototype._getEnvironmentMessage = function () {
        if (!!this.context.sdks.microsoftTeams) { // running in Teams
            return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
        }
        return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
    };
    WebPartPropertiesWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
        this.domElement.style.setProperty('--link', semanticColors.link);
        this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);
    };
    WebPartPropertiesWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(WebPartPropertiesWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    WebPartPropertiesWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                }),
                                PropertyPaneTextField('myMultiline', {
                                    label: "Multi line text field",
                                    multiline: true
                                }),
                                PropertyPaneDropdown('myDropdown', {
                                    label: 'My Dropdown control',
                                    options: [
                                        { key: 'Red', text: 'Red' },
                                        { key: 'Blue', text: 'Blue' },
                                        { key: 'Green', text: 'Green' }
                                    ]
                                }),
                                PropertyPaneCheckbox('myCheckbox', {
                                    text: 'My Checkbox'
                                }),
                                PropertyPaneToggle('myToggle', {
                                    label: 'My Toggle',
                                    onText: 'Yes',
                                    offText: 'No'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return WebPartPropertiesWebPart;
}(BaseClientSideWebPart));
export default WebPartPropertiesWebPart;
//# sourceMappingURL=WebPartPropertiesWebPart.js.map