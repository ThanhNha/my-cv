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

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      hamburger.addClass("scrolled");
    } else {
      hamburger.removeClass("scrolled");
    }
  });
  hamburger.click(function () {
    document.querySelector("body").classList.toggle("nav-active");
  });
  hamburger.click(function () {
    this.classList.toggle("active");
  });

  //   hamburger.on("click", function (e) {
  //     e.preventDefault();
  //     $("html, body").animate({ scrollTop: 0 }, "300");
  //   });
}
menu_hamburger();
