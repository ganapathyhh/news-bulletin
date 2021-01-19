import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {
  @Output() setTheme = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(event: any): void {
    this.setTheme.emit(event.checked);
  }
}
