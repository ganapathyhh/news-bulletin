import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() sideNavToggle = new EventEmitter<void>();
  isViewList = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav(): void {
    this.sideNavToggle.emit();
  }

}
