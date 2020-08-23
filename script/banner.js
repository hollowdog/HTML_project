define(["jquery"], function ($) {
  function bannerMain() {
    console.log("bannerMain加载成功")
    var aBtns = $("#bannerPoint1").find("ul li");
    var oUl = $("#bannerBox1");
    var left = $("#arrow_left_right").find("#left")
    var right = $("#arrow_left_right").find("#right")
    var iNow = 0; //记录要显示的图片的下标
    var timer = null; //轮播效果的定时器
  
    console.log(aBtns,oUl,left,right)
    //给整个轮播图加一个移入移出
    $("#banner1").mouseenter(function () {
        clearInterval(timer);
      })
      .mouseleave(function () {
        timer = setInterval(function () {
          iNow++;
          tab();
        }, 3000);
      });

    timer = setInterval(function () {
      iNow++;
      tab();
    }, 3000);

    //给所有的按钮添加点击
    aBtns.click(function () {
      iNow = $(this).index();
      tab();
    });

    right.click(function(){
      iNow ++ ;
      tab();
    })
    left.click(function(){
      iNow -- ; 
      tab();
    })

    function tab() {
      aBtns.removeClass("active").eq(iNow).addClass("active");
      if (iNow == aBtns.size()) {
        aBtns.eq(0).addClass("active");
      }

      oUl.animate({ top: -360 * iNow + "px" }, 0, function () {
        if (iNow == aBtns.size()) {
          iNow = 0;
          oUl.css("top", 0);
        }
        if(iNow == -1){
          iNow = aBtns.size() -1;
          oUl.css("top",-4320)
        }
      }).animate({opacity:0},0).animate({opacity:1},500)

      
    }
  }
  return {
    bannerMain: bannerMain
  }
});
