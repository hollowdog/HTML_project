define(["jquery","jquery-cookie"],function($){

  function theBasket(){
    var cookieArr = JSON.parse($.cookie("goods"));
    // console.log(cookieArr)
    var total = 0;
    for(var i = 0 ; i < cookieArr.length;i++){
      if(cookieArr[i].id && cookieArr[i].num){
        total += cookieArr[i].num
      }
    }
    console.log(total)
    $(".content #nav_goodsBasket #goodsBasket").html(`购物车(${total})`)
  }




  return{
    theBasket:theBasket,
  }
})