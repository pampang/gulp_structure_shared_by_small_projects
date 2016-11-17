// 用闭包隐藏我们的临时变量，降低污染
(function( window, undefined ) {
  var sfq = function () {
    this.name = 'sfq';
    this.version = '1.0.0';
  };

  // 存储callback
  var CALLBACK_MAP = {};

  sfq.prototype = {
    // ready: function() {},

    /* 分享 */
    share: function (config) {
      // 发起一个分享
      var currentSchema = 'share:panel:share';
      CALLBACK_MAP[currentSchema] = config.callback;
      var dispatchMessage = {
        schema: currentSchema,
        data: {
          shareOption: config.shareOption,
        }
      };
      window.WebViewBridge.send(JSON.stringify(dispatchMessage));
    },
    shareToWeixin: function (config) {
      var currentSchema = 'share:weixin:share';
      CALLBACK_MAP[currentSchema] = config.callback;
      var dispatchMessage = {
        schema: currentSchema,
        data: {
          shareOption: config.shareOption,
        }
      };
      window.WebViewBridge.send(JSON.stringify(dispatchMessage));
    },
    shareToWeixinCircle: function (config) {
      var currentSchema = 'share:weixinCircle:share';
      CALLBACK_MAP[currentSchema] = config.callback;
      var dispatchMessage = {
        schema: currentSchema,
        data: {
          shareOption: config.shareOption,
        }
      };
      window.WebViewBridge.send(JSON.stringify(dispatchMessage));
    },
    shareToWeibo: function (config) {
      var currentSchema = 'share:weibo:share';
      CALLBACK_MAP[currentSchema] = config.callback;
      var dispatchMessage = {
        schema: currentSchema,
        data: {
          shareOption: config.shareOption,
        }
      };
      window.WebViewBridge.send(JSON.stringify(dispatchMessage));
    },
    shareToQQ: function (config) {
      var currentSchema = 'share:qq:share';
      CALLBACK_MAP[currentSchema] = config.callback;
      var dispatchMessage = {
        schema: currentSchema,
        data: {
          shareOption: config.shareOption,
        }
      };
      window.WebViewBridge.send(JSON.stringify(dispatchMessage));
    },

    /* 拍照 */
    selectImage: function (config) {
      var currentSchema = 'capture:image:select';
      CALLBACK_MAP[currentSchema] = config.callback;
      var dispatchMessage = {
        schema: currentSchema,
        data: {},
      };
      window.WebViewBridge.send(JSON.stringify(dispatchMessage));
    },

    /* webview */
    closeWebview: function (config) {
      var currentSchema = 'webview:current:close';
      // 不需要callback
      // CALLBACK_MAP[currentSchema] = config.callback;
      var dispatchMessage = {
        schema: currentSchema,
        data: {},
      };
      window.WebViewBridge.send(JSON.stringify(dispatchMessage));
    },

    refreshWebview: function (config) {
      var currentSchema = 'webview:current:refresh';
      // 不需要callback
      // CALLBACK_MAP[currentSchema] = config.callback;
      var dispatchMessage = {
        schema: currentSchema,
        data: {},
      };
      window.WebViewBridge.send(JSON.stringify(dispatchMessage));
    },

    /* 设备 */
    getNetwork: function (config) {
      var currentSchema = 'webview:current:refresh';
      CALLBACK_MAP[currentSchema] = config.callback;
      var dispatchMessage = {
        schema: currentSchema,
        data: {},
      };
      window.WebViewBridge.send(JSON.stringify(dispatchMessage));
    },

    /* 跳转 */
    pushMallTopic: function (config) {
      // 字段校验
      if (!config.topicId) {
        config.callback(new Error('请填写专题id'), null);
        return;
      }
      var currentSchema = 'route:mallTopic:push';
      CALLBACK_MAP[currentSchema] = config.callback;
      var dispatchMessage = {
        schema: currentSchema,
        data: {
          topicId: config.topicId,
        },
      };
      window.WebViewBridge.send(JSON.stringify(dispatchMessage));
    },

    pushMallItem: function (config) {
      // 字段校验
      if (!config.productId) {
        config.callback(new Error('请填写商品id'), null);
        return;
      }

      var currentSchema = 'route:mallItem:push';
      CALLBACK_MAP[currentSchema] = config.callback;
      var dispatchMessage = {
        schema: currentSchema,
        data: {
          productId: config.productId,
        },
      };
      window.WebViewBridge.send(JSON.stringify(dispatchMessage));
    },
  };
  window.sfq = new sfq();

  // 利用setTimeout来保证WebViewBridge一定出现。
  var timer = setInterval(function() {
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // 接收处理部分 start
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    try {
      if (window.WebViewBridge) {
        clearInterval(timer);

        var getShareHandler = function (message) {
          var data = message.data;
          return {
            panel: {
              shareEnd: function() {
                var relatedSchema = 'share:panel:share';
                var callback = CALLBACK_MAP[relatedSchema];
                delete CALLBACK_MAP[relatedSchema];
                if (data.error) {
                  console.warn(data.error);
                  // 错误处理...
                  callback(data.error, null);
                  return;
                }
                // 对数据做其他操作...
                callback(null, data);
              },
            },
            weixin: {
              shareEnd: function() {
                var relatedSchema = 'share:weixin:share';
                var callback = CALLBACK_MAP[relatedSchema];
                delete CALLBACK_MAP[relatedSchema];
                if (data.error) {
                  console.warn(data.error);
                  // 错误处理...
                  callback(data.error, null);
                  return;
                }
                // 对数据做其他操作...
                callback(null, data);
              },
            },
            weixinCircle: {
              shareEnd: function() {
                var relatedSchema = 'share:weixinCircle:share';
                var callback = CALLBACK_MAP[relatedSchema];
                delete CALLBACK_MAP[relatedSchema];
                if (data.error) {
                  console.warn(data.error);
                  // 错误处理...
                  callback(data.error, null);
                  return;
                }
                // 对数据做其他操作...
                callback(null, data);
              },
            },
            weibo: {
              shareEnd: function() {
                var relatedSchema = 'share:weibo:share';
                var callback = CALLBACK_MAP[relatedSchema];
                delete CALLBACK_MAP[relatedSchema];
                if (data.error) {
                  console.warn(data.error);
                  // 错误处理...
                  callback(data.error, null);
                  return;
                }
                // 对数据做其他操作...
                callback(null, data);
              },
            },
            qq: {
              shareEnd: function() {
                var relatedSchema = 'share:qq:share';
                var callback = CALLBACK_MAP[relatedSchema];
                delete CALLBACK_MAP[relatedSchema];
                if (data.error) {
                  console.warn(data.error);
                  // 错误处理...
                  callback(data.error, null);
                  return;
                }
                // 对数据做其他操作...
                callback(null, data);
              },
            },
          };
        };

        var getCaptureHandler = function (message) {
          var data = message.data;
          return {
            image: {
              selectEnd: function () {
                var relatedSchema = 'capture:image:select';
                var callback = CALLBACK_MAP[relatedSchema];
                delete CALLBACK_MAP[relatedSchema];
                if (data.error) {
                  console.warn(data.error);
                  // 错误处理...
                  callback(data.error, null);
                  return;
                }
                // 对数据做其他操作...
                callback(null, data);
              },
            }
          };
        };

        var getHandler = function (message) {
          return {
            share: getShareHandler(message),
            capture: getCaptureHandler(message),
          };
        };

        WebViewBridge.onMessage = function (rawMessage) {
          /**
             * [message description]
             * @param {string} schema 执行代码
             * @param {object} data 传送的数据
             */
          var message = JSON.parse(rawMessage);
          var schema = message.schema.split(':');
          var handler = getHandler(message);
          try {
            // 根据shema寻找对应的执行方法
            var temp = handler;
            for (var i = 0, len = schema.length; i < len; i++) {
              temp = temp[schema[i]];
            }
            temp();
          } catch (error) {
            console.warn(error);
            alert(error);
            // 错误处理...
            // callback(error, null);
          }
        };
      }
    } catch (error) {
      alert(error);
      // 对错误不进行处理。
    }
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // 接收处理部分 end
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  }, 500);
})( window );
