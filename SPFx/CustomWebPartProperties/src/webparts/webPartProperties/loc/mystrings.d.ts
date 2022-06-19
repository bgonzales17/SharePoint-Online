declare interface IWebPartPropertiesWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'WebPartPropertiesWebPartStrings' {
  const strings: IWebPartPropertiesWebPartStrings;
  export = strings;
}
