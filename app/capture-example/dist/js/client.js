(function () {
  /**
   * 获取页面上的参数
   */
  // 去掉?号
  var search = window.location.search.substr(1);
  var params = search.split('&');
  var pairs = {};
  var temp = null;
  for (var i = 0, len = params.length; i < len; i++) {
    temp = params[i].split('=');
    pairs[temp[0]] = temp[1];
  }
  // 写入价格
  if (pairs.hasOwnProperty('price')) {
    // $('#redpocket__price').html(pairs.price);
    document.getElementById('redpocket__price').innerHTML = pairs.price;
  }
  // 写入剩余红包
  if (pairs.hasOwnProperty('remain')) {
    // $('#redpocket__remain').html(pairs.remain);
    document.getElementById('redpocket__remain').innerHTML = pairs.remain;
  }

  document.getElementById('shareBtn').onclick = function () {
    // if (WebViewBridge) {
      // WebViewBridge.onMessage = function (message) {
      //   message = JSON.parse(message);
      //     switch (message.category) {
      //       case 'capture':
      //         if (message.action === 'selectEnd') {
      //           // 因为接入的友盟SDK时没有弄明白回调的原理，因此分享之后是没有回调的传回的。
      //           var body = document.getElementsByTagName('body')[0];
      //           var img = document.createElement('img');
      //           img.style.height = '300px';
      //           img.setAttribute('src', message.data.image.uri);
      //           body.appendChild(img);
      //         }
      //         break;
      //     }
      // };
      // // 要厘清shareOption从哪里传入。
      // // 如何写死在代码里面呢？
      // var captureMessage = {
      //   category: 'capture',
      //   action: 'select',
      // }
      // WebViewBridge.send(JSON.stringify(captureMessage));
    // }

    sfq.selectImage({
      callback: function shareCallback(error, data) {
        if (error) {
          console.log(error);
          // 错误处理...
          return;
        }
        if (!data.image) {
          alert('没有图片！');
          return;
        }
        var body = document.getElementsByTagName('body')[0];
        var img = document.createElement('img');
        img.style.height = '300px';
        img.setAttribute('src', data.image);
        body.appendChild(img);
      },
    });
  };
}());
