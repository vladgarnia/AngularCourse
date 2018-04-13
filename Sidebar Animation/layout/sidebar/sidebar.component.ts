import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('collapse', [
      state('collapsed', style({
        width: '64px',
        'overflow-y': 'hidden',
        'overflow-x': 'hidden',
        'display': 'inline-block'
      })),
      transition('* => collapsed', animate('0.1s ease-out')),
      transition('collapsed => *', animate('0.1s ease-out'))
    ])
  ]
})
export class SidebarComponent implements OnInit {

  constructor() {

  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() { }

}
