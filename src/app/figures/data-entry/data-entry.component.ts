import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable ,  Subscription } from 'rxjs';

import { SelectionData, AllCalculationData } from '../types';
import { FiguresService } from '../figures.service';
import { DataSelectorComponent } from '../data-selector/data-selector.component';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})

export class DataEntryComponent extends DataSelectorComponent implements OnInit, OnDestroy, AfterViewChecked {

  private allCalculationDataSubscription: Subscription;
  entryForm: FormGroup = this.buildEntryDataForm();
  allCalculationData: AllCalculationData;

  constructor(protected formBuilder: FormBuilder,
              protected figuresService: FiguresService,
              protected router: Router) {
    super(formBuilder, figuresService, router);
  }

  private buildEntryDataForm(): FormGroup {
    return this.formBuilder.group({
      sideALength: this.formBuilder.control('', [Validators.required, Validators.pattern('[0-9.]{1,16}')]),
      sideBLength: this.formBuilder.control('', [Validators.required, Validators.pattern('[0-9.]{1,16}')]),
      sideCLength: this.formBuilder.control('', [Validators.required, Validators.pattern('[0-9.]{1,16}')])
    });
  }

  ngOnInit() {
    this.getAllCalculationDataSubscription();
    this.names();
    super.scrollToTop();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  getAllCalculationDataSubscription(): void {
    this.allCalculationDataSubscription = this.figuresService.getAllDataStream()
      .subscribe(allCalculationData => this.allCalculationData = allCalculationData);
  }

  private getAllCalculationData(): void {
    this.allCalculationData = {
      calculationType: this.allCalculationData.calculationType,
      shape: this.allCalculationData.shape,
      sideALength: this.entryForm.value.sideALength,
      sideBLength: this.entryForm.value.sideBLength,
      sideCLength: this.entryForm.value.sideCLength,
      checkTriangle: this.allCalculationData.checkTriangle,
      nameALength: this.allCalculationData.nameALength,
      nameBLength: this.allCalculationData.nameBLength,
      nameCLength: this.allCalculationData.nameCLength,
      resNameALength: this.allCalculationData.resNameALength,
      resNameBLength: this.allCalculationData.resNameBLength,
      resNameCLength: this.allCalculationData.resNameCLength,
      shapeName: this.allCalculationData.shapeName,
      calculationName: this.allCalculationData.calculationName,
    };
  }

  protected scrollToBottom(): void {
    const scrollToBottom =
      (!this.entryForm.hasError('required') && this.entryForm.valid && screen.width < 992) ?
      window.scrollTo(0, 1270 - window.innerHeight) : null;
  }

  calculate(): void {
    this.getAllCalculationData();
    this.figuresService.addToAllDataStreem(this.allCalculationData);
    this.entryForm = this.buildEntryDataForm();
    this.router.navigate(['shape']);
  }

  private reset(): void  {
    this.entryForm.reset();
  }

  backToSelect(): void {
    this.router.navigate(['selection']);
  }

  private names(): void {
    this.figuresService.sideNames();
    this.figuresService.resNames();
  }

  ngOnDestroy(): void {
    this.allCalculationDataSubscription.unsubscribe();
  }

}
