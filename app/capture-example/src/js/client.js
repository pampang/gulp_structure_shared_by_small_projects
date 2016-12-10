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
    mmd.mmd_openOCR(function(code, data) {
      alert(code);
    });
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

    // sfq.capture.selectImage(null, function shareCallback(error, data) {
    //   if (error) {
    //     console.log(error);
    //     // 错误处理...
    //     return;
    //   }
    //   if (data.imageUrl) {
    //     var body = document.getElementsByTagName('body')[0];
    //     var img = document.createElement('img');
    //     img.style.height = '300px';
    //     img.setAttribute('src', data.imageUrl);
    //     body.appendChild(img);
    //   }
    // });

    // sfq.capture.selectOCR(null, function shareCallback(error, data) {
    //   if (error) {
    //     console.log(error);
    //     // 错误处理...
    //     return;
    //   }
    //   if (data.imageUrl) {
    //     var body = document.getElementsByTagName('body')[0];
    //     var img = document.createElement('img');
    //     img.style.height = '300px';
    //     img.setAttribute('src', data.imageUrl);
    //     body.appendChild(img);
    //   }
    // });

    // sfq.share.weixin({
    //   content: "我在【奢分期】发现只需几百首付就可以买到国外一线奢侈品正品，再不来就被抢光啦！",
    //   imageUrl:"http://mall.image.shefenqi.com/product/iupd7fip0mb01400.jpg@0o_1l_640w_90q.jpg",
    //   targetUrl: decodeURIComponent(pairs.targetUrl),
    //   title: "芭法娜 项饰/吊坠仅需¥313就可以带回家，赶紧看！",
    // }, function shareCallback(error, data) {
    //   console.log(1);
    // });

    // sfq.pushMallTopic({
    //   topicId: "t147",
    //   callback: function (error, data) {
    //     alert(error);
    //     alert(data);
    //   }
    // })
    // sfq.pushMallItem({
    //   productId: 41088,
    // })

    // sfq.webview.close();
    // sfq.webview.refresh();
    // sfq.device.network(null, function(error, data) {
    //   if (data.connection) {
    //     var body = document.getElementsByTagName('body')[0];
    //     var p = document.createElement('p');
    //     p.innerHTML = data.connection;
    //     body.appendChild(p);
    //   }
    // });
  };
}());
