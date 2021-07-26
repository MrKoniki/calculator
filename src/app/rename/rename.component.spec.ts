import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RenameComponent } from './rename.component';

describe('Simple Service', () => {
  let component: RenameComponent;

  beforeEach(() => {
    component = new RenameComponent();
  });

  it('it should been true', () => {
    component.teen = true;
    expect(component.isTeen()).toBeTruthy();
  });
  it('it should been false', () => {
    component.teen = false;
    expect(component.isTeen()).toBeTruthy();
  });
  it('it should been false', () => {
    component.teen = false;
    expect(component.isTeen(10)).toBeTruthy();
  });
  it('it should been true', () => {
    component.teen = null;
    expect(component.isTeen(19)).toBeTruthy();
  });
  it('it should been false', () => {
    component.teen = null;
    expect(component.isTeen(40)).toBeTruthy();
  });
  it('it should been true', () => {
    component.teen = null;
    expect(component.isTeen()).toBeTruthy();
  });
});
