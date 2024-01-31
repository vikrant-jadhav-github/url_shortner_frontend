import { ApiService } from './../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private shortenedUrlSubject = new BehaviorSubject<string>('');
  public shortenedUrl = this.shortenedUrlSubject.asObservable();

  constructor(private httpClient: HttpClient, private apiService: ApiService, private toastr: ToastrService) { }

  public getShortenedUrl(url: string, token: String) {

    this.httpClient.post(this.apiService.storeUrlEndpoint, {url: url}, {headers: {'Authorization': 'Bearer ' + token}}).subscribe({
      next: (response: any) => {

          localStorage.setItem('shortenedUrl', response.url);
          this.shortenedUrlSubject.next(response.url);
          
          this.toastr.success('Shortened URL created successfully', 'Success');
      },
      error: (error) => {
        if(error.status == 401)
          this.toastr.error('Please login first!', 'Error');
        else if(error.status == 500)
          this.toastr.error('We are fixing our backend, please try again later!', 'Error');
        else
          this.toastr.error(error.error.message, 'Error');
      }
  })
  }

  public getAllUrls(token: String) {

    return this.httpClient.get(this.apiService.allUrlsEndpoint, {headers: {'Authorization': 'Bearer ' + token}});

  }

}
