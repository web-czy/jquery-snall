$(function () {
  getBanner();
});

function getBanner() {
  getData('https://dev.snaily.com.cn/v1/plan/banner', {
    page: 1,
    size: 20,
    t: 1576725553574
  }).then((data) => {
    console.log(data)
  }).catch((error) => {
    console.log('banner请求错误：')
    console.log(error)
  });
}

function getData(url, data) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);

  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      // contentType: 'application/json',
      // headers: {
      //   authorization: 'noAuth'
      // },
      beforeSend: function (xhr) {
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.setRequestHeader('authorization', 'noAuth')
      },
      success: function (res) {
        if (res.code === 200 && res.message === 'ok') {
          resolve(res)
        } else {
          console.log('出现错误，错误码: ' + res.code)
        }
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = '';
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : '';
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}