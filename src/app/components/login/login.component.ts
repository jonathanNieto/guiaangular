import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  rememberMe = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.user.email = localStorage.getItem('email');
      this.rememberMe = true;
    }
  }

  onSubmit(loginForm: NgForm) {

    if (loginForm.invalid) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor'
    });
    Swal.showLoading();
    this.auth.login(this.user)
      .subscribe((payload) => {
        Swal.close();

        if (this.rememberMe) {
          localStorage.setItem('email', this.user.email);
        }
        this.router.navigate(['/']);
      }, (err) => {
          Swal.fire({
            type: 'error',
            title: 'Error al ingresar',
            text: 'Credenciales no validas'
          });
      });
  }

}
