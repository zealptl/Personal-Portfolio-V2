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
aboutScrollTl.from("h2", 0.5, { x: "-200", opacity: 0 });
aboutScrollTl.from("span", 0.5, { width: 0 });
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
mansionTl.from("h3", 0.5, { y: 100, opacity: 0 });
mansionTl.from(".project-imgs", 0.5, { scale: 3, opacity: 0 });
mansionTl.to(".mansion-img2", 0.5, { x: "-110%" });
mansionTl.to(".mansion-img3", 0.5, { x: "110%" }, "-=0.5");
mansionTl.from(".mansion-img4, .mansion-img5, .mansion-img6", 0.5, {
  opacity: 0
});
const mansionScene = new ScrollMagic.Scene({
  triggerElement: ".project",
  triggerHook: "onLeave",
  duration: "80%"
})
  .setPin(".project")
  .setTween(mansionTl)
  .addTo(mansionController);
