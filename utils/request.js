import config from "./config"

export default (url, data = {}, method = 'GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      success: (res) => {
        console.log('成功',res.data);
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  })
}