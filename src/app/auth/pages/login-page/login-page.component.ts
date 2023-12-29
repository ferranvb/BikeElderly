import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route, Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule, RouterModule,CardModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {

  constructor(private authService:AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login('johndoe@gmail.com', '12345a')
      .subscribe( user => {
        this.router.navigate(['/users-list']);
      });

     
  }
 }
