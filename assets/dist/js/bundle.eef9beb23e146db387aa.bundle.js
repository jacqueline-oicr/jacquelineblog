webpackJsonp([1],{1153:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.contentsTypeSelector=void 0;var a=r(45),n=function(e){return e.contents};t.contentsTypeSelector=function(e){return(0,a.createSelector)(n,function(t){return t&&0!==t.length?t.filter(function(t){return t.type===e&&t.data.attributes}):[]})}},134:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(66),n=(r(51),s(r(135))),i=s(r(136)),l=r(137);function s(e){return e&&e.__esModule?e:{default:e}}var o=(0,a.combineReducers)(Object.assign({},n.default,{categoryFilter:l.categoryFilterReducer,typeFilter:l.typeFilterReducer,institutionFilter:l.institutionFilterReducer,speakersImages:l.speakersImagesReducer})),u=(0,a.compose)(a.applyMiddleware.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(i.default)),function(e){return e});t.default=(0,a.createStore)(o,{},u)},135:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(51),i=r(58);t.default=a({},n.UMS.reducers,n.Forms.reducers,n.Search.reducers,n.Publications.reducers,{visibilityFilter:i.visibilityFilterReducer})},136:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(115);t.default=a.middlewares},137:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.speakersImagesReducer=t.institutionFilterReducer=t.typeFilterReducer=t.categoryFilterReducer=void 0;var a=r(138);t.categoryFilterReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"RECEIVE_FETCH_DATA":return"getContents"===t.requestId&&t.data&&t.data.length&&("talks"===t.data[0].type||"speakers"===t.data[0].type||"abstracts"===t.data[0].type)?(0,a.transformContentsToCategoryFilter)(t.data):e;default:return e}},t.typeFilterReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"RECEIVE_FETCH_DATA":return"getContents"===t.requestId&&t.data&&t.data.length&&"speakers"===t.data[0].type?(0,a.transformContentsToTypeFilter)(t.data):e;default:return e}},t.institutionFilterReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"RECEIVE_FETCH_DATA":return"getContents"===t.requestId&&t.data&&t.data.length&&"speakers"===t.data[0].type?(0,a.transformContentsToInstitutionFilter)(t.data):e;default:return e}},t.speakersImagesReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"RECEIVE_FETCH_DATA":return"getSpeakersImages"===t.requestId?Object.assign({},e,(0,a.transformSpeakersImages)(t.data)):e;default:return e}}},138:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.transformContentsToCategoryFilter=function(e){if(!e&&!e.length)return[];var t=[];return e.filter(function(t){return t.type===e[0].type}).forEach(function(e){e&&e.data&&e.data.attributes&&e.data.attributes.categories_list&&e.data.attributes.categories_list.forEach(function(e){e.category_txt&&!t.includes(e.category_txt)&&t.push(e.category_txt)})}),t.sort()},t.transformContentsToTypeFilter=function(e){if(!e&&!e.length)return[];var t=[];return e.filter(function(t){return t.type===e[0].type}).forEach(function(e){if(e&&e.data&&e.data.attributes&&e.data.attributes.speakerType_txt){var r=e.data.attributes.speakerType_txt;r&&!t.includes(r)&&t.push(r)}}),t.sort()},t.transformContentsToInstitutionFilter=function(e){if(!e&&!e.length)return[];var t=[];return e.filter(function(t){return t.type===e[0].type}).forEach(function(e){e&&e.data&&e.data.attributes&&e.data.attributes.institutions_list&&e.data.attributes.institutions_list.forEach(function(e){e.institution_txt&&!t.includes(e.institution_txt)&&t.push(e.institution_txt)})}),t.sort()},t.transformSpeakersImages=function(e){if(!e||!Array.isArray(e)||0===e.length)return[];var t={};return e.filter(function(e){return!!e.data.attributes}).forEach(function(e){var r=e.data.attributes;r.file.src&&(t[e.path]=r.file.src)}),t},t.truncateString=function(e,t){if(e&&e.length<=t)return e;var r=e.substring(0,t+1),a=/[\s,.]$/.test(r)?t:r.lastIndexOf(" ");return r.substring(0,a)+"..."}},2814:function(e,t,r){r(194),r(2815),e.exports=r(2816)},2815:function(e,t,r){"use strict";(function(e){e(function(){e("#trc-nav-search").submit(function(){var t=e("#trc-nav-search-keywords").val().trim();return t&&(window.location="/search/#/"+t),!1})}),e(function(){e("#trc-mobile-search").submit(function(){var t=e("#trc-mobile-search-keywords").val().trim();return t&&(window.location="/search/#/"+t),!1})}),e(function(){e("#breadcrumb .breadcrumb-link.reserve-query").each(function(t){e(this).attr("href",e(this).attr("href")+"#/"+location.search)})})}).call(t,r(142))},2816:function(e,t,r){"use strict";var a=d(r(0)),n=d(r(23)),i=r(18),l=r(51),s=r(71),o=r(215),u=d(r(2817)),c=d(r(2821)),f=d(r(134));function d(e){return e&&e.__esModule?e:{default:e}}var p=l.Core.actions.getPageContent,m=document.getElementById("speakers-container");m&&((0,s.getContents)('{"type":"speakers"}')(f.default.dispatch),p("__pages/speakers.md")(f.default.dispatch),n.default.render(a.default.createElement(l.Provider,{store:f.default,selector:function(e){return(0,o.attributesSelector)(["__pages/speakers.md"])(e)}},a.default.createElement(i.Router,{history:i.hashHistory},a.default.createElement(i.Route,{path:"/",component:u.default}))),m));var y=document.getElementById("abstracts-container");y&&((0,s.getContents)('{"type":"abstracts"}')(f.default.dispatch),p("__pages/abstracts.md")(f.default.dispatch),n.default.render(a.default.createElement(l.Provider,{store:f.default,selector:function(e){return(0,o.attributesSelector)(["__pages/abstracts.md"])(e)}},a.default.createElement(i.Router,{history:i.hashHistory},a.default.createElement(i.Route,{path:"/",component:c.default}))),y))},2817:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=y(r(0)),i=r(18),l=y(r(1)),s=r(2),o=r(98),u=r(3),c=r(14),f=r(58),d=(y(r(57)),y(r(2818))),p=r(2819),m=r(1153);function y(e){return e&&e.__esModule?e:{default:e}}var g=s.FilterFields.renderTextFilter,h=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={numOfItems:0},e.onHandleTypeClick=e.onHandleTypeClick.bind(e),e.onHandleInstitutionClick=e.onHandleInstitutionClick.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),a(t,[{key:"componentWillMount",value:function(){var e=this.props.location.query,t=[];e.type&&t.push({key:"type",value:e.type.split(",")||[]}),e.institution&&t.push({key:"institution",value:e.institution.split(",")||[]}),this.props.changeFilter(t)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,r=t.location.query,a=t.speakers,n=t.speakersImages,i=[];if(r.type&&!e.location.query.type?i.push({key:"type",value:[]}):e.location.query.type!==r.type&&i.push([{key:"type",value:decodeURI(e.location.query.type).split(",")}]),r.institution&&!e.location.query.institution?i.push({key:"institution",value:[]}):e.location.query.institution!==r.institution&&i.push([{key:"institution",value:decodeURI(e.location.query.institution).split(",")}]),i&&i.length&&this.props.changeFilter(i),JSON.stringify(a)!==JSON.stringify(e.speakers)){var l=e.speakers.filter(function(e){return e&&e.data&&e.data.attributes&&e.data.attributes.speakerImage_txt&&!n[e.data.attributes.speakerImage_txt]}).map(function(e){return e.data.attributes.speakerImage_txt});l&&l.length>0&&e.getSpeakersImages(l)}}},{key:"onHandleTypeClick",value:function(e){e.preventDefault(),this.props.toggleFilter({key:"type",value:e.target.getAttribute("data-value")})}},{key:"onHandleInstitutionClick",value:function(e){e.preventDefault(),this.props.toggleFilter({key:"institution",value:e.target.getAttribute("data-value")})}},{key:"getFilters",value:function(){var e=this.props.visibilityFilter.category,t=e.type,r=e.institution;return[function(e){var r=e.querySelector(".speaker-card-box");return r&&(!t||!t.length||t.includes(r.dataset.type))},function(e){var t=e.querySelector(".speaker-card-box");return t&&(!r||!r.length||JSON.parse(t.dataset.institution).some(function(e){return r.includes(e)}))}]}},{key:"generateFilterUI",value:function(){var e=this,t=this.props,r=t.intl,a=t.visibilityFilter.category,i=a.type,l=a.institution,s=(t.categoryFilter,t.typeFilter),o=t.institutionFilter;return n.default.createElement("div",{id:"news-filter",className:"section"},n.default.createElement("div",{className:"filter-wrapper"},n.default.createElement("div",{className:"col-xs-12"},n.default.createElement("div",{className:"filter-label"},r.formatMessage({id:"filterTypes_list.1.title_txt"})),s.map(function(t){return n.default.createElement("div",{className:"filter-item",key:t},n.default.createElement("button",{className:"btn btn-default btn-filter "+(i&&i.includes(t)?"active":""),"data-value":t,onClick:e.onHandleTypeClick},t))})),n.default.createElement("div",{className:"col-xs-12"},n.default.createElement("div",{className:"filter-label"},r.formatMessage({id:"filterTypes_list.2.title_txt"})),o.map(function(t){return n.default.createElement("div",{className:"filter-item",key:t},n.default.createElement("button",{className:"btn btn-default btn-filter "+(l&&l.includes(t)?"active":""),"data-value":t,onClick:e.onHandleInstitutionClick},t))}))))}},{key:"render",value:function(){var e=this,t=this.props,r=t.visibilityFilter.category.searchTerm,a=t.intl,i=t.location,l=t.speakers,o=t.speakersImages,u=t.fetchContents,c=t.fetchImages;return n.default.createElement("div",{className:"container"},n.default.createElement("div",{className:"row header-row"},n.default.createElement("div",{className:"header"},n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-md-offset-9 col-md-3 col-xs-12 search-container"},n.default.createElement(s.FilterItem,{name:"searchTerm",label:a.formatMessage({id:"labels_list.search_txt",defaultMessage:"Search"}),location:i,component:g,placeholder:a.formatMessage({id:"search_txt",defaultMessage:"Search Speakers"})}))))),n.default.createElement(s.LoadingComponent,c,n.default.createElement(s.LoadingComponent,u,n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-md-4 col-xs-12 filters-col"},this.generateFilterUI()),n.default.createElement("div",{className:"col-md-8 col-xs-12 speakers-col"},l&&l.length>0&&n.default.createElement(s.IsotopeGrid,{xs:12,sm:6,md:6,lg:4,id:"news-box-isotope",className:"card-grid",filterList:this.getFilters(),searchTerm:r,onArrangeComplete:function(t){e.setState({numOfItems:t.length})}},l.map(function(e){return n.default.createElement(s.IsotopeGrid.Item,{key:e._id,className:"card-container "+(e.sizer?" wfui-isotope-grid-sizer":""),item:e,image:e.data.attributes.speakerImage_txt?o[e.data.attributes.speakerImage_txt]:"initials",itemDisplay:n.default.createElement(d.default,{location:i})})})))))))}}]),t}();h.propTypes={visibilityFilter:l.default.object,changeFilter:l.default.func,toggleFilter:l.default.func,intl:l.default.object,speakers:l.default.arrayOf(l.default.object),speakersImages:l.default.object,typeFilter:l.default.arrayOf(l.default.string),institutionFilter:l.default.arrayOf(l.default.string),fetchContents:l.default.object,location:i.locationShape,getSpeakersImages:l.default.func},h.defaultPropTypes={changeFilter:function(e){return e}},t.default=(0,o.connect)(function(e){return{speakers:(0,m.contentsTypeSelector)("speakers")(e).sort(function(e,t){var r="Keynote Speakers"===e.data.attributes.speakerType_txt?0:"Speakers"===e.data.attributes.speakerType_txt?1:2,a="Keynote Speakers"===t.data.attributes.speakerType_txt?0:"Speakers"===t.data.attributes.speakerType_txt?1:2;if(r===a){var n=""+e.data.attributes.firstName_txt+e.data.attributes.lastName_txt,i=""+t.data.attributes.firstName_txt+t.data.attributes.lastName_txt;return n.localeCompare(i)}return r-a})||[],speakersImages:e.speakersImages,typeFilter:e.typeFilter||[],institutionFilter:e.institutionFilter||[],visibilityFilter:e.visibilityFilter,fetchContents:(0,c.fetchSelector)("getContents")(e)||{},fetchImages:(0,c.fetchSelector)("getSpeakersImages")(e)||{}}},{changeFilter:f.changeFilter,toggleFilter:f.toggleFilter,getSpeakersImages:p.getSpeakersImages})((0,u.injectIntl)(h))},2818:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=r(0),i=c(n),l=c(r(1)),s=r(98),o=r(18),u=r(58);function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onHandleFilterClick=e.onHandleFilterClick.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),a(t,[{key:"onHandleFilterClick",value:function(e){e.preventDefault(),this.props.toggleFilter({key:"filter",value:e.target.getAttribute("data-value")})}},{key:"render",value:function(){var e=this.props,t=e.item.data.attributes,r=t.about_txt,a=t.categories_list,n=t.speakerType_txt,l=t.institutions_list,s=t.permalink,o=t.firstName_txt,u=t.lastName_txt,c=t.titles_list,f=t.organization_txt,d=t.talk_txt,p=e.location,m=e.image,y=(o||"")+(o&&u?" ":"")+(u||""),g=""+(c&&c.length?c.map(function(e){return e.title_txt}).join(", "):""),h="Keynote Speakers"===n?i.default.createElement("div",{className:"speaker-box-header"},i.default.createElement("p",{className:"keynote-header"},i.default.createElement("img",{alt:"",className:"star",src:"/assets/site/images/icon-star-white.svg"}),"Keynote Speaker")):null,b=i.default.createElement("div",{className:"speaker-box-body"},"initials"===m?i.default.createElement("div",{className:"initials"},i.default.createElement("p",null,o&&o.charAt(0),u&&u.charAt(0))):i.default.createElement("img",{alt:""+y,className:"speaker-img img-responsive",src:m}),i.default.createElement("p",{className:"speaker-name"},y+(g?", "+g:"")),i.default.createElement("p",{className:"spekaer-institute"},f),d?i.default.createElement("p",{className:"speaker-talk"},i.default.createElement("strong",null,"Talk:")," "+d):null);return r&&r.length?i.default.createElement("a",{className:"card-box speaker-card-box "+("Keynote Speakers"===n?"keynote-speaker-card-box":"none-keynote-speaker-card-box"),href:""+s+p.search,"data-category":JSON.stringify(a&&a.length?a.map(function(e){return e.category_txt}):[]),"data-type":n,"data-institution":JSON.stringify(l&&l.length?l.map(function(e){return e.institution_txt}):[])},h,b):i.default.createElement("div",{className:"card-box speaker-card-box "+("Keynote Speakers"===n?"keynote-speaker-card-box":"none-keynote-speaker-card-box"),href:""+s+p.search,"data-category":JSON.stringify(a&&a.length?a.map(function(e){return e.category_txt}):[]),"data-type":n,"data-institution":JSON.stringify(l&&l.length?l.map(function(e){return e.institution_txt}):[])},h,b)}}]),t}();f.propTypes={item:l.default.shape({data:l.default.shape({attributes:l.default.shape({categories_list:l.default.array,speakerType_txt:l.default.string,institutions_list:l.default.array,permalink:l.default.string,firstName_txt:l.default.string,lastName_txt:l.default.string,titles_list:l.default.array,organization_txt:l.default.string})})}),image:l.default.string,location:o.locationShape,toggleFilter:l.default.func},t.default=(0,s.connect)(function(){return{}},{toggleFilter:u.toggleFilter})(f)},2819:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSpeakersImages=void 0;var a=r(14),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(2820));t.getSpeakersImages=function(e,t){return function(r){return(0,a.wfuiFetch)(("//"+n.API_HOST+n.API_LIST_CONTENTS).replace("[CONTENT_PATHS]",JSON.stringify(e)),{method:"GET",headers:{"Content-Type":"application/json","app-id":n.APP_ID},requestId:"getSpeakersImages",credentials:t?"include":"omit"},r).promise}}},2820:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.APP_ID=window.APP_CONFIG.APP_ID,t.CONTACT_LINK=window.APP_CONFIG.CONTACT_LINK,t.API_HOST=window.APP_CONFIG.API_HOST,t.API_LIST_CONTENTS='/content/contents?filter={"path": { "$in": [CONTENT_PATHS]}}',t.TALKS_OVERVIEW_MAX_LENGTH=180},2821:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=m(r(0)),i=r(18),l=m(r(1)),s=r(2),o=r(98),u=r(3),c=r(14),f=r(58),d=(m(r(57)),m(r(2822))),p=r(1153);function m(e){return e&&e.__esModule?e:{default:e}}var y=s.FilterFields.renderTextFilter,g=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={numOfItems:0},e.onHandleFilterClick=e.onHandleFilterClick.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),a(t,[{key:"componentWillMount",value:function(){var e=this.props.location.query,t=[];e.filter&&t.push({key:"filter",value:e.filter.split(",")||[]}),this.props.changeFilter(t)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.location.query;t.filter&&!e.location.query.filter?this.props.changeFilter([{key:"filter",value:[]}]):e.location.query.filter!==t.filter&&this.props.changeFilter([{key:"filter",value:decodeURI(e.location.query.filter).split(",")}])}},{key:"onHandleFilterClick",value:function(e){e.preventDefault(),this.props.toggleFilter({key:"filter",value:e.target.getAttribute("data-value")})}},{key:"getFilters",value:function(){var e=this.props.visibilityFilter.category.filter;return[function(t){var r=t.querySelector(".abstract-card-box");return r&&(!e||!e.length||JSON.parse(r.dataset.filter).some(function(t){return e.includes(t)}))}]}},{key:"generateFilterUI",value:function(){var e=this,t=this.props,r=t.intl,a=t.visibilityFilter.category.filter,i=t.categoryFilter;return n.default.createElement("div",{id:"news-filter",className:"section"},n.default.createElement("div",{className:"filter-wrapper"},n.default.createElement("div",{className:"full-width filters"},n.default.createElement("div",{className:"filter-label"},r.formatMessage({id:"filterTypes_list.0.title_txt"})),i.map(function(t){return n.default.createElement("div",{className:"filter-item",key:t},n.default.createElement("button",{className:"btn btn-default btn-filter "+(a&&a.includes(t)?"active":""),"data-value":t,onClick:e.onHandleFilterClick},t))}))))}},{key:"render",value:function(){var e=this,t=this.props,r=t.visibilityFilter.category.searchTerm,a=t.intl,i=t.location,l=t.abstracts,o=t.fetchContents;return n.default.createElement("div",{className:"container"},n.default.createElement("div",{className:"row header-row"},n.default.createElement("div",{className:"header"},n.default.createElement("div",{className:"row flex-stretch-row"},n.default.createElement("div",{className:"col-md-9 col-xs-12 filter-container"},n.default.createElement("div",{className:"filters-row"},this.generateFilterUI())),n.default.createElement("div",{className:"col-md-3 col-xs-12 search-container"},n.default.createElement(s.FilterItem,{name:"searchTerm",label:a.formatMessage({id:"labels_list.search_txt",defaultMessage:"Search"}),location:i,component:y,placeholder:a.formatMessage({id:"search_txt",defaultMessage:"Search Abstract"})}))))),n.default.createElement(s.LoadingComponent,o,n.default.createElement("div",{className:"abstracts-row"},l&&l.length>0&&n.default.createElement(s.IsotopeGrid,{xs:12,sm:6,md:4,lg:4,id:"news-box-isotope",className:"card-grid",filterList:this.getFilters(),searchTerm:r,onArrangeComplete:function(t){e.setState({numOfItems:t.length})}},l.sort(function(e,t){return e.data.attributes.posternumber_ti-t.data.attributes.posternumber_ti})&&l.map(function(e){return n.default.createElement(s.IsotopeGrid.Item,{key:e._id,className:"card-container "+(e.sizer?" wfui-isotope-grid-sizer":""),item:e,itemDisplay:n.default.createElement(d.default,{location:i})})})))))}}]),t}();g.propTypes={visibilityFilter:l.default.object,changeFilter:l.default.func,toggleFilter:l.default.func,intl:l.default.object,abstracts:l.default.arrayOf(l.default.object),abstractsImages:l.default.object,categoryFilter:l.default.arrayOf(l.default.string),countryFilter:l.default.arrayOf(l.default.string),fetchContents:l.default.object,location:i.locationShape},g.defaultPropTypes={changeFilter:function(e){return e}},t.default=(0,o.connect)(function(e){return{abstracts:(0,p.contentsTypeSelector)("abstracts")(e)||[],abstractsImages:e.abstractsImages,categoryFilter:e.categoryFilter||[],countryFilter:e.countryFilter||[],visibilityFilter:e.visibilityFilter,fetchContents:(0,c.fetchSelector)("getContents")(e)||{}}},{changeFilter:f.changeFilter,toggleFilter:f.toggleFilter})((0,u.injectIntl)(g))},2822:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=r(0),i=c(n),l=c(r(1)),s=r(98),o=r(18),u=r(58);function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onHandleFilterClick=e.onHandleFilterClick.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),a(t,[{key:"onHandleFilterClick",value:function(e){e.preventDefault(),this.props.toggleFilter({key:"filter",value:e.target.getAttribute("data-value")})}},{key:"render",value:function(){var e=this,t=this.props,r=t.item.data.attributes,a=r.categories_list,n=r.permalink,l=r.posternumber_ti,s=r.title,o=t.location;return i.default.createElement("a",{className:"card-box abstract-card-box","data-filter":JSON.stringify(a&&a.length?a.map(function(e){return e.category_txt}):[]),href:""+n+o.search},i.default.createElement("p",{className:"poster-num"},"POSTER NO: ",l),i.default.createElement("div",{className:"box"},i.default.createElement("img",{src:"/assets/site/images/icon-abstract.svg"}),i.default.createElement("p",{className:"title"},s),a&&a.length&&i.default.createElement("div",{className:"tag"},a.map(function(t){return i.default.createElement("button",{className:"btn btn-default","data-value":t.category_txt,onClick:e.onHandleFilterClick,key:t.category_txt},t.category_txt)}))))}}]),t}();f.propTypes={item:l.default.shape({data:l.default.shape({attributes:l.default.shape({categories_list:l.default.array,permalink:l.default.string,posternumber_ti:l.default.number,title:l.default.string})})}),toggleFilter:l.default.func,location:o.locationShape},t.default=(0,s.connect)(function(){return{}},{toggleFilter:u.toggleFilter})(f)}},[2814]);