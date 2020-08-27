console.log("goodsList.js加载成功")
define(["jquery","jquery-cookie"],function($){


  function goodsList1(){
    console.log("goodsList函数加载")
    $.ajax({
      url: "../data/index2.json",
      success: function (arr) {
        var str = ``;
        for (var i = 0; i < arr.length; i++) {
          
          str += `
          <a href="goodsDetail.html" id="goodsli" name=${i+1}>
          <img src="${arr[i].img}" alt="" name=${i+1}>
          <div name=${i+1}>
            <article name=${i+1}>${arr[i].title}</article>
            <span class="iconfont" name=${i+1}>${arr[i].icon}</span>
            
          </div>
          <div name=${i+1}>2020年8月21日</div>
          <div name=${i+1}>10%off</div>
          <div name=${i+1}>${arr[i].prcie}</div>
        </a>
            `;
          
        }
        // console.log(str)
        $("#goodslist").html(str);
        // console.log(str)
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
  
  // 将点击的图片的名字传给cookie，然后，由cookie在detail页面读取数据，然后根据读取到的数据来加载对应信息，
  // 接下来的getcookie写到detail页面中
  function setCookie(){
    console.log("setCookie函数加载")
    // 获取id值
    $("#goodslist").on("mousedown","#goodsli",function(e){
      var target = e.target || e.srcElement;
      console.log($(target).attr("name"))
      var id = $(target).attr("name")
      $.cookie("name",JSON.stringify(id),{
        expires:7
      })
    })
  }


  return {
    goodsList1:goodsList1,
    setCookie:setCookie,
  }
})