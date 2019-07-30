import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit(registerForm: NgForm) {
    if (registerForm.invalid) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor'
    });
    Swal.showLoading();

    this.auth.register(this.user)
      .subscribe((payload) => {
        Swal.close();
        this.router.navigate(['/']);
      }, (err) => {
        console.log({ err });
        Swal.fire({
          type: 'error',
          title: 'Error al registrar',
          text: 'Ocurrió un error al registrar su cuenta: ' + err.error.error.message
        });
      });
  }

}
