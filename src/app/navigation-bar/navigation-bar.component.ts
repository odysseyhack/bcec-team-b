import {Component, OnInit} from '@angular/core';
import {ColorShifterService} from './color-shifter.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  hidePanel = () => {
    document.getElementById('nav-overlay').removeEventListener('click', this.hidePanel, true);
    document.getElementById('nav-overlay').removeEventListener('touchmove', this.hidePanel, true);
    document.getElementById('sidepanel').style.transform = 'translate(-110%, 0px)';
    document.getElementById('nav-overlay').style.opacity = '0.0';
    document.getElementById('nav-overlay').style.pointerEvents = 'none';
    window.removeEventListener('scroll', this.hidePanel, true);
  }


  togglePanel() {
    const on = 'translate(0px, 0px)';
    const off = 'translate(-110%, 0px)';
    const style = document.getElementById('sidepanel').style;
    if (style.transform === '' || style.transform === off) {
      style.transform = on;
      setTimeout(() => { // add sidenav
        document.getElementById('nav-overlay').addEventListener('click', this.hidePanel, true);
        document.getElementById('nav-overlay').addEventListener('touchmove', this.hidePanel, true);
        document.getElementById('nav-overlay').style.opacity = '0.5';
        document.getElementById('nav-overlay').style.pointerEvents = 'all';
        window.addEventListener('scroll', this.hidePanel, true);
      }, 500);
    } else if (style.transform === on) { // remove sidenav
      this.hidePanel();
    }
  }



  constructor(public shifter: ColorShifterService) {
  }

  ngOnInit() {
    this.shifter.newColor.subscribe(colorCode => this.changeColor(colorCode));
  }

  changeColor(colorCode: string) {
    const styleRoot1 = document.getElementById('navigation-root1').style;
    const styleRoot2 = document.getElementById('navigation-root2').style;
    const styleSide = document.getElementById('sidepanel').style;
    styleRoot1.backgroundColor = colorCode;
    styleRoot2.backgroundColor = colorCode;
    styleSide.backgroundColor = colorCode;
  }

}
