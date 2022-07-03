import * as React from 'react';
import styles from './ThirdpartyApiCall.module.scss';
import { IThirdpartyApiCallProps } from './IThirdpartyApiCallProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IThirdpartyApiCallState } from './IThirdpartyApiCallState';

import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';

export default class ThirdpartyApiCall extends React.Component<IThirdpartyApiCallProps, IThirdpartyApiCallState> {

  public constructor(props: IThirdpartyApiCallProps, state: IThirdpartyApiCallState) {
    super(props);

    this.state = {
      id: null,
      name: null,
      username: null,
      email: null,
      address: null,
      phone: null,
      website: null,
      company: null
    };
  }

  public componentDidMount() {
    this.InvokeAPIAndSetDataIntoState();
  }

  public componentDidUpdate(prevProps: IThirdpartyApiCallProps, prevState: IThirdpartyApiCallState, prevContext: any): void {
    this.InvokeAPIAndSetDataIntoState();
  }


  public getUserDetails(): Promise<any> {
    let url = this.props.apiURL + "/" + this.props.userID;

    return this.props.context.httpClient.get(
      url, HttpClient.configurations.v1
    )
      .then((response: HttpClientResponse) => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse;
      }) as Promise<any>;
  }

  public InvokeAPIAndSetDataIntoState() {
    this.getUserDetails().then(response => {
      this.setState({
        id: response.id,
        name: response.name,
        username: response.username,
        email: response.email,
        address: 'Street: ' + response.address.street + ' Suite: ' + response.address.suite + ' City' + response.address.city + ' Zip Code:' + response.address.zipcode,
        phone: response.phone,
        website: response.website,
        company: response.company.name
      });
    });
  }

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
          <h2>Hi, {escape(userDisplayName)}!</h2>
          <div>Web part description: <strong>{escape(description)}</strong></div>
        </div>
        <div>
          <span><strong>User Details:</strong></span>
          <hr></hr>
          <div><strong>ID: </strong>{this.state.id}</div><br />
          <div><strong>User Name: </strong>{this.state.username}</div><br />
          <div><strong>Name: </strong>{this.state.name}</div><br />
          <div><strong>Address: </strong>{this.state.address}</div><br />
          <div><strong>Email: </strong>{this.state.email}</div><br />
          <div><strong>Phone: </strong>{this.state.phone}</div><br />
          <div><strong>Web site: </strong>{this.state.website}</div><br />
          <div><strong>Company: </strong>{this.state.company}</div><br />
        </div>

      </section>
    );
  }
}
