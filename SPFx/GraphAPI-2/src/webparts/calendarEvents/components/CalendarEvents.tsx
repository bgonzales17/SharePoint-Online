import * as React from 'react';
import styles from './CalendarEvents.module.scss';
import { ICalendarEventsProps } from './ICalendarEventsProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { MSGraphClient } from '@microsoft/sp-http';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import { ICalendarEventsState } from './ICalendarEventsState';

export default class CalendarEvents extends React.Component<ICalendarEventsProps, ICalendarEventsState> {

  constructor(props: ICalendarEventsProps) {
    super(props);
    this.state = {
      events: []
    };
  }

  public componentDidMount(): void {
    this.props.context.msGraphClientFactory.getClient().then((client: MSGraphClient): void => {
      client
        .api('/me/calendar/events')
        .version("v1.0")
        .select("*")
        .get((error: any, eventsResponse, rawResponse?: any) => {

          if (error) {
            console.error("Message is : " + error);
            return;
          }

          //array of calendar events
          const calendarEvents: MicrosoftGraph.Event[] = eventsResponse.value;
          //add values to react component state object
          this.setState({ events: calendarEvents });
        });
    });
  }

  public render(): React.ReactElement<ICalendarEventsProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.calendarEvents} ${hasTeamsContext ? styles.teams : ''}`}>
        <div>
          <ul>
            {
              this.state.events.map((item, key) =>
                <li key={item.id}>
                  {item.subject},{item.organizer.emailAddress.name},
                  {item.start.dateTime.substring(0, 10)},
                  {item.start.dateTime.substring(12, 5)},
                  {item.end.dateTime.substring(0, 10)},
                  {item.end.dateTime.substring(12, 5)}
                </li>)
            }
          </ul>
        </div>
      </section>
    );
  }
}
