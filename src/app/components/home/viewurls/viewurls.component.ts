import { AccountService } from './../../../services/account/account.service';
import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../../services/url/url.service';

@Component({
  selector: 'app-viewurls',
  templateUrl: './viewurls.component.html',
  styleUrl: './viewurls.component.css'
})
export class ViewurlsComponent implements OnInit{
  
  public urlsData: any = []
  public token: String = '';

  constructor(private accountService: AccountService, private urlService: UrlService) {}

  ngOnInit(): void {
    
    this.accountService.token$.subscribe((token) => {
      this.token = token;
    })
    
    this.token = localStorage.getItem('token') || '';

    if(this.token)
    {    
      this.urlService.getAllUrls(this.token).subscribe(
        (response: any) => {
          let data: any = response.data;
          this.urlsData = data;
        }
      )
    }

  }

}
