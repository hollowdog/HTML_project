define(["jquery"],function($){

  function register(){
    console.log("register运行")
    $("#submit1").on("click",function(){
      var oInput = document.querySelectorAll("#register_form>input");
      console.log(oInput);
      $.ajax({
        url:"./php/register.php",
        type:"post",
        data:{
          email:oInput[0].value,
          password:oInput[1].value,
          repassword:oInput[2].value
        },
        success:function(res){
          console.log(red)
        }
      })
    })


  
  }






  return{
    register:register
  }


})