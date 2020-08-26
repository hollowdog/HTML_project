console.log("login.js 加载成功")
define(["jquery"],function($){


  function login(){
    console.log("login运行")
    // console.log($("#form1"))
    var oInput = $("#form1 input")
    console.log(oInput[1].value)
    // var oBtn = $("#btn1")
    $("#btn1").on("click",function(){
      console.log("btn1")
      $.ajax({
        type:"get",
        url:"./php/login.php",
        data:{
          email:oInput[0].value,
          password:oInput[1].value,
        },
        success:function(res){
          var obj = JSON.parse(res)
          alert(obj.msg)

        }
      })
    })
  }


  return {
    login:login,
  }





})