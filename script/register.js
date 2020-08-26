define(["jquery"],function($){

  function register(){
    console.log("register运行")
    // console.log($("#content #register #register_form #submit1"))
    $("#content #register #register_form #submit1").on("click",function(){
      var oInput = $("#content #register #register_form").find("input");
      console.log(oInput);
      var d = new Date()
      $.ajax({
        type:"post",
        url:"./php/register.php",
        data:{
          email:oInput[0].value,
          password:oInput[1].value,
          repassword:oInput[2].value,
          createtime: d.getTime()
        },
        success:function(res){
          var obj = JSON.parse(res)
          alert(obj.msg)
        }
      })
    })
  }
  return{
    register:register
  }


})