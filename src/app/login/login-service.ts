import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class LoginService{

  constructor(private _http: HttpClient){}

  addHeaders(): Headers { // will be used in future needs
    try {
        let _headers = new Headers({
          'Content-Type': 'application/json;charset=UTF-8',
          'SessionToken': 'Token_name'
        });
        return _headers;
    } catch (ex) {
      //handle exception here
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };


 doPost(data:any, url:string): Observable<any>{

    return this._http.post(data, url)
      .map((res: Response)=>{

        if(res == null){
          console.error("--- No data to show ---> Response is NULL ---")
        }else {
          return res;
        }
      })
      .catch((error)=> this.handleError(error))
  }


  doGet(url:string): Observable<any>{

   return this._http.get(url)
     .map((res: Response)=>{

       if(res == null){
         console.error("--- No data to show ---> Response is NULL ---")
       }else {
         return res;
       }
     })
     .catch((error)=> this.handleError(error))
  }

  doput(data:any, url:string){
   return this._http.put(url, data)
     .map((res: Response)=>{

       if(res == null){
         console.error("--- No data to show ---> Response is NULL ---")
       }else {
         return res;
       }
     })
     .catch((error)=> this.handleError(error))
  }
}
