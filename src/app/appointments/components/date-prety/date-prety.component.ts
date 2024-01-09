import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'date-prety',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './date-prety.component.html',
  styleUrl: './date-prety.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePretyComponent { 

  @Input() dateAux?: Date = new Date(); 

  
}
