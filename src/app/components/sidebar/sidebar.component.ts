import { Component } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  public toggleLogin: boolean = false
  public userData: any = {}
  public token: String = "";

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  public ngOnInit(): void {
    
    this.accountService.token$.subscribe((data: String) => {
        this.token = data
        if(this.token || localStorage.getItem('token'))
          this.toggleLogin = true
    })

    this.accountService.userData$.subscribe((data: any) => {
        this.userData = data
        let localData: any = JSON.parse(localStorage.getItem('userData') || '{}')
        this.userData = localData
    })

  }

  public logout(){
    this.accountService.logoutAPI()
    this.toggleLogin = false
    this.toastr.success('See you again!', 'Success')
  }

}
