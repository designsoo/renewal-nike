$(function () {
  // ############## hamBtn - click motion ##############
  var hamburger = $(".gnb__hamBtn-icon");

  hamburger.each(function (index) {
    var $this = $(this);

    $this.on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
    });
  });

  // ############## hamBtn - click ##############
  var count = 0;
  $(".gnb__hamBtn-icon").on("click", function () {
    count++;
    $(".subWrap, .sub-list").stop().slideUp(0);
    if (count % 2 != 0) {
      $(".menuWrap").stop().animate(
        {
          left: "70px",
        },
        500
      );
    } else {
      $(".menuWrap").stop().animate(
        {
          left: "-370px",
        },
        500
      );
    }
  });

  // ############## left-menu ##############
  // 1. title 클릭 => sub menu
  $("#nav>li>a").on("click", function () {
    $(this)
      .siblings(".subWrap")
      .stop()
      .slideToggle(300)
      .parents()
      .siblings()
      .children(".subWrap")
      .stop()
      .slideUp(300)
      .children("li")
      .children(".sub-list")
      .slideUp(300);
  });

  $(".subWrap>li>a").on("click", function () {
    $(this)
      .siblings(".sub-list")
      .stop()
      .slideToggle(300)
      .parents()
      .siblings()
      .children(".subWrap")
      .stop()
      .slideUp(300);
  });

  // ############## mainBanner ##############
  // banner - fade
  var showBanner = 0;

  $(".pager>li").on("click", function () {
    showBanner = $(this).index();
    $(".banner>li")
      .eq(showBanner)
      .stop()
      .fadeIn(1000)
      .siblings()
      .fadeOut(1000)
      .find(".thumbnail")
      .stop()
      .fadeOut(100)
      .siblings(".plusBtn")
      .removeClass("active");
    $(".itemWrap>li").eq(0).stop().fadeIn(1000).siblings().fadeOut(1000);
  });

  // plus button - active + thumbnail
  $(".plusBtn").on("click", function () {
    $(this).addClass("active").siblings(".thumbnail").fadeIn(1000);
  });

  // close button - remove
  $(".closeBtn").on("click", function () {
    $(this)
      .parents(".thumbnail")
      .fadeOut(1000)
      .siblings(".plusBtn")
      .removeClass("active");
  });

  // color pick - 해당 페이지 새롭게 열리면 썸네일, 버튼 active 사라짐.
  $(".color>li").on("click", function () {
    cIndex = $(this).index();
    $(".itemWrap>li")
      .eq(cIndex)
      .fadeIn(1000)
      .siblings("li")
      .fadeOut(1000)
      .find(".thumbnail")
      .stop()
      .fadeOut(100)
      .siblings(".plusBtn")
      .removeClass("active");
  });

  // ############## 5. section : video play ##############
  //pc
  var myVideo = $("#myVideo").get(0);
  var mobileVideo = $("#m-video").get(0);
  var playPause = $(".pc-controlBtn .play");

  playPause.on("click", function () {
    if (myVideo.paused) {
      myVideo.play();
      $(".play>img").attr({
        src: "images/video-pauseBtn.png",
        alt: "pause",
      });
    } else {
      myVideo.pause();
      $(".play>img").attr({
        src: "images/video-playBtn.png",
        alt: "play",
      });
    }
  });

  var wWidth = $(window).outerWidth();
  $(window).resize(function () {
    wWidth = $(window).outerWidth();
    if (wWidth < 481) {
      myVideo.pause();
    } else {
      mobileVideo.pause();
      $(".play>img").attr({
        src: "images/video-playBtn.png",
        alt: "play",
      });
    }
  });

  // ############## 6. section : miniBanner ##############
  var showMini = 0;

  var mLiWidth = $(".miniWrap>li").outerWidth();
  var mLiCount = $(".miniWrap>li").length;

  var mLiFirst = $(".miniWrap>li:lt(2)").clone();
  $(".miniWrap").append(mLiFirst);
  var mCount = $(".miniWrap>li").length;
  console.log(mCount);

  $(".miniWrap").width(mCount * mLiWidth);
  $(".miniWrap>li").outerWidth(mLiWidth);

  function moveMini() {
    $(".miniWrap")
      .stop()
      .animate(
        {
          marginLeft: -showMini * mLiWidth,
        },
        1000
      );
    if (showMini == 3) {
      $(".mTitle>li").eq(0).fadeIn(1000).siblings("li").fadeOut(1000);
    }

    $(".mTitle>li").eq(showMini).fadeIn(1000).siblings("li").fadeOut(1000);
  }
  $(".m-rightBtn").on("click", function () {
    if (showMini == mLiCount) {
      showMini = 0;
      $(".miniWrap").css("margin-left", 0);
    }
    showMini++;
    console.log(showMini);
    moveMini();
  });

  $(".m-leftBtn").on("click", function () {
    if (showMini == 0) {
      showMini = mLiCount;
      $(".miniWrap").css("margin-left", -showMini * mLiWidth);
    }
    showMini--;
    moveMini();
  });

  // ############## 7. section - hover off##############
});
