console.log("加载成功");
//配置要引入所有模块
//配置引入的文件的路径
require.config({
  paths: {
    jquery: "jquery-1.11.3",
    register:"register",
  },
})
require(["register","jquery"],function(register,jquery){
  register.register();
})