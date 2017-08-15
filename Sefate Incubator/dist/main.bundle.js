webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export correctHeight */
/* harmony export (immutable) */ __webpack_exports__["a"] = detectBody;
/* harmony export (immutable) */ __webpack_exports__["b"] = smoothlyMenu;
/*
 * Inspinia js helpers:
 *
 * correctHeight() - fix the height of main wrapper
 * detectBody() - detect windows size
 * smoothlyMenu() - add smooth fade in/out on navigation show/ide
 *
 */
function correctHeight() {
    var pageWrapper = jQuery('#page-wrapper');
    var navbarHeight = jQuery('nav.navbar-default').height();
    var wrapperHeight = pageWrapper.height();
    if (navbarHeight > wrapperHeight) {
        pageWrapper.css("min-height", navbarHeight + "px");
    }
    if (navbarHeight <= wrapperHeight) {
        if (navbarHeight < jQuery(window).height()) {
            pageWrapper.css("min-height", jQuery(window).height() + "px");
        }
        else {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
    }
    if (jQuery('body').hasClass('fixed-nav')) {
        if (navbarHeight > wrapperHeight) {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
        else {
            pageWrapper.css("min-height", jQuery(window).height() - 60 + "px");
        }
    }
}
function detectBody() {
    if (jQuery(document).width() < 769) {
        jQuery('body').addClass('body-small');
    }
    else {
        jQuery('body').removeClass('body-small');
    }
}
function smoothlyMenu() {
    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        jQuery('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 200);
    }
    else if (jQuery('body').hasClass('fixed-sidebar')) {
        jQuery('#side-menu').hide();
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 100);
    }
    else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        jQuery('#side-menu').removeAttr('style');
    }
}
//# sourceMappingURL=app.helpers.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_dashboards_dashboards_module__ = __webpack_require__("../../../../../src/app/views/dashboards/dashboards.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_appviews_appviews_module__ = __webpack_require__("../../../../../src/app/views/appviews/appviews.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_common_layouts_layouts_module__ = __webpack_require__("../../../../../src/app/components/common/layouts/layouts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_membership_service__ = __webpack_require__("../../../../../src/app/services/membership.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_requirements_service__ = __webpack_require__("../../../../../src/app/services/requirements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_userList_service__ = __webpack_require__("../../../../../src/app/services/userList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_timeline_service__ = __webpack_require__("../../../../../src/app/services/timeline.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_common_iboxtools_iboxtools_module__ = __webpack_require__("../../../../../src/app/components/common/iboxtools/iboxtools.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_document_service__ = __webpack_require__("../../../../../src/app/services/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_incubation_service__ = __webpack_require__("../../../../../src/app/services/incubation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// App views


// App modules/components

//services










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__views_dashboards_dashboards_module__["a" /* DashboardsModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_common_layouts_layouts_module__["a" /* LayoutsModule */],
            __WEBPACK_IMPORTED_MODULE_9__views_appviews_appviews_module__["a" /* AppviewsModule */],
            __WEBPACK_IMPORTED_MODULE_18__components_common_iboxtools_iboxtools_module__["a" /* IboxtoolsModule */],
            // DatePickerModule,
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* ROUTES */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_12__services_membership_service__["a" /* MembershipService */], __WEBPACK_IMPORTED_MODULE_13__services_utility_service__["a" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_14__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_15__services_requirements_service__["a" /* RequiremntService */], __WEBPACK_IMPORTED_MODULE_16__services_userList_service__["a" /* UserListService */], __WEBPACK_IMPORTED_MODULE_17__services_timeline_service__["a" /* TimelineService */], __WEBPACK_IMPORTED_MODULE_19__services_document_service__["a" /* DocumentService */],
            __WEBPACK_IMPORTED_MODULE_20__services_incubation_service__["a" /* IncubationService */],
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_dashboards_dashboard2_component__ = __webpack_require__("../../../../../src/app/views/dashboards/dashboard2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_appviews_starterview_component__ = __webpack_require__("../../../../../src/app/views/appviews/starterview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_appviews_login_component__ = __webpack_require__("../../../../../src/app/views/appviews/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_appviews_signup_component__ = __webpack_require__("../../../../../src/app/views/appviews/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_common_layouts_blankLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/blankLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_common_layouts_basicLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_appviews_clientRequirements_component__ = __webpack_require__("../../../../../src/app/views/appviews/clientRequirements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_appviews_userList_component__ = __webpack_require__("../../../../../src/app/views/appviews/userList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_appviews_incubation_quardrant_component__ = __webpack_require__("../../../../../src/app/views/appviews/incubation/quardrant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_appviews_incubation_incubation_component__ = __webpack_require__("../../../../../src/app/views/appviews/incubation/incubation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_appviews_submitted__ = __webpack_require__("../../../../../src/app/views/appviews/submitted.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_appviews_forgotPassword__ = __webpack_require__("../../../../../src/app/views/appviews/forgotPassword.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_views_appviews_confirmRegistration__ = __webpack_require__("../../../../../src/app/views/appviews/confirmRegistration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_appviews_incubation_events_component__ = __webpack_require__("../../../../../src/app/views/appviews/incubation/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_appviews_registrationNotification__ = __webpack_require__("../../../../../src/app/views/appviews/registrationNotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_appviews_clientReview__ = __webpack_require__("../../../../../src/app/views/appviews/clientReview.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
















var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // App views
    {
        path: 'dashboards', component: __WEBPACK_IMPORTED_MODULE_5__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            { path: 'dashboard2', component: __WEBPACK_IMPORTED_MODULE_0__views_dashboards_dashboard2_component__["a" /* Dashboard2Component */] }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            { path: 'starterview', component: __WEBPACK_IMPORTED_MODULE_1__views_appviews_starterview_component__["a" /* StarterViewComponent */] },
            { path: 'workItem', component: __WEBPACK_IMPORTED_MODULE_6__views_appviews_clientRequirements_component__["a" /* ClientRequirements */] },
            { path: 'eventmanager', component: __WEBPACK_IMPORTED_MODULE_13__views_appviews_incubation_events_component__["a" /* EventsComponent */] },
            { path: 'useraccess', component: __WEBPACK_IMPORTED_MODULE_7__views_appviews_userList_component__["a" /* UserListComponent */] },
            { path: 'submitted', component: __WEBPACK_IMPORTED_MODULE_10__views_appviews_submitted__["a" /* SubmittedComponent */] },
            { path: 'incubatorquardrant', component: __WEBPACK_IMPORTED_MODULE_8__views_appviews_incubation_quardrant_component__["a" /* QuardrantComponent */] },
            { path: 'incubation', component: __WEBPACK_IMPORTED_MODULE_9__views_appviews_incubation_incubation_component__["a" /* IncubationRequirementComponent */] },
            { path: 'review', component: __WEBPACK_IMPORTED_MODULE_15__views_appviews_clientReview__["a" /* ClientReviewComponent */] }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_common_layouts_blankLayout_component__["a" /* BlankLayoutComponent */],
        children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__views_appviews_login_component__["a" /* LoginComponent */] },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__views_appviews_signup_component__["a" /* SignUpComponent */] },
            { path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_11__views_appviews_forgotPassword__["a" /* ForgotPasswordComponent */] },
            { path: 'confirmaccount', component: __WEBPACK_IMPORTED_MODULE_12_app_views_appviews_confirmRegistration__["a" /* ConfirmRegistrationComponent */] },
            { path: 'registrationNotification', component: __WEBPACK_IMPORTED_MODULE_14__views_appviews_registrationNotification__["a" /* RegistrationNotificationComponent */] }
        ]
    },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/charts/flotChart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_flot_jquery_flot_js__ = __webpack_require__("../../../../../vendor/flot/jquery.flot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_flot_jquery_flot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vendor_flot_jquery_flot_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_flot_jquery_flot_tooltip_min_js__ = __webpack_require__("../../../../../vendor/flot/jquery.flot.tooltip.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_flot_jquery_flot_tooltip_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vendor_flot_jquery_flot_tooltip_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendor_flot_jquery_flot_spline_js__ = __webpack_require__("../../../../../vendor/flot/jquery.flot.spline.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendor_flot_jquery_flot_spline_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vendor_flot_jquery_flot_spline_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendor_flot_jquery_flot_time_js__ = __webpack_require__("../../../../../vendor/flot/jquery.flot.time.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendor_flot_jquery_flot_time_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__vendor_flot_jquery_flot_time_js__);
/* unused harmony export FlotChartDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Chart.js library




var FlotChartDirective = (function () {
    function FlotChartDirective(element) {
        this.initFlag = false;
        this.element = element;
    }
    // Initialise
    FlotChartDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options || this.dataset) {
            this.build();
        }
    };
    // Build
    FlotChartDirective.prototype.build = function () {
        // Clear before rebuild
        this.ngOnDestroy();
        // Check if Flot is available
        if (typeof jQuery.plot === 'undefined') {
            throw new Error('Configuration issue: Embedding jquery.flot.js lib is mandatory');
        }
        // Let's build chart
        this.chart = jQuery.plot(this.element.nativeElement, this.dataset, this.options);
    };
    // Change
    FlotChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the datasets
            if (changes.hasOwnProperty('dataset')) {
                this.updateChartData(changes['dataset'].currentValue);
            }
            else {
                // Otherwise rebuild the chart
                this.build();
            }
        }
    };
    // Update
    FlotChartDirective.prototype.updateChartData = function (newDataValues) {
        this.chart.setData(newDataValues);
        this.chart.setupGrid();
        this.chart.draw();
    };
    // Destroy
    FlotChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.shutdown();
            this.chart = void 0;
        }
    };
    // Resize
    FlotChartDirective.prototype.onResize = function () {
        this.chart.resize();
        this.chart.setupGrid();
        this.chart.draw();
    };
    return FlotChartDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotChartDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotChartDirective.prototype, "dataset", void 0);
FlotChartDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'div[flotChart]',
        exportAs: 'flot-chart',
        host: {
            '(window:resize)': 'onResize()'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], FlotChartDirective);

var FlotModule = (function () {
    function FlotModule() {
    }
    return FlotModule;
}());
FlotModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            FlotChartDirective
        ],
        exports: [
            FlotChartDirective
        ],
        imports: []
    })
], FlotModule);

var _a;
//# sourceMappingURL=flotChart.js.map

/***/ }),

/***/ "../../../../../src/app/components/charts/peity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_peity__ = __webpack_require__("../../../../peity/jquery.peity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_peity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_peity__);
/* unused harmony export PeityDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeityModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Peity chart library

var PeityDirective = (function () {
    function PeityDirective(element) {
        this.initFlag = false;
        this.element = element;
    }
    // Initialise
    PeityDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options || this.type) {
            this.build();
        }
    };
    // Build
    PeityDirective.prototype.build = function () {
        // Check if peity is available
        if (typeof jQuery(this.element).peity === 'undefined') {
            throw new Error('Configuration issue: Embedding peity lib is mandatory');
        }
        // Let's build chart
        this.chart = jQuery(this.element.nativeElement).peity(this.type, this.options);
    };
    // Change
    PeityDirective.prototype.ngOnChanges = function () {
        if (this.initFlag) {
            this.build();
        }
    };
    return PeityDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeityDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeityDirective.prototype, "type", void 0);
PeityDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'span[peity]',
        exportAs: 'peity-chart',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], PeityDirective);

var PeityModule = (function () {
    function PeityModule() {
    }
    return PeityModule;
}());
PeityModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            PeityDirective
        ],
        exports: [
            PeityDirective
        ],
        imports: []
    })
], PeityModule);

var _a;
//# sourceMappingURL=peity.js.map

/***/ }),

/***/ "../../../../../src/app/components/charts/sparkline.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export SparklineDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SparklineDirective = (function () {
    function SparklineDirective(element) {
        this.initFlag = false;
        this.element = element.nativeElement;
    }
    // Initialise
    SparklineDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options || this.datasets) {
            this.build();
        }
    };
    // Build
    SparklineDirective.prototype.build = function () {
        // Check if sparkline is available
        if (typeof jQuery(this.element).sparkline() === 'undefined') {
            throw new Error('Configuration issue: Embedding sparkline lib is mandatory');
        }
        // Let's build chart
        this.chart = jQuery(this.element).sparkline(this.datasets, this.options);
    };
    // Change
    SparklineDirective.prototype.ngOnChanges = function () {
        if (this.initFlag) {
            this.build();
        }
    };
    return SparklineDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SparklineDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SparklineDirective.prototype, "datasets", void 0);
SparklineDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'span[sparkline]',
        exportAs: 'sparkline-chart',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SparklineDirective);

var SparklineModule = (function () {
    function SparklineModule() {
    }
    return SparklineModule;
}());
SparklineModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            SparklineDirective
        ],
        exports: [
            SparklineDirective
        ],
        imports: []
    })
], SparklineModule);

var _a;
//# sourceMappingURL=sparkline.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer',
        template: __webpack_require__("../../../../../src/app/components/common/footer/footer.template.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/footer/footer.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"pull-right\">\n  </div>\n  <div>\n    <strong>Copyright</strong> Safate Incubator &copy; 2017\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/iboxtools/iboxtools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IboxtoolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IboxtoolsComponent = (function () {
    function IboxtoolsComponent() {
    }
    IboxtoolsComponent.prototype.collapse = function (e) {
        e.preventDefault();
        var ibox = jQuery(e.target).closest('div.ibox');
        var button = jQuery(e.target).closest('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    };
    IboxtoolsComponent.prototype.close = function (e) {
        e.preventDefault();
        var content = jQuery(e.target).closest('div.ibox');
        content.remove();
    };
    return IboxtoolsComponent;
}());
IboxtoolsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'iboxtools',
        template: __webpack_require__("../../../../../src/app/components/common/iboxtools/iboxtools.template.html")
    })
], IboxtoolsComponent);

//# sourceMappingURL=iboxtools.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/iboxtools/iboxtools.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iboxtools_component__ = __webpack_require__("../../../../../src/app/components/common/iboxtools/iboxtools.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IboxtoolsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IboxtoolsModule = (function () {
    function IboxtoolsModule() {
    }
    return IboxtoolsModule;
}());
IboxtoolsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__iboxtools_component__["a" /* IboxtoolsComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot()],
        exports: [__WEBPACK_IMPORTED_MODULE_3__iboxtools_component__["a" /* IboxtoolsComponent */]],
    })
], IboxtoolsModule);

//# sourceMappingURL=iboxtools.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/iboxtools/iboxtools.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ibox-tools\" dropdown>\n  <a class=\"collapse-link\" (click)=\"collapse($event)\">\n    <i class=\"fa fa-chevron-up\"></i>\n  </a>\n  <a dropdownToggle>\n    <i class=\"fa fa-wrench\"></i>\n  </a>\n  <a class=\"close-link\" (click)=\"close($event)\">\n    <i class=\"fa fa-times\"></i>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/basicLayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__("../../../../../src/app/app.helpers.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BasicLayoutComponent = (function () {
    function BasicLayoutComponent() {
    }
    BasicLayoutComponent.prototype.ngOnInit = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    BasicLayoutComponent.prototype.onResize = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    return BasicLayoutComponent;
}());
BasicLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'basic',
        template: __webpack_require__("../../../../../src/app/components/common/layouts/basicLayout.template.html"),
        host: {
            '(window:resize)': 'onResize()'
        }
    })
], BasicLayoutComponent);

//# sourceMappingURL=basicLayout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/basicLayout.template.html":
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n  <!-- Left navigation bar -->\n  <navigation></navigation>\n\n  <!-- Main page wrapper -->\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n\n    <!-- Top navigation -->\n    <topnavbar></topnavbar>\n\n    <!-- Main view/routes wrapper-->\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <footer></footer>\n\n  </div>\n  <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/blankLayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankLayoutComponent = (function () {
    function BlankLayoutComponent() {
    }
    BlankLayoutComponent.prototype.ngAfterViewInit = function () {
        jQuery('body').addClass('gray-bg');
    };
    BlankLayoutComponent.prototype.ngOnDestroy = function () {
        jQuery('body').removeClass('gray-bg');
    };
    return BlankLayoutComponent;
}());
BlankLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blank',
        template: __webpack_require__("../../../../../src/app/components/common/layouts/blankLayout.template.html")
    })
], BlankLayoutComponent);

//# sourceMappingURL=blankLayout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/blankLayout.template.html":
/***/ (function(module, exports) {

module.exports = "<!-- View/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/layouts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blankLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/blankLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topNavigationlayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/topNavigationlayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/common/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/components/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__ = __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topnavbar_topnavigationnavbar_component__ = __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavigationnavbar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LayoutsModule = (function () {
    function LayoutsModule() {
    }
    return LayoutsModule;
}());
LayoutsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__blankLayout_component__["a" /* BlankLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__topNavigationlayout_component__["a" /* TopNavigationLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topnavbar_topnavigationnavbar_component__["a" /* TopNavigationNavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__blankLayout_component__["a" /* BlankLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__topNavigationlayout_component__["a" /* TopNavigationLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topnavbar_topnavigationnavbar_component__["a" /* TopNavigationNavbarComponent */]
        ],
    })
], LayoutsModule);

//# sourceMappingURL=layouts.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/topNavigationlayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__("../../../../../src/app/app.helpers.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavigationLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopNavigationLayoutComponent = (function () {
    function TopNavigationLayoutComponent() {
    }
    TopNavigationLayoutComponent.prototype.ngOnInit = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    TopNavigationLayoutComponent.prototype.onResize = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    return TopNavigationLayoutComponent;
}());
TopNavigationLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavigationlayout',
        template: __webpack_require__("../../../../../src/app/components/common/layouts/topNavigationlayout.template.html"),
        host: {
            '(window:resize)': 'onResize()'
        }
    })
], TopNavigationLayoutComponent);

//# sourceMappingURL=topNavigationlayout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/topNavigationlayout.template.html":
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n  <!-- Main page wrapper -->\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n\n    <!-- Top navigation -->\n    <topnavigationnavbar></topnavigationnavbar>\n\n    <!-- Main view/routes wrapper-->\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <footer></footer>\n\n  </div>\n  <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ "../../../../../src/app/components/common/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_slimscroll__ = __webpack_require__("../../../../jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_slimscroll__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngAfterViewInit = function () {
        jQuery('#side-menu').metisMenu();
        if (jQuery("body").hasClass('fixed-sidebar')) {
            jQuery('.sidebar-collapse').slimscroll({
                height: '100%'
            });
        }
    };
    NavigationComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        this.user = user;
    };
    NavigationComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navigation',
        template: __webpack_require__("../../../../../src/app/components/common/navigation/navigation.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/navigation/navigation.template.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n  <div class=\"sidebar-collapse\">\n    <ul class=\"nav metismenu\" id=\"side-menu\">\n      <li class=\"nav-header\">\n        <div class=\"profile-element\" dropdown>\n          <img alt=\"image\" class=\"img-circle\" src=\"\">\n          <a dropdownToggle>\n            <span class=\"block m-t-xs\"> <strong class=\"font-bold\">David Williams</strong> </span>\n            <span class=\"text-muted text-xs block\">Art Director <b class=\"caret\"></b> </span>\n          </a>\n          <ul class=\"animated fadeInRight dropdown-menu\" *dropdownMenu>\n            <li><a href=\"#\">Profile</a></li>\n            <li><a href=\"#\">Contacts</a></li>\n            <li><a href=\"#\">Mailbox</a></li>\n            <li class=\"divider\"></li>\n            <li><a href=\"#\">Logout</a></li>\n          </ul>\n        </div>\n        <div class=\"logo-element\">\n          IN+\n        </div>\n      </li>\n      <li *ngIf=\"user.role==2 || user.role==2\" [ngClass]=\"{active: activeRoute('starterview')}\">\n        <a [routerLink]=\"['/starterview']\"><i class=\"fa fa-flask\"></i> <span class=\"nav-label\"> My Workbench</span></a>\n      </li>\n      <li *ngIf=\"user==null\" [ngClass]=\"{active: activeRoute('login')}\">\n        <a [routerLink]=\"['/login']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Login</span></a>\n      </li>\n      <li *ngIf=\"user.role==1003\" [ngClass]=\"{active: activeRoute('useraccess')}\">\n        <a [routerLink]=\"['/useraccess']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">User Access</span></a>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('eventmanager')}\">\n        <a [routerLink]=\"['/eventmanager']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Event Manager</span></a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/topnavbar/topnavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__("../../../../../src/app/app.helpers.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopNavbarComponent = (function () {
    function TopNavbarComponent() {
    }
    TopNavbarComponent.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["b" /* smoothlyMenu */])();
    };
    TopNavbarComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        this.user = user;
    };
    return TopNavbarComponent;
}());
TopNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavbar',
        template: __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavbar.template.html")
    })
], TopNavbarComponent);

//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/topnavbar/topnavbar.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n      <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n    </div>\n    <ul class=\"nav navbar-top-links navbar-right\">\n      <li>\n        <a href=\"#\">\n          <i class=\"fa fa-sign-out\"></i> Log out\n        </a>\n      </li>\n    </ul>\n\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/topnavbar/topnavigationnavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__("../../../../../src/app/app.helpers.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavigationNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopNavigationNavbarComponent = (function () {
    function TopNavigationNavbarComponent() {
    }
    TopNavigationNavbarComponent.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["b" /* smoothlyMenu */])();
    };
    return TopNavigationNavbarComponent;
}());
TopNavigationNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavigationnavbar',
        template: __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavigationnavbar.template.html")
    })
], TopNavigationNavbarComponent);

//# sourceMappingURL=topnavigationnavbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/topnavbar/topnavigationnavbar.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom white-bg\">\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <button aria-controls=\"navbar\" aria-expanded=\"false\" data-target=\"#navbar\" data-toggle=\"collapse\" class=\"navbar-toggle collapsed\" type=\"button\">\n        <i class=\"fa fa-reorder\"></i>\n      </button>\n      <a href=\"#\" class=\"navbar-brand\">Inspinia</a>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"navbar\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a aria-expanded=\"false\" role=\"button\" [routerLink]=\"['/layoutsview']\"> Back to main Layout page</a>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\"  dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-top-links navbar-right\">\n        <li>\n          <a href=\"login.html\">\n            <i class=\"fa fa-sign-out\"></i> Log out\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/map/jvectorMap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_jvectormap_jquery_jvectormap_min_js__ = __webpack_require__("../../../../jvectormap/jquery-jvectormap.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_jvectormap_jquery_jvectormap_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_jvectormap_jquery_jvectormap_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_jvectormap_tests_assets_jquery_jvectormap_world_mill_en_js__ = __webpack_require__("../../../../jvectormap/tests/assets/jquery-jvectormap-world-mill-en.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_jvectormap_tests_assets_jquery_jvectormap_world_mill_en_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_jvectormap_tests_assets_jquery_jvectormap_world_mill_en_js__);
/* unused harmony export JVectorMapDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JVectorMapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Chart.js library


var JVectorMapDirective = (function () {
    function JVectorMapDirective(element) {
        this.initFlag = false;
        this.element = element;
    }
    // Initialise
    JVectorMapDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options) {
            this.build();
        }
    };
    // Build
    JVectorMapDirective.prototype.build = function () {
        // Clear before rebuild
        this.ngOnDestroy();
        // Check if Flot is available
        if (typeof jQuery(this.element.nativeElement).vectorMap === 'undefined') {
            throw new Error('Configuration issue: Embedding jvectormap lib is mandatory');
        }
        // Let's build chart
        this.map = jQuery(this.element.nativeElement).vectorMap(this.options);
    };
    // Change
    JVectorMapDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            this.build();
        }
    };
    // Destroy
    JVectorMapDirective.prototype.ngOnDestroy = function () {
        if (this.map) {
            this.map.remove();
        }
    };
    return JVectorMapDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JVectorMapDirective.prototype, "options", void 0);
JVectorMapDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'div[jvectormap]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], JVectorMapDirective);

var JVectorMapModule = (function () {
    function JVectorMapModule() {
    }
    return JVectorMapModule;
}());
JVectorMapModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            JVectorMapDirective
        ],
        exports: [
            JVectorMapDirective
        ],
        imports: []
    })
], JVectorMapModule);

var _a;
//# sourceMappingURL=jvectorMap.js.map

/***/ }),

/***/ "../../../../../src/app/requirements/BaseComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
var BaseComponent = (function () {
    function BaseComponent() {
    }
    return BaseComponent;
}());

//# sourceMappingURL=BaseComponent.js.map

/***/ }),

/***/ "../../../../../src/app/requirements/fieldSetGroup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseComponent__ = __webpack_require__("../../../../../src/app/requirements/BaseComponent.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldSetGroup; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var FieldSetGroup = (function (_super) {
    __extends(FieldSetGroup, _super);
    function FieldSetGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FieldSetGroup;
}(__WEBPACK_IMPORTED_MODULE_0__BaseComponent__["a" /* BaseComponent */]));

//# sourceMappingURL=fieldSetGroup.js.map

/***/ }),

/***/ "../../../../../src/app/requirements/incubation/incubatorRequirement.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncubatorRequirement; });
var IncubatorRequirement = (function () {
    function IncubatorRequirement() {
    }
    return IncubatorRequirement;
}());

//# sourceMappingURL=incubatorRequirement.js.map

/***/ }),

/***/ "../../../../../src/app/requirements/incubation/quardrantQuarter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuardrantQuarter; });
var QuardrantQuarter = (function () {
    function QuardrantQuarter() {
    }
    return QuardrantQuarter;
}());

//# sourceMappingURL=quardrantQuarter.js.map

/***/ }),

/***/ "../../../../../src/app/requirements/incubation/quarterMilestone.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuarterMilestone; });
var QuarterMilestone = (function () {
    function QuarterMilestone() {
    }
    return QuarterMilestone;
}());

//# sourceMappingURL=quarterMilestone.js.map

/***/ }),

/***/ "../../../../../src/app/requirements/incubation/workItemIncubatorComments.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkItemIncubatorComments; });
var WorkItemIncubatorComments = (function () {
    function WorkItemIncubatorComments() {
    }
    return WorkItemIncubatorComments;
}());

//# sourceMappingURL=workItemIncubatorComments.js.map

/***/ }),

/***/ "../../../../../src/app/requirements/stageUpdate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StageUpdateView; });
var StageUpdateView = (function () {
    function StageUpdateView() {
    }
    return StageUpdateView;
}());

//# sourceMappingURL=stageUpdate.js.map

/***/ }),

/***/ "../../../../../src/app/requirements/workItemGrid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkItemGridView; });
var WorkItemGridView = (function () {
    function WorkItemGridView() {
    }
    return WorkItemGridView;
}());

//# sourceMappingURL=workItemGrid.js.map

/***/ }),

/***/ "../../../../../src/app/requirements/workItemRequirement.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkItemRequirements; });
var WorkItemRequirements = (function () {
    function WorkItemRequirements() {
    }
    return WorkItemRequirements;
}());

//# sourceMappingURL=workItemRequirement.js.map

/***/ }),

/***/ "../../../../../src/app/requirements/workItemStage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseComponent__ = __webpack_require__("../../../../../src/app/requirements/BaseComponent.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkItemStage; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var WorkItemStage = (function (_super) {
    __extends(WorkItemStage, _super);
    function WorkItemStage() {
        var _this = _super.call(this) || this;
        _this.rejectionReasonViews = [];
        return _this;
    }
    return WorkItemStage;
}(__WEBPACK_IMPORTED_MODULE_0__BaseComponent__["a" /* BaseComponent */]));

//# sourceMappingURL=workItemStage.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.prepareOptions = function (options) {
            options = options || {};
            if (!options.headers) {
                options.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]();
            }
            options.headers.append('Content-Type', 'application/json');
            return options;
        };
    }
    DataService.prototype.set = function (baseUri, pageSize) {
        this._baseUri = baseUri;
        this._pageSize = pageSize;
    };
    DataService.prototype.get = function (page) {
        var uri = this._baseUri;
        var options = this.prepareOptions(null);
        return this.http.get(uri, options)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.post = function (data, mapJson) {
        if (mapJson === void 0) { mapJson = true; }
        var options = this.prepareOptions(null);
        if (mapJson)
            return this.http.post(this._baseUri, data, options)
                .map(function (response) { return response.json(); });
        else
            return this.http.post(this._baseUri, data);
    };
    DataService.prototype.postReq = function (data, mapJson) {
        if (mapJson === void 0) { mapJson = true; }
        var options = this.prepareOptions(null);
        return this.http.post(this._baseUri, data, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    DataService.prototype.put = function (data, mapJson) {
        if (mapJson === void 0) { mapJson = true; }
        var options = this.prepareOptions(null);
        if (mapJson)
            return this.http.put(this._baseUri, data, options)
                .map(function (response) { return response.json(); });
        else
            return this.http.post(this._baseUri, data);
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this._baseUri + '/' + id.toString())
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.deleteResource = function (resource) {
        return this.http.delete(resource)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/document.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentService = (function () {
    function DocumentService(requirementService, http) {
        this.requirementService = requirementService;
        this.http = http;
        this._updateDocumentStatusAPI = 'http://localhost:63020/api/document/updateStatus';
        this.prepareOptions = function (options) {
            options = options || {};
            if (!options.headers) {
                options.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            }
            options.headers.append('Content-Type', 'application/json');
            return options;
        };
    }
    DocumentService.prototype.updateItemStatus = function (workItem) {
        this.requirementService.set(this._updateDocumentStatusAPI);
        return this.requirementService.put(JSON.stringify(workItem));
    };
    return DocumentService;
}());
DocumentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], DocumentService);

var _a, _b;
//# sourceMappingURL=document.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/incubation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncubationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncubationService = (function () {
    function IncubationService(requirementService, http) {
        this.requirementService = requirementService;
        this.http = http;
        this._incubationRequirementAPI = 'http://localhost:63020/api/incubation/requirement/';
        this._updateincubationRequirementAPI = 'http://localhost:63020/api/incubation/updateQuardrant';
        this._incubationAddcommentAPI = 'http://localhost:63020/api/incubation/addCommentt';
        this._incubationAddMilestoneAPI = 'http://localhost:63020/api/incubation/addMilestone';
        this._incubationAddQuarterAPI = 'http://localhost:63020/api/incubation/addQuarter';
    }
    IncubationService.prototype.requirement = function (newUser) {
        this.requirementService.set(this._incubationRequirementAPI);
        return this.requirementService.post(JSON.stringify(newUser));
    };
    IncubationService.prototype.updateQuardrant = function (newUser) {
        this.requirementService.set(this._updateincubationRequirementAPI);
        return this.requirementService.put(newUser);
    };
    IncubationService.prototype.addComment = function (comment) {
        this.requirementService.set(this._incubationAddcommentAPI);
        return this.requirementService.post(JSON.stringify(comment));
    };
    IncubationService.prototype.addMilestone = function (comment) {
        this.requirementService.set(this._incubationAddMilestoneAPI);
        return this.requirementService.post(JSON.stringify(comment));
    };
    IncubationService.prototype.addQuarter = function (quarter) {
        this.requirementService.set(this._incubationAddQuarterAPI);
        return this.requirementService.post(JSON.stringify(quarter));
    };
    return IncubationService;
}());
IncubationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], IncubationService);

var _a, _b;
//# sourceMappingURL=incubation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/membership.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_account_user__ = __webpack_require__("../../../../../src/app/views/account/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MembershipService = (function () {
    function MembershipService(accountService) {
        this.accountService = accountService;
        this._accountRegisterAPI = 'http://localhost:63020/api/account/register/';
        this._accountLoginAPI = 'http://localhost:63020/api/account/authenticate/';
        this._accountLogoutAPI = 'http://localhost:63020/api/account/logout/';
        this._accountUpdatePasswordAPI = 'http://localhost:63020/api/account/updatePassword/';
        this._accountUnlockUserAPI = 'http://localhost:63020/api/account/unlock/';
    }
    MembershipService.prototype.register = function (newUser) {
        this.accountService.set(this._accountRegisterAPI);
        return this.accountService.post(JSON.stringify(newUser));
    };
    MembershipService.prototype.login = function (creds) {
        this.accountService.set(this._accountLoginAPI);
        return this.accountService.post(JSON.stringify(creds));
    };
    MembershipService.prototype.logout = function () {
        this.accountService.set(this._accountLogoutAPI);
        return this.accountService.post(null, false);
    };
    MembershipService.prototype.isUserAuthenticated = function () {
        var _user = localStorage.getItem('user');
        if (_user != null)
            return true;
        else
            return false;
    };
    MembershipService.prototype.getLoggedInUser = function () {
        var _user;
        if (this.isUserAuthenticated()) {
            var _userData = JSON.parse(localStorage.getItem('user'));
            _user = new __WEBPACK_IMPORTED_MODULE_2__views_account_user__["a" /* User */](_userData.Username, _userData.Password);
        }
        return _user;
    };
    MembershipService.prototype.updatePassword = function (passwordReset) {
        this.accountService.set(this._accountUpdatePasswordAPI);
        return this.accountService.post(JSON.stringify(passwordReset));
    };
    MembershipService.prototype.unlockUser = function (confirm) {
        this.accountService.set(this._accountUnlockUserAPI);
        return this.accountService.post(JSON.stringify(confirm));
    };
    return MembershipService;
}());
MembershipService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], MembershipService);

var _a;
//# sourceMappingURL=membership.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.printSuccessMessage = function (message) {
        this._notifier.success(message);
    };
    NotificationService.prototype.printErrorMessage = function (message) {
        this._notifier.error(message);
    };
    NotificationService.prototype.printConfirmationDialog = function (message, okCallback) {
        this._notifier.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/requirements.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequiremntService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequiremntService = (function () {
    function RequiremntService(requirementService, http) {
        this.requirementService = requirementService;
        this.http = http;
        this._workitemRequirementAPI = 'http://localhost:63020/api/workItem/requirement/';
        this._updateWorkitemRequirementAPI = 'http://localhost:63020/api/workItem/updateWorkItemRequirements';
        this._updateWorkitemStatusAPI = 'http://localhost:63020/api/workItem/updateStatus';
        this._saveWorkitemDocumentAPI = 'http://localhost:63020/api/workItem/uploadDocument';
        this._downloadWorkitemDocumentAPI = 'http://localhost:63020/api/workItem/';
        this._submitWorkitemAPI = 'http://localhost:63020/api/workItem/submit';
        this.prepareOptions = function (options) {
            options = options || {};
            if (!options.headers) {
                options.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            }
            options.headers.append('Content-Type', 'application/json');
            return options;
        };
    }
    RequiremntService.prototype.requirement = function (newUser) {
        this.requirementService.set(this._workitemRequirementAPI);
        return this.requirementService.post(JSON.stringify(newUser));
    };
    RequiremntService.prototype.updateRequirement = function (newUser) {
        this.requirementService.set(this._updateWorkitemRequirementAPI);
        return this.requirementService.put(newUser);
    };
    RequiremntService.prototype.upload = function (fileToUpload, field) {
        var input = new FormData();
        // const options = this.prepareOptions(null);
        input.append('file', fileToUpload);
        input.append('field', JSON.stringify(field));
        // const data: DocumentField = new DocumentField(field, input);
        return this.http
            .post(this._saveWorkitemDocumentAPI, input);
    };
    RequiremntService.prototype.updateItemStatus = function (workItem) {
        this.requirementService.set(this._updateWorkitemStatusAPI);
        return this.requirementService.put(JSON.stringify(workItem));
    };
    RequiremntService.prototype.submitWorkItem = function (workItem) {
        this.requirementService.set(this._submitWorkitemAPI);
        return this.requirementService.put(JSON.stringify(workItem));
    };
    RequiremntService.prototype.getTestPdfFile = function (document) {
        var url = this._downloadWorkitemDocumentAPI;
        return this.http.post(url, JSON.stringify(document), { responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* ResponseContentType */].Blob })
            .map(function (res) { return res.blob(); });
    };
    RequiremntService.prototype.downloadBlaBlasCSV = function (document) {
        var options = { responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* ResponseContentType */].ArrayBuffer };
        return this.http.post(this._downloadWorkitemDocumentAPI, JSON.stringify(document), options)
            .map(function (res) { return res['_body']; })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err.json()); });
    };
    RequiremntService.prototype.GetDownloadfileUrl = function (id) {
        return "" + this._downloadWorkitemDocumentAPI + id;
    };
    return RequiremntService;
}());
RequiremntService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], RequiremntService);

var _a, _b;
//# sourceMappingURL=requirements.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/timeline.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimelineService = (function () {
    function TimelineService(workItemService, http) {
        this.workItemService = workItemService;
        this.http = http;
        this._workitemGridAPI = 'http://localhost:63020/api/workItem/workItems';
    }
    TimelineService.prototype.workItemGrid = function () {
        this.workItemService.set(this._workitemGridAPI);
        return this.workItemService.get(10);
    };
    return TimelineService;
}());
TimelineService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], TimelineService);

var _a, _b;
//# sourceMappingURL=timeline.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/userList.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_account_registration__ = __webpack_require__("../../../../../src/app/views/account/registration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserListService = (function () {
    function UserListService(_http, userServive) {
        this._http = _http;
        this.userServive = userServive;
        this._saveUrl = 'http://localhost:63020/api/userList/PostUser/';
        this._updateUrl = 'http://localhost:63020/api/userList/PutUser/';
        this._getUrl = 'http://localhost:63020/api/userList/getUsers';
        this._getByIdUrl = 'http://localhost:63020/api/userList/GetUserByID/';
        this._deleteByIdUrl = 'http://localhost:63020/api/userList/DeleteUserByID/';
        this._getRolesUrl = 'http://localhost:63020/api/userList/getRoles';
        this.prepareOptions = function (options) {
            options = options || {};
            if (!options.headers) {
                options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
            }
            options.headers.append('Content-Type', 'application/json');
            return options;
        };
    }
    //Get
    UserListService.prototype.getUsers = function () {
        this.userServive.set(this._getUrl);
        return this.userServive.post(new __WEBPACK_IMPORTED_MODULE_4__views_account_registration__["a" /* Registration */]('11', '11', '11', '11'));
    };
    UserListService.prototype.getRole = function () {
        this.userServive.set(this._getRolesUrl);
        return this.userServive.get(10);
    };
    //GetByID
    UserListService.prototype.getUserByID = function (id) {
        //debugger
        var getByIdUrl = this._getByIdUrl + '/' + id;
        return this._http.get(getByIdUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //Post
    UserListService.prototype.saveUser = function (user) {
        this.userServive.set(this._saveUrl);
        return this.userServive.post(JSON.stringify(user));
    };
    //Put
    UserListService.prototype.updateUser = function (contact, id) {
        //debugger
        var updateUrl = this._updateUrl + '/' + id;
        var body = JSON.stringify(contact);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //http.post(url: string, body: string, options ?: RequestOptionsArgs): Observable<Response>
        return this._http.put(updateUrl, body, { headers: headers })
            .map(function (response) { return response.json().message; })
            .catch(this.handleError);
    };
    //Delete
    UserListService.prototype.deleteUser = function (id) {
        //debugger
        var deleteByIdUrl = this._deleteByIdUrl + '/' + id;
        //http.post(url: string, options ?: RequestOptionsArgs): Observable<Response>
        return this._http.delete(deleteByIdUrl)
            .map(function (response) { return response.json().message; })
            .catch(this.handleError);
    };
    UserListService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Opps!! Server error');
    };
    return UserListService;
}());
UserListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object])
], UserListService);

var _a, _b;
//# sourceMappingURL=userList.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilityService = (function () {
    function UtilityService(router) {
        this._router = router;
    }
    UtilityService.prototype.convertDateTime = function (date) {
        var _formattedDate = new Date(date.toString());
        return _formattedDate.toDateString();
    };
    UtilityService.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    UtilityService.prototype.navigateToSignIn = function () {
        this.navigate('/account/login');
    };
    return UtilityService;
}());
UtilityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], UtilityService);

var _a;
//# sourceMappingURL=utility.service.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/GridPage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridPageResul; });
var GridPageResul = (function () {
    function GridPageResul() {
        this.data = [];
    }
    return GridPageResul;
}());

//# sourceMappingURL=GridPage.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/calculationManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationManager; });
var CalculationManager = (function () {
    function CalculationManager() {
    }
    CalculationManager.calculateProfitmargin = function (profitaftertax, revenue) {
        return profitaftertax / revenue;
    };
    CalculationManager.calculateGrossProfitMargin = function (revenueCostofProduction, revenue) {
        return revenueCostofProduction / revenue;
    };
    CalculationManager.calculateCashGeneratingAbilityRatio = function (cashGeneratedFromOperations, EBITDA) {
        return cashGeneratedFromOperations / EBITDA;
    };
    CalculationManager.calculateDebtorsDays = function (accountsReceivables, revenue) {
        return (accountsReceivables / revenue) * 365;
    };
    CalculationManager.calculateCreditorsDays = function (accountsPayable, costOfProduction) {
        return (accountsPayable / costOfProduction) * 365;
    };
    CalculationManager.calculateInventoryDays = function (inventory, costOfProduction) {
        return (inventory / costOfProduction) * 365;
    };
    CalculationManager.calculateSolvencyTest = function (totalAsset, totalLiabilities) {
        return totalAsset / totalLiabilities;
    };
    CalculationManager.calculateLiquidityTest = function (currentAsset, currentLiabilities) {
        return currentAsset / currentLiabilities;
    };
    CalculationManager.calculateAcidTest = function (currentAsset, inventory) {
        return currentAsset - inventory;
    };
    CalculationManager.calculateGearing = function (totalLiabilities, totalEquity) {
        return totalLiabilities / totalEquity;
    };
    CalculationManager.calculateReturnOnEquity = function (profitaftertax, totalEquity) {
        return profitaftertax / totalEquity;
    };
    return CalculationManager;
}());

//# sourceMappingURL=calculationManager.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/collapsible.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collapse; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Collapse = (function () {
    function Collapse() {
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    Object.defineProperty(Collapse.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    Collapse.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    Collapse.prototype.hide = function () {
        var _this = this;
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        setTimeout(function () {
            _this.height = '0';
            _this.isCollapse = true;
            _this.isCollapsing = false;
        }, 5000);
    };
    Collapse.prototype.show = function () {
        var _this = this;
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        setTimeout(function () {
            _this.height = 'auto';
            _this.isCollapse = true;
            _this.isCollapsing = false;
        }, 5000);
    };
    return Collapse;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.height'),
    __metadata("design:type", String)
], Collapse.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.in'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.aria-expanded'),
    __metadata("design:type", Boolean)
], Collapse.prototype, "isExpanded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.aria-hidden'),
    __metadata("design:type", Boolean)
], Collapse.prototype, "isCollapsed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.collapse'),
    __metadata("design:type", Boolean)
], Collapse.prototype, "isCollapse", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.collapsing'),
    __metadata("design:type", Boolean)
], Collapse.prototype, "isCollapsing", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Collapse.prototype, "collapse", null);
Collapse = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'd-collapse' }),
    __metadata("design:paramtypes", [])
], Collapse);

//# sourceMappingURL=collapsible.directive.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/component.html/tabset.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\r\n        <li *ngFor =\"let tabz of tabs\" class=\"nav-item\"\r\n          [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\r\n          <a href class=\"nav-link\" data-toggle=\"tab\"\r\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\r\n            (click)=\"tabz.active = true\">\r\n            <span ngTransclude=\"tabz.headingRef\">{{tabz.heading}}</span>\r\n          </a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"tab-content\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/utilities/operationResult.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationResult; });
var OperationResult = (function () {
    function OperationResult(succeeded, message) {
        this.succeeded = succeeded;
        this.message = message;
    }
    return OperationResult;
}());

//# sourceMappingURL=operationResult.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/search/statusRecord.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusRecord; });
var StatusRecord = (function () {
    function StatusRecord() {
    }
    return StatusRecord;
}());

//# sourceMappingURL=statusRecord.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/search/statusReport.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusReport; });
var StatusReport = (function () {
    function StatusReport() {
        this.statusRecord = [];
    }
    return StatusReport;
}());

//# sourceMappingURL=statusReport.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/sefate.constants.Lists.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonLists; });
var CommonLists = (function () {
    function CommonLists() {
    }
    CommonLists.prototype.setReasons = function (rejectionReasons) {
        this.RejectionReasons = rejectionReasons;
    };
    return CommonLists;
}());

//# sourceMappingURL=sefate.constants.Lists.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/tab-heading.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_directive__ = __webpack_require__("../../../../../src/app/utilities/tab.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHeading; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabHeading = (function () {
    function TabHeading(templateRef, tab) {
        this.templateRef = templateRef;
        tab.headingRef = templateRef;
    }
    return TabHeading;
}());
TabHeading = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[tab-heading]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__tab_directive__["a" /* Tab */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tab_directive__["a" /* Tab */]) === "function" && _b || Object])
], TabHeading);

var _a, _b;
//# sourceMappingURL=tab-heading.directive.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/tab.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_component__ = __webpack_require__("../../../../../src/app/utilities/tabset.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tab = (function () {
    function Tab(tabset) {
        this.tabset = tabset;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addClass = true;
        this.tabset.addTab(this);
    }
    Object.defineProperty(Tab.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if (this.disabled && active || !active) {
                if (!active) {
                    this._active = active;
                }
                this.deselect.emit(this);
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Tab.prototype.ngOnInit = function () {
        this.removable = !!this.removable;
    };
    Tab.prototype.ngOnDestroy = function () {
        this.tabset.removeTab(this);
    };
    return Tab;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Tab.prototype, "heading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Tab.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Tab.prototype, "removable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.active'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Tab.prototype, "active", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], Tab.prototype, "select", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], Tab.prototype, "deselect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], Tab.prototype, "removed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.tab-pane'),
    __metadata("design:type", Object)
], Tab.prototype, "addClass", void 0);
Tab = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'tab, [tab]' }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__tabset_component__["a" /* Tabset */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tabset_component__["a" /* Tabset */]) === "function" && _d || Object])
], Tab);

var _a, _b, _c, _d;
//# sourceMappingURL=tab.directive.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/tabset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabset; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tabset = (function () {
    function Tabset() {
        this.tabs = [];
        this.classMap = {};
    }
    Object.defineProperty(Tabset.prototype, "vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Tabset.prototype, "justified", {
        get: function () {
            return this._justified;
        },
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Tabset.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Tabset.prototype.setClassMap = function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'nav-justified': this.justified
            },
            _a['nav-' + (this.type || 'tabs')] = true,
            _a);
        var _a;
    };
    Tabset.prototype.ngOnInit = function () {
        this.type = this.type !== 'undefined' ? this.type : 'tabs';
    };
    Tabset.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    Tabset.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    Tabset.prototype.removeTab = function (tab) {
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    };
    Tabset.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    Tabset.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    return Tabset;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Tabset.prototype, "vertical", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Tabset.prototype, "justified", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Tabset.prototype, "type", null);
Tabset = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tabset',
        template: __webpack_require__("../../../../../src/app/utilities/component.html/tabset.component.html")
    }),
    __metadata("design:paramtypes", [])
], Tabset);

//# sourceMappingURL=tabset.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgTransclude; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var NgTransclude = (function () {
    function NgTransclude(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTransclude.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgTransclude;
}());
NgTransclude = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'ngTransclude'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
], NgTransclude);

var _a;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customvalidators; });
var Customvalidators = (function () {
    function Customvalidators() {
    }
    Customvalidators.emailValidator = function (control) {
        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return { 'invalidEmailAddress': true };
        }
    };
    return Customvalidators;
}());

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ "../../../../../src/app/views/account/confirmAccount.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmAccount; });
var ConfirmAccount = (function () {
    function ConfirmAccount() {
    }
    return ConfirmAccount;
}());

//# sourceMappingURL=confirmAccount.js.map

/***/ }),

/***/ "../../../../../src/app/views/account/registration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registration; });
var Registration = (function () {
    function Registration(username, password, email, fullname) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.fullname = fullname;
    }
    return Registration;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ "../../../../../src/app/views/account/resetPassword.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassword; });
var ResetPassword = (function () {
    function ResetPassword(email, password, confirm) {
        this.email = email;
        this.newPassword = password;
        this.confirmPassword = confirm;
    }
    return ResetPassword;
}());

//# sourceMappingURL=resetPassword.js.map

/***/ }),

/***/ "../../../../../src/app/views/account/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password) {
        this.Username = username;
        this.Password = password;
        this.RememberMe = false;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/appviews.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__starterview_component__ = __webpack_require__("../../../../../src/app/views/appviews/starterview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("../../../../../src/app/views/appviews/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_component__ = __webpack_require__("../../../../../src/app/views/appviews/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clientRequirements_component__ = __webpack_require__("../../../../../src/app/views/appviews/clientRequirements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_charts_peity__ = __webpack_require__("../../../../../src/app/components/charts/peity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_charts_sparkline__ = __webpack_require__("../../../../../src/app/components/charts/sparkline.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utilities_tab_directive__ = __webpack_require__("../../../../../src/app/utilities/tab.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utilities_tabset_component__ = __webpack_require__("../../../../../src/app/utilities/tabset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utilities_tab_heading_directive__ = __webpack_require__("../../../../../src/app/utilities/tab-heading.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utilities_utils__ = __webpack_require__("../../../../../src/app/utilities/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fieldSetGroup_component__ = __webpack_require__("../../../../../src/app/views/appviews/fieldSetGroup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utilities_collapsible_directive__ = __webpack_require__("../../../../../src/app/utilities/collapsible.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__userList_component__ = __webpack_require__("../../../../../src/app/views/appviews/userList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__timeline_component__ = __webpack_require__("../../../../../src/app/views/appviews/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_common_iboxtools_iboxtools_module__ = __webpack_require__("../../../../../src/app/components/common/iboxtools/iboxtools.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__submitted__ = __webpack_require__("../../../../../src/app/views/appviews/submitted.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__incubation_incubation_component__ = __webpack_require__("../../../../../src/app/views/appviews/incubation/incubation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__incubation_quardrant_component__ = __webpack_require__("../../../../../src/app/views/appviews/incubation/quardrant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__forgotPassword__ = __webpack_require__("../../../../../src/app/views/appviews/forgotPassword.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_views_appviews_confirmRegistration__ = __webpack_require__("../../../../../src/app/views/appviews/confirmRegistration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__incubation_events_component__ = __webpack_require__("../../../../../src/app/views/appviews/incubation/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ap_angular2_fullcalendar__ = __webpack_require__("../../../../ap-angular2-fullcalendar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ap_angular2_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ap_angular2_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__registrationNotification__ = __webpack_require__("../../../../../src/app/views/appviews/registrationNotification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__clientReview__ = __webpack_require__("../../../../../src/app/views/appviews/clientReview.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppviewsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppviewsModule = (function () {
    function AppviewsModule() {
    }
    return AppviewsModule;
}());
AppviewsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__starterview_component__["a" /* StarterViewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__signup_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_7__clientRequirements_component__["a" /* ClientRequirements */],
            __WEBPACK_IMPORTED_MODULE_17__userList_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__utilities_tab_directive__["a" /* Tab */],
            __WEBPACK_IMPORTED_MODULE_12__utilities_tabset_component__["a" /* Tabset */],
            __WEBPACK_IMPORTED_MODULE_13__utilities_tab_heading_directive__["a" /* TabHeading */],
            __WEBPACK_IMPORTED_MODULE_14__utilities_utils__["a" /* NgTransclude */],
            __WEBPACK_IMPORTED_MODULE_15__fieldSetGroup_component__["a" /* FieldSetGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__utilities_collapsible_directive__["a" /* Collapse */],
            __WEBPACK_IMPORTED_MODULE_18__timeline_component__["a" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_20__submitted__["a" /* SubmittedComponent */],
            __WEBPACK_IMPORTED_MODULE_21__incubation_incubation_component__["a" /* IncubationRequirementComponent */],
            __WEBPACK_IMPORTED_MODULE_22__incubation_quardrant_component__["a" /* QuardrantComponent */],
            __WEBPACK_IMPORTED_MODULE_23__forgotPassword__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_24_app_views_appviews_confirmRegistration__["a" /* ConfirmRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_25__incubation_events_component__["a" /* EventsComponent */],
            __WEBPACK_IMPORTED_MODULE_26_ap_angular2_fullcalendar__["CalendarComponent"],
            __WEBPACK_IMPORTED_MODULE_27__registrationNotification__["a" /* RegistrationNotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_28__clientReview__["a" /* ClientReviewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_charts_peity__["a" /* PeityModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_charts_sparkline__["a" /* SparklineModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_19__components_common_iboxtools_iboxtools_module__["a" /* IboxtoolsModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__starterview_component__["a" /* StarterViewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__signup_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_7__clientRequirements_component__["a" /* ClientRequirements */],
            __WEBPACK_IMPORTED_MODULE_17__userList_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__timeline_component__["a" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_11__utilities_tab_directive__["a" /* Tab */],
            __WEBPACK_IMPORTED_MODULE_12__utilities_tabset_component__["a" /* Tabset */],
            __WEBPACK_IMPORTED_MODULE_13__utilities_tab_heading_directive__["a" /* TabHeading */],
            __WEBPACK_IMPORTED_MODULE_14__utilities_utils__["a" /* NgTransclude */],
            __WEBPACK_IMPORTED_MODULE_15__fieldSetGroup_component__["a" /* FieldSetGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__utilities_collapsible_directive__["a" /* Collapse */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_20__submitted__["a" /* SubmittedComponent */],
            __WEBPACK_IMPORTED_MODULE_21__incubation_incubation_component__["a" /* IncubationRequirementComponent */],
            __WEBPACK_IMPORTED_MODULE_22__incubation_quardrant_component__["a" /* QuardrantComponent */],
            __WEBPACK_IMPORTED_MODULE_23__forgotPassword__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_24_app_views_appviews_confirmRegistration__["a" /* ConfirmRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_25__incubation_events_component__["a" /* EventsComponent */],
            __WEBPACK_IMPORTED_MODULE_26_ap_angular2_fullcalendar__["CalendarComponent"],
            __WEBPACK_IMPORTED_MODULE_27__registrationNotification__["a" /* RegistrationNotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_28__clientReview__["a" /* ClientReviewComponent */]
        ],
    })
], AppviewsModule);

//# sourceMappingURL=appviews.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/clientRequirements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-4\">\r\n    <h2>Create Company Profile</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a [routerLink]=\"['/starterview']\">Home</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Basic Information</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-lg-8 stages\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-2\" *ngFor=\"let stage of workItemRequirement.workItemStages\">\r\n        <span [ngClass]=\"stage.isActive ? 'label label-success label-xs tag' : 'label label-default label-xs tag'\" class=\"\">{{stage.stage}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"wrapper wrapper-content animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div id=\"nestable-menu\">\r\n        <button [disabled]=\"!workItemRequirement.isValid\" class=\"btn btn-primary btn-sm\" (click)=\"onSubmit()\" type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Submit</button>\r\n        <button class=\"btn btn-info btn-sm\" (click)=\"UpdateRequirement()\" type=\"button\"><i class=\"fa fa-paste\"></i> Save Changes</button>\r\n      </div>\r\n    </div>\r\n    <div [hidden]=\"true\" class=\"col-md-6\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"ibox\" id=\"ibox2\">\r\n    <div class=\"ibox-content\">\r\n      <div class=\"sk-spinner sk-spinner-wave\">\r\n        <div class=\"sk-rect1\"></div>\r\n        <div class=\"sk-rect2\"></div>\r\n        <div class=\"sk-rect3\"></div>\r\n        <div class=\"sk-rect4\"></div>\r\n        <div class=\"sk-rect5\"></div>\r\n      </div>\r\n      <div class=\"row\" id=\"ibox1\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"tabs-container\">\r\n            <tabset>\r\n              <tab *ngFor=\" let requirementTab of workItemRequirement.requirementsTabs\" [heading]=\"requirementTab.name\" [active]=\"requirementTab.active\"\r\n                (select)=\"requirementTab.active = true\" (deselect)=\"requirementTab.active = false\">\r\n                <div class=\"jumbotron\" *ngFor=\" let fieldsetGroup of requirementTab.fieldSetGroups\">\r\n                  <div class=\"wrapper wrapper-content animated fadeInRight\">\r\n                    <div class=\"row\" [hidden]=\"fieldset.isHidden\" *ngFor=\" let fieldset of fieldsetGroup.fieldSets\">\r\n                      <div class=\"col-lg-12\">\r\n                        <div class=\"ibox\">\r\n                          <div class=\"ibox-title bg-primary p-xs b-r-sm\">\r\n                            <h5>{{fieldset.name}}</h5>\r\n                            <iboxtools></iboxtools>\r\n                          </div>\r\n                          <div class=\"ibox-content\">\r\n                            <div class=\"form-horizontal\">\r\n                              <div *ngFor=\"let field of fieldset.workItemFields\">\r\n                                <div class=\"form-group\" *ngIf=\"!field.hasToolTip\">\r\n                                  <div class=\"row\">\r\n                                    <label class=\"col-sm-4 control-label pull-left LabelText\"><small>{{field.name}}</small></label>\r\n                                    <div class=\"col-sm-8\">\r\n                                      <input *ngIf=\"field.fieldType =='TextBox'\" [disabled]=\"!field.isEditable\" [(ngModel)]=\"field.fieldValue\" (ngModelChange)='OnfieldChanged($event,field)'\r\n                                        [disabled]=\"!field.isEditable\" (blur)=\"onFieldBlur(field)\" type=\"text\" class=\"form-control\">\r\n                                      <div class=\"input-group date\" *ngIf=\"field.fieldType == 'DatePicker'\">\r\n                                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n                                        <input type=\"text\" (blur)=\"onFieldBlur(field)\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\" class=\"form-control\"\r\n                                          [(ngModel)]=\"field.fieldValue\">\r\n                                      </div>\r\n                                      <select (blur)=\"onFieldBlur(field)\" [(ngModel)]=\"field.fieldValue\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\"\r\n                                        data-placeholder=\"Choose a Country...\" class=\"form-control m-b\" (ngModelChange)=\"updateRequirementAfterSelect($event,field,requirementTab.index,fieldsetGroup)\"\r\n                                        tabindex=\"2\" *ngIf=\"field.fieldType =='DropDownList'\">\r\n                                                              <option [ngValue]=\"undefined\" selected>Please select...</option>\r\n                                                              <option *ngFor=\"let type of field.dropdownValues\" [ngValue]=\"type.name\">{{type.name}}</option>\r\n                                                          </select>\r\n                                      <div *ngIf=\"field.fieldType == 'DocumentUploadField'\" class=\"input-group\">\r\n                                        <label class=\"input-group-addon btn btn-success\"><i class=\"fa fa-file-text\"></i>\r\n                                                              <input type=\"file\" (blur)=\"onFieldBlur(field)\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\" (change)=\"addFile($event,field)\" accept=\"application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" name=\"file\" id=\"inputImage\" class=\"hide\">\r\n                                                              </label>\r\n                                        <input (blur)=\"onFieldBlur(field)\" [(ngModel)]=\"field.fieldValue\" [disabled]=\"!field.isEditable\" (ngModelChange)='OnfieldChanged($event,field)'\r\n                                          type=\"text\" class=\"form-control\">\r\n                                      </div>\r\n                                      <input (blur)=\"onFieldBlur(field)\" [required]=\"!field.isRequired\" [disabled]=\"!field.isEditable\" *ngIf=\"field.fieldType =='NumericTextbox'\"\r\n                                        [(ngModel)]=\"field.fieldValue\" (ngModelChange)='OnfieldChanged($event,field)' type=\"text\"\r\n                                        class=\"form-control\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\" *ngIf=\"field.hasToolTip\">\r\n                                  <div class=\"row\">\r\n                                    <label class=\"col-sm-4 control-label pull-left LabelText\"><small>{{field.name}}</small></label>\r\n                                    <div class=\"col-sm-8\">\r\n                                      <input (blur)=\"onFieldBlur(field)\" *ngIf=\"field.fieldType =='TextBox'\" [disabled]=\"!field.isEditable\" [(ngModel)]=\"field.fieldValue\"\r\n                                        (ngModelChange)='OnfieldChanged($event,field)' type=\"text\" data-toggle=\"tooltip\" [title]=\"field.toolTip\"\r\n                                        class=\"form-control sefate-tooltip\">\r\n                                      <div class=\"input-group date\" *ngIf=\"field.fieldType == 'DatePicker'\">\r\n                                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n                                        <input type=\"text\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\" class=\"form-control\" [(ngModel)]=\"field.fieldValue\">\r\n                                      </div>\r\n                                      <select (blur)=\"onFieldBlur(field)\" [(ngModel)]=\"field.fieldValue\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\"\r\n                                        data-placeholder=\"Choose a Country...\" class=\"form-control m-b\" (ngModelChange)=\"updateRequirementAfterSelect($event,field,requirementTab.index)\"\r\n                                        tabindex=\"2\" *ngIf=\"field.fieldType =='DropDownList'\">\r\n                                                              <option [ngValue]=\"undefined\" selected>Please select...</option>\r\n                                                              <option *ngFor=\"let type of field.dropdownValues\" [ngValue]=\"type.name\">{{type.name}}</option>\r\n                                                          </select>\r\n                                      <div *ngIf=\"field.fieldType == 'DocumentUploadField'\" class=\"input-group\">\r\n                                        <label class=\"input-group-addon btn btn-success\"><i class=\"fa fa-file-text\"></i>\r\n                                                              <input (blur)=\"onFieldBlur(field)\" type=\"file\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\" (change)=\"addFile($event,field)\" accept=\"application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" name=\"file\" id=\"inputImage\">\r\n                                                              </label>\r\n                                        <input (blur)=\"onFieldBlur(field)\" [(ngModel)]=\"field.fieldValue\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\"\r\n                                          (ngModelChange)='OnfieldChanged($event,field)' type=\"text\" class=\"form-control\">\r\n                                      </div>\r\n                                      <input (blur)=\"onFieldBlur(field)\" [required]=\"field.isRequired\" [disabled]=\"!field.isEditable\" *ngIf=\"field.fieldType =='NumericTextbox'\"\r\n                                        [(ngModel)]=\"field.fieldValue\" (ngModelChange)='OnfieldChanged($event,field)' type=\"text\"\r\n                                        class=\"form-control\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div *ngIf=\"!field.isValid\" class=\"alert alert-danger\">\r\n                                  <small>{{field.errorMessage}}</small>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"bg-primary p-xs b-r-sm ibox-title\">\r\n                            <div class=\"ibox-tools\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </tab>\r\n              <tab *ngIf=\"workItemRequirement.hasDocuments && showDocuments\" [heading]=\"workItemRequirement.documentsTab.name\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"wrapper wrapper-content animated fadeInUp\">\r\n                      <div class=\"ibox\">\r\n                        <div class=\" bg-primary ibox-title\">\r\n                          <h5>All documents uploaded to this client </h5>\r\n                        </div>\r\n                        <div class=\"ibox-content\">\r\n                          <div class=\"row m-b-sm m-t-sm\">\r\n                            <div class=\"col-md-1\">\r\n                              <button type=\"button\" id=\"loading-example-btn\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-refresh\"></i> Refresh</button>\r\n                            </div>\r\n                            <div class=\"col-md-11\">\r\n                              <div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span class=\"input-group-btn\">\r\n                                                      <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span></div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"project-list\">\r\n                            <table class=\"table table-hover\">\r\n                              <thead>\r\n                                <th>Document Type </th>\r\n                                <th>Document Name </th>\r\n                                <th>Document Status </th>\r\n                                <th>Download </th>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr *ngFor=\" let documentField of workItemRequirement.documentsTab.documentFields\">\r\n                                  <td class=\"project-title\">\r\n                                    {{documentField.fieldName}}\r\n                                  </td>\r\n                                  <td class=\"project-completion\">\r\n                                    {{documentField.fieldValue}}\r\n                                  </td>\r\n                                  <td class=\"project-status\">\r\n                                    <span (click)=\"UpdateDocumentStatus(documentField)\" [ngClass]=\"GetDocumentStatusCSS(documentField.workItemDocument.documentStatus.statusID)\">{{GetDocumentStatusText(documentField.workItemDocument.documentStatus.statusID)}}</span>\r\n                                  </td>\r\n                                  <td class=\"project-actions\">\r\n                                    <button class=\"btn btn-white btn-sm\" (click)=\"GetFileById(documentField.workItemDocument)\"><i class=\"fa fa-folder\"></i> Download </button>\r\n                                  </td>\r\n                                </tr>\r\n                              </tbody>\r\n                              <tfoot>\r\n                                <tr>\r\n                                  <td colspan=\"4\">\r\n                                    <a (click)=\"ApproveWorkItem()\" class=\"btn btn-success pull-right btn-sm\"><i class=\"fa fa-arrow-circle-o-right\"></i> Progress to next step</a>\r\n                                    <a data-toggle=\"modal\" data-target=\"#rejection\" class=\"btn btn-danger pull-left btn-sm\"><i class=\"fa fa-arrow-circle-o-left\"></i> Regress to previous step</a>\r\n                                  </td>\r\n                                </tr>\r\n                              </tfoot>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <div class=\"modal inmodal\" id=\"rejection\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n                    <div class=\"modal-dialog\">\r\n                      <div class=\"modal-content animated bounceInRight\">\r\n                        <div class=\"modal-header bg-primary\">\r\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n                          <h5 class=\"modal-title\">Rejection Reason</h5>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                          <form [formGroup]=\"rejectionForm\">\r\n                            <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !reason.valid }\">\r\n                              <label class=\"control-label\" for=\"reason\">Reason</label>\r\n                              <em *ngIf=\"!reason.valid\">*</em>\r\n                              <select [(ngModel)]=\"stageUpdateView.reason\" data-placeholder=\"Choose a Country...\" class=\"form-control m-b\" formControlName=\"reason\">\r\n                                                  <option [ngValue]=\"undefined\" selected>Please select...</option>\r\n                                                  <option *ngFor=\"let type of workItemRequirement.currentWorkItemStage.rejectionReasonViews\" [ngValue]=\"type.code\">{{type.description}}</option>\r\n                                              </select>\r\n                            </div>\r\n                            <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !comment.valid }\">\r\n                              <label class=\"control-label\" for=\"comment\">Comment</label>\r\n                              <em *ngIf=\"!comment.valid\">*</em>\r\n                              <textarea id=\"comment\" rows=\"3\" class=\"form-control\" placeholder=\"Comment\" [(ngModel)]=\"stageUpdateView.comment\" formControlName=\"comment\"></textarea>\r\n                            </div>\r\n                          </form>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                          <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">Close</button>\r\n                          <button type=\"button\" (click)=\"RejectWorkItem()\" class=\"btn btn-primary\">Save changes</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </tab>\r\n            </tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal inmodal fade\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header bg-infor\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n          <h4 class=\"modal-title\">Modal title</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>{{errorMessage}}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/clientRequirements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__ = __webpack_require__("../../../../../src/app/utilities/operationResult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_requirements_service__ = __webpack_require__("../../../../../src/app/services/requirements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workItem_client__ = __webpack_require__("../../../../../src/app/workItem/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workItem_workItem__ = __webpack_require__("../../../../../src/app/workItem/workItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__requirements_workItemRequirement__ = __webpack_require__("../../../../../src/app/requirements/workItemRequirement.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__workItem_workItemStatusInfor__ = __webpack_require__("../../../../../src/app/workItem/workItemStatusInfor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__requirements_workItemStage__ = __webpack_require__("../../../../../src/app/requirements/workItemStage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utilities_sefate_constants_Lists__ = __webpack_require__("../../../../../src/app/utilities/sefate.constants.Lists.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__requirements_stageUpdate__ = __webpack_require__("../../../../../src/app/requirements/stageUpdate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_document_service__ = __webpack_require__("../../../../../src/app/services/document.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientRequirements; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ClientRequirements = (function () {
    function ClientRequirements(router, requirementService, notificationService, documentService, route, builder) {
        this.router = router;
        this.requirementService = requirementService;
        this.notificationService = notificationService;
        this.documentService = documentService;
        this.route = route;
        this.builder = builder;
        this.isDataAvailable = false;
        this.nav = document.querySelector('nav.navbar');
    }
    ClientRequirements.prototype.ngOnInit = function () {
        this.showSpinner();
        var url = this.router.parseUrl(this.router.url);
        var params = url.queryParams;
        var WorkItemID = +params['workItemID'];
        var StatusID = +params['stausID'];
        var Status = params['statusText'];
        var StatusCode = params['statusCode'];
        var user = JSON.parse(localStorage.getItem('user'));
        this.role = user.userRoleViews[0].roleID;
        this.showUserDocuments = this.role === 1;
        this.showDocuments = !this.showUserDocuments;
        var client = new __WEBPACK_IMPORTED_MODULE_4__workItem_client__["a" /* Client */](1, '1');
        var status = new __WEBPACK_IMPORTED_MODULE_8__workItem_workItemStatusInfor__["a" /* WorkItemStatusInfor */](StatusID, Status, StatusCode);
        this._workItem = new __WEBPACK_IMPORTED_MODULE_5__workItem_workItem__["a" /* WorkItem */](client, status, WorkItemID, this.role, user.id);
        this.tabIndex = -1;
        this.workItemRequirement = new __WEBPACK_IMPORTED_MODULE_6__requirements_workItemRequirement__["a" /* WorkItemRequirements */]();
        this.workItemRequirement.currentWorkItemStage = new __WEBPACK_IMPORTED_MODULE_10__requirements_workItemStage__["a" /* WorkItemStage */]();
        this.requirementForm = new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormGroup */]({});
        this.lists = new __WEBPACK_IMPORTED_MODULE_12__utilities_sefate_constants_Lists__["a" /* CommonLists */]();
        this.GetWorkItemRequirements();
        this._formGroup();
        this.stageUpdateView = new __WEBPACK_IMPORTED_MODULE_13__requirements_stageUpdate__["a" /* StageUpdateView */]();
        this.nav.className += 'white-bg';
        this.showSpinner();
    };
    //Form Group
    ClientRequirements.prototype._formGroup = function () {
        this.reason = new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["e" /* Validators */].required);
        this.comment = new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["e" /* Validators */].required);
        this.rejectionForm = this.builder.group({
            comment: this.comment,
            reason: this.reason,
        });
    };
    ClientRequirements.prototype.GetWorkItemRequirements = function () {
        var _this = this;
        this.requirementService.requirement(this._workItem)
            .subscribe(function (res) {
            _this.workItemRequirement.requirementsTabs = res.requirementsTabs;
            _this.workItemRequirement.workItemStages = res.workItemStages;
            _this.workItemRequirement.documentsTab = res.documentsTab;
            _this.workItemRequirement.hasDocuments = res.hasDocuments;
            _this.workItemRequirement.currentWorkItemStage = res.currentWorkItemStage;
            var valid = _this.ValidateRequirement();
            _this.workItemRequirement.isValid = valid;
        });
    };
    ;
    ClientRequirements.prototype.UpdateRequirement = function () {
        var _this = this;
        this.showSpinner();
        var _authenticationResult = new __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__["a" /* OperationResult */](false, '');
        var valid = this.ValidateRequirement();
        this.workItemRequirement.isValid = valid;
        this.requirementService.updateRequirement(this.workItemRequirement)
            .subscribe(function (res) {
            _authenticationResult.succeeded = res.succeeded;
            _authenticationResult.message = res.message;
            if (_authenticationResult.succeeded) {
                _this.errorMessage = res.message;
                jQuery('#errorModal').modal('show');
            }
            else {
                _this.errorMessage = res.message;
                jQuery('#errorModal').modal('show');
            }
        });
        this.showSpinner();
    };
    ;
    ClientRequirements.prototype.OnfieldChanged = function (event, currentField) {
        // currentField.isNew = !currentField.isNew;
        currentField.isDirty = true;
    };
    ClientRequirements.prototype.changeListener = function (event) {
    };
    ClientRequirements.prototype.addFile = function (event, field) {
        var fi = event.target;
        if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            if (field.fieldValue != null && field.fieldValue.length > 0) {
                field.isNew = false;
            }
            field.fieldValue = fileToUpload.name;
            field.isDirty = field.isDirty;
            this.requirementService
                .upload(fileToUpload, field)
                .subscribe(function (res) {
                console.log(res);
            });
        }
    };
    ClientRequirements.prototype.updateRequirementAfterSelect = function (event, field, tabIndex, fieldSetGroup) {
        field.isDirty = true;
        if (field.hasDependends) {
            //this.UpdateRequirement();
            //this.GetWorkItemRequirements();
            this.ValidateRequirement();
            //this.setActiveTab(tabIndex);
            debugger;
            if (field.fieldSetGroup) {
                for (var i = 0; i < field.fieldSetGroup.fieldSets.length; i++) {
                    var currentDep = field.fieldSetGroup.fieldSets[i];
                    for (var k = 0; k < fieldSetGroup.fieldSets.length; k++) {
                        var currentSet = fieldSetGroup.fieldSets[k];
                        if (currentDep.code === currentSet.code) {
                            if (field.fieldValue === 'YES') {
                                currentSet.isHidden = false;
                            }
                            else {
                                currentSet.isHidden = true;
                            }
                        }
                    }
                }
            }
        }
    };
    ClientRequirements.prototype.setActiveTab = function (index) {
        for (var k = 0; k < this.workItemRequirement.requirementsTabs.length; k++) {
            this.workItemRequirement.requirementsTabs[k].active = false;
        }
        for (var k = 0; k < this.workItemRequirement.requirementsTabs.length; k++) {
            if (k === index) {
                this.workItemRequirement.requirementsTabs[k].active = true;
            }
        }
    };
    ClientRequirements.prototype.ValidateField = function (currentField) {
        if (currentField.fieldValue === '' && currentField.isRequired) {
            currentField.isValid = false;
            currentField.errorMessage = currentField.name + 'is required';
        }
    };
    ClientRequirements.prototype.ValidateRequirement = function () {
        var result = true;
        for (var k = 0; k < this.workItemRequirement.requirementsTabs.length; k++) {
            var currentTab = this.workItemRequirement.requirementsTabs[k];
            if (currentTab && currentTab.fieldSetGroups) {
                for (var j = 0; j < currentTab.fieldSetGroups.length; j++) {
                    var currentFieldSetGroup = currentTab.fieldSetGroups[j];
                    for (var t = 0; t < currentFieldSetGroup.fieldSets.length; t++) {
                        var currentFieldSet = currentFieldSetGroup.fieldSets[t];
                        if (currentFieldSet) {
                            if (currentFieldSet.workItemFields) {
                                for (var i = 0; i < currentFieldSet.workItemFields.length; i++) {
                                    var currentField = currentFieldSet.workItemFields[i];
                                    if (currentField.fieldValue === '' || currentField.fieldValue === null) {
                                        if (currentField.isRequired) {
                                            currentField.isValid = false;
                                            currentField.isDirty = false;
                                            currentField.errorMessage = currentField.name + ' ' + 'is required';
                                            result = result && false;
                                        }
                                        else {
                                            result = result && true;
                                            currentField.errorMessage = '';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    ClientRequirements.prototype.onFieldBlur = function (currentField) {
        if (currentField.fieldValue === '' || currentField.fieldValue === null) {
            if (currentField.isRequired) {
                currentField.isValid = false;
                currentField.isDirty = false;
                currentField.errorMessage = currentField.name + ' ' + 'is required';
            }
            else {
            }
        }
        else {
            currentField.errorMessage = '';
            currentField.isValid = true;
        }
    };
    ClientRequirements.prototype.onSubmit = function () {
        var _this = this;
        //this.toggleLoader();
        var valid = this.ValidateRequirement();
        this.workItemRequirement.isValid = valid;
        if (valid) {
            this.stageUpdateView.toStage = this.workItemRequirement.currentWorkItemStage.nextStage;
            var user = JSON.parse(localStorage.getItem('user'));
            this.stageUpdateView.currentUser = user.id;
            this.stageUpdateView.workItemID = this._workItem.workItemID;
            var _authenticationResult_1 = new __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__["a" /* OperationResult */](false, '');
            this.requirementService.submitWorkItem(this.stageUpdateView)
                .subscribe(function (res) {
                _authenticationResult_1.succeeded = res.succeeded;
                _authenticationResult_1.message = res.message;
                _this.errorMessage = res.message;
                if (_authenticationResult_1.succeeded) {
                    _this.router.navigate(['submitted']);
                }
                else {
                    jQuery('#errorModal').modal('show');
                }
            });
        }
        else {
            this.errorMessage = 'Please fix the validation errors and try again';
            jQuery('#errorModal').modal('show');
        }
        //this.toggleLoader();
    };
    ClientRequirements.prototype.RejectWorkItem = function () {
        var _this = this;
        this.stageUpdateView.toStage = this.workItemRequirement.currentWorkItemStage.previousStage;
        var user = JSON.parse(localStorage.getItem('user'));
        this.stageUpdateView.currentUser = user.id;
        this.stageUpdateView.workItemID = this._workItem.workItemID;
        var _authenticationResult = new __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__["a" /* OperationResult */](false, '');
        this.requirementService.updateItemStatus(this.stageUpdateView)
            .subscribe(function (res) {
            _authenticationResult.succeeded = res.succeeded;
            _authenticationResult.message = res.message;
            _this.errorMessage = res.message;
            jQuery('#errorModal').modal('show');
            if (_authenticationResult.succeeded) {
            }
            else {
                jQuery('#errorModal').modal('show');
            }
        });
        //  }
    };
    ;
    ClientRequirements.prototype.ApproveWorkItem = function () {
        var _this = this;
        this.stageUpdateView.toStage = this.workItemRequirement.currentWorkItemStage.nextStage;
        var user = JSON.parse(localStorage.getItem('user'));
        this.stageUpdateView.currentUser = user.id;
        this.stageUpdateView.workItemID = this._workItem.workItemID;
        var _authenticationResult = new __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__["a" /* OperationResult */](false, '');
        this.requirementService.updateItemStatus(this.stageUpdateView)
            .subscribe(function (res) {
            _authenticationResult.succeeded = res.succeeded;
            _authenticationResult.message = res.message;
            if (_authenticationResult.succeeded) {
                _this.errorMessage = res.message;
                // jQuery('#errorModal').modal('show');
                _this.router.navigate(['starterview']);
            }
            else {
            }
        });
        //  }
    };
    ;
    ClientRequirements.prototype.ShowModel = function () {
        document.getElementById('openModalButton').click();
    };
    ClientRequirements.prototype.DownloadDocument = function (field) {
        var _authenticationResult = new __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__["a" /* OperationResult */](false, '');
        this.requirementService.getTestPdfFile(field.workItemDocument)
            .subscribe(function (res) {
            debugger;
            var blob = new Blob([res], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            window.open(url);
        });
    };
    ClientRequirements.prototype.downloadBlaBlasCSV = function (document) {
        var _this = this;
        this.requirementService.downloadBlaBlasCSV(document).subscribe(function (data) { _this.openFileForDownload(data); }, function (error) {
        });
    };
    ClientRequirements.prototype.openFileForDownload = function (data) {
        var blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_file_saver__["saveAs"])(blob, 'Some.csv');
    };
    ClientRequirements.prototype.UpdateDocumentStatus = function (documentField) {
        var _this = this;
        documentField.workItemDocument.documentApproved = !documentField.workItemDocument.documentApproved;
        switch (documentField.workItemDocument.documentStatus.statusID) {
            case 0:
                documentField.workItemDocument.documentStatus.statusID = 1;
                break;
            case 1:
                documentField.workItemDocument.documentStatus.statusID = 2;
                break;
            case 2:
                documentField.workItemDocument.documentStatus.statusID = 3;
                break;
            case 3:
                documentField.workItemDocument.documentStatus.statusID = 1;
                break;
        }
        this.documentService.updateItemStatus(documentField.workItemDocument)
            .subscribe(function (res) {
            if (res.succeeded) {
                _this.errorMessage = res.message;
                jQuery('#errorModal').modal('show');
            }
            else {
                _this.errorMessage = res.message;
                jQuery('#errorModal').modal('show');
            }
        });
    };
    ClientRequirements.prototype.GetFileById = function (id) {
        window.open(this.requirementService.GetDownloadfileUrl(id.documentID));
        document.getElementById("addProductCloseButton").click();
    };
    ClientRequirements.prototype.GetDocumentStatusCSS = function (statusID) {
        switch (statusID) {
            case 0:
                return 'btn btn-warning btn-xs';
            case 1:
                return 'btn btn-info btn-xs';
            case 2:
                return 'btn btn-success btn-xs';
            case 3:
                return 'btn btn-danger btn-xs';
        }
    };
    ClientRequirements.prototype.GetDocumentStatusText = function (statusID) {
        switch (statusID) {
            case 0:
                return 'In Review';
            case 1:
                return 'In progress';
            case 2:
                return 'Approved';
            case 3:
                return 'Rejected';
        }
    };
    ClientRequirements.prototype.showSpinner = function () {
        jQuery('#ibox2').children('.ibox-content').toggleClass('sk-loading');
    };
    return ClientRequirements;
}());
ClientRequirements = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clientRequirements',
        template: __webpack_require__("../../../../../src/app/views/appviews/clientRequirements.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_requirements_service__["a" /* RequiremntService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_requirements_service__["a" /* RequiremntService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_14__services_document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__services_document_service__["a" /* DocumentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormBuilder */]) === "function" && _f || Object])
], ClientRequirements);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=clientRequirements.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/clientReview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-4\">\r\n    <h2>Create Company Profile</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a [routerLink]=\"['/starterview']\">Home</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Basic Information</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-lg-8 stages\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-2\" *ngFor=\"let stage of workItemRequirement.workItemStages\">\r\n        <span [ngClass]=\"stage.isActive ? 'label label-success label-xs tag' : 'label label-default label-xs tag'\" class=\"\">{{stage.stage}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"wrapper wrapper-content animated fadeIn\">\r\n  <div class=\"ibox\" id=\"ibox2\">\r\n    <div class=\"ibox-content\">\r\n      <div class=\"row\" id=\"ibox1\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"tabs-container\">\r\n            <tabset>\r\n              <tab *ngFor=\" let requirementTab of workItemRequirement.requirementsTabs\" [heading]=\"requirementTab.name\" [active]=\"requirementTab.active\"\r\n                (select)=\"requirementTab.active = true\" (deselect)=\"requirementTab.active = false\">\r\n                <div class=\"jumbotron\" *ngFor=\" let fieldsetGroup of requirementTab.fieldSetGroups\">\r\n                  <div class=\"wrapper wrapper-content animated fadeInRight\">\r\n                    <div class=\"row\" [hidden]=\"fieldset.isHidden\" *ngFor=\" let fieldset of fieldsetGroup.fieldSets\">\r\n                      <div class=\"col-lg-12\">\r\n                        <div class=\"ibox\">\r\n                          <div class=\"ibox-title bg-primary p-xs b-r-sm\">\r\n                            <h5>{{fieldset.name}}</h5>\r\n                            <iboxtools></iboxtools>\r\n                          </div>\r\n                          <div class=\"ibox-content\">\r\n                            <div class=\"form-horizontal\">\r\n                              <div *ngFor=\"let field of fieldset.workItemFields\">\r\n                                <div class=\"form-group\" *ngIf=\"!field.hasToolTip\">\r\n                                  <div class=\"row\">\r\n                                    <label class=\"col-sm-4 control-label pull-left LabelText\"><small>{{field.name}}</small></label>\r\n                                    <div class=\"col-sm-8\">\r\n                                      <input *ngIf=\"field.fieldType =='TextBox'\" [disabled]=\"true\" [(ngModel)]=\"field.fieldValue\" (ngModelChange)='OnfieldChanged($event,field)'\r\n                                        [disabled]=\"true\" (blur)=\"onFieldBlur(field)\" type=\"text\" class=\"form-control\">\r\n                                      <div class=\"input-group date\" *ngIf=\"field.fieldType == 'DatePicker'\">\r\n                                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n                                        <input type=\"text\" (blur)=\"onFieldBlur(field)\" [disabled]=\"true\" [required]=\"field.isRequired\" class=\"form-control\"\r\n                                          [(ngModel)]=\"field.fieldValue\">\r\n                                      </div>\r\n                                      <select (blur)=\"onFieldBlur(field)\" [(ngModel)]=\"field.fieldValue\" [disabled]=\"true\" [required]=\"field.isRequired\"\r\n                                        data-placeholder=\"Choose a Country...\" class=\"form-control m-b\" (ngModelChange)=\"updateRequirementAfterSelect($event,field,requirementTab.index,fieldsetGroup)\"\r\n                                        tabindex=\"2\" *ngIf=\"field.fieldType =='DropDownList'\">\r\n                                                              <option [ngValue]=\"undefined\" selected>Please select...</option>\r\n                                                              <option *ngFor=\"let type of field.dropdownValues\" [ngValue]=\"type.name\">{{type.name}}</option>\r\n                                                          </select>\r\n                                      <div *ngIf=\"field.fieldType == 'DocumentUploadField'\" class=\"input-group\">\r\n                                        <label class=\"input-group-addon btn btn-success\"><i class=\"fa fa-file-text\"></i>\r\n                                                              <input type=\"file\" (blur)=\"onFieldBlur(field)\" [disabled]=\"true\" [required]=\"field.isRequired\" (change)=\"addFile($event,field)\" accept=\"application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" name=\"file\" id=\"inputImage\" class=\"hide\">\r\n                                                              </label>\r\n                                        <input (blur)=\"onFieldBlur(field)\" [(ngModel)]=\"field.fieldValue\" [disabled]=\"true\" (ngModelChange)='OnfieldChanged($event,field)'\r\n                                          type=\"text\" class=\"form-control\">\r\n                                      </div>\r\n                                      <input (blur)=\"onFieldBlur(field)\" [required]=\"!field.isRequired\" [disabled]=\"true\" *ngIf=\"field.fieldType =='NumericTextbox'\"\r\n                                        [(ngModel)]=\"field.fieldValue\" (ngModelChange)='OnfieldChanged($event,field)' type=\"text\"\r\n                                        class=\"form-control\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\" *ngIf=\"field.hasToolTip\">\r\n                                  <div class=\"row\">\r\n                                    <label class=\"col-sm-4 control-label pull-left LabelText\"><small>{{field.name}}</small></label>\r\n                                    <div class=\"col-sm-8\">\r\n                                      <input (blur)=\"onFieldBlur(field)\" *ngIf=\"field.fieldType =='TextBox'\" [disabled]=\"true\" [(ngModel)]=\"field.fieldValue\"\r\n                                        (ngModelChange)='OnfieldChanged($event,field)' type=\"text\" data-toggle=\"tooltip\" [title]=\"field.toolTip\"\r\n                                        class=\"form-control sefate-tooltip\">\r\n                                      <div class=\"input-group date\" *ngIf=\"field.fieldType == 'DatePicker'\">\r\n                                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n                                        <input type=\"text\" [disabled]=\"true\" [required]=\"field.isRequired\" class=\"form-control\" [(ngModel)]=\"field.fieldValue\">\r\n                                      </div>\r\n                                      <select (blur)=\"onFieldBlur(field)\" [(ngModel)]=\"field.fieldValue\" [disabled]=\"true\" [required]=\"field.isRequired\"\r\n                                        data-placeholder=\"Choose a Country...\" class=\"form-control m-b\" (ngModelChange)=\"updateRequirementAfterSelect($event,field,requirementTab.index)\"\r\n                                        tabindex=\"2\" *ngIf=\"field.fieldType =='DropDownList'\">\r\n                                                              <option [ngValue]=\"undefined\" selected>Please select...</option>\r\n                                                              <option *ngFor=\"let type of field.dropdownValues\" [ngValue]=\"type.name\">{{type.name}}</option>\r\n                                                          </select>\r\n                                      <div *ngIf=\"field.fieldType == 'DocumentUploadField'\" class=\"input-group\">\r\n                                        <label class=\"input-group-addon btn btn-success\"><i class=\"fa fa-file-text\"></i>\r\n                                                              <input (blur)=\"onFieldBlur(field)\" type=\"file\" [disabled]=\"true\" [required]=\"field.isRequired\" (change)=\"addFile($event,field)\" accept=\"application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" name=\"file\" id=\"inputImage\">\r\n                                                              </label>\r\n                                        <input (blur)=\"onFieldBlur(field)\" [(ngModel)]=\"field.fieldValue\" [disabled]=\"true\" [required]=\"field.isRequired\"\r\n                                          (ngModelChange)='OnfieldChanged($event,field)' type=\"text\" class=\"form-control\">\r\n                                      </div>\r\n                                      <input (blur)=\"onFieldBlur(field)\" [required]=\"field.isRequired\" [disabled]=\"true\" *ngIf=\"field.fieldType =='NumericTextbox'\"\r\n                                        [(ngModel)]=\"field.fieldValue\" (ngModelChange)='OnfieldChanged($event,field)' type=\"text\"\r\n                                        class=\"form-control\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div *ngIf=\"!field.isValid\" class=\"alert alert-danger\">\r\n                                  <small>{{field.errorMessage}}</small>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"bg-primary p-xs b-r-sm ibox-title\">\r\n                            <div class=\"ibox-tools\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </tab>\r\n              <tab *ngIf=\"workItemRequirement.hasDocuments && showDocuments\" [heading]=\"workItemRequirement.documentsTab.name\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"wrapper wrapper-content animated fadeInUp\">\r\n                      <div class=\"ibox\">\r\n                        <div class=\" bg-primary ibox-title\">\r\n                          <h5>All documents uploaded to this client </h5>\r\n                        </div>\r\n                        <div class=\"ibox-content\">\r\n                          <div class=\"row m-b-sm m-t-sm\">\r\n                            <div class=\"col-md-1\">\r\n                              <button type=\"button\" id=\"loading-example-btn\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-refresh\"></i> Refresh</button>\r\n                            </div>\r\n                            <div class=\"col-md-11\">\r\n                              <div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span class=\"input-group-btn\">\r\n                                                      <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span></div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"project-list\">\r\n                            <table class=\"table table-hover\">\r\n                              <thead>\r\n                                <th>Document Type </th>\r\n                                <th>Document Name </th>\r\n                                <th>Document Status </th>\r\n                                <th>Download </th>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr *ngFor=\" let documentField of workItemRequirement.documentsTab.documentFields\">\r\n                                  <td class=\"project-title\">\r\n                                    {{documentField.fieldName}}\r\n                                  </td>\r\n                                  <td class=\"project-completion\">\r\n                                    {{documentField.fieldValue}}\r\n                                  </td>\r\n                                  <td class=\"project-status\">\r\n                                    <span (click)=\"UpdateDocumentStatus(documentField)\" [ngClass]=\"GetDocumentStatusCSS(documentField.workItemDocument.documentStatus.statusID)\">{{GetDocumentStatusText(documentField.workItemDocument.documentStatus.statusID)}}</span>\r\n                                  </td>\r\n                                  <td class=\"project-actions\">\r\n                                    <button class=\"btn btn-white btn-sm\" (click)=\"GetFileById(documentField.workItemDocument)\"><i class=\"fa fa-folder\"></i> Download </button>\r\n                                  </td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </tab>\r\n            </tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/clientReview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__ = __webpack_require__("../../../../../src/app/utilities/operationResult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_requirements_service__ = __webpack_require__("../../../../../src/app/services/requirements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workItem_client__ = __webpack_require__("../../../../../src/app/workItem/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requirements_workItemRequirement__ = __webpack_require__("../../../../../src/app/requirements/workItemRequirement.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__workItem_workItemStatusInfor__ = __webpack_require__("../../../../../src/app/workItem/workItemStatusInfor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__requirements_workItemStage__ = __webpack_require__("../../../../../src/app/requirements/workItemStage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utilities_sefate_constants_Lists__ = __webpack_require__("../../../../../src/app/utilities/sefate.constants.Lists.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_document_service__ = __webpack_require__("../../../../../src/app/services/document.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ClientReviewComponent = (function () {
    function ClientReviewComponent(router, requirementService, notificationService, documentService, route, builder) {
        this.router = router;
        this.requirementService = requirementService;
        this.notificationService = notificationService;
        this.documentService = documentService;
        this.route = route;
        this.builder = builder;
        this.isDataAvailable = false;
        this.nav = document.querySelector('nav.navbar');
    }
    ClientReviewComponent.prototype.ngOnInit = function () {
        var url = this.router.parseUrl(this.router.url);
        var params = url.queryParams;
        var WorkItemID = +params['workItemID'];
        var StatusID = +params['stausID'];
        var Status = params['statusText'];
        var StatusCode = params['statusCode'];
        var user = JSON.parse(localStorage.getItem('user'));
        this.role = user.userRoleViews[0].roleID;
        this.showUserDocuments = this.role === 1;
        this.showDocuments = !this.showUserDocuments;
        var client = new __WEBPACK_IMPORTED_MODULE_4__workItem_client__["a" /* Client */](1, '1');
        var status = new __WEBPACK_IMPORTED_MODULE_7__workItem_workItemStatusInfor__["a" /* WorkItemStatusInfor */](6, 'Client Review', '6');
        this._workItem = JSON.parse(localStorage.getItem('workItem'));
        this._workItem.workItemStatusInfor = status;
        this.tabIndex = -1;
        this.workItemRequirement = new __WEBPACK_IMPORTED_MODULE_5__requirements_workItemRequirement__["a" /* WorkItemRequirements */]();
        this.workItemRequirement.currentWorkItemStage = new __WEBPACK_IMPORTED_MODULE_9__requirements_workItemStage__["a" /* WorkItemStage */]();
        this.requirementForm = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormGroup */]({});
        this.lists = new __WEBPACK_IMPORTED_MODULE_10__utilities_sefate_constants_Lists__["a" /* CommonLists */]();
        this.GetWorkItemRequirements();
        this.nav.className += 'white-bg';
    };
    ClientReviewComponent.prototype.GetWorkItemRequirements = function () {
        var _this = this;
        debugger;
        this.requirementService.requirement(this._workItem)
            .subscribe(function (res) {
            _this.workItemRequirement.requirementsTabs = res.requirementsTabs;
            _this.workItemRequirement.workItemStages = res.workItemStages;
            _this.workItemRequirement.documentsTab = res.documentsTab;
            _this.workItemRequirement.hasDocuments = res.hasDocuments;
            _this.workItemRequirement.currentWorkItemStage = res.currentWorkItemStage;
            var valid = _this.ValidateRequirement();
            _this.workItemRequirement.isValid = valid;
        });
    };
    ;
    ClientReviewComponent.prototype.UpdateRequirement = function () {
        var _this = this;
        var _authenticationResult = new __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__["a" /* OperationResult */](false, '');
        var valid = this.ValidateRequirement();
        this.workItemRequirement.isValid = valid;
        this.requirementService.updateRequirement(this.workItemRequirement)
            .subscribe(function (res) {
            _authenticationResult.succeeded = res.succeeded;
            _authenticationResult.message = res.message;
            if (_authenticationResult.succeeded) {
                _this.errorMessage = res.message;
                jQuery('#errorModal').modal('show');
            }
            else {
                _this.errorMessage = res.message;
                jQuery('#errorModal').modal('show');
            }
        });
    };
    ;
    ClientReviewComponent.prototype.OnfieldChanged = function (event, currentField) {
        // currentField.isNew = !currentField.isNew;
        currentField.isDirty = true;
    };
    ClientReviewComponent.prototype.changeListener = function (event) {
    };
    ClientReviewComponent.prototype.addFile = function (event, field) {
        var fi = event.target;
        if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            if (field.fieldValue != null && field.fieldValue.length > 0) {
                field.isNew = false;
            }
            field.fieldValue = fileToUpload.name;
            field.isDirty = field.isDirty;
            this.requirementService
                .upload(fileToUpload, field)
                .subscribe(function (res) {
                console.log(res);
            });
        }
    };
    ClientReviewComponent.prototype.updateRequirementAfterSelect = function (event, field, tabIndex, fieldSetGroup) {
        field.isDirty = true;
        if (field.hasDependends) {
            //this.UpdateRequirement();
            //this.GetWorkItemRequirements();
            this.ValidateRequirement();
            //this.setActiveTab(tabIndex);
            debugger;
            if (field.fieldSetGroup) {
                for (var i = 0; i < field.fieldSetGroup.fieldSets.length; i++) {
                    var currentDep = field.fieldSetGroup.fieldSets[i];
                    for (var k = 0; k < fieldSetGroup.fieldSets.length; k++) {
                        var currentSet = fieldSetGroup.fieldSets[k];
                        if (currentDep.code === currentSet.code) {
                            if (field.fieldValue === 'YES') {
                                currentSet.isHidden = false;
                            }
                            else {
                                currentSet.isHidden = true;
                            }
                        }
                    }
                }
            }
        }
    };
    ClientReviewComponent.prototype.setActiveTab = function (index) {
        for (var k = 0; k < this.workItemRequirement.requirementsTabs.length; k++) {
            this.workItemRequirement.requirementsTabs[k].active = false;
        }
        for (var k = 0; k < this.workItemRequirement.requirementsTabs.length; k++) {
            if (k === index) {
                this.workItemRequirement.requirementsTabs[k].active = true;
            }
        }
    };
    ClientReviewComponent.prototype.ValidateField = function (currentField) {
        if (currentField.fieldValue === '' && currentField.isRequired) {
            currentField.isValid = false;
            currentField.errorMessage = currentField.name + 'is required';
        }
    };
    ClientReviewComponent.prototype.ValidateRequirement = function () {
        var result = true;
        for (var k = 0; k < this.workItemRequirement.requirementsTabs.length; k++) {
            var currentTab = this.workItemRequirement.requirementsTabs[k];
            if (currentTab && currentTab.fieldSetGroups) {
                for (var j = 0; j < currentTab.fieldSetGroups.length; j++) {
                    var currentFieldSetGroup = currentTab.fieldSetGroups[j];
                    for (var t = 0; t < currentFieldSetGroup.fieldSets.length; t++) {
                        var currentFieldSet = currentFieldSetGroup.fieldSets[t];
                        if (currentFieldSet) {
                            if (currentFieldSet.workItemFields) {
                                for (var i = 0; i < currentFieldSet.workItemFields.length; i++) {
                                    var currentField = currentFieldSet.workItemFields[i];
                                    if (currentField.fieldValue === '' || currentField.fieldValue === null) {
                                        if (currentField.isRequired) {
                                            currentField.isValid = false;
                                            currentField.isDirty = false;
                                            currentField.errorMessage = currentField.name + ' ' + 'is required';
                                            result = result && false;
                                        }
                                        else {
                                            result = result && true;
                                            currentField.errorMessage = '';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    ClientReviewComponent.prototype.onFieldBlur = function (currentField) {
        if (currentField.fieldValue === '' || currentField.fieldValue === null) {
            if (currentField.isRequired) {
                currentField.isValid = false;
                currentField.isDirty = false;
                currentField.errorMessage = currentField.name + ' ' + 'is required';
            }
            else {
            }
        }
        else {
            currentField.errorMessage = '';
            currentField.isValid = true;
        }
    };
    ClientReviewComponent.prototype.GetDocumentStatusCSS = function (statusID) {
        switch (statusID) {
            case 0:
                return 'btn btn-warning btn-xs';
            case 1:
                return 'btn btn-info btn-xs';
            case 2:
                return 'btn btn-success btn-xs';
            case 3:
                return 'btn btn-danger btn-xs';
        }
    };
    ClientReviewComponent.prototype.GetDocumentStatusText = function (statusID) {
        switch (statusID) {
            case 0:
                return 'In Review';
            case 1:
                return 'In progress';
            case 2:
                return 'Approved';
            case 3:
                return 'Rejected';
        }
    };
    return ClientReviewComponent;
}());
ClientReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clientReview',
        template: __webpack_require__("../../../../../src/app/views/appviews/clientReview.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_requirements_service__["a" /* RequiremntService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_requirements_service__["a" /* RequiremntService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__services_document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_document_service__["a" /* DocumentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormBuilder */]) === "function" && _f || Object])
], ClientReviewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=clientReview.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/confirmRegistration.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"passwordBox animated fadeInDown\">\r\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\r\n         {{errorMessage}}\r\n      </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"ibox-content\">\r\n                    <h2 class=\"font-bold\">Confirm Account</h2>\r\n                    <p>\r\n                        Enter the verification code send to you below.\r\n                    </p>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <form class=\"m-t\" #confirmForm =\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <input name=\"oneTimePassword\" #oneTimePassword=\"ngModel\" id=\"oneTimePassword\" type=\"email\" class=\"form-control\" placeholder=\"Verification Code\" [(ngModel)]=\"confirmAccount.oneTimePassword\">\r\n                                </div>\r\n                                <button (click)=\"SendVerification()\" type=\"submit\" class=\"btn btn-primary block full-width m-b\">Submit</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <hr/>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n            </div>\r\n            <div class=\"col-md-6 text-right\">\r\n               <small>© 2014-2017</small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/confirmRegistration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_operationResult__ = __webpack_require__("../../../../../src/app/utilities/operationResult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_membership_service__ = __webpack_require__("../../../../../src/app/services/membership.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_confirmAccount__ = __webpack_require__("../../../../../src/app/views/account/confirmAccount.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmRegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmRegistrationComponent = (function () {
    function ConfirmRegistrationComponent(membershipService, router) {
        this.membershipService = membershipService;
        this.router = router;
    }
    ConfirmRegistrationComponent.prototype.ngOnInit = function () {
        this.confirmAccount = new __WEBPACK_IMPORTED_MODULE_4__account_confirmAccount__["a" /* ConfirmAccount */]();
    };
    ConfirmRegistrationComponent.prototype.SendVerification = function () {
        var _this = this;
        var _authenticationResult = new __WEBPACK_IMPORTED_MODULE_1__utilities_operationResult__["a" /* OperationResult */](false, '');
        if (this.confirmAccount) {
            this.membershipService.unlockUser(this.confirmAccount)
                .subscribe(function (res) {
                _authenticationResult.succeeded = res.succeeded;
                _authenticationResult.message = res.message;
                debugger;
                if (_authenticationResult.succeeded) {
                    _this.router.navigate(['login']);
                }
                else {
                    _this.errorMessage = res.message;
                }
            });
        }
    };
    return ConfirmRegistrationComponent;
}());
ConfirmRegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'confirmregistration',
        template: __webpack_require__("../../../../../src/app/views/appviews/confirmRegistration.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_membership_service__["a" /* MembershipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_membership_service__["a" /* MembershipService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ConfirmRegistrationComponent);

var _a, _b;
//# sourceMappingURL=confirmRegistration.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/fieldSetGroup.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/fieldSetGroup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requirements_fieldSetGroup__ = __webpack_require__("../../../../../src/app/requirements/fieldSetGroup.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldSetGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldSetGroupComponent = (function () {
    function FieldSetGroupComponent() {
    }
    return FieldSetGroupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__requirements_fieldSetGroup__["a" /* FieldSetGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__requirements_fieldSetGroup__["a" /* FieldSetGroup */]) === "function" && _a || Object)
], FieldSetGroupComponent.prototype, "fieldSetGroup", void 0);
FieldSetGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fieldsetgroup',
        template: __webpack_require__("../../../../../src/app/views/appviews/fieldSetGroup.component.html")
    })
], FieldSetGroupComponent);

var _a;
//# sourceMappingURL=fieldSetGroup.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/forgotPassword.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"passwordBox animated fadeInDown\">\r\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\r\n         {{errorMessage}}\r\n      </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"ibox-content\">\r\n                    <h2 class=\"font-bold\">Forgot password</h2>\r\n                    <p>\r\n                        Enter your email address and your password will be reset and emailed to you.\r\n                    </p>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <form class=\"m-t\" #forgotPassword=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email address\" #email=\"ngModel\" [(ngModel)]=\"resetPassword.email\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" name=\"newPassword\" id=\"newPassword\" class=\"form-control\" placeholder=\"New Password\" #newPassword=\"ngModel\"  [(ngModel)]=\"resetPassword.newPassword\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm Password\" #confirmPassword=\"ngModel\" [(ngModel)]=\"resetPassword.confirmPassword\">\r\n                                </div>\r\n                                <button (click)=\"SendPassword()\" type=\"submit\" class=\"btn btn-primary block full-width m-b\">Send new password</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <hr/>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n            </div>\r\n            <div class=\"col-md-6 text-right\">\r\n               <small>© 2014-2015</small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/forgotPassword.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__ = __webpack_require__("../../../../../src/app/utilities/operationResult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_membership_service__ = __webpack_require__("../../../../../src/app/services/membership.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_resetPassword__ = __webpack_require__("../../../../../src/app/views/account/resetPassword.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(membershipService, router) {
        this.membershipService = membershipService;
        this.router = router;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.resetPassword = new __WEBPACK_IMPORTED_MODULE_4__account_resetPassword__["a" /* ResetPassword */]('', '', '');
    };
    ForgotPasswordComponent.prototype.SendPassword = function () {
        var _this = this;
        debugger;
        var _authenticationResult = new __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__["a" /* OperationResult */](false, '');
        if (this.resetPassword) {
            if (this.resetPassword.confirmPassword !== this.resetPassword.newPassword) {
                this.errorMessage = "Please ensure your passwaord confirmation and the new password are the same";
            }
            else {
                this.errorMessage = null;
                this.membershipService.updatePassword(this.resetPassword)
                    .subscribe(function (res) {
                    _authenticationResult.succeeded = res.succeeded;
                    _authenticationResult.message = res.message;
                    _this.errorMessage = res.message;
                    if (_authenticationResult.succeeded) {
                        _this.router.navigate(['login']);
                    }
                });
            }
        }
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'forgotpassword',
        template: __webpack_require__("../../../../../src/app/views/appviews/forgotPassword.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_membership_service__["a" /* MembershipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_membership_service__["a" /* MembershipService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ForgotPasswordComponent);

var _a, _b;
//# sourceMappingURL=forgotPassword.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/incubation/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n    <div class=\"col-lg-8\">\r\n        <h2>Calendar</h2>\r\n        <ol class=\"breadcrumb\">\r\n            <li>\r\n                <a href=\"index.html\">Home</a>\r\n            </li>\r\n            <li>\r\n                Extra pages\r\n            </li>\r\n            <li class=\"active\">\r\n                <strong>Calendar</strong>\r\n            </li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content\">\r\n    <div class=\"row animated fadeInDown\">\r\n        <div class=\"col-lg-3\">\r\n            <div class=\"ibox float-e-margins\">\r\n                <div class=\"ibox-title\">\r\n                    <h5>Draggable Events</h5>\r\n                    <iboxtools></iboxtools>\r\n                </div>\r\n                <div class=\"ibox-content\">\r\n                    <div id='external-events'>\r\n                        <p>Drag a event and drop into callendar.</p>\r\n                        <div class='external-event navy-bg'>Go to shop and buy some products.</div>\r\n                        <div class='external-event navy-bg'>Check the new CI from Corporation.</div>\r\n                        <div class='external-event navy-bg'>Send documents to John.</div>\r\n                        <div class='external-event navy-bg'>Phone to Sandra.</div>\r\n                        <div class='external-event navy-bg'>Chat with Michael.</div>\r\n                        <p class=\"m-t\">\r\n                            <input type='checkbox' id='drop-remove' class=\"i-checks\" checked /> <label for='drop-remove'>remove after drop</label>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ibox float-e-margins\">\r\n                <div class=\"ibox-content\">\r\n                    <h2>FullCalendar</h2> is a jQuery plugin that provides a full-sized, drag & drop calendar like the one below. It uses AJAX to fetch events on-the-fly for each month and is\r\n                    easily configured to use your own feed format (an extension is provided for Google Calendar).\r\n                    <p>\r\n                        <a href=\"http://arshaw.com/fullcalendar/\" target=\"_blank\">FullCalendar documentation</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-9\">\r\n            <div class=\"ibox float-e-margins\">\r\n                <div class=\"ibox-title\">\r\n                    <h5>Striped Table </h5>\r\n                    <iboxtools></iboxtools>\r\n                </div>\r\n                <div class=\"ibox-content\">\r\n                    <angular2-fullcalendar [options]=\"calendarOptions\"></angular2-fullcalendar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/incubation/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsComponent = (function () {
    function EventsComponent(router, route) {
        this.router = router;
        this.route = route;
        this.calendarOptions = {
            fixedWeekCount: false,
            defaultDate: '2016-09-12',
            editable: true,
            eventLimit: true,
            events: [
                {
                    title: 'All Day Event',
                    start: '2016-09-01',
                },
                {
                    title: 'Long Event',
                    start: '2016-09-07',
                    end: '2016-09-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-09-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-09-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2016-09-11',
                    end: '2016-09-13'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2016-09-28'
                }
            ],
        };
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent.prototype.ngOnDestroy = function () {
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'eventmanager',
        template: __webpack_require__("../../../../../src/app/views/appviews/incubation/events.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], EventsComponent);

var _a, _b;
//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/incubation/incubation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\r\n    <div class=\"row\">\r\n          <div *ngFor=\"let quardrant of incubatorRequirement.incubatorQuardrants\" class=\"col-lg-3\">\r\n              <div class=\"ibox float-e-margins\">\r\n                <div class=\"ibox-title\">\r\n                    <span class=\"label label-success pull-right\">Monthly</span>\r\n                    <h5>quardrant.name</h5>\r\n                </div>\r\n                <div class=\"ibox-content\">\r\n                    <h1 class=\"no-margins\">quard</h1>\r\n                    <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\r\n                    <small>Total income</small>\r\n                </div>\r\n              </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n          <div class=\"ibox float-e-margins\">\r\n            <div class=\"ibox-title\">\r\n                <h5>Orders</h5>\r\n                <div class=\"pull-right\">\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-xs btn-white active\">Today</button>\r\n                        <button type=\"button\" class=\"btn btn-xs btn-white\">Monthly</button>\r\n                        <button type=\"button\" class=\"btn btn-xs btn-white\">Annual</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-9\">\r\n                        <div class=\"flot-chart\">\r\n                            <div class=\"flot-chart-content\" id=\"flot-dashboard-chart\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <ul class=\"stat-list\">\r\n                            <li>\r\n                                <h2 class=\"no-margins\">2,346</h2>\r\n                                <small>Total orders in period</small>\r\n                                <div class=\"stat-percent\">48% <i class=\"fa fa-level-up text-navy\"></i></div>\r\n                                <div class=\"progress progress-mini\">\r\n                                    <div style=\"width: 48%;\" class=\"progress-bar\"></div>\r\n                                </div>\r\n                            </li>\r\n                            <li>\r\n                                <h2 class=\"no-margins \">4,422</h2>\r\n                                <small>Orders in last month</small>\r\n                                <div class=\"stat-percent\">60% <i class=\"fa fa-level-down text-navy\"></i></div>\r\n                                <div class=\"progress progress-mini\">\r\n                                    <div style=\"width: 60%;\" class=\"progress-bar\"></div>\r\n                                </div>\r\n                            </li>\r\n                            <li>\r\n                                <h2 class=\"no-margins \">9,180</h2>\r\n                                <small>Monthly income from orders</small>\r\n                                <div class=\"stat-percent\">22% <i class=\"fa fa-bolt text-navy\"></i></div>\r\n                                <div class=\"progress progress-mini\">\r\n                                    <div style=\"width: 22%;\" class=\"progress-bar\"></div>\r\n                                </div>\r\n                            </li>\r\n                            </ul>\r\n                      </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/incubation/incubation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_document_service__ = __webpack_require__("../../../../../src/app/services/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_incubation_service__ = __webpack_require__("../../../../../src/app/services/incubation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__requirements_incubation_incubatorRequirement__ = __webpack_require__("../../../../../src/app/requirements/incubation/incubatorRequirement.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncubationRequirementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IncubationRequirementComponent = (function () {
    function IncubationRequirementComponent(router, requirementService, notificationService, documentService, route, builder) {
        this.router = router;
        this.requirementService = requirementService;
        this.notificationService = notificationService;
        this.documentService = documentService;
        this.route = route;
        this.builder = builder;
        this.data1 = [
            [this.gd(2012, 1, 1), 7], [this.gd(2012, 1, 2), 6], [this.gd(2012, 1, 3), 4], [this.gd(2012, 1, 4), 8],
            [this.gd(2012, 1, 5), 9], [this.gd(2012, 1, 6), 7], [this.gd(2012, 1, 7), 5], [this.gd(2012, 1, 8), 4],
            [this.gd(2012, 1, 9), 7], [this.gd(2012, 1, 10), 8], [this.gd(2012, 1, 11), 9], [this.gd(2012, 1, 12), 6],
            [this.gd(2012, 1, 13), 4], [this.gd(2012, 1, 14), 5], [this.gd(2012, 1, 15), 11], [this.gd(2012, 1, 16), 8],
            [this.gd(2012, 1, 17), 8], [this.gd(2012, 1, 18), 11], [this.gd(2012, 1, 19), 11], [this.gd(2012, 1, 20), 6],
            [this.gd(2012, 1, 21), 6], [this.gd(2012, 1, 22), 8], [this.gd(2012, 1, 23), 11], [this.gd(2012, 1, 24), 13],
            [this.gd(2012, 1, 25), 7], [this.gd(2012, 1, 26), 9], [this.gd(2012, 1, 27), 9], [this.gd(2012, 1, 28), 8],
            [this.gd(2012, 1, 29), 5], [this.gd(2012, 1, 30), 8], [this.gd(2012, 1, 31), 25]
        ];
        this.data2 = [
            [this.gd(2012, 1, 1), 800], [this.gd(2012, 1, 2), 500], [this.gd(2012, 1, 3), 600], [this.gd(2012, 1, 4), 700],
            [this.gd(2012, 1, 5), 500], [this.gd(2012, 1, 6), 456], [this.gd(2012, 1, 7), 800], [this.gd(2012, 1, 8), 589],
            [this.gd(2012, 1, 9), 467], [this.gd(2012, 1, 10), 876], [this.gd(2012, 1, 11), 689], [this.gd(2012, 1, 12), 700],
            [this.gd(2012, 1, 13), 500], [this.gd(2012, 1, 14), 600], [this.gd(2012, 1, 15), 700], [this.gd(2012, 1, 16), 786],
            [this.gd(2012, 1, 17), 345], [this.gd(2012, 1, 18), 888], [this.gd(2012, 1, 19), 888], [this.gd(2012, 1, 20), 888],
            [this.gd(2012, 1, 21), 987], [this.gd(2012, 1, 22), 444], [this.gd(2012, 1, 23), 999], [this.gd(2012, 1, 24), 567],
            [this.gd(2012, 1, 25), 786], [this.gd(2012, 1, 26), 666], [this.gd(2012, 1, 27), 888], [this.gd(2012, 1, 28), 900],
            [this.gd(2012, 1, 29), 178], [this.gd(2012, 1, 30), 555], [this.gd(2012, 1, 31), 993]
        ];
        this.flotDataset = [
            {
                label: "Number of orders",
                data: this.data2,
                color: "#1ab394",
                bars: {
                    show: true,
                    align: "center",
                    barWidth: 24 * 60 * 60 * 600,
                    lineWidth: 0
                }
            }, {
                label: "Payments",
                data: this.data1,
                yaxis: 2,
                color: "#1C84C6",
                lines: {
                    lineWidth: 1,
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.2
                            }, {
                                opacity: 0.4
                            }]
                    }
                },
                splines: {
                    show: false,
                    tension: 0.6,
                    lineWidth: 1,
                    fill: 0.1
                },
            }
        ];
        this.flotOptions = {
            xaxis: {
                mode: "time",
                tickSize: [3, "day"],
                tickLength: 0,
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Arial',
                axisLabelPadding: 10,
                color: "#d5d5d5"
            },
            yaxes: [{
                    position: "left",
                    max: 1070,
                    color: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 3
                }, {
                    position: "right",
                    clolor: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: ' Arial',
                    axisLabelPadding: 67
                }
            ],
            legend: {
                noColumns: 1,
                labelBoxBorderColor: "#000000",
                position: "nw"
            },
            grid: {
                hoverable: false,
                borderWidth: 0
            }
        };
        // jVector Map options
        this.mapOptions = {
            map: 'world_mill_en',
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    "fill-opacity": 0.9,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                }
            },
            series: {
                regions: [{
                        values: {
                            "US": 298,
                            "SA": 200,
                            "DE": 220,
                            "FR": 540,
                            "CN": 120,
                            "AU": 760,
                            "BR": 550,
                            "IN": 200,
                            "GB": 120
                        },
                        scale: ["#1ab394", "#22d6b1"],
                        normalizeFunction: 'polynomial'
                    }]
            },
        };
        this.nav = document.querySelector('nav.navbar');
        this.todos = [
            { name: "Buy a milk", completed: true },
            { name: "Go to shop and find some products.", completed: false },
            { name: "Send documents to Mike ", completed: false, time: 1 },
            { name: "Go to the doctor dr Smith", completed: false },
            { name: "Plan vacation", completed: true },
            { name: "Create new stuff", completed: false },
            { name: "Call to Anna for dinner", completed: false },
        ];
    }
    IncubationRequirementComponent.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
        this.incubatorRequirement = new __WEBPACK_IMPORTED_MODULE_6__requirements_incubation_incubatorRequirement__["a" /* IncubatorRequirement */]();
        this.GetWorkItemRequirements();
    };
    IncubationRequirementComponent.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    // Flot chart data and options
    IncubationRequirementComponent.prototype.gd = function (year, month, day) {
        return new Date(year, month - 1, day).getTime();
    };
    IncubationRequirementComponent.prototype.GetWorkItemRequirements = function () {
        var _this = this;
        this.requirementService.requirement(this.workItem)
            .subscribe(function (res) {
            _this.incubatorRequirement.incubatorQuardrants = res.requirementsTabs;
        });
    };
    ;
    IncubationRequirementComponent.prototype.LoadQuardrant = function (quardrant) {
        if (quardrant) {
            localStorage.setItem('quardrant', JSON.stringify(quardrant));
            this.router.navigate(['incubatorquardrant']);
        }
    };
    return IncubationRequirementComponent;
}());
IncubationRequirementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'incubationRequirements',
        template: __webpack_require__("../../../../../src/app/views/appviews/incubation/incubation.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_incubation_service__["a" /* IncubationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_incubation_service__["a" /* IncubationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_document_service__["a" /* DocumentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === "function" && _f || Object])
], IncubationRequirementComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=incubation.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/incubation/quardrant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-4\">\r\n    <h2>{{quardrant.name}}</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Basic Information</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"ibox float-e-margins\">\r\n          <div class=\"ibox-title bg-primary\">\r\n            <h5>Milestones</h5>\r\n            <iboxtools></iboxtools>\r\n          </div>\r\n          <div class=\"ibox-content\">\r\n            <ul class=\"todo-list m-t small-list\">\r\n              <li *ngFor=\"let milestone of currentQuarter.quarterMilestones\">\r\n                <span class=\"check-link\"><i class=\"fa fa-check-square\"></i> </span>\r\n                <span class=\"m-l-xs\">{{milestone.shorDescription}}</span>\r\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i>{{milestone.endDate}}</small>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"ibox-title\">\r\n            <span (click)=\"ShowMilestoleModal()\" class=\"btn btn-success btn-xs pull-right\">Add new</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox float-e-margins\">\r\n          <div class=\"ibox-title bg-primary\">\r\n            <h5>Mentor Comments</h5>\r\n            <iboxtools></iboxtools>\r\n          </div>\r\n          <div class=\"ibox-content no-padding\">\r\n            <ul class=\"list-group\">\r\n              <li *ngFor=\"let comment of workItemIncubatorComments\" class=\"list-group-item\">\r\n                <p>{{comment.commentText}}</p>\r\n                <small class=\"block text-muted\">{{comment.createdDateTime}}</small>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"ibox-title\">\r\n            <span (click)=\"ShowCommentModal()\" class=\"btn btn-success btn-xs pull-right\">Add new</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"row border-bottom white-bg\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"col-md-4\">\r\n              <div id=\"nestable-menu\">\r\n                <button class=\"btn btn-info btn-sm\" (click)=\"UpdateQuardrant()\" type=\"button\"><i class=\"fa fa-paste\"></i> Save Changes</button>\r\n                <button class=\"btn btn-success btn-sm\" (click)=\"AddNewQuarterModal()\" type=\"button\"><i class=\"fa fa-paste\"></i>New Quarter</button>\r\n              </div>\r\n            </div>\r\n            <div [hidden]=\"true\" class=\"col-md-6\">\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"ibox\">\r\n            <div class=\"ibox-content\">\r\n              <div class=\"tabs-container\">\r\n                <tabset>\r\n                  <tab *ngFor=\" let quarter of quardrant.quardrantQuarters\" [heading]=\"quarter.name\" [active]=\"quarter.active\" (select)=\"quarter.active = true\"\r\n                    (deselect)=\"quarter.active = false\">\r\n                    <div class=\"jumbotron\" *ngFor=\" let fieldsetGroup of quarter.fieldSetGroups\">\r\n                      <div class=\"wrapper wrapper-content animated fadeInRight\">\r\n                        <div [hidden]=\"fieldset.isHidden\" class=\"row\" *ngFor=\" let fieldset of fieldsetGroup.fieldSets\">\r\n                          <div class=\"col-lg-12\">\r\n                            <div class=\"ibox\">\r\n                              <div class=\"ibox-title bg-primary p-xs b-r-sm\">\r\n                                <h5>{{fieldset.name}}</h5>\r\n                                <iboxtools></iboxtools>\r\n                              </div>\r\n                              <div class=\"ibox-content\">\r\n                                <div class=\"form-horizontal\">\r\n                                  <div *ngFor=\"let field of fieldset.workItemFields\">\r\n                                    <div class=\"form-group\" *ngIf=\"!field.hasToolTip\">\r\n                                      <div class=\"row\">\r\n                                        <label class=\"col-sm-4 control-label pull-left LabelText\"><small>{{field.name}}</small></label>\r\n                                        <div class=\"col-sm-8\">\r\n                                          <input *ngIf=\"field.fieldType =='TextBox'\" [disabled]=\"!field.isEditable\" [(ngModel)]=\"field.fieldValue\" (ngModelChange)='OnfieldChanged($event,field)'\r\n                                            [disabled]=\"!field.isEditable\" type=\"text\" class=\"form-control\">\r\n                                          <div class=\"input-group date\" *ngIf=\"field.fieldType == 'DatePicker'\">\r\n                                            <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n                                            <input type=\"text\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\" class=\"form-control\" [(ngModel)]=\"field.fieldValue\">\r\n                                          </div>\r\n                                          <select [(ngModel)]=\"field.fieldValue\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\" data-placeholder=\"Choose a Country...\"\r\n                                            class=\"form-control m-b\" (ngModelChange)=\"updateRequirementAfterSelect($event,field,quarter.index)\"\r\n                                            tabindex=\"2\" *ngIf=\"field.fieldType =='DropDownList'\">\r\n                                                                              <option [ngValue]=\"undefined\" selected>Please select...</option>\r\n                                                                              <option *ngFor=\"let type of field.dropdownValues\" [ngValue]=\"type.name\">{{type.name}}</option>\r\n                                                                          </select>\r\n                                          <div *ngIf=\"field.fieldType == 'DocumentUploadField'\" class=\"input-group\">\r\n                                            <label class=\"input-group-addon btn btn-success\"><i class=\"fa fa-file-text\"></i>\r\n                                                                              <input type=\"file\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\" (change)=\"addFile($event,field)\" accept=\"application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" name=\"file\" id=\"inputImage\" class=\"hide\">\r\n                                                                              </label>\r\n                                            <input [(ngModel)]=\"field.fieldValue\" [disabled]=\"!field.isEditable\" (ngModelChange)='OnfieldChanged($event,field)' type=\"text\"\r\n                                              class=\"form-control\">\r\n                                          </div>\r\n                                          <input [required]=\"!field.isRequired\" [disabled]=\"!field.isEditable\" *ngIf=\"field.fieldType =='NumericTextbox'\" [(ngModel)]=\"field.fieldValue\"\r\n                                            (ngModelChange)='OnfieldChanged($event,field)' type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\" *ngIf=\"field.hasToolTip\">\r\n                                      <div class=\"row\">\r\n                                        <label class=\"col-sm-4 control-label pull-left LabelText\"><small>{{field.name}}</small></label>\r\n                                        <div class=\"col-sm-8\">\r\n                                          <input *ngIf=\"field.fieldType =='TextBox'\" [disabled]=\"!field.isEditable\" [(ngModel)]=\"field.fieldValue\" (ngModelChange)='OnfieldChanged($event,field)'\r\n                                            type=\"text\" data-toggle=\"tooltip\" [title]=\"field.toolTip\" class=\"form-control sefate-tooltip\">\r\n                                          <div class=\"input-group date\" *ngIf=\"field.fieldType == 'DatePicker'\">\r\n                                            <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>`\r\n                                            <input type=\"text\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\" class=\"form-control\" [(ngModel)]=\"field.fieldValue\">\r\n                                          </div>\r\n                                          <select [(ngModel)]=\"field.fieldValue\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\" data-placeholder=\"Choose a Country...\"\r\n                                            class=\"form-control m-b\" (ngModelChange)=\"updateRequirementAfterSelect($event,field,quarter.index)\"\r\n                                            tabindex=\"2\" *ngIf=\"field.fieldType =='DropDownList'\">\r\n                                                                              <option [ngValue]=\"undefined\" selected>Please select...</option>\r\n                                                                              <option *ngFor=\"let type of field.dropdownValues\" [ngValue]=\"type.name\">{{type.name}}</option>\r\n                                                                          </select>\r\n                                          <div *ngIf=\"field.fieldType == 'DocumentUploadField'\" class=\"input-group\">\r\n                                            <label class=\"input-group-addon btn btn-success\"><i class=\"fa fa-file-text\"></i>\r\n                                                                              <input type=\"file\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\" (change)=\"addFile($event,field)\" accept=\"application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" name=\"file\" id=\"inputImage\">\r\n                                                                              </label>\r\n                                            <input [(ngModel)]=\"field.fieldValue\" [disabled]=\"!field.isEditable\" [required]=\"field.isRequired\" (ngModelChange)='OnfieldChanged($event,field)'\r\n                                              type=\"text\" class=\"form-control\">\r\n                                          </div>\r\n                                          <input [required]=\"field.isRequired\" [disabled]=\"!field.isEditable\" *ngIf=\"field.fieldType =='NumericTextbox'\" [(ngModel)]=\"field.fieldValue\"\r\n                                            (ngModelChange)='OnfieldChanged($event,field)' type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"!field.isValid\" class=\"alert alert-danger\">\r\n                                      <small>{{field.errorMessage}}</small>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div [hidden]=\"!fieldset.isCalculated\" class=\"ibox-title\">\r\n                                <span (click)=\"CalculateFinancials(fieldset,quarter)\" class=\"btn btn-success btn-xs pull-right\">Calculate</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </tab>\r\n                </tabset>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal inmodal\" id=\"commentModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content animated bounceInRight\">\r\n      <div class=\"modal-header bg-primary\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n        <h5 class=\"modal-title\">Mentor Comment</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"commentForm\">\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !commentShortDescription.valid }\">\r\n            <label class=\"control-label\" for=\"commentShortDescription\">Short Description</label>\r\n            <em *ngIf=\"!commentShortDescription.valid\">*</em>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"commentShortDescription\" [(ngModel)]=\"currentWorkItemIncubatorComments.shortDescription\">\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !comment.valid }\">\r\n            <label class=\"control-label\" for=\"comment\">Comment</label>\r\n            <em *ngIf=\"!comment.valid\">*</em>\r\n            <textarea id=\"comment\" rows=\"3\" class=\"form-control\" placeholder=\"Comment\" [(ngModel)]=\"currentWorkItemIncubatorComments.commentText\"\r\n              formControlName=\"comment\"></textarea>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" (click)=\"AddComment()\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal inmodal\" id=\"milestoneModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content animated bounceInRight\">\r\n      <div class=\"modal-header bg-primary\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n        <h5 class=\"modal-title\">Milestone</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"milestoneForm\">\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !shortDescription.valid }\">\r\n            <label class=\"control-label\" for=\"shortDescription\">Short Description</label>\r\n            <em *ngIf=\"!shortDescription.valid\">*</em>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"shortDescription\" [(ngModel)]=\"currentQuarterMilestone.shorDescription\">\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !description.valid }\">\r\n            <label class=\"control-label\" for=\"description\">Description</label>\r\n            <em *ngIf=\"!description.valid\">*</em>\r\n            <textarea id=\"description\" rows=\"3\" class=\"form-control\" placeholder=\"Description\" [(ngModel)]=\"currentQuarterMilestone.description\"\r\n              formControlName=\"description\"></textarea>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !commentShortDescription.valid }\">\r\n              <label class=\"control-label\" for=\"commentShortDescription\">Description</label>\r\n\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" (click)=\"AddMilestone()\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/incubation/quardrant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__ = __webpack_require__("../../../../../src/app/utilities/operationResult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_document_service__ = __webpack_require__("../../../../../src/app/services/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_incubation_service__ = __webpack_require__("../../../../../src/app/services/incubation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__requirements_incubation_workItemIncubatorComments__ = __webpack_require__("../../../../../src/app/requirements/incubation/workItemIncubatorComments.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__requirements_incubation_quarterMilestone__ = __webpack_require__("../../../../../src/app/requirements/incubation/quarterMilestone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__requirements_incubation_quardrantQuarter__ = __webpack_require__("../../../../../src/app/requirements/incubation/quardrantQuarter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__ = __webpack_require__("../../../../../src/app/utilities/calculationManager.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuardrantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var QuardrantComponent = (function () {
    function QuardrantComponent(router, requirementService, notificationService, documentService, route, builder) {
        this.router = router;
        this.requirementService = requirementService;
        this.notificationService = notificationService;
        this.documentService = documentService;
        this.route = route;
        this.builder = builder;
    }
    QuardrantComponent.prototype.ngOnInit = function () {
        this.quardrant = JSON.parse(localStorage.getItem('quardrantView'));
        this.workItem = JSON.parse(localStorage.getItem('workItem'));
        this.workItemIncubatorComments = JSON.parse(localStorage.getItem('comments'));
        this.currentWorkItemIncubatorComments = new __WEBPACK_IMPORTED_MODULE_7__requirements_incubation_workItemIncubatorComments__["a" /* WorkItemIncubatorComments */]();
        this.currentQuarterMilestone = new __WEBPACK_IMPORTED_MODULE_8__requirements_incubation_quarterMilestone__["a" /* QuarterMilestone */]();
        this.emptyQuarter = this.quardrant.quardrantQuarters[0];
        this.currentQuarter = this.quardrant.quardrantQuarters[0];
        this.CleanEmptyQuarter();
        this._formGroup();
    };
    //Form Group
    QuardrantComponent.prototype._formGroup = function () {
        this.comment = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
        this.commentShortDescription = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
        this.commentForm = this.builder.group({
            comment: this.comment,
            commentShortDescription: this.commentShortDescription,
        });
        this.shortDescription = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
        this.description = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
        this.milestoneForm = this.builder.group({
            shortDescription: this.shortDescription,
            description: this.description,
        });
    };
    QuardrantComponent.prototype.addFile = function (event, field) {
        var fi = event.target;
        if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            if (field.fieldValue != null && field.fieldValue.length > 0) {
                field.isNew = false;
            }
            field.fieldValue = fileToUpload.name;
            field.isDirty = field.isDirty;
        }
    };
    QuardrantComponent.prototype.updateRequirementAfterSelect = function (event, field, tabIndex) {
        field.isDirty = true;
        if (field.hasDependends) {
        }
    };
    QuardrantComponent.prototype.OnfieldChanged = function (event, currentField) {
        // currentField.isNew = !currentField.isNew;
        currentField.isDirty = true;
    };
    QuardrantComponent.prototype.AddComment = function () {
        var newComment = new __WEBPACK_IMPORTED_MODULE_7__requirements_incubation_workItemIncubatorComments__["a" /* WorkItemIncubatorComments */]();
        var array = (new Date().toTimeString().split(' '));
        newComment.commentText = this.currentWorkItemIncubatorComments.commentText;
        newComment.createdDateTime = array[0] + ',' + array[1] + ',' + array[2] + ',' + array[3];
        newComment.shortDescription = this.currentWorkItemIncubatorComments.shortDescription;
        newComment.workItemID = this.workItem.workItemID;
        newComment.isNew = true;
        // this.currentWorkItemIncubatorComments.createdDateTime = new Date();
        if (this.workItemIncubatorComments) {
            this.workItemIncubatorComments.push(newComment);
        }
        else {
            this.workItemIncubatorComments = [newComment];
        }
        this.requirementService.addComment(newComment)
            .subscribe(function (res) {
            if (res.succeeded) {
            }
        });
        jQuery('#commentModal').modal('hide');
    };
    QuardrantComponent.prototype.AddMilestone = function () {
        var newMilestome = new __WEBPACK_IMPORTED_MODULE_8__requirements_incubation_quarterMilestone__["a" /* QuarterMilestone */]();
        var array = (new Date().toTimeString().split(' '));
        newMilestome.endDate = array[0];
        newMilestome.isNew = true;
        newMilestome.quarterID = this.currentQuarter.quarterID;
        newMilestome.description = this.currentQuarterMilestone.description;
        newMilestome.shorDescription = this.currentQuarterMilestone.shorDescription;
        if (this.currentQuarter.quarterMilestones) {
            this.currentQuarter.quarterMilestones.push(newMilestome);
        }
        else {
            this.currentQuarter.quarterMilestones = [newMilestome];
        }
        debugger;
        this.requirementService.addMilestone(newMilestome)
            .subscribe(function (res) {
            if (res.succeeded) {
            }
        });
        jQuery('#milestoneModal').modal('hide');
    };
    QuardrantComponent.prototype.ShowCommentModal = function () {
        jQuery('#commentModal').modal('show');
        this.currentWorkItemIncubatorComments = new __WEBPACK_IMPORTED_MODULE_7__requirements_incubation_workItemIncubatorComments__["a" /* WorkItemIncubatorComments */]();
    };
    QuardrantComponent.prototype.ShowMilestoleModal = function () {
        jQuery('#milestoneModal').modal('show');
        this.currentQuarterMilestone = new __WEBPACK_IMPORTED_MODULE_8__requirements_incubation_quarterMilestone__["a" /* QuarterMilestone */]();
    };
    QuardrantComponent.prototype.UpdateQuardrant = function () {
        var _this = this;
        debugger;
        var _authenticationResult = new __WEBPACK_IMPORTED_MODULE_2__utilities_operationResult__["a" /* OperationResult */](false, '');
        var valid = this.ValidateRequirement();
        this.quardrant.isValid = valid;
        this.requirementService.updateQuardrant(this.quardrant)
            .subscribe(function (res) {
            _authenticationResult.succeeded = res.succeeded;
            _authenticationResult.message = res.message;
            if (_authenticationResult.succeeded) {
                _this.errorMessage = res.message;
                jQuery('#errorModal').modal('show');
            }
            else {
                _this.errorMessage = res.message;
                jQuery('#errorModal').modal('show');
            }
        });
    };
    ;
    QuardrantComponent.prototype.AddNewQuarterModal = function () {
        var _this = this;
        var quarter = new __WEBPACK_IMPORTED_MODULE_9__requirements_incubation_quardrantQuarter__["a" /* QuardrantQuarter */]();
        quarter.name = 'Quarter ' + (this.quardrant.quardrantQuarters.length + 1);
        quarter.active = true;
        quarter.fieldSetGroups = this.emptyQuarter.fieldSetGroups;
        quarter.isDirty = false;
        quarter.isNew = true;
        quarter.quardrantID = this.quardrant.incubatorQuardrantID;
        quarter.workItem = this.workItem.workItemID;
        // this.quardrant.quardrantQuarters.push(quarter);
        this.requirementService.addQuarter(quarter)
            .subscribe(function (res) {
            if (res.succeeded) {
                _this.quardrant.quardrantQuarters.push(res.quardrantQuarter);
                _this.currentQuarter = res.quardrantQuarter;
            }
        });
    };
    QuardrantComponent.prototype.AddNewQuarter = function () {
    };
    QuardrantComponent.prototype.CleanEmptyQuarter = function () {
        if (this.emptyQuarter.fieldSetGroups) {
            for (var j = 0; j < this.emptyQuarter.fieldSetGroups.length; j++) {
                var currentFieldSetGroup = this.emptyQuarter.fieldSetGroups[j];
                for (var t = 0; t < currentFieldSetGroup.fieldSets.length; t++) {
                    var currentFieldSet = currentFieldSetGroup.fieldSets[t];
                    if (currentFieldSet) {
                        if (currentFieldSet.workItemFields) {
                            for (var i = 0; i < currentFieldSet.workItemFields.length; i++) {
                                var currentField = currentFieldSet.workItemFields[i];
                                if (currentField.fieldValue === '' || currentField.fieldValue === null) {
                                    continue;
                                }
                                else {
                                    currentField.fieldValue = '';
                                    currentField.isNew = true;
                                    currentField.isDirty = false;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    QuardrantComponent.prototype.CalculateFinancials = function (fieldset, quarter) {
        if (this.emptyQuarter.fieldSetGroups) {
            for (var j = 0; j < this.emptyQuarter.fieldSetGroups.length; j++) {
                var currentFieldSetGroup = this.emptyQuarter.fieldSetGroups[j];
                for (var t = 0; t < currentFieldSetGroup.fieldSets.length; t++) {
                    var currentFieldSet = currentFieldSetGroup.fieldSets[t];
                    if (currentFieldSet) {
                        if (currentFieldSet.code === '18' || currentFieldSet.code === '17') {
                            currentFieldSet.isHidden = false;
                            if (currentFieldSet.workItemFields) {
                                for (var i = 0; i < currentFieldSet.workItemFields.length; i++) {
                                    var currentField = currentFieldSet.workItemFields[i];
                                    var first = 0;
                                    var second = 0;
                                    var rev = +fieldset.workItemFields.find(function (x) { return x.mapCode === '35'; }).fieldValue;
                                    ;
                                    switch (currentField.code) {
                                        case '50':
                                            first = +fieldset.workItemFields.find(function (x) { return x.mapCode === '41'; }).fieldValue;
                                            second = rev;
                                            currentField.fieldValue = __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__["a" /* CalculationManager */].calculateProfitmargin(+first, +second).toString();
                                            break;
                                        case '51':
                                            first = +fieldset.workItemFields.find(function (x) { return x.mapCode === '36'; }).fieldValue;
                                            second = rev;
                                            currentField.fieldValue = __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__["a" /* CalculationManager */].calculateGrossProfitMargin(+first, +second).toString();
                                            break;
                                        case '52':
                                            first = +fieldset.workItemFields.find(function (x) { return x.mapCode === '42'; }).fieldValue;
                                            second = +fieldset.workItemFields.find(function (x) { return x.mapCode === '37'; }).fieldValue;
                                            currentField.fieldValue = __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__["a" /* CalculationManager */].calculateCashGeneratingAbilityRatio(+first, +second).toString();
                                            break;
                                        case '53':
                                            first = +fieldset.workItemFields.find(function (x) { return x.mapCode === '45'; }).fieldValue;
                                            second = rev;
                                            currentField.fieldValue = __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__["a" /* CalculationManager */].calculateDebtorsDays(+first, +second).toString();
                                            break;
                                        case '54':
                                            first = +fieldset.workItemFields.find(function (x) { return x.mapCode === '47'; }).fieldValue;
                                            second = +fieldset.workItemFields.find(function (x) { return x.mapCode === '36'; }).fieldValue;
                                            currentField.fieldValue = __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__["a" /* CalculationManager */].calculateCreditorsDays(+first, +second).toString();
                                            break;
                                        case '55':
                                            first = +fieldset.workItemFields.find(function (x) { return x.mapCode === '46'; }).fieldValue;
                                            second = +fieldset.workItemFields.find(function (x) { return x.mapCode === '36'; }).fieldValue;
                                            currentField.fieldValue = __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__["a" /* CalculationManager */].calculateInventoryDays(+first, +second).toString();
                                            break;
                                        case '56':
                                            first = +fieldset.workItemFields.find(function (x) { return x.mapCode === '43'; }).fieldValue;
                                            second = +fieldset.workItemFields.find(function (x) { return x.mapCode === '48'; }).fieldValue;
                                            currentField.fieldValue = __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__["a" /* CalculationManager */].calculateSolvencyTest(+first, +second).toString();
                                            break;
                                        case '57':
                                            first = +fieldset.workItemFields.find(function (x) { return x.mapCode === '44'; }).fieldValue;
                                            second = +fieldset.workItemFields.find(function (x) { return x.mapCode === '38'; }).fieldValue;
                                            currentField.fieldValue = __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__["a" /* CalculationManager */].calculateLiquidityTest(+first, +second).toString();
                                            break;
                                        case '58':
                                            first = +fieldset.workItemFields.find(function (x) { return x.mapCode === '44'; }).fieldValue;
                                            second = +fieldset.workItemFields.find(function (x) { return x.mapCode === '46'; }).fieldValue;
                                            currentField.fieldValue = __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__["a" /* CalculationManager */].calculateAcidTest(+first, +second).toString();
                                            break;
                                        case '59':
                                            first = +fieldset.workItemFields.find(function (x) { return x.mapCode === '48'; }).fieldValue;
                                            second = +fieldset.workItemFields.find(function (x) { return x.mapCode === '49'; }).fieldValue;
                                            currentField.fieldValue = __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__["a" /* CalculationManager */].calculateGearing(+first, +second).toString();
                                            break;
                                        case '60':
                                            first = +fieldset.workItemFields.find(function (x) { return x.mapCode === '41'; }).fieldValue;
                                            second = +fieldset.workItemFields.find(function (x) { return x.mapCode === '49'; }).fieldValue;
                                            currentField.fieldValue = __WEBPACK_IMPORTED_MODULE_10__utilities_calculationManager__["a" /* CalculationManager */].calculateReturnOnEquity(+first, +second).toString();
                                            break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    QuardrantComponent.prototype.ValidateRequirement = function () {
        var result = true;
        if (this.emptyQuarter.fieldSetGroups) {
            for (var j = 0; j < this.emptyQuarter.fieldSetGroups.length; j++) {
                var currentFieldSetGroup = this.emptyQuarter.fieldSetGroups[j];
                for (var t = 0; t < currentFieldSetGroup.fieldSets.length; t++) {
                    var currentFieldSet = currentFieldSetGroup.fieldSets[t];
                    if (currentFieldSet) {
                        if (currentFieldSet.workItemFields) {
                            for (var i = 0; i < currentFieldSet.workItemFields.length; i++) {
                                var currentField = currentFieldSet.workItemFields[i];
                                if (currentField.fieldValue === '' || currentField.fieldValue === null) {
                                    if (currentField.isRequired) {
                                        currentField.isValid = false;
                                        currentField.isDirty = false;
                                        currentField.errorMessage = currentField.name + ' ' + 'is required';
                                        result = result && false;
                                    }
                                    else {
                                        result = result && true;
                                        currentField.errorMessage = '';
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    return QuardrantComponent;
}());
QuardrantComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quardrant-selectoe',
        template: __webpack_require__("../../../../../src/app/views/appviews/incubation/quardrant.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_incubation_service__["a" /* IncubationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_incubation_service__["a" /* IncubationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_document_service__["a" /* DocumentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === "function" && _f || Object])
], QuardrantComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=quardrant.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_user__ = __webpack_require__("../../../../../src/app/views/account/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_operationResult__ = __webpack_require__("../../../../../src/app/utilities/operationResult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_membership_service__ = __webpack_require__("../../../../../src/app/services/membership.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(membershipService, notificationService, router) {
        this.membershipService = membershipService;
        this.notificationService = notificationService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this._user = new __WEBPACK_IMPORTED_MODULE_2__account_user__["a" /* User */]('', '');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var _authenticationResult = new __WEBPACK_IMPORTED_MODULE_3__utilities_operationResult__["a" /* OperationResult */](false, '');
        this.membershipService.login(this._user)
            .subscribe(function (res) {
            _authenticationResult.succeeded = res.succeeded;
            _authenticationResult.message = res.message;
            _this.errorMessage = res.message;
            if (_authenticationResult.succeeded) {
                localStorage.setItem('user', JSON.stringify(res.user));
                var user = JSON.parse(localStorage.getItem('user'));
                var role = user.userRoleViews[0].roleID;
                if (role === 1) {
                    localStorage.setItem('workItem', JSON.stringify(res.workItem));
                    _this.router.navigate(['workItem'], { queryParams: { workItemID: res.workItem.workItemID,
                            stausID: res.workItem.workItemStatusInfor.statusID,
                            statusCode: res.workItem.workItemStatusInfor.statusCode,
                            statusText: res.workItem.workItemStatusInfor.status,
                            clientId: res.workItem.primaryClient.clientID,
                            registrationNo: res.workItem.primaryClient.registrationNo } });
                }
                else if (res.workItem.workItemStatusInfor && res.workItem.workItemStatusInfor.statusID === 7) {
                    localStorage.setItem('user', JSON.stringify(res.user));
                    _this.router.navigate(['incubation']);
                }
                else {
                    localStorage.setItem('user', JSON.stringify(res.user));
                    _this.router.navigate(['starterview']);
                }
            }
            else {
                _this.notificationService.printErrorMessage(_authenticationResult.message);
            }
        });
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/views/appviews/login.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_membership_service__["a" /* MembershipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_membership_service__["a" /* MembershipService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/login.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center loginscreen  animated fadeInDown\">\n    <div>\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n         {{errorMessage}}\n      </div>\n        <h3>Welcome to Sefate</h3>\n        <form class=\"m-t\"  #loginForm=\"ngForm\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-lg\" placeholder=\"Username\" [(ngModel)]=\"_user.Username\"\n                               name=\"username\" id=\"username\" #username=\"ngModel\" required />\n                        <div [hidden]=\"username.valid || username.untouched\" class=\"alert alert-danger\">\n                            Username is required\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control input-lg\" placeholder=\"Password\" [(ngModel)]=\"_user.Password\"\n                               name=\"password\" id=\"password\" #password=\"ngModel\" required/>\n                        <div [hidden]=\"password.valid || password.untouched\" class=\"alert alert-danger\">\n                            Password is required\n                        </div>\n                    </div>\n                   <button type=\"submit\" class=\"btn btn-primary block full-width m-b\" (click)=\"login()\" [disabled]=\"!loginForm.form.valid\">Login</button>\n\n                    <a [routerLink]=\"['/resetpassword']\"><small>Forgot password?</small></a>\n                    <p class=\"text-muted text-center\"><small>Do not have an account?</small></p>\n                    <a [routerLink]=\"['/signup']\" class=\"btn btn-sm btn-white btn-block\">Create an account</a>\n        </form>\n        <p class=\"m-t\"> <small>We take business to higher levels</small> </p>\n    </div>\n            <div class=\"modal inmodal fade\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header bg-infor\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                        <h4 class=\"modal-title\">Error</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <p>{{errorMessage}}</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/registrationNotification.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"text-center m-t-lg\">\r\n                <h1>\r\n                    You have succeffully Registered an account with MyGrowthFund\r\n                </h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/registrationNotification.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationNotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationNotificationComponent = (function () {
    function RegistrationNotificationComponent() {
        // this.nav = document.querySelector('nav.navbar');
    }
    RegistrationNotificationComponent.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
    };
    RegistrationNotificationComponent.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    return RegistrationNotificationComponent;
}());
RegistrationNotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'registrationNotification',
        template: __webpack_require__("../../../../../src/app/views/appviews/registrationNotification.html")
    }),
    __metadata("design:paramtypes", [])
], RegistrationNotificationComponent);

//# sourceMappingURL=registrationNotification.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/signup.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"middle-box text-center loginscreen   animated fadeInDown\">\r\n        <div>\r\n            <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\r\n                {{errorMessage}}\r\n            </div>\r\n            <div *ngIf=\"successMessage\" class=\"alert alert-success\">\r\n                {{successMessage}}\r\n            </div>\r\n            <h3>Register to Safate</h3>\r\n            <p>Create account to see it in action.</p>\r\n            <form class=\"m-t\" #registerForm =\"ngForm\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control input-lg\" placeholder=\"Company name\" [(ngModel)]=\"_newUser.FullName\"\r\n                               name=\"fullname\" #fullname=\"ngModel\" required>\r\n                        <div [hidden]=\"fullname.valid || fullname.untouched\" class=\"alert alert-danger\">\r\n                            Company name is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control input-lg\" placeholder=\"CIPC Reg Number\" [(ngModel)]=\"_newUser.Username\"\r\n                               name=\"username\" #username=\"ngModel\" required>\r\n                        <div [hidden]=\"username.valid || username.untouched\" class=\"alert alert-danger\">\r\n                            Username is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" class=\"form-control input-lg\" placeholder=\"Email\" [(ngModel)]=\"_newUser.Email\"\r\n                               name=\"email\" #email=\"ngModel\" required>\r\n                        <div [hidden]=\"email.valid || email.untouched\" class=\"alert alert-danger\">\r\n                            Email is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control input-lg\" placeholder=\"Password\" [(ngModel)]=\"_newUser.Password\"\r\n                               name=\"password\" #password=\"ngModel\" required>\r\n                        <div [hidden]=\"password.valid || password.untouched\" class=\"alert alert-danger\">\r\n                            Password is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn btn-primary block full-width m-b\" (click)=\"register()\" [disabled]=\"!registerForm.form.valid\">Register</button>\r\n                    </div>\r\n                <p class=\"text-muted text-center\"><small>Already have an account?</small></p>\r\n                <a class=\"btn btn-sm btn-white btn-block\" [routerLink]=\"['/login']\">Login</a>\r\n            </form>\r\n            <p class=\"m-t\"> <small>We take business to higher levels &copy; 2014</small> </p>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_registration__ = __webpack_require__("../../../../../src/app/views/account/registration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_operationResult__ = __webpack_require__("../../../../../src/app/utilities/operationResult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_membership_service__ = __webpack_require__("../../../../../src/app/services/membership.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignUpComponent = (function () {
    function SignUpComponent(membershipService, notificationService, router) {
        this.membershipService = membershipService;
        this.notificationService = notificationService;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this._newUser = new __WEBPACK_IMPORTED_MODULE_2__account_registration__["a" /* Registration */]('', '', '', '');
    };
    SignUpComponent.prototype.register = function () {
        var _this = this;
        var _registrationResult = new __WEBPACK_IMPORTED_MODULE_3__utilities_operationResult__["a" /* OperationResult */](false, '');
        this.membershipService.register(this._newUser)
            .subscribe(function (res) {
            _registrationResult.succeeded = res.succeeded;
            _registrationResult.message = res.message;
            if (_registrationResult.succeeded) {
                _this.router.navigate(['confirmaccount']);
            }
            else {
                _this.errorMessage = _registrationResult.message;
            }
        });
    };
    ;
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'signup',
        template: __webpack_require__("../../../../../src/app/views/appviews/signup.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_membership_service__["a" /* MembershipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_membership_service__["a" /* MembershipService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SignUpComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/starter.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div *ngFor=\"let record of statusReport.statusRecord\" class=\"col-md-2\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <span class=\"label label-success pull-right\">{{record.description}}</span>\n            <h4 class=\"no-margins\">{{record.numberOfRecords}} </h4>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\" id=\"ibox2\">\n      <div class=\"col-lg-12\" id=\"workItems\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title bg-primary\">\n            <h5> Company Applications </h5>\n            <iboxtools></iboxtools>\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"row m-b-sm m-t-sm\">\n              <div class=\"col-md-1\">\n                <button type=\"button\" (click)=\"GetWorkItemGrid()\" id=\"loading-example-btn\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-refresh\"></i> Refresh</button>\n              </div>\n              <div class=\"col-md-11\">\n                <div class=\"input-group\"><input (ngModelChange)='onFilterChanged($event)' [ngModel]='searchText' type=\"text\" placeholder=\"Search\"\n                    class=\"input-sm form-control\"> <span class=\"input-group-btn\">\n                                                      <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span></div>\n              </div>\n            </div>\n            <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th>Item ID</th>\n                    <th>Client Name </th>\n                    <th>Registration No </th>\n                    <th>Status </th>\n                    <th>Created Date </th>\n                    <th>Modified Date </th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr (click)=\"showProfileOnClick(item)\" *ngFor=\"let item of currentGridPageResul.data\">\n                    <td>{{ item.workItemID }}</td>\n                    <td>{{ item.primaryClient.clientName }}</td>\n                    <td>{{ item.primaryClient.registrationNo }}</td>\n                    <td><span [ngClass]=\"setStatusCSS(item.workItemStatusInfor.statusCode)\">{{ item.workItemStatusInfor.status }}</span></td>\n                    <td>{{ item.createdDate }}</td>\n                    <td>{{ item.modifiedDate }}</td>\n                    <td>\n                      <div class=\"row\">\n                        <div class=\"col-lg-6\">\n                          <a (click)=\"ViewWorkItem(item)\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-folder\"></i> View </a>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-9 m-b-xs\">\n                <div data-toggle=\"buttons\" class=\"btn-group\">\n                  <label (click)=\"SetCurrentPage(page)\" *ngFor=\"let page of gridPageResuls\" [ngClass]=\"page.active ? 'btn btn-sm btn-primary active' : 'btn btn-sm btn-white'\"> <input type=\"radio\" id=\"option1\" name=\"options\"> {{page.pageNumber}} </label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"profile\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 sidebar-collapse\">\n            <div class=\"ibox\">\n              <div class=\"ibox-content\">\n                <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                    <div class=\"col-lg-2 pull-right\">\n                      <a (click)=\"hideProfileOnClick()\" class=\"btn btn-danger btn-xs\">close</a>\n                    </div>\n                    <div class=\"col-lg-2 pull-right\">\n                      <a (click)=\"clientReview()\" class=\"btn btn-info btn-xs\">full profile</a>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <h2>{{currentProfile.primaryClient.clientName}}</h2>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-5\">\n                    <dl class=\"dl-horizontal\">\n                      <dt>Status:</dt>\n                      <dd><span class=\"label label-primary\">{{currentProfile.workItemStatusInfor.status}}</span></dd>\n                    </dl>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-5\">\n                    <dl class=\"dl-horizontal\">\n                      <dt>Created by:</dt>\n                      <dd *ngIf=\"currentProfile.createdBy\">{{currentProfile.createdBy.fullname}}</dd>\n                      <dt>Item ID:</dt>\n                      <dd>{{currentProfile.workItemID}}</dd>\n                      <dt>Reg no:</dt>\n                      <dd>{{currentProfile.primaryClient.registrationNo}}</dd>\n                      <dt>Contact Person:</dt>\n                      <dd> {{currentProfile.clientProfile.contactPerson}} </dd>\n                      <dt>Contact:</dt>\n                      <dd> {{currentProfile.clientProfile.contacts}} </dd>\n                      <dt>Website:</dt>\n                      <dd> {{currentProfile.clientProfile.website}} </dd>\n                    </dl>\n                  </div>\n                </div>\n                <div class=\"row m-t-sm\">\n                  <div class=\"col-lg-12\">\n                    <div class=\"panel blank-panel\">\n                      <div class=\"panel-heading\">\n                        <div class=\"panel-options\">\n                          <ul class=\"nav nav-tabs\">\n                            <li class=\"active\"><a href=\"#tab-1\" data-toggle=\"tab\">Entity Documents</a></li>\n                            <li class=\"\"><a href=\"#tab-2\" data-toggle=\"tab\">Timeline</a></li>\n                          </ul>\n                        </div>\n                      </div>\n\n                      <div class=\"panel-body\">\n                        <div class=\"tab-content\">\n                          <div class=\"tab-pane active\" id=\"tab-1\">\n                            <div class=\"row\">\n                              <div class=\"col-lg-12\">\n                                <div class=\"ibox float-e-margins\">\n                                  <div class=\"ibox-title\">\n                                    <iboxtools></iboxtools>\n                                  </div>\n                                  <div class=\"ibox-content\">\n                                    <div>\n                                      <div class=\"feed-activity-list\">\n                                        <div *ngFor=\" let documentField of currentProfile.workItemDocuments\" class=\"feed-element\">\n                                          <div class=\"media-body \">\n                                            <span [ngClass]=\"GetDocumentStatusCSS(documentField.documentStatus.statusID)\">{{GetDocumentStatusText(documentField.documentStatus.statusID)}}</span>\n                                            <a (click)=\"GetFileById(documentField)\"> <strong>{{documentField.documentName}}</strong></a>\n                                            <br>\n                                            <small class=\"text-muted\">{{documentField.documentType}}</small>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"tab-pane\" id=\"tab-2\">\n                            <div class=\"row\">\n                              <div class=\"col-lg-12\">\n                                <div class=\"ibox float-e-margins\">\n                                  <div class=\"ibox-content\">\n                                    <table class=\"table table-hover no-margins\">\n                                      <thead>\n                                        <tr>\n                                          <th>Status</th>\n                                          <th>Date</th>\n                                          <th>User</th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                        <tr *ngFor=\"let timeline of currentProfile.workItemTimeLine\">\n                                          <td><span class=\"label label-primary\">{{timeline.workItemStage}}</span> </td>\n                                          <td><i class=\"fa fa-clock-o\"></i> {{timeline.createDate}}</td>\n                                          <td>{{timeline.createdUser}}</td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/starterview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requirements_workItemGrid__ = __webpack_require__("../../../../../src/app/requirements/workItemGrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_requirements_service__ = __webpack_require__("../../../../../src/app/services/requirements.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__ = __webpack_require__("../../../../../src/app/services/timeline.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workItem_workItem__ = __webpack_require__("../../../../../src/app/workItem/workItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities_operationResult__ = __webpack_require__("../../../../../src/app/utilities/operationResult.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utilities_GridPage__ = __webpack_require__("../../../../../src/app/utilities/GridPage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utilities_search_statusReport__ = __webpack_require__("../../../../../src/app/utilities/search/statusReport.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utilities_search_statusRecord__ = __webpack_require__("../../../../../src/app/utilities/search/statusRecord.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__workItem_client__ = __webpack_require__("../../../../../src/app/workItem/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__workItem_workItemStatusInfor__ = __webpack_require__("../../../../../src/app/workItem/workItemStatusInfor.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var StarterViewComponent = (function () {
    function StarterViewComponent(router, workItemService, notificationService, requirementService, route) {
        this.router = router;
        this.workItemService = workItemService;
        this.notificationService = notificationService;
        this.requirementService = requirementService;
        this.route = route;
        this.searchText = '';
        this.nav = document.querySelector('nav.navbar');
    }
    StarterViewComponent.prototype.ngOnInit = function () {
        this.showSpinner();
        this.nav.className += " white-bg";
        this.gridPageResuls = [];
        this.currentGridPageResul = new __WEBPACK_IMPORTED_MODULE_8__utilities_GridPage__["a" /* GridPageResul */]();
        this.workItemsGrid = new __WEBPACK_IMPORTED_MODULE_1__requirements_workItemGrid__["a" /* WorkItemGridView */]();
        this.originalworkItemsGrid = new __WEBPACK_IMPORTED_MODULE_1__requirements_workItemGrid__["a" /* WorkItemGridView */]();
        this.statusReport = new __WEBPACK_IMPORTED_MODULE_9__utilities_search_statusReport__["a" /* StatusReport */]();
        this.GetWorkItemGrid();
        jQuery('#profile').hide();
        var client = new __WEBPACK_IMPORTED_MODULE_11__workItem_client__["a" /* Client */](1, '1');
        var status = new __WEBPACK_IMPORTED_MODULE_12__workItem_workItemStatusInfor__["a" /* WorkItemStatusInfor */](0, 'undefined', '1');
        this.currentProfile = new __WEBPACK_IMPORTED_MODULE_6__workItem_workItem__["a" /* WorkItem */](client, status, null, null, null);
    };
    StarterViewComponent.prototype.GetFileById = function (id) {
        window.open(this.requirementService.GetDownloadfileUrl(id.documentID));
        document.getElementById("addProductCloseButton").click();
    };
    StarterViewComponent.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    StarterViewComponent.prototype.GetWorkItemGrid = function () {
        var _this = this;
        this.workItemService.workItemGrid()
            .subscribe(function (res) {
            _this.workItemsGrid.workItems = res.workItems;
            _this.originalworkItemsGrid.workItems = res.workItems;
            _this.SetgridPageResuls();
            _this.setStatusReport();
            _this.currentGridPageResul = _this.gridPageResuls[0];
            _this.searchText = '';
            _this.showSpinner();
        });
    };
    ;
    StarterViewComponent.prototype.test = function () {
        debugger;
        var test = 'dd';
    };
    StarterViewComponent.prototype.setStatusCSS = function (status) {
        switch (status) {
            case '5':
                return 'label label-success';
            case '1':
                return 'label label-warning';
            case '3':
                return 'label label-info';
            case '4':
                return 'label label-info';
            case '6':
                return 'label label-primary';
            case '7':
                return 'label label-danger';
        }
    };
    StarterViewComponent.prototype.UpdateWorkItemStatus = function (workItem) {
        var _authenticationResult = new __WEBPACK_IMPORTED_MODULE_7__utilities_operationResult__["a" /* OperationResult */](false, '');
        debugger;
        localStorage.setItem('workItem', JSON.stringify(workItem));
        if (workItem.workItemStatusInfor.statusCode === '8') {
            this.router.navigate(['dashboards/dashboard2']);
        }
        else {
            this.router.navigate(['workItem'], {
                queryParams: {
                    workItemID: workItem.workItemID,
                    stausID: workItem.workItemStatusInfor.statusID,
                    statusCode: workItem.workItemStatusInfor.statusCode,
                    statusText: workItem.workItemStatusInfor.status,
                    clientId: workItem.primaryClient.clientID,
                    registrationNo: workItem.primaryClient.registrationNo
                }
            });
        }
        //  }
    };
    ;
    StarterViewComponent.prototype.ViewWorkItem = function (workItem) {
        this.UpdateWorkItemStatus(workItem);
    };
    StarterViewComponent.prototype.GetPage = function (pageNumber) {
        var end = pageNumber * 10;
        var start = end - 10;
        var newRecords = this.workItemsGrid.workItems.slice(start, end);
    };
    StarterViewComponent.prototype.showProfile = function () {
        jQuery('#ibox2').children('.ibox-content').toggleClass('sk-loading');
    };
    StarterViewComponent.prototype.onFilterChanged = function (filter) {
        this.searchText = filter;
        debugger;
        if (this.searchText) {
            if (this.workItemsGrid != null) {
                this.workItemsGrid.workItems = this.originalworkItemsGrid.workItems.filter(function (item) { return item.workItemID === +filter || item.primaryClient.clientName.includes(filter) || item.primaryClient.registrationNo.includes(filter); });
            }
        }
        else {
            this.workItemsGrid = this.originalworkItemsGrid;
        }
        if (filter === '') {
            this.workItemsGrid = this.originalworkItemsGrid;
        }
        this.SetgridPageResuls();
        this.currentGridPageResul = this.gridPageResuls[0];
    };
    StarterViewComponent.prototype.SetgridPageResuls = function () {
        var i, j, page, k = 0;
        var chunk = 10;
        this.gridPageResuls = [];
        debugger;
        for (i = 0, j = this.workItemsGrid.workItems.length; i < j; i += chunk) {
            page = this.workItemsGrid.workItems.slice(i, i + chunk);
            var gridPage = new __WEBPACK_IMPORTED_MODULE_8__utilities_GridPage__["a" /* GridPageResul */]();
            gridPage.data = page;
            gridPage.pageNumber = ++k;
            if (k === 1) {
                gridPage.active = true;
            }
            this.gridPageResuls.push(gridPage);
        }
    };
    StarterViewComponent.prototype.SetCurrentPage = function (pageGrid) {
        if (pageGrid) {
            for (var i = 0; i < this.gridPageResuls.length; i++) {
                this.gridPageResuls[i].active = false;
            }
            pageGrid.active = true;
            this.currentGridPageResul = pageGrid;
        }
    };
    StarterViewComponent.prototype.setStatusReport = function () {
        var _loop_1 = function (i) {
            var record = new __WEBPACK_IMPORTED_MODULE_10__utilities_search_statusRecord__["a" /* StatusRecord */]();
            var recordWorkItems = this_1.originalworkItemsGrid.workItems.filter(function (x) { return x.workItemStatusInfor.statusCode === i.toString(); });
            if (recordWorkItems && recordWorkItems.length > 0) {
                var first = recordWorkItems[0];
                record.numberOfRecords = recordWorkItems.length;
                record.description = first.workItemStatusInfor.status;
                record.statusID = first.workItemStatusInfor.statusID;
                this_1.statusReport.statusRecord.push(record);
            }
        };
        var this_1 = this;
        for (var i = 0; i < 7; i++) {
            _loop_1(i);
        }
    };
    StarterViewComponent.prototype.showSpinner = function () {
        jQuery('#ibox2').children('.ibox-content').toggleClass('sk-loading');
    };
    StarterViewComponent.prototype.showProfileOnClick = function (item) {
        jQuery('#workItems').removeClass('col-lg-12');
        jQuery('#workItems').addClass('col-lg-6');
        jQuery('#profile').addClass('col-lg-6');
        jQuery('#profile').show();
        this.currentProfile = item;
    };
    StarterViewComponent.prototype.hideProfileOnClick = function () {
        jQuery('#workItems').removeClass('col-lg-6');
        jQuery('#workItems').addClass('col-lg-12');
        jQuery('#profile').removeClass('col-lg-6');
        jQuery('#profile').hide();
    };
    StarterViewComponent.prototype.GetDocumentStatusText = function (statusID) {
        switch (statusID) {
            case 0:
                return 'In Review';
            case 1:
                return 'In progress';
            case 2:
                return 'Approved';
            case 3:
                return 'Rejected';
        }
    };
    StarterViewComponent.prototype.GetDocumentStatusCSS = function (statusID) {
        switch (statusID) {
            case 0:
                return 'btn btn-warning btn-xs pull-right';
            case 1:
                return 'btn btn-info btn-xs pull-right';
            case 2:
                return 'btn btn-success btn-xs pull-right';
            case 3:
                return 'btn btn-danger btn-xs pull-right';
        }
    };
    StarterViewComponent.prototype.clientReview = function () {
        localStorage.setItem('workItem', JSON.stringify(this.currentProfile));
        this.router.navigate(['review']);
    };
    return StarterViewComponent;
}());
StarterViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'starter',
        template: __webpack_require__("../../../../../src/app/views/appviews/starter.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__["a" /* TimelineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_timeline_service__["a" /* TimelineService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_requirements_service__["a" /* RequiremntService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_requirements_service__["a" /* RequiremntService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], StarterViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=starterview.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/submitted.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"text-center m-t-lg\">\r\n                <h1>\r\n                    You have succeffully created a business profile with MyGrowthFund\r\n                </h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/submitted.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmittedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmittedComponent = (function () {
    function SubmittedComponent() {
        // this.nav = document.querySelector('nav.navbar');
    }
    SubmittedComponent.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
    };
    SubmittedComponent.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    return SubmittedComponent;
}());
SubmittedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'submitted',
        template: __webpack_require__("../../../../../src/app/views/appviews/submitted.component.html")
    }),
    __metadata("design:paramtypes", [])
], SubmittedComponent);

//# sourceMappingURL=submitted.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "        <div class=\"wrapper wrapper-content\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                    <div class=\"ibox float-e-margins\">\r\n                        <div class=\"ibox-title\">\r\n                            <span class=\"label label-success pull-right\">Monthly</span>\r\n                            <h5>Views</h5>\r\n                        </div>\r\n                        <div class=\"ibox-content\">\r\n                            <h1 class=\"no-margins\">386,200</h1>\r\n                            <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\r\n                            <small>Total views</small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <div class=\"ibox float-e-margins\">\r\n                        <div class=\"ibox-title\">\r\n                            <span class=\"label label-info pull-right\">Annual</span>\r\n                            <h5>Orders</h5>\r\n                        </div>\r\n                        <div class=\"ibox-content\">\r\n                                    <h1 class=\"no-margins\">80,800</h1>\r\n                                    <div class=\"stat-percent font-bold text-info\">20% <i class=\"fa fa-level-up\"></i></div>\r\n                                    <small>New orders</small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"ibox float-e-margins\">\r\n                        <div class=\"ibox-title\">\r\n                            <span class=\"label label-primary pull-right\">Today</span>\r\n                            <h5>visits</h5>\r\n                        </div>\r\n                        <div class=\"ibox-content\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <h1 class=\"no-margins\">$ 406,420</h1>\r\n                                    <div class=\"font-bold text-navy\">44% <i class=\"fa fa-level-up\"></i> <small>Rapid pace</small></div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <h1 class=\"no-margins\">206,120</h1>\r\n                                    <div class=\"font-bold text-navy\">22% <i class=\"fa fa-level-up\"></i> <small>Slow pace</small></div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"ibox float-e-margins\">\r\n                        <div class=\"ibox-title\">\r\n                            <h5>Monthly income</h5>\r\n                            <div class=\"ibox-tools\">\r\n                                <span class=\"label label-primary\">Updated 12.2015</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ibox-content no-padding\">\r\n                            <div class=\"flot-chart m-t-lg\" style=\"height: 55px;\">\r\n                                <div class=\"flot-chart-content\" id=\"flot-chart1\"></div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"ibox float-e-margins\">\r\n                  <div class=\"ibox-title\">\r\n                      <h5>Custom responsive table </h5>\r\n                      <div class=\"ibox-tools\">\r\n                          <a class=\"collapse-link\">\r\n                              <i class=\"fa fa-chevron-up\"></i>\r\n                          </a>\r\n                          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                              <i class=\"fa fa-wrench\"></i>\r\n                          </a>\r\n                          <ul class=\"dropdown-menu dropdown-user\">\r\n                              <li><a href=\"#\">Config option 1</a>\r\n                              </li>\r\n                              <li><a href=\"#\">Config option 2</a>\r\n                              </li>\r\n                          </ul>\r\n                          <a class=\"close-link\">\r\n                              <i class=\"fa fa-times\"></i>\r\n                          </a>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"ibox-content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-9 m-b-xs\">\r\n                            <div data-toggle=\"buttons\" class=\"btn-group\">\r\n                                <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option1\" name=\"options\"> Day </label>\r\n                                <label class=\"btn btn-sm btn-white active\"> <input type=\"radio\" id=\"option2\" name=\"options\"> Week </label>\r\n                                <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option3\" name=\"options\"> Month </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span class=\"input-group-btn\">\r\n                            <button (click)=\"test()\" type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"table-responsive\">\r\n                      <table class=\"table table-striped\">\r\n                          <thead>\r\n                          <tr>\r\n                              <th>Item ID</th>\r\n                              <th>Client Name </th>\r\n                              <th>Registration No </th>\r\n                              <th>Status </th>\r\n                              <th>Created Date </th>\r\n                              <th>Modified Date </th>\r\n                              <th>Action</th>\r\n                          </tr>\r\n                          </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of workItemsGrid.workItems\">\r\n                                <td>{{ item.WorkItemID }}</td>\r\n                                <td>{{ item.PrimaryClient.ClientName }}</td>\r\n                                <td>{{ item.PrimaryClient.RegistrationNo }}</td>\r\n                                <td>{{ item.Status.Status }}</td>\r\n                                <td>{{ item.createdDate }}</td>\r\n                                <td>{{ item.modifiedDate }}</td>\r\n                                <td>\r\n                                   <a href=\"#\" [ngClass]=\"setStatusCSS(item.workItemStatusInfor.StatusID)\"><i class=\"fa fa-folder\"></i> View </a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requirements_workItemGrid__ = __webpack_require__("../../../../../src/app/requirements/workItemGrid.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this.workItemsGrid = new __WEBPACK_IMPORTED_MODULE_1__requirements_workItemGrid__["a" /* WorkItemGridView */]();
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'timeline',
        template: __webpack_require__("../../../../../src/app/views/appviews/timeline.component.html")
    })
], TimelineComponent);

//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews/userList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>User Access</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a [routerLink]=\"['/starterview']\">Home</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>User Access</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-lg-2\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title bg-primary\">\r\n          <h5>User Information</h5>\r\n          <iboxtools></iboxtools>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <form [formGroup]=\"contactForm\">\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !fullName.valid }\">\r\n              <label class=\"control-label\" for=\"fullName\">Firstname</label>\r\n              <em *ngIf=\"!fullName.valid\">*</em>\r\n              <input id=\"fullName\" type=\"text\" class=\"form-control\" placeholder=\"FirstName\" [(ngModel)]=\"currentUser.fullname\" formControlName=\"fullName\">\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !lastname.valid }\">\r\n              <label class=\"control-label\" for=\"lastname\">Lastname</label>\r\n              <em *ngIf=\"!lastname.valid\">*</em>\r\n              <input id=\"lastname\" type=\"text\" class=\"form-control\" placeholder=\"Lastname\" [(ngModel)]=\"currentUser.lastname\" formControlName=\"lastname\">\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !username.valid }\">\r\n              <label class=\"control-label\" for=\"firstName\">Username</label>\r\n              <em *ngIf=\"!username.valid\">*</em>\r\n              <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"currentUser.username\" formControlName=\"username\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !password.valid }\">\r\n              <label class=\"control-label\" for=\"firstName\">Password</label>\r\n              <em *ngIf=\"!password.valid\">*</em>\r\n              <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"currentUser.password\" formControlName=\"password\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error' : !email.valid }\">\r\n              <label class=\"control-label\" for=\"email\">Email</label>\r\n              <em *ngIf=\"!email.valid\">*</em>\r\n              <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"currentUser.email\" formControlName=\"email\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"phone\">Phone</label>\r\n              <input id=\"phone\" type=\"text\" class=\"form-control\" [(ngModel)]=\"currentUser.phone\" placeholder=\"Phone\" formControlName=\"phone\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"phone\">Role</label>\r\n              <select [(ngModel)]=\"currentUser.role\" data-placeholder=\"Choose a Country...\" class=\"form-control m-b\" formControlName=\"role\">\r\n                            <option [ngValue]=\"undefined\" selected>Please select...</option>\r\n                            <option *ngFor=\"let type of roleList\" [ngValue]=\"type.roleID\">{{type.role}}</option>\r\n                        </select>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <button type=\"submit\" class=\"btn btn-danger\" (click)=\"reset()\">Reset</button>\r\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveContact(contactForm.value)\" *ngIf=\"editContactId == 0\" [disabled]=\"!contactForm.valid\">Create</button>\r\n              <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateContact(contactForm.value)\" *ngIf=\"editContactId > 0\" [disabled]=\"!contactForm.valid\">Update</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"ibox float-e-margins\">\r\n            <div class=\"ibox-title bg-primary\">\r\n              <h5>User List</h5>\r\n              <iboxtools></iboxtools>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped table-bordered table-hover dataTables-example\">\r\n                  <thead>\r\n                    <th>Firstname</th>\r\n                    <th>Lastname</th>\r\n                    <th>Email</th>\r\n                    <th>Phone</th>\r\n                    <th>Option</th>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let user of users\">\r\n                      <td>{{ user.fullname }}</td>\r\n                      <td>{{ user.lastname }}</td>\r\n                      <td>{{ user.email }}</td>\r\n                      <td>{{ user.phone }}</td>\r\n                      <td>\r\n                        <a href=\"javascript:void(0)\" (click)=\"deleteContact($event, user)\" class=\"btn btn-danger btn-xs pull-right\">Delete</a>\r\n                        <a href=\"javascript:void(0)\" (click)=\"editContact($event, user)\" class=\"btn btn-primary btn-xs pull-right\">Edit</a>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews/userList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_registration__ = __webpack_require__("../../../../../src/app/views/account/registration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_validation__ = __webpack_require__("../../../../../src/app/utilities/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_userList_service__ = __webpack_require__("../../../../../src/app/services/userList.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserListComponent = (function () {
    //Constructor
    function UserListComponent(builder, userService) {
        this.builder = builder;
        this.userService = userService;
        this.addmessage = 'Add New Contact';
        this.listmessage = 'All Contact';
        this._formGroup();
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.resmessage = "";
        this.editContactId = 0;
        this.getContacts();
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1__account_registration__["a" /* Registration */]('', '', '', '');
        this.getRoles();
    };
    //Form Group
    UserListComponent.prototype._formGroup = function () {
        this.fullName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__utilities_validation__["a" /* Customvalidators */].emailValidator]));
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('');
        this.lastname = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('');
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('');
        this.phone = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('');
        this.role = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('');
        this.contactForm = this.builder.group({
            fullName: this.fullName,
            email: this.email,
            phone: this.phone,
            lastname: this.lastname,
            username: this.username,
            password: this.password,
            role: this.role
        });
    };
    //Get All
    UserListComponent.prototype.getContacts = function () {
        var _this = this;
        //debugger
        this.userService.getUsers().subscribe(function (res) {
            _this.users = res.users;
        });
    };
    UserListComponent.prototype.getRoles = function () {
        var _this = this;
        //debugger
        this.userService.getRole().subscribe(function (res) {
            debugger;
            _this.roleList = res;
        });
    };
    //Save Form
    UserListComponent.prototype.saveContact = function (contact) {
        var _this = this;
        debugger;
        this.userService.saveUser(contact)
            .subscribe(function (res) {
            _this.resmessage = res.message;
            _this.getContacts();
            _this.reset();
        });
    };
    //Get by ID
    UserListComponent.prototype.editContact = function (e, m) {
        debugger;
        e.preventDefault();
        this.editContactId = m.id;
        debugger;
        this.currentUser = m;
    };
    //Save Form
    UserListComponent.prototype.updateContact = function (contact) {
        var _this = this;
        //debugger
        if (this.editContactId > 0) {
            this.userService.updateUser(contact, this.editContactId)
                .subscribe(function (response) {
                _this.resmessage = response;
                _this.getContacts();
                _this.reset();
            });
        }
    };
    //Delete
    UserListComponent.prototype.deleteContact = function (e, m) {
        var _this = this;
        //debugger
        e.preventDefault();
        var IsConf = confirm('You are about to delete ' + m.firstName + '. Are you sure?');
        if (IsConf) {
            this.userService.deleteUser(m.contactId)
                .subscribe(function (response) {
                _this.resmessage = response;
                _this.getContacts();
            });
        }
    };
    UserListComponent.prototype.reset = function () {
        this.editContactId = 0;
        this._formGroup();
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1__account_registration__["a" /* Registration */]('', '', '', '');
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-list',
        template: __webpack_require__("../../../../../src/app/views/appviews/userList.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_userList_service__["a" /* UserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_userList_service__["a" /* UserListService */]) === "function" && _b || Object])
], UserListComponent);

var _a, _b;
//# sourceMappingURL=userList.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Import Chart.js library

var Dashboard1Component = (function () {
    function Dashboard1Component() {
        // Dounghunt chart
        this.doughnutChartType = 'doughnut';
        this.doughnutChartLabels1 = ['App', 'Software', 'Laptop'];
        this.doughnutChartData1 = [70, 27, 85];
        this.doughnutChartLabels2 = ['App', 'Software', 'Laptop'];
        this.doughnutChartData2 = [300, 50, 100];
        this.colors = [{ backgroundColor: ["#a3e1d4", "#dedede", "#9CC3DA"] }];
        // Main Chart
        this.flotDataset = [
            [[0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 30], [11, 10], [12, 13], [13, 4], [14, 3], [15, 3], [16, 6]],
            [[0, 1], [1, 0], [2, 2], [3, 0], [4, 1], [5, 3], [6, 1], [7, 5], [8, 2], [9, 3], [10, 2], [11, 1], [12, 0], [13, 2], [14, 8], [15, 0], [16, 0]]
        ];
        this.flotOptions = {
            series: { splines: { show: true, tension: 0.4, lineWidth: 1, fill: 0.4 }, },
            grid: { tickColor: "#d5d5d5", borderWidth: 1, color: '#d5d5d5' },
            colors: ["#1ab394", "#1C84C6"],
        };
        // Peity chart
        this.peityType1 = "bar";
        this.peityOptions1 = { fill: ["#1ab394", "#d7d7d7"], width: 100 };
        this.peityType2 = "line";
        this.peityOptions2 = { fill: '#1ab394', stroke: '#169c81', width: 64 };
        // Sparkline chart
        this.sparklineData = [5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7];
        this.sparklineOptions = { type: 'bar', barWidth: 8, height: '150px', barColor: '#1ab394', negBarColor: '#c6c6c6' };
    }
    return Dashboard1Component;
}());
Dashboard1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard1',
        template: __webpack_require__("../../../../../src/app/views/dashboards/dashboard1.template.html")
    })
], Dashboard1Component);

//# sourceMappingURL=dashboard1.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard1.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row  border-bottom white-bg dashboard-header\">\n  <div class=\"col-sm-3\">\n    <h2>Welcome Amelia</h2>\n    <small>You have 42 messages and 6 notifications.</small>\n    <ul class=\"list-group clear-list m-t\">\n      <li class=\"list-group-item fist-item\">\n                                <span class=\"pull-right\">\n                                    09:00 pm\n                                </span>\n        <span class=\"label label-success\">1</span> Please contact me\n      </li>\n      <li class=\"list-group-item\">\n                                <span class=\"pull-right\">\n                                    10:16 am\n                                </span>\n        <span class=\"label label-info\">2</span> Sign a contract\n      </li>\n      <li class=\"list-group-item\">\n                                <span class=\"pull-right\">\n                                    08:22 pm\n                                </span>\n        <span class=\"label label-primary\">3</span> Open new shop\n      </li>\n      <li class=\"list-group-item\">\n                                <span class=\"pull-right\">\n                                    11:06 pm\n                                </span>\n        <span class=\"label label-default\">4</span> Call back to Sylvia\n      </li>\n      <li class=\"list-group-item\">\n                                <span class=\"pull-right\">\n                                    12:00 am\n                                </span>\n        <span class=\"label label-primary\">5</span> Write a letter to Sandra\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"flot-chart dashboard-chart\">\n      <div flotChart class=\"flot-chart-content\" [options]=\"flotOptions\" [dataset]=\"flotDataset\"></div>\n    </div>\n    <div class=\"row text-left\">\n      <div class=\"col-xs-4\">\n        <div class=\" m-l-md\">\n          <span class=\"h4 font-bold m-t block\">$ 406,100</span>\n          <small class=\"text-muted m-b block\">Sales marketing report</small>\n        </div>\n      </div>\n      <div class=\"col-xs-4\">\n        <span class=\"h4 font-bold m-t block\">$ 150,401</span>\n        <small class=\"text-muted m-b block\">Annual sales revenue</small>\n      </div>\n      <div class=\"col-xs-4\">\n        <span class=\"h4 font-bold m-t block\">$ 16,822</span>\n        <small class=\"text-muted m-b block\">Half-year revenue margin</small>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"statistic-box\">\n      <h4>\n        Project Beta progress\n      </h4>\n\n      <p>\n        You have two project with not compleated task.\n      </p>\n\n      <div class=\"row text-center\">\n        <div class=\"col-lg-6\">\n          <div style=\"height: 80px; width: 80px; margin: auto\">\n            <canvas baseChart\n                    [data]=\"doughnutChartData1\"\n                    [labels]=\"doughnutChartLabels1\"\n                    [chartType]=\"doughnutChartType\"\n                    [colors]=\"colors\"\n                    [legend]=\"false\"></canvas>\n          </div>\n          <h5>Kolter</h5>\n        </div>\n        <div class=\"col-lg-6\">\n          <div style=\"height: 80px; width: 80px; margin: auto\">\n            <canvas baseChart\n                    [data]=\"doughnutChartData2\"\n                    [labels]=\"doughnutChartLabels2\"\n                    [chartType]=\"doughnutChartType\"\n                    [colors]=\"colors\"\n                    [legend]=\"false\"></canvas>\n          </div>\n          <h5>Maxtor</h5>\n        </div>\n      </div>\n      <div class=\"m-t\">\n        <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"wrapper wrapper-content\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>New data for the report</h5> <span class=\"label label-primary\">IN+</span>\n              <iboxtools></iboxtools>\n            </div>\n            <div class=\"ibox-content\">\n              <div>\n\n                <div class=\"pull-right text-right\">\n\n                  <span peity [type]=\"peityType1\" [options]=\"peityOptions1\">5,3,9,6,5,9,7,3,5,2,4,7,3,2,7,9,6,4,5,7,3,2,1,0,9,5,6,8,3,2,1</span>\n                  <br/>\n                  <small class=\"font-bold\">$ 20 054.43</small>\n                </div>\n                <h4>NYS report new data!\n                  <br/>\n                  <small class=\"m-r\"><a href=\"#\"> Check the stock price! </a> </small>\n                </h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>Read below comments</h5>\n              <iboxtools></iboxtools>\n            </div>\n            <div class=\"ibox-content no-padding\">\n              <ul class=\"list-group\">\n                <li class=\"list-group-item\">\n                  <p><a class=\"text-info\" href=\"#\">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1 minuts ago</small>\n                </li>\n                <li class=\"list-group-item\">\n                  <p><a class=\"text-info\" href=\"#\">@Stock Man</a> Check this stock chart. This price is crazy! </p>\n                  <div class=\"text-center m\">\n                    <span sparkline [datasets]=\"sparklineData\" [options]=\"sparklineOptions\"></span>\n                  </div>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2 hours ago</small>\n                </li>\n                <li class=\"list-group-item\">\n                  <p><a class=\"text-info\" href=\"#\">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2 minuts ago</small>\n                </li>\n                <li class=\"list-group-item \">\n                  <p><a class=\"text-info\" href=\"#\">@Jonathan Febrick</a> The standard chunk of Lorem Ipsum</p>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1 hour ago</small>\n                </li>\n                <li class=\"list-group-item\">\n                  <p><a class=\"text-info\" href=\"#\">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1 minuts ago</small>\n                </li>\n                <li class=\"list-group-item\">\n                  <p><a class=\"text-info\" href=\"#\">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2 minuts ago</small>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>Your daily feed</h5>\n              <div class=\"ibox-tools\">\n                <span class=\"label label-warning-light pull-right\">10 Messages</span>\n              </div>\n            </div>\n            <div class=\"ibox-content\">\n\n              <div>\n                <div class=\"feed-activity-list\">\n\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/profile.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">5m ago</small>\n                      <strong>Monica Smith</strong> posted a new blog. <br>\n                      <small class=\"text-muted\">Today 5:60 pm - 12.06.2014</small>\n\n                    </div>\n                  </div>\n\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a2.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">2h ago</small>\n                      <strong>Mark Johnson</strong> posted message on <strong>Monica Smith</strong> site. <br>\n                      <small class=\"text-muted\">Today 2:10 pm - 12.06.2014</small>\n                    </div>\n                  </div>\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a3.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">2h ago</small>\n                      <strong>Janet Rosowski</strong> add 1 photo on <strong>Monica Smith</strong>. <br>\n                      <small class=\"text-muted\">2 days ago at 8:30am</small>\n                    </div>\n                  </div>\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a4.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right text-navy\">5h ago</small>\n                      <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br>\n                      <small class=\"text-muted\">Yesterday 1:21 pm - 11.06.2014</small>\n                      <div class=\"actions\">\n                        <a class=\"btn btn-xs btn-white\"><i class=\"fa fa-thumbs-up\"></i> Like </a>\n                        <a class=\"btn btn-xs btn-white\"><i class=\"fa fa-heart\"></i> Love</a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a5.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">2h ago</small>\n                      <strong>Kim Smith</strong> posted message on <strong>Monica Smith</strong> site. <br>\n                      <small class=\"text-muted\">Yesterday 5:20 pm - 12.06.2014</small>\n                      <div class=\"well\">\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n                        Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                      </div>\n                      <div class=\"pull-right\">\n                        <a class=\"btn btn-xs btn-white\"><i class=\"fa fa-thumbs-up\"></i> Like </a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/profile.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">23h ago</small>\n                      <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br>\n                      <small class=\"text-muted\">2 days ago at 2:30 am - 11.06.2014</small>\n                    </div>\n                  </div>\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a7.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">46h ago</small>\n                      <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br>\n                      <small class=\"text-muted\">3 days ago at 7:58 pm - 10.06.2014</small>\n                    </div>\n                  </div>\n                </div>\n\n                <button class=\"btn btn-primary btn-block m-t\"><i class=\"fa fa-arrow-down\"></i> Show More</button>\n\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>Alpha project</h5>\n              <iboxtools></iboxtools>\n            </div>\n            <div class=\"ibox-content ibox-heading\">\n              <h3>You have meeting today!</h3>\n              <small><i class=\"fa fa-map-marker\"></i> Meeting is on 6:00am. Check your schedule to see detail.</small>\n            </div>\n            <div class=\"ibox-content inspinia-timeline\">\n\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-briefcase\"></i>\n                    6:00 am\n                    <br/>\n                    <small class=\"text-navy\">2 hour ago</small>\n                  </div>\n                  <div class=\"col-xs-7 content no-top-border\">\n                    <p class=\"m-b-xs\"><strong>Meeting</strong></p>\n\n                    <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the\n                      sale.</p>\n\n                    <p><span peity [type]=\"peityType2\" [options]=\"peityOptions2\">5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,4,7,3,2,9,8,7,4,5,1,2,9,5,4,7,2,7,7,3,5,2</span></p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-file-text\"></i>\n                    7:00 am\n                    <br/>\n                    <small class=\"text-navy\">3 hour ago</small>\n                  </div>\n                  <div class=\"col-xs-7 content\">\n                    <p class=\"m-b-xs\"><strong>Send documents to Mike</strong></p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-coffee\"></i>\n                    8:00 am\n                    <br/>\n                  </div>\n                  <div class=\"col-xs-7 content\">\n                    <p class=\"m-b-xs\"><strong>Coffee Break</strong></p>\n                    <p>\n                      Go to shop and find some products.\n                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-phone\"></i>\n                    11:00 am\n                    <br/>\n                    <small class=\"text-navy\">21 hour ago</small>\n                  </div>\n                  <div class=\"col-xs-7 content\">\n                    <p class=\"m-b-xs\"><strong>Phone with Jeronimo</strong></p>\n                    <p>\n                      Lorem Ipsum has been the industry's standard dummy text ever since.\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-user-md\"></i>\n                    09:00 pm\n                    <br/>\n                    <small>21 hour ago</small>\n                  </div>\n                  <div class=\"col-xs-7 content\">\n                    <p class=\"m-b-xs\"><strong>Go to the doctor dr Smith</strong></p>\n                    <p>\n                      Find some issue and go to doctor.\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-comments\"></i>\n                    12:50 pm\n                    <br/>\n                    <small class=\"text-navy\">48 hour ago</small>\n                  </div>\n                  <div class=\"col-xs-7 content\">\n                    <p class=\"m-b-xs\"><strong>Chat with Monica and Sandra</strong></p>\n                    <p>\n                      Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                    </p>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"footer\">\n      <div class=\"pull-right\">\n        10GB of <strong>250GB</strong> Free.\n      </div>\n      <div>\n        <strong>Copyright</strong> Example Company &copy; 2014-2017\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_document_service__ = __webpack_require__("../../../../../src/app/services/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_incubation_service__ = __webpack_require__("../../../../../src/app/services/incubation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requirements_incubation_incubatorRequirement__ = __webpack_require__("../../../../../src/app/requirements/incubation/incubatorRequirement.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Dashboard2Component = (function () {
    function Dashboard2Component(router, requirementService, documentService, route) {
        this.router = router;
        this.requirementService = requirementService;
        this.documentService = documentService;
        this.route = route;
        this.data1 = [
            [this.gd(2012, 1, 1), 7], [this.gd(2012, 1, 2), 6], [this.gd(2012, 1, 3), 4], [this.gd(2012, 1, 4), 8],
            [this.gd(2012, 1, 5), 9], [this.gd(2012, 1, 6), 7], [this.gd(2012, 1, 7), 5], [this.gd(2012, 1, 8), 4],
            [this.gd(2012, 1, 9), 7], [this.gd(2012, 1, 10), 8], [this.gd(2012, 1, 11), 9], [this.gd(2012, 1, 12), 6],
            [this.gd(2012, 1, 13), 4], [this.gd(2012, 1, 14), 5], [this.gd(2012, 1, 15), 11], [this.gd(2012, 1, 16), 8],
            [this.gd(2012, 1, 17), 8], [this.gd(2012, 1, 18), 11], [this.gd(2012, 1, 19), 11], [this.gd(2012, 1, 20), 6],
            [this.gd(2012, 1, 21), 6], [this.gd(2012, 1, 22), 8], [this.gd(2012, 1, 23), 11], [this.gd(2012, 1, 24), 13],
            [this.gd(2012, 1, 25), 7], [this.gd(2012, 1, 26), 9], [this.gd(2012, 1, 27), 9], [this.gd(2012, 1, 28), 8],
            [this.gd(2012, 1, 29), 5], [this.gd(2012, 1, 30), 8], [this.gd(2012, 1, 31), 25]
        ];
        this.data2 = [
            [this.gd(2012, 1, 1), 800], [this.gd(2012, 1, 2), 500], [this.gd(2012, 1, 3), 600], [this.gd(2012, 1, 4), 700],
            [this.gd(2012, 1, 5), 500], [this.gd(2012, 1, 6), 456], [this.gd(2012, 1, 7), 800], [this.gd(2012, 1, 8), 589],
            [this.gd(2012, 1, 9), 467], [this.gd(2012, 1, 10), 876], [this.gd(2012, 1, 11), 689], [this.gd(2012, 1, 12), 700],
            [this.gd(2012, 1, 13), 500], [this.gd(2012, 1, 14), 600], [this.gd(2012, 1, 15), 700], [this.gd(2012, 1, 16), 786],
            [this.gd(2012, 1, 17), 345], [this.gd(2012, 1, 18), 888], [this.gd(2012, 1, 19), 888], [this.gd(2012, 1, 20), 888],
            [this.gd(2012, 1, 21), 987], [this.gd(2012, 1, 22), 444], [this.gd(2012, 1, 23), 999], [this.gd(2012, 1, 24), 567],
            [this.gd(2012, 1, 25), 786], [this.gd(2012, 1, 26), 666], [this.gd(2012, 1, 27), 888], [this.gd(2012, 1, 28), 900],
            [this.gd(2012, 1, 29), 178], [this.gd(2012, 1, 30), 555], [this.gd(2012, 1, 31), 993]
        ];
        this.flotDataset = [
            {
                label: "Number of orders",
                data: this.data2,
                color: "#1ab394",
                bars: {
                    show: true,
                    align: "center",
                    barWidth: 24 * 60 * 60 * 600,
                    lineWidth: 0
                }
            }, {
                label: "Payments",
                data: this.data1,
                yaxis: 2,
                color: "#1C84C6",
                lines: {
                    lineWidth: 1,
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.2
                            }, {
                                opacity: 0.4
                            }]
                    }
                },
                splines: {
                    show: false,
                    tension: 0.6,
                    lineWidth: 1,
                    fill: 0.1
                },
            }
        ];
        this.flotOptions = {
            xaxis: {
                mode: "time",
                tickSize: [3, "day"],
                tickLength: 0,
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Arial',
                axisLabelPadding: 10,
                color: "#d5d5d5"
            },
            yaxes: [{
                    position: "left",
                    max: 1070,
                    color: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 3
                }, {
                    position: "right",
                    clolor: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: ' Arial',
                    axisLabelPadding: 67
                }
            ],
            legend: {
                noColumns: 1,
                labelBoxBorderColor: "#000000",
                position: "nw"
            },
            grid: {
                hoverable: false,
                borderWidth: 0
            }
        };
        this.nav = document.querySelector('nav.navbar');
    }
    Dashboard2Component.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
        this.incubatorRequirement = new __WEBPACK_IMPORTED_MODULE_3__requirements_incubation_incubatorRequirement__["a" /* IncubatorRequirement */]();
        this.workItem = JSON.parse(localStorage.getItem('workItem'));
        debugger;
        this.workItemIncubatorComments = this.workItem.workItemIncubationComment;
        this.workItemTimeLine = this.workItem.workItemTimeLine;
        this.GetWorkItemRequirements();
    };
    Dashboard2Component.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    Dashboard2Component.prototype.DrillOntoQuardrant = function (quardrant) {
        localStorage.setItem('quardrantView', JSON.stringify(quardrant));
        localStorage.setItem('comments', JSON.stringify(this.workItemIncubatorComments));
        this.router.navigate(['incubatorquardrant']);
    };
    Dashboard2Component.prototype.GetWorkItemRequirements = function () {
        var _this = this;
        this.requirementService.requirement(this.workItem)
            .subscribe(function (res) {
            _this.incubatorRequirement.incubatorQuardrants = res.incubatorQuardrants;
        });
        //debugger;
    };
    ;
    Dashboard2Component.prototype.LoadQuardrant = function (quardrant) {
        if (quardrant) {
            localStorage.setItem('quardrant', JSON.stringify(quardrant));
            this.router.navigate(['incubatorquardrant']);
        }
    };
    // Flot chart data and options
    Dashboard2Component.prototype.gd = function (year, month, day) {
        return new Date(year, month - 1, day).getTime();
    };
    return Dashboard2Component;
}());
Dashboard2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard2',
        template: __webpack_require__("../../../../../src/app/views/dashboards/dashboard2.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_incubation_service__["a" /* IncubationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_incubation_service__["a" /* IncubationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_document_service__["a" /* DocumentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], Dashboard2Component);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard2.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard2.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n  <div class=\"row\">\n    <div *ngFor=\"let quardrant of incubatorRequirement.incubatorQuardrants\" class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span (click)=\"DrillOntoQuardrant(quardrant)\" class=\"btn btn-success btn-xs pull-right\">Drill down</span>\n          <h5>{{quardrant.name}}</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">{{quardrant.scoreCard.value}}</h1>\n          <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\n          <small>Improvement</small>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Orders</h5>\n          <div class=\"pull-right\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-xs btn-white active\">Today</button>\n              <button type=\"button\" class=\"btn btn-xs btn-white\">Monthly</button>\n              <button type=\"button\" class=\"btn btn-xs btn-white\">Annual</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"flot-chart\">\n                <div flotChart class=\"flot-chart-content\" [options]=\"flotOptions\" [dataset]=\"flotDataset\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Review comments</h5>\n          <iboxtools></iboxtools>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"feed-activity-list\">\n            <div *ngFor =\"let comment of workItemIncubatorComments\" class=\"feed-element\">\n              <div>\n                <strong>{{comment.shortDescription}}</strong>\n                <div>{{comment.commentText}}</div>\n                <small class=\"text-muted\">{{comment.createdDateTime}}</small>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>Client Timeline</h5>\n              <iboxtools></iboxtools>\n            </div>\n            <div class=\"ibox-content\">\n              <table class=\"table table-hover no-margins\">\n                <thead>\n                <tr>\n                  <th>Status</th>\n                  <th>Date</th>\n                  <th>User</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let timeline of workItemTimeLine\">\n                  <td><span class=\"label label-primary\">{{timeline.workItemStage}}</span> </td>\n                  <td><i class=\"fa fa-clock-o\"></i> {{timeline.createDate}}</td>\n                  <td>{{timeline.createdUser}}</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard3Component = (function () {
    function Dashboard3Component() {
        this.lineChartData = [
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Example data 1' },
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Example data 2' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.lineChartColors = [
            {
                backgroundColor: "rgba(26,179,148,0.5)",
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
            },
            {
                backgroundColor: "rgba(220,220,220,0.5)",
                borderColor: "rgba(220,220,220,1)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                pointBorderColor: "#fff",
            }
        ];
        this.peityType1 = "bar";
        this.peityType2 = "line";
        this.peityOptions1 = { fill: ["#1ab394", "#d7d7d7"], width: 100 };
        this.peityOptions2 = { fill: ["#1ab394", "#d7d7d7"] };
        this.peityOptions3 = { fill: '#1ab394', stroke: '#169c81' };
        this.nav = document.querySelector('nav.navbar');
        this.wrapper = document.getElementById('page-wrapper');
    }
    Dashboard3Component.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
        this.wrapper.className += " sidebar-content";
    };
    Dashboard3Component.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
        this.wrapper.classList.remove("sidebar-content");
    };
    return Dashboard3Component;
}());
Dashboard3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard3',
        template: __webpack_require__("../../../../../src/app/views/dashboards/dashboard3.template.html")
    }),
    __metadata("design:paramtypes", [])
], Dashboard3Component);

//# sourceMappingURL=dashboard3.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard3.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-panel\">\n  <div>\n    <h4>Messages <span class=\"badge badge-info pull-right\">16</span></h4>\n    <div class=\"feed-element\">\n      <a href=\"#\" class=\"pull-left\">\n        <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a1.jpg\">\n      </a>\n      <div class=\"media-body\">\n        There are many variations of passages of Lorem Ipsum available.\n        <br>\n        <small class=\"text-muted\">Today 4:21 pm</small>\n      </div>\n    </div>\n    <div class=\"feed-element\">\n      <a href=\"#\" class=\"pull-left\">\n        <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a2.jpg\">\n      </a>\n      <div class=\"media-body\">\n        TIt is a long established fact that.\n        <br>\n        <small class=\"text-muted\">Yesterday 2:45 pm</small>\n      </div>\n    </div>\n    <div class=\"feed-element\">\n      <a href=\"#\" class=\"pull-left\">\n        <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a3.jpg\">\n      </a>\n      <div class=\"media-body\">\n        Many desktop publishing packages.\n        <br>\n        <small class=\"text-muted\">Yesterday 1:10 pm</small>\n      </div>\n    </div>\n    <div class=\"feed-element\">\n      <a href=\"#\" class=\"pull-left\">\n        <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a4.jpg\">\n      </a>\n      <div class=\"media-body\">\n        The generated Lorem Ipsum is therefore always free.\n        <br>\n        <small class=\"text-muted\">Monday 8:37 pm</small>\n      </div>\n    </div>\n  </div>\n  <div class=\"m-t-md\">\n    <h4>Statistics</h4>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.\n    </p>\n    <div class=\"row m-t-sm\">\n      <div class=\"col-md-6\">\n        <span peity [type]=\"peityType1\" [options]=\"peityOptions2\">5,3,9,6,5,9,7,3,5,2</span>\n        <h5><strong>169</strong> Posts</h5>\n      </div>\n      <div class=\"col-md-6\">\n        <span peity [type]=\"peityType2\" [options]=\"peityOptions3\">5,3,9,6,5,9,7,3,5,2</span>\n        <h5><strong>28</strong> Orders</h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"m-t-md\">\n    <h4>Discussion</h4>\n    <div>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <span class=\"badge badge-primary\">16</span>\n          General topic\n        </li>\n        <li class=\"list-group-item \">\n          <span class=\"badge badge-info\">12</span>\n          The generated Lorem\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"badge badge-warning\">7</span>\n          There are many variations\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"wrapper wrapper-content\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-content\">\n          <div>\n                                        <span class=\"pull-right text-right\">\n                                        <small>Average value of sales in the past month in: <strong>United states</strong></small>\n                                            <br/>\n                                            All sales: 162,862\n                                        </span>\n\n            <h1 class=\"m-b-xs\">$ 50,992</h1>\n\n            <h3 class=\"font-bold no-margins\">\n              Half-year revenue margin\n            </h3>\n            <small>Sales marketing.</small>\n          </div>\n\n          <div>\n            <canvas baseChart height=\"70\"\n                    [datasets]=\"lineChartData\"\n                    [labels]=\"lineChartLabels\"\n                    [options]=\"lineChartOptions\"\n                    [chartType]=\"lineChartType\"\n                    [colors]=\"lineChartColors\">\n            </canvas>\n          </div>\n\n          <div class=\"m-t-md\">\n            <small class=\"pull-right\">\n              <i class=\"fa fa-clock-o\"> </i>\n              Update on 16.07.2015\n            </small>\n            <small>\n              <strong>Analysis of sales:</strong> The value has been changed over time, and last month reached a level over $50,000.\n            </small>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-primary pull-right\">Today</span>\n          <h5>visits</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">22 285,400</h1>\n          <div class=\"stat-percent font-bold text-navy\">20% <i class=\"fa fa-level-up\"></i></div>\n          <small>New orders</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-info pull-right\">Monthly</span>\n          <h5>Orders</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">60 420,600</h1>\n          <div class=\"stat-percent font-bold text-info\">40% <i class=\"fa fa-level-up\"></i></div>\n          <small>New orders</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-warning pull-right\">Annual</span>\n          <h5>Income</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">$ 120 430,800</h1>\n          <div class=\"stat-percent font-bold text-warning\">16% <i class=\"fa fa-level-up\"></i></div>\n          <small>New orders</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>New data for the report</h5>\n          <iboxtools></iboxtools>\n        </div>\n        <div class=\"ibox-content ibox-heading\">\n          <h3>Stock price up\n            <div class=\"stat-percent text-navy\">34% <i class=\"fa fa-level-up\"></i></div>\n          </h3>\n          <small><i class=\"fa fa-stack-exchange\"></i> New economic data from the previous quarter.</small>\n        </div>\n        <div class=\"ibox-content\">\n          <div>\n\n            <div class=\"pull-right text-right\">\n\n              <span peity [type]=\"peityType1\" [options]=\"peityOptions1\">5,3,9,6,5,9,7,3,5,2,4,7,3,2,7,9,6,4,5,7,3,2,1,0,9,5,6,8,3,2,1</span>\n              <br/>\n              <small class=\"font-bold\">$ 20 054.43</small>\n            </div>\n            <h4>NYS report new data!\n              <br/>\n              <small class=\"m-r\"><a href=\"graph_flot.html\"> Check the stock price! </a> </small>\n            </h4>\n          </div>\n        </div>\n      </div>\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Read below comments and tweets</h5>\n          <iboxtools></iboxtools>\n        </div>\n        <div class=\"ibox-content no-padding\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              <p><a class=\"text-info\" href=\"#\">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n              <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1 minuts ago</small>\n            </li>\n            <li class=\"list-group-item\">\n              <p><a class=\"text-info\" href=\"#\">@Stock Man</a> Check this stock chart. This price is crazy! </p>\n              <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2 hours ago</small>\n            </li>\n            <li class=\"list-group-item\">\n              <p><a class=\"text-info\" href=\"#\">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>\n              <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2 minuts ago</small>\n            </li>\n            <li class=\"list-group-item \">\n              <p><a class=\"text-info\" href=\"#\">@Jonathan Febrick</a> The standard chunk of Lorem Ipsum</p>\n              <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1 hour ago</small>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Timeline</h5>\n          <span class=\"label label-primary\">Meeting today</span>\n          <iboxtools></iboxtools>\n        </div>\n\n        <div class=\"ibox-content inspinia-timeline\">\n\n          <div class=\"timeline-item\">\n            <div class=\"row\">\n              <div class=\"col-xs-3 date\">\n                <i class=\"fa fa-briefcase\"></i>\n                6:00 am\n                <br/>\n                <small class=\"text-navy\">2 hour ago</small>\n              </div>\n              <div class=\"col-xs-7 content no-top-border\">\n                <p class=\"m-b-xs\"><strong>Meeting</strong></p>\n\n                <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products.</p>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"timeline-item\">\n            <div class=\"row\">\n              <div class=\"col-xs-3 date\">\n                <i class=\"fa fa-file-text\"></i>\n                7:00 am\n                <br/>\n                <small class=\"text-navy\">3 hour ago</small>\n              </div>\n              <div class=\"col-xs-7 content\">\n                <p class=\"m-b-xs\"><strong>Send documents to Mike</strong></p>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"timeline-item\">\n            <div class=\"row\">\n              <div class=\"col-xs-3 date\">\n                <i class=\"fa fa-coffee\"></i>\n                8:00 am\n                <br/>\n              </div>\n              <div class=\"col-xs-7 content\">\n                <p class=\"m-b-xs\"><strong>Coffee Break</strong></p>\n                <p>\n                  Go to shop and find some products.\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"timeline-item\">\n            <div class=\"row\">\n              <div class=\"col-xs-3 date\">\n                <i class=\"fa fa-phone\"></i>\n                11:00 am\n                <br/>\n                <small class=\"text-navy\">21 hour ago</small>\n              </div>\n              <div class=\"col-xs-7 content\">\n                <p class=\"m-b-xs\"><strong>Phone with Jeronimo</strong></p>\n                <p>\n                  Lorem Ipsum has been the industry's standard dummy text ever since.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard4Component = (function () {
    function Dashboard4Component() {
        this.lineChartData = [
            { data: [48, 48, 60, 39, 56, 37, 30], label: 'Example data 1' },
            { data: [65, 59, 40, 51, 36, 25, 40], label: 'Example data 2' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.lineChartColors = [
            {
                backgroundColor: "rgba(26,179,148,0.5)",
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
            },
            {
                backgroundColor: "rgba(220,220,220,0.5)",
                borderColor: "rgba(220,220,220,1)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                pointBorderColor: "#fff",
            }
        ];
        this.flotDataset = [
            { label: "Data 1", data: [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]], color: '#17a084' },
            { label: "Data 2", data: [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]], color: '#127e68' }
        ];
        this.flotOptions = {
            xaxis: {
                tickDecimals: 0
            },
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                    },
                },
                points: {
                    width: 0.1,
                    show: false
                },
            },
            grid: {
                show: false,
                borderWidth: 0
            },
            legend: {
                show: false,
            }
        };
        this.peityType = "pie";
        this.peityOptions = { fill: ['#1ab394', '#d7d7d7', '#ffffff'] };
        this.nav = document.querySelector('nav.navbar');
    }
    Dashboard4Component.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
    };
    Dashboard4Component.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    return Dashboard4Component;
}());
Dashboard4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard4',
        template: __webpack_require__("../../../../../src/app/views/dashboards/dashboard4.template.html")
    }),
    __metadata("design:paramtypes", [])
], Dashboard4Component);

//# sourceMappingURL=dashboard4.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard4.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n  <div class=\"row\">\n    <div class=\"col-lg-2\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-success pull-right\">Monthly</span>\n          <h5>Views</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">386,200</h1>\n          <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\n          <small>Total views</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-2\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-info pull-right\">Annual</span>\n          <h5>Orders</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">80,800</h1>\n          <div class=\"stat-percent font-bold text-info\">20% <i class=\"fa fa-level-up\"></i></div>\n          <small>New orders</small>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-primary pull-right\">Today</span>\n          <h5>visits</h5>\n        </div>\n        <div class=\"ibox-content\">\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <h1 class=\"no-margins\">406,42</h1>\n              <div class=\"font-bold text-navy\">44% <i class=\"fa fa-level-up\"></i> <small>Rapid pace</small></div>\n            </div>\n            <div class=\"col-md-6\">\n              <h1 class=\"no-margins\">206,12</h1>\n              <div class=\"font-bold text-navy\">22% <i class=\"fa fa-level-up\"></i> <small>Slow pace</small></div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Monthly income</h5>\n          <div class=\"ibox-tools\">\n            <span class=\"label label-primary\">Updated 12.2015</span>\n          </div>\n        </div>\n        <div class=\"ibox-content no-padding\">\n          <div class=\"flot-chart m-t-lg\" style=\"height: 55px;\">\n            <div flotChart class=\"flot-chart-content\" [options]=\"flotOptions\" [dataset]=\"flotDataset\"></div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-8\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-content\">\n          <div>\n                                        <span class=\"pull-right text-right\">\n                                        <small>Average value of sales in the past month in: <strong>United states</strong></small>\n                                            <br/>\n                                            All sales: 162,862\n                                        </span>\n            <h3 class=\"font-bold no-margins\">\n              Half-year revenue margin\n            </h3>\n            <small>Sales marketing.</small>\n          </div>\n\n          <div class=\"m-t-sm\">\n\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div>\n                  <canvas baseChart height=\"114\"\n                          [datasets]=\"lineChartData\"\n                          [labels]=\"lineChartLabels\"\n                          [options]=\"lineChartOptions\"\n                          [chartType]=\"lineChartType\"\n                          [colors]=\"lineChartColors\">\n                  </canvas>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <ul class=\"stat-list m-t-lg\">\n                  <li>\n                    <h2 class=\"no-margins\">2,346</h2>\n                    <small>Total orders in period</small>\n                    <div class=\"progress progress-mini\">\n                      <div class=\"progress-bar\" style=\"width: 48%;\"></div>\n                    </div>\n                  </li>\n                  <li>\n                    <h2 class=\"no-margins \">4,422</h2>\n                    <small>Orders in last month</small>\n                    <div class=\"progress progress-mini\">\n                      <div class=\"progress-bar\" style=\"width: 60%;\"></div>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"m-t-md\">\n            <small class=\"pull-right\">\n              <i class=\"fa fa-clock-o\"> </i>\n              Update on 16.07.2015\n            </small>\n            <small>\n              <strong>Analysis of sales:</strong> The value has been changed over time, and last month reached a level over $50,000.\n            </small>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-warning pull-right\">Data has changed</span>\n          <h5>User activity</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Pages / Visit</small>\n              <h4>236 321.80</h4>\n            </div>\n\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">% New Visits</small>\n              <h4>46.11%</h4>\n            </div>\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Last week</small>\n              <h4>432.021</h4>\n            </div>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Pages / Visit</small>\n              <h4>643 321.10</h4>\n            </div>\n\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">% New Visits</small>\n              <h4>92.43%</h4>\n            </div>\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Last week</small>\n              <h4>564.554</h4>\n            </div>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Pages / Visit</small>\n              <h4>436 547.20</h4>\n            </div>\n\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">% New Visits</small>\n              <h4>150.23%</h4>\n            </div>\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Last week</small>\n              <h4>124.990</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Custom responsive table </h5>\n          <iboxtools></iboxtools>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-9 m-b-xs\">\n              <div data-toggle=\"buttons\" class=\"btn-group\">\n                <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option1\" name=\"options\"> Day </label>\n                <label class=\"btn btn-sm btn-white active\"> <input type=\"radio\" id=\"option2\" name=\"options\"> Week </label>\n                <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option3\" name=\"options\"> Month </label>\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span></div>\n            </div>\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\">\n              <thead>\n              <tr>\n\n                <th>#</th>\n                <th>Project </th>\n                <th>Name </th>\n                <th>Phone </th>\n                <th>Company </th>\n                <th>Completed </th>\n                <th>Task</th>\n                <th>Date</th>\n                <th>Action</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td>1</td>\n                <td>Project <small>This is example of project</small></td>\n                <td>Patrick Smith</td>\n                <td>0800 051213</td>\n                <td>Inceptos Hymenaeos Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">0.52/1.561</span></td>\n                <td>20%</td>\n                <td>Jul 14, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Alpha project</td>\n                <td>Alice Jackson</td>\n                <td>0500 780909</td>\n                <td>Nec Euismod In Company</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                <td>40%</td>\n                <td>Jul 16, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td>Betha project</td>\n                <td>John Smith</td>\n                <td>0800 1111</td>\n                <td>Erat Volutpat</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">3/1</span></td>\n                <td>75%</td>\n                <td>Jul 18, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Gamma project</td>\n                <td>Anna Jordan</td>\n                <td>(016977) 0648</td>\n                <td>Tellus Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                <td>18%</td>\n                <td>Jul 22, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Alpha project</td>\n                <td>Alice Jackson</td>\n                <td>0500 780909</td>\n                <td>Nec Euismod In Company</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                <td>40%</td>\n                <td>Jul 16, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>1</td>\n                <td>Project <small>This is example of project</small></td>\n                <td>Patrick Smith</td>\n                <td>0800 051213</td>\n                <td>Inceptos Hymenaeos Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">5/1</span></td>\n                <td>20%</td>\n                <td>Jul 14, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Gamma project</td>\n                <td>Anna Jordan</td>\n                <td>(016977) 0648</td>\n                <td>Tellus Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                <td>18%</td>\n                <td>Jul 22, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>1</td>\n                <td>Project <small>This is example of project</small></td>\n                <td>Patrick Smith</td>\n                <td>0800 051213</td>\n                <td>Inceptos Hymenaeos Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/2</span></td>\n                <td>20%</td>\n                <td>Jul 14, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Alpha project</td>\n                <td>Alice Jackson</td>\n                <td>0500 780909</td>\n                <td>Nec Euismod In Company</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                <td>40%</td>\n                <td>Jul 16, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td>Betha project</td>\n                <td>John Smith</td>\n                <td>0800 1111</td>\n                <td>Erat Volutpat</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">3/1</span></td>\n                <td>75%</td>\n                <td>Jul 18, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Gamma project</td>\n                <td>Anna Jordan</td>\n                <td>(016977) 0648</td>\n                <td>Tellus Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                <td>18%</td>\n                <td>Jul 22, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Alpha project</td>\n                <td>Alice Jackson</td>\n                <td>0500 780909</td>\n                <td>Nec Euismod In Company</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                <td>40%</td>\n                <td>Jul 16, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>1</td>\n                <td>Project <small>This is example of project</small></td>\n                <td>Patrick Smith</td>\n                <td>0800 051213</td>\n                <td>Inceptos Hymenaeos Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">0.52/1.561</span></td>\n                <td>20%</td>\n                <td>Jul 14, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Gamma project</td>\n                <td>Anna Jordan</td>\n                <td>(016977) 0648</td>\n                <td>Tellus Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4,9</span></td>\n                <td>18%</td>\n                <td>Jul 22, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard41.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard41Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard41Component = (function () {
    function Dashboard41Component() {
        this.lineChartData = [
            { data: [48, 48, 60, 39, 56, 37, 30], label: 'Example data 1' },
            { data: [65, 59, 40, 51, 36, 25, 40], label: 'Example data 2' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.lineChartColors = [
            {
                backgroundColor: "rgba(26,179,148,0.5)",
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
            },
            {
                backgroundColor: "rgba(220,220,220,0.5)",
                borderColor: "rgba(220,220,220,1)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                pointBorderColor: "#fff",
            }
        ];
        this.flotDataset = [
            { label: "Data 1", data: [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]], color: '#17a084' },
            { label: "Data 2", data: [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]], color: '#127e68' }
        ];
        this.flotOptions = {
            xaxis: {
                tickDecimals: 0
            },
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                    },
                },
                points: {
                    width: 0.1,
                    show: false
                },
            },
            grid: {
                show: false,
                borderWidth: 0
            },
            legend: {
                show: false,
            }
        };
        this.peityType = "pie";
        this.peityOptions = { fill: ['#1ab394', '#d7d7d7', '#ffffff'] };
        this.nav = document.querySelector('nav.navbar');
        this.body = document.querySelector("body");
    }
    Dashboard41Component.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
        this.body.className += " top-navigation";
    };
    Dashboard41Component.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
        this.body.classList.remove("top-navigation");
    };
    return Dashboard41Component;
}());
Dashboard41Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard41',
        template: __webpack_require__("../../../../../src/app/views/dashboards/dashboard41.template.html")
    }),
    __metadata("design:paramtypes", [])
], Dashboard41Component);

//# sourceMappingURL=dashboard41.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard41.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <span class=\"label label-success pull-right\">Monthly</span>\n            <h5>Views</h5>\n          </div>\n          <div class=\"ibox-content\">\n            <h1 class=\"no-margins\">386,200</h1>\n            <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\n            <small>Total views</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <span class=\"label label-info pull-right\">Annual</span>\n            <h5>Orders</h5>\n          </div>\n          <div class=\"ibox-content\">\n            <h1 class=\"no-margins\">80,800</h1>\n            <div class=\"stat-percent font-bold text-info\">20% <i class=\"fa fa-level-up\"></i></div>\n            <small>New orders</small>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <span class=\"label label-primary pull-right\">Today</span>\n            <h5>visits</h5>\n          </div>\n          <div class=\"ibox-content\">\n\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h1 class=\"no-margins\">$ 406,420</h1>\n                <div class=\"font-bold text-navy\">44% <i class=\"fa fa-level-up\"></i> <small>Rapid pace</small></div>\n              </div>\n              <div class=\"col-md-6\">\n                <h1 class=\"no-margins\">206,120</h1>\n                <div class=\"font-bold text-navy\">22% <i class=\"fa fa-level-up\"></i> <small>Slow pace</small></div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <h5>Monthly income</h5>\n            <div class=\"ibox-tools\">\n              <span class=\"label label-primary\">Updated 12.2015</span>\n            </div>\n          </div>\n          <div class=\"ibox-content no-padding\">\n            <div class=\"flot-chart m-t-lg\" style=\"height: 55px;\">\n              <div flotChart class=\"flot-chart-content\" [options]=\"flotOptions\" [dataset]=\"flotDataset\"></div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-content\">\n            <div>\n                                        <span class=\"pull-right text-right\">\n                                        <small>Average value of sales in the past month in: <strong>United states</strong></small>\n                                            <br/>\n                                            All sales: 162,862\n                                        </span>\n              <h3 class=\"font-bold no-margins\">\n                Half-year revenue margin\n              </h3>\n              <small>Sales marketing.</small>\n            </div>\n\n            <div class=\"m-t-sm\">\n\n              <div class=\"row\">\n                <div class=\"col-md-8\">\n                  <div>\n                    <canvas baseChart height=\"114\"\n                            [datasets]=\"lineChartData\"\n                            [labels]=\"lineChartLabels\"\n                            [options]=\"lineChartOptions\"\n                            [chartType]=\"lineChartType\"\n                            [colors]=\"lineChartColors\">\n                    </canvas>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <ul class=\"stat-list m-t-lg\">\n                    <li>\n                      <h2 class=\"no-margins\">2,346</h2>\n                      <small>Total orders in period</small>\n                      <div class=\"progress progress-mini\">\n                        <div class=\"progress-bar\" style=\"width: 48%;\"></div>\n                      </div>\n                    </li>\n                    <li>\n                      <h2 class=\"no-margins \">4,422</h2>\n                      <small>Orders in last month</small>\n                      <div class=\"progress progress-mini\">\n                        <div class=\"progress-bar\" style=\"width: 60%;\"></div>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"m-t-md\">\n              <small class=\"pull-right\">\n                <i class=\"fa fa-clock-o\"> </i>\n                Update on 16.07.2015\n              </small>\n              <small>\n                <strong>Analysis of sales:</strong> The value has been changed over time, and last month reached a level over $50,000.\n              </small>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <span class=\"label label-warning pull-right\">Data has changed</span>\n            <h5>User activity</h5>\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"row\">\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Pages / Visit</small>\n                <h4>236 321.80</h4>\n              </div>\n\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">% New Visits</small>\n                <h4>46.11%</h4>\n              </div>\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Last week</small>\n                <h4>432.021</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"row\">\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Pages / Visit</small>\n                <h4>643 321.10</h4>\n              </div>\n\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">% New Visits</small>\n                <h4>92.43%</h4>\n              </div>\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Last week</small>\n                <h4>564.554</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"row\">\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Pages / Visit</small>\n                <h4>436 547.20</h4>\n              </div>\n\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">% New Visits</small>\n                <h4>150.23%</h4>\n              </div>\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Last week</small>\n                <h4>124.990</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <h5>Custom responsive table </h5>\n            <iboxtools></iboxtools>\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"row\">\n              <div class=\"col-sm-9 m-b-xs\">\n                <div data-toggle=\"buttons\" class=\"btn-group\">\n                  <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option1\" name=\"options\"> Day </label>\n                  <label class=\"btn btn-sm btn-white active\"> <input type=\"radio\" id=\"option2\" name=\"options\"> Week </label>\n                  <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option3\" name=\"options\"> Month </label>\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span></div>\n              </div>\n            </div>\n            <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n                <thead>\n                <tr>\n\n                  <th>#</th>\n                  <th>Project </th>\n                  <th>Name </th>\n                  <th>Phone </th>\n                  <th>Company </th>\n                  <th>Completed </th>\n                  <th>Task</th>\n                  <th>Date</th>\n                  <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>0800 051213</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">0.52/1.561</span></td>\n                  <td>20%</td>\n                  <td>Jul 14, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>0500 780909</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                  <td>40%</td>\n                  <td>Jul 16, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Betha project</td>\n                  <td>John Smith</td>\n                  <td>0800 1111</td>\n                  <td>Erat Volutpat</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">3/1</span></td>\n                  <td>75%</td>\n                  <td>Jul 18, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>(016977) 0648</td>\n                  <td>Tellus Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                  <td>18%</td>\n                  <td>Jul 22, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>0500 780909</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                  <td>40%</td>\n                  <td>Jul 16, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>0800 051213</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">5/1</span></td>\n                  <td>20%</td>\n                  <td>Jul 14, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>(016977) 0648</td>\n                  <td>Tellus Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                  <td>18%</td>\n                  <td>Jul 22, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>0800 051213</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/2</span></td>\n                  <td>20%</td>\n                  <td>Jul 14, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>0500 780909</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                  <td>40%</td>\n                  <td>Jul 16, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Betha project</td>\n                  <td>John Smith</td>\n                  <td>0800 1111</td>\n                  <td>Erat Volutpat</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">3/1</span></td>\n                  <td>75%</td>\n                  <td>Jul 18, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>(016977) 0648</td>\n                  <td>Tellus Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                  <td>18%</td>\n                  <td>Jul 22, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>0500 780909</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                  <td>40%</td>\n                  <td>Jul 16, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>0800 051213</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">0.52/1.561</span></td>\n                  <td>20%</td>\n                  <td>Jul 14, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>(016977) 0648</td>\n                  <td>Tellus Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4,9</span></td>\n                  <td>18%</td>\n                  <td>Jul 22, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard5Component = (function () {
    function Dashboard5Component() {
        this.flotDataset = [
            [[0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 20], [11, 10], [12, 13], [13, 4], [14, 7], [15, 8], [16, 12]],
            [[0, 0], [1, 2], [2, 7], [3, 4], [4, 11], [5, 4], [6, 2], [7, 5], [8, 11], [9, 5], [10, 4], [11, 1], [12, 5], [13, 2], [14, 5], [15, 2], [16, 0]]
        ];
        this.flotOptions = {
            series: {
                lines: {
                    show: false,
                    fill: true
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.4
                },
                points: {
                    radius: 0,
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderWidth: 2,
                color: 'transparent'
            },
            colors: ["#1ab394", "#1C84C6"],
            xaxis: {},
            yaxis: {},
            tooltip: false
        };
        this.sparklineData = [34, 43, 43, 35, 44, 32, 44, 52];
        this.sparklineData2 = [32, 11, 25, 37, 41, 32, 34, 42];
        this.sparklineOptions = { type: 'line', width: '100%', height: '50', lineColor: '#1ab394', fillColor: "transparent" };
        this.nav = document.querySelector('nav.navbar');
    }
    Dashboard5Component.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
    };
    Dashboard5Component.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    return Dashboard5Component;
}());
Dashboard5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard5',
        template: __webpack_require__("../../../../../src/app/views/dashboards/dashboard5.template.html")
    }),
    __metadata("design:paramtypes", [])
], Dashboard5Component);

//# sourceMappingURL=dashboard5.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboard5.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeIn\">\n\n  <div class=\"p-w-md m-t-sm\">\n    <div class=\"row\">\n\n      <div class=\"col-sm-4\">\n        <h1 class=\"m-b-xs\">\n          26,900\n        </h1>\n        <small>\n          Sales in current month\n        </small>\n        <div class=\"m-b-sm\">\n        <span sparkline [datasets]=\"sparklineData\" [options]=\"sparklineOptions\"></span>\n        </div>\n          <div class=\"row\">\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">Pages / Visit</small>\n            <h4>236 321.80</h4>\n          </div>\n\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">% New Visits</small>\n            <h4>46.11%</h4>\n          </div>\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">Last week</small>\n            <h4>432.021</h4>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-sm-4\">\n        <h1 class=\"m-b-xs\">\n          98,100\n        </h1>\n        <small>\n          Sales in last 24h\n        </small>\n        <div class=\"m-b-sm\">\n          <span sparkline [datasets]=\"sparklineData2\" [options]=\"sparklineOptions\"></span>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">Pages / Visit</small>\n            <h4>166 781.80</h4>\n          </div>\n\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">% New Visits</small>\n            <h4>22.45%</h4>\n          </div>\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">Last week</small>\n            <h4>862.044</h4>\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"col-sm-4\">\n\n        <div class=\"row m-t-xs\">\n          <div class=\"col-xs-6\">\n            <h5 class=\"m-b-xs\">Income last month</h5>\n            <h1 class=\"no-margins\">160,000</h1>\n            <div class=\"font-bold text-navy\">98% <i class=\"fa fa-bolt\"></i></div>\n          </div>\n          <div class=\"col-xs-6\">\n            <h5 class=\"m-b-xs\">Sals current year</h5>\n            <h1 class=\"no-margins\">42,120</h1>\n            <div class=\"font-bold text-navy\">98% <i class=\"fa fa-bolt\"></i></div>\n          </div>\n        </div>\n\n\n        <table class=\"table small m-t-sm\">\n          <tbody>\n          <tr>\n            <td>\n              <strong>142</strong> Projects\n\n            </td>\n            <td>\n              <strong>22</strong> Messages\n            </td>\n\n          </tr>\n          <tr>\n            <td>\n              <strong>61</strong> Comments\n            </td>\n            <td>\n              <strong>54</strong> Articles\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <strong>154</strong> Companies\n            </td>\n            <td>\n              <strong>32</strong> Clients\n            </td>\n          </tr>\n          </tbody>\n        </table>\n\n\n\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"small pull-left col-md-3 m-l-lg m-t-md\">\n          <strong>Sales char</strong> have evolved over the years sometimes.\n        </div>\n        <div class=\"small pull-right col-md-3 m-t-md text-right\">\n          <strong>There are many</strong> variations of passages of Lorem Ipsum available, but the majority have suffered.\n        </div>\n        <div class=\"flot-chart m-b-xl\">\n          <div flotChart class=\"flot-chart-content\" [options]=\"flotOptions\" [dataset]=\"flotDataset\"></div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"ibox\">\n\n\n\n          <div class=\"ibox-content\">\n\n            <div class=\"row\">\n              <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"product_name\">Project Name</label>\n                  <input type=\"text\" id=\"product_name\" name=\"product_name\" value=\"\" placeholder=\"Project Name\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"price\">Name</label>\n                  <input type=\"text\" id=\"price\" name=\"price\" value=\"\" placeholder=\"Name\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"quantity\">Company</label>\n                  <input type=\"text\" id=\"quantity\" name=\"quantity\" value=\"\" placeholder=\"Company\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"status\">Status</label>\n                  <select name=\"status\" id=\"status\" class=\"form-control\">\n                    <option value=\"1\" selected=\"\">Completed</option>\n                    <option value=\"0\">Pending</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n\n                <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Master project</td>\n                  <td>Patrick Smith</td>\n                  <td>$892,074</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><strong>20%</strong></td>\n                  <td>Jul 14, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>$963,486</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><strong>40%</strong></td>\n                  <td>Jul 16, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Betha project</td>\n                  <td>John Smith</td>\n                  <td>$996,824</td>\n                  <td>Erat Volutpat</td>\n                  <td><strong>75%</strong></td>\n                  <td>Jul 18, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>$105,192</td>\n                  <td>Tellus Ltd</td>\n                  <td><strong>18%</strong></td>\n                  <td>Jul 22, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>$674,803</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><strong>40%</strong></td>\n                  <td>Jul 16, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Master project</td>\n                  <td>Patrick Smith</td>\n                  <td>$174,729</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><strong>20%</strong></td>\n                  <td>Jul 14, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>$823,198</td>\n                  <td>Tellus Ltd</td>\n                  <td><strong>18%</strong></td>\n                  <td>Jul 22, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>$778,696</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><strong>20%</strong></td>\n                  <td>Jul 14, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>$861,063</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><strong>40%</strong></td>\n                  <td>Jul 16, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Betha project</td>\n                  <td>John Smith</td>\n                  <td>$109,125</td>\n                  <td>Erat Volutpat</td>\n                  <td><strong>75%</strong></td>\n                  <td>Jul 18, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>$600,978</td>\n                  <td>Tellus Ltd</td>\n                  <td><strong>18%</strong></td>\n                  <td>Jul 22, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>$150,161</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><strong>40%</strong></td>\n                  <td>Jul 16, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>$160,586</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><strong>20%</strong></td>\n                  <td>Jul 14, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>$110,612</td>\n                  <td>Tellus Ltd</td>\n                  <td><strong>18%</strong></td>\n                  <td>Jul 22, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/dashboards/dashboards.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard1_component__ = __webpack_require__("../../../../../src/app/views/dashboards/dashboard1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard2_component__ = __webpack_require__("../../../../../src/app/views/dashboards/dashboard2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard3_component__ = __webpack_require__("../../../../../src/app/views/dashboards/dashboard3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard4_component__ = __webpack_require__("../../../../../src/app/views/dashboards/dashboard4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard41_component__ = __webpack_require__("../../../../../src/app/views/dashboards/dashboard41.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard5_component__ = __webpack_require__("../../../../../src/app/views/dashboards/dashboard5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_charts_flotChart__ = __webpack_require__("../../../../../src/app/components/charts/flotChart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_common_iboxtools_iboxtools_module__ = __webpack_require__("../../../../../src/app/components/common/iboxtools/iboxtools.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_charts_peity__ = __webpack_require__("../../../../../src/app/components/charts/peity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_charts_sparkline__ = __webpack_require__("../../../../../src/app/components/charts/sparkline.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_map_jvectorMap__ = __webpack_require__("../../../../../src/app/components/map/jvectorMap.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Chart.js Angular 2 Directive by Valor Software (npm)






var DashboardsModule = (function () {
    function DashboardsModule() {
    }
    return DashboardsModule;
}());
DashboardsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard1_component__["a" /* Dashboard1Component */], __WEBPACK_IMPORTED_MODULE_3__dashboard2_component__["a" /* Dashboard2Component */], __WEBPACK_IMPORTED_MODULE_4__dashboard3_component__["a" /* Dashboard3Component */], __WEBPACK_IMPORTED_MODULE_5__dashboard4_component__["a" /* Dashboard4Component */], __WEBPACK_IMPORTED_MODULE_6__dashboard41_component__["a" /* Dashboard41Component */], __WEBPACK_IMPORTED_MODULE_7__dashboard5_component__["a" /* Dashboard5Component */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_9__components_charts_flotChart__["a" /* FlotModule */], __WEBPACK_IMPORTED_MODULE_10__components_common_iboxtools_iboxtools_module__["a" /* IboxtoolsModule */], __WEBPACK_IMPORTED_MODULE_11__components_charts_peity__["a" /* PeityModule */], __WEBPACK_IMPORTED_MODULE_12__components_charts_sparkline__["a" /* SparklineModule */], __WEBPACK_IMPORTED_MODULE_13__components_map_jvectorMap__["a" /* JVectorMapModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__dashboard1_component__["a" /* Dashboard1Component */], __WEBPACK_IMPORTED_MODULE_3__dashboard2_component__["a" /* Dashboard2Component */], __WEBPACK_IMPORTED_MODULE_4__dashboard3_component__["a" /* Dashboard3Component */], __WEBPACK_IMPORTED_MODULE_5__dashboard4_component__["a" /* Dashboard4Component */], __WEBPACK_IMPORTED_MODULE_6__dashboard41_component__["a" /* Dashboard41Component */], __WEBPACK_IMPORTED_MODULE_7__dashboard5_component__["a" /* Dashboard5Component */]],
    })
], DashboardsModule);

//# sourceMappingURL=dashboards.module.js.map

/***/ }),

/***/ "../../../../../src/app/workItem/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client(_clientType, _clientTypeString) {
        this.clientType = _clientType;
        this.clientTypeString = _clientTypeString;
    }
    return Client;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ "../../../../../src/app/workItem/clientProfile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientProfile; });
var ClientProfile = (function () {
    function ClientProfile() {
    }
    return ClientProfile;
}());

//# sourceMappingURL=clientProfile.js.map

/***/ }),

/***/ "../../../../../src/app/workItem/workItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clientProfile__ = __webpack_require__("../../../../../src/app/workItem/clientProfile.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkItem; });

var WorkItem = (function () {
    function WorkItem(_client, _status, _workItemID, role, user) {
        this.primaryClient = _client;
        this.workItemStatusInfor = _status;
        this.workItemID = _workItemID;
        this.currentRole = role;
        this.currentUser = user;
        this.clientProfile = new __WEBPACK_IMPORTED_MODULE_0__clientProfile__["a" /* ClientProfile */]();
    }
    return WorkItem;
}());

//# sourceMappingURL=workItem.js.map

/***/ }),

/***/ "../../../../../src/app/workItem/workItemStatusInfor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkItemStatusInfor; });
var WorkItemStatusInfor = (function () {
    function WorkItemStatusInfor(_statusID, _status, _statusCode) {
        this.statusID = _statusID;
        this.status = _status;
        this.statusCode = _statusCode;
    }
    return WorkItemStatusInfor;
}());

//# sourceMappingURL=workItemStatusInfor.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../vendor/flot/jquery.flot.js":
/***/ (function(module, exports) {

/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/

// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience

/* Plugin for jQuery for working with colors.
 *
 * Version 1.1.
 *
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */
(function($){$.color={};$.color.make=function(r,g,b,a){var o={};o.r=r||0;o.g=g||0;o.b=b||0;o.a=a!=null?a:1;o.add=function(c,d){for(var i=0;i<c.length;++i)o[c.charAt(i)]+=d;return o.normalize()};o.scale=function(c,f){for(var i=0;i<c.length;++i)o[c.charAt(i)]*=f;return o.normalize()};o.toString=function(){if(o.a>=1){return"rgb("+[o.r,o.g,o.b].join(",")+")"}else{return"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"}};o.normalize=function(){function clamp(min,value,max){return value<min?min:value>max?max:value}o.r=clamp(0,parseInt(o.r),255);o.g=clamp(0,parseInt(o.g),255);o.b=clamp(0,parseInt(o.b),255);o.a=clamp(0,o.a,1);return o};o.clone=function(){return $.color.make(o.r,o.b,o.g,o.a)};return o.normalize()};$.color.extract=function(elem,css){var c;do{c=elem.css(css).toLowerCase();if(c!=""&&c!="transparent")break;elem=elem.parent()}while(elem.length&&!$.nodeName(elem.get(0),"body"));if(c=="rgba(0, 0, 0, 0)")c="transparent";return $.color.parse(c)};$.color.parse=function(str){var res,m=$.color.make;if(res=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10));if(res=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10),parseFloat(res[4]));if(res=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55);if(res=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55,parseFloat(res[4]));if(res=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1],16),parseInt(res[2],16),parseInt(res[3],16));if(res=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1]+res[1],16),parseInt(res[2]+res[2],16),parseInt(res[3]+res[3],16));var name=$.trim(str).toLowerCase();if(name=="transparent")return m(255,255,255,0);else{res=lookupColors[name]||[0,0,0];return m(res[0],res[1],res[2])}};var lookupColors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

// the actual Flot code
(function($) {

	// Cache the prototype hasOwnProperty for faster access

	var hasOwnProperty = Object.prototype.hasOwnProperty;

    // A shim to provide 'detach' to jQuery versions prior to 1.4.  Using a DOM
    // operation produces the same effect as detach, i.e. removing the element
    // without touching its jQuery data.

    // Do not merge this into Flot 0.9, since it requires jQuery 1.4.4+.

    if (!$.fn.detach) {
        $.fn.detach = function() {
            return this.each(function() {
                if (this.parentNode) {
                    this.parentNode.removeChild( this );
                }
            });
        };
    }

	///////////////////////////////////////////////////////////////////////////
	// The Canvas object is a wrapper around an HTML5 <canvas> tag.
	//
	// @constructor
	// @param {string} cls List of classes to apply to the canvas.
	// @param {element} container Element onto which to append the canvas.
	//
	// Requiring a container is a little iffy, but unfortunately canvas
	// operations don't work unless the canvas is attached to the DOM.

	function Canvas(cls, container) {

		var element = container.children("." + cls)[0];

		if (element == null) {

			element = document.createElement("canvas");
			element.className = cls;

			$(element).css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
				.appendTo(container);

			// If HTML5 Canvas isn't available, fall back to [Ex|Flash]canvas

			if (!element.getContext) {
				if (window.G_vmlCanvasManager) {
					element = window.G_vmlCanvasManager.initElement(element);
				} else {
					throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
				}
			}
		}

		this.element = element;

		var context = this.context = element.getContext("2d");

		// Determine the screen's ratio of physical to device-independent
		// pixels.  This is the ratio between the canvas width that the browser
		// advertises and the number of pixels actually present in that space.

		// The iPhone 4, for example, has a device-independent width of 320px,
		// but its screen is actually 640px wide.  It therefore has a pixel
		// ratio of 2, while most normal devices have a ratio of 1.

		var devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio =
				context.webkitBackingStorePixelRatio ||
				context.mozBackingStorePixelRatio ||
				context.msBackingStorePixelRatio ||
				context.oBackingStorePixelRatio ||
				context.backingStorePixelRatio || 1;

		this.pixelRatio = devicePixelRatio / backingStoreRatio;

		// Size the canvas to match the internal dimensions of its container

		this.resize(container.width(), container.height());

		// Collection of HTML div layers for text overlaid onto the canvas

		this.textContainer = null;
		this.text = {};

		// Cache of text fragments and metrics, so we can avoid expensively
		// re-calculating them when the plot is re-rendered in a loop.

		this._textCache = {};
	}

	// Resizes the canvas to the given dimensions.
	//
	// @param {number} width New width of the canvas, in pixels.
	// @param {number} width New height of the canvas, in pixels.

	Canvas.prototype.resize = function(width, height) {

		if (width <= 0 || height <= 0) {
			throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height);
		}

		var element = this.element,
			context = this.context,
			pixelRatio = this.pixelRatio;

		// Resize the canvas, increasing its density based on the display's
		// pixel ratio; basically giving it more pixels without increasing the
		// size of its element, to take advantage of the fact that retina
		// displays have that many more pixels in the same advertised space.

		// Resizing should reset the state (excanvas seems to be buggy though)

		if (this.width != width) {
			element.width = width * pixelRatio;
			element.style.width = width + "px";
			this.width = width;
		}

		if (this.height != height) {
			element.height = height * pixelRatio;
			element.style.height = height + "px";
			this.height = height;
		}

		// Save the context, so we can reset in case we get replotted.  The
		// restore ensure that we're really back at the initial state, and
		// should be safe even if we haven't saved the initial state yet.

		context.restore();
		context.save();

		// Scale the coordinate space to match the display density; so even though we
		// may have twice as many pixels, we still want lines and other drawing to
		// appear at the same size; the extra pixels will just make them crisper.

		context.scale(pixelRatio, pixelRatio);
	};

	// Clears the entire canvas area, not including any overlaid HTML text

	Canvas.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
	};

	// Finishes rendering the canvas, including managing the text overlay.

	Canvas.prototype.render = function() {

		var cache = this._textCache;

		// For each text layer, add elements marked as active that haven't
		// already been rendered, and remove those that are no longer active.

		for (var layerKey in cache) {
			if (hasOwnProperty.call(cache, layerKey)) {

				var layer = this.getTextLayer(layerKey),
					layerCache = cache[layerKey];

				layer.hide();

				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {

								var positions = styleCache[key].positions;

								for (var i = 0, position; position = positions[i]; i++) {
									if (position.active) {
										if (!position.rendered) {
											layer.append(position.element);
											position.rendered = true;
										}
									} else {
										positions.splice(i--, 1);
										if (position.rendered) {
											position.element.detach();
										}
									}
								}

								if (positions.length == 0) {
									delete styleCache[key];
								}
							}
						}
					}
				}

				layer.show();
			}
		}
	};

	// Creates (if necessary) and returns the text overlay container.
	//
	// @param {string} classes String of space-separated CSS classes used to
	//     uniquely identify the text layer.
	// @return {object} The jQuery-wrapped text-layer div.

	Canvas.prototype.getTextLayer = function(classes) {

		var layer = this.text[classes];

		// Create the text layer if it doesn't exist

		if (layer == null) {

			// Create the text layer container, if it doesn't exist

			if (this.textContainer == null) {
				this.textContainer = $("<div class='flot-text'></div>")
					.css({
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						'font-size': "smaller",
						color: "#545454"
					})
					.insertAfter(this.element);
			}

			layer = this.text[classes] = $("<div></div>")
				.addClass(classes)
				.css({
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0
				})
				.appendTo(this.textContainer);
		}

		return layer;
	};

	// Creates (if necessary) and returns a text info object.
	//
	// The object looks like this:
	//
	// {
	//     width: Width of the text's wrapper div.
	//     height: Height of the text's wrapper div.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     positions: Array of positions at which this text is drawn.
	// }
	//
	// The positions array contains objects that look like this:
	//
	// {
	//     active: Flag indicating whether the text should be visible.
	//     rendered: Flag indicating whether the text is currently visible.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     x: X coordinate at which to draw the text.
	//     y: Y coordinate at which to draw the text.
	// }
	//
	// Each position after the first receives a clone of the original element.
	//
	// The idea is that that the width, height, and general 'identity' of the
	// text is constant no matter where it is placed; the placements are a
	// secondary property.
	//
	// Canvas maintains a cache of recently-used text info objects; getTextInfo
	// either returns the cached element or creates a new entry.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {string} text Text string to retrieve info for.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @return {object} a text info object.

	Canvas.prototype.getTextInfo = function(layer, text, font, angle, width) {

		var textStyle, layerCache, styleCache, info;

		// Cast the value to a string, in case we were given a number or such

		text = "" + text;

		// If the font is a font-spec object, generate a CSS font definition

		if (typeof font === "object") {
			textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family;
		} else {
			textStyle = font;
		}

		// Retrieve (or create) the cache for the text's layer and styles

		layerCache = this._textCache[layer];

		if (layerCache == null) {
			layerCache = this._textCache[layer] = {};
		}

		styleCache = layerCache[textStyle];

		if (styleCache == null) {
			styleCache = layerCache[textStyle] = {};
		}

		info = styleCache[text];

		// If we can't find a matching element in our cache, create a new one

		if (info == null) {

			var element = $("<div></div>").html(text)
				.css({
					position: "absolute",
					'max-width': width,
					top: -9999
				})
				.appendTo(this.getTextLayer(layer));

			if (typeof font === "object") {
				element.css({
					font: textStyle,
					color: font.color
				});
			} else if (typeof font === "string") {
				element.addClass(font);
			}

			info = styleCache[text] = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				element: element,
				positions: []
			};

			element.detach();
		}

		return info;
	};

	// Adds a text string to the canvas text overlay.
	//
	// The text isn't drawn immediately; it is marked as rendering, which will
	// result in its addition to the canvas on the next render pass.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number} x X coordinate at which to draw the text.
	// @param {number} y Y coordinate at which to draw the text.
	// @param {string} text Text string to draw.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @param {string=} halign Horizontal alignment of the text; either "left",
	//     "center" or "right".
	// @param {string=} valign Vertical alignment of the text; either "top",
	//     "middle" or "bottom".

	Canvas.prototype.addText = function(layer, x, y, text, font, angle, width, halign, valign) {

		var info = this.getTextInfo(layer, text, font, angle, width),
			positions = info.positions;

		// Tweak the div's position to match the text's alignment

		if (halign == "center") {
			x -= info.width / 2;
		} else if (halign == "right") {
			x -= info.width;
		}

		if (valign == "middle") {
			y -= info.height / 2;
		} else if (valign == "bottom") {
			y -= info.height;
		}

		// Determine whether this text already exists at this position.
		// If so, mark it for inclusion in the next render pass.

		for (var i = 0, position; position = positions[i]; i++) {
			if (position.x == x && position.y == y) {
				position.active = true;
				return;
			}
		}

		// If the text doesn't exist at this position, create a new entry

		// For the very first position we'll re-use the original element,
		// while for subsequent ones we'll clone it.

		position = {
			active: true,
			rendered: false,
			element: positions.length ? info.element.clone() : info.element,
			x: x,
			y: y
		};

		positions.push(position);

		// Move the element to its final position within the container

		position.element.css({
			top: Math.round(y),
			left: Math.round(x),
			'text-align': halign	// In case the text wraps
		});
	};

	// Removes one or more text strings from the canvas text overlay.
	//
	// If no parameters are given, all text within the layer is removed.
	//
	// Note that the text is not immediately removed; it is simply marked as
	// inactive, which will result in its removal on the next render pass.
	// This avoids the performance penalty for 'clear and redraw' behavior,
	// where we potentially get rid of all text on a layer, but will likely
	// add back most or all of it later, as when redrawing axes, for example.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number=} x X coordinate of the text.
	// @param {number=} y Y coordinate of the text.
	// @param {string=} text Text string to remove.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which the text is rotated, in degrees.
	//     Angle is currently unused, it will be implemented in the future.

	Canvas.prototype.removeText = function(layer, x, y, text, font, angle) {
		if (text == null) {
			var layerCache = this._textCache[layer];
			if (layerCache != null) {
				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {
								var positions = styleCache[key].positions;
								for (var i = 0, position; position = positions[i]; i++) {
									position.active = false;
								}
							}
						}
					}
				}
			}
		} else {
			var positions = this.getTextInfo(layer, text, font, angle).positions;
			for (var i = 0, position; position = positions[i]; i++) {
				if (position.x == x && position.y == y) {
					position.active = false;
				}
			}
		}
	};

	///////////////////////////////////////////////////////////////////////////
	// The top-level container for the entire plot.

    function Plot(placeholder, data_, options_, plugins) {
        // data is on the form:
        //   [ series1, series2 ... ]
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }

        var series = [],
            options = {
                // the color theme used for graphs
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85, // set to 0 to avoid background
                    sorted: null    // default to no legend sorting
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    font: null, // null (derived from CSS in placeholder) or object like { size: 11, lineHeight: 13, style: "italic", weight: "bold", family: "sans-serif", variant: "small-caps" }
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync
                    tickDecimals: null, // no. of decimals, null means auto
                    tickSize: null, // number or [number, "unit"]
                    minTickSize: null // number or [number, "unit"]
                },
                yaxis: {
                    autoscaleMargin: 0.02,
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: false,
                        radius: 3,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: "#ffffff",
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled
                        lineWidth: 2, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                        // Omit 'zero', so we can later default its value to
                        // match that of the 'fill' option.
                    },
                    bars: {
                        show: false,
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // "left", "right", or "center"
                        horizontal: false,
                        zero: true
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#545454", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: null, // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    margin: 0, // distance from the canvas edge to the grid
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 2, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                interaction: {
                    redrawOverlayInterval: 1000/60 // time between updates, -1 means in same flow
                },
                hooks: {}
            },
        surface = null,     // the canvas for the plot itself
        overlay = null,     // canvas for interactive stuff on top of plot
        eventHolder = null, // jQuery object that events should be bound to
        ctx = null, octx = null,
        xaxes = [], yaxes = [],
        plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
        plotWidth = 0, plotHeight = 0,
        hooks = {
            processOptions: [],
            processRawData: [],
            processDatapoints: [],
            processOffset: [],
            drawBackground: [],
            drawSeries: [],
            draw: [],
            bindEvents: [],
            drawOverlay: [],
            shutdown: []
        },
        plot = this;

        // public functions
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
        plot.getPlaceholder = function() { return placeholder; };
        plot.getCanvas = function() { return surface.element; };
        plot.getPlotOffset = function() { return plotOffset; };
        plot.width = function () { return plotWidth; };
        plot.height = function () { return plotHeight; };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o;
        };
        plot.getData = function () { return series; };
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
            });
            return res;
        };
        plot.getXAxes = function () { return xaxes; };
        plot.getYAxes = function () { return yaxes; };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () { return options; };
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function(point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
            };
        };
        plot.shutdown = shutdown;
        plot.destroy = function () {
            shutdown();
            placeholder.removeData("plot").empty();

            series = [];
            options = null;
            surface = null;
            overlay = null;
            eventHolder = null;
            ctx = null;
            octx = null;
            xaxes = [];
            yaxes = [];
            hooks = null;
            highlights = [];
            plot = null;
        };
        plot.resize = function () {
        	var width = placeholder.width(),
        		height = placeholder.height();
            surface.resize(width, height);
            overlay.resize(width, height);
        };

        // public attributes
        plot.hooks = hooks;

        // initialize
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        setupGrid();
        draw();
        bindEvents();


        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)
                hook[i].apply(this, args);
        }

        function initPlugins() {

            // References to key classes, allowing plugins to modify them

            var classes = {
                Canvas: Canvas
            };

            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot, classes);
                if (p.options)
                    $.extend(true, options, p.options);
            }
        }

        function parseOptions(opts) {

            $.extend(true, options, opts);

            // $.extend merges arrays, rather than replacing them.  When less
            // colors are provided than the size of the default palette, we
            // end up with those colors plus the remaining defaults, which is
            // not expected behavior; avoid it by replacing them here.

            if (opts && opts.colors) {
            	options.colors = opts.colors;
            }

            if (options.xaxis.color == null)
                options.xaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();
            if (options.yaxis.color == null)
                options.yaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            if (options.xaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
            if (options.yaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;

            if (options.grid.borderColor == null)
                options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            // Fill in defaults for axis options, including any unspecified
            // font-spec fields, if a font-spec was provided.

            // If no x/y axis options were provided, create one of each anyway,
            // since the rest of the code assumes that they exist.

            var i, axisOptions, axisCount,
                fontSize = placeholder.css("font-size"),
                fontSizeDefault = fontSize ? +fontSize.replace("px", "") : 13,
                fontDefaults = {
                    style: placeholder.css("font-style"),
                    size: Math.round(0.8 * fontSizeDefault),
                    variant: placeholder.css("font-variant"),
                    weight: placeholder.css("font-weight"),
                    family: placeholder.css("font-family")
                };

            axisCount = options.xaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.xaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
                options.xaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            axisCount = options.yaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.yaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
                options.yaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            // backwards compatibility, to be removed in future
            if (options.xaxis.noTicks && options.xaxis.ticks == null)
                options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)
                options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
                // Override the inherit to allow the axis to auto-scale
                if (options.x2axis.min == null) {
                    options.xaxes[1].min = null;
                }
                if (options.x2axis.max == null) {
                    options.xaxes[1].max = null;
                }
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
                // Override the inherit to allow the axis to auto-scale
                if (options.y2axis.min == null) {
                    options.yaxes[1].min = null;
                }
                if (options.y2axis.max == null) {
                    options.yaxes[1].max = null;
                }
            }
            if (options.grid.coloredAreas)
                options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)
                options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)
                $.extend(true, options.series.lines, options.lines);
            if (options.points)
                $.extend(true, options.series.points, options.points);
            if (options.bars)
                $.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)
                options.series.shadowSize = options.shadowSize;
            if (options.highlightColor != null)
                options.series.highlightColor = options.highlightColor;

            // save options on axes for future reference
            for (i = 0; i < options.xaxes.length; ++i)
                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
            for (i = 0; i < options.yaxes.length; ++i)
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

            // add hooks from options
            for (var n in hooks)
                if (options.hooks[n] && options.hooks[n].length)
                    hooks[n] = hooks[n].concat(options.hooks[n]);

            executeHooks(hooks.processOptions, [options]);
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData();
        }

        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);

                if (d[i].data != null) {
                    s.data = d[i].data; // move the data instead of deep-copy
                    delete d[i].data;

                    $.extend(true, s, d[i]);

                    d[i].data = s.data;
                }
                else
                    s.data = d[i];
                res.push(s);
            }

            return res;
        }

        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object") // if we got a real axis, extract number
                a = a.n;
            if (typeof a != "number")
                a = 1; // default to first axis
            return a;
        }

        function allAxes() {
            // return flat array without annoying null entries
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
        }

        function canvasToAxisCoords(pos) {
            // return an object with x/y corresponding to all used axes
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)
                    res["x" + axis.n] = axis.c2p(pos.left);
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)
                    res["y" + axis.n] = axis.c2p(pos.top);
            }

            if (res.x1 !== undefined)
                res.x = res.x1;
            if (res.y1 !== undefined)
                res.y = res.y1;

            return res;
        }

        function axisToCanvasCoords(pos) {
            // get canvas coords from the first pair of x/y found in pos
            var res = {}, i, axis, key;

            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "x";

                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "y";

                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            return res;
        }

        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])
                axes[number - 1] = {
                    n: number, // save the number for future reference
                    direction: axes == xaxes ? "x" : "y",
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
                };

            return axes[number - 1];
        }

        function fillInSeriesOptions() {

            var neededColors = series.length, maxIndex = -1, i;

            // Subtract the number of series that already have fixed colors or
            // color indexes from the number that we still need to generate.

            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    neededColors--;
                    if (typeof sc == "number" && sc > maxIndex) {
                        maxIndex = sc;
                    }
                }
            }

            // If any of the series have fixed color indexes, then we need to
            // generate at least as many colors as the highest index.

            if (neededColors <= maxIndex) {
                neededColors = maxIndex + 1;
            }

            // Generate all the colors, using first the option colors and then
            // variations on those colors once they're exhausted.

            var c, colors = [], colorPool = options.colors,
                colorPoolSize = colorPool.length, variation = 0;

            for (i = 0; i < neededColors; i++) {

                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");

                // Each time we exhaust the colors in the pool we adjust
                // a scaling factor used to produce more variations on
                // those colors. The factor alternates negative/positive
                // to produce lighter/darker colors.

                // Reset the variation after every few cycles, or else
                // it will end up producing only white or black colors.

                if (i % colorPoolSize == 0 && i) {
                    if (variation >= 0) {
                        if (variation < 0.5) {
                            variation = -variation - 0.2;
                        } else variation = 0;
                    } else variation = -variation;
                }

                colors[i] = c.scale('rgb', 1 + variation);
            }

            // Finalize the series options, filling in their colors

            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                // assign colors
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori;
                }
                else if (typeof s.color == "number")
                    s.color = colors[s.color].toString();

                // turn on lines automatically in case nothing is set
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)
                        if (s[v] && s[v].show) {
                            show = false;
                            break;
                        }
                    if (show)
                        s.lines.show = true;
                }

                // If nothing was provided for lines.zero, default it to match
                // lines.fill, since areas by default should extend to zero.

                if (s.lines.zero == null) {
                    s.lines.zero = !!s.lines.fill;
                }

                // setup axes
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
            }
        }

        function processData() {
            var topSentry = Number.POSITIVE_INFINITY,
                bottomSentry = Number.NEGATIVE_INFINITY,
                fakeInfinity = Number.MAX_VALUE,
                i, j, k, m, length,
                s, points, ps, x, y, axis, val, f, p,
                data, format;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)
                    axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)
                    axis.datamax = max;
            }

            $.each(allAxes(), function (_, axis) {
                // init axis
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false;
            });

            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = { points: [] };

                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
            }

            // first pass: clean and copy data
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                data = s.data;
                format = s.datapoints.format;

                if (!format) {
                    format = [];
                    // find out how to copy
                    format.push({ x: true, number: true, required: true });
                    format.push({ y: true, number: true, required: true });

                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
                        var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                        format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true;
                        }
                    }

                    s.datapoints.format = format;
                }

                if (s.datapoints.pointsize != null)
                    continue; // already filled in

                s.datapoints.pointsize = format.length;

                ps = s.datapoints.pointsize;
                points = s.datapoints.points;

                var insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;

                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];

                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];

                            if (f) {
                                if (f.number && val != null) {
                                    val = +val; // convert to number
                                    if (isNaN(val))
                                        val = null;
                                    else if (val == Infinity)
                                        val = fakeInfinity;
                                    else if (val == -Infinity)
                                        val = -fakeInfinity;
                                }

                                if (val == null) {
                                    if (f.required)
                                        nullify = true;

                                    if (f.defaultValue != null)
                                        val = f.defaultValue;
                                }
                            }

                            points[k + m] = val;
                        }
                    }

                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                // extract min/max info
                                if (f.autoscale !== false) {
                                    if (f.x) {
                                        updateAxis(s.xaxis, val, val);
                                    }
                                    if (f.y) {
                                        updateAxis(s.yaxis, val, val);
                                    }
                                }
                            }
                            points[k + m] = null;
                        }
                    }
                    else {
                        // a little bit of line specific stuff that
                        // perhaps shouldn't be here, but lacking
                        // better means...
                        if (insertSteps && k > 0
                            && points[k - ps] != null
                            && points[k - ps] != points[k]
                            && points[k - ps + 1] != points[k + 1]) {
                            // copy the point to make room for a middle point
                            for (m = 0; m < ps; ++m)
                                points[k + ps + m] = points[k + m];

                            // middle point has same y
                            points[k + 1] = points[k - ps + 1];

                            // we've added a point, better reflect that
                            k += ps;
                        }
                    }
                }
            }

            // give the hooks a chance to run
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
            }

            // second pass: find datamax/datamin for auto-scaling
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points;
                ps = s.datapoints.pointsize;
                format = s.datapoints.format;

                var xmin = topSentry, ymin = topSentry,
                    xmax = bottomSentry, ymax = bottomSentry;

                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)
                        continue;

                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)
                            continue;

                        if (f.x) {
                            if (val < xmin)
                                xmin = val;
                            if (val > xmax)
                                xmax = val;
                        }
                        if (f.y) {
                            if (val < ymin)
                                ymin = val;
                            if (val > ymax)
                                ymax = val;
                        }
                    }
                }

                if (s.bars.show) {
                    // make sure we got room for the bar on the dancing floor
                    var delta;

                    switch (s.bars.align) {
                        case "left":
                            delta = 0;
                            break;
                        case "right":
                            delta = -s.bars.barWidth;
                            break;
                        default:
                            delta = -s.bars.barWidth / 2;
                    }

                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth;
                    }
                    else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth;
                    }
                }

                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax);
            }

            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)
                    axis.datamin = null;
                if (axis.datamax == bottomSentry)
                    axis.datamax = null;
            });
        }

        function setupCanvases() {

            // Make sure the placeholder is clear of everything except canvases
            // from a previous plot in this container that we'll try to re-use.

            placeholder.css("padding", 0) // padding messes up the positioning
                .children().filter(function(){
                    return !$(this).hasClass("flot-overlay") && !$(this).hasClass('flot-base');
                }).remove();

            if (placeholder.css("position") == 'static')
                placeholder.css("position", "relative"); // for positioning labels and overlay

            surface = new Canvas("flot-base", placeholder);
            overlay = new Canvas("flot-overlay", placeholder); // overlay canvas for interactive features

            ctx = surface.context;
            octx = overlay.context;

            // define which element we're listening for events on
            eventHolder = $(overlay.element).unbind();

            // If we're re-using a plot object, shut down the old one

            var existing = placeholder.data("plot");

            if (existing) {
                existing.shutdown();
                overlay.clear();
            }

            // save in case we get replotted
            placeholder.data("plot", plot);
        }

        function bindEvents() {
            // bind events
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);

                // Use bind, rather than .mouseleave, because we officially
                // still support jQuery 1.2.6, which doesn't define a shortcut
                // for mouseenter or mouseleave.  This was a bug/oversight that
                // was fixed somewhere around 1.3.x.  We can return to using
                // .mouseleave when we drop support for 1.2.6.

                eventHolder.bind("mouseleave", onMouseLeave);
            }

            if (options.grid.clickable)
                eventHolder.click(onClick);

            executeHooks(hooks.bindEvents, [eventHolder]);
        }

        function shutdown() {
            if (redrawTimeout)
                clearTimeout(redrawTimeout);

            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);

            executeHooks(hooks.shutdown, [eventHolder]);
        }

        function setTransformationHelpers(axis) {
            // set helper functions on the axis, assumes plot area
            // has been computed already

            function identity(x) { return x; }

            var s, m, t = axis.options.transform || identity,
                it = axis.options.inverseTransform;

            // precompute how much the axis is scaling a point
            // in canvas space
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min));
            }
            else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min));
            }

            // data point to canvas coordinate
            if (t == identity) // slight optimization
                axis.p2c = function (p) { return (p - m) * s; };
            else
                axis.p2c = function (p) { return (t(p) - m) * s; };
            // canvas coordinate to data point
            if (!it)
                axis.c2p = function (c) { return m + c / s; };
            else
                axis.c2p = function (c) { return it(m + c / s); };
        }

        function measureTickLabels(axis) {

            var opts = axis.options,
                ticks = axis.ticks || [],
                labelWidth = opts.labelWidth || 0,
                labelHeight = opts.labelHeight || 0,
                maxWidth = labelWidth || (axis.direction == "x" ? Math.floor(surface.width / (ticks.length || 1)) : null),
                legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                font = opts.font || "flot-tick-label tickLabel";

            for (var i = 0; i < ticks.length; ++i) {

                var t = ticks[i];

                if (!t.label)
                    continue;

                var info = surface.getTextInfo(layer, t.label, font, null, maxWidth);

                labelWidth = Math.max(labelWidth, info.width);
                labelHeight = Math.max(labelHeight, info.height);
            }

            axis.labelWidth = opts.labelWidth || labelWidth;
            axis.labelHeight = opts.labelHeight || labelHeight;
        }

        function allocateAxisBoxFirstPhase(axis) {
            // find the bounding box of the axis by looking at label
            // widths/heights and ticks, make room by diminishing the
            // plotOffset; this first phase only looks at one
            // dimension per axis, the other dimension depends on the
            // other axes so will have to wait

            var lw = axis.labelWidth,
                lh = axis.labelHeight,
                pos = axis.options.position,
                isXAxis = axis.direction === "x",
                tickLength = axis.options.tickLength,
                axisMargin = options.grid.axisMargin,
                padding = options.grid.labelMargin,
                innermost = true,
                outermost = true,
                first = true,
                found = false;

            // Determine the axis's position in its direction and on its side

            $.each(isXAxis ? xaxes : yaxes, function(i, a) {
                if (a && (a.show || a.reserveSpace)) {
                    if (a === axis) {
                        found = true;
                    } else if (a.options.position === pos) {
                        if (found) {
                            outermost = false;
                        } else {
                            innermost = false;
                        }
                    }
                    if (!found) {
                        first = false;
                    }
                }
            });

            // The outermost axis on each side has no margin

            if (outermost) {
                axisMargin = 0;
            }

            // The ticks for the first axis in each direction stretch across

            if (tickLength == null) {
                tickLength = first ? "full" : 5;
            }

            if (!isNaN(+tickLength))
                padding += +tickLength;

            if (isXAxis) {
                lh += padding;

                if (pos == "bottom") {
                    plotOffset.bottom += lh + axisMargin;
                    axis.box = { top: surface.height - plotOffset.bottom, height: lh };
                }
                else {
                    axis.box = { top: plotOffset.top + axisMargin, height: lh };
                    plotOffset.top += lh + axisMargin;
                }
            }
            else {
                lw += padding;

                if (pos == "left") {
                    axis.box = { left: plotOffset.left + axisMargin, width: lw };
                    plotOffset.left += lw + axisMargin;
                }
                else {
                    plotOffset.right += lw + axisMargin;
                    axis.box = { left: surface.width - plotOffset.right, width: lw };
                }
            }

             // save for future reference
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost;
        }

        function allocateAxisBoxSecondPhase(axis) {
            // now that all axis boxes have been placed in one
            // dimension, we can set the remaining dimension coordinates
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left - axis.labelWidth / 2;
                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth;
            }
            else {
                axis.box.top = plotOffset.top - axis.labelHeight / 2;
                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight;
            }
        }

        function adjustLayoutForThingsStickingOut() {
            // possibly adjust plot offset to ensure everything stays
            // inside the canvas and isn't clipped off

            var minMargin = options.grid.minBorderMargin,
                axis, i;

            // check stuff from the plot (FIXME: this should just read
            // a value from the series, otherwise it's impossible to
            // customize)
            if (minMargin == null) {
                minMargin = 0;
                for (i = 0; i < series.length; ++i)
                    minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth/2));
            }

            var margins = {
                left: minMargin,
                right: minMargin,
                top: minMargin,
                bottom: minMargin
            };

            // check axis labels, note we don't check the actual
            // labels but instead use the overall width/height to not
            // jump as much around with replots
            $.each(allAxes(), function (_, axis) {
                if (axis.reserveSpace && axis.ticks && axis.ticks.length) {
                    if (axis.direction === "x") {
                        margins.left = Math.max(margins.left, axis.labelWidth / 2);
                        margins.right = Math.max(margins.right, axis.labelWidth / 2);
                    } else {
                        margins.bottom = Math.max(margins.bottom, axis.labelHeight / 2);
                        margins.top = Math.max(margins.top, axis.labelHeight / 2);
                    }
                }
            });

            plotOffset.left = Math.ceil(Math.max(margins.left, plotOffset.left));
            plotOffset.right = Math.ceil(Math.max(margins.right, plotOffset.right));
            plotOffset.top = Math.ceil(Math.max(margins.top, plotOffset.top));
            plotOffset.bottom = Math.ceil(Math.max(margins.bottom, plotOffset.bottom));
        }

        function setupGrid() {
            var i, axes = allAxes(), showGrid = options.grid.show;

            // Initialize the plot's offset from the edge of the canvas

            for (var a in plotOffset) {
                var margin = options.grid.margin || 0;
                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0;
            }

            executeHooks(hooks.processOffset, [plotOffset]);

            // If the grid is visible, add its border width to the offset

            for (var a in plotOffset) {
                if(typeof(options.grid.borderWidth) == "object") {
                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0;
                }
                else {
                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0;
                }
            }

            $.each(axes, function (_, axis) {
                var axisOpts = axis.options;
                axis.show = axisOpts.show == null ? axis.used : axisOpts.show;
                axis.reserveSpace = axisOpts.reserveSpace == null ? axis.show : axisOpts.reserveSpace;
                setRange(axis);
            });

            if (showGrid) {

                var allocatedAxes = $.grep(axes, function (axis) {
                    return axis.show || axis.reserveSpace;
                });

                $.each(allocatedAxes, function (_, axis) {
                    // make the ticks
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);
                    // find labelWidth/Height for axis
                    measureTickLabels(axis);
                });

                // with all dimensions calculated, we can compute the
                // axis bounding boxes, start from the outside
                // (reverse order)
                for (i = allocatedAxes.length - 1; i >= 0; --i)
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

                // make sure we've got enough space for things that
                // might stick out
                adjustLayoutForThingsStickingOut();

                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis);
                });
            }

            plotWidth = surface.width - plotOffset.left - plotOffset.right;
            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;

            // now we got the proper plot dimensions, we can compute the scaling
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis);
            });

            if (showGrid) {
                drawAxisLabels();
            }

            insertLegend();
        }

        function setRange(axis) {
            var opts = axis.options,
                min = +(opts.min != null ? opts.min : axis.datamin),
                max = +(opts.max != null ? opts.max : axis.datamax),
                delta = max - min;

            if (delta == 0.0) {
                // degenerate case
                var widen = max == 0 ? 1 : 0.01;

                if (opts.min == null)
                    min -= widen;
                // always widen max if we couldn't widen min to ensure we
                // don't fall into min == max which doesn't work
                if (opts.max == null || opts.min != null)
                    max += widen;
            }
            else {
                // consider autoscaling
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        // make sure we don't go below zero if all values
                        // are positive
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                            min = 0;
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                            max = 0;
                    }
                }
            }
            axis.min = min;
            axis.max = max;
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;

            // estimate number of ticks
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)
                noTicks = opts.ticks;
            else
                // heuristic based on the model a*sqrt(x) fitted to
                // some data points that seemed reasonable
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);

            var delta = (axis.max - axis.min) / noTicks,
                dec = -Math.floor(Math.log(delta) / Math.LN10),
                maxDec = opts.tickDecimals;

            if (maxDec != null && dec > maxDec) {
                dec = maxDec;
            }

            var magn = Math.pow(10, -dec),
                norm = delta / magn, // norm is between 1.0 and 10.0
                size;

            if (norm < 1.5) {
                size = 1;
            } else if (norm < 3) {
                size = 2;
                // special case for 2.5, requires an extra decimal
                if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                    size = 2.5;
                    ++dec;
                }
            } else if (norm < 7.5) {
                size = 5;
            } else {
                size = 10;
            }

            size *= magn;

            if (opts.minTickSize != null && size < opts.minTickSize) {
                size = opts.minTickSize;
            }

            axis.delta = delta;
            axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
            axis.tickSize = opts.tickSize || size;

            // Time mode was moved to a plug-in in 0.8, and since so many people use it
            // we'll add an especially friendly reminder to make sure they included it.

            if (opts.mode == "time" && !axis.tickGenerator) {
                throw new Error("Time mode requires the flot.time plugin.");
            }

            // Flot supports base-10 axes; any other mode else is handled by a plug-in,
            // like flot.time.js.

            if (!axis.tickGenerator) {

                axis.tickGenerator = function (axis) {

                    var ticks = [],
                        start = floorInBase(axis.min, axis.tickSize),
                        i = 0,
                        v = Number.NaN,
                        prev;

                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i;
                    } while (v < axis.max && v != prev);
                    return ticks;
                };

				axis.tickFormatter = function (value, axis) {

					var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
					var formatted = "" + Math.round(value * factor) / factor;

					// If tickDecimals was specified, ensure that we have exactly that
					// much precision; otherwise default to the value's own precision.

					if (axis.tickDecimals != null) {
						var decimal = formatted.indexOf(".");
						var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
						if (precision < axis.tickDecimals) {
							return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
						}
					}

                    return formatted;
                };
            }

            if ($.isFunction(opts.tickFormatter))
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };

            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    // consider snapping min/max to outermost nice ticks
                    var niceTicks = axis.tickGenerator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)
                            axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                    }

                    axis.tickGenerator = function (axis) {
                        // copy ticks, scaled to this axis
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v);
                        }
                        return ticks;
                    };

                    // we might need an extra decimal since forced
                    // ticks don't necessarily fit naturally
                    if (!axis.mode && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1),
                            ts = axis.tickGenerator(axis);

                        // only proceed if the tick interval rounded
                        // with an extra decimal doesn't give us a
                        // zero at end
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                            axis.tickDecimals = extraDec;
                    }
                }
            }
        }

        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || (typeof oticks == "number" && oticks > 0))
                ticks = axis.tickGenerator(axis);
            else if (oticks) {
                if ($.isFunction(oticks))
                    // generate the ticks
                    ticks = oticks(axis);
                else
                    ticks = oticks;
            }

            // clean up/labelify the supplied ticks, copy them over
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)
                        label = t[1];
                }
                else
                    v = +t;
                if (label == null)
                    label = axis.tickFormatter(v, axis);
                if (!isNaN(v))
                    axis.ticks.push({ v: v, label: label });
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                // snap to ticks
                if (axis.options.min == null)
                    axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
            }
        }

        function draw() {

            surface.clear();

            executeHooks(hooks.drawBackground, [ctx]);

            var grid = options.grid;

            // draw background, if any
            if (grid.show && grid.backgroundColor)
                drawBackground();

            if (grid.show && !grid.aboveData) {
                drawGrid();
            }

            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i]);
            }

            executeHooks(hooks.draw, [ctx]);

            if (grid.show && grid.aboveData) {
                drawGrid();
            }

            surface.render();

            // A draw implies that either the axes or data have changed, so we
            // should probably update the overlay highlights as well.

            triggerRedrawOverlay();
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();

            for (var i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }

            return { from: from, to: to, axis: axis };
        }

        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore();
        }

        function drawGrid() {
            var i, axes, bw, bc;

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // draw markings
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    axes = plot.getAxes();
                    // xmin etc. is backwards compatibility, to be
                    // removed in the future
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;

                    markings = markings(axes);
                }

                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i],
                        xrange = extractRange(m, "x"),
                        yrange = extractRange(m, "y");

                    // fill in missing
                    if (xrange.from == null)
                        xrange.from = xrange.axis.min;
                    if (xrange.to == null)
                        xrange.to = xrange.axis.max;
                    if (yrange.from == null)
                        yrange.from = yrange.axis.min;
                    if (yrange.to == null)
                        yrange.to = yrange.axis.max;

                    // clip
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                        continue;

                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);

                    var xequal = xrange.from === xrange.to,
                        yequal = yrange.from === yrange.to;

                    if (xequal && yequal) {
                        continue;
                    }

                    // then draw
                    xrange.from = Math.floor(xrange.axis.p2c(xrange.from));
                    xrange.to = Math.floor(xrange.axis.p2c(xrange.to));
                    yrange.from = Math.floor(yrange.axis.p2c(yrange.from));
                    yrange.to = Math.floor(yrange.axis.p2c(yrange.to));

                    if (xequal || yequal) {
                        var lineWidth = m.lineWidth || options.grid.markingsLineWidth,
                            subPixel = lineWidth % 2 ? 0.5 : 0;
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = lineWidth;
                        if (xequal) {
                            ctx.moveTo(xrange.to + subPixel, yrange.from);
                            ctx.lineTo(xrange.to + subPixel, yrange.to);
                        } else {
                            ctx.moveTo(xrange.from, yrange.to + subPixel);
                            ctx.lineTo(xrange.to, yrange.to + subPixel);                            
                        }
                        ctx.stroke();
                    } else {
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to,
                                     xrange.to - xrange.from,
                                     yrange.from - yrange.to);
                    }
                }
            }

            // draw the ticks
            axes = allAxes();
            bw = options.grid.borderWidth;

            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box,
                    t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)
                    continue;

                ctx.lineWidth = 1;

                // find the edges
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")
                        y = (axis.position == "top" ? 0 : plotHeight);
                    else
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
                }
                else {
                    y = 0;
                    if (t == "full")
                        x = (axis.position == "left" ? 0 : plotWidth);
                    else
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
                }

                // draw tick bar
                if (!axis.innermost) {
                    ctx.strokeStyle = axis.options.color;
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")
                        xoff = plotWidth + 1;
                    else
                        yoff = plotHeight + 1;

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x") {
                            y = Math.floor(y) + 0.5;
                        } else {
                            x = Math.floor(x) + 0.5;
                        }
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke();
                }

                // draw ticks

                ctx.strokeStyle = axis.options.tickColor;

                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;

                    xoff = yoff = 0;

                    if (isNaN(v) || v < axis.min || v > axis.max
                        // skip those lying on the axes if we got a border
                        || (t == "full"
                            && ((typeof bw == "object" && bw[axis.position] > 0) || bw > 0)
                            && (v == axis.min || v == axis.max)))
                        continue;

                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;

                        if (axis.position == "top")
                            yoff = -yoff;
                    }
                    else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;

                        if (axis.position == "left")
                            xoff = -xoff;
                    }

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")
                            x = Math.floor(x) + 0.5;
                        else
                            y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                }

                ctx.stroke();
            }


            // draw border
            if (bw) {
                // If either borderWidth or borderColor is an object, then draw the border
                // line by line instead of as one rectangle
                bc = options.grid.borderColor;
                if(typeof bw == "object" || typeof bc == "object") {
                    if (typeof bw !== "object") {
                        bw = {top: bw, right: bw, bottom: bw, left: bw};
                    }
                    if (typeof bc !== "object") {
                        bc = {top: bc, right: bc, bottom: bc, left: bc};
                    }

                    if (bw.top > 0) {
                        ctx.strokeStyle = bc.top;
                        ctx.lineWidth = bw.top;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left, 0 - bw.top/2);
                        ctx.lineTo(plotWidth, 0 - bw.top/2);
                        ctx.stroke();
                    }

                    if (bw.right > 0) {
                        ctx.strokeStyle = bc.right;
                        ctx.lineWidth = bw.right;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
                        ctx.stroke();
                    }

                    if (bw.bottom > 0) {
                        ctx.strokeStyle = bc.bottom;
                        ctx.lineWidth = bw.bottom;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
                        ctx.lineTo(0, plotHeight + bw.bottom / 2);
                        ctx.stroke();
                    }

                    if (bw.left > 0) {
                        ctx.strokeStyle = bc.left;
                        ctx.lineWidth = bw.left;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left/2, plotHeight + bw.bottom);
                        ctx.lineTo(0- bw.left/2, 0);
                        ctx.stroke();
                    }
                }
                else {
                    ctx.lineWidth = bw;
                    ctx.strokeStyle = options.grid.borderColor;
                    ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
                }
            }

            ctx.restore();
        }

        function drawAxisLabels() {

            $.each(allAxes(), function (_, axis) {
                var box = axis.box,
                    legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                    layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                    font = axis.options.font || "flot-tick-label tickLabel",
                    tick, x, y, halign, valign;

                // Remove text before checking for axis.show and ticks.length;
                // otherwise plugins, like flot-tickrotor, that draw their own
                // tick labels will end up with both theirs and the defaults.

                surface.removeText(layer);

                if (!axis.show || axis.ticks.length == 0)
                    return;

                for (var i = 0; i < axis.ticks.length; ++i) {

                    tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                        continue;

                    if (axis.direction == "x") {
                        halign = "center";
                        x = plotOffset.left + axis.p2c(tick.v);
                        if (axis.position == "bottom") {
                            y = box.top + box.padding;
                        } else {
                            y = box.top + box.height - box.padding;
                            valign = "bottom";
                        }
                    } else {
                        valign = "middle";
                        y = plotOffset.top + axis.p2c(tick.v);
                        if (axis.position == "left") {
                            x = box.left + box.width - box.padding;
                            halign = "right";
                        } else {
                            x = box.left + box.padding;
                        }
                    }

                    surface.addText(layer, x, y, tick.label, font, null, null, halign, valign);
                }
            });
        }

        function drawSeries(series) {
            if (series.lines.show)
                drawSeriesLines(series);
            if (series.bars.show)
                drawSeriesBars(series);
            if (series.points.show)
                drawSeriesPoints(series);
        }

        function drawSeriesLines(series) {
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    prevx = null, prevy = null;

                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1],
                        x2 = points[i], y2 = points[i + 1];

                    if (x1 == null || x2 == null)
                        continue;

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)
                            continue;   // line segment is outside
                        // compute new intersection point
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)
                            continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)
                            continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)
                            continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (x1 != prevx || y1 != prevy)
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);

                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
                }
                ctx.stroke();
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                    i = 0, top, areaOpen = false,
                    ypos = 1, segmentStart = 0, segmentEnd = 0;

                // we process each segment in two turns, first forward
                // direction to sketch out top, then once we hit the
                // end we go backwards to sketch the bottom
                while (true) {
                    if (ps > 0 && i > points.length + ps)
                        break;

                    i += ps; // ps is negative if going backwards

                    var x1 = points[i - ps],
                        y1 = points[i - ps + ypos],
                        x2 = points[i], y2 = points[i + ypos];

                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            // at turning point
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue;
                        }

                        if (ps < 0 && i == segmentStart + ps) {
                            // done with the reverse sweep
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue;
                        }
                    }

                    if (x1 == null || x2 == null)
                        continue;

                    // clip x values

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (!areaOpen) {
                        // open area
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true;
                    }

                    // now first check the case where both is outside
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue;
                    }
                    else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue;
                    }

                    // else it's a bit more complicated, there might
                    // be a flat maxed out rectangle first, then a
                    // triangular cutout or reverse; to find these
                    // keep track of the current x values
                    var x1old = x1, x2old = x2;

                    // clip the y values, without shortcutting, we
                    // go through all cases in turn

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // if the x value was changed we got a rectangle
                    // to fill
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                        // it goes to (x1, y1), but we fill that below
                    }

                    // fill triangular section, this sometimes result
                    // in redundant points if (x1, y1) hasn't changed
                    // from previous line to, but we just ignore that
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                    // fill the other rectangle if it's there
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";

            var lw = series.lines.lineWidth,
                sw = series.shadowSize;
            // FIXME: consider another form of shadow when filling is turned on
            if (lw > 0 && sw > 0) {
                // draw shadow as a thick and thin line with transparency
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // position shadow at angle from the mid of line
                var angle = Math.PI/18;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
            }

            if (lw > 0)
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                        continue;

                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();

                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.points.lineWidth,
                sw = series.shadowSize,
                radius = series.points.radius,
                symbol = series.points.symbol;

            // If the user sets the line width to 0, we change it to a very 
            // small value. A line width of 0 seems to force the default of 1.
            // Doing the conditional here allows the shadow setting to still be 
            // optional even with a lineWidth of 0.

            if( lw == 0 )
                lw = 0.0001;

            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w/2, true,
                           series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                           series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius,
                       getFillStyle(series.points, series.color), 0, false,
                       series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }

        function drawBar(x, y, b, barLeft, barRight, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,
                drawLeft, drawRight, drawTop, drawBottom,
                tmp;

            // in horizontal mode, we start the bar from the left
            // instead of from the bottom so it appears to be
            // horizontal rather than vertical
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;

                // account for negative bars
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false;
                }
            }
            else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;

                // account for negative bars
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false;
                }
            }

            // clip
            if (right < axisx.min || left > axisx.max ||
                top < axisy.min || bottom > axisy.max)
                return;

            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false;
            }

            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false;
            }

            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false;
            }

            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false;
            }

            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);

            // fill the bar
            if (fillStyleCallback) {
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fillRect(left, top, right - left, bottom - top)
            }

            // draw outline
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();

                // FIXME: inline moveTo is buggy with excanvas
                c.moveTo(left, bottom);
                if (drawLeft)
                    c.lineTo(left, top);
                else
                    c.moveTo(left, top);
                if (drawTop)
                    c.lineTo(right, top);
                else
                    c.moveTo(right, top);
                if (drawRight)
                    c.lineTo(right, bottom);
                else
                    c.moveTo(right, bottom);
                if (drawBottom)
                    c.lineTo(left, bottom);
                else
                    c.moveTo(left, bottom);
                c.stroke();
            }
        }

        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)
                        continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // FIXME: figure out a way to add shadows (for instance along the right edge)
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;

            var barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)
                return null;

            if (filloptions.fillColor)
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);

            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : 0.4;
            c.normalize();
            return c.toString();
        }

        function insertLegend() {

            if (options.legend.container != null) {
                $(options.legend.container).html("");
            } else {
                placeholder.find(".legend").remove();
            }

            if (!options.legend.show) {
                return;
            }

            var fragments = [], entries = [], rowStarted = false,
                lf = options.legend.labelFormatter, s, label;

            // Build a list of legend entries, with each having a label and a color

            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                if (s.label) {
                    label = lf ? lf(s.label, s) : s.label;
                    if (label) {
                        entries.push({
                            label: label,
                            color: s.color
                        });
                    }
                }
            }

            // Sort the legend using either the default or a custom comparator

            if (options.legend.sorted) {
                if ($.isFunction(options.legend.sorted)) {
                    entries.sort(options.legend.sorted);
                } else if (options.legend.sorted == "reverse") {
                	entries.reverse();
                } else {
                    var ascending = options.legend.sorted != "descending";
                    entries.sort(function(a, b) {
                        return a.label == b.label ? 0 : (
                            (a.label < b.label) != ascending ? 1 : -1   // Logical XOR
                        );
                    });
                }
            }

            // Generate markup for the list of entries, in their final order

            for (var i = 0; i < entries.length; ++i) {

                var entry = entries[i];

                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)
                        fragments.push('</tr>');
                    fragments.push('<tr>');
                    rowStarted = true;
                }

                fragments.push(
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' +
                    '<td class="legendLabel">' + entry.label + '</td>'
                );
            }

            if (rowStarted)
                fragments.push('</tr>');

            if (fragments.length == 0)
                return;

            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)
                $(options.legend.container).html(table);
            else {
                var pos = "",
                    p = options.legend.position,
                    m = options.legend.margin;
                if (m[0] == null)
                    m = [m, m];
                if (p.charAt(0) == "n")
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
                else if (p.charAt(0) == "s")
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
                if (p.charAt(1) == "e")
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
                else if (p.charAt(1) == "w")
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {
                    // put in the transparent background
                    // separately to avoid blended labels and
                    // label boxes
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")
                            c = $.color.parse(c);
                        else
                            c = $.color.extract(legend, 'background-color');
                        c.a = 1;
                        c = c.toString();
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }
            }
        }


        // interactive features

        var highlights = [],
            redrawTimeout = null;

        // returns the data item the mouse is over, or null if none is found
        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius,
                smallestDistance = maxDistance * maxDistance + 1,
                item = null, foundPoint = false, i, j, ps;

            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))
                    continue;

                var s = series[i],
                    axisx = s.xaxis,
                    axisy = s.yaxis,
                    points = s.datapoints.points,
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                    my = axisy.c2p(mouseY),
                    maxx = maxDistance / axisx.scale,
                    maxy = maxDistance / axisy.scale;

                ps = s.datapoints.pointsize;
                // with inverse transforms, we can't use the maxx/maxy
                // optimization, sadly
                if (axisx.options.inverseTransform)
                    maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)
                    maxy = Number.MAX_VALUE;

                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)
                            continue;

                        // For points and lines, the cursor must be within a
                        // certain distance to the data point
                        if (x - mx > maxx || x - mx < -maxx ||
                            y - my > maxy || y - my < -maxy)
                            continue;

                        // We have to calculate distances in pixels, not in
                        // data units, because the scales of the axes may be different
                        var dx = Math.abs(axisx.p2c(x) - mouseX),
                            dy = Math.abs(axisy.p2c(y) - mouseY),
                            dist = dx * dx + dy * dy; // we save the sqrt

                        // use <= to ensure last point takes precedence
                        // (last generally means on top of)
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps];
                        }
                    }
                }

                if (s.bars.show && !item) { // no other point can be nearby

                    var barLeft, barRight;

                    switch (s.bars.align) {
                        case "left":
                            barLeft = 0;
                            break;
                        case "right":
                            barLeft = -s.bars.barWidth;
                            break;
                        default:
                            barLeft = -s.bars.barWidth / 2;
                    }

                    barRight = barLeft + s.bars.barWidth;

                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)
                            continue;

                        // for a bar graph, the cursor must be inside the bar
                        if (series[i].bars.horizontal ?
                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&
                             my >= y + barLeft && my <= y + barRight) :
                            (mx >= x + barLeft && mx <= x + barRight &&
                             my >= Math.min(b, y) && my <= Math.max(b, y)))
                                item = [i, j / ps];
                    }
                }
            }

            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;

                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                         dataIndex: j,
                         series: series[i],
                         seriesIndex: i };
            }

            return null;
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return s["hoverable"] != false; });
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return false; });
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e,
                                   function (s) { return s["clickable"] != false; });
        }

        // trigger click or hover event (they send the same parameters
        // so we share their code)
        function triggerClickHoverEvent(eventname, event, seriesFilter) {
            var offset = eventHolder.offset(),
                canvasX = event.pageX - offset.left - plotOffset.left,
                canvasY = event.pageY - offset.top - plotOffset.top,
            pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

            pos.pageX = event.pageX;
            pos.pageY = event.pageY;

            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

            if (item) {
                // fill in mouse pos for any listeners out there
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10);
            }

            if (options.grid.autoHighlight) {
                // clear auto-highlights
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname &&
                        !(item && h.series == item.series &&
                          h.point[0] == item.datapoint[0] &&
                          h.point[1] == item.datapoint[1]))
                        unhighlight(h.series, h.point);
                }

                if (item)
                    highlight(item.series, item.datapoint, eventname);
            }

            placeholder.trigger(eventname, [ pos, item ]);
        }

        function triggerRedrawOverlay() {
            var t = options.interaction.redrawOverlayInterval;
            if (t == -1) {      // skip event queue
                drawOverlay();
                return;
            }

            if (!redrawTimeout)
                redrawTimeout = setTimeout(drawOverlay, t);
        }

        function drawOverlay() {
            redrawTimeout = null;

            // draw highlights
            octx.save();
            overlay.clear();
            octx.translate(plotOffset.left, plotOffset.top);

            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];

                if (hi.series.bars.show)
                    drawBarHighlight(hi.series, hi.point);
                else
                    drawPointHighlight(hi.series, hi.point);
            }
            octx.restore();

            executeHooks(hooks.drawOverlay, [octx]);
        }

        function highlight(s, point, auto) {
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({ series: s, point: point, auto: auto });

                triggerRedrawOverlay();
            }
            else if (!auto)
                highlights[i].auto = false;
        }

        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
                return;
            }

            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);

                triggerRedrawOverlay();
            }
        }

        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0]
                    && h.point[1] == p[1])
                    return i;
            }
            return -1;
        }

        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis,
                highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString();

            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                return;

            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = highlightColor;
            var radius = 1.5 * pointRadius;
            x = axisx.p2c(x);
            y = axisy.p2c(y);

            octx.beginPath();
            if (series.points.symbol == "circle")
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);
            else
                series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke();
        }

        function drawBarHighlight(series, point) {
            var highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString(),
                fillStyle = highlightColor,
                barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = highlightColor;

            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                    function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")
                return spec;
            else {
                // assume this is a gradient spec; IE currently only
                // supports a simple vertical gradient properly, so that's
                // what we support too
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);

                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)
                            co = co.scale('rgb', c.brightness);
                        if (c.opacity != null)
                            co.a *= c.opacity;
                        c = co.toString();
                    }
                    gradient.addColorStop(i / (l - 1), c);
                }

                return gradient;
            }
        }
    }

    // Add the plot function to the top level of the jQuery object

    $.plot = function(placeholder, data, options) {
        //var t0 = new Date();
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
        return plot;
    };

    $.plot.version = "0.8.3";

    $.plot.plugins = [];

    // Also add the plot function as a chainable property

    $.fn.plot = function(data, options) {
        return this.each(function() {
            $.plot(this, data, options);
        });
    };

    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }

})(jQuery);


/***/ }),

/***/ "../../../../../vendor/flot/jquery.flot.spline.js":
/***/ (function(module, exports) {

/**
 * Flot plugin that provides spline interpolation for line graphs
 * author: Alex Bardas < alex.bardas@gmail.com >
 * modified by: Avi Kohn https://github.com/AMKohn
 * based on the spline interpolation described at:
 *		 http://scaledinnovation.com/analytics/splines/aboutSplines.html
 *
 * Example usage: (add in plot options series object)
 *		for linespline:
 *			series: {
 *				...
 *				lines: {
 *					show: false
 *				},
 *				splines: {
 *					show: true,
 *					tension: x, (float between 0 and 1, defaults to 0.5),
 *					lineWidth: y (number, defaults to 2),
 *					fill: z (float between 0 .. 1 or false, as in flot documentation)
 *				},
 *				...
 *			}
 *		areaspline:
 *			series: {
 *				...
 *				lines: {
 *					show: true,
 *					lineWidth: 0, (line drawing will not execute)
 *					fill: x, (float between 0 .. 1, as in flot documentation)
 *					...
 *				},
 *				splines: {
 *					show: true,
 *					tension: 0.5 (float between 0 and 1)
 *				},
 *				...
 *			}
 *
 */

(function($) {
    'use strict'

    /**
     * @param {Number} x0, y0, x1, y1: coordinates of the end (knot) points of the segment
     * @param {Number} x2, y2: the next knot (not connected, but needed to calculate p2)
     * @param {Number} tension: control how far the control points spread
     * @return {Array}: p1 -> control point, from x1 back toward x0
     * 					p2 -> the next control point, returned to become the next segment's p1
     *
     * @api private
     */
    function getControlPoints(x0, y0, x1, y1, x2, y2, tension) {

        var pow = Math.pow,
            sqrt = Math.sqrt,
            d01, d12, fa, fb, p1x, p1y, p2x, p2y;

        //  Scaling factors: distances from this knot to the previous and following knots.
        d01 = sqrt(pow(x1 - x0, 2) + pow(y1 - y0, 2));
        d12 = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));

        fa = tension * d01 / (d01 + d12);
        fb = tension - fa;

        p1x = x1 + fa * (x0 - x2);
        p1y = y1 + fa * (y0 - y2);

        p2x = x1 - fb * (x0 - x2);
        p2y = y1 - fb * (y0 - y2);

        return [p1x, p1y, p2x, p2y];
    }

    var line = [];

    function drawLine(points, ctx, height, fill, seriesColor) {
        var c = $.color.parse(seriesColor);

        c.a = typeof fill == "number" ? fill : .3;
        c.normalize();
        c = c.toString();

        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);

        var plength = points.length;

        for (var i = 0; i < plength; i++) {
            ctx[points[i][3]].apply(ctx, points[i][2]);
        }

        ctx.stroke();

        ctx.lineWidth = 0;
        ctx.lineTo(points[plength - 1][0], height);
        ctx.lineTo(points[0][0], height);

        ctx.closePath();

        if (fill !== false) {
            ctx.fillStyle = c;
            ctx.fill();
        }
    }

    /**
     * @param {Object} ctx: canvas context
     * @param {String} type: accepted strings: 'bezier' or 'quadratic' (defaults to quadratic)
     * @param {Array} points: 2 points for which to draw the interpolation
     * @param {Array} cpoints: control points for those segment points
     *
     * @api private
     */
    function queue(ctx, type, points, cpoints) {
        if (type === void 0 || (type !== 'bezier' && type !== 'quadratic')) {
            type = 'quadratic';
        }
        type = type + 'CurveTo';

        if (line.length == 0) line.push([points[0], points[1], cpoints.concat(points.slice(2)), type]);
        else if (type == "quadraticCurveTo" && points.length == 2) {
            cpoints = cpoints.slice(0, 2).concat(points);

            line.push([points[0], points[1], cpoints, type]);
        }
        else line.push([points[2], points[3], cpoints.concat(points.slice(2)), type]);
    }

    /**
     * @param {Object} plot
     * @param {Object} ctx: canvas context
     * @param {Object} series
     *
     * @api private
     */

    function drawSpline(plot, ctx, series) {
        // Not interested if spline is not requested
        if (series.splines.show !== true) {
            return;
        }

        var cp = [],
        // array of control points
            tension = series.splines.tension || 0.5,
            idx, x, y, points = series.datapoints.points,
            ps = series.datapoints.pointsize,
            plotOffset = plot.getPlotOffset(),
            len = points.length,
            pts = [];

        line = [];

        // Cannot display a linespline/areaspline if there are less than 3 points
        if (len / ps < 4) {
            $.extend(series.lines, series.splines);
            return;
        }

        for (idx = 0; idx < len; idx += ps) {
            x = points[idx];
            y = points[idx + 1];
            if (x == null || x < series.xaxis.min || x > series.xaxis.max || y < series.yaxis.min || y > series.yaxis.max) {
                continue;
            }

            pts.push(series.xaxis.p2c(x) + plotOffset.left, series.yaxis.p2c(y) + plotOffset.top);
        }

        len = pts.length;

        // Draw an open curve, not connected at the ends
        for (idx = 0; idx < len - 2; idx += 2) {
            cp = cp.concat(getControlPoints.apply(this, pts.slice(idx, idx + 6).concat([tension])));
        }

        ctx.save();
        ctx.strokeStyle = series.color;
        ctx.lineWidth = series.splines.lineWidth;

        queue(ctx, 'quadratic', pts.slice(0, 4), cp.slice(0, 2));

        for (idx = 2; idx < len - 3; idx += 2) {
            queue(ctx, 'bezier', pts.slice(idx, idx + 4), cp.slice(2 * idx - 2, 2 * idx + 2));
        }

        queue(ctx, 'quadratic', pts.slice(len - 2, len), [cp[2 * len - 10], cp[2 * len - 9], pts[len - 4], pts[len - 3]]);

        drawLine(line, ctx, plot.height() + 10, series.splines.fill, series.color);

        ctx.restore();
    }

    $.plot.plugins.push({
        init: function(plot) {
            plot.hooks.drawSeries.push(drawSpline);
        },
        options: {
            series: {
                splines: {
                    show: false,
                    lineWidth: 2,
                    tension: 0.5,
                    fill: false
                }
            }
        },
        name: 'spline',
        version: '0.8.2'
    });
})(jQuery);


/***/ }),

/***/ "../../../../../vendor/flot/jquery.flot.time.js":
/***/ (function(module, exports) {

/* Pretty handling of time axes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

Set axis.mode to "time" to enable. See the section "Time series data" in
API.txt for details.

*/

(function($) {

	var options = {
		xaxis: {
			timezone: null,		// "browser" for local to the client or timezone for timezone-js
			timeformat: null,	// format string to use
			twelveHourClock: false,	// 12 or 24 time in time mode
			monthNames: null	// list of names of months
		}
	};

	// round to nearby lower multiple of base

	function floorInBase(n, base) {
		return base * Math.floor(n / base);
	}

	// Returns a string with the date d formatted according to fmt.
	// A subset of the Open Group's strftime format is supported.

	function formatDate(d, fmt, monthNames, dayNames) {

		if (typeof d.strftime == "function") {
			return d.strftime(fmt);
		}

		var leftPad = function(n, pad) {
			n = "" + n;
			pad = "" + (pad == null ? "0" : pad);
			return n.length == 1 ? pad + n : n;
		};

		var r = [];
		var escape = false;
		var hours = d.getHours();
		var isAM = hours < 12;

		if (monthNames == null) {
			monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		}

		if (dayNames == null) {
			dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		}

		var hours12;

		if (hours > 12) {
			hours12 = hours - 12;
		} else if (hours == 0) {
			hours12 = 12;
		} else {
			hours12 = hours;
		}

		for (var i = 0; i < fmt.length; ++i) {

			var c = fmt.charAt(i);

			if (escape) {
				switch (c) {
					case 'a': c = "" + dayNames[d.getDay()]; break;
					case 'b': c = "" + monthNames[d.getMonth()]; break;
					case 'd': c = leftPad(d.getDate()); break;
					case 'e': c = leftPad(d.getDate(), " "); break;
					case 'h':	// For back-compat with 0.7; remove in 1.0
					case 'H': c = leftPad(hours); break;
					case 'I': c = leftPad(hours12); break;
					case 'l': c = leftPad(hours12, " "); break;
					case 'm': c = leftPad(d.getMonth() + 1); break;
					case 'M': c = leftPad(d.getMinutes()); break;
					// quarters not in Open Group's strftime specification
					case 'q':
						c = "" + (Math.floor(d.getMonth() / 3) + 1); break;
					case 'S': c = leftPad(d.getSeconds()); break;
					case 'y': c = leftPad(d.getFullYear() % 100); break;
					case 'Y': c = "" + d.getFullYear(); break;
					case 'p': c = (isAM) ? ("" + "am") : ("" + "pm"); break;
					case 'P': c = (isAM) ? ("" + "AM") : ("" + "PM"); break;
					case 'w': c = "" + d.getDay(); break;
				}
				r.push(c);
				escape = false;
			} else {
				if (c == "%") {
					escape = true;
				} else {
					r.push(c);
				}
			}
		}

		return r.join("");
	}

	// To have a consistent view of time-based data independent of which time
	// zone the client happens to be in we need a date-like object independent
	// of time zones.  This is done through a wrapper that only calls the UTC
	// versions of the accessor methods.

	function makeUtcWrapper(d) {

		function addProxyMethod(sourceObj, sourceMethod, targetObj, targetMethod) {
			sourceObj[sourceMethod] = function() {
				return targetObj[targetMethod].apply(targetObj, arguments);
			};
		};

		var utc = {
			date: d
		};

		// support strftime, if found

		if (d.strftime != undefined) {
			addProxyMethod(utc, "strftime", d, "strftime");
		}

		addProxyMethod(utc, "getTime", d, "getTime");
		addProxyMethod(utc, "setTime", d, "setTime");

		var props = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];

		for (var p = 0; p < props.length; p++) {
			addProxyMethod(utc, "get" + props[p], d, "getUTC" + props[p]);
			addProxyMethod(utc, "set" + props[p], d, "setUTC" + props[p]);
		}

		return utc;
	};

	// select time zone strategy.  This returns a date-like object tied to the
	// desired timezone

	function dateGenerator(ts, opts) {
		if (opts.timezone == "browser") {
			return new Date(ts);
		} else if (!opts.timezone || opts.timezone == "utc") {
			return makeUtcWrapper(new Date(ts));
		} else if (typeof timezoneJS != "undefined" && typeof timezoneJS.Date != "undefined") {
			var d = new timezoneJS.Date();
			// timezone-js is fickle, so be sure to set the time zone before
			// setting the time.
			d.setTimezone(opts.timezone);
			d.setTime(ts);
			return d;
		} else {
			return makeUtcWrapper(new Date(ts));
		}
	}
	
	// map of app. size of time units in milliseconds

	var timeUnitSize = {
		"second": 1000,
		"minute": 60 * 1000,
		"hour": 60 * 60 * 1000,
		"day": 24 * 60 * 60 * 1000,
		"month": 30 * 24 * 60 * 60 * 1000,
		"quarter": 3 * 30 * 24 * 60 * 60 * 1000,
		"year": 365.2425 * 24 * 60 * 60 * 1000
	};

	// the allowed tick sizes, after 1 year we use
	// an integer algorithm

	var baseSpec = [
		[1, "second"], [2, "second"], [5, "second"], [10, "second"],
		[30, "second"], 
		[1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"],
		[30, "minute"], 
		[1, "hour"], [2, "hour"], [4, "hour"],
		[8, "hour"], [12, "hour"],
		[1, "day"], [2, "day"], [3, "day"],
		[0.25, "month"], [0.5, "month"], [1, "month"],
		[2, "month"]
	];

	// we don't know which variant(s) we'll need yet, but generating both is
	// cheap

	var specMonths = baseSpec.concat([[3, "month"], [6, "month"],
		[1, "year"]]);
	var specQuarters = baseSpec.concat([[1, "quarter"], [2, "quarter"],
		[1, "year"]]);

	function init(plot) {
		plot.hooks.processOptions.push(function (plot, options) {
			$.each(plot.getAxes(), function(axisName, axis) {

				var opts = axis.options;

				if (opts.mode == "time") {
					axis.tickGenerator = function(axis) {

						var ticks = [];
						var d = dateGenerator(axis.min, opts);
						var minSize = 0;

						// make quarter use a possibility if quarters are
						// mentioned in either of these options

						var spec = (opts.tickSize && opts.tickSize[1] ===
							"quarter") ||
							(opts.minTickSize && opts.minTickSize[1] ===
							"quarter") ? specQuarters : specMonths;

						if (opts.minTickSize != null) {
							if (typeof opts.tickSize == "number") {
								minSize = opts.tickSize;
							} else {
								minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]];
							}
						}

						for (var i = 0; i < spec.length - 1; ++i) {
							if (axis.delta < (spec[i][0] * timeUnitSize[spec[i][1]]
											  + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2
								&& spec[i][0] * timeUnitSize[spec[i][1]] >= minSize) {
								break;
							}
						}

						var size = spec[i][0];
						var unit = spec[i][1];

						// special-case the possibility of several years

						if (unit == "year") {

							// if given a minTickSize in years, just use it,
							// ensuring that it's an integer

							if (opts.minTickSize != null && opts.minTickSize[1] == "year") {
								size = Math.floor(opts.minTickSize[0]);
							} else {

								var magn = Math.pow(10, Math.floor(Math.log(axis.delta / timeUnitSize.year) / Math.LN10));
								var norm = (axis.delta / timeUnitSize.year) / magn;

								if (norm < 1.5) {
									size = 1;
								} else if (norm < 3) {
									size = 2;
								} else if (norm < 7.5) {
									size = 5;
								} else {
									size = 10;
								}

								size *= magn;
							}

							// minimum size for years is 1

							if (size < 1) {
								size = 1;
							}
						}

						axis.tickSize = opts.tickSize || [size, unit];
						var tickSize = axis.tickSize[0];
						unit = axis.tickSize[1];

						var step = tickSize * timeUnitSize[unit];

						if (unit == "second") {
							d.setSeconds(floorInBase(d.getSeconds(), tickSize));
						} else if (unit == "minute") {
							d.setMinutes(floorInBase(d.getMinutes(), tickSize));
						} else if (unit == "hour") {
							d.setHours(floorInBase(d.getHours(), tickSize));
						} else if (unit == "month") {
							d.setMonth(floorInBase(d.getMonth(), tickSize));
						} else if (unit == "quarter") {
							d.setMonth(3 * floorInBase(d.getMonth() / 3,
								tickSize));
						} else if (unit == "year") {
							d.setFullYear(floorInBase(d.getFullYear(), tickSize));
						}

						// reset smaller components

						d.setMilliseconds(0);

						if (step >= timeUnitSize.minute) {
							d.setSeconds(0);
						}
						if (step >= timeUnitSize.hour) {
							d.setMinutes(0);
						}
						if (step >= timeUnitSize.day) {
							d.setHours(0);
						}
						if (step >= timeUnitSize.day * 4) {
							d.setDate(1);
						}
						if (step >= timeUnitSize.month * 2) {
							d.setMonth(floorInBase(d.getMonth(), 3));
						}
						if (step >= timeUnitSize.quarter * 2) {
							d.setMonth(floorInBase(d.getMonth(), 6));
						}
						if (step >= timeUnitSize.year) {
							d.setMonth(0);
						}

						var carry = 0;
						var v = Number.NaN;
						var prev;

						do {

							prev = v;
							v = d.getTime();
							ticks.push(v);

							if (unit == "month" || unit == "quarter") {
								if (tickSize < 1) {

									// a bit complicated - we'll divide the
									// month/quarter up but we need to take
									// care of fractions so we don't end up in
									// the middle of a day

									d.setDate(1);
									var start = d.getTime();
									d.setMonth(d.getMonth() +
										(unit == "quarter" ? 3 : 1));
									var end = d.getTime();
									d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
									carry = d.getHours();
									d.setHours(0);
								} else {
									d.setMonth(d.getMonth() +
										tickSize * (unit == "quarter" ? 3 : 1));
								}
							} else if (unit == "year") {
								d.setFullYear(d.getFullYear() + tickSize);
							} else {
								d.setTime(v + step);
							}
						} while (v < axis.max && v != prev);

						return ticks;
					};

					axis.tickFormatter = function (v, axis) {

						var d = dateGenerator(v, axis.options);

						// first check global format

						if (opts.timeformat != null) {
							return formatDate(d, opts.timeformat, opts.monthNames, opts.dayNames);
						}

						// possibly use quarters if quarters are mentioned in
						// any of these places

						var useQuarters = (axis.options.tickSize &&
								axis.options.tickSize[1] == "quarter") ||
							(axis.options.minTickSize &&
								axis.options.minTickSize[1] == "quarter");

						var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
						var span = axis.max - axis.min;
						var suffix = (opts.twelveHourClock) ? " %p" : "";
						var hourCode = (opts.twelveHourClock) ? "%I" : "%H";
						var fmt;

						if (t < timeUnitSize.minute) {
							fmt = hourCode + ":%M:%S" + suffix;
						} else if (t < timeUnitSize.day) {
							if (span < 2 * timeUnitSize.day) {
								fmt = hourCode + ":%M" + suffix;
							} else {
								fmt = "%b %d " + hourCode + ":%M" + suffix;
							}
						} else if (t < timeUnitSize.month) {
							fmt = "%b %d";
						} else if ((useQuarters && t < timeUnitSize.quarter) ||
							(!useQuarters && t < timeUnitSize.year)) {
							if (span < timeUnitSize.year) {
								fmt = "%b";
							} else {
								fmt = "%b %Y";
							}
						} else if (useQuarters && t < timeUnitSize.year) {
							if (span < timeUnitSize.year) {
								fmt = "Q%q";
							} else {
								fmt = "Q%q %Y";
							}
						} else {
							fmt = "%Y";
						}

						var rt = formatDate(d, fmt, opts.monthNames, opts.dayNames);

						return rt;
					};
				}
			});
		});
	}

	$.plot.plugins.push({
		init: init,
		options: options,
		name: 'time',
		version: '1.0'
	});

	// Time-axis support used to be in Flot core, which exposed the
	// formatDate function on the plot object.  Various plugins depend
	// on the function, so we need to re-expose it here.

	$.plot.formatDate = formatDate;
	$.plot.dateGenerator = dateGenerator;

})(jQuery);


/***/ }),

/***/ "../../../../../vendor/flot/jquery.flot.tooltip.min.js":
/***/ (function(module, exports) {

/*
 * jquery.flot.tooltip
 * 
 * description: easy-to-use tooltips for Flot charts
 * version: 0.6.2
 * author: Krzysztof Urbas @krzysu [myviews.pl]
 * website: https://github.com/krzysu/flot.tooltip
 * 
 * build on 2013-09-30
 * released under MIT License, 2012
*/ 
(function(t){var o={tooltip:!1,tooltipOpts:{content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,shifts:{x:10,y:20},defaultTheme:!0,onHover:function(){}}},i=function(t){this.tipPosition={x:0,y:0},this.init(t)};i.prototype.init=function(o){function i(t){var o={};o.x=t.pageX,o.y=t.pageY,s.updateTooltipPosition(o)}function e(t,o,i){var e=s.getDomElement();if(i){var n;n=s.stringFormat(s.tooltipOptions.content,i),e.html(n),s.updateTooltipPosition({x:o.pageX,y:o.pageY}),e.css({left:s.tipPosition.x+s.tooltipOptions.shifts.x,top:s.tipPosition.y+s.tooltipOptions.shifts.y}).show(),"function"==typeof s.tooltipOptions.onHover&&s.tooltipOptions.onHover(i,e)}else e.hide().html("")}var s=this;o.hooks.bindEvents.push(function(o,n){s.plotOptions=o.getOptions(),s.plotOptions.tooltip!==!1&&void 0!==s.plotOptions.tooltip&&(s.tooltipOptions=s.plotOptions.tooltipOpts,s.getDomElement(),t(o.getPlaceholder()).bind("plothover",e),t(n).bind("mousemove",i))}),o.hooks.shutdown.push(function(o,s){t(o.getPlaceholder()).unbind("plothover",e),t(s).unbind("mousemove",i)})},i.prototype.getDomElement=function(){var o;return t("#flotTip").length>0?o=t("#flotTip"):(o=t("<div />").attr("id","flotTip"),o.appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&o.css({background:"#fff","z-index":"100",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"none","white-space":"nowrap"})),o},i.prototype.updateTooltipPosition=function(o){var i=t("#flotTip").outerWidth()+this.tooltipOptions.shifts.x,e=t("#flotTip").outerHeight()+this.tooltipOptions.shifts.y;o.x-t(window).scrollLeft()>t(window).innerWidth()-i&&(o.x-=i),o.y-t(window).scrollTop()>t(window).innerHeight()-e&&(o.y-=e),this.tipPosition.x=o.x,this.tipPosition.y=o.y},i.prototype.stringFormat=function(t,o){var i=/%p\.{0,1}(\d{0,})/,e=/%s/,s=/%x\.{0,1}(?:\d{0,})/,n=/%y\.{0,1}(?:\d{0,})/;return"function"==typeof t&&(t=t(o.series.label,o.series.data[o.dataIndex][0],o.series.data[o.dataIndex][1],o)),o.series.percent!==void 0&&(t=this.adjustValPrecision(i,t,o.series.percent)),o.series.label!==void 0&&(t=t.replace(e,o.series.label)),this.isTimeMode("xaxis",o)&&this.isXDateFormat(o)&&(t=t.replace(s,this.timestampToDate(o.series.data[o.dataIndex][0],this.tooltipOptions.xDateFormat))),this.isTimeMode("yaxis",o)&&this.isYDateFormat(o)&&(t=t.replace(n,this.timestampToDate(o.series.data[o.dataIndex][1],this.tooltipOptions.yDateFormat))),"number"==typeof o.series.data[o.dataIndex][0]&&(t=this.adjustValPrecision(s,t,o.series.data[o.dataIndex][0])),"number"==typeof o.series.data[o.dataIndex][1]&&(t=this.adjustValPrecision(n,t,o.series.data[o.dataIndex][1])),o.series.xaxis.tickFormatter!==void 0&&(t=t.replace(s,o.series.xaxis.tickFormatter(o.series.data[o.dataIndex][0],o.series.xaxis))),o.series.yaxis.tickFormatter!==void 0&&(t=t.replace(n,o.series.yaxis.tickFormatter(o.series.data[o.dataIndex][1],o.series.yaxis))),t},i.prototype.isTimeMode=function(t,o){return o.series[t].options.mode!==void 0&&"time"===o.series[t].options.mode},i.prototype.isXDateFormat=function(){return this.tooltipOptions.xDateFormat!==void 0&&null!==this.tooltipOptions.xDateFormat},i.prototype.isYDateFormat=function(){return this.tooltipOptions.yDateFormat!==void 0&&null!==this.tooltipOptions.yDateFormat},i.prototype.timestampToDate=function(o,i){var e=new Date(o);return t.plot.formatDate(e,i)},i.prototype.adjustValPrecision=function(t,o,i){var e,s=o.match(t);return null!==s&&""!==RegExp.$1&&(e=RegExp.$1,i=i.toFixed(e),o=o.replace(t,i)),o};var e=function(t){new i(t)};t.plot.plugins.push({init:e,options:o,name:"tooltip",version:"0.6.1"})})(jQuery);

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map