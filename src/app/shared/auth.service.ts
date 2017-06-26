import { Injectable } from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import {Request} from '../shared/tokenreq';
import { Token } from '../shared/token';

@Injectable()
export class authService{
private username:string;
private password:string;
private URL:string=environment.API_URL;
private request:Request;
private Tokendata:Token;


constructor(private _http:Http){}
private data:Request={
				client_id:2,
				client_secret:environment.API_KEY,
				grant_type:'password',
				username:'',
				password:''						
                    }
    getKey(user)
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.data.username=user.username;
        this.data.password=user.password;
        let pass= this.data;
        return this._http.post(this.URL+'oauth/token',pass,options)
            .map(
                res=>res.json()
            )   
    }
    setKey(key)
    {
			localStorage.setItem('token',key.access_token);
			localStorage.setItem('expiration',key.expires_in);
			localStorage.setItem('refreshToken',key.refresh_token);
	}
    getToken(){
     if(this.Tokendata)
     {
         return this.Tokendata;
     }
     else{
         this.Tokendata={
             access_token:localStorage.getItem('token'),
             refresh_token:localStorage.getItem('refreshToken'),
             expires_in:Number(localStorage.getItem('expiration')),
             token_type:'Bearer'
         }
         return this.Tokendata;
     }
    }
    
    
}
