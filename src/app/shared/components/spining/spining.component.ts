import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-spining',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="flex justify-content-center align-content-center flex-wrap" style="min-height: 400px">
    <div class="flex align-items-start justify-content-center w-4rem h-4rem font-bold border-round m-2 t-6">
      
      <i class="pi pi-spin pi-spinner" style="font-size: 12rem"></i>
    </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpiningComponent { }
