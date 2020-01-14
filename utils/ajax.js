
const api = 'http://localhost:2020/shop/api/';
// common.js
function request(opt) {
  // set token
  wx.request({
    method: opt.method || 'GET',
    url: api + opt.url,
    header: {
      'content-type': 'application/json' // 默认值
    },
    data: opt.data,
    success: function (res) {
      if (res.data.code == 100) {
        if (opt.success) {
          opt.success(res.data);
        }
      } else {
        wx.showToast({
          title: res.data.message,
        })
      }
    }
  })
}

module.exports.request = request