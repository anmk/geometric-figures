import { Component, OnInit, Inject, OnDestroy, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject ,  Observable } from 'rxjs';

import { FiguresService } from '../figures.service';

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.css']
})

export class DataSelectorComponent implements OnInit, AfterViewChecked {

  availableShapes: object[];
  shapeForm: FormGroup = this.buildCalculateForm();

  constructor(protected formBuilder: FormBuilder,
              protected figuresService: FiguresService,
              protected router: Router) {
    this.availableShapes = this.figuresService.getShapes();
  }

  private buildCalculateForm(): FormGroup {
    return this.formBuilder.group({
      shape: this.formBuilder.control('', [Validators.required]),
      checkTriangle:  this.formBuilder.control(false),
      calculationType: this.formBuilder.control('', [Validators.required])
    });
  }

  ngOnInit() {
    this.scrollToTop();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  protected scrollToTop(): void {
    const scrollToTop = (screen.width < 992) ?  window.scrollTo(0, 0) : null;
  }

  protected scrollToBottom(): void {
    const scrollToBottom =
    (!this.shapeForm.hasError('required') && this.shapeForm.valid && screen.width < 992) ?
    window.scrollTo(0, 1270 - window.innerHeight) : null;
  }

  private further(): void {
    this.figuresService.getAllDataStream();
    this.figuresService.addToAllDataStreem(this.shapeForm.value);
    this.router.navigate(['entry']);
  }

  protected goToHome(): void {
    this.router.navigate(['home']);
  }

}
