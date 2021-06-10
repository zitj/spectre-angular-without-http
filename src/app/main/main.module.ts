import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent],
  imports: [CommonModule],
})
export class MainModule {}
