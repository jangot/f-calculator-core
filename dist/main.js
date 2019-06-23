!function(t){var e={};function s(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(r,o,function(e){return t[e]}.bind(null,o));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=3)}([function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(4),o=s(5),n=s(6),p=function(){function t(t){this.data={},this.type="",this.events={},this.data=t}return t.prototype.setType=function(t){return this.checkValueInList(this.constructor.TYPES,t)||this.throwSettingsFieldError(t,this.constructor.TYPES),this.type=t,this.dispatch("type"),this},t.prototype.getType=function(){return this.type},t.prototype.getAvailableTypes=function(){return this.keyValueToValues(this.constructor.TYPES)},t.prototype.getKey=function(){return this.type||this.throwGettingFieldError("type"),this.type},t.prototype.getValue=function(){var t=this.getKey();if(void 0===this.data[t])throw new n.ElementDataError(t);return this.data[t]},t.prototype.onChange=function(t,e){return this.events[t]=this.events[t]||[],this.events[t].push(e),this.events[t].length-1},t.prototype.removeEvent=function(t,e){return this.events[t]&&this.events[t][e]?(delete this.events[t][e],this):this},t.prototype.dispatch=function(t){var e=this;return this.events[t]?(this.events[t].forEach(function(t){t&&t(e)}),this):this},t.prototype.keyValueToValues=function(t){var e=[];for(var s in t)e.push(t[s]);return e},t.prototype.checkValueInList=function(t,e){for(var s in t)if(t[s]===e)return!0;return!1},t.prototype.throwGettingFieldError=function(t){throw new r.ElementGettingFieldError(t)},t.prototype.throwSettingsFieldError=function(t,e){var s=[];for(var r in e)s.push(e[r]);throw new o.ElementSettingFieldError(t,s)},t.TYPES={ABSTRACT_TYPE:"abstractType"},t}();e.AbstractFCElement=p},function(t,e,s){"use strict";var r,o,n,p=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)},function(t,e){function s(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)});Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.turns="",e.arris=!1,e.notFullSpin="",e.typeFilter=[],e}return p(e,t),e.prototype.getAvailableTurns=function(){var t=this,s=this.keyValueToValues(e.TURNS);return e.TURNS_FILTER[this.type]?s.filter(function(s){return e.TURNS_FILTER[t.type].indexOf(s)>-1}):s},e.prototype.hasArris=function(){return!!e.HAS_ARRIS[this.type]},e.prototype.getAvailableNotFullSpin=function(){return this.keyValueToValues(e.NOT_FULL_SPINS)},e.prototype.setTurns=function(t){return this.checkValueInList(e.TURNS,t)||this.throwSettingsFieldError(t,e.TURNS),this.turns=t,this},e.prototype.getKey=function(){var e=t.prototype.getKey.call(this),s=this.turns+e+this.notFullSpin;return this.arris&&(s+="e"),s},e.prototype.setNotFullSpin=function(t){return void 0===t&&(t=""),this.checkValueInList(e.NOT_FULL_SPINS,t)||this.throwSettingsFieldError(t,e.NOT_FULL_SPINS),this.notFullSpin=t,this},e.prototype.setArris=function(t){return void 0===t&&(t=!0),e.HAS_ARRIS[this.type]||this.throwSettingsFieldError(this.type,e.HAS_ARRIS),this.arris=t,this},e.prototype.setTypeFilter=function(t){return this.typeFilter=t,this},e.prototype.getAvailableTypes=function(){var e=this,s=t.prototype.getAvailableTypes.call(this);return 0===this.typeFilter.length?s:s.filter(function(t){return-1!==e.typeFilter.indexOf(t)})},e.TYPES={A:"a",T:"t",S:"s",LO:"lo",F:"f",LZ:"lz",EU:"eu"},e.TURNS={T1:"1",T2:"2",T3:"3",T4:"4"},e.TURNS_FILTER=((o={})[e.TYPES.EU]=[e.TURNS.T1],o),e.HAS_ARRIS=((n={})[e.TYPES.LZ]=!0,n[e.TYPES.F]=!0,n),e.NOT_FULL_SPINS={NONE:"",FIRST:"<",SECOND:"<<"},e}(s(0).AbstractFCElement);e.Jump=c},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(1),o=s(7),n=s(8),p=s(9),c=s(10);e.default={Jump:r.Jump,Road:o.Road,Spin:n.Spin,Cascade:c.Cascade,create:function(t){return void 0===t&&(t=p.values),{road:function(){return new o.Road(t)},jump:function(){return new r.Jump(t)},spin:function(){return new n.Spin(t)},cascade:function(){return new c.Cascade(t)}}}}},function(t,e,s){"use strict";s.r(e);var r=s(2),o=s.n(r);window.fCalculator=o.a},function(t,e,s){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)},function(t,e){function s(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(e){return t.call(this,'Field "'+e+'" is required')||this}return o(e,t),e}(Error);e.ElementGettingFieldError=n},function(t,e,s){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)},function(t,e){function s(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(e,s){var r=s.join(",");return t.call(this,'Value "'+e+'" is not exist in '+r)||this}return o(e,t),e}(Error);e.ElementSettingFieldError=n},function(t,e,s){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)},function(t,e){function s(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(e){return t.call(this,"There is no the key data: "+e)||this}return o(e,t),e}(Error);e.ElementDataError=n},function(t,e,s){"use strict";var r,o,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)},function(t,e){function s(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)});Object.defineProperty(e,"__esModule",{value:!0});var p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.level="",e}return n(e,t),e.prototype.getAvailableLevels=function(){return this.keyValueToValues(e.LEVELS[this.type]||{})},e.prototype.setLevel=function(t){var s=e.LEVELS[this.type];return this.checkValueInList(s,t)||this.throwSettingsFieldError(t,s),this.level=t,this},e.prototype.getKey=function(){return t.prototype.getKey.call(this)+this.level},e.TYPES={ST_SQ:"stsq",CH_SQ:"chsq"},e.LEVELS=((o={})[e.TYPES.ST_SQ]={LB:"b",L1:"1",L2:"2",L3:"3",L4:"4"},o[e.TYPES.CH_SQ]={L1:"1"},o),e}(s(0).AbstractFCElement);e.Road=p},function(t,e,s){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)},function(t,e){function s(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.level="",e.error="",e.f="",e}return o(e,t),e.prototype.getAvailableLevels=function(){return this.keyValueToValues(e.LEVELS)},e.prototype.setLevel=function(t){return this.checkValueInList(e.LEVELS,t)||this.throwSettingsFieldError(t,e.LEVELS),this.level=t,this},e.prototype.setError=function(t){return void 0===t&&(t="v"),this.error=t,this},e.prototype.setF=function(t){return void 0===t&&(t="f"),this.f=t,this},e.prototype.hasError=function(){return e.HAS_ERROR.indexOf(this.type)},e.prototype.getKey=function(){this.level||this.throwGettingFieldError("level");var e=t.prototype.getKey.call(this);return this.f+e+this.level+this.error},e.TYPES={USP:"usp",LSP:"lsp",CSP:"csp",SSP:"ssp",CUSP:"cusp",CLSP:"clsp",CCSP:"ccsp",CSSP:"cssp",COSP:"cosp",CCOSP:"ccosp"},e.LEVELS={LB:"b",L1:"1",L2:"2",L3:"3",L4:"4"},e.HAS_ERROR=[e.TYPES.CUSP,e.TYPES.CLSP,e.TYPES.CCSP,e.TYPES.CSSP,e.TYPES.COSP,e.TYPES.CCOSP],e}(s(0).AbstractFCElement);e.Spin=n},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.values={"1t":.4,"1s":.4,"1lo":.5,"1f":.5,"1lz":.6,"1eu":0,"1a":1.1,"2t":1.3,"2s":1.3,"2lo":1.7,"2f":1.8,"2lz":2.1,"2a":3.3,"3t":4.2,"3s":4.3,"3lo":4.9,"3f":5.3,"3lz":5.9,"3a":8,"4t":9.5,"4s":9.7,"4lo":10.5,"4f":11,"4lz":11.5,"4a":12.5,uspb:1,usp1:1.2,usp2:1.5,usp3:1.9,usp4:2.4,lspb:1.2,lsp1:1.5,lsp2:1.9,lsp3:2.4,lsp4:2.7,cspb:1.1,csp1:1.4,csp2:1.8,csp3:2.3,csp4:2.6,sspb:1.1,ssp1:1.3,ssp2:1.6,ssp3:2.1,ssp4:2.5,fuspb:1.5,fusp1:1.7,fusp2:2,fusp3:2.4,fusp4:2.9,flspb:1.7,flsp1:2,flsp2:2.4,flsp3:2.9,flsp4:3.2,fcspb:1.6,fcsp1:1.9,fcsp2:2.3,fcsp3:2.8,fcsp4:3.2,fsspb:1.7,fssp1:2,fssp2:2.3,fssp3:2.6,fssp4:3,cuspb:1.5,cusp1:1.7,cusp2:2,cusp3:2.4,cusp4:2.9,fcuspb:1.5,fcusp1:1.7,fcusp2:2,fcusp3:2.4,fcusp4:2.9,clspb:1.7,clsp1:2,clsp2:2.4,clsp3:2.9,clsp4:3.2,fclspb:1.7,fclsp1:2,fclsp2:2.4,fclsp3:2.9,fclsp4:3.2,ccspb:1.7,ccsp1:2,ccsp2:2.3,ccsp3:2.8,ccsp4:3.2,fccspb:1.7,fccsp1:2,fccsp2:2.3,fccsp3:2.8,fccsp4:3.2,csspb:1.6,cssp1:1.9,cssp2:2.3,cssp3:2.6,cssp4:3,fcsspb:1.6,fcssp1:1.9,fcssp2:2.3,fcssp3:2.6,fcssp4:3,cospb:1.5,cosp1:1.7,cosp2:2,cosp3:2.5,cosp4:3,fcospb:1.5,fcosp1:1.7,fcosp2:2,fcosp3:2.5,fcosp4:3,ccospb:1.7,ccosp1:2,ccosp2:2.5,ccosp3:3,ccosp4:3.5,fccospb:1.7,fccosp1:2,fccosp2:2.5,fccosp3:3,fccosp4:3.5,stsqb:1.5,stsq1:1.8,stsq2:2.6,stsq3:3.3,stsq4:3.9,chsq1:3,"1eu<":0,"1t<":.3,"1s<":.3,"1lo<":.38,"1f<":.38,"1lz<":.45,"1fe":.38,"1lze":.45,"1f<e":.3,"1lz<e":.36,"1a<":.83,"2t<":.98,"2s<":.98,"2lo<":1.28,"2f<":1.35,"2lz<":1.58,"2fe":1.35,"2lze":1.58,"2f<e":1.08,"2lz<e":1.26,"2a<":2.48,"3t<":3.15,"3s<":3.23,"3lo<":3.68,"3f<":3.98,"3lz<":4.43,"3fe":3.98,"3lze":4.43,"3f<e":3.18,"3lz<e":3.54,"3a<":6,"4t<":7.13,"4s<":7.28,"4lo<":7.88,"4f<":8.25,"4lz<":8.63,"4fe":8.25,"4lze":8.63,"4f<e":6.6,"4lz<e":6.9,"4a<":9.38,"1eu<<":0,"1t<<":0,"1s<<":0,"1lo<<":0,"1f<<":0,"1lz<<":0,"1f<<e":0,"1lz<<e":0,"1a<<":0,"2t<<":.4,"2s<<":.4,"2lo<<":.5,"2f<<":.5,"2lz<<":.6,"2f<<e":.3,"2lz<<e":.36,"2a<<":1.1,"3t<<":1.3,"3s<<":1.3,"3lo<<":1.7,"3f<<":1.8,"3lz<<":2.1,"3f<<e":1.08,"3lz<<e":1.26,"3a<<":3.3,"4t<<":4.2,"4s<<":4.3,"4lo<<":4.9,"4f<<":5.3,"4lz<<":5.9,"4f<<e":3.18,"4lz<<e":3.54,"4a<<":8,fuspbv:1.13,fusp1v:1.28,fusp2v:1.5,fusp3v:1.8,fusp4v:2.18,flspbv:1.28,flsp1v:1.5,flsp2v:1.8,flspv3:2.18,flsp4v:2.4,fcspbv:1.2,fcsp1v:1.43,fcsp2v:1.73,fcsp3v:2.1,fcsp4v:2.4,fsspbv:1.28,fssp1v:1.5,fssp2v:1.73,fssp3v:1.95,fssp4v:2.25,cuspbv:1.13,cusp1v:1.28,cusp2v:1.5,cusp3v:1.8,cusp4v:2.18,fcuspbv:1.13,fcusp1v:1.28,fcusp2v:1.5,fcusp3v:1.8,fcusp4v:2.18,clspbv:1.28,clsp1v:1.5,clsp2v:1.8,clsp3v:2.18,clsp4v:2.4,fclspbv:1.28,fclsp1v:1.5,fclsp2v:1.8,fclsp3v:2.18,fclsp4v:2.4,ccspbv:1.28,ccsp1v:1.5,ccsp2v:1.73,ccsp3v:2.1,ccsp4v:2.4,fccspbv:1.28,fccsp1v:1.5,fccsp2v:1.73,fccsp3v:2.1,fccsp4v:2.4,csspbv:1.2,cssp1v:1.43,cssp2v:1.73,cssp3v:1.95,cssp4v:2.25,fcsspbv:1.2,fcssp1v:1.43,fcssp2v:1.73,fcssp3v:1.95,fcssp4v:2.25,cospbv:1.13,cosp1v:1.28,cosp2v:1.5,cosp3v:1.88,cosp4v:2.25,fcospbv:1.13,fcosp1v:1.28,fcosp2v:1.5,fcosp3v:1.88,fcosp4v:2.25,ccospbv:1.28,ccosp1v:1.5,ccosp2v:1.88,ccosp3v:2.25,ccosp4v:2.63,fccospbv:1.28,fccosp1v:1.5,fccosp2v:1.88,fccosp3v:2.25,fccosp4v:2.63}},function(t,e,s){"use strict";var r,o,n,p=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)},function(t,e){function s(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)});Object.defineProperty(e,"__esModule",{value:!0});var c=s(0),i=s(1),u=function(t){function e(s,r){var o=t.call(this,s)||this;return o.jumps=[],o.availableTypes={},o.availableTypes=r||e.AVAILABLE_TYPES,o}return p(e,t),e.prototype.getKey=function(){return this.jumps.map(function(t){return t.getKey()}).join("+")},e.prototype.getValue=function(){return this.jumps.reduce(function(t,e){return t+e.getValue()},0)},e.prototype.addJump=function(){if(this.jumps.length>2)throw Error("Too much jumps");var t=new i.Jump(this.data);return t.setTypeFilter(this.getNextTypes()),this.jumps.push(t),t},e.prototype.removeLastJump=function(){return this.jumps.pop()},e.prototype.haveNextJump=function(){return this.getNextTypes().length>0},e.prototype.getNextTypes=function(){switch(this.jumps.length){case 0:return Object.keys(this.availableTypes);case 1:var t=this.getJump().getType();return Object.keys(this.availableTypes[t]);case 2:var e=this.getJump(0).getType(),s=this.getJump(1).getType();return this.availableTypes[e][s];default:return[]}},e.prototype.getJump=function(t){return void 0===t&&(t=this.jumps.length-1),this.jumps[t]},e.SECOND_JUMPS=((o={})[i.Jump.TYPES.A]=[],o[i.Jump.TYPES.T]=[i.Jump.TYPES.T,i.Jump.TYPES.LO],o[i.Jump.TYPES.LO]=[i.Jump.TYPES.T,i.Jump.TYPES.LO],o[i.Jump.TYPES.EU]=[i.Jump.TYPES.S,i.Jump.TYPES.F],o),e.AVAILABLE_TYPES=((n={})[i.Jump.TYPES.A]=e.SECOND_JUMPS,n[i.Jump.TYPES.T]=e.SECOND_JUMPS,n[i.Jump.TYPES.S]=e.SECOND_JUMPS,n[i.Jump.TYPES.LO]=e.SECOND_JUMPS,n[i.Jump.TYPES.F]=e.SECOND_JUMPS,n[i.Jump.TYPES.LZ]=e.SECOND_JUMPS,n),e}(c.AbstractFCElement);e.Cascade=u}]);