define(["parabola", "jquery", "jquery-cookie"], function (parabola, $) {
  // 编写一个下载数据的函数
  // function download() {
  //   sc_num();
  //   sc_msg();
  //   $.ajax({
  //     url: "../data/index.json",
  //     success: function (arr) {
  //       var str = ``;
  //       for (var i = 0; i < arr.length; i++) {
          
  //         str += `
  //         <div class="bBox">
  //           <a href="https://store.steampowered.com/app/1202910/Spiritfarer_Demo/?snr=1_4_4__100_1">
  //             <img src="${arr[i].img}" alt="">
  //           </a>
            
  //           <div>
  //             <h3>${arr[i].title}</h3>
  //             <div id="smallImgBox">
  //               <a href=""><img src="${arr[i].img1}" alt=""></a>
  //               <a href=""><img src="${arr[i].img2}" alt=""></a>
  //               <a href=""><img src="${arr[i].img3}" alt=""></a>
  //               <a href=""><img src="${arr[i].img4}" alt=""></a>
                
  //             </div>
  //             <h4>${arr[i].main_default}</h4>
  //             <h5>
  //               <span>${arr[i].price_off}</span>
  //               <span>${arr[i].price}</span>
  //               <span class="iconfont">&#xe68d;</span>
  //               <span class="iconfont">&#xe7b8;</span>
  //               <span class="iconfont">&#xe656;</span>
  //             </h5>
              
  //           </div>
  //         </div>`;
  //       }
  //       $("#bannerBody1").html(str);
  //       console.log(str)
  //     },
  //     error: function (error) {
  //       console.log(error);
  //     },
  //   });
  // }

  function sc_BtnHandleClick() {
    $(".goods_box ul").on("click", ".sc_btn", function () {
      var id = this.id; //点击按钮的这个商品的id
      //1、判定是否是第一次添加
      var first = $.cookie("goods") == null ? true : false;
      if (first) {
        var arr = [{ id: id, num: 1 }];
        $.cookie("goods", JSON.stringify(arr), {
          expires: 7,
        });
      } else {
        //不是第一次，判定之前是否添加过
        var same = false; //假设之前没添加过
        var cookieArr = JSON.parse($.cookie("goods"));
        for (var i = 0; i < cookieArr.length; i++) {
          if (cookieArr[i].id === id) {
            cookieArr[i].num++;
            same = true;
            break;
          }
        }

        if (!same) {
          var obj = { id: id, num: 1 };
          cookieArr.push(obj);
        }

        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7,
        });
      }
      console.log($.cookie("goods"));
      sc_num();
      sc_msg();
      ballMove(this);
    });
  }

  function sc_Right_HandleHover() {
    //给右侧购物车添加移入移出效果
    $(".sc_right")
      .mouseenter(function () {
        $(this).stop(true).animate({ right: 0 }, 500);
      })
      .mouseleave(function () {
        $(this).stop(true).animate({ right: -270 }, 500);
      });
  }

  function sc_num() {
    var cookieStr = $.cookie("goods");
    var sum = 0;
    if (cookieStr) {
      var cookieArr = JSON.parse(cookieStr);
      for (var i = 0; i < cookieArr.length; i++) {
        sum += cookieArr[i].num;
      }
    }
    $(".sc_right .sc_num").html(sum);
  }
  //右侧购物上商品的加载
  //1、购物车数据，都在cookie中id num
  //2、商品信息在，服务器上
  function sc_msg() {
    var cookieStr = $.cookie("goods");
    if (!cookieStr) {
      return;
    }
    //1、请求商品数据
    $.ajax({
      type: "get",
      url: "../data/data.json",
      success: function (arr) {
        //在cookie中取出数据
        var newArr = [];
        var cookieArr = JSON.parse(cookieStr);
        for (var i = 0; i < cookieArr.length; i++) {
          for (var j = 0; j < arr.length; j++) {
            if (arr[j].id == cookieArr[i].id) {
              arr[j].num = cookieArr[i].num;
              newArr.push(arr[j]);
              break;
            }
          }
        }
        // console.log(newArr);
        let str = ``;
        for (var i = 0; i < newArr.length; i++) {
          str += `<li id="${newArr[i].id}">
                    <div class="sc_goodsPic">
                        <img src="${newArr[i].img}" alt="">
                    </div>
                    <div class="sc_goodsTitle">
                        <p>这是商品曲奇饼干</p>
                    </div>
                    <div class="sc_goodsBtn">购买</div>
                    <div class="delete_goodsBtn">删除</div>
                    <div class="sc_goodsNum">
                        <div>
                            <button>+</button>
                            <button>-</button>
                            <span>商品数量：${newArr[i].num}</span>
                        </div>
                    </div>
                </li>`;
        }
        $(".sc_right ul").html(str);
      },
    });
  }

  function sc_Goods_Delete_HandleClick(){
    //通过事件委托给右侧购物车商品添加事件委托
    $(".sc_right ul").on("click", ".delete_goodsBtn", function(){
      //1、页面上删除
      var id = $(this).closest("li").remove().attr("id");
      //2、通过cookie删除
      var cookieArr = JSON.parse($.cookie("goods"));
      var index = cookieArr.findIndex(item => item.id == id);
      //删除
      cookieArr.splice(index, 1);
      if(cookieArr.length){
        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7
        })
      }else{
        $.cookie("goods", null);
      }
      sc_num();
    })
  }

  //商品的+和-添加点击
  function sc_Good_Add_Minus_HandleClick(){
    //给+和-添加事件
    $(".sc_right ul").on("click", '.sc_goodsNum button', function(){

      var id = $(this).closest("li").attr("id");
      //从cookie中找出这个id的数据
      var cookieArr = JSON.parse($.cookie("goods"));
      var index = cookieArr.findIndex(item => item.id == id);

      if(this.innerHTML == "+"){
        cookieArr[index].num++;
      }else{
        cookieArr[index].num == 1 ? alert("数量为1，不能减少") : cookieArr[index].num--;
      }
      //改变页面上的数量
      $(this).siblings("span").html("商品数量：" + cookieArr[index].num);
      //将改变完成数量的cookie存储回去
      $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
      })
      sc_num();
    })
  }

  //进行抛物线运动的函数
  function ballMove(node){
    //显示小球，并且将小球移动到当前点击按钮的位置
    $("#ball").css({
      left: $(node).offset().left,
      top: $(node).offset().top,
      display: 'block'
    })

    //计算抛物线的偏移位置
    var offsetX = $(".sc_right .sc_pic").offset().left - $(node).offset().left;
    var offsetY = $(".sc_right .sc_pic").offset().top - $(node).offset().top;

    //声明一个抛物线对象
    var bool = new Parabola({
      el: "#ball",
      offset: [offsetX, offsetY],
      duration: 600,
      curvature: 0.001,
      callback: function(){
        $("#ball").hide();
      }
    })
    bool.start();
  }

  return {
    // download: download,
    sc_BtnHandleClick: sc_BtnHandleClick,
    sc_Right_HandleHover: sc_Right_HandleHover,
    sc_Goods_Delete_HandleClick: sc_Goods_Delete_HandleClick,
    sc_Good_Add_Minus_HandleClick: sc_Good_Add_Minus_HandleClick
  };
});
