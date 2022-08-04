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
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './UserProfileInfoWebPart.module.scss';
import * as strings from 'UserProfileInfoWebPartStrings';
var UserProfileInfoWebPart = /** @class */ (function (_super) {
    __extends(UserProfileInfoWebPart, _super);
    function UserProfileInfoWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = '';
        return _this;
    }
    UserProfileInfoWebPart.prototype.onInit = function () {
        this._environmentMessage = this._getEnvironmentMessage();
        return _super.prototype.onInit.call(this);
    };
    UserProfileInfoWebPart.prototype.render = function () {
        var _this = this;
        this.context.msGraphClientFactory
            .getClient()
            .then(function (graphclient) {
            graphclient
                .api('/me')
                .get(function (error, user, rawResponse) {
                _this.domElement.innerHTML = "\n    <section class=\"" + styles.userProfileInfo + " " + (!!_this.context.sdks.microsoftTeams ? styles.teams : '') + "\">\n      <div class=\"" + styles.welcome + "\">\n      <p>Display Name: " + user.displayName + "</p>\n      <p>Given Name: " + user.givenName + "</p>\n      <p>Surname: " + user.surname + "</p>\n      <p>Email ID: " + user.mail + "</p>\n      <p>Mobile Phone: " + user.mobilePhone + "</p>       </div>\n     \n    </section>";
            });
        });
    };
    UserProfileInfoWebPart.prototype._getEnvironmentMessage = function () {
        if (!!this.context.sdks.microsoftTeams) { // running in Teams
            return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
        }
        return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
    };
    UserProfileInfoWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
        this.domElement.style.setProperty('--link', semanticColors.link);
        this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);
    };
    Object.defineProperty(UserProfileInfoWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    UserProfileInfoWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return UserProfileInfoWebPart;
}(BaseClientSideWebPart));
export default UserProfileInfoWebPart;
//# sourceMappingURL=UserProfileInfoWebPart.js.map