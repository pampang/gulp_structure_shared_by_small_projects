// 用闭包隐藏我们的临时变量，降低污染
(function( window, undefined ) {
  var sfq = function () {
    this.name = 'sfq';
    this.version = '1.0.0';
  };

  // 存储callback
  var CALLBACK_MAP = {};

  const MessageDispatcher = function (currentSchema, data) {
    var dispatchMessage = {
      schema: currentSchema,
      data: data,
    };
    window.WebViewBridge.send(JSON.stringify(dispatchMessage));
  }

  sfq.prototype = {
    // ready: function() {},

    /* 分享 */
    share: function (config) {
      // 发起一个分享
      var currentSchema = 'share:panel:share';
      CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {
        shareOption: config.shareOption,
      });
    },
    shareToWeixin: function (config) {
      var currentSchema = 'share:weixin:share';
      CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {
        shareOption: config.shareOption,
      });
    },
    shareToWeixinCircle: function (config) {
      var currentSchema = 'share:weixinCircle:share';
      CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {
        shareOption: config.shareOption,
      });
    },
    shareToWeibo: function (config) {
      var currentSchema = 'share:weibo:share';
      CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {
        shareOption: config.shareOption,
      });
    },
    shareToQQ: function (config) {
      var currentSchema = 'share:qq:share';
      CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {
        shareOption: config.shareOption,
      });
    },

    /* 拍照 */
    selectImage: function (config) {
      var currentSchema = 'capture:image:select';
      CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {});
    },

    /* webview */
    closeWebview: function (config) {
      var currentSchema = 'webview:current:close';
      // 不需要callback
      // CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {});
    },

    refreshWebview: function (config) {
      var currentSchema = 'webview:current:refresh';
      // 不需要callback
      // CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {});
    },

    /* 设备 */
    getNetwork: function (config) {
      var currentSchema = 'device:network:get';
      CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {});
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
      MessageDispatcher(currentSchema, {
        topicId: config.topicId,
      });
    },

    replaceMallTopic: function (config) {
      // 字段校验
      if (!config.topicId) {
        config.callback(new Error('请填写专题id'), null);
        return;
      }
      var currentSchema = 'route:mallTopic:replace';
      CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {
        topicId: config.topicId,
      });
    },

    pushMallItem: function (config) {
      // 字段校验
      if (!config.productId) {
        config.callback(new Error('请填写商品id'), null);
        return;
      }

      var currentSchema = 'route:mallItem:push';
      CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {
        productId: config.productId,
      });
    },

    replaceMallItem: function (config) {
      // 字段校验
      if (!config.productId) {
        config.callback(new Error('请填写商品id'), null);
        return;
      }

      var currentSchema = 'route:mallItem:replace';
      CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {
        productId: config.productId,
      });
    },

    pushUserLogin: function (config) {
      var currentSchema = 'route:userLogin:push';
      CALLBACK_MAP[currentSchema] = config.callback;
      MessageDispatcher(currentSchema, {});
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

        const UniversalHandler = function (data, relatedSchema) {
          var callback = CALLBACK_MAP[relatedSchema];
          delete CALLBACK_MAP[relatedSchema];
          if (data.error) {
            console.warn(data.error);
            // 错误处理...
            callback && callback(data.error, null);
            return;
          }
          // 对数据做其他操作...
          callback && callback(null, data);
        }

        var getShareHandler = function (message) {
          return {
            panel: {
              shareEnd: function() {
                var relatedSchema = 'share:panel:share';
                UniversalHandler(message.data, relatedSchema);
              },
            },
            weixin: {
              shareEnd: function() {
                var relatedSchema = 'share:weixin:share';
                UniversalHandler(message.data, relatedSchema);
              },
            },
            weixinCircle: {
              shareEnd: function() {
                var relatedSchema = 'share:weixinCircle:share';
                UniversalHandler(message.data, relatedSchema);
              },
            },
            weibo: {
              shareEnd: function() {
                var relatedSchema = 'share:weibo:share';
                UniversalHandler(message.data, relatedSchema);
              },
            },
            qq: {
              shareEnd: function() {
                var relatedSchema = 'share:qq:share';
                UniversalHandler(message.data, relatedSchema);
              },
            },
          };
        };

        var getCaptureHandler = function (message) {
          return {
            image: {
              selectEnd: function () {
                var relatedSchema = 'capture:image:select';
                UniversalHandler(message.data, relatedSchema);
              },
            }
          };
        };

        var getDeviceHandler = function (message) {
          return {
            network: {
              getEnd: function () {
                var relatedSchema = 'device:network:get';
                UniversalHandler(message.data, relatedSchema);
              },
            },
          };
        }

        var getRouteHandler = function (message) {
          return {
            mallTopic: {
              pushEnd: function () {
                var relatedSchema = 'route:mallTopic:push';
                UniversalHandler(message.data, relatedSchema);
              },
              replaceEnd: function () {
                var relatedSchema = 'route:mallTopic:replace';
                UniversalHandler(message.data, relatedSchema);
              },
            },
            mallItem: {
              pushEnd: function () {
                var relatedSchema = 'route:mallItem:push';
                UniversalHandler(message.data, relatedSchema);
              },
              replaceEnd: function () {
                var relatedSchema = 'route:mallItem:replace';
                UniversalHandler(message.data, relatedSchema);
              },
            },
            userLogin: {
              pushEnd: function () {
                var relatedSchema = 'route:userLogin:push';
                UniversalHandler(message.data, relatedSchema);
              },
            },
          };
        }

        var getHandler = function (message) {
          return {
            share: getShareHandler(message),
            capture: getCaptureHandler(message),
            device: getDeviceHandler(message),
            route: getRouteHandler(message),
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
