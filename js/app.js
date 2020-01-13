/*--- SVG STOKE  ANIMATION ---*/
let strokeTl = anime.timeline({
  duration: 100,
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
  duration: 400,
  delay: function(el, i) {
    return i * 100;
  }
});

strokeTl.add({
  targets: ".svg-logo",
  fill: "#fff"
});

/*--- LOGO EXPANSION ANIMATION ---*/
let expandTl = new TimelineMax();

expandTl.delay(3);
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
  startDelay: 4000
});

/*--- ABOUT PAGE SCROLL ANIMATION ---*/
var aboutTl = new TimelineMax();
const aboutController = new ScrollMagic.Controller();
aboutTl.from(".about-title", 0.5, { x: "-200", opacity: 0 });
aboutTl.from(".about-underline", 0.5, { width: 0 });
aboutTl.from(".my-img", 0.5, { y: 50, opacity: 0 });
aboutTl.from(".about-description", 0.5, { y: 50, opacity: 0 }, "=-0.5");
aboutTl.from(
  ".skills, .bar-tag, .container-bar",
  0.5,
  {
    y: 50,
    opacity: 0
  },
  "-=0.5"
);
aboutTl.from(
  ".cpp-bar, .html-bar, .css-bar, .js-bar, .python-bar, .swift-bar, .java-bar",
  0.5,
  { width: 0 }
);
const aboutScene = new ScrollMagic.Scene({
  triggerElement: ".about-page"
})
  .setTween(aboutTl)
  .addTo(aboutController);

/*--- PROJECTS PAGE SCROLL ANIMATION ---*/
var projectsTl = new TimelineMax();
const projectsController = new ScrollMagic.Controller();
projectsTl.from(".projects-title", 0.5, { x: -200, opacity: 0 });
projectsTl.from(".projects-underline", 0.5, { width: 0 });
projectsTl.from(".project-container", 0.5, { y: 50, opacity: 0 });
projectsTl.from(".dots", 0.5, { opacity: 0 });
projectsTl.fromTo(
  ".icon-left, .icon-right",
  2.5,
  {
    y: -100,
    opacity: 0,
    scale: 0
  },
  {
    y: 0,
    opacity: 1,
    scale: 1.5,
    ease: Elastic.easeOut.config(1, 0.3)
  }
);

const projectsScene = new ScrollMagic.Scene({
  triggerElement: ".projects-page"
})
  .setTween(projectsTl)
  .addTo(projectsController);

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
imageGallery(".smallpox-highlight", ".smallpox-preview img");

/*--- CAROUSEL ---*/
new Glider(document.querySelector(".glider"), {
  slidesToshow: 1,
  dots: ".dots",
  rewind: true,
  scrollLock: true,
  scrollLockDelay: 100,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next"
  }
});
