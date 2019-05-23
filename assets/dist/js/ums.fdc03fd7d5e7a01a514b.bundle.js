webpackJsonp([2],{134:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(66),a=(r(51),i(r(135))),o=i(r(136)),u=r(137);function i(e){return e&&e.__esModule?e:{default:e}}var s=(0,n.combineReducers)(Object.assign({},a.default,{categoryFilter:u.categoryFilterReducer,typeFilter:u.typeFilterReducer,institutionFilter:u.institutionFilterReducer,speakersImages:u.speakersImagesReducer})),d=(0,n.compose)(n.applyMiddleware.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(o.default)),function(e){return e});t.default=(0,n.createStore)(s,{},d)},135:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(51),o=r(58);t.default=n({},a.UMS.reducers,a.Forms.reducers,a.Search.reducers,a.Publications.reducers,{visibilityFilter:o.visibilityFilterReducer})},136:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(115);t.default=n.middlewares},137:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.speakersImagesReducer=t.institutionFilterReducer=t.typeFilterReducer=t.categoryFilterReducer=void 0;var n=r(138);t.categoryFilterReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"RECEIVE_FETCH_DATA":return"getContents"===t.requestId&&t.data&&t.data.length&&("talks"===t.data[0].type||"speakers"===t.data[0].type||"abstracts"===t.data[0].type)?(0,n.transformContentsToCategoryFilter)(t.data):e;default:return e}},t.typeFilterReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"RECEIVE_FETCH_DATA":return"getContents"===t.requestId&&t.data&&t.data.length&&"speakers"===t.data[0].type?(0,n.transformContentsToTypeFilter)(t.data):e;default:return e}},t.institutionFilterReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"RECEIVE_FETCH_DATA":return"getContents"===t.requestId&&t.data&&t.data.length&&"speakers"===t.data[0].type?(0,n.transformContentsToInstitutionFilter)(t.data):e;default:return e}},t.speakersImagesReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"RECEIVE_FETCH_DATA":return"getSpeakersImages"===t.requestId?Object.assign({},e,(0,n.transformSpeakersImages)(t.data)):e;default:return e}}},138:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.transformContentsToCategoryFilter=function(e){if(!e&&!e.length)return[];var t=[];return e.filter(function(t){return t.type===e[0].type}).forEach(function(e){e&&e.data&&e.data.attributes&&e.data.attributes.categories_list&&e.data.attributes.categories_list.forEach(function(e){e.category_txt&&!t.includes(e.category_txt)&&t.push(e.category_txt)})}),t.sort()},t.transformContentsToTypeFilter=function(e){if(!e&&!e.length)return[];var t=[];return e.filter(function(t){return t.type===e[0].type}).forEach(function(e){if(e&&e.data&&e.data.attributes&&e.data.attributes.speakerType_txt){var r=e.data.attributes.speakerType_txt;r&&!t.includes(r)&&t.push(r)}}),t.sort()},t.transformContentsToInstitutionFilter=function(e){if(!e&&!e.length)return[];var t=[];return e.filter(function(t){return t.type===e[0].type}).forEach(function(e){e&&e.data&&e.data.attributes&&e.data.attributes.institutions_list&&e.data.attributes.institutions_list.forEach(function(e){e.institution_txt&&!t.includes(e.institution_txt)&&t.push(e.institution_txt)})}),t.sort()},t.transformSpeakersImages=function(e){if(!e||!Array.isArray(e)||0===e.length)return[];var t={};return e.filter(function(e){return!!e.data.attributes}).forEach(function(e){var r=e.data.attributes;r.file.src&&(t[e.path]=r.file.src)}),t},t.truncateString=function(e,t){if(e&&e.length<=t)return e;var r=e.substring(0,t+1),n=/[\s,.]$/.test(r)?t:r.lastIndexOf(" ");return r.substring(0,n)+"..."}},2805:function(e,t,r){r(194),e.exports=r(2806)},2806:function(e,t,r){"use strict";var n=s(r(0)),a=s(r(23)),o=r(18),u=r(51),i=s(r(2807));function s(e){return e&&e.__esModule?e:{default:e}}var d=r(134).default;window.UMS_CONFIG&&u.UMS.setConfig(window.UMS_CONFIG),u.UMS.getUserInfo()(d.dispatch);var c=document.getElementById("app-user-services");c&&a.default.render(n.default.createElement(u.Provider,{store:d},n.default.createElement(o.Router,{history:o.hashHistory},n.default.createElement(u.UMS.Route,{path:"/dashboard",component:i.default}),n.default.createElement(u.UMS.BaseRoutes,null))),c);var l=document.getElementById("app-user-nav");if(l&&a.default.render(n.default.createElement(u.Provider,{store:d},n.default.createElement(u.UMS.Components.UserNavMenu,{rootPath:"/user"})),l),u.Core.getConfig().CMUI_ENABLED){var f=document.getElementById("editButton");f&&a.default.render(n.default.createElement(u.Core.Provider,{store:d},n.default.createElement(u.Core.Components.ContentPageWrapper,{viewDOM:f.innerHTML,rootPath:"/user/#/dashboard",eventKey:3,path:f.getAttribute("data-path"),isPublic:f.getAttribute("data-is-public")})),f)}},2807:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=d(r(0)),o=(d(r(1)),r(98)),u=r(18),i=r(51),s=r(49);function d(e){return e&&e.__esModule?e:{default:e}}var c=i.Core.Components.Dashboard,l=i.Core.Dashboard.ContentManagementDashboard,f=i.UMS.Dashboard,p=f.AdminSiteConfigDashboard,y=f.AdminUserDashboard,m=f.UserAccountDashboard,h=i.Forms.Dashboard,v=h.AdminCaseManagementDashboard,b=h.FormBuilderDashboard,E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"render",value:function(){var e=i.Core.getConfig();return a.default.createElement(c,{id:"forms-user-dashboard",className:"clearfix",defaultActiveKey:2.1,rootPath:"dashboard"},a.default.createElement(c.Menus,{id:"user-dashboard-menu"},a.default.createElement(m.Menu,{eventKey:2}),e.CMUI_ENABLED&&a.default.createElement(l.Menu,{eventKey:3}),e.FORM_ENABLED&&a.default.createElement(b.Menu,{eventKey:4}),e.FORM_ENABLED&&a.default.createElement(v.Menu,{eventKey:5}),a.default.createElement(p.Menu,{eventKey:6}),a.default.createElement(y.Menu,{eventKey:7})),a.default.createElement(c.Contents,{id:"user-dashboard-content"},a.default.createElement(m.Content,{eventKey:2}),e.CMUI_ENABLED&&a.default.createElement(l.Content,{eventKey:3}),e.FORM_ENABLED&&a.default.createElement(b.Content,{eventKey:4,caseManagementKey:5}),e.FORM_ENABLED&&a.default.createElement(v.Content,{eventKey:5,formBuilderKey:4}),a.default.createElement(p.Content,{eventKey:6}),a.default.createElement(y.Content,{eventKey:7})))}}]),t}();t.default=(0,u.withRouter)((0,o.connect)(function(e){return{isAdmin:(0,s.isAdminSelector)(e)}})(E))}},[2805]);