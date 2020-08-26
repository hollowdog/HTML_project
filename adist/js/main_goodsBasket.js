console.log("main_goodsBasket.js")


require.config({
  paths:{
    jquery:"jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola:"parabola",
    goodsBasket:"goodsBasket",
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

require(["goodsBasket"],function(goodsBasket){
  goodsBasket.setCookie()
  goodsBasket.sc_msg()
  goodsBasket.del_add_reduce()
 
})