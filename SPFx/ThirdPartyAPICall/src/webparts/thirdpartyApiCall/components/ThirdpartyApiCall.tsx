import * as React from 'react';
import styles from './ThirdpartyApiCall.module.scss';
import { IThirdpartyApiCallProps } from './IThirdpartyApiCallProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ThirdpartyApiCall extends React.Component<IThirdpartyApiCallProps, {}> {
  public render(): React.ReactElement<IThirdpartyApiCallProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName      
    } = this.props;

    return (
      <section className={`${styles.thirdpartyApiCall} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
          <div>Joke from Rest API: <strong>{this.props.JokeText}</strong></div>
        </div>
        <div>
          <h3>Welcome to SharePoint Framework!</h3>
          <p>
            The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It's the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
          </p>
         
        </div>
      </section>
    );
  }
}
