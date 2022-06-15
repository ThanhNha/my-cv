// text animation fade in and
// Scrolltrigger Animation : Span Lines Intro Home
if (document.querySelector(".span-lines.animate")) {
  $(".span-lines.animate").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".span-lines.animate .span-line-inner");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions: "play none none reset",
        // markers: true,
        start: "0% 100%",
        end: "100% 0%",
      },
    });
    if (targetElement) {
      tl.from(targetElement, {
        y: "100%",
        stagger: 0.05,
        ease: "power3.out",
        duration: 1,
        delay: 0,
      });
    }
  });
}

if (document.querySelector(".fade-in.animate")) {
  // Scrolltrigger Animation : Fade in
  $(".fade-in.animate").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions: "play none none reset",
        start: "0% 110%",
        end: "100% 0%",
      },
    });
    if (targetElement) {
      tl.from(targetElement, {
        y: "2em",
        opacity: 0,
        ease: "expo.out",
        duration: 1.75,
        delay: 0,
      });
    }
  });
}
if (document.querySelector(".anim1")) {
  gsap.from(".anim1", { duration: 3, y: -40, opacity: 0, ease: "back(6, 0.6)", stagger: 0.1 });
}
