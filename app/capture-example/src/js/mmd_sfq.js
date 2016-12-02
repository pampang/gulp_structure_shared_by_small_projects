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
      // var body = document.getElementsByTagName('body')[0];
      // var img = document.createElement('img');
      // img.style.height = '300px';
      // img.setAttribute('src', data.imageUrl);
      // body.appendChild(img);
      // mmdCallback(, data.imageUrl);
      mmdCallback('000', data.imageUrl);
    }
  });
}
