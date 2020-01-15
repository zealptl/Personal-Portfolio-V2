/*--- SVG STOKE  ANIMATION ---*/
let logoTl = anime.timeline({
  duration: 100,
  easing: "easeInSine"
});

logoTl.add({
  targets: ".svg-hero-text path",
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 1125,
  delay: function(el, i) {
    return i * 125;
  }
});

logoTl.add({
  targets: ".svg-hero-text",
  fill: "#fff"
});

logoTl.add({
  targets: ".svg-logo",
  duration: 1000,
  translateY: ["-75%", "-15%"],
  translateX: ["-50%", "-50%"],
  opacity: [0, 1],
  easing: "easeOutBack"
});

logoTl.add({
  targets: ".top-semi-circ",
  duration: 300,
  translateY: "-90px"
});

logoTl.add(
  {
    targets: ".bottom-semi-circ",
    duration: 300,
    translateY: "90px"
  },
  "-=300"
);

logoTl.add({
  targets: ".left-triangle",
  duration: 250,
  translateX: "-27px"
});

logoTl.add(
  {
    targets: ".right-triangle",
    duration: 250,
    translateX: "27px"
  },
  "-=250"
);

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
aboutTl.from(".about-container", 0.8, {
  y: 100,
  opacity: 0,
  ease: Back.easeOut.config(1.7)
});
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
projectsTl.from(".project-container", 0.8, {
  y: 100,
  opacity: 0,
  ease: Back.easeOut.config(1.7)
});
projectsTl.from(".dots", 0.5, { opacity: 0 });
projectsTl.fromTo(
  ".icon-left, .icon-right",
  0.8,
  {
    y: -100,
    opacity: 0,
    scale: 0
  },
  {
    y: 0,
    opacity: 1,
    scale: 1.5,
    ease: Back.easeOut.config(1.7)
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
