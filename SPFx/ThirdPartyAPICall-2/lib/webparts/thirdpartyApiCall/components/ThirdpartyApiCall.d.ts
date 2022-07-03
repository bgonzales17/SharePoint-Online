import * as React from 'react';
import { IThirdpartyApiCallProps } from './IThirdpartyApiCallProps';
import { IThirdpartyApiCallState } from './IThirdpartyApiCallState';
export default class ThirdpartyApiCall extends React.Component<IThirdpartyApiCallProps, IThirdpartyApiCallState> {
    constructor(props: IThirdpartyApiCallProps, state: IThirdpartyApiCallState);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IThirdpartyApiCallProps, prevState: IThirdpartyApiCallState, prevContext: any): void;
    getUserDetails(): Promise<any>;
    InvokeAPIAndSetDataIntoState(): void;
    render(): React.ReactElement<IThirdpartyApiCallProps>;
}
//# sourceMappingURL=ThirdpartyApiCall.d.ts.map