window.mmd||(window.mmd={}),mmd.mmd_openOCR=function(n){sfq.ready(function(){sfq.capture.selectOCR(null,function(i,m){return i?(console.log(i),void n("002",i.message)):void(m.imageUrl?n("000",m.imageUrl):n("001","用户取消"))})})},mmd.mmd_applyFinish=function(n){sfq.ready(function(){sfq.mmd.applyFinish(n)})},mmd.mmd_activationFinish=function(n){sfq.ready(function(){sfq.mmd.activateFinish(n)})},mmd.mmd_payFinish=function(n){sfq.ready(function(){sfq.mmd.payFinish(n)})},mmd.mmd_closeWindow=function(){sfq.ready(function(){sfq.webview.close()})};