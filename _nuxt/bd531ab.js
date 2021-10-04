(window.webpackJsonp=window.webpackJsonp||[]).push([[65,28,50,66],{296:function(e,t,n){"use strict";n.r(t);var r=n(1),l=Object(r.b)({props:{label:{type:String,default:""}}}),c=n(3),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"\n    text-xs text-primary-500\n    px-2.5\n    py-1.5\n    leading-none\n    rounded\n    font-semibold\n    uppercase\n    tracking-wide\n    bg-primary-100\n    dark:bg-primary-900 dark:text-primary-400\n  "},[e._v("\n  "+e._s(e.label)+"\n")])}),[],!1,null,null,null);t.default=component.exports},297:function(e,t,n){"use strict";n.r(t);var r=n(3),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])}),[],!1,null,null,null);t.default=component.exports},372:function(e,t,n){"use strict";n.r(t);n(10);var r=n(1),l=Object(r.b)({props:{tiers:{type:Object,default:function(){}},meta:{type:Object,default:function(){}},plans:{type:Object,default:function(){}},selectedTier:{type:String,default:""},selectedPlan:{type:String,default:""}},setup:function(e){var t=null;return Object.keys(e.plans).forEach((function(n){e.plans[n]&&e.plans[n].base&&(t=n)})),{getBasePricing:function(t){var n=t.price[e.selectedPlan]/e.plans[e.selectedPlan].divider;return n>0?n.toFixed(2):0},basePlan:t}}}),c=n(3),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col md:flex-row justify-center items-center md:items-stretch flex-wrap my-2 md:my-8"},e._l(e.tiers,(function(t,r){return n("div",{key:r,staticClass:"w-full md:w-1/3 p-2 max-w-md"},[n("div",{staticClass:"border rounded-lg flex flex-col p-4 h-full relative",class:[e.selectedTier===r?"bg-primary-500 border-primary-500 text-white":"border-gray-200 dark:border-gray-700"]},[t.preSelected?n("InfoLabel",{staticClass:"absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",attrs:{label:e.meta.preSelectedBadge}}):e._e(),e._v(" "),n("div",{staticClass:"flex justify-center text-2xl font-semibold my-2 text-center"},[e._v("\n        "+e._s(t.title)+"\n      ")]),e._v(" "),n("div",{staticClass:"flex justify-center text-center mb-8",class:[e.selectedTier===r?"text-primary-200":"text-gray-500"]},[e._v("\n        "+e._s(t.description)+"\n      ")]),e._v(" "),n("div",{staticClass:"flex justify-center mb-8"},[n("div",{staticClass:"font-medium mr-1",class:[e.selectedTier===r?"text-primary-300":"text-gray-400"]},[e._v("\n          "+e._s(e.meta.currency)+"\n        ")]),e._v(" "),n("div",{staticClass:"font-bold text-5xl leading-none tracking-tighter mr-1"},[e._v("\n          "+e._s(e.plans[e.selectedPlan]&&e.plans[e.selectedPlan].divider?e.getBasePricing(t):t.price[e.selectedPlan])+"\n        ")]),e._v(" "),n("div",{staticClass:"self-end lowercase font-medium",class:[e.selectedTier===r?"text-primary-300":"text-gray-400"]},[e._v("\n          / "+e._s(e.plans[e.basePlan].title)+"\n        ")])]),e._v(" "),n("div",{staticClass:"mb-8"},[n("div",{staticClass:"font-medium mb-2"},[e._v(e._s(e.meta.featuresTitle))]),e._v(" "),n("ul",e._l(t.features,(function(t){return n("li",{key:t,staticClass:"flex items-center py-0.5",class:[e.selectedTier===r?"text-primary-200":"text-gray-500 dark:text-gray-400"]},[n("IconCheck",{staticClass:"w-4 h-4 mr-2"}),e._v(" "),n("span",[e._v(e._s(t))])],1)})),0)]),e._v(" "),n("div",{staticClass:"flex items-end flex-1"},[n("button",{staticClass:"\n            inline-block\n            w-full\n            font-semibold\n            text-center\n            items-center\n            flex-none\n            px-6\n            py-3\n            text-lg\n            leading-6\n            rounded-md\n            border border-transparent border-l-0\n            focus:outline-none\n            select-none\n          ",class:[e.selectedTier===r?"bg-primary-50 hover:bg-primary-100 text-primary-500":"bg-primary-500 hover:bg-primary-600 text-white"],on:{click:function(t){return e.$emit("selectTier",r)}}},[e._v("\n          "+e._s(e.meta.buttonText)+"\n        ")])])],1)])})),0)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{InfoLabel:n(296).default,IconCheck:n(297).default})},455:function(e,t,n){"use strict";n.r(t);n(10);var r=n(1),l=Object(r.b)({props:{plans:{type:Object,default:function(){return{}}},tiers:{type:Object,default:function(){return{}}},meta:{type:Object,default:function(){return{}}}},setup:function(e){var t=null,n=null;return Object.keys(e.plans).forEach((function(n){e.plans[n]&&e.plans[n].preSelected&&(t=n)})),Object.keys(e.tiers).forEach((function(t){e.tiers[t]&&e.tiers[t].preSelected&&(n=t)})),{selectedPlan:t,selectedTier:n}}}),c=n(3),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"px-2 my-12 md:my-24"},[n("div",{staticClass:"flex items-center justify-center my-2 md:my-8"},[n("div",{staticClass:"bg-gray-100 dark:bg-gray-800 p-1 rounded-lg"},e._l(e.plans,(function(t,r){return n("button",{key:r,staticClass:"\n          inline-block\n          font-medium\n          text-center\n          items-center\n          flex-none\n          px-2\n          py-1\n          text-sm\n          rounded-md\n          border border-transparent border-l-0\n          focus:outline-none\n          select-none\n        ",class:[e.selectedPlan===r?"bg-white dark:bg-gray-600 shadow-sm text-gray-700 dark:text-gray-300":"text-gray-500 dark:text-gray-400"],on:{click:function(t){e.selectedPlan=r}}},[e._v("\n        "+e._s(t.label)+"\n      ")])})),0)]),e._v(" "),n("PricingGrid",{attrs:{tiers:e.tiers,plans:e.plans,meta:e.meta,"selected-plan":e.selectedPlan,"selected-tier":e.selectedTier},on:{selectTier:function(t){e.selectedTier=t}}}),e._v(" "),n("div",{staticClass:"flex flex-col items-center"},[n("div",{staticClass:"flex flex-col items-center mb-4"},[n("div",{staticClass:"text-gray-500 mb-1"},[e._v(e._s(e.meta.checkoutText))]),e._v(" "),n("div",{staticClass:"flex items-baseline"},[n("div",{staticClass:"flex font-bold text-4xl tracking-tighter mr-1"},[n("span",{},[e._v(e._s(e.meta.currency))]),e._v(" "),n("span",{},[e._v(e._s(e.tiers[e.selectedTier].price[e.selectedPlan]))])]),e._v(" "),n("div",{staticClass:"text-gray-600 dark:text-gray-500"},[e._v("/ "+e._s(e.plans[e.selectedPlan].title))])])]),e._v(" "),n("button",{staticClass:"\n        inline-block\n        font-semibold\n        text-center\n        items-center\n        flex-none\n        px-6\n        py-3\n        text-lg\n        leading-6\n        rounded-md\n        border border-transparent border-l-0\n        focus:outline-none\n        select-none\n        bg-primary-500\n        hover:bg-primary-600\n        text-white\n      "},[e._v("\n      "+e._s(e.meta.checkoutButtonText)+"\n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PricingGrid:n(372).default})}}]);