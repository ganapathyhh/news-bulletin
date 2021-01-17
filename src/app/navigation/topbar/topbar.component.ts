import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() sideNavToggle = new EventEmitter<void>();
  isViewList: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.sideNavToggle.emit();
  }

}
