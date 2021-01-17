import { OverlayContainer } from '@angular/cdk/overlay';
import { AfterViewInit, Component, HostBinding, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('class') componentCssClass: string;
  
  constructor(private overlayContainer: OverlayContainer) {
    this.componentCssClass = '';
  }

  ngOnInit(): void {}

  setTheme(event: any) {
    if(event == true) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.componentCssClass = 'dark-theme';
    } else {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
      this.componentCssClass = '';
    }
  }
}
