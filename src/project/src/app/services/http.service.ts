import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private API_SERVER: string;
	private httpVanilla: HttpClient;
	public logo:string;
	constructor(
		private http: HttpClient,
		private handler: HttpBackend
	) {
		this.API_SERVER = environment.host+"/api/v1/";

		this.httpVanilla = new HttpClient(this.handler);
	}

  	get(request: string, body: any = {}): Observable<any> {
		return this.http.get(this.API_SERVER + request, { params: body })
	}
	post(request: string, body: any = {}): Observable<any> {
		return this.http.post(this.API_SERVER + request, body)
	}
	put(request: string, body: any = {}): Observable<any> {
		return this.http.put(this.API_SERVER + request, { params: body })
	}
	delete(request: string, body: any = {}): Observable<any> {
		return this.http.delete(this.API_SERVER + request, { params: body })
	}
	postVanilla(request: any, formData : FormData): Observable<any> {
		const token:any=localStorage.getItem('token');
		let options;
		if (token  !== null || token !== 'null') {
			options = {
				headers: new HttpHeaders(
					{
						Accept: 'multipart/form-data',
						"enctype": "multipart/form-data",
						Authorization: `Bearer ${token}`
					}
				),
			}
		}else{
			options = {
				headers: new HttpHeaders(
					{
						Accept: 'multipart/form-data',
						"enctype": "multipart/form-data",
					}
				),
			}
		}
		
		return this.httpVanilla.post(this.API_SERVER + request, formData, options)
	}
	getExternal(request: string): Observable<any> {

		let headers = {
			headers: new HttpHeaders(
				{
					Accept: `application/json`,
					'Content-Type': `application/json`,
				}
			)
		}
		return this.httpVanilla.get(request, headers)
	}
}
