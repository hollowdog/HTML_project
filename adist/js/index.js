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

    // function picHover(){
    //   $(".bBox div #smallImgBox a img").mouseenter(function(){
    //     var newImg = $(".bBox div #smallImgBox a img").attr("src")
    //     $(".bBox>a>img").attr("src",newImg)
    //   })
    // }

  return {
    // download: download,
    // picHover:picHover,
  }
})
