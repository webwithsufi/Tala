function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
}

smoothScroll();

let menu = document.querySelector("#nav-part2 ");
let close = document.querySelector("#close i");

let timeline = gsap.timeline();

timeline.to("#full-scr-nav", {
  top: 0,
  duration: 0.4,
});

timeline.from(".a", {
  x: -100,
  stagger: 0.2,
  opacity: 0,
  duration: 0.5,
});

timeline.from("#close", {
  x: 100,
  opacity: 0,
});

timeline.pause();

menu.addEventListener("click", function () {
  timeline.play();
});
close.addEventListener("click", function () {
  timeline.reverse();
});

let tl = gsap.timeline();

tl.from("#page1 h1", {
  x: -100,
  duration: 0.5,
  opacity: 0,
})
  .from("#page1 h2", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: "-0.1",
  })
  .from("#page1 h3", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: "-0.2",
  });

gsap.to("#page2 img", {
  scale: 0.98,
  scrollTrigger: {
    trigger: "#page2 img",
    scroller: "#main",
    start: "top 70%",
    end: "top 5%",
    scrub: 3,
  },
});

gsap.to("#page2 h1", {
  rotateX: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "#main",
    start: "top 65%",
    end: "top 55%",
    scrub: 3,
  },
});

let slide1h1 = document.querySelectorAll("#page6 .slide1-of-h1 h1");

slide1h1.forEach(function (elem) {
  gsap.to(elem, {
    transform: "translateX(-100%)",
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      scrub: 2,
    },
  });
});

let slide2h1 = document.querySelectorAll("#page6 .slide2-of-h1 h1");

slide2h1.forEach(function (elem) {
  gsap.to(elem, {
    transform: "translateX(0%)",
    duration: 1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      scrub: 3,
    },
  });
});

document
  .querySelector("#element1")
  .addEventListener("mousemove", function (detls) {
    document.querySelector("#element1 img").style.opacity = 1;
    document.querySelector("#element1 img").style.left = `${detls.x}px`;
    document.querySelector("#element1 img").style.top = `${detls.y - 250}px`;
  });

document
  .querySelector("#element1")
  .addEventListener("mouseleave", function (detls) {
    document.querySelector("#element1 img").style.opacity = 0;
  });

document
  .querySelector("#element2")
  .addEventListener("mousemove", function (detls) {
    document.querySelector("#element2 img").style.opacity = 1;
    document.querySelector("#element2 img").style.left = `${detls.x}px`;
    document.querySelector("#element2 img").style.top = `${detls.y - 280}px`;
  });

gsap.to("#page5-content img", {
  rotate: "360deg",
  repeat: -1,
  ease: Power0.easeNone,
  duration: 1,
});

document
  .querySelector("#element2")
  .addEventListener("mouseleave", function (detls) {
    document.querySelector("#element2 img").style.opacity = 0;
  });

gsap.to("#page3 #line", {
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    // markers: true,
    start: "top 90%",
    end: "bottom 80%",
    scrub: 2,
  },
  width: "100%",
});

let mangocard = document.querySelector(".mangocard");

document
  .querySelector("#mango h1")
  .addEventListener("mouseenter", function (dets) {
    mangocard.style.opacity = 1;
    mangocard.style.transform = `translate(-50%, -50%) rotate(20deg)`;
    mangocard.style.left = `20%`;
  });

document.querySelector("#mango").addEventListener("mousemove", function (dets) {
  mangocard.style.left = `${dets.x}px`;
});

document
  .querySelector("#mango")
  .addEventListener("mouseleave", function (dets) {
    mangocard.style.opacity = 0;
    mangocard.style.transform = `translate(-50%, -50%) rotate(0deg)`;
    mangocard.style.left = `20%`;
  });

let bananacard = document.querySelector(".bananacard");

document
  .querySelector("#banana h1")
  .addEventListener("mouseenter", function (dets) {
    bananacard.style.opacity = 1;
    bananacard.style.transform = `translate(-50%, -50%) rotate(20deg)`;
    bananacard.style.left = `20%`;
  });

document
  .querySelector("#banana")
  .addEventListener("mousemove", function (dets) {
    bananacard.style.left = `${dets.x}px`;
  });

document
  .querySelector("#banana")
  .addEventListener("mouseleave", function (dets) {
    bananacard.style.opacity = 0;
    bananacard.style.transform = `translate(-50%, -50%) rotate(0deg)`;
    bananacard.style.left = `20%`;
  });

let pinecard = document.querySelector(".pinecard");

document
  .querySelector("#pineapple h1")
  .addEventListener("mouseenter", function (dets) {
    pinecard.style.opacity = 1;
    pinecard.style.transform = `translate(-50%, -50%) rotate(20deg)`;
    pinecard.style.left = `20%`;
  });

document
  .querySelector("#pineapple")
  .addEventListener("mousemove", function (dets) {
    pinecard.style.left = `${dets.x}px`;
  });

document
  .querySelector("#pineapple")
  .addEventListener("mouseleave", function (dets) {
    pinecard.style.opacity = 0;
    pinecard.style.transform = `translate(-50%, -50%) rotate(0deg)`;
    pinecard.style.left = `20%`;
  });

let pithayacard = document.querySelector(".pithayacard");

document
  .querySelector("#pithaya h1")
  .addEventListener("mouseenter", function (dets) {
    pithayacard.style.opacity = 1;
    pithayacard.style.transform = `translate(-50%, -50%) rotate(20deg)`;
    pithayacard.style.left = `20%`;
  });

document
  .querySelector("#pithaya")
  .addEventListener("mousemove", function (dets) {
    pithayacard.style.left = `${dets.x}px`;
  });

document
  .querySelector("#pithaya")
  .addEventListener("mouseleave", function (dets) {
    pithayacard.style.opacity = 0;
    pithayacard.style.transform = `translate(-50%, -50%) rotate(0deg)`;
    pithayacard.style.left = `20%`;
  });
