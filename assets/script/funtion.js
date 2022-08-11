const arrayOfColors = ["#0a9396", "#221e40", "#9394a9", "#4ec1bc"];
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
// Check user scrolled
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

// slit word to span

function initTricksWords() {
  // Copyright start
  // © Code by T.RICKS, https://www.tricksdesign.com/
  // You have the license to use this code in your projects but not redistribute it to others
  // Tutorial: https://www.youtube.com/watch?v=xiAqTu4l3-g&ab_channel=TimothyRicks

  // Find all text with .tricks class and break each letter into a span
  var spanWord = document.getElementsByClassName("span-lines");
  for (var i = 0; i < spanWord.length; i++) {
    var wordWrap = spanWord.item(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(
      /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
      '$1<span class="span-line"><span class="span-line-inner">$2</span></span>'
    );
  }
}
initScrolltriggerNav();
initTricksWords();
initLazyLoad();
