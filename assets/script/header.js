function header() {
  var header = gsap.to("#header", { y: "-=300", duration: 0.1, ease: "power2.in", paused: true });
  //fixed header
  ScrollTrigger.create({
    trigger: "#header",
    start: "200px top",
    end: 99999,
    // toggleClass: { className: "scrolled", targets: "#header" },
    onUpdate: ({ progress, direction, isActive }) => {
      if (direction == -1) {
        header.reverse();
      }
      if (direction == 1) {
        header.play();
      } else if (direction == 1 && isActive == true) {
        header.play();
      }
    },
  });

  //   const hamburger = document.querySelector(".hamburger");
  //   let body = document.querySelector("body");
  //   hamburger.addEventListener("click", () => {
  //     hamburger.classList.toggle("active");
  //     body.classList.toggle("fixed");
  //   });
}
// header();

function menu_hamburger() {
  var hamburger = $(".btn-hamburger");
  var hamburger_mobile = $("#menu_mobile");
  var overlay = $(".overlay");

  hamburger.click(function () {
    this.classList.toggle("active");
    document.querySelector("body").classList.toggle("nav-active");
    document.querySelector("body").classList.toggle("fix");
  });
  overlay.click(function () {
    hamburger.removeClass("active");
    $("body").removeClass("nav-active");
  });
  overlay.click(function () {
    this.classList.toggle("active");
  });

  hamburger_mobile.on("click", function (e) {
    document.querySelector(".btn-hamburger").classList.toggle("scrolled");
    hamburger.addClass("active");
    document.querySelector("body").classList.toggle("nav-active");
    e.preventDefault();
    // $("body").css("overflow", "hidden");
  });
}
menu_hamburger();
