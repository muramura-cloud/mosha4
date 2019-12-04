$(function() {
  //背景画像切り替え
  $('.eyecatch-box').bgSwitcher({
    images: ['img/main01.gif','img/mainvisual-02.png'],
    interval: 6000,
  });
  //ショップボタン切り替え
  $('.shopbtn-box a:gt(0)').hide();
  setInterval(function() {
    //フェードインとアウトを繰り返す
    $('.shopbtn-box a:first-child').fadeOut().next('a').fadeIn().end().appendTo('.shopbtn-box');
  },6000);
  //スライドメニュー開閉
  $('#my-parts-icon').click(function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#menu').animate({"margin-left":100+"%"},function() {
        $('#menu li').animate({"margin-left":1000+"px","opacity":0},1000);
      });
    }else {
      $(this).addClass('active');
      $('#menu').animate({"margin-left":0},function() {
        for(i=1;i<=6;i++) {
          $('#menu li:nth-child('+i+')').animate({"margin-left":0,"opacity":1},200+i*250,function() {
            $('#menu img').animate({"opacity":1},3500);
          });
        }
      });
    }
  });
  //スクロールに反応するボーダー
  $(window).scroll(function() {
    var aboutProduct=$("#about-product").offset().top;
    var how=$("#how").offset().top;
    var scene=$("#scene").offset().top;
    var support=$("#support").offset().top;
    var interview=$("#interview").offset().top;
    var windowScroll=$(window).scrollTop();
    if(windowScroll>aboutProduct-300) {
      var ua = navigator.userAgent;
      if ((ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) && ua.indexOf('Mobile') > 0) {
        // スマートフォン用処理
        $("#about-product .border1").css({"width":"142px"});
        $("#about-product .border2").css({"width":"142px"});
      } else {
        // PC用処理
        $("#about-product .border1").css({"width":"416px"});
        $("#about-product .border2").css({"width":"100%"});
      }
    }
    if(windowScroll>how) {
      $("#how .border1").css({"width":"425px"});
    }
    if(windowScroll>scene) {
      $("#scene .border1").css({"width":"425px"});
    }
    if(windowScroll>support) {
      $("#support .border1").css({"width":"425px"});
    }
    if(windowScroll>interview-300) {
      $("#interview .border1").css({"width":"100%"});
      $("#interview .border2").css({"height":"100%"});
      $("#interview .border3").css({"height":"100%"});
      $("#interview .border4").css({"width":"100%"});
      $("#interview .border5").css({"width":"100%"});
    }
  });
  //entranceの表示
  setTimeout(function() {
    $(".lod-logo").css({transform: "scaleY(1)"});
    $(".lod-border").css({transform: "scaleY(1)"});
    for(i=1;i<=5;i++) {
      $(".lod-logo-txt-img:nth-child("+i+")").css({transform: "scaleY(1)"});
    }
  },500);
  setTimeout(function() {
    $(".lod-border").css({transform: "scaleX(0)"});
  },1200);
  setTimeout(function() {
    $(".lod-txt-img:nth-child(even)").css({opacity:1});
    $(".lod-txt-img:nth-child(odd)").css({opacity:1});
  },1200);
  setTimeout(function() {
    $("#entrance").fadeOut(500);
  },2500);
});
