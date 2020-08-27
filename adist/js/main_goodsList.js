console.log("加载成功");
//配置要引入所有模块
//配置引入的文件的路径
require.config({
  paths: {
    jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    goodsList:"goodsList",
<<<<<<< HEAD
    theBasket:"theBasket"
=======
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1
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

<<<<<<< HEAD
require(["goodsList","theBasket"],function(goodsList,theBasket){
  goodsList.goodsList1()
  goodsList.setCookie()
  theBasket.theBasket()
=======
require(["goodsList"],function(goodsList){
  goodsList.goodsList1(),
  goodsList.setCookie()
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1
})
