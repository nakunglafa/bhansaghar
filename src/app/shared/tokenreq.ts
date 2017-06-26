export class Request{
				client_id:number;
				client_secret:string;
				grant_type:string;
				username:string;
				password:string;				
}
export class TokenData{
    access_token:string;
    expires_in:number;
    refresh_token:string;
    token_type:string;
}