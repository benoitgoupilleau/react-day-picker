"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7797],{1080:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(3618),r=a(5123),i=(a(6504),a(5180)),o=["components"],l={},s="Localization",c={unversionedId:"basics/localization",id:"basics/localization",title:"Localization",description:"Changing locale",source:"@site/docs/basics/localization.md",sourceDirName:"basics",slug:"/basics/localization",permalink:"/react-day-picker/basics/localization",draft:!1,editUrl:"https://github.com/gpbl/react-day-picker/edit/main/website/docs/basics/localization.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Styling DayPicker",permalink:"/react-day-picker/basics/styling"},next:{title:"Keyboard Navigation",permalink:"/react-day-picker/basics/keyboard"}},p={},d=[{value:"Changing locale",id:"changing-locale",level:2},{value:"Overriding the first day of the week",id:"overriding-the-first-day-of-the-week",level:3},{value:"First week of the year",id:"first-week-of-the-year",level:3},{value:"Switching to ISO week dates",id:"switching-to-iso-week-dates",level:2},{value:"Switching to right-to-left direction",id:"switching-to-right-to-left-direction",level:2},{value:"Other numbering systems",id:"other-numbering-systems",level:2},{value:"ARIA labels translations",id:"aria-labels-translations",level:2}],u={toc:d},h="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"localization"},"Localization"),(0,i.kt)("h2",{id:"changing-locale"},"Changing locale"),(0,i.kt)("p",null,"To change the locale, pass to the ",(0,i.kt)("inlineCode",{parentName:"p"},"locale")," prop a date-fns ",(0,i.kt)("a",{parentName:"p",href:"http://date-fns.org/docs/Locale"},"Locale object"),"."),(0,i.kt)("p",null,"For example, to localize the calendar in Spanish, import the locale object from date-fns and pass it to the component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"spanish\n")),(0,i.kt)("h3",{id:"overriding-the-first-day-of-the-week"},"Overriding the first day of the week"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"weekStartsOn")," prop to change the first day of the week:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"spanish-week-starts-on\n")),(0,i.kt)("h3",{id:"first-week-of-the-year"},"First week of the year"),(0,i.kt)("p",null,"To override the date in the first week of the year, use ",(0,i.kt)("inlineCode",{parentName:"p"},"firstWeekContainsDate"),". Use this prop to change the week number calculation according to ",(0,i.kt)("a",{parentName:"p",href:"https://date-fns.org/docs/getWeek"},"date-fns getWeek")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"weeknumber-custom\n")),(0,i.kt)("h2",{id:"switching-to-iso-week-dates"},"Switching to ISO week dates"),(0,i.kt)("p",null,"By default, week numbers and week days follow the DayPicker's locale. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ISOWeek")," prop to switch to ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_week_date"},"ISO week dates"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"week-iso\n")),(0,i.kt)("h2",{id:"switching-to-right-to-left-direction"},"Switching to right-to-left direction"),(0,i.kt)("p",null,"To add right-to-left text direction, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"dir")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"rtl"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"rtl\n")),(0,i.kt)("h2",{id:"other-numbering-systems"},"Other numbering systems"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"/guides/formatters"},"formatters")," to change the numbering system used in the calendar."),(0,i.kt)("p",null,"For example, to switch to hindu-arabic using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"},"toLocaleString"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"numbering-system\n")),(0,i.kt)("h2",{id:"aria-labels-translations"},"ARIA labels translations"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/daypickerdefaultprops#labels"},"labels prop")," to translate the labels used for ARIA."))}m.isMDXComponent=!0},5180:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(6504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=9efe46a1.438c90c0.js.map