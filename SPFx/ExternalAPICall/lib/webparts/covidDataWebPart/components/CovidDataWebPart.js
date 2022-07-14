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
import Overview from '../components/Overview';
var CovidDataWebPart = /** @class */ (function (_super) {
    __extends(CovidDataWebPart, _super);
    function CovidDataWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CovidDataWebPart.prototype.render = function () {
        var _a = this.props, description = _a.description, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        return (React.createElement(React.Fragment, null,
            React.createElement(Overview, { context: this.props.context })));
    };
    return CovidDataWebPart;
}(React.Component));
export default CovidDataWebPart;
//# sourceMappingURL=CovidDataWebPart.js.map