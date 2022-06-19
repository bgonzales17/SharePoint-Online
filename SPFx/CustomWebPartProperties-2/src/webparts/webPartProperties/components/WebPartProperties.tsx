import * as React from 'react';
import styles from './WebPartProperties.module.scss';
import { IWebPartPropertiesProps } from './IWebPartPropertiesProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class WebPartProperties extends React.Component<IWebPartPropertiesProps, {}> {
  public render(): React.ReactElement<IWebPartPropertiesProps> {
    const {
      description,
      myDropdown,
      myMultiline,
      myCheckbox,
      myToggle,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.webPartProperties} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>  
          <div>myMultiline value: <strong>{escape(myMultiline)}</strong></div>
          <div>Selected myDropdown value: <strong>{escape(myDropdown)}</strong></div> 
          if(myToggle.selected){<div> Toggle value selected is yes</div>}
          else{<div> Toggle value selected is yes</div>}         
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
