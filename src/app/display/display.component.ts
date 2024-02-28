import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/details.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
public details: any;
public detail2: any;
  constructor(private detailsService: DetailsService) {    console.log('hellooo')
  this.details = localStorage.getItem('details');
  this.details = JSON.parse(this.details);
  this.detail2 = this.detailsService.xyz;
}

  ngOnInit(): void {
    console.log('hellooo',this.details,this.detail2)
  }

}
