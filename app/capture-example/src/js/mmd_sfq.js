if (!window.mmd) {
  window.mmd = {};
}
alert(6);

function startTillOK(callback) {
  var timer = null;
  if (window.WebViewBridge) {
    callback();
  } else {
    setInterval(function() {
      if (window.WebViewBridge) {
        clearInterval(timer);
        // 一次只能启动一个，如何做到？
        callback();
      }
    }, 100);
  }
}

// 打开ocr
mmd.mmd_openOCR = function (mmdCallback) {
  var now = +(new Date());
  if (mmd.mmd_openOCR.lock + 3000 > now) {
    return;
  }
  mmd.mmd_openOCR.lock = now;

  sfq.ready(function() {
    sfq.capture.selectOCR(null, function ocrCallback(error, data) {
      if (error) {
        console.log(error);
        // 错误处理...
        mmdCallback('002', error.message);
        return;
      } else if (data.imageUrl) {
        mmdCallback('000', data.imageUrl);
      } else {
        // 如果erro和data都是null，则是用户取消了。
        alert('用户取消!');
        mmdCallback('001', '用户取消');
      }
    });
  })
}

mmd.mmd_applyFinish = function (result) {
  sfq.ready(function () {
    alert('apply', window.WebViewBridge);
    // result = {code: '000', result: '申请成功'}
    try {
      sfq.mmd.applyFinish(result);
    } catch (e) {
      alert(e.message);
    }
    alert('apply');
  })
}

mmd.mmd_activationFinish = function (result) {
  sfq.ready(function() {
    alert('activate', window.WebViewBridge);
    // result = {code: '000', result: '申请成功'}
    sfq.mmd.activateFinish(result);
    alert('activate');
  })
}

mmd.mmd_payFinish = function (result) {
  sfq.ready(function() {
    alert('pay', window.WebViewBridge);
    // result = {code: '000', result: '申请成功'}
    sfq.mmd.payFinish(result);
    alert('pay');
  })
}

mmd.mmd_closeWindow = function () {
  sfq.ready(function() {
    alert('close window');
    sfq.webview.close();
  })
}
