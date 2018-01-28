// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    //新品上架
    newgoods_head_url: "http://s2.cdn.xiachufang.com/6bbf164b236d46e5a19ac23a9eb820f6_1280w_1024h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90", 
    // 新品上架
    /*recommends: [

      {
        goodId: 7,
        name: 'OLAY玉兰油精油沐浴露玫瑰滋养二合一450ml',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161213/148162245074.jpg',
        newprice: "￥36.60",
        oldprice: "￥40.00",
      },
      {
        goodId: 10,
        name: '兰蔻玫瑰清滢保湿柔肤水嫩肤水化妆水400ml补水保湿温和不刺激',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057937593.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      }, {
        goodId: 11,
        name: 'Lancome/兰蔻清莹柔肤爽肤水/粉水400ml补水保湿玫瑰水化妆水',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      },
      {
        goodId: 12,
        name: '美国CLINIQUE倩碧黄油无油/特效润肤露125ml',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        newprice: "￥239.00",
        oldprice: "￥320.00",
      },
      {
        goodId: 13,
        name: '法国LANCOME兰蔻柔皙轻透隔离防晒乳霜50ML2017年3月到期',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058014894.jpg',
        newprice: "￥130.00",
        oldprice: "￥180.00",
      },
    ],*/
    // 新品上架
    goodsItems: [
      {
        goodId: 0,
        name: '戚风蛋糕',
        url: 'bill',
        imageurl: 'http://s2.cdn.xiachufang.com/2bee9db8887e11e6b87c0242ac110003_800w_624h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
        newprice: "￥40.00",
        oldprice: "￥50.00",
        salesvolume: 11
      },
      {
        goodId: 1,
        name: '鸡蛋饼干',
        url: 'bill',
        imageurl: 'http://s2.cdn.xiachufang.com/5a8ace493fda4d658883ffbc92f3e911_2304w_1536h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
        newprice: "￥15.00",
        oldprice: "￥20.00",
        salesvolume: 15
      },
      {
        goodId: 2,
        name: '蔓越莓饼干',
        url: 'bill',
        imageurl: 'http://s2.cdn.xiachufang.com/d4890aa288b111e6b87c0242ac110003_640w_640h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
        newprice: "￥30.00",
        oldprice: "￥40.00",
        salesvolume: 1190
      },
      {
        goodId: 3,
        name: '日式豆乳盒子蛋糕',
        url: 'bill',
        imageurl: 'http://s2.cdn.xiachufang.com/bb707806c11011e6bc9d0242ac110002_600w_400h.jpg?imageView2/2/w/660/interlace/1/q/90',
        newprice: "￥50.00",
        oldprice: "￥60.00",
        salesvolume: 500
      },
      {
        goodId: 4,
        name: '酥脆蛋香小饼干',
        url: 'bill',
        imageurl: 'http://s2.cdn.xiachufang.com/0d756d64873711e6a9a10242ac110002_600w_800h.jpg?imageView2/2/w/660/interlace/1/q/90',
        newprice: "￥25.00",
        oldprice: "￥29.00",
        salesvolume: 190
      }, {
        goodId: 5,
        name: '圣诞呆萌裸蛋糕',
        url: 'bill',
        imageurl: 'http://s2.cdn.xiachufang.com/a890b5da88c011e6a9a10242ac110002_650w_650h.jpg?imageView2/2/w/660/interlace/1/q/90',
        newprice: "￥130.00",
        oldprice: "￥180.00",
        salesvolume: 110
      }
    ],
    //点心
    dessertItems:[
      {
        goodId: 6,
        name: '韩国白雪蒸糕',
        url: 'bill',
        imageurl: 'http://recipe1.hoto.cn/pic/recipe/l/69/ce/314985_d3a7dc.jpg',
        newprice: "￥20.00",
        oldprice: "￥25.00",
        salesvolume: 210
      }
    ],
    //饼干
    CookiesItems:[
      {
        goodId: 7,
        name: '奶盐苏打饼干',
        url: 'bill',
        imageurl: 'http://s2.cdn.xiachufang.com/8c68620c896711e6b87c0242ac110003_500w_471h.jpg?imageView2/2/w/660/interlace/1/q/90',
        newprice: "￥15.00",
        oldprice: "￥20.00",
        salesvolume: 1320
      }
    ],
    //蛋糕
    cakeItems:[
      {
        goodId: 8,
        name: '枣泥蛋糕',
        url: 'bill',
        imageurl: 'http://s2.cdn.xiachufang.com/761bdaa8882511e6a9a10242ac110002_640w_478h.jpg?imageView2/2/w/660/interlace/1/q/90',
        newprice: "￥20.00",
        oldprice: "￥25.00",
        salesvolume: 1503
      }
    ],
    navbar: ['热销', '点心', '饼干', '蛋糕'],
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function() {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  // 导航切换监听
  navbarTap: function (e) {
    console.debug(e);

    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    if (e.currentTarget.dataset.idx == 1 && this.data.goodsItems.length == 0) {
     
    }
  }
})