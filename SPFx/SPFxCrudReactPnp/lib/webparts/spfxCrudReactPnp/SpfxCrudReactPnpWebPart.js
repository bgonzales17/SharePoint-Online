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
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as strings from "SpfxCrudReactPnpWebPartStrings";
import SpfxCrudReactPnp from "./components/SpfxCrudReactPnp";
import { sp } from "@pnp/sp/presets/all";
var SpfxCrudReactPnpWebPart = /** @class */ (function (_super) {
    __extends(SpfxCrudReactPnpWebPart, _super);
    function SpfxCrudReactPnpWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = "";
        return _this;
    }
    SpfxCrudReactPnpWebPart.prototype.onInit = function () {
        var _this = this;
        this._environmentMessage = this._getEnvironmentMessage();
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context,
            });
        });
    };
    SpfxCrudReactPnpWebPart.prototype.render = function () {
        var element = React.createElement(SpfxCrudReactPnp, {
            description: this.properties.description,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName,
        });
        ReactDom.render(element, this.domElement);
    };
    SpfxCrudReactPnpWebPart.prototype._getEnvironmentMessage = function () {
        if (!!this.context.sdks.microsoftTeams) {
            // running in Teams
            return this.context.isServedFromLocalhost
                ? strings.AppLocalEnvironmentTeams
                : strings.AppTeamsTabEnvironment;
        }
        return this.context.isServedFromLocalhost
            ? strings.AppLocalEnvironmentSharePoint
            : strings.AppSharePointEnvironment;
    };
    SpfxCrudReactPnpWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        this.domElement.style.setProperty("--bodyText", semanticColors.bodyText);
        this.domElement.style.setProperty("--link", semanticColors.link);
        this.domElement.style.setProperty("--linkHovered", semanticColors.linkHovered);
    };
    SpfxCrudReactPnpWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(SpfxCrudReactPnpWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    SpfxCrudReactPnpWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return SpfxCrudReactPnpWebPart;
}(BaseClientSideWebPart));
export default SpfxCrudReactPnpWebPart;
//# sourceMappingURL=SpfxCrudReactPnpWebPart.js.map