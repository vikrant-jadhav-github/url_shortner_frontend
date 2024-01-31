import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service'; 
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private tokenSubject = new BehaviorSubject<String>("")
  public token$ = this.tokenSubject.asObservable();

  private userDataSubject = new BehaviorSubject<Object>({});
  public userData$ = this.userDataSubject.asObservable();

  constructor(private httpClient: HttpClient, private apiService: ApiService, private toastr: ToastrService, private router: Router) { }

  public registerAccountAPI(registeredData: Object) {
    this.httpClient.post(this.apiService.accountRegisterEndpoint, registeredData).subscribe({
      next: (response: any) => {
        this.toastr.success('Account created successfully', 'Success');
        this.router.navigate(['login/true']);
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      }
    })
  }

  public loginAccountAPI(loginData: Object) {
    this.httpClient.post(this.apiService.accountLoginEndpoint, loginData).subscribe({
      next: (response: any) => {

        localStorage.setItem('token', response.token.access);
        this.tokenSubject.next(response.token.access);
        
        localStorage.setItem('userData', JSON.stringify(response.user));
        this.userDataSubject.next(response.user);
        
        this.toastr.success('Account logged in successfully', 'Success');
        this.router.navigate(['home']);
      },
      error: (error) => {
        if (error.status == 404) {
          this.router.navigate(['register']);
        }
        this.toastr.error(error.error.message, 'Error');
      }
    })
  }

  public logoutAPI() {
    this.tokenSubject.next("");
    this.userDataSubject.next({});
    localStorage.clear();
    this.router.navigate(['login/true']);
  }

}
