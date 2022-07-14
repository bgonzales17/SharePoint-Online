import { HttpClient, IHttpClientOptions, HttpClientResponse } from '@microsoft/sp-http';  
import { WebPartContext } from '@microsoft/sp-webpart-base';  
  
export class ServiceProvider {  
    private wpcontext:WebPartContext;  
    public constructor(context: WebPartContext) {  
       this.wpcontext= context;  
      }  
      private httpClientOptionsForGlobal: IHttpClientOptions = {  
        headers: new Headers({  
            "x-rapidapi-host": "covid-193.p.rapidapi.com",  
            "x-rapidapi-key": "96a051ffaemshc889cdc82489aadp105867jsn597cfdd0d94a"  
        }),  
        method: "GET",  
        mode: "cors"  
  };  
  
  public async getTotals() {    
   var response = await this.wpcontext.httpClient  
  .get("https://covid-193.p.rapidapi.com/statistics", HttpClient.configurations.v1,this.httpClientOptionsForGlobal);  
  console.log(response);  
  var responeJson : any = await response.json();  
  return responeJson.response[0];  
  }      
}  