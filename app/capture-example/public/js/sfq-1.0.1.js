!function(e,r){function a(){return e.WebViewBridge||e.postMessage}var n=function(){this.name="sfq",this.version="1.0.1"},t={},i=function(r,a){var n={schema:r,data:a},t=e.WebViewBridge&&e.WebViewBridge.send||e.postMessage;t(JSON.stringify(n))};n.prototype={ready:function(e){var r=null;a()?e():setInterval(function(){a()&&(clearInterval(r),e())},100)},share:{panel:function(e,r){var a="share:panel:share";t[a]=r,i(a,e)},weixin:function(e,r){var a="share:weixin:share";t[a]=r,i(a,e)},weixinCircle:function(e,r){var a="share:weixinCircle:share";t[a]=r,i(a,e)},weibo:function(e,r){var a="share:weibo:share";t[a]=r,i(a,e)},qq:function(e,r){var a="share:qq:share";t[a]=r,i(a,e)}},capture:{selectImage:function(e,r){var a="capture:image:select";t[a]=r,i(a,{})},selectOCR:function(e,r){var a="capture:ocr:select";t[a]=r,i(a,{})}},webview:{close:function(e){var r="webview:current:close";i(r,e||{})},refresh:function(e){var r="webview:current:refresh";i(r,e||{})}},device:{network:function(e,r){var a="device:network:get";t[a]=r,i(a,e||{})}},route:{push:function(e,r){var a=null,n=e&&e.params;if(!e||!e.target)return void r(new Error("请填写必要的传入参数！"),null);switch(e.target.toLowerCase()){case"mallitem":if(!n||!n.productId)return void r(new Error("请填写商品id"),null);a="route:mallItem:push";break;case"malltopic":if(!n||!n.topicId)return void r(new Error("请填写专题id"),null);a="route:mallTopic:push";break;case"userlogin":a="route:userLogin:push";break;default:return void r(new Error("暂时不支持跳转到该页面哦，抱歉~"),null)}t[a]=r,i(a,n)},replace:function(e,r){var a=null,n=e&&e.params;if(!e||!e.target)return void r(new Error("请填写必要的传入参数！"),null);switch(e.target.toLowerCase()){case"mallitem":if(!n||!n.productId)return void r(new Error("请填写商品id"),null);a="route:mallItem:replace";break;case"malltopic":if(!n||!n.topicId)return void r(new Error("请填写专题id"),null);a="route:mallTopic:replace";break;default:return void r(new Error("暂时不支持跳转到该页面哦，抱歉~"),null)}t[a]=r,i(a,n)}},mmd:{applyFinish:function(e){var r="mmd:apply:finish";i(r,e)},activateFinish:function(e){var r="mmd:activate:finish";i(r,e)},payFinish:function(e){var r="mmd:pay:finish";i(r,e)}}},e.sfq=new n;var s=setInterval(function(){function r(){return e.WebViewBridge||e.postMessage}try{if(r()){clearInterval(s),MessageHandler=function(e,r){var a=t[r];return delete t[r],e.error?(console.warn(e.error),void(a&&a(e.error,null))):void(a&&a(null,e))};var a=function(e){return{panel:{shareEnd:function(){var r="share:panel:share";MessageHandler(e.data,r)}},weixin:{shareEnd:function(){var r="share:weixin:share";MessageHandler(e.data,r)}},weixinCircle:{shareEnd:function(){var r="share:weixinCircle:share";MessageHandler(e.data,r)}},weibo:{shareEnd:function(){var r="share:weibo:share";MessageHandler(e.data,r)}},qq:{shareEnd:function(){var r="share:qq:share";MessageHandler(e.data,r)}}}},n=function(e){return{image:{selectEnd:function(){var r="capture:image:select";MessageHandler(e.data,r)}},ocr:{selectEnd:function(){var r="capture:ocr:select";MessageHandler(e.data,r)}}}},i=function(e){return{network:{getEnd:function(){var r="device:network:get";MessageHandler(e.data,r)}}}},o=function(e){return{mallTopic:{pushEnd:function(){var r="route:mallTopic:push";MessageHandler(e.data,r)},replaceEnd:function(){var r="route:mallTopic:replace";MessageHandler(e.data,r)}},mallItem:{pushEnd:function(){var r="route:mallItem:push";MessageHandler(e.data,r)},replaceEnd:function(){var r="route:mallItem:replace";MessageHandler(e.data,r)}},userLogin:{pushEnd:function(){var r="route:userLogin:push";MessageHandler(e.data,r)}}}},u=function(e){return{share:a(e),capture:n(e),device:i(e),route:o(e)}},c=function(e){var r=JSON.parse(e),a=r.schema.split(":"),n=u(r);try{for(var t=n,i=0,s=a.length;i<s;i++)t=t[a[i]];t()}catch(e){console.warn(e),alert(e)}}}e.WebViewBridge&&(e.WebViewBridge.onMessage=c),document.addEventListener("message",function(e){c(e.data)})}catch(e){alert(e)}},100)}(window);