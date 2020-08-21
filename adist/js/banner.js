define(["jquery"], function ($) {
  function bannerMain() {
    var aBtns = $("#bannerPoint1").find("button");
    var oUl = $("#bannerBox1");
    var iNow = 0; //记录要显示的图片的下标
    var timer = null; //轮播效果的定时器

    //给整个轮播图加一个移入移出
    $("#banner1")
      .mouseenter(function () {
        clearInterval(timer);
      })
      .mouseleave(function () {
        timer = setInterval(function () {
          iNow++;
          tab();
        }, 2000);
      });

    timer = setInterval(function () {
      iNow++;
      tab();
    }, 2000);

    //给所有的按钮添加点击
    aBtns.click(function () {
      iNow = $(this).index();
      tab();
    });

    function tab() {
      aBtns.removeClass("active").eq(iNow).addClass("active");
      if (iNow == aBtns.size()) {
        aBtns.eq(0).addClass("active");
      }

      oUl.animate({ top: -353 * iNow }, 0, function () {
        if (iNow == aBtns.size()) {
          iNow = 0;
          oUl.css("top", 0);
        }
      });
      
    }
  }
  return {
    bannerMain: bannerMain
  }
});
