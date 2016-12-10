if (!window.mmd) {
  window.mmd = {};
}

var body = document.getElementsByTagName('body')[0];
var div = document.createElement('div');
div.innerHTML = '测试版本v1';
body.appendChild(div);

// 打开ocr
mmd.mmd_openOCR = function (mmdCallback) {
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
        mmdCallback('001', '用户取消');
      }
    });
  })
}

mmd.mmd_applyFinish = function (result) {
  sfq.ready(function () {
    // result = {code: '000', result: '申请成功'}
    sfq.mmd.applyFinish(result);
  })
}

mmd.mmd_activationFinish = function (result) {
  sfq.ready(function() {
    // result = {code: '000', result: '申请成功'}
    sfq.mmd.activateFinish(result);
  })
}

mmd.mmd_payFinish = function (result) {
  sfq.ready(function() {
    // result = {code: '000', result: '申请成功'}
    sfq.mmd.payFinish(result);
  })
}

mmd.mmd_closeWindow = function () {
  sfq.ready(function() {
    sfq.webview.close();
  })
}
