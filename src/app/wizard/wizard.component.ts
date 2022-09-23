import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DIALOG_DATA} from "@angular/cdk/dialog";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  constructor(@Inject(DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

}
