console.log("main_goodsBasket.js")


require.config({
  paths:{
    jquery:"jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola:"parabola",
    goodsBasket:"goodsBasket",
<<<<<<< HEAD
    theBasket:"theBasket"
=======
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1
  },
  // jquery-cookie 依赖于jquery
  shim:{
    // 设置依赖关系
    "jquery-cookie":["jquery"],

<<<<<<< HEAD
    goodsBasket:["theBasket"]
  }
})

require(["goodsBasket","theBasket"],function(goodsBasket,theBasket){
  goodsBasket.setCookie()
  goodsBasket.sc_msg()
  goodsBasket.del_add_reduce()
  theBasket.theBasket()
=======
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
 
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1
})