import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ButtonVar: number = -1;
  chosen: number = -1;
  isClicked:boolean=true;
  button=document.getElementsByTagName("button");
  voteClick = (buttonclicked: number) => {
    if(this.isClicked==true){
      this.ButtonVar=buttonclicked;
      this.button[buttonclicked].innerText="Unvote";
      this.isClicked=false;   
    }
    else{
      this.ButtonVar=-1;
      this.button[buttonclicked].innerText="Vote";
      this.isClicked=true;
    }
  }
  disabledClick(disabled?:number) {
    if(this.ButtonVar!==disabled){
      return this.ButtonVar!==-1;
    }
    return false;
  }
  hideText = (chosenVar: number) => {
    this.chosen = chosenVar;
    if (this.chosen == this.ButtonVar && this.chosen != -1) {
      return false;
    }
      return true;
    
  }
}
