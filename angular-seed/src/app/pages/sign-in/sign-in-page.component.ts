import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth.service';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./task-edit-page.component.css']
})
@Injectable()
export class SignInPageComponent{
    private usersService: UsersService;
    private signInForm: FormGroup;
    private loginError: string;
    constructor(public router: Router) {

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