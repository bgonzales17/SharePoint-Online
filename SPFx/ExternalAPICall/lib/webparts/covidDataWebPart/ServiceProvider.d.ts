import { WebPartContext } from '@microsoft/sp-webpart-base';
export declare class ServiceProvider {
    private wpcontext;
    constructor(context: WebPartContext);
    private httpClientOptionsForGlobal;
    getTotals(): Promise<any>;
}
//# sourceMappingURL=ServiceProvider.d.ts.map