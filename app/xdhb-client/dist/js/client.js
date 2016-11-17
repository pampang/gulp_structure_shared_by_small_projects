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

  if (pairs.hasOwnProperty('targetUrl')) {
    /**
     * 处理点击事件
     */
    document.getElementById('shareBtn').onclick = function () {
    // $('#shareBtn').click(function() {
      alert(pairs.targetUrl);
      if (WebViewBridge) {
        // WebViewBridge.onMessage = function (message) {
        //   message = JSON.parse(message);
        //     switch (message.category) {
        //       case 'share':
        //         if (message.action === 'shareEnd') {
        //           // 因为接入的友盟SDK时没有弄明白回调的原理，因此分享之后是没有回调的传回的。
        //           console.log('shareEnd');
        //         }
        //         break;
        //     }
        // };
        // 要厘清shareOption从哪里传入。
        // 如何写死在代码里面呢？
        var shareMessage = {
          category: 'share',
          action: 'weibo',
          data: {
            shareOption: {
              content: "我在【奢分期】发现只需几百首付就可以买到国外一线奢侈品正品，再不来就被抢光啦！",
              imageUrl:"http://mall.image.shefenqi.com/product/iupd7fip0mb01400.jpg@0o_1l_640w_90q.jpg",
              targetUrl: decodeURIComponent(pairs.targetUrl),
              title: "芭法娜 项饰/吊坠仅需¥313就可以带回家，赶紧看！",
            },
          }
        }
        WebViewBridge.send(JSON.stringify(shareMessage));
      }
    // });
    }
  }
}());
