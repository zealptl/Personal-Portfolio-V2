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
