import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<boolean>();
  isOpen: boolean = false;
  toggleSideMenu() {
    this.isOpen=!this.isOpen;
    this.toggle.emit(this.isOpen);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
