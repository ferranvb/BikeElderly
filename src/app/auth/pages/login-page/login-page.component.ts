import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule, PanelModule, RouterModule,ReactiveFormsModule,InputTextModule,ButtonModule,DialogModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {

  public loginForm!: FormGroup;
  public submitted = false;
  visible: boolean = false;

  // private user?: User;

  constructor(private authService:AuthService, 
    private formBuilder: FormBuilder,
    private router: Router) 
  {}

  ngOnInit(): void {
  
    this.loginForm = this.formBuilder.group({
      user: ["", [Validators.required]],
      password: [
        "",
        [
          Validators.required,
          // Validators.pattern(
          //   "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          // )
        ]
      ]
    });

    localStorage.clear();
  }

  onLogin(): void {
    // console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      localStorage.setItem("user-Data", JSON.stringify(this.loginForm.value));
      
      if ( "fer" === this.loginForm.value.user!  ) {
        this.router.navigate(["/app"]);
      } else {
        // this.router.navigate(["/error"]);
        this.showDialog();
        this.ngOnInit();
      }
    }
  }

  

  showDialog() {
      this.visible = true;
  }

  // loginForm = new FormGroup({
  //   user: new FormControl('',[Validators.required]),
  //   password:new FormControl('',[Validators.required]),
  // });

  // onLogin(): void {
  //   console.log('Data login' , this.loginForm.value.user);

  //   //TODO determinar com guardo l'autenticació
  //   localStorage.setItem('user',this.loginForm.value.user!);

  //   if ( "fer" == localStorage.getItem('user') ) {
  //     this.router.navigate(['/app']);
  //   } else {
  //     this.router.navigate(['error']);
  //   }
    // this.authService.login(this.loginForm.value.user!, this.loginForm.value.password!)
    //   .subscribe( user => {
    //     this.user = user;
    
    //   });

    //   if (this.authService.getCurrentUser() ){
    //     this.router.navigate(['/panell']);
    //   } else {
    //     this.router.navigate(['/error']);
    //   }

     
  // }

  // @Input()
  // set id(userId: number) {
  //   this.user = this.authService.getUser(userId)
  //     .subscribe( user => {

  //     });
  // }
 }
