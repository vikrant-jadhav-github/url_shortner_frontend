import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public accountRegisterEndpoint: string = "http://localhost:8000/api/v1/accounts/register/"
  public accountLoginEndpoint: string = "http://localhost:8000/api/v1/accounts/login/"
  public accountProfileEndpoint: string = "http://localhost:8000/api/v1/accounts/profile/"

  public storeUrlEndpoint: string = "http://localhost:8000/api/v1/urls/"
  public allUrlsEndpoint: string = "http://localhost:8000/api/v1/urls/"

  constructor() { }
}
