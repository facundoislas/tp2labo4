(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splash-animado-splash-animado-module"],{

/***/ "./src/app/splash-animado/splash-animado.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/splash-animado/splash-animado.module.ts ***!
  \*********************************************************/
/*! exports provided: SplashAnimadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashAnimadoPageModule", function() { return SplashAnimadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _splash_animado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash-animado.page */ "./src/app/splash-animado/splash-animado.page.ts");







var routes = [
    {
        path: '',
        component: _splash_animado_page__WEBPACK_IMPORTED_MODULE_6__["SplashAnimadoPage"]
    }
];
var SplashAnimadoPageModule = /** @class */ (function () {
    function SplashAnimadoPageModule() {
    }
    SplashAnimadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_splash_animado_page__WEBPACK_IMPORTED_MODULE_6__["SplashAnimadoPage"]]
        })
    ], SplashAnimadoPageModule);
    return SplashAnimadoPageModule;
}());



/***/ }),

/***/ "./src/app/splash-animado/splash-animado.page.html":
/*!*********************************************************!*\
  !*** ./src/app/splash-animado/splash-animado.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<div *ngIf=\"showsplash\" class=\"splash\">\n    <div class=\"spinner\"></div>\n\n  </div>\n\n</body>"

/***/ }),

/***/ "./src/app/splash-animado/splash-animado.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/splash-animado/splash-animado.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".splash {\n  margin: 100px auto;\n  -webkit-animation: sk-rotateplane 2s infinite ease-in-out;\n  animation: sk-rotateplane 2s infinite ease-in-out; }\n\n@-webkit-keyframes sk-rotateplane {\n  0% {\n    -webkit-transform: perspective(120px); }\n  50% {\n    -webkit-transform: perspective(120px) rotateY(180deg); }\n  100% {\n    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg); } }\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }\n\n.spinner {\n  background-image: url('icon.png');\n  background-position: center;\n  /* Center the image */\n  background-repeat: no-repeat;\n  /* Do not repeat the image */\n  background-size: cover;\n  /* Resize the background image to cover the entire container */\n  display: flex;\n  width: 400px;\n  height: 400px; }\n\nbody {\n  background: rgba(15, 37, 2, 0.671);\n  /* fallback for old browsers */\n  background: linear-gradient(to left, right, rgba(15, 37, 2, 0.671), rgba(15, 37, 2, 0.671));\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BsYXNoLWFuaW1hZG8vQzpcXFVzZXJzXFxmaXNsYXNcXERlc2t0b3BcXHByYWN0aWNhc1xcY2FyZ2FEZUNyZWRpdG8vc3JjXFxhcHBcXHNwbGFzaC1hbmltYWRvXFxzcGxhc2gtYW5pbWFkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBa0I7RUFDbEIseURBQXlEO0VBQ3pELGlEQUFpRCxFQUFBOztBQUduRDtFQUNFO0lBQUsscUNBQXFDLEVBQUE7RUFDMUM7SUFBTSxxREFBcUQsRUFBQTtFQUMzRDtJQUFPLHFFQUFzRSxFQUFBLEVBQUE7O0FBRy9FO0VBQ0U7SUFDRSx5REFBeUQ7SUFDekQsaUVBQWlFLEVBQUE7RUFDakU7SUFDQSw4REFBOEQ7SUFDOUQsc0VBQXNFLEVBQUE7RUFDdEU7SUFDQSxpRUFBaUU7SUFDakUseUVBQXlFLEVBQUEsRUFBQTs7QUFJN0U7RUFDRSxpQ0FBb0Q7RUFDcEQsMkJBQTJCO0VBQUUscUJBQUE7RUFDN0IsNEJBQTRCO0VBQUUsNEJBQUE7RUFDOUIsc0JBQXNCO0VBQUUsOERBQUE7RUFDeEIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBSWY7RUFDQSxrQ0FBa0M7RUFBRSw4QkFBQTtFQUlwQywyRkFBMEY7RUFDMUYsaUNBQWlDO0VBQ2pDLG1DQUFtQztFQUNuQyxrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NwbGFzaC1hbmltYWRvL3NwbGFzaC1hbmltYWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGxhc2gge1xyXG4gIFxyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcclxuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSB9XHJcbiAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSB9XHJcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgIHJvdGF0ZVgoMTgwZGVnKSB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xyXG4gICAgMCUgeyBcclxuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSBcclxuICAgIH0gNTAlIHsgXHJcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpIFxyXG4gICAgfSAxMDAlIHsgXHJcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi9yZXNvdXJjZXMvaWNvbi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMzcsIDIsIDAuNjcxKTsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LHJnYmEoMTUsIDM3LCAyLCAwLjY3MSksIHJnYmEoMTUsIDM3LCAyLCAwLjY3MSkpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LHJnYmEoMTUsIDM3LCAyLCAwLjY3MSksIHJnYmEoMTUsIDM3LCAyLCAwLjY3MSkpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChyaWdodCxyZ2JhKDE1LCAzNywgMiwgMC42NzEpLCByZ2JhKDE1LCAzNywgMiwgMC42NzEpKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmlnaHQscmdiYSgxNSwgMzcsIDIsIDAuNjcxKSwgcmdiYSgxNSwgMzcsIDIsIDAuNjcxKSk7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgICAgICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/splash-animado/splash-animado.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/splash-animado/splash-animado.page.ts ***!
  \*******************************************************/
/*! exports provided: SplashAnimadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashAnimadoPage", function() { return SplashAnimadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SplashAnimadoPage = /** @class */ (function () {
    function SplashAnimadoPage(router) {
        var _this = this;
        this.router = router;
        this.showsplash = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(5000).subscribe(function () {
            _this.showsplash = true;
            _this.router.navigate(['/home']);
        });
    }
    SplashAnimadoPage.prototype.ngOnInit = function () {
    };
    SplashAnimadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-splash-animado',
            template: __webpack_require__(/*! ./splash-animado.page.html */ "./src/app/splash-animado/splash-animado.page.html"),
            styles: [__webpack_require__(/*! ./splash-animado.page.scss */ "./src/app/splash-animado/splash-animado.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SplashAnimadoPage);
    return SplashAnimadoPage;
}());



/***/ })

}]);
//# sourceMappingURL=splash-animado-splash-animado-module.js.map