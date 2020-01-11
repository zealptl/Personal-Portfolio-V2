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
aboutScrollTl.from(".my-img", 0.5, { x: -50, opacity: 0 });
aboutScrollTl.from(".about-description", 0.5, { x: -50, opacity: 0 }, "=-0.5");
aboutScrollTl.from(
  ".skills, .bar-tag, .container-bar",
  0.5,
  {
    x: 50,
    opacity: 0
  },
  "-=0.5"
);
aboutScrollTl.from(
  ".cpp-bar, .html-bar, .css-bar, .js-bar, .python-bar, .swift-bar, .java-bar",
  0.5,
  { width: 0 }
);
const aboutScene = new ScrollMagic.Scene({
  triggerElement: ".about-page"
})
  .setTween(aboutScrollTl)
  .addTo(aboutController);

/*--- IMAGE GALLERY ---*/
function imageGallery(projectHighlight, projectPreview) {
  var hightlight = document.querySelector(projectHighlight);
  var previews = document.querySelectorAll(projectPreview);

  previews.forEach(preview => {
    preview.addEventListener("click", function() {
      var smallSrc = this.src;
      hightlight.src = smallSrc;
      previews.forEach(preview => preview.classList.remove("project-active"));
      preview.classList.add("project-active");
    });
  });
}

imageGallery(".mansion-highlight", ".mansion-preview img");
imageGallery(".gaming-highlight", ".gaming-preview img");
imageGallery(".design-highlight", ".design-preview img");
imageGallery(".living-highlight", ".living-preview img");
imageGallery(".bushwick-highlight", ".bushwick-preview img");
imageGallery(".bqx-highlight", ".bqx-preview img");
