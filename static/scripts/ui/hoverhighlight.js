define(["jquery"],function(t){"use strict";var e=function(t){return t&&t.__esModule?t:{default:t}}(t),n=e.default;e.default.fn.extend({hoverhighlight:function(t,e){return t=t||"body",this.length?(n(this).each(function(){var u=n(this),i=u.data("target");i&&u.mouseover(function(u){n(i,t).css({background:e})}).mouseout(function(t){n(i).css({background:""})})}),this):this}})});
//# sourceMappingURL=../../maps/ui/hoverhighlight.js.map
