(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n<div class=\"login-page\">\n  <div class=\"form\">\n   \n    <div class=\"login-form\">\n      <ion-input type=\"mail\" [(ngModel)]=\"user.email\" placeholder=\"correo electronico\"></ion-input>\n      \n      <ion-input  [(ngModel)]=\"user.password\" type=\"password\" placeholder=\"contraseña\"></ion-input>\n\n      <div class=\"container-login100-form-btn\" >\n\t\t\t\t\t\t\n        <ion-item>\n          <label style=\"text-align:center;\">Usuario</label>\n        <ion-select    name=\"f\" [(ngModel)]=\"tipoUser\" (ionChange)=\"UserValido()\">\n          <ion-select-option value=\"admin\">Administrador</ion-select-option>\n          <ion-select-option value=\"usuario\">Usuario</ion-select-option>\n          <ion-select-option value=\"invitado\">Invitado</ion-select-option>\n          <ion-select-option value=\"anonimo\">Anonimo</ion-select-option>\n          <ion-select-option value=\"tester\">Tester</ion-select-option>\n        </ion-select>\n        </ion-item>\n      \n      </div>\n\n      <div>\n      <ion-button color=\"success\" (click)=\"login()\">Acceder</ion-button>\n      <ion-button color=\"danger\" (click)=\"borrar()\">Cancelar</ion-button>\n      </div>\n    </div>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n.login-page {\n  width: 360px;\n  padding: 11% 12px 0px;\n  margin: 50px auto 100px; }\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: -48px auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); }\nion-input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px; }\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: rgba(15, 37, 2, 0.671);\n  width: 100%;\n  border: 4px solid #FFFFFF;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer; }\n.form button:hover, .form button:active, .form button:focus {\n  background: #43A047; }\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px; }\n.form .message a {\n  color: #4CAF50;\n  text-decoration: none; }\n.form .register-form {\n  display: none; }\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto; }\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n.container .info {\n  margin: 50px auto;\n  text-align: center; }\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a; }\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px; }\n.container .info span a {\n  color: #000000;\n  text-decoration: none; }\n.container .info span .fa {\n  color: #EF3B3A; }\nbody {\n  background: rgba(15, 37, 2, 0.671);\n  /* fallback for old browsers */\n  background: linear-gradient(to left, right, rgba(15, 37, 2, 0.671), rgba(15, 37, 2, 0.671));\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.container-login100-form-btn {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGZpc2xhc1xcRGVza3RvcFxccHJhY3RpY2FzXFxjYXJnYURlQ3JlZGl0by9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsK0RBQVk7QUFOWjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtBQU1sQjtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsdUJBQXVCLEVBQUE7QUFFekI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsd0JBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEVBQTBFLEVBQUE7QUFFNUU7RUFDRSxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztFQUNULGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTtBQUVqQjtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1IseUJBQXlCO0VBRTVCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUVmLHdCQUF3QjtFQUN4QixlQUFlLEVBQUE7QUFFakI7RUFDRSxtQkFBbUIsRUFBQTtBQUVyQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZSxFQUFBO0FBRWpCO0VBQ0UsY0FBYztFQUNkLHFCQUFxQixFQUFBO0FBRXZCO0VBQ0UsYUFBYSxFQUFBO0FBRWY7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFFaEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVcsRUFBQTtBQUViO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFFakI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxjQUFjLEVBQUE7QUFFaEI7RUFDRSxrQ0FBa0M7RUFBRSw4QkFBQTtFQUlwQywyRkFBMEY7RUFDMUYsaUNBQWlDO0VBQ2pDLG1DQUFtQztFQUNuQyxrQ0FBa0MsRUFBQTtBQUdwQztFQUNFLFdBQVc7RUFLWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwKTtcblxuLmxvZ2luLXBhZ2Uge1xuICB3aWR0aDogMzYwcHg7XG4gIHBhZGRpbmc6IDExJSAxMnB4IDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTAwcHg7XG59XG4uZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgbWF4LXdpZHRoOiAzNjBweDtcbiAgbWFyZ2luOi00OHB4IGF1dG8gMTAwcHg7XG4gIHBhZGRpbmc6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5pb24taW5wdXQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvcm0gYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDM3LCAyLCAwLjY3MSk7XG4gIHdpZHRoOiAxMDAlO1xuICAgICBib3JkZXI6IDRweCBzb2xpZCAjRkZGRkZGO1xuXG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtIGJ1dHRvbjpob3ZlciwuZm9ybSBidXR0b246YWN0aXZlLC5mb3JtIGJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICM0M0EwNDc7XG59XG4uZm9ybSAubWVzc2FnZSB7XG4gIG1hcmdpbjogMTVweCAwIDA7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZm9ybSAubWVzc2FnZSBhIHtcbiAgY29sb3I6ICM0Q0FGNTA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mb3JtIC5yZWdpc3Rlci1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lcjpiZWZvcmUsIC5jb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG59XG4uY29udGFpbmVyIC5pbmZvIHtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmluZm8gaDEge1xuICBtYXJnaW46IDAgMCAxNXB4O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIHtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmluZm8gc3BhbiBhIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250YWluZXIgLmluZm8gc3BhbiAuZmEge1xuICBjb2xvcjogI0VGM0IzQTtcbn1cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAzNywgMiwgMC42NzEpOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LHJnYmEoMTUsIDM3LCAyLCAwLjY3MSksIHJnYmEoMTUsIDM3LCAyLCAwLjY3MSkpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChyaWdodCxyZ2JhKDE1LCAzNywgMiwgMC42NzEpLCByZ2JhKDE1LCAzNywgMiwgMC42NzEpKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LHJnYmEoMTUsIDM3LCAyLCAwLjY3MSksIHJnYmEoMTUsIDM3LCAyLCAwLjY3MSkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmlnaHQscmdiYSgxNSwgMzcsIDIsIDAuNjcxKSwgcmdiYSgxNSwgMzcsIDIsIDAuNjcxKSk7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgICAgICBcbn1cblxuLmNvbnRhaW5lci1sb2dpbjEwMC1mb3JtLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206NXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth, alertCtrl, router) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.user = { email: '', password: '' };
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.UserValido = function () {
        switch (this.tipoUser) {
            case "admin": {
                this.user.email = "admin@gmail.com";
                this.user.password = "111111";
                break;
            }
            case "usuario": {
                this.user.email = "usuario@gmail.com";
                this.user.password = "333333";
                break;
            }
            case "invitado": {
                this.user.email = "invitado@gmail.com";
                this.user.password = "222222";
                break;
            }
            case "anonimo": {
                this.user.email = "anonimo@gmail.com";
                this.user.password = "444444";
                break;
            }
            case "tester": {
                this.user.email = "test@gmail.com";
                this.user.password = "555555";
                break;
            }
        }
    };
    HomePage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.auth.loginUser(this.user.email, this.user.password).then(function (user) {
                    _this.router.navigate(['/principal']);
                })
                    .catch(function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alert;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.alertCtrl.create({
                                    header: 'Error',
                                    buttons: ['Aceptar'],
                                    message: "error al loguearse"
                                })];
                            case 1:
                                alert = _a.sent();
                                alert.present();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.borrar = function () {
        this.user.email = null;
        this.user.password = null;
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map