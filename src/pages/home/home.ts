import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight'
import { ToastController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  flashLightStatus: boolean;

  constructor(private flashLight: Flashlight, private toast: ToastController, private platform: Platform) {
    this.platform.ready().then(() => {
      this.updateFlashLightStaus();
    });
  }


  

  /**
   * Toggle flash light
   */
  toggleFlashLight() {

    if (this.flashLight.available) {
      if (this.flashLight.isSwitchedOn()) {
        this.flashLight.switchOff();
      } else {
        this.flashLight.switchOn();
      }
      this.updateFlashLightStaus();
    } else {
      this.showToast('Flashlight is not available');
    }
  }

  /**
   * Update flash light status
   */
  updateFlashLightStaus() {
    this.flashLightStatus = this.flashLight.isSwitchedOn();
  }

  /**
   * Show Toast
   * @param message message for toast conttroller
   */
  private showToast(message: string) {
    this.toast.create({
      message: message,
      duration: 2000
    }).present();
  }

}
