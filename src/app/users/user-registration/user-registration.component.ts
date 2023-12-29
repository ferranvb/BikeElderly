import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationComponent implements OnInit {

  ngOnInit(): void { }

}
