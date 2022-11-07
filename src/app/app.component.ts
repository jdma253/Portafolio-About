import { Component, OnInit,NgZone } from '@angular/core';
import * as Aos from 'aos';
//import  Typewriter from 't-writer.js'
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<ng-lottie [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'About';
  mostrar: boolean = false;

  private animationItem: any;

  constructor(private ngZone: NgZone) {}

  options1: AnimationOptions = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_zh6xtlj9.json',
  };

  options0: AnimationOptions = {
    path: 'https://assets3.lottiefiles.com/packages/lf20_es4p9zph.json',
  };

  options2: AnimationOptions = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_we9lzvwy.json',
  };

  options3: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_2znxgjyt.json',
  };

  options4: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_zzm4wo98.json',
  };

  options5: AnimationOptions = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_sexoc4iw.json',
  };

  options6: AnimationOptions = {
    path: 'https://assets6.lottiefiles.com/packages/lf20_QQedoPiDBq.json',
  };


  stop(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.stop();
    });
  }

  play(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.play();
    });
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  ngOnInit() {
    setTimeout(() => {
      this.mostrar = true;
      Aos.init();
      Aos.refresh();
    }, 500);

  }
}
