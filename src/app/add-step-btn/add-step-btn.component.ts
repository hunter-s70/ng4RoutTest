import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-step-btn',
  templateUrl: './add-step-btn.component.html',
  styleUrls: ['./add-step-btn.component.css']
})
export class AddStepBtnComponent implements OnChanges {
  @Input() currentStep: string;
  private stepMax: string = 'st4';
  private stepMin: string = 'st1';
  prevBtn: string;
  nextBtn: string;

  ngOnChanges(changes: SimpleChanges) {
    let stepNumber: number = +/\d/g.exec(this.currentStep);

    this.prevBtn = `/st${stepNumber - 1}`;
    this.nextBtn = `/st${stepNumber + 1}`;

    if (this.currentStep === this.stepMin) {
      this.prevBtn = '';
    }

    if (this.currentStep === this.stepMax) {
      this.nextBtn = '';
    }
  }

}
