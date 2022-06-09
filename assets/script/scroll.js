const arrayOfColors = [
  "#0a9396",
  "#005f73",
  "#ae2012",
  "#3d405b",
  "#003049",
  "#bc6c25",
  "#ff006e",
  "#ef476f",
  "#1982c4",
  "#ee964b",
  "#0ead69",
  "#390099",
  "#f6aa1c",
  "#54101d",
  "#2b2c28",
  "#85c7f2",
  "#e15a97",
  "#2b70e3",
  "#b36a5e",
];
function getRandomColor() {
  const arrayLength = arrayOfColors.length;
  const randomValue = Math.random() * arrayLength;
  const roundedNumber = Math.floor(randomValue);
  const color = arrayOfColors[roundedNumber];
  return color;
}

function initLazyLoad() {
  // https://github.com/locomotivemtl/locomotive-scroll/issues/225
  // https://github.com/verlok/vanilla-lazyload
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}
initLazyLoad();

function initSmoothScroll() {
  scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    smartphone: {
      smooth: true,
    },
  });
  scroll.on("call", (value, way, obj) => {
    if (value === "randomizeTextColor") {
      if (way === "enter") {
        obj.el.style.color = getRandomColor();
      }
    } else if (value === "toggleBackToTop") {
      if (way === "enter") {
        backToTop.classList.add(opacityClass, visibilityClass);
      } else {
        backToTop.classList.remove(opacityClass, visibilityClass);
      }
    }
  });

  window.onresize = scroll.update();

  scroll.on("scroll", () => ScrollTrigger.update());

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.defaults({
    scroller: document.querySelector(".main"),
  });

  /**
   * Remove Old Locomotive Scrollbar
   */

  const scrollbar = document.querySelectorAll(".c-scrollbar");

  if (scrollbar.length > 1) {
    scrollbar[0].remove();
  }

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => scroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function initScrollLetters() {
  // Scrolling Letters Both Direction
  // https://codepen.io/GreenSock/pen/rNjvgjo
  // Fixed example with resizing
  // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010
  gsap.registerPlugin(ScrollTrigger);

  let direction = 1; // 1 = forward, -1 = backward scroll

  const roll1 = roll(".big-name .name-wrap", { duration: 20 }),
    roll2 = roll(".rollingText02", { duration: 10 }, true),
    scroll = ScrollTrigger.create({
      trigger: document.querySelector(".main"),
      onUpdate(self) {
        if (self.direction !== direction) {
          direction *= -1;
          gsap.to([roll1, roll2], { timeScale: direction, overwrite: true });
        }
      },
    });

  // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
  function roll(targets, vars, reverse) {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
        },
      }),
      elements = gsap.utils.toArray(targets),
      clones = elements.map((el) => {
        let clone = el.cloneNode(true);
        el.parentNode.appendChild(clone);
        return clone;
      }),
      positionClones = () =>
        elements.forEach((el, i) =>
          gsap.set(clones[i], {
            position: "absolute",
            overwrite: false,
            top: el.offsetTop,
            left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
          })
        );
    positionClones();
    elements.forEach((el, i) =>
      tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0)
    );
    window.addEventListener("resize", () => {
      let time = tl.totalTime(); // record the current time
      tl.totalTime(0); // rewind and clear out the timeline
      positionClones(); // reposition
      tl.totalTime(time); // jump back to the proper time
    });
    return tl;
  }
}

function initScrolltriggerNav() {
  ScrollTrigger.create({
    start: "top -30%",
    onUpdate: (self) => {
      $(".btn-hamburger").addClass("scrolled");
    },
    onLeaveBack: () => {
      $(".btn-hamburger").removeClass("scrolled");
    },
  });
}

initScrollLetters();

initSmoothScroll();

initScrolltriggerNav();
