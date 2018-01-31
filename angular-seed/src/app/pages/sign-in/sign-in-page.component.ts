import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-task-sign-in-page',
  templateUrl: ['./sign-in-page.component.html']
})
export class SignInPageComponent implements OnInit {
    constructor() {

  }
    
    doLogin() {
        this.usersService.login(
          this.signInForm.get('username').value,
          this.signInForm.get('password').value).subscribe(loginResponse => {
            this.router.navigate(['tasks']);
          }, error => {
            this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
          })
    }
}