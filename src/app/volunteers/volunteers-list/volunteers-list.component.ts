import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { VolunteersService } from '../volunteers.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import  jsonData from '../../../json.db/volunteers.json';
import { iVolunteer } from '../interface/iVolunteer';

@Component({
  selector: 'volunteers-list',
  standalone: true,
  imports: [
    CommonModule,TableModule,ButtonModule,TagModule, RouterLink, RouterOutlet,HttpClientModule,
  ],
  templateUrl: './volunteers-list.component.html',
  styleUrl: './volunteers-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolunteerListComponent implements OnInit {

  public volunteersList!: iVolunteer[]; 


  private volunteersService = inject(VolunteersService);
  private router = inject(Router);

  constructor() {
   
  }

  ngOnInit(): void {
    this.getVolunteers();
  }
  
  // getV() : Ivoluntari[] {
  //   return this.volunteersService.getVolunteers()
  //     .subscribe(response => {return response.;});
  // }

  getVolunteers(): void {
    this.volunteersService.getVolunteers()
    // .subscribe(response => console.log('data',response));
       .subscribe( (response) => 
        { console.log('response',response);
          this.volunteersList = response;}
        );
  }

  btnClick() {
    this.router.navigateByUrl('/login');
  };

  // http.get('/images/dog.jpg', {responseType: 'arraybuffer'}).subscribe(buffer => {
  //   console.log('The image is ' + buffer.length + ' bytes large');
  // });

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }

}
 
