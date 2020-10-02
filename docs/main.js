(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-area/admin-area.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin-area/admin-area.module.ts ***!
  \*************************************************/
/*! exports provided: AdminAreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAreaModule", function() { return AdminAreaModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_router_admin_router_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-router/admin-router-routing.module */ "./src/app/admin-area/admin-router/admin-router-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_login_component_admin_login_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-login-component/admin-login-component.component */ "./src/app/admin-area/admin-login-component/admin-login-component.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdminAreaModule = /** @class */ (function () {
    function AdminAreaModule() {
    }
    AdminAreaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _admin_router_admin_router_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRouterRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            ],
            declarations: [_admin_login_component_admin_login_component_component__WEBPACK_IMPORTED_MODULE_4__["AdminLoginComponentComponent"]],
            providers: []
        })
    ], AdminAreaModule);
    return AdminAreaModule;
}());



/***/ }),

/***/ "./src/app/admin-area/admin-login-component/admin-login-component.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admin-area/admin-login-component/admin-login-component.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-area/admin-login-component/admin-login-component.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin-area/admin-login-component/admin-login-component.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <form (click) = \"loginAdmin(loginForm.value)\" [formGroup] = \"loginForm\">\n        <input type=\"text\" name=\"username\" formControlName = \"username\" >\n        \n        <!-- For error handling -->\n        <!-- <div *ngIf=\"form.get('username').hasError('pattern')\">Error</div> -->\n    \n        <input type=\"text\" name=\"password\" formControlName = \"password\">\n        <button type=\"submit\"> Login </button>\n    </form> \n    <h1>Our MongoDB is Working!</h1>\n\n    <ul>\n      <li *ngFor=\"let user of users\">{{ user.name }}</li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/admin-area/admin-login-component/admin-login-component.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin-area/admin-login-component/admin-login-component.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AdminLoginComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponentComponent", function() { return AdminLoginComponentComponent; });
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminLoginComponentComponent = /** @class */ (function () {
    // Create an instance of the DataService through dependency injection
    function AdminLoginComponentComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        // Access the Data Service's getUsers() method we defined
        this._dataService.getUsers()
            .subscribe(function (res) { return _this.users = res; });
    }
    AdminLoginComponentComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[\\w\\-\\s\\/]+'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    };
    AdminLoginComponentComponent.prototype.loginAdmin = function (formData) {
        console.log(formData.username + 'Helllo' + formData.password);
    };
    AdminLoginComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-login-component',
            template: __webpack_require__(/*! ./admin-login-component.component.html */ "./src/app/admin-area/admin-login-component/admin-login-component.component.html"),
            styles: [__webpack_require__(/*! ./admin-login-component.component.css */ "./src/app/admin-area/admin-login-component/admin-login-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]])
    ], AdminLoginComponentComponent);
    return AdminLoginComponentComponent;
}());



/***/ }),

/***/ "./src/app/admin-area/admin-router/admin-router-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin-area/admin-router/admin-router-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AdminRouterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRouterRoutingModule", function() { return AdminRouterRoutingModule; });
/* harmony import */ var _admin_login_component_admin_login_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../admin-login-component/admin-login-component.component */ "./src/app/admin-area/admin-login-component/admin-login-component.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', component: _admin_login_component_admin_login_component_component__WEBPACK_IMPORTED_MODULE_0__["AdminLoginComponentComponent"] }
];
var AdminRouterRoutingModule = /** @class */ (function () {
    function AdminRouterRoutingModule() {
    }
    AdminRouterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRouterRoutingModule);
    return AdminRouterRoutingModule;
}());



/***/ }),

/***/ "./src/app/all/all.component.css":
/*!***************************************!*\
  !*** ./src/app/all/all.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all/all.component.html":
/*!****************************************!*\
  !*** ./src/app/all/all.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all/all.component.ts":
/*!**************************************!*\
  !*** ./src/app/all/all.component.ts ***!
  \**************************************/
/*! exports provided: AllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponent", function() { return AllComponent; });
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

var AllComponent = /** @class */ (function () {
    function AllComponent() {
    }
    AllComponent.prototype.ngOnInit = function () {
    };
    AllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all',
            template: __webpack_require__(/*! ./all.component.html */ "./src/app/all/all.component.html"),
            styles: [__webpack_require__(/*! ./all.component.css */ "./src/app/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".AboutMe {\n  width: 100%;\n  height: 800px;\n  border : 2px solid white;\n  text-align: center;\n  background-image: url('homeBackground.jpg');\n  background-repeat:no-repeat;\n  background-size: 100% 40%;\n  display: inline-block;\n}\n\n.row{\n  padding-top: 50px;\n}\n\n#myname, #expertise{\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  font-size: 3em;\n  color: white;\n}\n\n#myQuote{\n  font-style: italic;\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  font-size: 2em;\n  padding-top: 25px;\n  color: white;\n}\n\n#mobileNumber, #emailId{\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  color: white;\n}\n\n#aboutMe{\n  padding-left: 4%;\n  width: 40%;\n  display: inline-block;\n  color: white;\n  text-align: left;\n}\n\n.sections{\n  border: 1px solid;\n  background: white;\n  margin-top: 3.6em\n}\n\n.socialNetworking{\n  padding: 0.5em\n}\n\n#contentAboutMe{\n  width: 100%;\n  display: inline-block;\n  color: white;\n}\n\n#contactMe{\n  position: relative;  \n  padding-right: 4%;\n  text-align: right;\n  color: white;\n}\n\n#profileSize{\n  width: 200px;\nheight: 200px;\n-webkit-transform: rotate(-45deg) translateY(-74px);\n        transform: rotate(-45deg) translateY(-74px);\n}\n\n.profilePhoto, .profilePhoto div {\n  margin: 0 auto;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  overflow: hidden;\n  width: 140px;\n  height: 140px;\n}\n\n.profilePhoto {\n  -webkit-transform: rotate(45deg) translateY(10px);\n          transform: rotate(45deg) translateY(10px);\n}\n\n.profilePhoto .profileAdjustment {\n  width: 255px;\n  height: 255px;\n  -webkit-transform: rotate(-45deg) translateY(-74px);\n          transform: rotate(-45deg) translateY(-74px);\n  padding-top: 25px;\n  padding-right: 25px;\n}\n\n.profilePhoto .profileAdjustment img {\n  width: 100%;\n  height: auto;\n}\n\n#profilePhoto{\n  padding-left: 10%\n}\n\n.leftdivsion {\n  border-bottom: 90px solid lightgray;\n\tborder-right: 90px solid transparent;\n\tmargin-top: -30px;\n  float: left;\n}\n\n.leftSections{\n  float: left;\n  position: relative;\n  margin-top: -4.5em;\n  margin-left: -4em;\n}\n\n.rightDivison{\n  border-bottom: 90px solid lightgray;\n\tborder-left: 90px solid transparent;\n  margin-top: -30px;\n  float: right;\n  position: relative;\n}\n\n.rightSections{\n  float: right;\n  position: relative;\n  margin-top: -4.5em;\n  margin-right: -0.6em\n  \n}\n\n.sections{\n  \n}\n\n.iconReplacer{\n  height: 2.5em;\n  width: 2.5em;\n}\n\n.button {\n  background-color: #4CAF50;\n  border-radius: 25px;\n  color: white;\n  padding: 15px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  display: inline-block;\n  width: 8.5em;\n  \n}\n\na {\n  color: white;\n  font-family: '';\n  text-decoration: none;\n}\n\n#aboutmeContent:hover{\n  background-color: red;\n}\n\n#aboutmeContent{\n  background-color: #824CA7\n}\n\n#activites:hover {\n  background: red;\n}\n\n#activites{\n  background-color: #C05640\n}\n\n#education:hover {\n  background: red;\n}\n\n#education{\n  background-color: #107050\n}\n\n#skills:hover {\n  background: red;\n}\n\n#skills{\n  background-color: #D57030\n}\n\n#projects:hover {\n  background: red;\n}\n\n#projects{\n  background-color: #F1445B\n}\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"AboutMe\">\n        <div id=\"title\" class=\"col-sm-12 fade-in\">\n            <h2 id=\"myQuote\"> {{myQuote}} </h2>\n        </div>\n        <div class=\"row\">\n            <div id=\"aboutMe\" class=\"col-sm-4\">\n                <h2 id=\"myname\"> {{myname}} </h2>\n                <h4 id=\"expertise\" style=\"font-size: 1.5em\">{{expertised}}</h4>\n                <!-- <label>About me</label>\n                <br>\n                <p id=\"contentAboutMe\">{{contentAboutMe}}</p> -->\n                <!-- \"deploy\": \"ng build --prod --base-href https://moulikiran.github.io/MouliProfile/ && angular-cli-ghpages --branch gh-pages\" -->\n            </div>\n\n            <div class=\"col-sm-4\" style=\"padding-left: 30px\">\n                <div class=\"profilePhoto\">\n                    <div class=\"profileAdjustment\">\n                        <img src=\"../app/assets/MeraPhoto.jpg\" alt=\"\" width=\"140\" height=\"140\" />\n                    </div>\n                </div>\n            </div>\n\n            <div id=\"contactMe\" class=\"col-sm-4\">\n                <label id=\"mobileNumber\">{{MobileNumber}}</label>\n                <br>\n                <label id=\"emailId\">{{emailId}}</label>\n                <br>\n                <label>\n                    <a href={{network.url}} *ngFor=\"let network of networks\" class=\"socialNetworking\" target=\"_blank\">\n                        <img src={{network.imgSrc}} class=\"iconReplacer\">\n                    </a>\n                </label>\n            </div>\n        </div>\n        <div class=\"col-sm-12\" style=\"padding: 0\">\n            <div class=\"col-sm-6 leftdivsion\"></div>\n            <div class=\"col-sm-6 rightDivison\"></div>\n        </div>\n        <div class=\"col-sm-12\" class=\"sections\">\n            <div class=\"col-sm-6 leftSections\">\n                <div class=\"button\" id=\"aboutmeContent\" style=\"margin-left: 3em\">\n                    <a (click)=\"routeToPage('aboutme')\" rel=\"no-refresh\">About Me</a>\n                </div>\n                <div class=\"button\" id=\"activites\" style=\"margin-left: 1.5em\">\n                    <a (click)=\"routeToPage('activities')\" rel=\"no-refresh\">Activites</a>\n                </div>\n                <div class=\"button\" id=\"education\" style=\"margin-left: 1.5em\">\n                    <a (click)=\"routeToPage('education')\" rel=\"no-refresh\">Education</a>\n                </div>\n\n            </div>\n            <div class=\"col-sm-6 rightSections\">\n                <div class=\"button\" id=\"skills\" style=\"margin-left: 3em\">\n                    <a (click)=\"routeToPage('skills')\">Skills</a>\n                </div>\n                <div class=\"button\" id=\"projects\" style=\"margin-left: 1.5em\">\n                    <a (click)=\"routeToPage('projects')\">Projects</a>\n                </div>\n                <div class=\"button\" id=\"all\" style=\"margin-left: 1.5em\">\n                    <a (click)=\"routeToPage('aboutme')\">All</a>\n                </div>\n            </div>\n        </div>\n        <div style=\"width:100%;height: auto;\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(http, router) {
        var _this = this;
        this.router = router;
        this.headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
        };
        this.requestOptions = {
            headers: new Headers(this.headerDict),
        };
        this.networks = [
            { name: 'Facebook', imgSrc: '../app/assets/facebook.png', url: 'http://facebook.com' },
            { name: 'LinkedIn', imgSrc: '../app/assets/linkedin.png', url: 'http://linkedin.com' },
            { name: 'twitter', imgSrc: '../app/assets/twiiter.png', url: 'http://twitter.com' }
        ];
        this.pollingData = rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].interval(2000)
            .switchMap(function () { return http.get('http://localhost:8080/greeting'); }).map(function (data) { return data.json(); })
            .subscribe(function (data) {
            if (data != null) {
                if (data.content === _this.oldSelected) {
                    console.log(data.content, _this.oldSelected);
                }
                else {
                    _this.oldSelected = data.content;
                    _this.router.navigate(['/' + data.content]);
                }
            }
        });
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.pollingData.unsubscribe();
    };
    AppComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#myname').fadeIn('slow');
        });
        this.myname = 'Mouli Kiran';
        this.myQuote = 'If you think you can </CODE> you are still young;';
        this.expertised = 'Full Stack Engineer';
        this.userTemplate = true;
        this.contentAboutMe = "this is me about this is me about this is me about\n                          this is me about this is me about this is me about\n                          this is me aboutthis is me about";
        this.emailId = 'moulikiran.somesetty@gmail.com';
        this.MobileNumber = '+(91)-7799827883';
    };
    AppComponent.prototype.routeToPage = function (toPage) {
        this.router.navigate(['/' + toPage]);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _admin_area_admin_area_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-area/admin-area.module */ "./src/app/admin-area/admin-area.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _all_all_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all/all.component */ "./src/app/all/all.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routers_routers_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routers/routers-routing.module */ "./src/app/routers/routers-routing.module.ts");
/* harmony import */ var _studies_studies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./studies/studies.component */ "./src/app/studies/studies.component.ts");
/* harmony import */ var angular_popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-popper */ "./node_modules/angular-popper/fesm5/angular-popper.js");
/* harmony import */ var _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/@angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/activities/activities.component */ "./src/app/components/activities/activities.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");
/* harmony import */ var angular_image_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-image-slider */ "./node_modules/angular-image-slider/fesm5/angular-image-slider.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/fesm5/ng-image-slider.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _studies_studies_component__WEBPACK_IMPORTED_MODULE_8__["StudiesComponent"],
                _all_all_component__WEBPACK_IMPORTED_MODULE_3__["AllComponent"],
                _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_11__["AboutMeComponent"],
                _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_12__["ActivitiesComponent"],
                _components_education_education_component__WEBPACK_IMPORTED_MODULE_13__["EducationComponent"],
                _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _routers_routers_routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutersRoutingModule"],
                angular_popper__WEBPACK_IMPORTED_MODULE_9__["NgxPopper"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _admin_area_admin_area_module__WEBPACK_IMPORTED_MODULE_1__["AdminAreaModule"],
                _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                angular_image_slider__WEBPACK_IMPORTED_MODULE_17__["SliderModule"],
                ng_image_slider__WEBPACK_IMPORTED_MODULE_19__["NgImageSliderModule"],
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__["NgCircleProgressModule"].forRoot({})
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-me/about-me.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#aboutMe{\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;    \n    font-size: 2.5em;\n    color: #824CA7;\n    text-align: center;\n}\n\n#horizontalBar{\n    margin-top: 0em;\n    height:3px;\n    border-width:0;\n    color:#824CA7;\n    background-color:#824CA7\n}\n\n#aboutMePhoto{\n    height: 1.3em;\n    width: 1.3em;\n}\n\n.aboutMeContent{\n   text-align: -webkit-left ;\n   padding-left: 2em;\n}\n\n#abouts, #careerObjective{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 0.7em;\n\n}"

/***/ }),

/***/ "./src/app/components/about-me/about-me.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\" id=\"aboutMe\" style=\"text-align: right\">\n\n  <img src=\"../app/assets/aboutMe.png\" id=\"aboutMePhoto\">\n  <label id=\"abouts\"> About Me </label>\n</div>\n<hr id=\"horizontalBar\">\n<div class=\"aboutMeContent\">\n  <p style=\"width: 95%\">Hello! I'm Mouli, a Software Engineer based in Hyderbad (TS), India. </p>\n  <p> I always love to Innovate and Create the things that goes beyond my capabilities. </p>\n  <p> Love to solve business problems and learn new things. </p>\n  <p> As a Motivated and Passionate enginner love to be part of all phases in Software Development Life Cycle (SDLC).</p>\n  <p> Looking for senior role where I can drive the business with ease.</p>\n</div>\n<!-- <div *ngFor=\"let about of aboutMeList\">\n  {{about}}\n</div> -->\n<!-- <hr id=\"horizontalBar\" style=\"margin-top: 3em\"> -->\n<!-- <div class=\"col-sm-12\" id=\"aboutMe\" style=\"text-align: right; margin-top: -0.5em; padding-top: 70px;\">\n  <img src=\"../app/assets/careerObjective.png\" id=\"aboutMePhoto\">\n  <label id=\"careerObjective\"> Career Objective </label>\n</div>\n<hr id=\"horizontalBar\">\n<div class=\"aboutMeContent\">\n    <p style=\"width: 95%\">{{careerObjective}}</p>\n  </div> -->\n  "

/***/ }),

/***/ "./src/app/components/about-me/about-me.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
        this.aboutMeList = "Hello! I'm Mouli, a software engineer based in Hyderbad, India.  I always love to innovate and create the things that goes beyond my capabilities.";
        this.careerObjective = "Hello this is content which about 150 words about yourself Hello this is content which contains about 150\n                          words about yourself Hello this is content which contains about 150 words about yourselfHello this is content";
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#abouts').mouseover(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).css('background-color', 'yellow');
        });
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/components/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/components/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/components/activities/activities.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/activities/activities.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activities/activities.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/activities/activities.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-sm-12 navbar navbar-expand-md bg-dark navbar-dark\">\n    <!-- Brand/logo -->\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"bird.jpg\" alt=\"logo\" style=\"width:40px;\">\n    </a>\n    \n    <!-- Links -->\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link 1</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link 2</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link 3</a>\n      </li>\n    </ul>\n  </nav>\n  "

/***/ }),

/***/ "./src/app/components/activities/activities.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/activities/activities.component.ts ***!
  \***************************************************************/
/*! exports provided: ActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function() { return ActivitiesComponent; });
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

var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent() {
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
    };
    ActivitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__(/*! ./activities.component.html */ "./src/app/components/activities/activities.component.html"),
            styles: [__webpack_require__(/*! ./activities.component.css */ "./src/app/components/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/components/education/education.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/education/education.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#education{\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;    \n    font-size: 2.5em;\n    color: #824CA7;\n    text-align: center;\n}\n\n#horizontalBar {\n    margin-top: 0em;\n    height:3px;\n    border-width:0;\n    color:#824CA7;\n    background-color:#824CA7\n}\n\n#educationPhoto{\n    height: 1.3em;\n    width: 1.3em;\n}\n\n#educationContent{\n    align-content: flex-start;\n}\n\n#educationLabel{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 0.7em;\n}\n\n#educationDetailLabel{\n    align-content: flex-start;\n}\n\n.image{\n  height: 400px;\n  width: 300px;\n}\n\n/* image slider start */\n\n* {box-sizing:border-box}\n\n/* Slideshow container */\n\n.slideshow-container {\n  max-width: 1000px;\n  position: relative;\n  margin: auto;\n}\n\n/* Hide the images by default */\n\n.mySlides {\n  display: none;\n}\n\n/* Next & previous buttons */\n\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  margin-top: -22px;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n/* Position the \"next button\" to the right */\n\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n\n.prev:hover, .next:hover {\n  background-color: rgba(0,0,0,0.8);\n}\n\n/* Caption text */\n\n.text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n}\n\n/* Number text (1/3 etc) */\n\n.numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n/* The dots/bullets/indicators */\n\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active, .dot:hover {\n  background-color: #717171;\n}\n\n/* Fading animation */\n\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\n@keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\n/* image slider end */"

/***/ }),

/***/ "./src/app/components/education/education.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/education/education.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\" id=\"education\" style=\"text-align: right\">\n  <img src=\"../app/assets/education1.png\" id=\"educationPhoto\">\n  <label id=\"educationLabel\"> Education </label>\n</div>\n<hr id=\"horizontalBar\">\n<div class=\"educationContent\">\n  <div *ngFor=\"let study of studiesListObject\">\n    <div id=\"educationBox\" style=\"border: 1px solid black; width: 32%;float: left; margin-left: 10px;\">\n        <label style=\"color: chocolate; font-size: 25px;\"> {{study.title}} </label>\n        <hr id=\"horizontalBar\">\n        <div id=\"educationDetails\">\n          <div style = \"padding-left: none;\"> \n            <label id=\"educationDetailLabel\"> College/University: {{study.college}} </label>\n          </div>\n          <div style = \"padding-left: none;\"> \n            <label id=\"educationDetailLabel\"> Year: {{study.year}} </label>\n          </div>\n          <div style = \"padding-left: none;\"> \n            <label id=\"educationDetailLabel\"> Specalization: {{study.specialization}}</label>\n          </div>\n          <div style = \"padding-left: none;\"> \n            <label id=\"educationDetailLabel\"> Percentage: {{study.percentage}} </label>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n\n<div style=\"width: 400px;height: 350px; align-content: center;margin-left: 30%; margin-top: 320px;\">\n    <ng-image-slider [images]=\"imagesUrl\" [imageSize]=\"{width: 400, height: 500}\"  #nav></ng-image-slider>\n</div>\n"

/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
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

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.studiesListObject = [{
                title: "Bachelor in technology",
                college: "Jawaharlal Nehru Technological University - Anantapur",
                specialization: "Computer Science Engineering",
                year: "2010-2014",
                percentage: "77.6%"
            },
            {
                title: "Intermediate School of Education",
                college: "Krishna Chaitanya Junior College",
                specialization: "Maths Physics and Chemistry (MPC)",
                year: "2008-2010",
                percentage: "85%"
            },
            {
                title: "Secondary School of Education",
                college: "Y.K.Achari E.M School",
                specialization: "10th standard.",
                year: "2008",
                percentage: "77%"
            }];
        this.imagesUrl = [{
                image: '../app/assets/tenth.JPG',
                thumbImage: '../app/assets/tenth.JPG',
                alt: 'alt of image',
                title: 'Tenth'
            }, {
                image: '../app/assets/inter.JPG',
                thumbImage: '../app/assets/inter.JPG',
                title: 'Intermediate',
                alt: 'Intermediate' //Optional: You can use this key if want to show image with alt
            }, {
                image: '../app/assets/btech.JPG',
                thumbImage: '../app/assets/btech.JPG',
                title: 'BTech',
                alt: 'BTech' //Optional: You can use this key if want to show image with alt
            }, {
                image: '../app/assets/provisional.JPG',
                thumbImage: '../app/assets/provisional.JPG',
                title: 'BTech',
                alt: 'BTech' //Optional: You can use this key if want to show image with alt
            }
        ];
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/components/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/components/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#projects{\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;    \n    font-size: 2.5em;\n    color: #824CA7;\n    text-align: center;\n}\n\n#horizontalBar {\n    margin-top: 0em;\n    height:3px;\n    border-width:0;\n    color:#824CA7;\n    background-color:#824CA7\n}\n\n#horizontalLine {\n    margin-top: 0em;\n    color:dimgray;\n    background-color:dimgray;\n}\n\n#projectsPhoto{\n    height: 1.3em;\n    width: 1.3em;\n}\n\n#projectsContent{\n    align-content: flex-start;\n}\n\n#projectsLabel{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 0.7em;\n}\n\n#projectsDetailLabel{\n    align-content: flex-start;\n}\n\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n  }\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n  }\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n  }"

/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\" id=\"projects\" style=\"text-align: right\">\n  <img src=\"../app/assets/projects.png\" id=\"projectsPhoto\">\n  <label id=\"projectsLabel\"> Professional Summary </label>\n</div>\n<hr id=\"horizontalBar\">\n\n<div *ngFor=\"let project of projects\" [ngStyle]=\"{'margin-top': project.paddingRequired ? '325px' : '0px'}\" >\n  <div class=\"col-sm-12\">\n      <label id=\"companyName\" style=\"float: left; font-family: cursive; font-size: 30px;\">{{project.companyName}}</label>\n      <label id=\"companyYear\" style=\"float: right; font-family: Arial, Helvetica, sans-serif ; font-size: 25px;\">{{project.year}}</label>\n      <hr style=\"width: inherit; float: right;\" id=\"horizontalLine\">\n  </div>\n  <div style=\"float: left;\">\n    <table>\n      <tr>\n        <td>Project: &nbsp;</td>\n        <td>{{project.product}}</td>\n      </tr>\n      <tr>\n        <td style=\"width: 200px;\">Project Description: </td>\n        <td>{{project.productDesc}}</td>\n      </tr>\n      <tr>\n        <td>Role:</td>\n        <td>{{project.role}}</td>\n      </tr>\n      <tr>\n        <td style=\"width: 200px;\">Responsiblites:</td>\n        <td>{{project.delivered}}</td>\n      </tr>\n    </table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
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

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.projects = [
            {
                companyName: "Genesys Telecom Labs Pvt.Ltd",
                year: "DEC 2017 - Present",
                product: "PureConnect",
                productDesc: "PureConnect is a Call Center Software that makes customer interactions better. It suppports for mid size market.",
                project: "PureConnect - Analytics",
                role: "Software Engineer",
                delivered: "Deilvered the analytics platform to the customers. This platform allows customers create dashboards based on thier business requirements. Integrated Microstrategy BI tool for data visualization. Created docker containers and kubernetes cluster to make communication to the pureconnect server.",
                paddingRequired: false
            },
            {
                companyName: "OpenText",
                year: "Nov 2014 - Nov 2017",
                product: "System Center Planner",
                productDesc: " System center planner is to aggregate to all opentext products at single place. Customers can download the opentext product/s depending upon their operating system. This system is capable of showing already existing products in the machine so that customers can avoid repetetion of installation.",
                role: "Software Engineer",
                project: " System Center Planner & Product Information Management (PIM)",
                delivered: " Delivered whole platform to the customers so that customers can download the opentext products based on licenses. Created user interface for customers using angularjs. Created REST API's to get the information and metadata of all the products.",
                paddingRequired: true
            }
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/skills/skills.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/skills/skills.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#skillsForComponent\n{\n    width: 20%; height: 15%; float: left; padding-bottom: 50px;\n}\n\n#skills{\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;    \n    font-size: 2.5em;\n    color: #824CA7;\n    text-align: center;\n}\n\n#horizontalBar{\n    margin-top: 0em;\n    height:3px;\n    border-width:0;\n    color:#824CA7;\n    background-color:#824CA7\n}\n\n#skillsPhoto{\n    height: 1.3em;\n    width: 1.3em;\n}\n\n#skillsContent{\n    align-content: flex-start;\n}\n\n#skillsLabel{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 0.7em;\n}\n\n#skillsDetailLabel{\n    align-content: flex-start;\n}"

/***/ }),

/***/ "./src/app/components/skills/skills.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-sm-12\" id=\"skills\" style=\"text-align: right\">\n  <img src=\"../app/assets/skillsLogo.png\" id=\"skillsPhoto\">\n  <label id=\"skillsLabel\"> Skills </label>\n</div>\n<hr id=\"horizontalBar\">\n\n<div style=\"border: 1px solid black; width: inherit;height: 70px; border-radius: 20px;\">\n    <label style=\"float: left; font-family: 'Comic Sans MS', cursive, sans-serif; font-size: 25px; padding-top: 10px; padding-left: 45px; color: teal;\">Skills: &nbsp;</label>\n    <div *ngFor = \"let skill of skills\" style=\"float: left;\">\n      <label style=\"font-size: 20px; color: dimgray;\">{{skill.skillName}} &nbsp;&nbsp;</label>\n      <br>\n    </div>\n</div>\n\n<div style=\"padding-top: 60px; height: max-content;\">\n<div *ngFor=\"let skill of skills\" id=\"skillsForComponent\">  \n<circle-progress\n  [percent]=\"skill.progress\"\n  [radius]=\"100\"\n  [outerStrokeWidth]=\"10\"\n  [innerStrokeWidth]=\"10\"\n  [space] = \"-10\"\n  [outerStrokeColor]=\"skill.color\"\n  [innerStrokeColor]=\"'#e7e8ea'\"\n  [titleFontSize]= \"24\"\n  [unitsFontSize]= \"24\"\n  [showSubtitle] = \"true\"\n  [subtitleFontSize] = \"20\"\n  [showTitle]=\"true\"\n  [showUnits] = \"false\"\n  [units] = \"point\"\n  [title]=\"skill.skillName\"\n  [animation]=\"true\"\n  [animationDuration]=\"1000\"\n  [startFromZero]=\"true\"\n  [responsive]=\"true\"\n  [subtitleFormat]=\"skill.subtitle\"\n></circle-progress>\n<!-- <label style=\"font-size: 20px; font-family: 'Comic Sans MS', cursive, sans-serif; color:#1d1924;\">{{skill.skillName}}</label> -->\n</div>\n</div>\n\n<!-- 66efeb 4882c2-->"

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
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

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.progress = 10;
        this.skills = [
            {
                skillName: "DS & Algo",
                progress: "40",
                color: "#ff8763",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "CoreJava",
                progress: "70",
                color: "#9ad880",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "Spring Boot",
                progress: "50",
                color: "#4882c2",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "Rest Services",
                progress: "70",
                color: "#ff8763",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "Hibernate",
                progress: "50",
                color: "#9ad880",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "Angular Js",
                progress: "70",
                color: "#4882c2",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "Angular 2+",
                progress: "60",
                color: "#ff8763",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "Tomcat",
                progress: "50",
                color: "#9ad880",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "Jenkins",
                progress: "70",
                color: "#4882c2",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "Kubernetes & Docker",
                progress: "40",
                color: "#ff8763",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "Agile Methodlogies",
                progress: "80",
                color: "#9ad880",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "SQL Server",
                progress: "50",
                color: "#4882c2",
                subtitle: function (progress) {
                    return progress + "%";
                }
            },
            {
                skillName: "Microstrategy",
                progress: "55",
                color: "#ff8763",
                subtitle: function (progress) {
                    return progress + "%";
                }
            }
        ];
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/components/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/components/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/routers/routers-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/routers/routers-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RoutersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutersRoutingModule", function() { return RoutersRoutingModule; });
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/activities/activities.component */ "./src/app/components/activities/activities.component.ts");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: 'aboutme', component: _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"]
    },
    {
        path: 'activities', component: _components_activities_activities_component__WEBPACK_IMPORTED_MODULE_3__["ActivitiesComponent"]
    },
    {
        path: 'education', component: _components_education_education_component__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"]
    },
    {
        path: 'skills', component: _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_1__["SkillsComponent"]
    },
    {
        path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_0__["ProjectsComponent"]
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'aboutme'
    }
];
var RoutersRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Access-Control-Allow-Origin': '*' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    DataService.prototype.getUsers = function () {
        var _this = this;
        return this._http.get('http://localhost:3000/api/users', this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return _this.result = result.json().data; }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/studies/studies.component.css":
/*!***********************************************!*\
  !*** ./src/app/studies/studies.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/studies/studies.component.html":
/*!************************************************!*\
  !*** ./src/app/studies/studies.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  studies works!\n</p>\n"

/***/ }),

/***/ "./src/app/studies/studies.component.ts":
/*!**********************************************!*\
  !*** ./src/app/studies/studies.component.ts ***!
  \**********************************************/
/*! exports provided: StudiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudiesComponent", function() { return StudiesComponent; });
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

var StudiesComponent = /** @class */ (function () {
    function StudiesComponent() {
        console.log('Hekki');
    }
    StudiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-studies',
            template: __webpack_require__(/*! ./studies.component.html */ "./src/app/studies/studies.component.html"),
            styles: [__webpack_require__(/*! ./studies.component.css */ "./src/app/studies/studies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudiesComponent);
    return StudiesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/msomeset/Desktop/ProfileNew1/MouliProfile/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map