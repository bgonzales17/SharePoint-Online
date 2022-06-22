import * as React from 'react';
import styles from './WebPartProperties.module.scss';
import { IWebPartPropertiesProps } from './IWebPartPropertiesProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class WebPartProperties extends React.Component<IWebPartPropertiesProps, {}> {
  public render(): React.ReactElement<IWebPartPropertiesProps> {
    let toggle = 'No';
    let myCheckboxValue = 'Not checked';
    const {
      description,
      myDropdown,
      myMultiline,
      myCheckbox,
      myToggle,
      mySlider,
      myChoiceGroup,
      myChoiceGroupImage,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;
    
    if(myToggle)   
    {toggle = 'Yes'}

    if(myCheckbox)
    {myCheckboxValue ='Checked'}

    return (
      <section className={`${styles.webPartProperties} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>  
          <div>myMultiline value: <strong>{escape(myMultiline)}</strong></div>
          <div>Selected myDropdown value: <strong>{escape(myDropdown)}</strong></div>           
         <div>Toggle value selected is: <strong>{toggle}</strong></div>        
         <div>Check box value selected is:<strong>{myCheckboxValue}</strong> </div>
         <div>Slider value selected is: <strong>{mySlider}</strong></div>
         <div>Radio button/ choice group value selected is: <strong>{myChoiceGroup}</strong></div>

         <div>Image Radio button/ choice group value selected is: <strong>{myChoiceGroupImage}</strong></div>
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
