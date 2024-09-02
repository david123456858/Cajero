import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-optionspage',
  templateUrl: './optionspage.component.html',
  styleUrls: ['./optionspage.component.css']
})
export class OptionspageComponent {
  @Output() changeState = new EventEmitter<boolean>();

  close(){
    this.changeState.emit(false);
  }
}
