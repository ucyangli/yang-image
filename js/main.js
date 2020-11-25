$(function () {

  $('.carousel').carousel({
    interval: 2000
  });

  $("#video-player").on("click", function (e) {
    var m = $("#video-slider .active").index();
    if (m == 0) {
        $("#player iframe").attr("src", "https://player.vimeo.com/video/392180033?autoplay=1");
    } else if (m == 1) {
      $("#player iframe").attr("src", "https://player.vimeo.com/video/392180052?autoplay=1");
    } else if (m == 2) {
      $("#player iframe").attr("src", "https://player.vimeo.com/video/392180027?autoplay=1");
    } else if (m == 3) {
      $("#player iframe").attr("src", "https://player.vimeo.com/video/392180001?autoplay=1");
    } else {
      // do nothing
    }
  });


  //点击播放
  $("#video-player").on("click", function (e) {
    $("#player-wrap").css("display", "block");
    $("#nav-wrap").css("display", "none");
    $(".carousel").carousel('pause');
  });
  //点击关闭播放窗口

  $("#player-wrap-close .bi").on("click", function (e) {
    $("#player-wrap").css("display", "none");
    $("#nav-wrap").css("display", "block");
    $('html , body').animate({scrollTop: $('#video-slider').offset().top}, 300);
    $('.carousel').carousel("cycle").carousel({
      interval: 2000
    });
    $("#player iframe").attr("src", "");
  });

  //点击菜单意外的区域关闭手机菜单
  $("#collapse-cover").on("click",function (e) {
      collapse(e);
  });

  $("#collapse-nav-items").on("click",function (e) {
    collapse(e);
});


  //点击出现或消失手机菜单
  $("#collapse-nav-toggler").on("click", function (e) {
      slideIn(e);
  });
  $("#collapse-nav-wrap-close").on("click",function(e){
     collapse(e);
  });





// 打开手机菜单
  function slideIn(e) {
    $("#collapse-nav-wrap").css("display", "block");

    $("#collapse-nav-wrap").animate({
      right: "0"
    }, 300);

    $("#content-wrap").animate({
      left: "-=12.5%"
    }, 300);

    $("#collapse-cover").fadeIn(300);

  };
// 关闭手机菜单
  function collapse(e) {
    $("#collapse-nav-wrap").animate({
      right: "-25%"
    }, 300, function (e) {
      $("#collapse-nav-wrap").css("display", "none");
    });

    $("#content-wrap").animate({
      left: "0"
    }, 300);
    $("#collapse-cover").fadeOut(300);
  };

});




