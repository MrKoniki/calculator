import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RenameRoutingModule } from './rename-routing.module';
import { RenameComponent } from './rename.component';

@NgModule({
  declarations: [RenameComponent],
  imports: [BrowserModule, RenameRoutingModule],
  providers: [],
  bootstrap: [RenameComponent],
})
export class RenameModule {}
