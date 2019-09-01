import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { OwnerForCreation } from '../../_interface/ownerForCreation.model';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from '../../shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from '../../shared/error-handler.service'
import { NgxSpinnerService,NgxSpinnerModule } from "ngx-spinner";

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {
  public ownerForm: FormGroup;
  private dialogConfig;

  constructor(private location: Location, private repository: RepositoryService, private dialog: MatDialog, private errorService: ErrorHandlerService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      emp_name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      emp_id:new FormControl('',[Validators.required, Validators.maxLength(6)]),
      comments: new FormControl('',[Validators.maxLength(1000)]),
      gender: new FormControl('',[Validators.required]),
      family_history: new FormControl('',[Validators.required]),
      work_interfere: new FormControl('',[Validators.required]),
      benefits: new FormControl('',[Validators.required]),
      care_options: new FormControl('',[Validators.required]),
      obs_consequence: new FormControl('',[Validators.required]),
      leave: new FormControl('',[Validators.required]),
      anonymity: new FormControl('',[Validators.required])
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      this.spinner.show();
      this.executeOwnerCreation(ownerFormValue);
    }
  }

  private executeOwnerCreation = (ownerFormValue) => {
    let owner: OwnerForCreation = {
      emp_name: ownerFormValue.emp_name,
      emp_id: ownerFormValue.emp_id,
      comments: ownerFormValue.comments,
      gender: ownerFormValue.gender,
      family_history: ownerFormValue.family_history,
      work_interfere: ownerFormValue.work_interfere,
      benefits: ownerFormValue.benefits,
      care_options: ownerFormValue.care_options,
      obs_consequence: ownerFormValue.obs_consequence,
      leave: ownerFormValue.leave,
      anonymity: ownerFormValue.anonymity
    }

    let apiUrl = '/predict';
    this.repository.create(apiUrl, owner)
      .subscribe(res => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
        this.spinner.hide();
        console.log(res);
        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed()
          .subscribe(result => {
            this.location.back();
          });
      },
        (error => {
          console.log(error);
          this.spinner.hide();
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
        })
      )
  }

}
