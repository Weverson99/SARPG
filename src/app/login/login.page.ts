import { Router } from '@angular/router';
import { AuthServiceService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthServiceService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/home']);
    }).catch(error => {
      alert('Dados incorretos');
    });
  }

}
