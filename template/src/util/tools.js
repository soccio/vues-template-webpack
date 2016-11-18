export function getSearch(href) {
  href = href || window.location.search;
  var data = {},reg = new RegExp( "([^?=&]+)(=([^&]*))?", "g" );
  href && href.replace(reg,function( $0, $1, $2, $3 ){
    data[ $1 ] = $3;
  });
  return data;
}
export function setCookie(name,value, hours, path){
  var exp = new Date();
  exp.setTime(exp.getTime() + hours*60*60*1000);
  if(!path){
      path = '/'
  }
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=" + path;
}
export function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

  if(arr=document.cookie.match(reg))

      return unescape(arr[2]);
  else
      return null;
}
export function delCookie(name, path){
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval='null';
  if(!path){
      path = '/'
  }
  if(cval!=null)
      document.cookie= name + "="+cval+";expires="+exp.toGMTString()+ ";path=" + path;
}
export function dateTimeFormatter (date ,format) {
  // 时间格式化辅助函数 date:毫秒数 format:'yyyy-MM-dd hh:mm:ss'
    if (!date || date == "") {
        return "";
    }else if(date.toString().length < 13){
        date = date*1000;
    }

    if (typeof date === "string") {
        var mts = date.match(/(\/Date\((\d+)\)\/)/);
        if (mts && mts.length >= 3) {
            date = parseInt(mts[2]);
        }
    }

    date = new Date(date);
    if (!date || date.toUTCString() == "Invalid Date") {
        return "";
    }

    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };

    format = format.replace(/([yMdhmsqS])+/g, function(all, t){
        var v = map[t];
        if(v !== undefined){
            if(all.length > 1){
                v = '0' + v;
                v = v.substr(v.length-2);
            }
            return v;
        }
        else if(t === 'y'){
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });

    return format;
}

export function isEmpty (obj){
  if (obj == null || obj == '' || obj == 'undefined' || obj == 'null') {
     return true;
  }
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}
export function uniqueArr(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}