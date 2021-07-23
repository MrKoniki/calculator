import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('Simple Service', () => {
  let service: AppComponent;

  beforeEach(() => {
    service = new AppComponent();
  });

  it('it should been work', () => {
    service.answerObj.answer = 20;
    expect(service.calc()).toBeTruthy();
  });
});
