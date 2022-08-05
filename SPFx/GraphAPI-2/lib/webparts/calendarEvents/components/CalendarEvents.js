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
import styles from './CalendarEvents.module.scss';
var CalendarEvents = /** @class */ (function (_super) {
    __extends(CalendarEvents, _super);
    function CalendarEvents(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            events: []
        };
        return _this;
    }
    CalendarEvents.prototype.componentDidMount = function () {
        var _this = this;
        this.props.context.msGraphClientFactory.getClient().then(function (client) {
            client
                .api('/me/calendar/events')
                .version("v1.0")
                .select("*")
                .get(function (error, eventsResponse, rawResponse) {
                if (error) {
                    console.error("Message is : " + error);
                    return;
                }
                //array of calendar events
                var calendarEvents = eventsResponse.value;
                //add values to react component state object
                _this.setState({ events: calendarEvents });
            });
        });
    };
    CalendarEvents.prototype.render = function () {
        var _a = this.props, description = _a.description, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        return (React.createElement("section", { className: styles.calendarEvents + " " + (hasTeamsContext ? styles.teams : '') },
            React.createElement("div", null,
                React.createElement("ul", null, this.state.events.map(function (item, key) {
                    return React.createElement("li", { key: item.id },
                        item.subject,
                        ",",
                        item.organizer.emailAddress.name,
                        ",",
                        item.start.dateTime.substring(0, 10),
                        ",",
                        item.start.dateTime.substring(12, 5),
                        ",",
                        item.end.dateTime.substring(0, 10),
                        ",",
                        item.end.dateTime.substring(12, 5));
                })))));
    };
    return CalendarEvents;
}(React.Component));
export default CalendarEvents;
//# sourceMappingURL=CalendarEvents.js.map