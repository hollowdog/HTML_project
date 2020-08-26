console.log("goodsDetail加载成功了")

define(["jquery","jquery-cookie"],function($){
  
  

  // 读取cookie中的数据
  function getCookie(){
    console.log("getCookie函数加载")
    var id = JSON.parse($.cookie("name")) -1;
    $.ajax({
      url:"../data/index.json",
      success:function(arr){
        var str = `
            <div id="goodsImg">
            <div id="small">
              <img src="${arr[id].img}" alt="">
              <div></div>
            </div>
            <div id="big">
              <img src="${arr[id].img}" alt="">
            </div>
          </div>
          <div id="decription">
            <p>风急天高猿啸哀，渚清沙白鸟飞回。
            无边落木萧萧下，不尽长江滚滚来。
            万里悲秋常作客，百年多病独登台。
            艰难苦恨繁霜鬓，潦倒新停浊酒杯。</p>
          </div>
          <div id="buyit">
            <span>购买${arr[id].title}</span>
            <div id="buy_btn">
              <span>${arr[id].price}</span>
              <a href="goodsBasket.html">加入购物车</a>
            </div>
          </div>
        `;
        $(".content #goodsBox").html(str)
        // 引用imgBig函数，加入图片放大
        imgBig();
      },
      error: function (error) {
        console.log(error);
      },
    })
    
  }

  // 第一函数：图片的放大事件
  function imgBig(){
    var oSmall = document.getElementById("small")
    var oDiv = document.querySelector("#small div")
    var oBig = document.getElementById("big")
    var oBigImg = document.querySelector("#big img")
    oSmall.onmouseenter = function(ev){
      console.log("imgBig")
      var e = ev || window.event;
      oDiv.style.display = "block";
      oBig.style.display = "block";
      
      document.onmousemove = (ev) => {
        var e = ev || window.event;
        var l = e.pageX - oBig.offsetLeft +130;
        var t = e.pageY - oBig.offsetTop -250;
        l = Math.max(0,l)
        t = Math.max(0,t)
        l = Math.min(l,350)
        t = Math.min(t,200)
        oDiv.style.left = l + "px";
        oDiv.style.top = t +"px";
        
        oBigImg.style.left = - 1.33 * l + "px";
        oBigImg.style.top = - 1.5 * t + "px";
      }
    }
    oSmall.onmouseleave = function(){
      document.onmousemove = null;
      oDiv.style.display = "none";
      oBig.style.display = "none";
    }
  }


  // 点击加入购物车按钮，给购物车添加商品，同时跳转到购物车页面
  function setCookie(){
    console.log("setCookie函数加载")
    // 获取id值
    var id = JSON.parse($.cookie("name"));
    $(".content #goodsBox").on("mousedown","#buyit #buy_btn a",function(){
      console.log(id)
      $.cookie("name2",JSON.stringify(id),{
        expires:7
      })
    })
  }
  return{
    setCookie:setCookie,
    getCookie:getCookie,
    // imgBig:imgBig,
  }
})