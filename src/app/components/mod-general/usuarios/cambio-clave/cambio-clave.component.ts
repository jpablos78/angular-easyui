import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private authService: AuthService
  ) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      txtUsuario: ['', Validators.required],
      txtClave: ['', Validators.required]
    });
  }

  onSubmit() {
    alert('yyy');
    // this.authService.login();
  }

}
