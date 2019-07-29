export const mathRound = function (num) {
  return Math.round((parseInt(num) / 10000) * 100) / 100 + '万';
}
export const dateFormat = function (fmt) {
  let date = new Date()
  var o = {
    "M+": date.getMonth() + 1, //月份 
    "d+": date.getDate(), //日 
    "h+": date.getHours(), //小时 
    "m+": date.getMinutes(), //分 
    "s+": date.getSeconds(), //秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
    "S": date.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

export const formatArr = function (arr, str = 'str') {
  arr.sort((a, b) => {
    return b[str] - a[str]
  })
  return arr;
}

export const getDateType = function (type) {
  let date = dateFormat('yyyy-MM');
  let yaer = parseInt(date.split("-")[0]); //获取上一年年份
  let month = parseInt(date.split("-")[1]); // 获取当前月
  let srtMoth = parseInt(date.split("-")[1]).toString();
  if (type === '上一月') {
    // let lastYearDate = yaer.toString() + "-" + date.split("-")[1];
    if (month <= 1 && srtMoth.length < 2) {
      return yaer - 1 + "-" + "12";
    } else if (srtMoth.length < 2) {
      let newStrMoth = srtMoth - 1;
      return yaer + "-" + "0" + newStrMoth;
    } else {
      let newStrMoth = srtMoth - 1;
      return yaer + "-" + newStrMoth;
    }
  } else if (type === '上一年') {
    if (month <= 1 && srtMoth.length < 2) {
      return yaer - 2 + "-" + "12";
    } else if (srtMoth.length < 2) {
      let newStrMoth = srtMoth - 1;
      return yaer - 1 + "-" + "0" + newStrMoth;
    } else {
      let newStrMoth = srtMoth - 1;
      return yaer - 1 + "-" + newStrMoth;
    }
  } else if (type === '上二月') {
    if (month <= 1 && srtMoth.length < 2) {
      return yaer - 1 + "-" + "11";
    } else if (srtMoth.length < 2) {
      let newStrMoth = srtMoth - 2;
      return yaer + "-" + "0" + newStrMoth;
    } else {
      let newStrMoth = srtMoth - 2;
      return yaer + "-" + newStrMoth;
    }
  }

}