define(["parabola", "jquery", "jquery-cookie"], function (parabola, $) {
  // 编写一个下载数据的函数
  function download1() {
    $.ajax({
      url: "../data/index2.json",
      success: function (arr) {
        var str = ``;
        for (var i = 0; i < arr.length; i++) {
          
          str += `
            <a href="" class="item" id="${arr[i].id}">
            <img src="${arr[i].img}" alt="">
            <div>
              <span>${arr[i].title}</span>
              <span class="iconfont">${arr[i].icon}</span>
              <span>${arr[i].tag}</span>
            </div>
            <p>${arr[i].prcie}</p>
            </a>`;
          
        }
        str = `<ol>${str}</ol>`
        $("#game_list_card #game_list div").html(str+str+str);
        // console.log(str)
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
  function download2() {
    $.ajax({
      url: "../data/index.json",
      success: function (arr) {
        var str = ``;
        for (var i = 0; i < 10; i++) {
          
          str += `
          <div class="cardbox" id="${arr[i].id}">
            <img src="${arr[i].img1}" alt="">
            <img src="${arr[i].img2}" alt="">
            <img src="${arr[i].img3}" alt="">
        </div>`;
        }
        $("#game_list_card #card").html(str);
        // console.log(str)
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
  function download3() {
    $.ajax({
      url: "../data/index3.json",
      success: function (arr) {
        var str = ``;
        for (var i = 0; i < 8; i++) {
          
          str += `
          <a href="goodsList.html" id="vr_game">
          <img src="${arr[i].img}" alt="">
          <div>
            <span>
              10%off
            </span>
            <span>
              ${arr[i].price}
            </span>
          </div>
        </a>`;
        }
        $("#vr_games").html(str);
        // console.log(str)
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
  function game_list_hover(){
    
    var oLists = $("#game_list_card #game_list div")
    // console.log(oLists)
    oLists.on("mouseenter",".item",function(ev){
      var e = ev || window.event;
      var target = e.target || window.event.srcElement;
      $("#game_list_card #game_list div").find("ol a").attr("class","item");
      target.className = "item active";
      console.log(target.id);
      var str =`[id=${target.id}]`
      $("#card").find(".cardbox").css("display","none")
      $("#card").find(str).css("display","flex")
      // var oCard = get_oCard(target.id);
      // oCard.className += "show";
    })
    oLists.find("a").on("mouseleave",function(){
      
      $("#cardbox").attr("class","cardbox");
    })
  }
  function game_list_button(){
    var oBtn = $("#game_list_card #game_list ul button")
    oBtn.click(function(){
      oBtn.attr("class","")
      $(this).attr("class","aactive")
      console.log($(this).index())
      $("#game_list_card #game_list div ol").css("display","none").eq($(this).index()).css("display","block")
    })
  }
    
  return {
    download1: download1,
    download2:download2,
    download3:download3,
    game_list_hover:game_list_hover,
    game_list_button:game_list_button,
    // picHover:picHover,
  }
})
