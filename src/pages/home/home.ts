import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { AnimationService, AnimationBuilder } from 'css-animator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myElement') myElem;
  private animator: AnimationBuilder;

  constructor(public navCtrl: NavController,animationService: AnimationService) {
    this.animator = animationService.builder();
  }
  animateElem() {
    this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }
}
