!function(e,r){var a=function(){this.name="sfq",this.version="1.0.0"},n={},t=function(r,a){var n={schema:r,data:a};e.WebViewBridge.send(JSON.stringify(n))};a.prototype={ready:function(r){var a=null;e.WebViewBridge?r():setInterval(function(){e.WebViewBridge&&(clearInterval(a),r())},100)},share:{panel:function(e,r){var a="share:panel:share";n[a]=r,t(a,e)},weixin:function(e,r){var a="share:weixin:share";n[a]=r,t(a,e)},weixinCircle:function(e,r){var a="share:weixinCircle:share";n[a]=r,t(a,e)},weibo:function(e,r){var a="share:weibo:share";n[a]=r,t(a,e)},qq:function(e,r){var a="share:qq:share";n[a]=r,t(a,e)}},capture:{selectImage:function(e,r){var a="capture:image:select";n[a]=r,t(a,{})},selectOCR:function(e,r){var a="capture:ocr:select";n[a]=r,t(a,{})}},webview:{close:function(){var e="webview:current:close";t(e,{})},refresh:function(){var e="webview:current:refresh";t(e,{})}},device:{network:function(e,r){var a="device:network:get";n[a]=r,t(a,{})}},route:{push:function(e,r){var a=null,i=e&&e.params;if(!e||!e.target)return void r(new Error("请填写必要的传入参数！"),null);switch(e.target.toLowerCase()){case"mallitem":if(!i||!i.productId)return void r(new Error("请填写商品id"),null);a="route:mallItem:push";break;case"malltopic":if(!i||!i.topicId)return void r(new Error("请填写专题id"),null);a="route:mallTopic:push";break;case"userlogin":a="route:userLogin:push";break;default:return void r(new Error("暂时不支持跳转到该页面哦，抱歉~"),null)}n[a]=r,t(a,i)},replace:function(e,r){var a=null,i=e&&e.params;if(!e||!e.target)return void r(new Error("请填写必要的传入参数！"),null);switch(e.target.toLowerCase()){case"mallitem":if(!i||!i.productId)return void r(new Error("请填写商品id"),null);a="route:mallItem:replace";break;case"malltopic":if(!i||!i.topicId)return void r(new Error("请填写专题id"),null);a="route:mallTopic:replace";break;default:return void r(new Error("暂时不支持跳转到该页面哦，抱歉~"),null)}n[a]=r,t(a,i)}},mmd:{applyFinish:function(e){var r="mmd:apply:finish";t(r,e)},activateFinish:function(e){var r="mmd:activate:finish";t(r,e)},payFinish:function(e){var r="mmd:pay:finish";t(r,e)}}},e.sfq=new a;var i=setInterval(function(){try{if(e.WebViewBridge){clearInterval(i),MessageHandler=function(e,r){var a=n[r];return delete n[r],e.error?(console.warn(e.error),void(a&&a(e.error,null))):void(a&&a(null,e))};var r=function(e){return{panel:{shareEnd:function(){var r="share:panel:share";MessageHandler(e.data,r)}},weixin:{shareEnd:function(){var r="share:weixin:share";MessageHandler(e.data,r)}},weixinCircle:{shareEnd:function(){var r="share:weixinCircle:share";MessageHandler(e.data,r)}},weibo:{shareEnd:function(){var r="share:weibo:share";MessageHandler(e.data,r)}},qq:{shareEnd:function(){var r="share:qq:share";MessageHandler(e.data,r)}}}},a=function(e){return{image:{selectEnd:function(){var r="capture:image:select";MessageHandler(e.data,r)}},ocr:{selectEnd:function(){var r="capture:ocr:select";MessageHandler(e.data,r)}}}},t=function(e){return{network:{getEnd:function(){var r="device:network:get";MessageHandler(e.data,r)}}}},o=function(e){return{mallTopic:{pushEnd:function(){var r="route:mallTopic:push";MessageHandler(e.data,r)},replaceEnd:function(){var r="route:mallTopic:replace";MessageHandler(e.data,r)}},mallItem:{pushEnd:function(){var r="route:mallItem:push";MessageHandler(e.data,r)},replaceEnd:function(){var r="route:mallItem:replace";MessageHandler(e.data,r)}},userLogin:{pushEnd:function(){var r="route:userLogin:push";MessageHandler(e.data,r)}}}},s=function(e){return{share:r(e),capture:a(e),device:t(e),route:o(e)}};WebViewBridge.onMessage=function(e){var r=JSON.parse(e),a=r.schema.split(":"),n=s(r);try{for(var t=n,i=0,o=a.length;i<o;i++)t=t[a[i]];t()}catch(e){console.warn(e),alert(e)}}}}catch(e){alert(e)}},100)}(window);