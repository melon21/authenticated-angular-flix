import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})
export class SignUpLoginComponent implements OnInit {
username = '';
password = '';
  constructor(private authService: AuthenticationService, private routerService: Router) { }

  ngOnInit() {
  }
async login() {
await this.authService.logIn(this.username, this.password);
if (!this.authService.isAuthenticated()) {
  console.log('Unable to login');
} else{
  this.routerService.navigate(['/main']);
}
}async signUp() {
  await this.authService.signUp(this.username, this.password);
  await this.login();
}

}
