import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneCheckbox,
  PropertyPaneToggle,
  PropertyPaneSlider,
  PropertyPaneChoiceGroup,
  PropertyPaneLink
} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'WebPartPropertiesWebPartStrings';
import WebPartProperties from './components/WebPartProperties';
import { IWebPartPropertiesProps } from './components/IWebPartPropertiesProps';

export interface IWebPartPropertiesWebPartProps {
  description: string;
  myDropdown: string;
  myMultiline: string;
  myCheckbox: boolean;
  myToggle: boolean;
  mySlider: number;
  myChoiceGroup:string;
  myChoiceGroupImage:string;  
}

export default class WebPartPropertiesWebPart extends BaseClientSideWebPart<IWebPartPropertiesWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();
    this.properties.myMultiline = "My sample text from onInit";
    this.properties.myToggle = true;
    this.properties.myCheckbox = true;

    return super.onInit();
  }

  protected get disableReactivePropertyChanges(): boolean {
    return  true;
  }

  public render(): void {
    const element: React.ReactElement<IWebPartPropertiesProps> = React.createElement(
      WebPartProperties,
      {
        description: this.properties.description,
        myDropdown: this.properties.myDropdown,
        myMultiline: this.properties.myMultiline,
        myCheckbox: this.properties.myCheckbox,
        myToggle: this.properties.myToggle,
        mySlider: this.properties.mySlider,
        myChoiceGroup:this.properties.myChoiceGroup,
        myChoiceGroupImage:this.properties.myChoiceGroupImage,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );   

    ReactDom.render(element, this.domElement);
  }

  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams
      return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
    }

    return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;
    this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
    this.domElement.style.setProperty('--link', semanticColors.link);
    this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Page One"
          },
          groups: [
            {
              groupName: "First Group",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('myMultiline', {
                  label: "Multi line text field",
                  multiline:true
                }),
                PropertyPaneDropdown('myDropdown',{
                  label: 'My Dropdown control',
                  options:[
                    {key:'Red',text:'Red'},
                    {key:'Blue',text:'Blue'},
                    {key:'Green',text:'Green'}
                  ]
                })               
              ]
            },
            {
              groupName: "Second Group",
              groupFields: [
                PropertyPaneSlider('mySlider',{
                  label:'My Slider',
                  min:1,
                  max:10,
                  step:1,
                  showValue:true,
                  value:1
                }),
                PropertyPaneChoiceGroup('myChoiceGroup',{
                  label:'My Radio button choices',
                  options:[
                    {key:'Red',text:'Red'},
                    {key:'Blue',text:'Blue', checked:true},
                    {key:'Green',text:'Green'}
                  ]
                })              
              ]
            }
          ],
          displayGroupsAsAccordion:true
        },

        {
          header: {
            description: "Page Two"
          },
          groups: [
            {
              groupName: "Third Group",
              groupFields: [                
                PropertyPaneCheckbox('myCheckbox',{
                  text:'My Checkbox',
                  checked:true
                }),
                PropertyPaneToggle('myToggle',{
                  key:'myToggle',
                  label:'My Toggle',
                  onText:'Yes',
                  offText:'No'
                })
              ]
            },
            {
              groupName: "Fourth Group",
              groupFields: [              
                PropertyPaneChoiceGroup('myChoiceGroupImage', {
                  label: 'Select Invoice File type:',
                  options: [
                   { key: 'MSWord', text: 'MSWord',
                     imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/docx_32x1.png',
                     imageSize: { width: 32, height: 32 },
                     selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/docx_32x1.png'
                   },
                   { key: 'MSExcel', text: 'MSExcel',
                     imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/xlsx_32x1.png',
                     imageSize: { width: 32, height: 32 },
                     selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/xlsx_32x1.png'
                   },
                   { key: 'MSPowerPoint', text: 'MSPowerPoint',
                     imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/pptx_32x1.png',
                     imageSize: { width: 32, height: 32 },
                     selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/pptx_32x1.png'
                   },
                   { key: 'OneNote', text: 'OneNote',
                     imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/one_32x1.png',
                     imageSize: { width: 32, height: 32 },
                     selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/one_32x1.png'
                   }
                 ]
               }),
               PropertyPaneLink('', {
                href: 'https://www.amazon.in',
                text: 'Buy Intel Processor from the best Seller',
                target: '_blank',
                popupWindowProps: {
                  height: 500,
                  width: 500,
                  positionWindowPosition: 2,
                  title: 'Amazon'
                }
              })
              ]
            }
          ],
          displayGroupsAsAccordion:true
        }
      ]
    };
  }
}
