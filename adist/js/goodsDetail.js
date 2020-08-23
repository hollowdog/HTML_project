define(["jquery"],function($){
  function show(){
    console.log("goodsDetail加载成功")
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





  return{
    show:show,
    imgBig:imgBig,
  }
})