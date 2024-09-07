"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24948:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="DocumentService - A powerful, schematised Roblox datastore library",l={type:"mdx",permalink:"/DocumentService/",source:"@site/pages/index.md",title:"DocumentService - A powerful, schematised Roblox datastore library",description:"DocumentService is a fully strictly typed Luau library for saving data with Roblox DataStores.",frontMatter:{}},s=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Method 1: Wally",id:"method-1-wally",level:3},{value:"Method 2: Manual",id:"method-2-manual",level:3},{value:"Long-term goals",id:"long-term-goals",level:2},{value:"Inspiration",id:"inspiration",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Contact",id:"contact",level:2}],u={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"documentservice---a-powerful-schematised-roblox-datastore-library"},"DocumentService - A powerful, schematised Roblox datastore library"),(0,o.kt)("p",null,"DocumentService is a fully strictly typed Luau library for saving data with Roblox DataStores.\nIt can be used for sesssion-locked data, such as player data, or for non-session-locked data, like\nshared groups or houses."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://anthony0br.github.io/DocumentService/docs/intro"},"docs")," for more information."),(0,o.kt)("p",null,"This is a new release and, although it has been thoroughly unit tested, it hasn't yet been used\nin a live production game - as with any open source software, use it at your own risk! I am\nworking on adding it to my game, so this will not be a concern for too long."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fully strictly typed. This means you get full intellisense and typechecking on your data,\nand on every API method, including possible errors for each method."),(0,o.kt)("li",{parentName:"ul"},"Superior Rust-inspired error handling (Result types)."),(0,o.kt)("li",{parentName:"ul"},"Immutable cache and autosaves - preventing bugs caused by updates interfering with eachother."),(0,o.kt)("li",{parentName:"ul"},"Migrations, inspired by nezuo's Lapis."),(0,o.kt)("li",{parentName:"ul"},"Validate your data with support for runtime and static typechecking."),(0,o.kt)("li",{parentName:"ul"},"Documents can be session-locked, or not (to allow multi-server editing)."),(0,o.kt)("li",{parentName:"ul"},"Run hooks before and after operations, e.g. logging."),(0,o.kt)("li",{parentName:"ul"},"Automatic retries with exponential backoff."),(0,o.kt)("li",{parentName:"ul"},"Migrate from no library, or another library if you're brave."),(0,o.kt)("li",{parentName:"ul"},"Checks your data can be stored in JSON to avoid silent errors."),(0,o.kt)("li",{parentName:"ul"},"Simple API: session-locking a document simply extends the API."),(0,o.kt)("li",{parentName:"ul"},"Use any Mock DataStore you like.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"method-1-wally"},"Method 1: Wally"),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},'DocumentService = "anthony0br/documentservice@LATEST_VERSION"')," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"wally.toml"),"."),(0,o.kt)("h3",{id:"method-2-manual"},"Method 2: Manual"),(0,o.kt)("p",null,"DocumentService has no dependencies so you can just copy and paste the contents of\n",(0,o.kt)("inlineCode",{parentName:"p"},"target/roblox")," into your project."),(0,o.kt)("h2",{id:"long-term-goals"},"Long-term goals"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ACID transactions involving multiple Documents. Please get in touch if you can help with this!"),(0,o.kt)("li",{parentName:"ul"},"See the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/anthony0br/DocumentService/issues"},"issues")," page to discuss ways to make DocumentService better!")),(0,o.kt)("h2",{id:"inspiration"},"Inspiration"),(0,o.kt)("p",null,"This library takes inspiration from Lapis, ProfileService, keyForm, and kampfkarren's blog.\nThese are all great projects but didn't meet my needs in some way."),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"Contributions are accepted. Your contributions must run in Lune directly from src and, when compiled by darklua to target/roblox, in Roblox. You should use moonwave to update/generate documentation."),(0,o.kt)("p",null,"To build for Roblox:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install necessary tools (see aftman.toml)."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"rojo sourcemap source.project.json -o sourcemap.json"),". It is necessary to generate a sourcemap of the src folder so darklua can convert our requires."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"darklua process src target/roblox"),".")),(0,o.kt)("h2",{id:"contact"},"Contact"),(0,o.kt)("p",null,"The best way to get in touch is to ping me in the thread in the Roblox OSS discord, or create an issue."))}p.isMDXComponent=!0}}]);