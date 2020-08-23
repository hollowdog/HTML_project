console.log("加载成功")

//  jquery 遵循AMD规范
// 配置路径
require.config({
  paths:{
    jquery:"jquery-1.11.3",
    parabola:"parabola",
    goodsDetail:"goodsDetail",
  },
  // jquery-cookie 依赖于jquery
  shim:{
    // 设置依赖关系
    "jquery-cookie":["jquery"],

    // 当某一个模块不遵从AMD
    parabola:{
      exports:"_"
    }
  }
})

require(["goodsDetail","jquery"],function(goodsDetail,$){
  goodsDetail.show(),
  goodsDetail.imgBig()

 
})