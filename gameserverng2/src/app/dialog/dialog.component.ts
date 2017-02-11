import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogResultExampleDialog {

  answer: string = "";
  question: string = "";

  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}

  public setAnswer(answer: string, question: string ) {
    this.answer = answer;
    this.question = question;
  }
}