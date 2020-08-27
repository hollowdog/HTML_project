console.log("main_goodsBasket.js")


require.config({
  paths:{
    jquery:"jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola:"parabola",
    goodsBasket:"goodsBasket",
    theBasket:"theBasket"
  },
  // jquery-cookie 依赖于jquery
  shim:{
    // 设置依赖关系
    "jquery-cookie":["jquery"],

    goodsBasket:["theBasket"]
  }
})

require(["goodsBasket","theBasket"],function(goodsBasket,theBasket){
  goodsBasket.setCookie()
  goodsBasket.sc_msg()
  goodsBasket.del_add_reduce()
  theBasket.theBasket()
})