import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../../services/account/account.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const router = inject(Router);
  const toastr = inject(ToastrService)
  let token: String = '';
  accountService.token$.subscribe((data) => {
    token = data
  })
  token = localStorage.getItem('token') || '';
  if(token) {
    return true;
  }
  if(!token)
  {
    toastr.error('Please login first!', 'Error');
    router.navigate(['login/true']);
  }
  return false;
};
