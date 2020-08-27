console.log("goodsBasket.js")

<<<<<<< HEAD
define(["theBasket","jquery","jquery-cookie"],function(theBasket,$){
=======
define(["jquery","jquery-cookie"],function($){
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1

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
<<<<<<< HEAD
    console.log(cookieArr)
    var oNum = $(".content #Basket #theBasket ul li div:nth-child(4) span:nth-child(2)").html()

    // 商品增加
    $(".content #Basket #theBasket ul").on("click","li div:nth-child(4) span:nth-child(1)",function(e){
      var target = e.target || e.srcElement;
      // 获取点击的id
      var id = $(target).attr("id")
      // 根据id获取对应的数据
      var index = cookieArr.findIndex(item=>item.id==id);
      cookieArr[index].num == 1 ? alert("不能再少了！") : cookieArr[index].num -- ;
      // 更改页面上显示的数据
      $(target).next("span").html(cookieArr[index].num)
      // 把修改保存到cookie
      $.cookie("goods",JSON.stringify(cookieArr),{
        expires:7
      })
      sc_msg()
      theBasket.theBasket()
    })


    // 商品减少
    $(".content #Basket #theBasket ul").on("click","li div:nth-child(4) span:nth-child(3)",function(e){
      var target = e.target || e.srcElement;
      // 获取点击的id
      var id = $(target).attr("id")
      // 根据id获取对应的数据
      var index = cookieArr.findIndex(item=>item.id==id);
      cookieArr[index].num ++ ;
      // 更改页面上显示的数据
      $(target).prev("span").html(cookieArr[index].num)
      // 把修改保存到cookie
      $.cookie("goods",JSON.stringify(cookieArr),{
        expires:7
      })
      sc_msg()
      theBasket.theBasket()
    })

    // 删除单个条目
    $(".content #Basket #theBasket ul").on("mousedown","li div:nth-child(5) a",function(e){
      var target = e.target || e.srcElement;
      for(var i = 0 ; i < cookieArr.length ; i++){
        console.log($(target).attr("id"))
        if(cookieArr[i].id == $(target).attr("id")){
          cookieArr.splice(i,1)
          $.cookie("goods",JSON.stringify(cookieArr),{
            expires:7
          })
        }
      }
    })
    // 清空购物车
=======
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
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1
    $(".content #Basket #clear_Basket").on("click",function(){
      $.cookie("goods",null)
      sc_msg()
    })
<<<<<<< HEAD
    // 付款
=======
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1
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
<<<<<<< HEAD
        // console.log(newArr)
=======
        console.log(newArr)
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1
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
<<<<<<< HEAD
            <a href="" id="${newArr[i].id}">移除</a></div>
=======
            <a href="">移除</a></div>
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1
        </li>`

          var price = newArr[i].price.split("￥")[1]
          var num = newArr[i].num
<<<<<<< HEAD
=======
          console.log(num)
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1
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

<<<<<<< HEAD
  // function total_price(){
  //   var cookieArr = JSON.parse($.cookie("goods"))
  //   var total_price = 0;
  //   for(var i = 0 ; i < cookieArr.length ; i++){
  //     var price = cookieArr[i].price.split("￥")[1]
  //     var num = cookieArr[i].num
  //     // console.log(price)
  //     if(price){
  //       total_price += num * price;
  //     }
  //   }
  //   console.length(total_price)
  //   $(".content #Basket #total span:nth-child(2)").html("￥" + total_price)
  // }
=======
>>>>>>> cea5301daaaaa47a9098579441c1c279b3b9b0c1







  return{
    setCookie:setCookie,
    sc_msg:sc_msg,
    del_add_reduce:del_add_reduce,
  }
})