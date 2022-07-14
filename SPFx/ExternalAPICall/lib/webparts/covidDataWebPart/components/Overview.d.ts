import * as React from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface IOverViewProps {
    context: WebPartContext;
}
export interface IOverViewState {
    data: any;
}
export default class OverViewStats extends React.Component<IOverViewProps, IOverViewState> {
    private serviceProvider;
    constructor(props: IOverViewProps, state: IOverViewState);
    render(): React.ReactElement<IOverViewProps>;
    componentDidMount(): Promise<void>;
    private getData;
}
//# sourceMappingURL=Overview.d.ts.map