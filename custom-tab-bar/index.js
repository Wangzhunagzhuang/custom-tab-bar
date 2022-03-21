// components/custom-tab-bar/index.js
const app = getApp();
Component({
  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    list: [{
      "pagePath": "/pages/index/index",
      "iconPath": "/static/image/icon_component.png",
      "selectedIconPath": "/static/image/icon_component_HL.png",
      "text": "首页"
    },
    {
      "pagePath": "/pages/logs/logs",
      "iconPath": "/static/image/pengyouquan.png",
      "selectedIconPath": "/static/image/pengyouquan.png",
      "text": "手电"
    }, 
    {
      "pagePath": "/pages/my/my",
      "iconPath": "/static/image/icon_API.png",
      "selectedIconPath": "/static/image/icon_API_HL.png",
      "text": "我的"
    }],
     //适配IphoneX的屏幕底部横线
     isIphoneX: app.globalData.isIphoneX
  },
  attached() {
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tab(e){
      const data = e.currentTarget.dataset
      const url = data.path
      // return;
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
