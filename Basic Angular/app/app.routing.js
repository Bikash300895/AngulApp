"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/Home/home.component");
var about_component_1 = require("./components/about/about.component");
var appRoute = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoute);
//# sourceMappingURL=app.routing.js.map