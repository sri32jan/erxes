(window.webpackJsonp=window.webpackJsonp||[]).push([[65,8,16],{139:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(149),i=t(175),c=t(143);var o=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},s=t(159),d=t(181);a.default=function(e){var a=e.content,t=e.sidebar,n=a.frontMatter,c=a.metadata,m=c.title,u=c.description,v=c.nextItem,h=c.prevItem,p=c.editUrl,f=n.hide_table_of_contents;return r.a.createElement(l.a,{title:m,description:u},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:t})),r.a.createElement("div",{className:"col col--8"},r.a.createElement(i.a,{frontMatter:n,metadata:c,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,p&&r.a.createElement("a",{href:p,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(v||h)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(o,{nextItem:v,prevItem:h}))),!f&&a.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(d.a,{headings:a.rightToc})))))}},150:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(142),i=t.n(l),c=t(141),o=t(144),s=t(148);t(49);a.a=function(e){var a=Object(n.useState)(!1),l=a[0],d=a[1],m=Object(n.useRef)(null),u=Object(c.a)().siteConfig,v=(void 0===u?{}:u).themeConfig.algolia,h=Object(o.useHistory)(),p=Object(s.a)().navigateToSearchPage;var f=function(e){void 0===e&&(e=!0),l||Promise.all([Promise.all([t.e(78),t.e(82)]).then(t.t.bind(null,151,7)),t.e(0).then(t.t.bind(null,50,7))]).then((function(a){var t=a[0].default;d(!0),window.docsearch=t,function(e){window.docsearch({appId:v.appId,apiKey:v.apiKey,indexName:v.indexName,inputSelector:"#search_input_react",algoliaOptions:v.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1},handleSelected:function(e,a,t){a.stopPropagation();var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;h.push(r)}}),e&&m.current.focus()}(e)}))},g=Object(n.useCallback)((function(){f(),l&&m.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),E=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;f(a)})),_=Object(n.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||p(e.target.value)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:b,onFocus:b,onBlur:E,onKeyDown:_,ref:m}))}},181:function(e,a,t){"use strict";var n=t(0),r=t.n(n);var l=function(e,a,t){var r=Object(n.useState)(void 0),l=r[0],i=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var r=0,c=!1,o=document.getElementsByClassName(e);r<o.length&&!c;){var s=o[r],d=s.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===m&&(l&&l.classList.remove(a),s.classList.add(a),i(s),c=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=t(55),c=t.n(i),o="table-of-contents__link";function s(e){var a=e.headings,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(s,{isChild:!0,headings:e.children}))}))):null}a.a=function(e){var a=e.headings;return l(o,"table-of-contents__link--active",100),r.a.createElement("div",{className:c.a.tableOfContents},r.a.createElement(s,{headings:a}))}}}]);