// app.js
App({
  onLaunch() {
    var that = this;
    // 因自定义底部tabbar需要判断机型 显示不同高度
    wx.getSystemInfo({
      success: function (e) {
        if (e.safeArea.top > 20) { //是不是包含iphoneX
          that.globalData.isIphoneX = true
        } else {
          that.globalData.isIphoneX = false
        }
      }
    })
  },
  globalData: {
    isIphoneX: false
  }
})
