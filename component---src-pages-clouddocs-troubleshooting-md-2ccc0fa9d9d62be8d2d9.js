(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),l=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),d=a("TSYQ"),b=a.n(d),u=a("QH2O"),m=a.n(u),p=a("qKvR"),f=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:b()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,c=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},x=a("FCXl"),j=a("dI71"),O=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===o,c=new RegExp(o+"/?(#.*)?$"),s=n.replace(c,a);return Object(p.b)("li",{key:e,className:b()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(p.b)(l.Link,{className:O.link,to:""+s},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:O.list},r))))))},t}(o.a.Component),v=a("MjG9"),T=a("CzIb"),w=a("Asxa"),N=a("OIbQ"),k=a.n(N),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:k.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,d=void 0===r?{}:r,b=t.relativePagePath,u=t.titleType,m=d.tabs,g=d.title,j=d.theme,O=d.description,w=d.keywords,N=d.date,k=Object(T.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,M=I?n.pathname.replace(I,""):n.pathname,C=m?M.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",E=j||k;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:E,pageTitle:g,pageDescription:O,pageKeywords:w,titleType:u},Object(p.b)(f,{title:o?Object(p.b)(o,null):g,label:"label",tabs:m,theme:E}),m&&Object(p.b)(y,{title:g,slug:M,tabs:m,currentTab:C}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:b}),Object(p.b)(P,{date:N})),Object(p.b)(x.a,{pageContext:t,location:n,slug:M,tabs:m,currentTab:C}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},x7bM:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),{}),c={_frontmatter:l},s=i.a;function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Cartridge Deployment Timeout"),Object(r.b)("p",null,"Some large cartridge deployments can exceed the request timeout thresholds. In that event, you may receive the following error response:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "httpCode":"500",\n  "httpMessage":"Internal Server Error",\n  "moreInformation":"Failed to establish a backside connection"\n}\n')),Object(r.b)("p",null,"This timeout occurs outside of Annotator for Clinical Data and does not prevent your cartridge from being successfully deployed. You just won’t get the itemized response confirming successful deployment of each individual artifact within your cartridge. If your cartridge deployment request times out, here are steps you can take to verify successful deployment after giving the process about 15 minutes to complete."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For initial deployment of a cartridge, you can look for the creation of the default annotator flow to determine whether deployment has completed. The default annotator flow is the last artifact created during the deployment process and its existence signals completion of deployment in the initial deployment of a cartridge.")),Object(r.b)("p",null,"Sample request to retrieve flows for verifying completion of initial cartridge deployment:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-Curl"},'  curl -X GET -u "apikey:{apikey}" \\\n  --header "Accept: application/json" \\\n  "{url}/v1/flows?version=2017-10-13"\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For updates to a previously deployed cartridge and to verify successful deployment of a cartridge in general upon a deployment request timeout, run some sample text through the ",Object(r.b)("em",{parentName:"li"},"POST /v1/analyze")," API and verify that the response adheres to the configurations defined within your cartridge.")),Object(r.b)("h2",null,"Missing Medical Codes"),Object(r.b)("p",null,"Medical codes are supported as of the 2018AA version of the UMLS library. Ensure you are using the 2018AA or higher version of UMLS. For the ",Object(r.b)("a",{parentName:"p",href:"/acd-containers/clouddocs/annotator_concept_detection/"},"concept detection")," and ",Object(r.b)("a",{parentName:"p",href:"/acd-containers/clouddocs/annotator_attribute_detection/"},"attribute detection")," annotators, ensure you have specified the optional configuration parameter to return the medical codes in your flow definition."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clouddocs-troubleshooting-md-2ccc0fa9d9d62be8d2d9.js.map