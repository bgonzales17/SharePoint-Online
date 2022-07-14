import * as React from 'react';
import styles from './CovidDataWebPart.module.scss';
import { ICovidDataWebPartProps } from './ICovidDataWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { ServiceProvider } from '../ServiceProvider';

export interface IOverViewProps {
    context: WebPartContext;
}

export interface IOverViewState {
    data: any;
}

export default class OverViewStats extends React.Component<IOverViewProps, IOverViewState> {

    private serviceProvider;

    public constructor(props: IOverViewProps, state: IOverViewState) {
        super(props);
        this.serviceProvider = new ServiceProvider(this.props.context);

        this.state = {
            data: {}
        };

    }

    public render(): React.ReactElement<IOverViewProps> {
        return (
            <React.Fragment>
                <h1>Country Population Overview:</h1>
                <h2>Continent : {this.state.data.continent}</h2>
                <h2>Country: {this.state.data.country}</h2>
                <h2>Population: {this.state.data.population}</h2>
            </React.Fragment>
        );
    }

    public async componentDidMount() {
        this.getData();
    }

    private getData() {
        this.serviceProvider.
            getTotals()
            .then(
                (result: any): void => {
                    console.log('Result: ' + result);
                    this.setState({ data: result });
                }
            )
            .catch(error => {
                console.log(error);
            });
    }
}  