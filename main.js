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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* li {\n  color: blue;\n  box-shadow: 1px 5px 4px yellow;\n  display: inline-block;\n  padding: 50px;\n  border: 2px solid yellow;\n}\ni {\n  color: red;\n}\ntable,\nth,\ntd {\n  border: 1px solid yellow;\n  border-collapse: collapse;\n}\n\ntable#t01 tr:nth-child(even) {\n  background-color: #eee;\n}\ntable#t01 tr:nth-child(odd) {\n  background-color: #fff;\n}\ntable#t01 th {\n  color: white;\n  background-color: black;\n} */\ncard{\n  width:400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBQ0g7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGxpIHtcbiAgY29sb3I6IGJsdWU7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggNHB4IHllbGxvdztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG59XG5pIHtcbiAgY29sb3I6IHJlZDtcbn1cbnRhYmxlLFxudGgsXG50ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGFibGUjdDAxIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG50YWJsZSN0MDEgdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxudGFibGUjdDAxIHRoIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0gKi9cbmNhcmR7XG4gIHdpZHRoOjQwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-banner></app-banner>\n<app-products></app-products>\n<app-banner2></app-banner2>\n<app-contact></app-contact>\n<app-banner3></app-banner3>\n<app-footer></app-footer>\n\n<!-- Scripts-->\n<script src=\"https://code.jquery.com/jquery-2.1.1.min.js\"></script>\n<script src=\"js/materialize.js\"></script>\n<script src=\"js/init.js\"></script>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { StylesCompileDependency, templateJitUrl } from "@angular/compiler";
// import { ?NgClassImplProvider__POST_R3__ } from "@angular/common";
var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
        this.title = "Fashion Street Pune";
    }
    FirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: FirstModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstModule", function() { return FirstModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sqrt_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sqrt.pipe */ "./src/app/sqrt.pipe.ts");
/* harmony import */ var _testcss_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testcss.directive */ "./src/app/testcss.directive.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _banner2_banner2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./banner2/banner2.component */ "./src/app/banner2/banner2.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _banner3_banner3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner3/banner3.component */ "./src/app/banner3/banner3.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _products_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/mobile/mobile.component */ "./src/app/products/mobile/mobile.component.ts");
/* harmony import */ var _products_mobile_nokia_nokia_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/mobile/nokia/nokia.component */ "./src/app/products/mobile/nokia/nokia.component.ts");
/* harmony import */ var _products_laptop_laptop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products/laptop/laptop.component */ "./src/app/products/laptop/laptop.component.ts");
/* harmony import */ var _products_bike_bike_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./products/bike/bike.component */ "./src/app/products/bike/bike.component.ts");
/* harmony import */ var _products_car_car_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./products/car/car.component */ "./src/app/products/car/car.component.ts");


















var FirstModule = /** @class */ (function () {
    function FirstModule() {
    }
    FirstModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"], _sqrt_pipe__WEBPACK_IMPORTED_MODULE_4__["SqrtPipe"], _testcss_directive__WEBPACK_IMPORTED_MODULE_5__["TestcssDirective"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_7__["BannerComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"], _banner2_banner2_component__WEBPACK_IMPORTED_MODULE_9__["Banner2Component"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _banner3_banner3_component__WEBPACK_IMPORTED_MODULE_11__["Banner3Component"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _products_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_13__["MobileComponent"], _products_mobile_nokia_nokia_component__WEBPACK_IMPORTED_MODULE_14__["NokiaComponent"], _products_laptop_laptop_component__WEBPACK_IMPORTED_MODULE_15__["LaptopComponent"], _products_bike_bike_component__WEBPACK_IMPORTED_MODULE_16__["BikeComponent"], _products_car_car_component__WEBPACK_IMPORTED_MODULE_17__["CarComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"]]
        })
    ], FirstModule);
    return FirstModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"index-banner\" class=\"parallax-container\">\n  <div class=\"section no-pad-bot\">\n    <div class=\"container\">\n      <br /><br />\n      <h1 class=\"header center teal-text text-lighten-2\" styele=\"background:color:red;\">Parallax Template</h1>\n      <div class=\"row center\">\n        <h5 class=\"header col s12 light\">\n          _ A modern responsive front-end framework based on Material Design\n        </h5>\n      </div>\n      <div class=\"row center\">\n        <a href=\"http://materializecss.com/getting-started.html\" id=\"download-button\" class=\"btn-large waves-effect waves-light teal lighten-1\">Get\n          Started</a>\n      </div>\n      <br /><br />\n    </div>\n  </div>\n  <div class=\"parallax\">\n    <img src=\"./../assets/background1.jpg\" alt=\"Unsplashed background img 1\" />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/banner2/banner2.component.css":
/*!***********************************************!*\
  !*** ./src/app/banner2/banner2.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lcjIvYmFubmVyMi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/banner2/banner2.component.html":
/*!************************************************!*\
  !*** ./src/app/banner2/banner2.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax-container valign-wrapper\">\n  <div class=\"section no-pad-bot\">\n    <div class=\"container\">\n      <div class=\"row center\">\n        <h5 class=\"header col s12 light\">\n          A modern responsive front-end framework based on Material Design\n        </h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"parallax\">\n    <img src=\"./../assets/background1.jpg\" alt=\"Unsplashed background img 2\" />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/banner2/banner2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/banner2/banner2.component.ts ***!
  \**********************************************/
/*! exports provided: Banner2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner2Component", function() { return Banner2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Banner2Component = /** @class */ (function () {
    function Banner2Component() {
    }
    Banner2Component.prototype.ngOnInit = function () {
    };
    Banner2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner2',
            template: __webpack_require__(/*! ./banner2.component.html */ "./src/app/banner2/banner2.component.html"),
            styles: [__webpack_require__(/*! ./banner2.component.css */ "./src/app/banner2/banner2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Banner2Component);
    return Banner2Component;
}());



/***/ }),

/***/ "./src/app/banner3/banner3.component.css":
/*!***********************************************!*\
  !*** ./src/app/banner3/banner3.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lcjMvYmFubmVyMy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/banner3/banner3.component.html":
/*!************************************************!*\
  !*** ./src/app/banner3/banner3.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax-container valign-wrapper\">\n  <div class=\"section no-pad-bot\">\n    <div class=\"container\">\n      <div class=\"row center\">\n        <h5 class=\"header col s12 light\">\n          A modern responsive front-end framework based on Material Design\n        </h5>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"parallax\">\n    <img src=\"./../assets/background3.jpg\" alt=\"Unsplashed background img 3\" />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/banner3/banner3.component.ts":
/*!**********************************************!*\
  !*** ./src/app/banner3/banner3.component.ts ***!
  \**********************************************/
/*! exports provided: Banner3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner3Component", function() { return Banner3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Banner3Component = /** @class */ (function () {
    function Banner3Component() {
    }
    Banner3Component.prototype.ngOnInit = function () {
    };
    Banner3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner3',
            template: __webpack_require__(/*! ./banner3.component.html */ "./src/app/banner3/banner3.component.html"),
            styles: [__webpack_require__(/*! ./banner3.component.css */ "./src/app/banner3/banner3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Banner3Component);
    return Banner3Component;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"section\">\n    <div class=\"row\">\n      <div class=\"col s12 center\">\n        <h3><i class=\"mdi-content-send brown-text\"></i></h3>\n        <h4>Contact Us</h4>\n        <p class=\"left-align light\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam\n          scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu,\n          non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas\n          eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem\n          neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam\n          eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla\n          imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac,\n          gravida ultrices erat. Nullam eget dignissim mauris, non tristique\n          erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices\n          posuere cubilia Curae;\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: "\n    <footer class=\"page-footer teal\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col l6 s12\">\n            <h5 class=\"white-text\">Company Bio</h5>\n            <p class=\"grey-text text-lighten-4\">\n              We are a team of college students working on this project like\n              it's our full time job. Any amount would help support and continue\n              development on this project and is greatly appreciated.\n            </p>\n          </div>\n          <div class=\"col l3 s12\">\n            <h5 class=\"white-text\">Settings</h5>\n            <ul>\n              <li><a class=\"white-text\" href=\"#!\">Link 1</a></li>\n              <li><a class=\"white-text\" href=\"#!\">Link 2</a></li>\n              <li><a class=\"white-text\" href=\"#!\">Link 3</a></li>\n              <li><a class=\"white-text\" href=\"#!\">Link 4</a></li>\n            </ul>\n          </div>\n          <div class=\"col l3 s12\">\n            <h5 class=\"white-text\">Connect</h5>\n            <ul>\n              <li><a class=\"white-text\" href=\"#!\">Link 1</a></li>\n              <li><a class=\"white-text\" href=\"#!\">Link 2</a></li>\n\n              <li><a class=\"white-text\" href=\"#!\">Link 3</a></li>\n              <li><a class=\"white-text\" href=\"#!\">Link 4</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"footer-copyright\">\n        <div class=\"container\">\n          Made by\n          <a class=\"brown-text text-lighten-3\" href=\"http://materializecss.com\"\n            >Materialize</a\n          >\n        </div>\n      </div>\n    </footer>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"white\" role=\"navigation\">\n  <div class=\"nav-wrapper container\">\n    <a id=\"logo-container\" href=\"http//:pravingadekar.in\" class=\"brand-logo\"\n      >PravinGadekar.in</a\n    >\n    <ul class=\"right hide-on-med-and-down\">\n      <li><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">About US</a></li>\n      <li><a href=\"#\">Our Product</a></li>\n      <li><a href=\"#\">Our Offer</a></li>\n      <li><a href=\"#\">Tending Product</a></li>\n      <li><a href=\"#\">Blog</a></li>\n      <li><a href=\"#\">Contact Us</a></li>\n    </ul>\n\n    <ul id=\"nav-mobile\" class=\"sidenav\">\n      <li><a href=\"#\">Navbar Link</a></li>\n    </ul>\n    <a href=\"#\" data-target=\"nav-mobile\" class=\"sidenav-trigger\"\n      ><i class=\"material-icons\">menu</i></a\n    >\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/products/bike/bike.component.css":
/*!**************************************************!*\
  !*** ./src/app/products/bike/bike.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2Jpa2UvYmlrZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/bike/bike.component.html":
/*!***************************************************!*\
  !*** ./src/app/products/bike/bike.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bike works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/bike/bike.component.ts":
/*!*************************************************!*\
  !*** ./src/app/products/bike/bike.component.ts ***!
  \*************************************************/
/*! exports provided: BikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikeComponent", function() { return BikeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BikeComponent = /** @class */ (function () {
    function BikeComponent() {
    }
    BikeComponent.prototype.ngOnInit = function () {
    };
    BikeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bike',
            template: __webpack_require__(/*! ./bike.component.html */ "./src/app/products/bike/bike.component.html"),
            styles: [__webpack_require__(/*! ./bike.component.css */ "./src/app/products/bike/bike.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BikeComponent);
    return BikeComponent;
}());



/***/ }),

/***/ "./src/app/products/car/car.component.css":
/*!************************************************!*\
  !*** ./src/app/products/car/car.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2Nhci9jYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/products/car/car.component.html":
/*!*************************************************!*\
  !*** ./src/app/products/car/car.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  car works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/car/car.component.ts":
/*!***********************************************!*\
  !*** ./src/app/products/car/car.component.ts ***!
  \***********************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarComponent = /** @class */ (function () {
    function CarComponent() {
    }
    CarComponent.prototype.ngOnInit = function () {
    };
    CarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car',
            template: __webpack_require__(/*! ./car.component.html */ "./src/app/products/car/car.component.html"),
            styles: [__webpack_require__(/*! ./car.component.css */ "./src/app/products/car/car.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/products/laptop/laptop.component.css":
/*!******************************************************!*\
  !*** ./src/app/products/laptop/laptop.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2xhcHRvcC9sYXB0b3AuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/products/laptop/laptop.component.html":
/*!*******************************************************!*\
  !*** ./src/app/products/laptop/laptop.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  laptop works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/laptop/laptop.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/laptop/laptop.component.ts ***!
  \*****************************************************/
/*! exports provided: LaptopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopComponent", function() { return LaptopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LaptopComponent = /** @class */ (function () {
    function LaptopComponent() {
    }
    LaptopComponent.prototype.ngOnInit = function () {
    };
    LaptopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-laptop',
            template: __webpack_require__(/*! ./laptop.component.html */ "./src/app/products/laptop/laptop.component.html"),
            styles: [__webpack_require__(/*! ./laptop.component.css */ "./src/app/products/laptop/laptop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LaptopComponent);
    return LaptopComponent;
}());



/***/ }),

/***/ "./src/app/products/mobile/mobile.component.css":
/*!******************************************************!*\
  !*** ./src/app/products/mobile/mobile.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL21vYmlsZS9tb2JpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/products/mobile/mobile.component.html":
/*!*******************************************************!*\
  !*** ./src/app/products/mobile/mobile.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <ul>\n    <h1>\n      <p #O>\n        <u></u>\n        <i>{{ title }}</i>\n      </p>\n    </h1>\n    <h3>\n      THis data Comes From <mark>Mobile Components</mark> {{ total() }} products\n      left..\n    </h3>\n    <!--<h2>{{ 225 | sqrt }}</h2>-->\n    <li *ngFor=\"let mobPart of items\">\n      <div class=\"col s12 m4\">\n        <div class=\"card\">\n          <div class=\"card-image\">\n            <img src=\"./../assets/background1.jpg\" />\n\n            <span class=\"card-title\">{{ mobPart.name | slice }}</span>\n          </div>\n          <div class=\"card-content\">\n            <p>\n              <span\n                [ngStyle]=\"{\n                  display: mobPart.isOnline === true ? 'inline-block' : 'none'\n                }\"\n              >\n                <img\n                  src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/2000px-\nGreen_sphere.svg.png\"\n                  width=\"16\"\n              /></span>\n              <b>Id: {{ mobPart.id }}</b>\n            </p>\n\n            <div appSimpleCss>\n              <b>Name: {{ mobPart.name | slice }}</b>\n            </div>\n            <p [style.color]=\"mobPart.stl\">\n              <b>Description: {{ mobPart.desc | lowercase }}</b>\n            </p>\n\n            <div *ngIf=\"mobPart.inStock > 0; else ID\">\n              <mark>{{ mobPart.inStock }}</mark> Parts Available Now..\n            </div>\n            <ng-template #ID>\n              <div>Out Of Stock!!</div>\n            </ng-template>\n            <p [ngClass]=\"{ bgColor: true }\">\n              <b>Price: {{ mobPart.price | currency: \"INR\" }}</b>\n            </p>\n\n            <div [ngSwitch]=\"mobPart.country\">\n              Country :\n              <img\n                *ngSwitchCase=\"'Australia'\"\n                src=\"https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/23px-\nFlag_of_Australia.svg.png\"\n                width=\"24\"\n              />\n              <img\n                *ngSwitchCase=\"'Germany'\"\n                src=\"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/23px-\nFlag_of_Germany.svg.png\"\n                width=\"24\"\n              />\n              <img\n                *ngSwitchCase=\"'India'\"\n                src=\"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/23px-\nFlag_of_India.svg.png\"\n                width=\"24\"\n              />\n              <img\n                *ngSwitchCase=\"'Pakistan'\"\n                src=\"https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg\"\n                width=\"22\"\n              />\n              <img\n                *ngSwitchDefault\n                src=\"https://cdn2.iconfinder.com/data/icons/world-flag-\nicons/256/Flag_of_Japan.png\"\n                width=\"24\"\n              />\n            </div>\n          </div>\n          <div class=\"card-action\">\n            <a href=\"#\">This is a link</a>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<div class=\"col s12 m6\">\n  <div class=\"card blue-grey darken-1\">\n    <div class=\"card-content white-text\">\n      <span class=\"card-title\">Card Title</span>\n      <p>\n        I am a very simple card. I am good at containing small bits of\n        information. I am convenient because I require little markup to use\n        effectively.\n      </p>\n    </div>\n    <div class=\"card-action\">\n      <a href=\"#\">This is a link</a>\n      <a href=\"#\">This is a link</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/mobile/mobile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/mobile/mobile.component.ts ***!
  \*****************************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MobileComponent = /** @class */ (function () {
    function MobileComponent() {
        this.items = [
            {
                id: "JWE101",
                prod_name: "Jewellery",
                price: "19999",
                desc: "Gold plated Fancy Earrings",
                inStock: 101,
                str: "brown",
                isAvailable: true,
                country: "India"
            },
            {
                id: "WTH111",
                prod_name: "Wathes",
                price: "39999",
                desc: "upto 40% OFF ",
                inStock: 0,
                str: "brown",
                isAvailable: false,
                country: "Germany"
            },
            {
                id: "PS105",
                prod_name: "Puma Shoes",
                price: "2999",
                desc: "Sports running shoes",
                inStock: 10,
                str: "brown",
                isAvailable: true,
                country: "Australia"
            },
            {
                id: "HB102",
                prod_name: "Hand Bags",
                price: "999",
                desc: "LAVIE Women's Handbags",
                inStock: 140,
                str: "brown",
                isAvailable: true,
                country: ""
            },
            {
                id: "FS104",
                prod_name: "Fastrack Sunglasses",
                price: "3599",
                desc: "UV protected Sunglasses",
                inStock: 0,
                str: "brown",
                isAvailable: false,
                country: "India"
            },
            {
                id: "FS104",
                prod_name: "Fastrack Sunglasses",
                price: "3599",
                desc: "UV protected Sunglasses",
                inStock: 0,
                str: "brown",
                isAvailable: false,
                country: "India"
            }
        ];
    }
    MobileComponent.prototype.total = function () {
        var sum = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var a = _a[_i];
            sum = sum + a.inStock;
        }
        return sum;
    };
    MobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-mobile",
            template: __webpack_require__(/*! ./mobile.component.html */ "./src/app/products/mobile/mobile.component.html"),
            styles: [__webpack_require__(/*! ./mobile.component.css */ "./src/app/products/mobile/mobile.component.css")]
        })
    ], MobileComponent);
    return MobileComponent;
}());



/***/ }),

/***/ "./src/app/products/mobile/nokia/nokia.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/products/mobile/nokia/nokia.component.ts ***!
  \**********************************************************/
/*! exports provided: NokiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NokiaComponent", function() { return NokiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NokiaComponent = /** @class */ (function () {
    function NokiaComponent() {
    }
    NokiaComponent.prototype.ngOnInit = function () {
    };
    NokiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nokia',
            template: "\n    <p>\n      nokia works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NokiaComponent);
    return NokiaComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div cylass=\"container\">\n  <div class=\"section\">\n    <!-- Icon Section -->\n    <div class=\"row\">\n      <ul>\n        <h1>\n          <p #O>\n            <u></u>\n            <i>{{ title }}</i>\n          </p>\n        </h1>\n        <h3>THis data Comes From <mark>Product Components</mark> Only {{ total() }} products left..</h3>\n        <!--<h2>{{ 225 | sqrt }}</h2>-->\n        <li *ngFor=\"let mobPart of items\">\n          <div class=\"col s12 m4\">\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <img src=\"./../assets/background1.jpg\" />\n\n                <span class=\"card-title\">{{ mobPart.name | slice }}</span>\n              </div>\n              <div class=\"card-content\">\n                <p>\n                  <span\n                    [ngStyle]=\"{\n                      display:\n                        mobPart.isOnline === true ? 'inline-block' : 'none'\n                    }\"\n                  >\n                    <img\n                      src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/2000px-\nGreen_sphere.svg.png\"\n                      width=\"16\"\n                  /></span>\n                  <b>Id: {{ mobPart.id }}</b>\n                </p>\n\n                <div appSimpleCss>\n                  <b>Name: {{ mobPart.name | slice }}</b>\n                </div>\n                <p [style.color]=\"mobPart.stl\">\n                  <b>Description: {{ mobPart.desc | lowercase }}</b>\n                </p>\n\n                <div *ngIf=\"mobPart.inStock > 0; else ID\">\n                  <mark>{{ mobPart.inStock }}</mark> Parts Available Now..\n                </div>\n                <ng-template #ID>\n                  <div>Out Of Stock!!</div>\n                </ng-template>\n                <p [ngClass]=\"{ bgColor: true }\">\n                  <b>Price: {{ mobPart.price | currency: \"INR\" }}</b>\n                </p>\n\n                <div [ngSwitch]=\"mobPart.country\">\n                  Country :\n                  <img\n                    *ngSwitchCase=\"'Australia'\"\n                    src=\"https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/23px-\nFlag_of_Australia.svg.png\"\n                    width=\"24\"\n                  />\n                  <img\n                    *ngSwitchCase=\"'Germany'\"\n                    src=\"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/23px-\nFlag_of_Germany.svg.png\"\n                    width=\"24\"\n                  />\n                  <img\n                    *ngSwitchCase=\"'India'\"\n                    src=\"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/23px-\nFlag_of_India.svg.png\"\n                    width=\"24\"\n                  />\n                  <img\n                    *ngSwitchCase=\"'Pakistan'\"\n                    src=\"https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg\"\n                    width=\"22\"\n                  />\n                  <img\n                    *ngSwitchDefault\n                    src=\"https://cdn2.iconfinder.com/data/icons/world-flag-\nicons/256/Flag_of_Japan.png\"\n                    width=\"24\"\n                  />\n                </div>\n              </div>\n              <div class=\"card-action\">\n                <a href=\"#\">This is a link</a>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <app-mobile></app-mobile>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.items = [
            {
                id: "JWE101",
                prod_name: "Jewellery",
                price: "19999",
                desc: "Gold plated Fancy Earrings",
                inStock: 101,
                str: "brown",
                isAvailable: true,
                country: "India"
            },
            {
                id: "WTH111",
                prod_name: "Wathes",
                price: "39999",
                desc: "upto 40% OFF ",
                inStock: 0,
                str: "brown",
                isAvailable: false,
                country: "Germany"
            },
            {
                id: "PS105",
                prod_name: "Puma Shoes",
                price: "2999",
                desc: "Sports running shoes",
                inStock: 10,
                str: "brown",
                isAvailable: true,
                country: "Australia"
            },
            {
                id: "HB102",
                prod_name: "Hand Bags",
                price: "999",
                desc: "LAVIE Women's Handbags",
                inStock: 140,
                str: "brown",
                isAvailable: true,
                country: ""
            },
            {
                id: "FS104",
                prod_name: "Fastrack Sunglasses",
                price: "3599",
                desc: "UV protected Sunglasses",
                inStock: 0,
                str: "brown",
                isAvailable: false,
                country: "India"
            },
            {
                id: "FS104",
                prod_name: "Fastrack Sunglasses",
                price: "3599",
                desc: "UV protected Sunglasses",
                inStock: 0,
                str: "brown",
                isAvailable: false,
                country: "India"
            }
        ];
    }
    ProductsComponent.prototype.total = function () {
        var sum = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var a = _a[_i];
            sum = sum + a.inStock;
        }
        return sum;
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-products",
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/sqrt.pipe.ts":
/*!******************************!*\
  !*** ./src/app/sqrt.pipe.ts ***!
  \******************************/
/*! exports provided: SqrtPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqrtPipe", function() { return SqrtPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SqrtPipe = /** @class */ (function () {
    function SqrtPipe() {
    }
    SqrtPipe.prototype.transform = function (value) {
        return Math.sqrt(value);
    };
    SqrtPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "sqrt"
        })
    ], SqrtPipe);
    return SqrtPipe;
}());



/***/ }),

/***/ "./src/app/testcss.directive.ts":
/*!**************************************!*\
  !*** ./src/app/testcss.directive.ts ***!
  \**************************************/
/*! exports provided: TestcssDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestcssDirective", function() { return TestcssDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestcssDirective = /** @class */ (function () {
    function TestcssDirective(eleRef) {
        this.eleRef = eleRef;
        eleRef.nativeElement.style.color = "yellow";
    }
    TestcssDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appTestcss]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TestcssDirective);
    return TestcssDirective;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["FirstModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/student/pravin/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map