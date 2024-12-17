import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("the authorized item is "+localStorage.getItem("authorized"));
  
  if (localStorage.getItem("authorized") == "true"){
    return true;
  }
  let router = inject(Router);
  router.navigate(['/login'])
  return false;
};
