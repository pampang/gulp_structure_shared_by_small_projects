if (!window.mmd) {
  window.mmd = {};
}

// 打开ocr
mmd.mmd_openOCR = function (mmdCallback) {
  sfq.capture.selectOCR(null, function ocrCallback(error, data) {
    if (error) {
      console.log(error);
      // 错误处理...
      mmdCallback('001', error);
      return;
    }
    if (data.imageUrl) {
      mmdCallback('000', data.imageUrl);
    }
  });
}

mmd.mmd_applyFinish = function (result) {
  alert(1);
  // result = {code: '000', result: '申请成功'}
  sfq.mmd.applyFinish(result);
}

mmd.mmd_activationFinish = function (result) {
  alert(1);
  // result = {code: '000', result: '申请成功'}
  sfq.mmd.activateFinish(result);
}

mmd.mmd_payFinish = function (result) {
  alert(1);
  // result = {code: '000', result: '申请成功'}
  sfq.mmd.payFinish(result);
}
