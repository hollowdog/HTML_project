console.log("加载成功");
//配置要引入所有模块
//配置引入的文件的路径
require.config({
  paths: {
    jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola: "parabola",
    index: "index",
    banner: "banner",
    theBasket:"theBasket"
  },
  //jquery-cookie 依赖于jquery
  shim: {
    //设置依赖关系
    "jquery-cookie": ["jquery"],
    //某一个模块，不遵从AMD
    parabola: {
      exports: "_",
    },
  },
})

require(["index","banner","theBasket"],function(index,banner,theBasket){
  // 获取数据
  // index.picHover()
  index.download1()
  index.download2()
  index.download3()
  index.game_list_hover()
  index.game_list_button()
  // 轮播图
  banner.bannerMain()
  banner.bannerMain2()
  banner.bannerMain3()
  // 购物车效果
  theBasket.theBasket()
})