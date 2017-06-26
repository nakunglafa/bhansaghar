import { Injectable } from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import {Request} from '../shared/tokenreq';
import { Token } from '../shared/token';
import { Register } from '../register/register';

@Injectable()
export class registerService{
public register:Register;
private URL:string=environment.API_URL;
constructor(private _http:Http){}
    
    addUer(data:Register)
    {
        return this._http.post(
            this.URL+'api/register',
            data
        )
        .map(
            res=>res.json()
        )
    }    
}
