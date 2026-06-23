import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  username = '';
  password = '';
  showPassword = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}  

    signup(){
    console.log('SIGNUP BUTTON CLICKED');

    const data ={
      username: this.username,
      password: this.password,
    };

    this.authService.signup(data).subscribe({
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
