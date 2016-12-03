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

mmd.mmd_applyFinfish = function (result) {
  // result = {code: '000', result: '申请成功'}
  sfq.mmd.applyFinish(result);
}

mmd.mmd_activationFinfish = function (result) {
  // result = {code: '000', result: '申请成功'}
  sfq.mmd.activateFinish(result);
}

mmd.mmd_payFinfish = function (result) {
  // result = {code: '000', result: '申请成功'}
  sfq.mmd.payFinish(result);
}
