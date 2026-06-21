import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  showPassword = false;

    constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(){
    console.log('LOGIN BUTTON CLICKED');

    const data ={
      username: this.username,
      password: this.password,
    };

    this.authService.login(data).subscribe({
      next: (response:any) => {
        localStorage.setItem('token', response.access);
        console.log(response);

        this.router.navigate(['/dashboard']);
      },
      error: (error) =>{
        console.log(error);
      }
    });
  }
}
