(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{132:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(134),m=t(151),c=t(158),i=t(136);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){const{metadata:a,items:t}=e,{siteConfig:{title:n}}=Object(l.a)(),i="/"===a.permalink?n:"Blog";return r.a.createElement(m.a,{title:i,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},t.map(({content:e})=>r.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null))),r.a.createElement(o,{metadata:a})))))}},153:function(e,a,t){"use strict";var n=t(2),r=t(0),l=t.n(r),m=t(136),c=t(152),i=t(135),o=t(134),s=(t(94),t(95)),g=t.n(s);var d=e=>function({id:a,...t}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(o.a)();return a?l.a.createElement(e,t,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:Object(i.a)("anchor",{[g.a.enhancedAnchor]:!n}),id:a}),t.children,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):l.a.createElement(e,t)},E=t(96),u=t.n(E);a.a={code:e=>{const{children:a}=e;return"string"==typeof a?a.includes("\n")?l.a.createElement(c.a,e):l.a.createElement("code",e):a},a:e=>/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(m.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:u.a.mdxCodeBlock},e)),h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")}},158:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(135),m=t(137),c=t(156),i=t(136),o=t(153),s=t(142),g=t(97),d=t.n(g);const E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:g,isBlogPostPage:u=!1}=e,{date:h,permalink:p,tags:v,readingTime:b}=n,{author:_,title:N,image:f}=t,k=t.author_url||t.authorURL,w=t.author_title||t.authorTitle,y=t.author_image_url||t.authorImageURL,O=Object(s.a)(f,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,f&&r.a.createElement("meta",{property:"og:image",content:O}),f&&r.a.createElement("meta",{property:"twitter:image",content:O}),f&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N})),r.a.createElement("article",{className:u?void 0:"margin-bottom--xl"},(()=>{const e=u?"h1":"h2",a=h.substring(0,10).split("-"),t=a[0],n=E[parseInt(a[1],10)-1],m=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},u?N:r.a.createElement(i.a,{to:p},N)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:h,className:d.a.blogPostDate},n," ",m,", ",t," ",b&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(b)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},y&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:k,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:y,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},w)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},a)),(v.length>0||g)&&r.a.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),v.map(({label:e,permalink:a})=>r.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},e))),g&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:n.permalink,"aria-label":"Read more about "+N},r.a.createElement("strong",null,"Read More"))))))}}}]);