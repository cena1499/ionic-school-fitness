(self["webpackChunkfitness"] = self["webpackChunkfitness"] || []).push([["src_app_pages_add-page_add-page_module_ts"],{

/***/ 5416:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-page/add-page-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPagePageRoutingModule": () => (/* binding */ AddPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _add_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-page.page */ 391);




const routes = [
    {
        path: '',
        component: _add_page_page__WEBPACK_IMPORTED_MODULE_0__.AddPagePage
    }
];
let AddPagePageRoutingModule = class AddPagePageRoutingModule {
};
AddPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddPagePageRoutingModule);



/***/ }),

/***/ 9378:
/*!***************************************************!*\
  !*** ./src/app/pages/add-page/add-page.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPagePageModule": () => (/* binding */ AddPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _add_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-page-routing.module */ 5416);
/* harmony import */ var _add_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-page.page */ 391);







let AddPagePageModule = class AddPagePageModule {
};
AddPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddPagePageRoutingModule
        ],
        declarations: [_add_page_page__WEBPACK_IMPORTED_MODULE_1__.AddPagePage]
    })
], AddPagePageModule);



/***/ }),

/***/ 391:
/*!*************************************************!*\
  !*** ./src/app/pages/add-page/add-page.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPagePage": () => (/* binding */ AddPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-page.page.html */ 5779);
/* harmony import */ var _add_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-page.page.scss */ 9497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage.service */ 17);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);







let AddPagePage = class AddPagePage {
    constructor(storageService, toastController, route) {
        this.storageService = storageService;
        this.toastController = toastController;
        this.route = route;
        this.items = [];
        this.newItem = {};
    }
    addItem() {
        if (this.requiredForm()) {
            this.newItem.id = Date.now();
            this.storageService.addItem(this.newItem).then((item) => {
                this.newItem = {};
                this.showToast('Workout was added');
                window.location.reload();
            });
            this.route.navigate(['/tabs/workouts']);
        }
    }
    showToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
            });
            toast.present();
        });
    }
    loadItems() {
        this.storageService.getItems().then((items) => {
            this.items = items;
        });
    }
    requiredForm() {
        if (this.newItem.BodyPart == null || this.newItem.BodyPart == '') {
            this.showToast('BodyPart is required');
            return false;
        }
        if (this.newItem.Workout == null || this.newItem.Workout == '') {
            this.showToast('Workout is required');
            return false;
        }
        if (this.newItem.Weight == null) {
            this.showToast('Weight is required');
            return false;
        }
        if (this.newItem.Repetition == null) {
            this.showToast('Repetition is required');
            return false;
        }
        if (this.newItem.NumberOfSeries == null) {
            this.showToast('NumberOfSeries is required');
            return false;
        }
        return true;
    }
    ngOnInit() { }
};
AddPagePage.ctorParameters = () => [
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AddPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-page',
        template: _raw_loader_add_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddPagePage);



/***/ }),

/***/ 9497:
/*!***************************************************!*\
  !*** ./src/app/pages/add-page/add-page.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-header ion-toolbar {\n  --background: #2b2b2b;\n  --color: white;\n}\nion-content ion-menu ion-content {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-content ion-list {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-content ion-list ion-item {\n  --background: #49b51f;\n}\nion-content .heading {\n  background-color: #49b51f;\n  width: 100%;\n  height: 100px;\n  border-radius: 0 0 55px 55px;\n  margin-bottom: 10px;\n}\nion-content .heading ion-buttons {\n  padding-top: 10px;\n  justify-content: center;\n}\nion-content .heading ion-buttons ion-menu-button {\n  font-size: 40px;\n}\nion-content .heading ion-buttons ion-label {\n  margin-left: 0.6em;\n  font-size: 40px;\n  font-weight: bold;\n  color: #2b2b2b;\n}\nion-content .heading ion-buttons ion-label span {\n  color: #f2f4f3;\n}\nion-content .heading ion-title {\n  margin-bottom: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFHTTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQURSO0FBS0k7RUFDRSxxQkFBQTtBQUhOO0FBS007RUFDRSxxQkFBQTtBQUhSO0FBSVE7RUFDRSxxQkFBQTtBQUZWO0FBUUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQU5KO0FBUUk7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBTk47QUFPTTtFQUNFLGVBQUE7QUFMUjtBQU9NO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTFI7QUFPUTtFQUNFLGNBQUE7QUFMVjtBQVNJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQVBOIiwiZmlsZSI6ImFkZC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICMyYjJiMmI7XHJcblxyXG4gIGlvbi1tZW51IHtcclxuICAgIGlvbi1oZWFkZXIge1xyXG4gICAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmIyYjJiO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMyYjJiMmI7XHJcblxyXG4gICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmIyYjJiO1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogIzQ5YjUxZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWI1MWY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNTVweCA1NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC42ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjMmIyYjJiO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjJmNGYzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 5779:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-page/add-page.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <!--Header-->\n  <ion-header>\n    <div class=\"heading\">\n      <ion-buttons slot=\"start\">\n        <ion-label> Fitness <span>App</span></ion-label>\n      </ion-buttons>\n      <ion-title>Add training</ion-title>\n    </div>\n  </ion-header>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Body part</ion-label>\n      <ion-select\n        [(ngModel)]=\"newItem.BodyPart\"\n        value=\"body_part\"\n        okText=\"Ok\"\n        cancelText=\"Cancel\"\n      >\n        <ion-select-option value=\"hands\">Hands</ion-select-option>\n        <ion-select-option value=\"back\">Back</ion-select-option>\n        <ion-select-option value=\"breast\">Breast</ion-select-option>\n        <ion-select-option value=\"legs\">Legs</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-item>\n    <ion-label position=\"floating\">Workout</ion-label>\n    <ion-input [(ngModel)]=\"newItem.Workout\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Weight</ion-label>\n    <ion-input [(ngModel)]=\"newItem.Weight\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Repetition</ion-label>\n    <ion-input [(ngModel)]=\"newItem.Repetition\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Number of series</ion-label>\n    <ion-input [(ngModel)]=\"newItem.NumberOfSeries\"></ion-input>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-align-items-end ion-grid-column-padding-lg\">\n        <ion-button color=\"success\" (click)=\"addItem()\">Add workout</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-page_add-page_module_ts.js.map