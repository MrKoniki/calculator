import { Component } from '@angular/core';

@Component({
  selector: 'rename',
  templateUrl: './rename.component.html',
  styleUrls: ['./rename.component.css'],
})
export class RenameComponent {
  public teen: any;

  async isTeen(age?: number) {
    let teen;
    if (this.teen) {
      teen = this.teen;
    } else if (age) {
      teen = age < 20;
    } else {
      teen = await this.checkTeen();
    }
    return Promise.resolve(teen);
  }
  checkTeen() {
    return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
  }
}
