import { Q, _, mt } from './shared-charts-pooEfrED.js';
import { reactExports } from './index-B-pQLZz2.js';

const a=Object.is;function s(e){return "object"==typeof e&&null!==e}function l(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a;if(s(e)&&s(t)){const i=new Set(Object.keys(e).concat(Object.keys(t)));for(const r of i)if(!o(e[r],t[r],r))return !1;return !0}return a(e,t)}function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var d,u={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var f,h=(d||(d=1,f=u,function(){var e={}.hasOwnProperty;function t(){for(var o=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var n=typeof r;if("string"===n||"number"===n)o.push(r);else if(Array.isArray(r)){if(r.length){var a=t.apply(null,r);a&&o.push(a);}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){o.push(r.toString());continue}for(var s in r)e.call(r,s)&&r[s]&&o.push(s);}}}return o.join(" ")}f.exports?(t.default=t,f.exports=t):window.classNames=t;}()),u.exports),p=c(h);const g={xaxis:{zeroline:!0,fixedrange:!0,gridcolor:"#d7d7d7",zerolinecolor:"#d7d7d7"},yaxis:{fixedrange:!0,gridcolor:"#d7d7d7",zeroline:!0,zerolinecolor:"#d7d7d7"}},y={responsive:!0},m={},v=reactExports.memo((function(o){var i,a;const s=Q(o.lines,reactExports.useCallback(((e,t,o)=>{let{getExpressionValue:i}=o;const r="static"===e.dataSet?e.staticLineColor:e.dynamicLineColor,n="static"===e.dataSet?e.staticMarkerColor:e.dynamicMarkerColor;return {type:"scatter",mode:"line"===e.lineStyle?"lines":"lines+markers",line:{shape:e.interpolation,color:r?i(r,t.dataSourceItems):void 0},marker:{color:n?i(n,t.dataSourceItems):void 0}}}),[]));return reactExports.createElement(_,{type:"LineChart",className:p("widget-line-chart",o.class),data:null!=s?s:[],width:o.width,widthUnit:o.widthUnit,height:o.height,heightUnit:o.heightUnit,showLegend:o.showLegend,xAxisLabel:null===(i=o.xAxisLabel)||void 0===i?void 0:i.value,yAxisLabel:null===(a=o.yAxisLabel)||void 0===a?void 0:a.value,gridLinesMode:o.gridLines,customLayout:o.customLayout,customConfig:o.customConfigurations,layoutOptions:g,configOptions:y,seriesOptions:m,enableThemeConfig:o.enableThemeConfig,playground:o.playground})}),((e,t)=>l(e,t,((e,t,i)=>"lines"===i?l(e,t,mt):a(e,t)))));

var LineChartWidgetModule = /*#__PURE__*/Object.freeze({
	__proto__: null,
	LineChart: v
});

var undefined$1 = undefined;

export { LineChartWidgetModule };
