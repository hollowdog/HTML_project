console.log("goodsBasket.js")

define(["jquery","jquery-cookie"],function($){

  // 添加cookie保存购物车信息
  function setCookie(){
    // 读取name2传来的id值，然后删除name2
    if($.cookie("name2")){
      var id = JSON.parse($.cookie("name2"));
      $.cookie("name2",JSON.stringify(id),{
        expires:-1
      })
    }
    console.log(id)

    var first = $.cookie("goods") == null ? true : false;
    if(first){
      var arr = [{id:id,num:1}];
      $.cookie("goods",JSON.stringify(arr),{
        expires:7
      })
    }else{
      var same = false;
      var cookieArr = JSON.parse($.cookie("goods"));
      for(var i = 0 ; i< cookieArr.length;i++){
        if(cookieArr[i].id == id){
          cookieArr[i].num++;
          same = true;
          break;
        }
      }
      if(!same){
        var obj = {id:id,num:1};
        cookieArr.push(obj);
      }

      $.cookie("goods",JSON.stringify(cookieArr),{
        expires:7
      })

      console.log($.cookie("goods"))

    }
    
  }

  function del_add_reduce(){
    console.log("del")
    var cookieArr = JSON.parse($.cookie("goods"))
    // var oNum = $(".content #Basket #theBasket ul li div:nth-child(4) span:nth-child(2)").html()
    $(".content #Basket #theBasket ul").on("click","li div:nth-child(4) span:nth-child(1)",function(e){
      var target = e.target || e.srcElement;
      console.log("-")
      console.log(target.id)
      for(var i = 0 ; i < cookieArr.length ;i++){
        if(cookieArr){}
      }
    })
    $(".content #Basket #theBasket ul").on("click","li div:nth-child(4) span:nth-child(3)",function(e){
      
      
    })
    $(".content #Basket #clear_Basket").on("click",function(){
      $.cookie("goods",null)
      sc_msg()
    })
    $(".content #Basket #pay").on("click",function(){
      $("#pay_img").css("display","block")
    })
  }

  
  function sc_msg(){
    var cookieStr = $.cookie("goods")
    if(!cookieStr){
      return
    }
    
    // 1.请求商品数据
    $.ajax({
      type:"get",
      url:"../data/index.json",
      success:function(arr){
        var newArr = [];
        var cookieArrA = JSON.parse(cookieStr)
        for(var i = 0; i < cookieArrA.length;i++){
          for(var j = 0 ; j < arr.length ; j++){
            if(arr[j].id == cookieArrA[i].id){
              arr[j].num = cookieArrA[i].num;
              newArr.push(arr[j])
              break;
            }
          }
        }
        console.log(newArr)
        let str = ``;
        // 总价格
        var total_price = 0;
        for(var i = 0 ; i < newArr.length ; i++){
          str += `<li>
          <img src="${newArr[i].img}" alt="">
          <h5>${newArr[i].title}</h5>
          <div>
            <span class="iconfont">&#xe68d;</span>
            <span class="iconfont">&#xe7b8;</span>
            <span class="iconfont">&#xe656;</span>
          </div>
          <div>
            <span id="${newArr[i].id}">-</span>
            <span>${newArr[i].num}</span>
            <span id="${newArr[i].id}">+</span>
          </div>
          <div>
            <span>${newArr[i].price}</span>
            <a href="">移除</a></div>
        </li>`

          var price = newArr[i].price.split("￥")[1]
          var num = newArr[i].num
          console.log(num)
          // console.log(price)
          if(price){
            total_price += num * price;
          }
        }
        
        $(".content #Basket #theBasket ul").html(str)
        $(".content #Basket #total span:nth-child(2)").html("￥" + total_price)
      }
    })
  }








  return{
    setCookie:setCookie,
    sc_msg:sc_msg,
    del_add_reduce:del_add_reduce,
  }
})