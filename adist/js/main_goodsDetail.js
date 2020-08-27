console.log("加载成功")

//  jquery 遵循AMD规范
// 配置路径
require.config({
  paths:{
    jquery:"jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola:"parabola",
    goodsDetail:"goodsDetail",
    theBasket:"theBasket"
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

<<<<<<< HEAD
require(["goodsDetail","theBasket"],function(goodsDetail,theBasket){
  goodsDetail.getCookie()
  goodsDetail.setCookie()
  // goodsDetail.imgBig()
  theBasket.theBasket()
=======
require(["goodsDetail"],function(goodsDetail,$){
  goodsDetail.getCookie()
  goodsDetail.setCookie()
  // goodsDetail.imgBig()
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1

 
})