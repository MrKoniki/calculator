import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public answerObj = {
    answer: 0,
    correctAnswer: 20,
  };

  async calc() {
    this.answerObj.answer = parseInt(
      (<HTMLInputElement>document.getElementById('value')).value
    );
    return this.answerObj.answer === this.answerObj.correctAnswer
      ? alert('Right!')
      : alert('Wrong!');
  }

  title = 'calculator';
}
