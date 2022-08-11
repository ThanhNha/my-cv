function mouse_image() {
  let cursorImage = $(".mouse-pos-list-image");
  let posXImage = 0;
  let posYImage = 0;
  let mouseX = 0;
  let mouseY = 0;

  if (document.querySelector(".mouse-pos-list-image")) {
    gsap.to({}, 0.0083333333, {
      repeat: -1,
      onRepeat: function () {
        if (document.querySelector(".mouse-pos-list-image")) {
          posXImage += (mouseX - posXImage) / 12;
          posYImage += (mouseY - posYImage) / 12;
          gsap.set(cursorImage, {
            css: {
              left: posXImage,
              top: posYImage,
            },
          });
        }
      },
    });
  }
  $(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  //   mouseenter
  $(".mouse-pos-list-image-wrap a").on("mouseenter", function () {
    $(".mouse-pos-list-image").addClass("active");
  });
  $(".mouse-pos-list-image-wrap a").on("mouseleave", function () {
    $(".mouse-pos-list-image").removeClass("active");
  });

  $(".mouse-pos-list-image-wrap li.visible").on("mouseenter", function () {
    var $elements = $(".mouse-pos-list-image-wrap li.visible");
    var index = $elements.index($(this)); // return index
    var count = $(".mouse-pos-list-image li.visible").length;
    // var index =  $(this).index();
    if ($(".float-image-wrap")) {
      gsap.to($(".float-image-wrap"), {
        y: (index * 100) / (count * -1) + "%",
        duration: 0.6,
        ease: Power2.easeInOut,
      });
    }
    $(".mouse-pos-list-image.active .mouse-pos-list-image-bounce")
      .addClass("active")
      .delay(400)
      .queue(function (next) {
        $(this).removeClass("active");
        next();
      });
  });
  //  active cursor view button

  //   $(".archive-work-grid li").on("mouseenter", function () {
  //     $(".mouse-pos-list-btn")
  //       .addClass("hover")
  //       .delay(100)
  //       .queue(function (next) {
  //         $(this).removeClass("hover");
  //         next();
  //       });
  //   });
}
function mouse_button() {
  let cursorBtn = $("#mouse-button");
  let cursorSpan = $("#mouse-span");
  let posXSpan = 0;
  let posYSpan = 0;
  let posXBtn = 0;
  let posYBtn = 0;
  let mouseX = 0;
  let mouseY = 0;
  if (document.querySelector("#mouse-button , #mouse-span")) {
    gsap.to({}, 0.0083333333, {
      repeat: -1,
      onRepeat: function () {
        if (document.querySelector(" #mouse-button ")) {
          posXBtn += (mouseX - posXBtn) / 7;
          posYBtn += (mouseY - posYBtn) / 7;
          gsap.set(cursorBtn, {
            css: {
              left: posXBtn,
              top: posYBtn,
            },
          });
        }
        if (document.querySelector("#mouse-span")) {
          posXSpan += (mouseX - posXSpan) / 6;
          posYSpan += (mouseY - posYSpan) / 6;
          gsap.set(cursorSpan, {
            css: {
              left: posXSpan,
              top: posYSpan,
            },
          });
        }
      },
    });
  }
  $(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  $(".mouse-pos-list-image-wrap a").on("mouseenter", function () {
    $("#mouse-button").addClass("active");
  });
  $(".mouse-pos-list-image-wrap a").on("mouseleave", function () {
    $("#mouse-button").removeClass("active");
  });
  // mobile
  $(".work-mobile a").on("mouseenter", function () {
    $("#mouse-button").addClass("active-mobile");
  });
  $(".work-mobile a").on("mouseleave", function () {
    $("#mouse-button").removeClass("active-mobile");
  });

  //span

  $(".mouse-pos-list-image-wrap a").on("mouseenter", function () {
    $("#mouse-span").addClass("active");
  });
  $(".mouse-pos-list-image-wrap a").on("mouseleave", function () {
    $("#mouse-span").removeClass("active");
  });
  //mobile
  $(".work-mobile a").on("mouseenter", function () {
    $("#mouse-span").addClass("active-mobile");
  });
  $(".work-mobile a").on("mouseleave", function () {
    $("#mouse-span").removeClass("active-mobile");
  });

  $(".mouse-pos-list-image-wrap li.visible").on("mouseenter", function () {
    var $elements = $(".mouse-pos-list-image-wrap li.visible");
    var index = $elements.index($(this));
    var count = $(".mouse-pos-list-image li.visible").length;
    // var index =  $(this).index();
    if ($(".float-image-wrap")) {
      gsap.to($(".float-image-wrap"), {
        y: (index * 100) / (count * -1) + "%",
        duration: 0.6,
        ease: Power2.easeInOut,
      });
    }
  });
}
function mouse_main() {
  let cursormain = $("#mouse-main");
  let posXmain = 0;
  let posYmain = 0;
  let mouseX = 0;
  let mouseY = 0;
  if (document.querySelector("#mouse-main")) {
    gsap.to({}, 0.0083333333, {
      repeat: -1,
      onRepeat: function () {
        if (document.querySelector(" #mouse-main")) {
          posXmain += (mouseX - posXmain) / 5;
          posYmain += (mouseY - posYmain) / 5;
          gsap.set(cursormain, {
            css: {
              left: posXmain,
              top: posYmain,
            },
          });
        }
      },
    });
  }
  $(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  // $("a").on("mouseenter", function () {
  //   $("#mouse-main .cursor-outer .cursor-inner").addClass("active");
  // });
  // $("a").on("mouseleave", function () {
  //   $("#mouse-main .cursor-outer .cursor-inner").removeClass("active");
  // });
  //span

  // $(".mouse-pos-list-image-wrap li.visible").on("mouseenter", function () {
  //   var $elements = $(".mouse-pos-list-image-wrap li.visible");
  //   var index = $elements.index($(this));
  //   var count = $(".mouse-pos-list-image li.visible").length;
  //   // var index =  $(this).index();
  //   if ($(".float-image-wrap")) {
  //     gsap.to($(".float-image-wrap"), {
  //       y: (index * 100) / (count * -1) + "%",
  //       duration: 0.6,
  //       ease: Power2.easeInOut,
  //     });
  //   }
  // });
}

function active_job_modal() {
  let jobs = document.querySelectorAll(".job-list li");
  let jobs_detail = document.querySelectorAll(".job-list-detail li");
  let overlay = $(".fixed-nav-back");

  jobs.forEach((element, i) => {
    element.addEventListener("click", function () {
      $(".job-list-detail li").removeClass("active");
      jobs_detail[i].classList.add("active");
      // if ($(".job-list-detail li").hasClass("active")) {
      //   overlay.addClass("active");
      // } else {
      //   overlay.removeClass("active");
      // }
    });
  });
  $(document).on("click", function (e) {
    if ($(e.target).closest(".job-list").length === 0) {
      $(".job-list-detail li").removeClass("active");
    }
  });
}
active_job_modal();
mouse_main();
mouse_button();
mouse_image();
