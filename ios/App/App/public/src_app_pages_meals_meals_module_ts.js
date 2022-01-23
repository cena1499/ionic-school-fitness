(self["webpackChunkfitness"] = self["webpackChunkfitness"] || []).push([["src_app_pages_meals_meals_module_ts"],{

/***/ 4021:
/*!*****************************************************!*\
  !*** ./src/app/pages/meals/meals-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealsPageRoutingModule": () => (/* binding */ MealsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _meals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meals.page */ 3949);




const routes = [
    {
        path: '',
        component: _meals_page__WEBPACK_IMPORTED_MODULE_0__.MealsPage
    }
];
let MealsPageRoutingModule = class MealsPageRoutingModule {
};
MealsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MealsPageRoutingModule);



/***/ }),

/***/ 6596:
/*!*********************************************!*\
  !*** ./src/app/pages/meals/meals.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealsPageModule": () => (/* binding */ MealsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _meals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meals-routing.module */ 4021);
/* harmony import */ var _meals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meals.page */ 3949);







let MealsPageModule = class MealsPageModule {
};
MealsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _meals_routing_module__WEBPACK_IMPORTED_MODULE_0__.MealsPageRoutingModule
        ],
        declarations: [_meals_page__WEBPACK_IMPORTED_MODULE_1__.MealsPage]
    })
], MealsPageModule);



/***/ }),

/***/ 3949:
/*!*******************************************!*\
  !*** ./src/app/pages/meals/meals.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealsPage": () => (/* binding */ MealsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_meals_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./meals.page.html */ 1669);
/* harmony import */ var _meals_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meals.page.scss */ 7691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_app_services_fitness_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fitness.service */ 6795);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _meal_detail_meal_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../meal-detail/meal-detail.page */ 8292);








let MealsPage = class MealsPage {
    constructor(http, fitnessService, modalCtrl) {
        this.http = http;
        this.fitnessService = fitnessService;
        this.modalCtrl = modalCtrl;
        this.meals = [];
        this.search = '';
        this.apiUrl = 'https://exercise.cngroup.dk/api';
    }
    btnMealsClicked() {
        this.fitnessService.getMeals().subscribe((data) => {
            console.log(data);
            this.meals = data;
        });
    }
    btnMealClicked(slug) {
        this.fitnessService.getMeal(slug).subscribe((data) => {
            console.log(data);
            this.meal = data;
            this.showModal();
        });
    }
    showModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _meal_detail_meal_detail_page__WEBPACK_IMPORTED_MODULE_3__.MealDetailPage,
                componentProps: {
                    title: this.meal.title,
                    directions: this.meal.directions,
                    preparionTime: this.meal.preparionTime,
                    servingCount: this.meal.servingCount,
                    ingredients: this.meal.ingredients,
                },
            });
            console.log(this.meal.ingredients);
            yield modal.present();
        });
    }
    ngOnInit() { }
};
MealsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: src_app_services_fitness_service__WEBPACK_IMPORTED_MODULE_2__.FitnessService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
MealsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-meals',
        template: _raw_loader_meals_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_meals_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MealsPage);



/***/ }),

/***/ 6795:
/*!*********************************************!*\
  !*** ./src/app/services/fitness.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FitnessService": () => (/* binding */ FitnessService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let FitnessService = class FitnessService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://exercise.cngroup.dk/api';
        this.meals = [];
    }
    getMeals() {
        return this.http.get(`${this.apiUrl}/recipes`);
    }
    getMeal(id) {
        return this.http.get(`${this.apiUrl}/recipes/${id}`);
    }
};
FitnessService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
FitnessService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], FitnessService);



/***/ }),

/***/ 7691:
/*!*********************************************!*\
  !*** ./src/app/pages/meals/meals.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-header ion-toolbar {\n  --background: #2b2b2b;\n  --color: white;\n}\nion-content ion-menu ion-content {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-content ion-list {\n  --background: #2b2b2b;\n}\nion-content ion-menu ion-content ion-list ion-item {\n  --background: #49b51f;\n}\nion-content .heading {\n  background-color: #49b51f;\n  width: 100%;\n  height: 100px;\n  border-radius: 0 0 55px 55px;\n  margin-bottom: 10px;\n}\nion-content .heading ion-buttons {\n  padding-top: 10px;\n  justify-content: center;\n}\nion-content .heading ion-buttons ion-menu-button {\n  font-size: 40px;\n}\nion-content .heading ion-buttons ion-label {\n  margin-left: 0.6em;\n  font-size: 40px;\n  font-weight: bold;\n  color: #2b2b2b;\n}\nion-content .heading ion-buttons ion-label span {\n  color: #f2f4f3;\n}\nion-content .heading ion-title {\n  margin-bottom: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFHTTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQURSO0FBS0k7RUFDRSxxQkFBQTtBQUhOO0FBS007RUFDRSxxQkFBQTtBQUhSO0FBSVE7RUFDRSxxQkFBQTtBQUZWO0FBUUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQU5KO0FBUUk7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBTk47QUFPTTtFQUNFLGVBQUE7QUFMUjtBQU9NO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTFI7QUFPUTtFQUNFLGNBQUE7QUFMVjtBQVNJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQVBOIiwiZmlsZSI6Im1lYWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICMyYjJiMmI7XHJcblxyXG4gIGlvbi1tZW51IHtcclxuICAgIGlvbi1oZWFkZXIge1xyXG4gICAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmIyYjJiO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMyYjJiMmI7XHJcblxyXG4gICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMmIyYjJiO1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogIzQ5YjUxZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWI1MWY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNTVweCA1NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC42ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjMmIyYjJiO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjJmNGYzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 1669:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meals/meals.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <!--Header-->\n  <ion-header>\n    <div class=\"heading\">\n      <ion-buttons slot=\"start\">\n        <ion-label> Fitness <span>App</span></ion-label>\n      </ion-buttons>\n      <ion-title>Meals</ion-title>\n    </div>\n  </ion-header>\n\n  <ion-button\n    expand=\"block\"\n    (click)=\"btnMealsClicked()\"\n    class=\"ion-padding-horizontal\"\n    size=\"large\"\n    color=\"light\"\n    >Show meals</ion-button\n  >\n\n  <ion-list>\n    <ion-card *ngFor=\"let meal of meals\">\n      <ion-card-header>\n        <ion-card-title>{{ meal.title }}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>Preparion time: {{ meal.preparationTime }} min</p>\n      </ion-card-content>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-align-items-end ion-grid-column-padding-lg\">\n            <ion-button color=\"success\" (click)=\"btnMealClicked(meal.slug)\"\n              >Show detail</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_meals_meals_module_ts.js.map