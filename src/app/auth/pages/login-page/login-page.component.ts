import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route, Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { User } from '../../interface/user';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule, RouterModule,CardModule,ReactiveFormsModule,InputTextModule,ButtonModule 
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {

  private user?: User;

  constructor(private authService:AuthService, private router: Router) {}

  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  });

  onLogin(): void {
    console.log('Data login' , this.loginForm.value.user);

    this.router.navigate(['/app']);
    // this.authService.login(this.loginForm.value.user!, this.loginForm.value.password!)
    //   .subscribe( user => {
    //     this.user = user;
    
    //   });

    //   if (this.authService.getCurrentUser() ){
    //     this.router.navigate(['/panell']);
    //   } else {
    //     this.router.navigate(['/error']);
    //   }

     
  }

  // @Input()
  // set id(userId: number) {
  //   this.user = this.authService.getUser(userId)
  //     .subscribe( user => {

  //     });
  // }
 }
