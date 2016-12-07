if (!window.mmd) {
  window.mmd = {};
}

// 打开ocr
mmd.mmd_openOCR = function (mmdCallback) {
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

mmd.mmd_applyFinish = function (result) {
  // alert(1);
  alert(window.WebViewBridge);
  // result = {code: '000', result: '申请成功'}
  sfq.mmd.applyFinish(result);
}

mmd.mmd_activationFinish = function (result) {
  // alert(1);
  alert(window.WebViewBridge);
  // result = {code: '000', result: '申请成功'}
  sfq.mmd.activateFinish(result);
}

mmd.mmd_payFinish = function (result) {
  // alert(1);
  alert(window.WebViewBridge);
  // result = {code: '000', result: '申请成功'}
  sfq.mmd.payFinish(result);
}
