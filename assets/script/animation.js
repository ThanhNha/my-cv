function initScrolltriggerAnimations() {
  //   if (document.querySelector(".footer-wrap")) {
  //     // Scrolltrigger Animation : Footer + hamburger
  //     $(".footer-wrap").each(function (index) {
  //       let triggerElement = $(this);
  //       let targetElementHamburger = $(".btn-hamburger .btn-click");

  //       let tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: triggerElement,
  //           start: "50% 100%",
  //           end: "100% 120%",
  //           scrub: 0,
  //         },
  //       });
  //       tl.from(targetElementHamburger, {
  //         boxShadow: "0px 0px 0px 0px rgb(0, 0, 0)",
  //         ease: "none",
  //       });
  //     });
  //   }

  // Scrolltrigger Animation : Span Lines Intro Home
  if (document.querySelector(".span-lines.animate")) {
    $(".span-lines.animate").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(".span-lines.animate .span-line-inner");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          toggleActions: "play none none reset",
          start: "0% 100%",
          end: "100% 0%",
        },
      });
      if (targetElement) {
        tl.from(targetElement, {
          y: "100%",
          stagger: 0.01,
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

  //   if (document.querySelector(".awwwards-badge")) {
  //     // Scrolltrigger Animation : Awwwards
  //     $(".awwwards-badge").each(function (index) {
  //       let triggerElement = $(this);
  //       let targetElement = $(".awwwards-badge svg:nth-child(1)");

  //       let tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: triggerElement,
  //           start: "0% 100%",
  //           end: "100% 0%",
  //           scrub: 0,
  //         },
  //       });
  //       tl.to(targetElement, {
  //         rotate: -90,
  //         ease: "none",
  //       });
  //     });
  //   }
}
initScrolltriggerAnimations();

function initTricksWords() {
  // Copyright start
  // © Code by T.RICKS, https://www.tricksdesign.com/
  // You have the license to use this code in your projects but not redistribute it to others
  // Tutorial: https://www.youtube.com/watch?v=xiAqTu4l3-g&ab_channel=TimothyRicks

  // Find all text with .tricks class and break each letter into a span
  var spanWord = document.getElementsByClassName("span-lines");
  for (var i = 0; i < spanWord.length; i++) {
    var wordWrap = spanWord.item(i);
    console.log(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(
      /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
      // '$1<span class="span-line"><span class="span-line-inner">$2</span></span>'
      `$1<span class="inline-block span-line" data-scroll data-scroll-delay="${
        i + 1
      }" data-scroll-speed="5">$2</span>`
    );
  }
}
// initTricksWords();

function initTimeZone() {
  // Time zone
  // https://stackoverflow.com/questions/39418405/making-a-live-clock-in-javascript/67149791#67149791
  // https://stackoverflow.com/questions/8207655/get-time-of-specific-timezone
  // https://stackoverflow.com/questions/63572780/how-to-update-intl-datetimeformat-with-new-date

  const timeSpan = document.querySelector("#timeSpan");

  const optionsTime = {
    timeZone: "Europe/Amsterdam",
    timeZoneName: "short",
    // year: 'numeric',
    // month: 'numeric',
    // day: 'numeric',
    hour: "2-digit",
    hour12: "true",
    minute: "numeric",
    // second: 'numeric',
  };

  const formatter = new Intl.DateTimeFormat([], optionsTime);
  updateTime();
  setInterval(updateTime, 1000);

  function updateTime() {
    const dateTime = new Date();
    const formattedDateTime = formatter.format(dateTime);
    timeSpan.textContent = formattedDateTime;
  }
}

/**
 * Lazy Load
 */
function initLazyLoad() {
  // https://github.com/locomotivemtl/locomotive-scroll/issues/225
  // https://github.com/verlok/vanilla-lazyload
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

// initTimeZone();
// initLazyLoad();
