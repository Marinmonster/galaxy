define(["exports","jquery"],function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(e).default;t.default=function(t){(t=t||{}).tooltipConfig=t.tooltipConfig||{placement:"bottom"},t.classes=["icon-btn"].concat(t.classes||[]),t.disabled&&t.classes.push("disabled");var e=['<a class="',t.classes.join(" "),'"',t.title?' title="'+t.title+'"':"",!t.disabled&&t.target?' target="'+t.target+'"':"",' href="',!t.disabled&&t.href?t.href:"javascript:void(0);",'">','<span class="fa ',t.faIcon,'"></span>',"</a>"].join(""),s=i(e).tooltip(t.tooltipConfig);return _.isFunction(t.onclick)&&s.click(t.onclick),s}});
//# sourceMappingURL=../../maps/ui/fa-icon-button.js.map
