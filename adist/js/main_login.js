console.log("加载成功");
//配置要引入所有模块
//配置引入的文件的路径
require.config({
  paths: {
    jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola: "parabola",
    login:"login",
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


require(["login","jquery"],function(login,$){
  login.login()
})