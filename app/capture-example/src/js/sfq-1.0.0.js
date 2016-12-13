// 用闭包隐藏我们的临时变量，降低污染
(function( window, undefined ) {
  var sfq = function () {
    this.name = 'sfq';
    this.version = '1.0.0';
  };

  // 存储callback
  var CALLBACK_MAP = {};

  var MessageDispatcher = function (currentSchema, data) {
    var dispatchMessage = {
      schema: currentSchema,
      data: data,
    };
    window.WebViewBridge.send(JSON.stringify(dispatchMessage));
  };

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // 对外暴露的方法，供外部调用 start
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  sfq.prototype = {
    ready: function(callback) {
      var timer = null;
      if (window.WebViewBridge) {
        callback();
      } else {
        setInterval(function() {
          if (window.WebViewBridge) {
            clearInterval(timer);
            callback();
          }
        }, 100);
      }
    },

    /* 分享 */
    share: {
      panel: function (option, callback) {
        // 发起一个分享
        var currentSchema = 'share:panel:share';
        CALLBACK_MAP[currentSchema] = callback;
        MessageDispatcher(currentSchema, option);
      },
      weixin: function (option, callback) {
        var currentSchema = 'share:weixin:share';
        CALLBACK_MAP[currentSchema] = callback;
        MessageDispatcher(currentSchema, option);
      },
      weixinCircle: function (option, callback) {
        var currentSchema = 'share:weixinCircle:share';
        CALLBACK_MAP[currentSchema] = callback;
        MessageDispatcher(currentSchema, option);
      },
      weibo: function (option, callback) {
        var currentSchema = 'share:weibo:share';
        CALLBACK_MAP[currentSchema] = callback;
        MessageDispatcher(currentSchema, option);
      },
      qq: function (option, callback) {
        var currentSchema = 'share:qq:share';
        CALLBACK_MAP[currentSchema] = callback;
        MessageDispatcher(currentSchema, option);
      },
    },

    /* 拍照相关 */
    capture: {
      selectImage: function (option, callback) {
        var currentSchema = 'capture:image:select';
        CALLBACK_MAP[currentSchema] = callback;
        MessageDispatcher(currentSchema, {});
      },
      selectOCR: function (option, callback) {
        var currentSchema = 'capture:ocr:select';
        CALLBACK_MAP[currentSchema] = callback;
        MessageDispatcher(currentSchema, {});
      },
    },

    /* webview */
    webview: {
      /* webview */
      close: function () {
        var currentSchema = 'webview:current:close';
        MessageDispatcher(currentSchema, {});
      },

      refresh: function () {
        var currentSchema = 'webview:current:refresh';
        MessageDispatcher(currentSchema, {});
      },
    },

    /* 设备 */
    device: {
      network: function (option, callback) {
        var currentSchema = 'device:network:get';
        CALLBACK_MAP[currentSchema] = callback;
        MessageDispatcher(currentSchema, {});
      },
    },

    /* 路由 */
    route: {
      // option组成：
      // target: 'MallItem' / 'MallTopic' / 'UserLogin'... ,
      // params: {
      //     productId: Number,
      //     topicId: String,
      // },
      push: function (option, callback) {
        var currentSchema = null;
        var params = option && option.params;
        if (option && option.target) {
          // 检查是否存在对应页面
          switch (option.target.toLowerCase()) {
            case 'mallitem':
              // 字段校验
              if (!params || !params.productId) {
                callback(new Error('请填写商品id'), null);
                return;
              }
              currentSchema = 'route:mallItem:push';
              break;
            case 'malltopic':
              // 字段校验
              if (!params || !params.topicId) {
                callback(new Error('请填写专题id'), null);
                return;
              }
              currentSchema = 'route:mallTopic:push';
              break;
            case 'userlogin':
              currentSchema = 'route:userLogin:push';
              break;
            default:
              callback(new Error('暂时不支持跳转到该页面哦，抱歉~'), null);
              return;
          }
          CALLBACK_MAP[currentSchema] = callback;
          MessageDispatcher(currentSchema, params);
        } else {
          callback(new Error('请填写必要的传入参数！'), null);
          return;
        }
      },
      replace: function (option, callback) {
        var currentSchema = null;
        var params = option && option.params;
        if (option && option.target) {
          // 检查是否存在对应页面
          switch (option.target.toLowerCase()) {
            case 'mallitem':
              // 字段校验
              if (!params || !params.productId) {
                callback(new Error('请填写商品id'), null);
                return;
              }
              currentSchema = 'route:mallItem:replace';
              break;
            case 'malltopic':
              // 字段校验
              if (!params || !params.topicId) {
                callback(new Error('请填写专题id'), null);
                return;
              }
              currentSchema = 'route:mallTopic:replace';
              break;
            default:
              callback(new Error('暂时不支持跳转到该页面哦，抱歉~'), null);
              return;
          }
          CALLBACK_MAP[currentSchema] = callback;
          MessageDispatcher(currentSchema, params);
        } else {
          callback(new Error('请填写必要的传入参数！'), null);
          return;
        }
      },
    },

    /* 么么贷 */
    mmd: {
      applyFinish: function (result) {
        var currentSchema = 'mmd:apply:finish';
        MessageDispatcher(currentSchema, result);
      },
      activateFinish: function (result) {
        var currentSchema = 'mmd:activate:finish';
        MessageDispatcher(currentSchema, result);
      },
      payFinish: function (result) {
        var currentSchema = 'mmd:pay:finish';
        MessageDispatcher(currentSchema, result);
      },
    },
  };
  window.sfq = new sfq();
   // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // 对外暴露的方法，供外部调用 end
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


  // 利用setTimeout来保证WebViewBridge一定出现。
  var timer = setInterval(function() {
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // 处理回传结果部分 start
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    try {
      if (window.WebViewBridge) {
        clearInterval(timer);

        MessageHandler = function (data, relatedSchema) {
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
        };

        var getShareHandler = function (message) {
          return {
            panel: {
              shareEnd: function() {
                var relatedSchema = 'share:panel:share';
                MessageHandler(message.data, relatedSchema);
              },
            },
            weixin: {
              shareEnd: function() {
                var relatedSchema = 'share:weixin:share';
                MessageHandler(message.data, relatedSchema);
              },
            },
            weixinCircle: {
              shareEnd: function() {
                var relatedSchema = 'share:weixinCircle:share';
                MessageHandler(message.data, relatedSchema);
              },
            },
            weibo: {
              shareEnd: function() {
                var relatedSchema = 'share:weibo:share';
                MessageHandler(message.data, relatedSchema);
              },
            },
            qq: {
              shareEnd: function() {
                var relatedSchema = 'share:qq:share';
                MessageHandler(message.data, relatedSchema);
              },
            },
          };
        };

        var getCaptureHandler = function (message) {
          return {
            image: {
              selectEnd: function () {
                var relatedSchema = 'capture:image:select';
                MessageHandler(message.data, relatedSchema);
              },
            },
            ocr: {
              selectEnd: function () {
                var relatedSchema = 'capture:ocr:select';
                MessageHandler(message.data, relatedSchema);
              },
            }
          };
        };

        var getDeviceHandler = function (message) {
          return {
            network: {
              getEnd: function () {
                var relatedSchema = 'device:network:get';
                MessageHandler(message.data, relatedSchema);
              },
            },
          };
        };

        var getRouteHandler = function (message) {
          return {
            mallTopic: {
              pushEnd: function () {
                var relatedSchema = 'route:mallTopic:push';
                MessageHandler(message.data, relatedSchema);
              },
              replaceEnd: function () {
                var relatedSchema = 'route:mallTopic:replace';
                MessageHandler(message.data, relatedSchema);
              },
            },
            mallItem: {
              pushEnd: function () {
                var relatedSchema = 'route:mallItem:push';
                MessageHandler(message.data, relatedSchema);
              },
              replaceEnd: function () {
                var relatedSchema = 'route:mallItem:replace';
                MessageHandler(message.data, relatedSchema);
              },
            },
            userLogin: {
              pushEnd: function () {
                var relatedSchema = 'route:userLogin:push';
                MessageHandler(message.data, relatedSchema);
              },
            },
          };
        };

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
    // 处理回传结果部分 end
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  }, 100);
})( window );
