import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opended: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMenu(){
    this.opended = !this.opended;
  }

}
