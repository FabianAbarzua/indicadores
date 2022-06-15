import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    
    console.log(moment().format("YYYY-MM-DD"))
    // console.log({{ new Date() || 'yyyy-MM-dd' }});
    console.log(this.datePipe.transform(new Date(), 'yyyy-MM-dd')); 
    console.log(moment().add('-30', 'days').format("YYYY-MM-DD"));
  }
}
