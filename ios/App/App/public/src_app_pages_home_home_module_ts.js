(self["webpackChunkfitness"] = self["webpackChunkfitness"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/local-storage.service */ 17);






let HomePage = class HomePage {
    constructor(route, storageService) {
        this.route = route;
        this.storageService = storageService;
        this.items = [];
        this.item = {};
        this.loadItems();
    }
    loadItems() {
        this.storageService.getItems().then((items) => {
            this.items = items.reverse().slice(0, 3);
            this.item = items[0];
        });
    }
    goToAddPageButton() {
        this.route.navigate(['/tabs/addPage']);
    }
    ngOnInit() { }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-header ion-toolbar {\n  --background: #2b2b2b;\n  --color: white;\n}\nion-content ion-menu ion-content {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-content ion-list {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-content ion-list ion-item {\n  --background: #49b51f;\n}\nion-content .heading {\n  background-color: #49b51f;\n  width: 100%;\n  height: 200px;\n  border-radius: 0 0 55px 55px;\n  margin-bottom: 10px;\n}\nion-content .heading ion-buttons {\n  padding-top: 10px;\n  justify-content: center;\n}\nion-content .heading ion-buttons ion-menu-button {\n  font-size: 40px;\n}\nion-content .heading ion-buttons ion-label {\n  margin-left: 0.6em;\n  font-size: 40px;\n  font-weight: bold;\n  color: #2b2b2b;\n}\nion-content .heading ion-buttons ion-label span {\n  color: #f2f4f3;\n}\nion-content .heading ion-title {\n  margin-bottom: 10px;\n}\nion-content .heading .hrefs {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\nion-content .heading .hrefs .href {\n  margin: 10px 5px 10px 5px;\n  font-size: 18px;\n  background-color: #f2f4f3;\n  border-radius: 50px;\n  padding: 8px;\n  color: #2b2b2b;\n  border: 1px solid #2b2b2b;\n}\nion-content ion-title {\n  color: #f2f4f3;\n  font-size: 20px;\n  text-align: center;\n  padding: 10px 0 10px 0;\n}\nion-content .last-training {\n  background-color: #f2f4f3;\n  border-top-color: #49b51f;\n  border-top-style: solid;\n  border-bottom-color: #49b51f;\n  border-bottom-style: solid;\n  border-width: 4px;\n  margin: 10px 0 0 0;\n  padding: 10px;\n}\nion-content .last-training ion-title {\n  color: #2b2b2b;\n  padding: 0;\n  text-align: center;\n  font-weight: bold;\n}\nion-content .last-training .text-area {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-top: 10px;\n}\nion-content .last-training .text-area .text {\n  font-size: 18px;\n  background-color: #2b2b2b;\n  color: #f2f4f3;\n  padding: 10px;\n  border: 4px solid #49b51f;\n  border-radius: 50px;\n}\nion-content .last-training .detail {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  justify-content: center;\n}\nion-content .last-training .detail .workout {\n  margin: 10px 0 0 10px;\n  justify-content: center;\n  background-color: #49b51f;\n  border-radius: 50px;\n  width: auto;\n  text-align: center;\n  padding: 10px 20px 10px 20px;\n}\nion-content .targets .target-area {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n}\nion-content .targets .target-area ion-card {\n  width: 160px;\n  border: 4px solid #49b51f;\n  padding-top: 8px;\n}\nion-content .targets .target-area ion-card ion-card-subtitle {\n  text-align: center;\n}\nion-content .targets .target-area ion-card ion-card-title {\n  margin-top: 5px;\n  text-align: center;\n}\nion-content .targets .target-area ion-card ion-card-content {\n  text-align: center;\n  margin: 0;\n  padding: 5px 0 8px 0;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjtBQUdNO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBRFI7QUFLSTtFQUNFLHFCQUFBO0FBSE47QUFLTTtFQUNFLHFCQUFBO0FBSFI7QUFJUTtFQUNFLHFCQUFBO0FBRlY7QUFRRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBTko7QUFRSTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUFOTjtBQU9NO0VBQ0UsZUFBQTtBQUxSO0FBT007RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFMUjtBQU9RO0VBQ0UsY0FBQTtBQUxWO0FBVUk7RUFDRSxtQkFBQTtBQVJOO0FBV0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBVE47QUFXTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBVFI7QUFjRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVpKO0FBZUU7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFiSjtBQWVJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBYk47QUFnQkk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFkTjtBQWdCTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWRSO0FBa0JJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBaEJOO0FBa0JNO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQWhCUjtBQXNCSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBcEJOO0FBcUJNO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFuQlI7QUFxQlE7RUFDRSxrQkFBQTtBQW5CVjtBQXFCUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQW5CVjtBQXFCUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQW5CViIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICMyYjJiMmI7XHJcblxyXG4gIGlvbi1tZW51IHtcclxuICAgIGlvbi1oZWFkZXIge1xyXG4gICAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmIyYjJiO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMyYjJiMmI7XHJcblxyXG4gICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmIyYjJiO1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogIzQ5YjUxZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWI1MWY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNTVweCA1NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC42ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjMmIyYjJiO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjJmNGYzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhyZWZzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5ocmVmIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggNXB4IDEwcHggNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNGYzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMmIyYjJiO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjJiMmI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogI2YyZjRmMztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XHJcbiAgfVxyXG5cclxuICAubGFzdC10cmFpbmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNGYzO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzQ5YjUxZjtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzQ5YjUxZjtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjMmIyYjJiO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWFyZWEge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xyXG4gICAgICAgIGNvbG9yOiAjZjJmNGYzO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzQ5YjUxZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAud29ya291dCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAxMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWI1MWY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhcmdldHMge1xyXG4gICAgLnRhcmdldC1hcmVhIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzQ5YjUxZjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG5cclxuICAgICAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMCA4cHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <!--Header-->\n  <ion-header>\n    <div class=\"heading\">\n      <ion-buttons slot=\"start\">\n        <ion-label> Fitness <span>App</span></ion-label>\n      </ion-buttons>\n      <ion-title>Author: Zdeněk Karlík</ion-title>\n      <div class=\"hrefs\">\n        <ion-button color=\"light\" (click)=\"goToAddPageButton()\"\n          >Add workout</ion-button\n        >\n      </div>\n    </div>\n  </ion-header>\n\n  <ion-title>My trainings</ion-title>\n\n  <ion-list *ngFor=\"let item of items\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>{{ item.DateTime }}</ion-card-subtitle>\n        <ion-card-title>{{ item.BodyPart }}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>Workout: {{ item.Workout }}</p>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <div class=\"last-training\">\n    <ion-title>Last 3 training</ion-title>\n    <div class=\"text-area\">\n      <div class=\"text\">{{ item.BodyPart }}</div>\n    </div>\n\n    <div class=\"detail\">\n      <div class=\"workout\">Workout: {{ item.Workout }}</div>\n      <div class=\"workout\">Weight: {{ item.Weight }} kg</div>\n      <div class=\"workout\">Repetition: {{ item.Repetition }}</div>\n      <div class=\"workout\">Number of series: {{ item.NumberOfSeries }}</div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map