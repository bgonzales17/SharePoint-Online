export interface IWebPartPropertiesProps {
  description: string;
  myDropdown: string;
  myMultiline: string;
  myCheckbox: boolean;
  myToggle: boolean;
  mySlider:number;
  myChoiceGroup:string;
  myChoiceGroupImage:string;

  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}
