import { Component } from '@angular/core';
import {Dialog} from '@angular/cdk/dialog';
import {WizardComponent} from "./wizard/wizard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NG-V Wizard';

  constructor(private dialogService: Dialog) {
  }

  openDialog() {
  this.dialogService.open(WizardComponent, {
    minWidth: '300px',
    data: {
      animal: 'panda',
    },
  })
  }
}
