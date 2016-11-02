(function () {
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
}());
