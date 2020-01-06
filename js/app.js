/*--- SVG STOKE  ANIMATION ---*/
let strokeTl = anime.timeline({
  duration: 150,
  easing: "easeInSine"
});

strokeTl.add({
  targets: ".svg-hero-text path",
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 1125,
  delay: function(el, i) {
    return i * 125;
  }
});

strokeTl.add({
  targets: ".svg-hero-text",
  fill: "#fff"
});

strokeTl.add({
  targets: ".svg-logo path",
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 500,
  delay: function(el, i) {
    return i * 125;
  }
});

strokeTl.add({
  targets: ".svg-logo",
  fill: "#fff"
});

/*--- LOGO EXPANSION ANIMATION ---*/
let expandTl = new TimelineMax();

expandTl.delay(3.8);

expandTl.to(".top-semi-circ", 0.4, { y: "-90px" });
expandTl.to(".bottom-semi-circ", 0.4, { y: "90px" }, "-=0.4");
expandTl.to(".left-triangle", 0.3, { x: "-27px" });
expandTl.to(".right-triangle", 0.3, { x: "27px" }, "-=0.3");

/*--- TYPED DESCRIPTION ANIMATION ---*/
let typed = new Typed(".typed-description", {
  strings: ["Student", "Developer", "Designer", "Techie"],
  smartBackspace: true,
  typeSpeed: 40,
  backSpeed: 40,
  showCursor: false,
  loop: true,
  startDelay: 5000
});

/*--- ABOUT PAGE SCROLL ANIMATION ---*/
var aboutScrollTl = new TimelineMax();
const aboutController = new ScrollMagic.Controller();
aboutScrollTl.from(".about-title", 0.5, { x: "-200", opacity: 0 });
aboutScrollTl.from(".about-underline", 0.5, { width: 0 });
aboutScrollTl.from(".my-img", 0.5, { x: 200, opacity: 0 });
aboutScrollTl.from(".about-description", 0.5, { x: -200, opacity: 0 }, "=-0.5");
aboutScrollTl.from(".skills, .bar-tag, .container-bar", 0.5, {
  y: 100,
  opacity: 0
});
aboutScrollTl.from(
  ".cpp-bar, .html-bar, .css-bar, .js-bar, .python-bar, .swift-bar, .java-bar",
  0.5,
  { width: 0 }
);
const aboutScene = new ScrollMagic.Scene({
  triggerElement: ".about-page",
  triggerHook: "onLeave",
  duration: "80%"
})
  .setPin(".about-page")
  .setTween(aboutScrollTl)
  .addTo(aboutController);

/*--- MANSION SCROLL ANIMATION ---*/
var mansionTl = new TimelineMax();
const mansionController = new ScrollMagic.Controller();
mansionTl.from(".mansion-title", 0.5, { y: 100, opacity: 0 });
mansionTl.from(".mansion-1, .mansion-2, .mansion-3", 0.5, {
  scale: 3,
  opacity: 0
});
mansionTl.to(".mansion-2, .mansion-3", 0.5, { x: 0 });
mansionTl.from(".mansion-4,.mansion-5, .mansion-6", 0.5, {
  y: 100,
  opacity: 0
});

const mansionScene = new ScrollMagic.Scene({
  triggerElement: ".mansion-container",
  triggerHook: "onLeave",
  duration: "80%"
})
  .setPin(".mansion-container")
  .setTween(mansionTl)
  .addTo(mansionController);

/*--- GAMING SCROLL ANIMATION ---*/
var gamingTl = new TimelineMax();
const gamingController = new ScrollMagic.Controller();
gamingTl.from(".gaming-title", 0.5, { y: 100, opacity: 0 });
gamingTl.from(".gaming-1, .gaming-2, .gaming-3", 0.5, {
  scale: 3,
  opacity: 0
});
gamingTl.to(".gaming-2, .gaming-3", 0.5, { x: 0 });
gamingTl.from(".gaming-4,.gaming-5, .gaming-6", 0.5, {
  y: 100,
  opacity: 0
});

const gamingScene = new ScrollMagic.Scene({
  triggerElement: ".gaming-container",
  triggerHook: "onLeave",
  duration: "80%"
})
  .setPin(".gaming-container")
  .setTween(gamingTl)
  .addTo(gamingController);
