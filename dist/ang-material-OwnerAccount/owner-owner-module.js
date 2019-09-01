(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["owner-owner-module"],{

/***/ "./src/app/owner/owner-create/owner-create.component.css":
/*!***************************************************************!*\
  !*** ./src/app/owner/owner-create/owner-create.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\n    width: 500px;\n    padding: 20px 40px 20px 40px;\n}\n\nmat-card-title{\n    text-align: center;\n}\n\n.mat-radio-button {\n    margin-right: 16px;\n    \n  }\n\nmat-form-field.example-full-width {\n    width: 80%;\n  }\n\ndiv.radio-div {\n      display: inline-block;\n      width: 500px;\n    padding: 20px 40px 20px 40px;\n  }\n\nmat-radio-group.radio-item{\n      display: flex;\n      flex-wrap: wrap;\n      flex-basis: auto;\n      flex: 1 1 0;\n  }\n\n.mat-subheader {\n      padding-left: 0px !important;\n      margin: 0px;\n      \n  }\n\n.mat-radio-button {\n      padding-right: 16px;\n      margin-bottom: 16px;\n\n  }"

/***/ }),

/***/ "./src/app/owner/owner-create/owner-create.component.html":
/*!****************************************************************!*\
  !*** ./src/app/owner/owner-create/owner-create.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n  <mat-card fxFlex.xs=\"100%\" padding=\"0px\">\n    <mat-card-title>Employee Details</mat-card-title>\n    <form [formGroup]=\"ownerForm\" autocomplete=\"off\" novalidate (ngSubmit)=\"createOwner(ownerForm.value)\"\n      fxLayout=\"column wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n      <mat-card-content>\n        ￼\n\n        <mat-form-field width=\"40%\" padding=\"20px\">\n          <input matInput type=\"text\" placeholder=\"EMPLOYEE ID *\" formControlName=\"emp_id\" id=\"emp_id\">\n          <mat-hint align=\"end\">Exactly 7 characters long.</mat-hint>\n          <mat-error *ngIf=\"hasError('emp_id', 'required')\">ID is required</mat-error>\n          <mat-error *ngIf=\"hasError('emp_id', 'maxlength')\"> 7 characters</mat-error>\n        </mat-form-field>\n\n\n        <mat-form-field width=\"40%\" padding=\"20px\">\n          <input matInput type=\"text\" placeholder=\"EMPLOYEE NAME\" formControlName=\"emp_name\" id=\"emp_name\">\n          <mat-hint align=\"end\">Not more then 60 characters long.</mat-hint>\n          <mat-error *ngIf=\"hasError('emp_name', 'required')\">Name is required</mat-error>\n          <mat-error *ngIf=\"hasError('emp_name', 'maxlength')\">You have more than 60 characters</mat-error>\n        </mat-form-field>\n\n\n        <div class=\"radio-div\">\n          <h3 mat-subheader align=\"center\">Gender</h3>\n          <mat-radio-group formControlName=\"gender\">\n            <mat-radio-button value=\"M\">Male</mat-radio-button>\n            <mat-radio-button value=\"F\">Female</mat-radio-button>\n            <mat-radio-button value=\"O\">Others</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n        <div class=\"radio-div\">\n          <h3 mat-subheader align=\"center\">Family History</h3>\n          <mat-radio-group formControlName=\"family_history\">\n            <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n            <mat-radio-button value=\"No\">No</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n        <div class=\"radio-div\">\n          <h3 mat-subheader align=\"center\">Work Interfere</h3>\n          <mat-radio-group formControlName=\"work_interfere\">\n            <mat-radio-button value=\"NA\">NA</mat-radio-button>\n            <mat-radio-button value=\"Often\">Often</mat-radio-button>\n            <mat-radio-button value=\"Rarely\">Rarely</mat-radio-button>\n            <mat-radio-button value=\"Sometimes\">Sometimes</mat-radio-button>\n            <mat-radio-button value=\"Never\">Never</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n        <div class=\"radio-div\">\n          <h3 mat-subheader align=\"center\">Benefits</h3>\n          <mat-radio-group formControlName=\"benefits\">\n            <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n            <mat-radio-button value=\"No\">No</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n        <div class=\"radio-div\">\n          <h3 mat-subheader align=\"center\">Care Options</h3>\n          <mat-radio-group formControlName=\"care_options\">\n            <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n            <mat-radio-button value=\"No\">No</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n        <div class=\"radio-div\">\n          <h3 mat-subheader align=\"center\">Observable Consequence</h3>\n          <mat-radio-group formControlName=\"obs_consequence\">\n            <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n            <mat-radio-button value=\"No\">No</mat-radio-button>\n          </mat-radio-group>\n        </div>\n        <div class=\"radio-div\">\n          <h3 mat-subheader align=\"center\">Anonymity</h3>\n          <mat-radio-group class=\"radio-item\" formControlName=\"anonymity\">\n            <mat-radio-button value=\"Yes\">Yes</mat-radio-button>\n            <mat-radio-button value=\"No\">No</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n        <div class=\"radio-div\">\n          <h3 mat-subheader align=\"center\">Leave</h3>\n          <mat-radio-group class=\"radio-item\" formControlName=\"leave\">\n            <mat-radio-button value=\"Don't know\">Don't Know</mat-radio-button>\n            <mat-radio-button value=\"Somewhat difficult\">Somewhat Difficult</mat-radio-button>\n            <mat-radio-button value=\"Somewhat easy\">Somewhat Easy</mat-radio-button>\n            <mat-radio-button value=\"Very easy\">Very Easy</mat-radio-button>\n            <mat-radio-button value=\"Very difficult\">Very Difficult</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n\n        <mat-form-field class=\"example-full-width\" formControlNAme=\"comments\">\n          <textarea matInput placeholder=\"Leave a comment\"></textarea>\n        </mat-form-field>\n\n      </mat-card-content>\n      <mat-card-actions align=\"center\">\n        <button mat-raised-button color=\"primary\" [disabled]=\"!ownerForm.valid\">Create</button>\n        <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"onCancel()\">Cancel</button>\n      </mat-card-actions>\n\n      <ngx-spinner bdOpacity=0.6 bdColor=\"#333\" size=\"medium\" color=\"#fff\" type=\"ball-atom\" [fullScreen]=\"true\">\n        <p style=\"color: white\"> Processing... </p>\n      </ngx-spinner>\n    </form>\n  </mat-card>\n</section>"

/***/ }),

/***/ "./src/app/owner/owner-create/owner-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/owner/owner-create/owner-create.component.ts ***!
  \**************************************************************/
/*! exports provided: OwnerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerCreateComponent", function() { return OwnerCreateComponent; });
/* harmony import */ var _shared_repository_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/repository.service */ "./src/app/shared/repository.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/dialogs/success-dialog/success-dialog.component */ "./src/app/shared/dialogs/success-dialog/success-dialog.component.ts");
/* harmony import */ var _shared_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/error-handler.service */ "./src/app/shared/error-handler.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OwnerCreateComponent = /** @class */ (function () {
    function OwnerCreateComponent(location, repository, dialog, errorService, spinner) {
        var _this = this;
        this.location = location;
        this.repository = repository;
        this.dialog = dialog;
        this.errorService = errorService;
        this.spinner = spinner;
        this.hasError = function (controlName, errorName) {
            return _this.ownerForm.controls[controlName].hasError(errorName);
        };
        this.onCancel = function () {
            _this.location.back();
        };
        this.createOwner = function (ownerFormValue) {
            if (_this.ownerForm.valid) {
                _this.spinner.show();
                _this.executeOwnerCreation(ownerFormValue);
            }
        };
        this.executeOwnerCreation = function (ownerFormValue) {
            var owner = {
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
            };
            var apiUrl = '/predict';
            _this.repository.create(apiUrl, owner)
                .subscribe(function (res) {
                var dialogRef = _this.dialog.open(_shared_dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SuccessDialogComponent"], _this.dialogConfig);
                _this.spinner.hide();
                console.log(res);
                //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
                dialogRef.afterClosed()
                    .subscribe(function (result) {
                    _this.location.back();
                });
            }, (function (error) {
                console.log(error);
                _this.spinner.hide();
                _this.errorService.dialogConfig = __assign({}, _this.dialogConfig);
                _this.errorService.handleError(error);
            }));
        };
    }
    OwnerCreateComponent.prototype.ngOnInit = function () {
        this.ownerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emp_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            emp_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            family_history: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            work_interfere: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            benefits: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            care_options: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            obs_consequence: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            leave: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            anonymity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.dialogConfig = {
            height: '200px',
            width: '400px',
            disableClose: true,
            data: {}
        };
    };
    OwnerCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-create',
            template: __webpack_require__(/*! ./owner-create.component.html */ "./src/app/owner/owner-create/owner-create.component.html"),
            styles: [__webpack_require__(/*! ./owner-create.component.css */ "./src/app/owner/owner-create/owner-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _shared_repository_service__WEBPACK_IMPORTED_MODULE_0__["RepositoryService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _shared_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], OwnerCreateComponent);
    return OwnerCreateComponent;
}());



/***/ }),

/***/ "./src/app/owner/owner-details/account-data/account-data.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/owner/owner-details/account-data/account-data.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-color {\n    color: #3f51b5;\n}\n\nmat-accordion{\n    margin-top: 20px;\n}"

/***/ }),

/***/ "./src/app/owner/owner-details/account-data/account-data.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/owner/owner-details/account-data/account-data.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n    <mat-accordion fxFlex=\"500px\" fxFlex.xs=\"100%\">\n        <mat-expansion-panel *ngFor=\"let account of accounts; let i = index\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              {{i+1}}. Account\n            </mat-panel-title>\n            <mat-panel-description>\n              Account Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>      \n          <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n            <div fxFlex=\"35%\" class=\"text-color\"><strong>type:</strong> &nbsp; {{account?.accountType}}</div>\n            <div fxFlex class=\"text-color\"><strong>created:</strong> &nbsp; {{account?.dateCreated | date}}</div>\n          </div>\n\n        </mat-expansion-panel>\n      </mat-accordion>\n</section>\n"

/***/ }),

/***/ "./src/app/owner/owner-details/account-data/account-data.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/owner/owner-details/account-data/account-data.component.ts ***!
  \****************************************************************************/
/*! exports provided: AccountDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDataComponent", function() { return AccountDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountDataComponent = /** @class */ (function () {
    function AccountDataComponent() {
    }
    AccountDataComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AccountDataComponent.prototype, "accounts", void 0);
    AccountDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-data',
            template: __webpack_require__(/*! ./account-data.component.html */ "./src/app/owner/owner-details/account-data/account-data.component.html"),
            styles: [__webpack_require__(/*! ./account-data.component.css */ "./src/app/owner/owner-details/account-data/account-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountDataComponent);
    return AccountDataComponent;
}());



/***/ }),

/***/ "./src/app/owner/owner-details/owner-data/owner-data.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/owner/owner-details/owner-data/owner-data.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-content, mat-card-title, mat-card-actions {\n    text-align: center;\n}\n\nmat-card-content{\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.advanced-color{\n    color: #3f51b5;\n}\n\n.beginner-color{\n    color: #f44336;\n}"

/***/ }),

/***/ "./src/app/owner/owner-details/owner-data/owner-data.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/owner/owner-details/owner-data/owner-data.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n    <mat-card fxFlex=\"500px\" fxFlex.xs=\"100%\">\n        <mat-card-title>Details for the clicked owner</mat-card-title>\n        <mat-card-content>\n          <div fxLayout=\"column wrap\" fxLayoutGap=\"40px\">\n            <div fxLayout=\"row wrap\" fxFlex>\n              <div fxFlex><strong>Owner's name:</strong></div>\n              <div fxFlex>{{owner?.name}}</div>\n            </div>\n      \n            <div fxLayout=\"row wrap\" fxFlex>\n              <div fxFlex><strong>Date of birth:</strong></div>\n              <div fxFlex>{{owner?.dateOfBirth | date}}</div>\n            </div>\n      \n            <div fxLayout=\"row wrap\" fxFlex *ngIf='owner?.accounts.length <= 2; else advancedUser'>\n              <div fxFlex><strong>Type of user:</strong></div>\n              <div fxFlex class=\"beginner-color\">Beginner user.</div>\n            </div>\n            <ng-template #advancedUser>\n              <div fxLayout=\"row wrap\" fxFlex>\n                <div fxFlex><strong>Type of user:</strong></div>\n                <div fxFlex class=\"advanced-color\">Advanced user</div>\n              </div>\n            </ng-template>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <mat-form-field>\n            <mat-select placeholder=\"Show accounts\" (selectionChange)=\"onChange($event)\">\n              <mat-option *ngFor=\"let opt of selectOptions\" [value]=\"opt.value\">\n                {{opt.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-card-actions>\n      </mat-card>\n</section>"

/***/ }),

/***/ "./src/app/owner/owner-details/owner-data/owner-data.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/owner/owner-details/owner-data/owner-data.component.ts ***!
  \************************************************************************/
/*! exports provided: OwnerDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerDataComponent", function() { return OwnerDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OwnerDataComponent = /** @class */ (function () {
    function OwnerDataComponent() {
        var _this = this;
        this.selectOptions = [{ name: 'Show', value: 'show' }, { name: "Don't Show", value: '' }];
        this.selectEmitt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = function (event) {
            _this.selectEmitt.emit(event.value);
        };
    }
    OwnerDataComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OwnerDataComponent.prototype, "owner", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OwnerDataComponent.prototype, "selectEmitt", void 0);
    OwnerDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner-data',
            template: __webpack_require__(/*! ./owner-data.component.html */ "./src/app/owner/owner-details/owner-data/owner-data.component.html"),
            styles: [__webpack_require__(/*! ./owner-data.component.css */ "./src/app/owner/owner-details/owner-data/owner-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OwnerDataComponent);
    return OwnerDataComponent;
}());



/***/ }),

/***/ "./src/app/owner/owner-details/owner-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/owner/owner-details/owner-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/owner/owner-details/owner-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/owner/owner-details/owner-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-owner-data [owner]='owner' (selectEmitt)='showAccounts = $event'></app-owner-data>\n<app-account-data *ngIf='showAccounts' [accounts]='owner?.accounts'></app-account-data>"

/***/ }),

/***/ "./src/app/owner/owner-details/owner-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/owner/owner-details/owner-details.component.ts ***!
  \****************************************************************/
/*! exports provided: OwnerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerDetailsComponent", function() { return OwnerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/repository.service */ "./src/app/shared/repository.service.ts");
/* harmony import */ var _shared_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/error-handler.service */ "./src/app/shared/error-handler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OwnerDetailsComponent = /** @class */ (function () {
    function OwnerDetailsComponent(repository, router, activeRoute, errorHandler) {
        var _this = this;
        this.repository = repository;
        this.router = router;
        this.activeRoute = activeRoute;
        this.errorHandler = errorHandler;
        this.getOwnerDetails = function () {
            var id = _this.activeRoute.snapshot.params['id'];
            var apiUrl = "api/owner/" + id + "/account";
            _this.repository.getData(apiUrl)
                .subscribe(function (res) {
                _this.owner = res;
            }, function (error) {
                _this.errorHandler.handleError(error);
            });
        };
    }
    OwnerDetailsComponent.prototype.ngOnInit = function () {
        this.getOwnerDetails();
    };
    OwnerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner-details',
            template: __webpack_require__(/*! ./owner-details.component.html */ "./src/app/owner/owner-details/owner-details.component.html"),
            styles: [__webpack_require__(/*! ./owner-details.component.css */ "./src/app/owner/owner-details/owner-details.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]])
    ], OwnerDetailsComponent);
    return OwnerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/owner/owner-list/owner-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/owner/owner-list/owner-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n}\n\nth.mat-header-cell {\n    text-align: left;\n    max-width: 300px!important;\n}"

/***/ }),

/***/ "./src/app/owner/owner-list/owner-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/owner/owner-list/owner-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayout.lt-md=\"column wrap\" fxLayoutAlign=\"center center\" fxLayoutGap.gt-sm=\"250px\" fxLayoutGap.lt.md=\"20px\">\n  <mat-form-field>\n    <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n \n</div>\n<table mat-table [dataSource]=\"dataSource\" matSort>\n  <ng-container matColumnDef=\"emp_id\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Emp Id </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.emp_id}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"emp_name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Emp Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.emp_name}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"treatment\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Treatment </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.treatment}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"approval_status\">\n    <th mat-header-cell *matHeaderCellDef> Approval Status </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.approval_status}}</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"update\">\n      <th mat-header-cell *matHeaderCellDef> Accept </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button color=\"success\" [disabled]=\"element.approval_status!=='pending'\" (click)=\"redirectToUpdate(element.emp_id)\">\n            <mat-icon class=\"mat-18\">check</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef> Reject </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-icon-button color=\"warn\" [disabled]=\"element.approval_status!=='pending'\" (click)=\"redirectToDelete(element.emp_id)\">\n              <mat-icon class=\"mat-18\">clear</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n      <ngx-spinner bdOpacity=0.6 bdColor=\"#333\" size=\"medium\" color=\"#fff\" type=\"ball-atom\" [fullScreen]=\"true\">\n          <p style=\"color: white\"> Processing... </p>\n        </ngx-spinner>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<mat-paginator [pageSize]=\"2\" [pageSizeOptions]=\"[2, 4, 6, 10, 20]\">\n</mat-paginator>"

/***/ }),

/***/ "./src/app/owner/owner-list/owner-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/owner/owner-list/owner-list.component.ts ***!
  \**********************************************************/
/*! exports provided: OwnerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerListComponent", function() { return OwnerListComponent; });
/* harmony import */ var _shared_repository_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/repository.service */ "./src/app/shared/repository.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/error-handler.service */ "./src/app/shared/error-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OwnerListComponent = /** @class */ (function () {
    function OwnerListComponent(repoService, errorService, router, spinner) {
        var _this = this;
        this.repoService = repoService;
        this.errorService = errorService;
        this.router = router;
        this.spinner = spinner;
        this.displayedColumns = ['emp_id', 'emp_name', 'treatment', 'approval_status', 'update', 'delete'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.getAllOwners = function () {
            _this.repoService.getData('/approval_list')
                .subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
                _this.spinner.hide();
            }, function (error) {
                console.log(error);
                _this.errorService.handleError(error);
                _this.spinner.hide();
            });
            //this.dataSource.data=[{"emp_id":"eufbuj","treatment":"No","approval_status":"pending","emp_name":"ducbuj"},{"emp_id":"djdb","treatment":"No","approval_status":"pending","emp_name":"bfdj"}];
        };
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.redirectToDetails = function (id) {
            var url = "/owner/details/" + id;
            //this.router.navigate([url]);
        };
        this.redirectToUpdate = function (id) {
            _this.spinner.show();
            _this.repoService.getData("/accept_approval/" + id)
                .subscribe(function (res) {
                console.log(res);
                _this.getAllOwners();
            }, function (error) {
                console.log(error);
                _this.errorService.handleError(error);
                _this.spinner.hide();
            });
        };
        this.redirectToDelete = function (id) {
            _this.spinner.show();
            _this.repoService.getData("/reject_approval/" + id)
                .subscribe(function (res) {
                console.log(res);
                _this.getAllOwners();
            }, function (error) {
                console.log(error);
                _this.errorService.handleError(error);
                _this.spinner.hide();
            });
        };
    }
    OwnerListComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.getAllOwners();
    };
    OwnerListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], OwnerListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OwnerListComponent.prototype, "paginator", void 0);
    OwnerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-list',
            template: __webpack_require__(/*! ./owner-list.component.html */ "./src/app/owner/owner-list/owner-list.component.html"),
            styles: [__webpack_require__(/*! ./owner-list.component.css */ "./src/app/owner/owner-list/owner-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_repository_service__WEBPACK_IMPORTED_MODULE_0__["RepositoryService"], _shared_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], OwnerListComponent);
    return OwnerListComponent;
}());



/***/ }),

/***/ "./src/app/owner/owner-routing/owner-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/owner/owner-routing/owner-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OwnerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerRoutingModule", function() { return OwnerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../owner-list/owner-list.component */ "./src/app/owner/owner-list/owner-list.component.ts");
/* harmony import */ var _owner_details_owner_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../owner-details/owner-details.component */ "./src/app/owner/owner-details/owner-details.component.ts");
/* harmony import */ var _owner_create_owner_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../owner-create/owner-create.component */ "./src/app/owner/owner-create/owner-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'owners', component: _owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_3__["OwnerListComponent"] },
    { path: 'details/:id', component: _owner_details_owner_details_component__WEBPACK_IMPORTED_MODULE_4__["OwnerDetailsComponent"] },
    { path: 'create', component: _owner_create_owner_create_component__WEBPACK_IMPORTED_MODULE_5__["OwnerCreateComponent"] }
];
var OwnerRoutingModule = /** @class */ (function () {
    function OwnerRoutingModule() {
    }
    OwnerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], OwnerRoutingModule);
    return OwnerRoutingModule;
}());



/***/ }),

/***/ "./src/app/owner/owner.module.ts":
/*!***************************************!*\
  !*** ./src/app/owner/owner.module.ts ***!
  \***************************************/
/*! exports provided: OwnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerModule", function() { return OwnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner-list/owner-list.component */ "./src/app/owner/owner-list/owner-list.component.ts");
/* harmony import */ var _owner_routing_owner_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-routing/owner-routing.module */ "./src/app/owner/owner-routing/owner-routing.module.ts");
/* harmony import */ var _owner_details_owner_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owner-details/owner-details.component */ "./src/app/owner/owner-details/owner-details.component.ts");
/* harmony import */ var _owner_details_owner_data_owner_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./owner-details/owner-data/owner-data.component */ "./src/app/owner/owner-details/owner-data/owner-data.component.ts");
/* harmony import */ var _owner_details_account_data_account_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-details/account-data/account-data.component */ "./src/app/owner/owner-details/account-data/account-data.component.ts");
/* harmony import */ var _owner_create_owner_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./owner-create/owner-create.component */ "./src/app/owner/owner-create/owner-create.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var OwnerModule = /** @class */ (function () {
    function OwnerModule() {
    }
    OwnerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _owner_routing_owner_routing_module__WEBPACK_IMPORTED_MODULE_3__["OwnerRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            declarations: [_owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_2__["OwnerListComponent"], _owner_details_owner_details_component__WEBPACK_IMPORTED_MODULE_4__["OwnerDetailsComponent"], _owner_details_owner_data_owner_data_component__WEBPACK_IMPORTED_MODULE_5__["OwnerDataComponent"], _owner_details_account_data_account_data_component__WEBPACK_IMPORTED_MODULE_6__["AccountDataComponent"], _owner_create_owner_create_component__WEBPACK_IMPORTED_MODULE_7__["OwnerCreateComponent"]]
        })
    ], OwnerModule);
    return OwnerModule;
}());



/***/ }),

/***/ "./src/app/shared/error-handler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/error-handler.service.ts ***!
  \*************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/error-dialog/error-dialog.component */ "./src/app/shared/dialogs/error-dialog/error-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.errorMessage = '';
    }
    ErrorHandlerService.prototype.handleError = function (error) {
        if (error.status === 500) {
            this.handle500Error(error);
        }
        else if (error.status === 404) {
            this.handle404Error(error);
        }
        else {
            this.handleOtherError(error);
        }
    };
    ErrorHandlerService.prototype.handle500Error = function (error) {
        this.createErrorMessage(error);
        this.router.navigate(['/500']);
    };
    ErrorHandlerService.prototype.handle404Error = function (error) {
        this.createErrorMessage(error);
        this.router.navigate(['/404']);
    };
    ErrorHandlerService.prototype.handleOtherError = function (error) {
        this.createErrorMessage(error);
        this.dialogConfig.data = { 'errorMessage': this.errorMessage };
        this.dialog.open(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ErrorDialogComponent"], this.dialogConfig);
    };
    ErrorHandlerService.prototype.createErrorMessage = function (error) {
        this.errorMessage = error.error ? error.error : error.statusText;
    };
    ErrorHandlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/shared/repository.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/repository.service.ts ***!
  \**********************************************/
/*! exports provided: RepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryService", function() { return RepositoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepositoryService = /** @class */ (function () {
    function RepositoryService(http) {
        this.http = http;
    }
    RepositoryService.prototype.getData = function (route) {
        return this.http.get(this.createCompleteRoute(route, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAddress));
    };
    RepositoryService.prototype.create = function (route, body) {
        console.log(body);
        return this.http.post(this.createCompleteRoute(route, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAddress), body, this.generateHeaders());
    };
    RepositoryService.prototype.update = function (route, body) {
        return this.http.put(this.createCompleteRoute(route, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAddress), body, this.generateHeaders());
    };
    RepositoryService.prototype.delete = function (route) {
        return this.http.delete(this.createCompleteRoute(route, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAddress));
    };
    RepositoryService.prototype.createCompleteRoute = function (route, envAddress) {
        return envAddress + "/" + route;
    };
    RepositoryService.prototype.generateHeaders = function () {
        var requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            responseType: 'text'
        };
        return requestOptions;
    };
    RepositoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RepositoryService);
    return RepositoryService;
}());



/***/ })

}]);
//# sourceMappingURL=owner-owner-module.js.map