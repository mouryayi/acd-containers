(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),c=a.n(r),s=a("Wbzz"),o=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),u=a.n(p),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,c=i.subDirectory,o=r+"/edit/"+i.branch+c+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},w=a("FCXl"),v=a("dI71"),O=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),r=a===i,o=new RegExp(i+"/?(#.*)?$"),l=n.replace(o,a);return Object(m.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(m.b)(s.Link,{className:O.link,to:""+l},e))}));return Object(m.b)("div",{className:O.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:O.list},r))))))},t}(i.a.Component),j=a("MjG9"),x=a("CzIb"),y=a("Asxa"),N=a("OIbQ"),k=a.n(N),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(y.c,{className:k.a.row},Object(m.b)(y.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,u=b.tabs,h=b.title,v=b.theme,O=b.description,y=b.keywords,N=b.date,k=Object(x.a)().interiorTheme,C=Object(s.useStaticQuery)("2456312558").site.pathPrefix,L=C?n.pathname.replace(C,""):n.pathname,P=u?L.split("/").filter(Boolean).slice(-1)[0]||c()(u[0],{lower:!0}):"",I=v||k;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:I,pageTitle:h,pageDescription:O,pageKeywords:y,titleType:p},Object(m.b)(g,{title:i?Object(m.b)(i,null):h,label:"label",tabs:u,theme:I}),u&&Object(m.b)(A,{title:h,slug:L,tabs:u,currentTab:P}),Object(m.b)(j.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:d}),Object(m.b)(T,{date:N})),Object(m.b)(w.a,{pageContext:t,location:n,slug:L,tabs:u,currentTab:P}),Object(m.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},o8wx:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),s=(a("qKvR"),{}),o={_frontmatter:s},l=c.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"License Service is required for monitoring and measuring license usage of ACD in accord with the pricing rule for IBM containerized software.\nLicense usage is based on a Virtual Processing Core (VPC) metric. For ACD, it is the top-level pod ",Object(r.b)("inlineCode",{parentName:"p"},"ibm-wh-acd-acd")," that will be metered for VPC usage.\nThe usage will be the capacity of the node where this pod runs. For example, ACD running in a cluster with 16 CPU/node has license usage = 16 VPC. The ACD CPU limit can be adjusted with the ",Object(r.b)("inlineCode",{parentName:"p"},"spec.resources.limits.cpu"),". For more information on configuration see ",Object(r.b)("a",{parentName:"p",href:"https://ibm.github.io/acd-containers/management/configuring/"},"Configuration"),"."),Object(r.b)("p",null,"Note: Manual license measurements are not allowed."),Object(r.b)("h2",null,"Overview"),Object(r.b)("p",null,"The integrated licensing solution collects and stores the license usage information which can be used for audit purposes and for tracking license consumption in cloud environments.\nThe solution works in the background and does not require any configuration.\nOnly one instance of the License Service is deployed per cluster regardless of the number of Cloud Paks and containerized products that you have installed on the cluster."),Object(r.b)("p",null,"To comply with the licensing requirements for IBM containerized software, review ",Object(r.b)("a",{parentName:"p",href:"#validating-if-license-service-is-deployed-on-the-cluster"},"Validating if License Service is deployed on the cluster"),",\nand use the License Service APIs to generate the required usage audit reports (see ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/cpfs?topic=operator-overview"},"License Service")," documentation)."),Object(r.b)("h2",null,"Deploying License Service"),Object(r.b)("p",null,"If ",Object(r.b)("a",{parentName:"p",href:"#validating-if-license-service-is-deployed-on-the-cluster"},"Validating if License Service is deployed on the cluster")," determines that the License Service is not deployed on the cluster where you have deployed ACD,\nor the License Service does not return a status of Running, refer to the information about License Service, including how to install, retrieve license usage data, and troubleshoot.\nSee the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-licensing-operator/blob/master/docs/License_Service_main.md"},"License Service")," documentation. If deploying the License Service to a disconnected or air-gapped cluster, see the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/IBM/ibm-licensing-operator/blob/latest/docs/Content/Install_offline.md"},"offline installation License Service")," documentation."),Object(r.b)("h2",null,"Validating if License Service is deployed on the cluster"),Object(r.b)("p",null,"To ensure license reporting continuity for license compliance purposes, make sure that License Service is successfully deployed.\nIt is recommended to periodically verify whether it is active."),Object(r.b)("p",null,"To validate whether License Service is deployed and running on the cluster, you can, for example, log into the Red Hat OpenShift Container Platform cluster and run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"oc get pods --all-namespaces | grep ibm-licensing | grep -v operator\n")),Object(r.b)("p",null,"The following response is a confirmation of successful deployment:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"1/1     Running\n")),Object(r.b)("h2",null,"Viewing license usage"),Object(r.b)("p",null,"The license service is accessable via the ",Object(r.b)("inlineCode",{parentName:"p"},"ibm-licensing-service-instance")," route ",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"530px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVQoz5VSy5LCIBDk/79p/8JDLqtuuSklgayJ4TXAkG2DWltrebAPUzDQPd0UYhzHw+HQdV3f90qp0+k0DAO2Wmvvfc55eQ1RSiEiZkZ1zllrawUzpQQyv4bAnOOKEMLyJgTcNk2z2WzgH3sYeYOM2zUYbKDGGGuK2n/Y/kerHTHP8277qbUyxqCFd5JSIrYPYbpUzMbYdAfkUHEZ6gIuiZfMZR12Ey4r/o6qHajjaUCupwK0L+XPNsX8nPYm8RDKKbff7TRN1bnwqXzs4nGkbqLjmeRIcsI6tj/kKN9H3lQc2b3caYVw+kpOvGzP7CI74jmwCRkLR+USOD15yZytN+76FRzkfgFm20gTUBD4sgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("picture",{parentName:"span"},"\n          ",Object(r.b)("source",{parentName:"picture",srcSet:["/acd-containers/static/0e8f5f492302a9921f789deb3e39abe2/0eda2/license_route.webp 288w","/acd-containers/static/0e8f5f492302a9921f789deb3e39abe2/acad6/license_route.webp 530w"],sizes:"(max-width: 530px) 100vw, 530px",type:"image/webp"}),"\n          ",Object(r.b)("source",{parentName:"picture",srcSet:["/acd-containers/static/0e8f5f492302a9921f789deb3e39abe2/7fc1e/license_route.png 288w","/acd-containers/static/0e8f5f492302a9921f789deb3e39abe2/f113e/license_route.png 530w"],sizes:"(max-width: 530px) 100vw, 530px",type:"image/png"}),"\n          ",Object(r.b)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/acd-containers/static/0e8f5f492302a9921f789deb3e39abe2/f113e/license_route.png",alt:"ibm-licensing-service-instance",title:"ibm-licensing-service-instance",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")," that is created as part of the license service setup."),Object(r.b)("p",null,"In order to run the report the ",Object(r.b)("inlineCode",{parentName:"p"},"ibm-licensing-token")," secret’s token must be retrieved and provided on the above service. Once run, the results will show the ",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"557px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4klEQVQY042M7WrDMAxF/f6vt7J2aTvWDBq6LLGT+FPWleay/SuFXQ5CgqNrruPWXy77/WEcv8+n92N38j6klGNMjZxLKfQMY+fJWne7jcNwuy+tY5raow9h855qFRE09AGBcUkZ+pdmLlUTpEA8a4ZkILFExkayVbiCNleCIyGYj5mJRVu/KnwtO1deF3pby4ujbqufgY5bO2FJAmOh5rRerFVZTO+4t9yN1SbRxO2hdGvt4937VQkNFX2MOU+8G+rhq2ZWyjn2C4Zch8jXyEPCTPo8ZkmwEXNAKFpQMrL+Oz8GMZXPBXZRMwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("picture",{parentName:"span"},"\n          ",Object(r.b)("source",{parentName:"picture",srcSet:["/acd-containers/static/340448472933390d59b196d57c90581e/0eda2/license_report.webp 288w","/acd-containers/static/340448472933390d59b196d57c90581e/0ae72/license_report.webp 557w"],sizes:"(max-width: 557px) 100vw, 557px",type:"image/webp"}),"\n          ",Object(r.b)("source",{parentName:"picture",srcSet:["/acd-containers/static/340448472933390d59b196d57c90581e/7fc1e/license_report.png 288w","/acd-containers/static/340448472933390d59b196d57c90581e/b503f/license_report.png 557w"],sizes:"(max-width: 557px) 100vw, 557px",type:"image/png"}),"\n          ",Object(r.b)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/acd-containers/static/340448472933390d59b196d57c90581e/b503f/license_report.png",alt:"ACD usage",title:"ACD usage",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),"."),Object(r.b)("h2",null,"Archiving license usage data"),Object(r.b)("p",null,"Remember to archive the license usage evidence before you decommission the cluster where ACD was deployed. Retrieve the audit snapshot for the period when ACD was on the cluster and store it in case of audit."),Object(r.b)("p",null,"For more information about the licensing solution, see ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/cpfs?topic=operator-overview"},"License Service")," documentation."),Object(r.b)("p",null,"For FAQs related to Container licensing, see ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/software/passportadvantage/containerfaqov.html"},"Container Licensing FAQs"),"."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-installing-license-tracking-md-a6f9249686d30115f427.js.map