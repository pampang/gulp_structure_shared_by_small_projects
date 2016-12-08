if (!window.mmd) {
  window.mmd = {};
}

// 打开ocr
mmd.mmd_openOCR = function (mmdCallback) {
  var timer = setInterval(function() {
    if (window.WebViewBridge) {
      clearInterval(timer);
      // 一次只能启动一个，如何做到？
      sfq.capture.selectOCR(null, function ocrCallback(error, data) {
        if (error) {
          console.log(error);
          // 错误处理...
          mmdCallback('001', error.message);
          return;
        } else if (data.imageUrl) {
          mmdCallback('000', data.imageUrl);
        } else {
          // 如果erro和data都是null，则是用户取消了。
          alert('用户取消!');
          mmdCallback('002', '用户取消');
        }
      });
    }
  }, 100);
}

mmd.mmd_applyFinish = function (result) {
  var timer = setInterval(function() {
    if (window.WebViewBridge) {
      clearInterval(timer);
      alert('apply', window.WebViewBridge);
      // result = {code: '000', result: '申请成功'}
      try {
        sfq.mmd.applyFinish(result);
      } catch (e) {
        alert(e.message);
      }
      alert('apply');
    }
  }, 100);
}

mmd.mmd_activationFinish = function (result) {
  var timer = setInterval(function() {
    if (window.WebViewBridge) {
      clearInterval(timer);
      alert('activate', window.WebViewBridge);
      // result = {code: '000', result: '申请成功'}
      sfq.mmd.activateFinish(result);
      alert('activate');
    }
  }, 100);
}

mmd.mmd_payFinish = function (result) {
  var timer = setInterval(function() {
    if (window.WebViewBridge) {
      clearInterval(timer);
      alert('pay', window.WebViewBridge);
      // result = {code: '000', result: '申请成功'}
      sfq.mmd.payFinish(result);
      alert('pay');
    }
  }, 100);
}

mmd.mmd_useCreditAfterActivation = function () {

}
