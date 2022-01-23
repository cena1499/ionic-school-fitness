(self["webpackChunkfitness"] = self["webpackChunkfitness"] || []).push([["src_app_pages_workouts_workouts_module_ts"],{

/***/ 8754:
/*!***********************************************************!*\
  !*** ./src/app/pages/workouts/workouts-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutsPageRoutingModule": () => (/* binding */ WorkoutsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _workouts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workouts.page */ 6938);




const routes = [
    {
        path: '',
        component: _workouts_page__WEBPACK_IMPORTED_MODULE_0__.WorkoutsPage
    }
];
let WorkoutsPageRoutingModule = class WorkoutsPageRoutingModule {
};
WorkoutsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkoutsPageRoutingModule);



/***/ }),

/***/ 9978:
/*!***************************************************!*\
  !*** ./src/app/pages/workouts/workouts.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutsPageModule": () => (/* binding */ WorkoutsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _workouts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workouts-routing.module */ 8754);
/* harmony import */ var _workouts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workouts.page */ 6938);







let WorkoutsPageModule = class WorkoutsPageModule {
};
WorkoutsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _workouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkoutsPageRoutingModule
        ],
        declarations: [_workouts_page__WEBPACK_IMPORTED_MODULE_1__.WorkoutsPage]
    })
], WorkoutsPageModule);



/***/ }),

/***/ 6938:
/*!*************************************************!*\
  !*** ./src/app/pages/workouts/workouts.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutsPage": () => (/* binding */ WorkoutsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_workouts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./workouts.page.html */ 7822);
/* harmony import */ var _workouts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workouts.page.scss */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage.service */ 17);







let WorkoutsPage = class WorkoutsPage {
    constructor(storageService, toastController, route) {
        this.storageService = storageService;
        this.toastController = toastController;
        this.route = route;
        this.items = [];
        this.newItem = {};
        this.loadItems();
    }
    loadItems() {
        this.storageService.getItems().then((items) => {
            this.items = items;
        });
    }
    deleteItem(item) {
        this.storageService.deleteItem(item.id).then((item) => {
            this.showToast('Workout was deleted');
            this.loadItems();
        });
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
    goToAddPageButton() {
        this.route.navigate(['/tabs/addPage']);
    }
    ngOnInit() { }
};
WorkoutsPage.ctorParameters = () => [
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
WorkoutsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-workouts',
        template: _raw_loader_workouts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_workouts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkoutsPage);



/***/ }),

/***/ 3910:
/*!***************************************************!*\
  !*** ./src/app/pages/workouts/workouts.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-header ion-toolbar {\n  --background: #2b2b2b;\n  --color: white;\n}\nion-content ion-menu ion-content {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-content ion-list {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-content ion-list ion-item {\n  --background: #49b51f;\n}\nion-content .heading {\n  background-color: #49b51f;\n  width: 100%;\n  height: 100px;\n  border-radius: 0 0 55px 55px;\n  margin-bottom: 10px;\n}\nion-content .heading ion-buttons {\n  padding-top: 10px;\n  justify-content: center;\n}\nion-content .heading ion-buttons ion-menu-button {\n  font-size: 40px;\n}\nion-content .heading ion-buttons ion-label {\n  margin-left: 0.6em;\n  font-size: 40px;\n  font-weight: bold;\n  color: #2b2b2b;\n}\nion-content .heading ion-buttons ion-label span {\n  color: #f2f4f3;\n}\nion-content .heading ion-title {\n  margin-bottom: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtvdXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFHTTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQURSO0FBS0k7RUFDRSxxQkFBQTtBQUhOO0FBS007RUFDRSxxQkFBQTtBQUhSO0FBSVE7RUFDRSxxQkFBQTtBQUZWO0FBUUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQU5KO0FBUUk7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBTk47QUFPTTtFQUNFLGVBQUE7QUFMUjtBQU9NO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTFI7QUFPUTtFQUNFLGNBQUE7QUFMVjtBQVNJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQVBOIiwiZmlsZSI6IndvcmtvdXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICMyYjJiMmI7XHJcblxyXG4gIGlvbi1tZW51IHtcclxuICAgIGlvbi1oZWFkZXIge1xyXG4gICAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmIyYjJiO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMyYjJiMmI7XHJcblxyXG4gICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmIyYjJiO1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogIzQ5YjUxZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWI1MWY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNTVweCA1NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC42ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjMmIyYjJiO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjJmNGYzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 7822:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workouts/workouts.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <!--Header-->\n  <ion-header>\n    <div class=\"heading\">\n      <ion-buttons slot=\"start\">\n        <ion-label> Fitness <span>App</span></ion-label>\n      </ion-buttons>\n      <ion-title>My Workouts</ion-title>\n      <div class=\"hrefs\"></div>\n    </div>\n  </ion-header>\n\n  <ion-list *ngFor=\"let item of items.reverse()\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>{{ item.DateTime }}</ion-card-subtitle>\n        <ion-card-title>{{ item.BodyPart }}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>Workout: {{ item.Workout }}</p>\n        <p>Weight: {{ item.Weight }} kg</p>\n        <p>Repetition: {{ item.Repetition }}</p>\n        <p>Number of series: {{ item.NumberOfSeries }}</p>\n      </ion-card-content>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-align-items-end ion-grid-column-padding-lg\">\n            <ion-button\n              color=\"success\"\n              color=\"danger\"\n              (click)=\"deleteItem(item)\"\n              >Delete workout</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" (click)=\"goToAddPageButton()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_workouts_workouts_module_ts.js.map