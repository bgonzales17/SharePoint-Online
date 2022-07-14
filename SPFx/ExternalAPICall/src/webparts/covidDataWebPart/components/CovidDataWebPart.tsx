import * as React from 'react';
import styles from './CovidDataWebPart.module.scss';
import { ICovidDataWebPartProps } from './ICovidDataWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Overview from '../components/Overview';

export default class CovidDataWebPart extends React.Component<ICovidDataWebPartProps, {}> {
  public render(): React.ReactElement<ICovidDataWebPartProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <React.Fragment>
        <Overview context={this.props.context}>
        </Overview>
      </React.Fragment>
    );
  }
}
