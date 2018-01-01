import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private a: Flashlight, private b: Camera, private c: NativeAudio) {

  }
  on(){
    this.a.switchOn();
  }
  off(){
    this.a.switchOff();
  }

  capture(){
      this.b.getPicture();
  }
  player(){
    this.c.play(1, completeCallback);
  }
}
