import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url/url.service';
import { ToastrService } from 'ngx-toastr';
import { Clipboard } from '@angular/cdk/clipboard';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-shortenurl',
  templateUrl: './shortenurl.component.html',
  styleUrl: './shortenurl.component.css'
})
export class ShortenurlComponent implements OnInit {
  public enteredUrl: string = '';
  public shortenedUrl: string = '';
  public token: String = '';

  constructor(private urlService: UrlService, private accountService: AccountService, private clipboard: Clipboard, private toastr: ToastrService) {}

  public ngOnInit(): void {
    
    this.accountService.token$.subscribe((token) => {
      if(token) {
        this.token = token
      }
    })

    this.token = localStorage.getItem('token') || '';

    this.shortenedUrl = localStorage.getItem('shortenedUrl') || '';

  }

  public shortUrl(url: string) {

    if(!url){
      this.toastr.info('Please enter a URL', 'Guide');
      return;
    }

    const urlPattern = /^(http|https):\/\//;
    
    if(!urlPattern.test(this.enteredUrl)){
      this.enteredUrl = '';
      this.toastr.info('Please enter a valid URL', 'Guide');
      return;
    }
    
    this.urlService.getShortenedUrl(url, this.token);

    this.urlService.shortenedUrl.subscribe(
      (response: string) => {
        this.shortenedUrl = response;
      }
    )

    this.enteredUrl = '';

  }

  public copyUrl(){
    this.clipboard.copy(this.shortenedUrl);
    this.toastr.success('Copied to clipboard', 'Success');
  }
}
